import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
    </div>
  );
}
