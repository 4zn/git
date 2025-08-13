import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Welcome from './pages/Welcome';
import HeroSelect from './pages/HeroSelect';
import Lobby from './pages/Lobby';
import Story from './pages/Story';

export default function App() {
  return (
    <div className="min-h-full flex flex-col bg-gradient-to-b from-black via-zinc-950 to-black">
      <header className="p-4 flex items-center justify-between border-b border-zinc-800">
        <Link to="/" className="text-xl font-bold">Eclipse Legacy</Link>
        <nav className="space-x-3 text-sm text-zinc-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/select" className="hover:text-white">Heroes</Link>
          <Link to="/lobby" className="hover:text-white">Lobby</Link>
          <Link to="/story" className="hover:text-white">Story</Link>
        </nav>
      </header>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/select" element={<HeroSelect />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/story" element={<Story />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}