import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    id: number;
  };
}

// Dynamic metadata
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: `User ${params.id} Detail Page`,
  };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();

  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
