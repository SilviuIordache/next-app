'use client';

export default function Home() {
  const sortUsers = async () => {
    const _ = (await import('lodash')).default

    const users = [{ name: 'c' }, { name: 'a' }, { name: 'b' }];

    const sorted = _.orderBy(users, ['name']);

    console.log(sorted);
  };

  return (
    <main>
      <h1>Hello World</h1>
      <button onClick={sortUsers}>Sort</button>
    </main>
  );
}
