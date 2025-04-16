// middleware/socket-server.ts
// Only for development preview, otherwise use custom server
import { NextRequest } from 'next/server';
import { initIO } from '@/lib/socket';

export function middleware(req: NextRequest) {
  // no-op for now, or place WebSocket server logic if using custom server
  return new Response(null, { status: 204 });
}