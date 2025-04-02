import { NextResponse } from 'next/server';


const data = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
  { id: 7, name: 'Product 7' },
  { id: 8, name: 'Product 8' },
  { id: 9, name: 'Product 9' },
  { id: 10, name: 'Product 10' },
  // add 10 more products
  { id: 11, name: 'Product 11' },
  { id: 12, name: 'Product 12' },
  { id: 13, name: 'Product 13' },
  { id: 14, name: 'Product 14' },
  { id: 15, name: 'Product 15' },
  { id: 16, name: 'Product 16' },
  { id: 17, name: 'Product 17' },
  { id: 18, name: 'Product 18' },
  { id: 19, name: 'Product 19' },
  { id: 20, name: 'Product 20' },

]
// http://localhost:3000/observer/api : get all products
// http://localhost:3000/observer/api?id=1 : get product with id 1
// http://localhost:3000/observer/api?offset=0&limit=5 : get first 5 products
// http://localhost:3000/observer/api?offset=5&limit=5 : get next 5 products



export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (id) {
    const product = data.find(product => product.id === parseInt(id, 10));
    if (product) {
      return NextResponse.json(product);
    } else {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
  }

  const offset = parseInt(searchParams.get('offset'), 10);
  const limit = parseInt(searchParams.get('limit'), 10);
  if (!isNaN(offset) && !isNaN(limit)) {
    const products = data.slice(offset, offset + limit);
    return NextResponse.json(products);
  }
  
  return NextResponse.json(data);
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}