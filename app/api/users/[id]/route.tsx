import { NextResponse } from 'next/server';

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ id: '1', name: 'Leanne Graham' });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate request body
  const body = await request.json();

  // If invalid, return a 400 response
  if (!body.name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  // Fetch user with the given id
  // If user not found, return a 404 response
  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Update user with the given id
  // Return a 200 response with the updated user
  return NextResponse.json({ id: '1', name: body.name });
}
