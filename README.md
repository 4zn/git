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

## Production

### Docker (recommended)
```bash
docker build -t eclipse-legacy .
docker run -p 4000:4000 --name eclipse-legacy --restart unless-stopped eclipse-legacy
```
Or with compose:
```bash
docker compose up --build -d
```
The app is served at http://<server>:4000

### Bare metal
```bash
npm run build
npm run start
```

## Android App (WebView wrapper, minSdk 16)
Path: `android-app/`

- Configure server URL in `android-app/app/build.gradle.kts`:
```kotlin
buildConfigField("String", "SERVER_URL", '"http://<server>:4000"')
```
- Build APK:
```bash
cd android-app
./gradlew assembleDebug
```
- Install APK: `adb install -r app/build/outputs/apk/debug/app-debug.apk`

## PWA Install (modern Android)
Open http://<server>:4000 in Chrome and choose Install App.

## Legal
This is a fan-built, original superhero-themed experience. All character names, factions, and story content here are original. No proprietary characters, names, or logos are used.