import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSocket } from '../socket';

export default function Welcome() {
  const [displayName, setDisplayName] = useState(localStorage.getItem('displayName') || '');
  const [desiredRoomCode, setDesiredRoomCode] = useState('');
  const [status, setStatus] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const socket = getSocket();
    const onJoined = ({ roomCode }: { roomCode: string }) => {
      localStorage.setItem('roomCode', roomCode);
      navigate('/select');
    };
    socket.on('joined', onJoined);
    return () => { socket.off('joined', onJoined); };
  }, [navigate]);

  function handleJoin() {
    if (!displayName.trim()) { setStatus('Введите имя.'); return; }
    localStorage.setItem('displayName', displayName.trim());
    const socket = getSocket();
    socket.emit('join_room', { desiredRoomCode: desiredRoomCode.trim() || undefined, displayName: displayName.trim() });
    setStatus('Подключение...');
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div className="card">
        <h1 className="text-2xl font-bold mb-2">Новый Рассвет</h1>
        <p className="text-zinc-400 mb-4">Создайте комнату или присоединитесь к существующей, чтобы играть вместе онлайн.</p>
        <div className="space-y-3">
          <input className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2" placeholder="Ваше имя" value={displayName} onChange={e => setDisplayName(e.target.value)} />
          <input className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2" placeholder="Код комнаты (опционально)" value={desiredRoomCode} onChange={e => setDesiredRoomCode(e.target.value.toUpperCase())} />
          <button className="button-primary w-full" onClick={handleJoin}>Войти</button>
          {status && <p className="text-sm text-zinc-400">{status}</p>}
        </div>
      </div>
      <div className="text-xs text-zinc-500">
        Примечание: Все персонажи и фракции — оригинальные, в духе супергеройского жанра.
      </div>
    </div>
  );
}