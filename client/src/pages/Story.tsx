import { useEffect, useState } from 'react';
import { getSocket } from '../socket';

type Episode = {
  id: string;
  title: string;
  synopsis: string;
  narrative: string;
  choices: { id: string; text: string; outcomeSummary: string; nextEpisodeId: string | null }[];
};

export default function Story() {
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [votes, setVotes] = useState<Record<string, string>>({});

  useEffect(() => {
    const socket = getSocket();
    const onStoryUpdate = ({ currentEpisode, choiceVotes }: { currentEpisode: Episode; choiceVotes: Record<string, string>}) => {
      setEpisode(currentEpisode);
      setVotes(choiceVotes);
    };
    const onVoteUpdate = ({ choiceVotes }: { choiceVotes: Record<string, string>}) => setVotes(choiceVotes);
    socket.on('story_update', onStoryUpdate);
    socket.on('vote_update', onVoteUpdate);
    return () => { socket.off('story_update', onStoryUpdate); socket.off('vote_update', onVoteUpdate); };
  }, []);

  function choose(choiceId: string) {
    const socket = getSocket();
    socket.emit('story_choice', { choiceId });
  }

  function advance() {
    const socket = getSocket();
    socket.emit('advance_story');
  }

  if (!episode) {
    return <div className="text-zinc-400">Ожидание начала истории...</div>;
  }

  const voteCounts: Record<string, number> = {};
  Object.values(votes).forEach(cid => { voteCounts[cid] = (voteCounts[cid] ?? 0) + 1; });

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="card">
        <div className="text-sm text-zinc-400">Эпизод {episode.id}</div>
        <h2 className="text-2xl font-bold mb-2">{episode.title}</h2>
        <p className="text-zinc-300 whitespace-pre-wrap">{episode.narrative}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {episode.choices.map(c => (
          <button key={c.id} className="card text-left hover:border-eclipse-600" onClick={() => choose(c.id)}>
            <div className="font-semibold">{c.text}</div>
            <div className="text-xs text-zinc-400 mt-1">Голоса: {voteCounts[c.id] ?? 0}</div>
            <div className="text-xs text-zinc-500 mt-2">{c.outcomeSummary}</div>
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button className="button-primary" onClick={advance}>Продолжить</button>
      </div>
    </div>
  );
}