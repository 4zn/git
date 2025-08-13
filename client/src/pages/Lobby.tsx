import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSocket } from '../socket';
import Chat from '../components/Chat';

export default function Lobby() {
  const [room, setRoom] = useState<any>(null);
  const [episodeId, setEpisodeId] = useState('ep-1');
  const navigate = useNavigate();

  useEffect(() => {
    const socket = getSocket();
    const onRoomUpdate = (state: any) => setRoom(state);
    socket.on('room_update', onRoomUpdate);
    return () => { socket.off('room_update', onRoomUpdate); };
  }, []);

  function startStory() {
    const socket = getSocket();
    socket.emit('start_story', { episodeId });
    navigate('/story');
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold">Комната</div>
              <div className="text-zinc-400 text-sm">Код: {room?.code || '...'}</div>
            </div>
            <div className="flex gap-2 items-center">
              <select className="bg-zinc-900 border border-zinc-800 rounded px-2 py-1" value={episodeId} onChange={e => setEpisodeId(e.target.value)}>
                <option value="ep-1">Эпизод 1: Новый Рассвет</option>
                <option value="ep-2">Эпизод 2</option>
                <option value="ep-3">Эпизод 3</option>
              </select>
              <button className="button-primary" onClick={startStory}>Начать</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="text-lg font-semibold mb-2">Игроки</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.values(room?.players ?? {}).map((p: any) => (
              <div key={p.id} className="bg-zinc-900 border border-zinc-800 rounded px-3 py-2">
                <div className="font-semibold">{p.displayName}</div>
                <div className="text-xs text-zinc-400">Герой: {p.characterId || 'не выбран'}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <Chat />
      </div>
    </div>
  );
}