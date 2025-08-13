import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import { characters } from './data/characters.js';
import { storyEpisodes } from './data/story.js';
import { addPlayerToRoom, getOrCreateRoom, getRoom, listRooms, removePlayerFromRoom, resetVotes, setPlayerCharacter, startStory, voteChoice } from './game/state.js';
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.get('/api/characters', (_req, res) => {
    res.json({ characters });
});
app.get('/api/story/episodes', (_req, res) => {
    const slim = storyEpisodes.map(ep => ({
        id: ep.id,
        title: ep.title,
        synopsis: ep.synopsis
    }));
    res.json({ episodes: slim });
});
app.get('/api/story/episode/:id', (req, res) => {
    const ep = storyEpisodes.find(e => e.id === req.params.id);
    if (!ep)
        return res.status(404).json({ error: 'Not found' });
    res.json({ episode: ep });
});
app.get('/api/rooms', (_req, res) => {
    const rooms = listRooms().map((r) => ({
        code: r.code,
        players: Object.values(r.players).map(p => ({ id: p.id, displayName: p.displayName, characterId: p.characterId })),
        currentEpisodeId: r.currentEpisodeId
    }));
    res.json({ rooms });
});
// Serve built client for same-origin hosting
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, '../../client/dist');
app.use(express.static(clientDist));
app.get('*', (req, res) => {
    // Only fall back for non-API, non-socket paths
    if (req.path.startsWith('/api') || req.path.startsWith('/socket.io')) {
        return res.status(404).end();
    }
    res.sendFile(path.join(clientDist, 'index.html'));
});
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: true,
        credentials: true
    }
});
io.on('connection', (socket) => {
    let roomCode = null;
    let playerId = null;
    socket.on('join_room', ({ desiredRoomCode, displayName }) => {
        const room = getOrCreateRoom(desiredRoomCode);
        const player = addPlayerToRoom(room.code, displayName);
        roomCode = room.code;
        playerId = player.id;
        socket.join(room.code);
        io.to(room.code).emit('room_update', getRoom(room.code));
        socket.emit('joined', { roomCode: room.code, player });
    });
    socket.on('select_hero', ({ characterId }) => {
        if (!roomCode || !playerId)
            return;
        setPlayerCharacter(roomCode, playerId, characterId);
        io.to(roomCode).emit('room_update', getRoom(roomCode));
    });
    socket.on('chat_message', ({ message, from }) => {
        if (!roomCode)
            return;
        io.to(roomCode).emit('chat_message', { message, from, at: Date.now() });
    });
    socket.on('start_story', ({ episodeId }) => {
        if (!roomCode)
            return;
        startStory(roomCode, episodeId);
        resetVotes(roomCode);
        const ep = storyEpisodes.find(e => e.id === episodeId);
        io.to(roomCode).emit('story_update', { currentEpisode: ep, choiceVotes: {} });
    });
    socket.on('story_choice', ({ choiceId }) => {
        if (!roomCode || !playerId)
            return;
        voteChoice(roomCode, playerId, choiceId);
        const room = getRoom(roomCode);
        io.to(roomCode).emit('vote_update', { choiceVotes: room?.choiceVotes ?? {} });
    });
    socket.on('advance_story', () => {
        if (!roomCode)
            return;
        const room = getRoom(roomCode);
        if (!room || !room.currentEpisodeId)
            return;
        const current = storyEpisodes.find(e => e.id === room.currentEpisodeId);
        if (!current)
            return;
        const voteCounts = {};
        Object.values(room.choiceVotes).forEach(cid => { voteCounts[cid] = (voteCounts[cid] ?? 0) + 1; });
        const top = Object.entries(voteCounts).sort((a, b) => b[1] - a[1])[0];
        const winningChoiceId = top ? top[0] : current.choices[0].id;
        const winningChoice = current.choices.find(c => c.id === winningChoiceId);
        if (winningChoice.nextEpisodeId) {
            startStory(room.code, winningChoice.nextEpisodeId);
            resetVotes(room.code);
            const next = storyEpisodes.find(e => e.id === winningChoice.nextEpisodeId);
            io.to(room.code).emit('story_update', { currentEpisode: next, choiceVotes: {} });
        }
        else {
            // End of season
            startStory(room.code, current.id);
            resetVotes(room.code);
            io.to(room.code).emit('story_update', { currentEpisode: { ...current, narrative: current.narrative + '\n\nThe curtain falls on Season One.' }, choiceVotes: {} });
        }
    });
    socket.on('disconnect', () => {
        if (roomCode && playerId) {
            removePlayerFromRoom(roomCode, playerId);
            io.to(roomCode).emit('room_update', getRoom(roomCode));
        }
    });
});
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on http://localhost:${PORT}`);
});
