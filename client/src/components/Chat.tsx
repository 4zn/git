import { useEffect, useRef, useState } from 'react';
import { getSocket } from '../socket';

export default function Chat() {
  const [messages, setMessages] = useState<{message: string; from: string; at: number}[]>([]);
  const [text, setText] = useState('');
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const socket = getSocket();
    const onMsg = (m: {message: string; from: string; at: number}) => setMessages(prev => [...prev, m]);
    socket.on('chat_message', onMsg);
    return () => { socket.off('chat_message', onMsg); };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function send() {
    const displayName = localStorage.getItem('displayName') || 'Гость';
    if (!text.trim()) return;
    getSocket().emit('chat_message', { message: text.trim(), from: displayName });
    setText('');
  }

  return (
    <div className="flex flex-col h-80">
      <div className="font-semibold mb-2">Чат</div>
      <div className="flex-1 overflow-auto space-y-1 mb-2 bg-zinc-950 border border-zinc-800 rounded p-2">
        {messages.map((m, idx) => (
          <div key={idx} className="text-sm"><span className="text-zinc-400">[{new Date(m.at).toLocaleTimeString()}]</span> <span className="font-semibold">{m.from}:</span> {m.message}</div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex gap-2">
        <input className="flex-1 bg-zinc-900 border border-zinc-800 rounded px-2 py-1" value={text} onChange={e => setText(e.target.value)} placeholder="Сообщение" />
        <button className="button-primary" onClick={send}>Отправить</button>
      </div>
    </div>
  );
}