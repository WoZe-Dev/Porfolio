// app/api/auth/[...nextauth]/route.ts
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { User } from "next-auth";

/* ------------------------------------------------------------------
   Configuration NextAuth  (UNE SEULE déclaration)
   ------------------------------------------------------------------ */
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email:    { label: "Email",    type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const adminEmail    = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!credentials?.email || !credentials.password) return null;

        if (
          credentials.email === adminEmail &&
          credentials.password === adminPassword
        ) {
          return { id: "1", email: adminEmail, role: "admin" };
        }
        return null;
      },
    }),
  ],

  callbacks: {
    /* --------- Injecte les infos supplémentaires dans la session --------- */
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }) {
      if (token) {
        session.user = {
          id:    token.id,
          email: token.email,
          role:  token.role,
        } as any; // cast rapide si le type User n’a pas “role”
      }
      return session;
    },

    /* --------- Met à jour le token JWT --------- */
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: User;
    }) {
      if (user) {
        token.id    = user.id;
        token.email = user.email;
        token.role  = (user as any).role;
      }
      return token;
    },
  },

  pages: {
    signIn: "/connexions/login", // page de connexion pour le portfolio
  },

  secret: process.env.NEXTAUTH_SECRET,
};

/* ------------------------------------------------------------------
   Handler de route – les SEULS exports attendus par Next.js
   ------------------------------------------------------------------ */
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
