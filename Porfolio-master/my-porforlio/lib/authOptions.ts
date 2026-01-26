// lib/authOptions.ts
import type { NextAuthOptions, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email:    { label: "Email",    type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

        if (!credentials?.email || !credentials.password) return null;

        if (
          credentials.email === ADMIN_EMAIL &&
          credentials.password === ADMIN_PASSWORD
        ) {
          return { id: "1", email: ADMIN_EMAIL, role: "admin" };
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = {
          id:    token.id,
          email: token.email,
          role:  token.role,
        } as any;
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id    = user.id;
        token.email = user.email;
        token.role  = (user as any).role;
      }
      return token;
    },
  },

  pages: {
    signIn: "/connexions/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
