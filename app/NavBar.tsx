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
      route: '/image-rendering',
      name: 'Image Rendering',
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
    {
      route: '/upload',
      name: 'Upload',
    },
  ];

  return (
    <div className="bg-slate-200 p-5 mb-5 flex justify-between">
      <div>
        {pages.map((page, index) => (
          <Link key={index} href={page.route} className="mr-4">
            {page.name}
          </Link>
        ))}
      </div>
      <div className="flex">
        {status === 'loading' && <div>Loading...</div>}
        {status === 'authenticated' && (
          <div className="flex">
            <Link href="/users/profile">{session.user!.name}</Link>
            <div className="mx-3">|</div>
            <Link href="/api/auth/signout">Sign Out</Link>
          </div>
        )}
        {status === 'unauthenticated' && (
          <div className="flex">
            <Link href="/api/auth/signin">Sign in</Link>
            <div className="mx-3">|</div>
            <Link href="/register">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
