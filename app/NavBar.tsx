'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

interface NavPage {
  route: string;
  name: string;
}

const NavBar = () => {
  const { status, data: session } = useSession();

  const pages: NavPage[] = [
    {
      route: '/',
      name: 'Home',
    },
    {
      route: '/users',
      name: 'Users',
    },
    {
      route: '/admin',
      name: 'Admin',
    },
    {
      route: '/products',
      name: 'Products',
    },
  ];

  return (
    <div className="bg-slate-200 p-5 mb-5 flex">
      {pages.map((page, index) => (
        <Link key={index} href={page.route} className="mr-4">
          {page.name}
        </Link>
      ))}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && <div>{session.user!.name}</div>}
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </div>
  );
};

export default NavBar;
