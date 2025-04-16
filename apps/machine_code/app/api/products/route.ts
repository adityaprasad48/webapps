// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  await connectDB();
  const { name, stock } = await req.json();

  if (!name || typeof stock !== 'number') {
    return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
  }

  const product = await Product.create({ name, stock });
  return NextResponse.json(product);
}

// rest of the project remains the same
