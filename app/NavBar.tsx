import Link from 'next/link';
import React from 'react';

interface NavPage {
  route: string;
  name: string;
}

const NavBar = () => {
  const pages: NavPage[] = [
    {
      route: '',
      name: 'Home',
    },
    {
      route: 'users',
      name: 'Users',
    },
    {
      route: 'admin',
      name: 'Admin',
    },
    {
      route: 'products',
      name: 'Products',
    },
  ];

  return (
    <div className="bg-slate-200 p-5 mb-5">
      {pages.map((page, index) => (
        <Link key={index} href={`/${page.route}`} className="mr-4">
          {page.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
