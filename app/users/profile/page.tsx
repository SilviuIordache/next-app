'use client';
import React from 'react';

import { useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
    </div>
  );
}
