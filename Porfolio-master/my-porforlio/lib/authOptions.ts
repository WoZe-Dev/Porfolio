// lib/authOptions.ts
import type { NextAuthOptions, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

/** Lit ADMIN_PASSWORD depuis .env sans expansion des $ par dotenv/Turbopack */
function readRawHash(): string {
  try {
    const envContent = fs.readFileSync(path.join(process.cwd(), ".env"), "utf-8");
    const match = envContent.match(/^ADMIN_PASSWORD=['"]?(.+?)['"]?\s*$/m);
    return match?.[1] ?? "";
  } catch {
    return "";
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email:    { label: "Email",    type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminHash  = readRawHash();

        if (!credentials?.email || !credentials.password) return null;
        if (credentials.email !== adminEmail || !adminHash) return null;

        const isValid = await bcrypt.compare(credentials.password, adminHash);
        if (!isValid) return null;

        return { id: "1", email: adminEmail, role: "admin" };
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
