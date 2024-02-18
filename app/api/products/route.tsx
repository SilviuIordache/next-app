import { NextResponse } from 'next/server';
import schema from './schema';

// keep request param to prevent caching
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: 'milk',
      price: 2.99,
    },
    {
      id: 2,
      name: 'apple',
      price: 0.99,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json(
    {
      id: 1,
      name: body.name,
      price: body.price,
    },
    { status: 201 }
  );
}
