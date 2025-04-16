
import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/mongodb';
import Customer from '../../../models/Customer';

export async function GET() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch customers' }, { status: 500 });
  }
}
