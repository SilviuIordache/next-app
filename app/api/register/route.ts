import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  try {
    console.log('got here');

    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (userExists) {
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        hashedPassword,
      },
    });

    return NextResponse.json(
      { message: 'User created successfully', email: newUser.email },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('An error occurred:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.toString() },
      { status: 500 }
    );
  }
}
