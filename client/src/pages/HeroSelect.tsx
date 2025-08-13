import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSocket } from '../socket';

type Character = {
  id: string;
  codename: string;
  realName: string;
  faction: string;
  origin: string;
  biography: string;
  role: string;
  abilities: { id: string; name: string; description: string; tags: string[] }[];
  attributes: { power: number; agility: number; resilience: number; intellect: number; mysticism: number };
};

export default function HeroSelect() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [roomState, setRoomState] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/api/characters').then(r => r.json()).then(d => setCharacters(d.characters));
    const socket = getSocket();
    const onRoomUpdate = (state: any) => setRoomState(state);
    socket.on('room_update', onRoomUpdate);
    return () => { socket.off('room_update', onRoomUpdate); };
  }, []);

  function claimHero() {
    if (!selectedId) return;
    const socket = getSocket();
    socket.emit('select_hero', { characterId: selectedId });
    navigate('/lobby');
  }

  const takenIds = new Set<string>(Object.values(roomState?.players ?? {}).map((p: any) => p.characterId).filter(Boolean));

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Выбор Героя</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((c) => {
          const taken = takenIds.has(c.id);
          const isSelected = selectedId === c.id;
          return (
            <button
              key={c.id}
              disabled={taken}
              onClick={() => setSelectedId(c.id)}
              className={`card text-left ${taken ? 'opacity-40 cursor-not-allowed' : 'hover:border-eclipse-600'} ${isSelected ? 'border-eclipse-600' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-lg font-bold">{c.codename}</div>
                  <div className="text-xs text-zinc-400">{c.realName} · {c.role}</div>
                </div>
                <div className="text-xs px-2 py-1 bg-zinc-800 rounded uppercase">{c.faction}</div>
              </div>
              <p className="text-sm text-zinc-300 mb-2">{c.origin}</p>
              <div className="text-xs text-zinc-400">Способности: {c.abilities.map(a => a.name).join(', ')}</div>
            </button>
          );
        })}
      </div>
      <div className="flex gap-2">
        <button className="button-primary" onClick={claimHero} disabled={!selectedId}>Подтвердить</button>
        <button className="px-4 py-2 border border-zinc-700 rounded" onClick={() => navigate('/lobby')}>Позже</button>
      </div>
    </div>
  );
}