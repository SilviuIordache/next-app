import { NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Validate request body
  const body = await request.json();

  const validation = schema.safeParse(body);

  // If invalid, return a 400 response
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // Fetch user with the given id
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  // If user not found, return a 404 response
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Update user with the given id
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: { name: body.name, email: body.email },
  });

  // Return a 200 response with the updated user
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch user with the given id
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  // If user not found, return a 404 response
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Delete user with the given id
  await prisma.user.delete({ where: { id: parseInt(params.id) } });

  // Return a 204 response
  return NextResponse.json({});
}
