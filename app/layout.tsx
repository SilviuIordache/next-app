import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import NavBar from './NavBar';
import AuthProvider from './auth/Provider';
import MainPageScripts from './scripts/MainPageScripts';

// const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <MainPageScripts />
      <AuthProvider>
        <body className={roboto.className}>
          <NavBar />
          <main className="p-5">{children}</main>
        </body>
      </AuthProvider>
    </html>
  );
}
