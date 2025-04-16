// lib/socket.ts
import { Server } from 'socket.io';

let io: Server;

export function initIO(server: any) {
  io = new Server(server, {
    path: '/socket.io',
    cors: {
      origin: '*',
    },
  });
  return io;
}

export { io };