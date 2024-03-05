import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Image from 'next/image';
import { Metadata } from 'next';

// import coffee from '@/public/images/coffee.png';

export const metadata: Metadata = {
  title: 'NextApp: Home page',
  description: 'This is the home page',
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>

      <div className="relative h-80">
        {/* static image */}
        {/* <Image src={coffee} alt="coffee" /> */}

        {/* remote image*/}
        <Image
          src="https://bit.ly/react-cover"
          alt="coffee"
          fill
          className="object-contain"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          priority
        />
      </div>
    </main>
  );
}
