import { NextResponse } from 'next/server';
import Feedback from '@/models/Feedback';
import { connectDB } from '@/lib/mongodb';

export async function POST(req: Request) {
  await connectDB();
  const { customerId, message, rating } = await req.json();

  if (!customerId || !message || typeof rating !== 'number') {
    return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
  }

  const feedback = await Feedback.create({ customerId, message, rating });
  return NextResponse.json(feedback);
}
