import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = async ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <>
      <h1>UsersPage</h1>

      <Link href="/users/new" className="btn">
        NEW USER
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
