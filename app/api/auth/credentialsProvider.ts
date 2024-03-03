import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from '@/prisma/client';

const credentialsProvider = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    email: {
      label: 'Email',
      type: 'email',
      placeholder: 'john.doe@gmail.com',
    },
    name: {
      label: 'Username',
      type: 'text',
      placeholder: 'JohnDoe123',
    },
    password: {
      label: 'Password',
      type: 'Password',
      placeholder: 'Password',
    },
  },
  async authorize(credentials, req) {
    if (!credentials || !credentials.email || !credentials.password) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
    });

    if (!user) return null;

    const passwordMatch = await bcrypt.compare(
      credentials.password,
      user.hashedPassword!
    );

    return passwordMatch ? user : null;
  },
});

export default credentialsProvider;
