import React from 'react';
import UserTable from './UserTable';

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
      
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
