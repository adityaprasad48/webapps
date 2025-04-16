import { connectDB } from '@/lib/db';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';
import { io } from '@/lib/socket';

export async function POST(req: Request) {
  await connectDB();
  const { id } = await req.json();
  const product = await Product.findById(id);
  product.stock++;
  await product.save();

  io.emit('inventory-update', product);

  return NextResponse.json({ success: true });
}