import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';



const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

console.log('key_id', process.env.key_id);

export async function GET() {
 return NextResponse.json({ message: 'Hello from Razorpay API' });
}

export async function POST(request: NextRequest) {
 const { amount, currency } = (await request.json()) as {
  amount: string;
  currency: string;
 };

 const options = {
  amount: amount,
  currency: currency,
  receipt: 'rcp1',
 };

 const order = await razorpay.orders.create(options);
 console.log(order);
 return NextResponse.json({ orderId: order.id }, { status: 200 });
}