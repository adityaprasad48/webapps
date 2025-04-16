import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get('file');

  if (!file) {
    return new Response(JSON.stringify({ message: 'No file name provided' }), {
      status: 400,
    });
  }

  const videoPath = path.join(process.cwd(), 'public', 'uploads', path.basename(file));

  if (!fs.existsSync(videoPath)) {
    return new Response(JSON.stringify({ message: 'File not found' }), { status: 404 });
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.get('range');

  if (!range) {
    // No range header: return full video
    return new Response(fs.createReadStream(videoPath), {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': fileSize.toString(),
        'Accept-Ranges': 'bytes',
      },
    });
  }

  // Parse Range: e.g., "bytes=500000-"
  const parts = range.replace(/bytes=/, '').split('-');
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

  const chunkSize = end - start + 1;

  const fileStream = fs.createReadStream(videoPath, { start, end });

  return new Response(fileStream as any, {
    status: 206,
    headers: {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize.toString(),
      'Content-Type': 'video/mp4',
    },
  });
}
