Eclipse Legacy Android (WebView Wrapper)

Overview
- This Android app is a minimal WebView shell that loads the multiplayer web client from your Node server. It supports devices down to Android 4.1 (API 16).

Configure server URL
- Edit `app/build.gradle.kts` and add the following field to `defaultConfig` (replace LOCAL_IP with your server IP or domain):

```kotlin
defaultConfig {
    // ... existing code ...
    buildConfigField("String", "SERVER_URL", '"http://LOCAL_IP:4000"')
}
```

- Example for local Wi‑Fi testing: if your PC has IP 192.168.1.50, use `http://192.168.1.50:4000`.
- Ensure the server hosts both API/WebSocket and the built client on the same origin.

Build APK
- Install Android SDK/NDK/Java and set ANDROID_HOME / JAVA_HOME.
- From `android-app/` run:
```bash
./gradlew assembleDebug
```
- The APK will be at `app/build/outputs/apk/debug/app-debug.apk`.

Install APK
- Enable “Install from unknown sources” on the device.
- Transfer the APK to the device and install it, or use `adb install -r app-debug.apk`.

Run multiplayer server
- From project root:
```bash
npm run build
npm run start
```
- The server will serve the client at `http://<server>:4000`.
- Open the Android app. It will load the configured `SERVER_URL`.

Play with friends
- Ensure your server is reachable from the internet:
  - Option A: Port forward TCP 4000 on your router to your machine.
  - Option B: Deploy to a VPS or PaaS (Render, Railway, Fly.io). Use Node 18+.
- Share your `SERVER_URL` domain/IP with friends. All players connect to the same server; create or join the same room code.

Notes for very old devices
- Android 4.1 WebView lacks some modern features. The app enables JS and DOM storage, and Socket.IO falls back to HTTP long polling.
- For HTTPS-only networks, use a valid certificate and `https://` for `SERVER_URL`.