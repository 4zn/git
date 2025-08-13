# Eclipse Legacy: New Dawn

An online, mobile-friendly narrative RPG inspired by social story games, reimagined with original superhero themes. Team up in real time, choose your path, and shape the fate of Helios City under the looming Umbral Eclipse.

Note: Characters and factions are original creations in a broadly "superhero" style. They are not affiliated with or derived from Marvel or DC intellectual property.

## Tech Stack
- Client: React + TypeScript + Vite + Tailwind CSS + Socket.IO client
- Server: Node.js + TypeScript + Express + Socket.IO

## Features
- Real-time rooms/lobbies, presence, and chat
- Cooperative story progression with branching choices
- Hero roster with unique powers and origins
- Mobile-first UI

## Quick Start

1) Install dependencies
```bash
npm install
npm --prefix server install
npm --prefix client install
```

2) Run development servers (client + server)
```bash
npm run dev
```
- Client dev server: http://localhost:5173
- API/WebSocket server: http://localhost:4000

3) Build
```bash
npm run build
```

## Directory Structure
- `server/`: API + WebSocket + game state
- `client/`: React app
- `docs/`: Design notes and story bible (optional)

## Legal
This is a fan-built, original superhero-themed experience. All character names, factions, and story content here are original. No proprietary characters, names, or logos are used.