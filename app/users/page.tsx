import React, { Suspense } from 'react';
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

      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
