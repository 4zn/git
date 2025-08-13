import { v4 as uuidv4 } from 'uuid';
const rooms = {};
export function generateRoomCode() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
        code += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    if (rooms[code])
        return generateRoomCode();
    return code;
}
export function getOrCreateRoom(code) {
    if (code && rooms[code])
        return rooms[code];
    const newCode = code ?? generateRoomCode();
    if (!rooms[newCode]) {
        rooms[newCode] = {
            code: newCode,
            players: {},
            currentEpisodeId: null,
            choiceVotes: {}
        };
    }
    return rooms[newCode];
}
export function addPlayerToRoom(roomCode, displayName) {
    const room = getOrCreateRoom(roomCode);
    const player = { id: uuidv4(), displayName, characterId: null };
    room.players[player.id] = player;
    return player;
}
export function removePlayerFromRoom(roomCode, playerId) {
    const room = rooms[roomCode];
    if (!room)
        return;
    delete room.players[playerId];
    delete room.choiceVotes[playerId];
    if (Object.keys(room.players).length === 0) {
        delete rooms[roomCode];
    }
}
export function setPlayerCharacter(roomCode, playerId, characterId) {
    const room = rooms[roomCode];
    if (!room)
        return;
    const player = room.players[playerId];
    if (!player)
        return;
    player.characterId = characterId;
}
export function listRooms() {
    return Object.values(rooms);
}
export function getRoom(code) {
    return rooms[code];
}
export function startStory(roomCode, episodeId) {
    const room = rooms[roomCode];
    if (!room)
        return;
    room.currentEpisodeId = episodeId;
    room.choiceVotes = {};
}
export function voteChoice(roomCode, playerId, choiceId) {
    const room = rooms[roomCode];
    if (!room)
        return;
    room.choiceVotes[playerId] = choiceId;
}
export function resetVotes(roomCode) {
    const room = rooms[roomCode];
    if (!room)
        return;
    room.choiceVotes = {};
}
