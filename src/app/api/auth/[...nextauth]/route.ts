import { db } from '~/server/db'; // Use Prisma client from ~/server/db
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions = {
  // Use Prisma Adapter for NextAuth
  adapter: PrismaAdapter(db),
  
  // Authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'youremail@gmail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Find the user in the database
        const user = await db.user.findUnique({
          where: { 
            email: credentials?.email 
        },
        });

        // If user is found in db, return user
        if (user) {
          return user;
        }

        // Return null if login fails
        return null;
      },
    }),
  ],
  
  // Session management
  session: { strategy: 'jwt' },

  // Secret for signing tokens
  secret: process.env.NEXTAUTH_SECRET!,
};

