import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "~/server/db";
import type { Adapter } from "next-auth/adapters";
import { Account, User, Session } from "next-auth";
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },  
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const dbUser = await db.user.findFirst({
          where: { email: credentials.email },
        })

        if (dbUser && dbUser.password === credentials.password) {
          const { password, id, ...dbUserWithoutPassword } = dbUser;
          return dbUserWithoutPassword as User;
        }
        return null;
      }
    }),
    
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  // pages: {
  //   signIn: "/auth/signin",
  //   error: "/auth/error",
  // },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(db) as Adapter, 
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
    
    async signIn({ user, account }) {
      if (!user.email) {
        throw new Error("You must have an email address to sign in");
      }
    
      if (!account) {
        throw new Error("You must have a valid account to sign in");
      }
    
      // Check if user exists in the database
      const dbUser = await db.user.findUnique({
        where: { email: user.email },
        include: { accounts: true },
      });
    
      if (dbUser) {
        // Check if user signs in using the same provider
        const isSameProvider = dbUser.accounts.some(
          (acc) => acc.provider === account.provider
        );
        if (!isSameProvider) {
          throw new Error("You must sign in with the same provider you used to sign up.");
        }
      }
    
      return true; // Allow sign-in
    }
    
  },
} satisfies NextAuthConfig;
