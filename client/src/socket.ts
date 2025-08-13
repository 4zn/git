import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

function getBaseUrl(): string {
  if (import.meta.env.DEV) {
    return 'http://localhost:4000';
  }
  return window.location.origin;
}

export function getSocket(): Socket {
  if (!socket) {
    socket = io(getBaseUrl());
  }
  return socket;
}