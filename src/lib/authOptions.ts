import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyUserCredentials } from "./userStore";

const DEV_NEXTAUTH_SECRET = "local-dev-secret";
const DEV_NEXTAUTH_URL = "http://localhost:3000";

let resolvedSecret = process.env.NEXTAUTH_SECRET;

if (!resolvedSecret) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("NEXTAUTH_SECRET não está definido. Adiciona-o ao ficheiro .env.");
  }
  console.warn("[auth] NEXTAUTH_SECRET não definido. A usar um valor apenas para desenvolvimento.");
  resolvedSecret = DEV_NEXTAUTH_SECRET;
}

if (!process.env.NEXTAUTH_URL) {
  if (process.env.NODE_ENV === "production") {
    console.warn("[auth] NEXTAUTH_URL não está definido. Algumas funcionalidades podem falhar.");
  } else {
    process.env.NEXTAUTH_URL = DEV_NEXTAUTH_URL;
  }
}

export const authOptions: NextAuthOptions = {
  secret: resolvedSecret,
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credenciais",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) {
          return null;
        }
        const user = await verifyUserCredentials(email, password);
        if (!user) {
          return null;
        }
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
