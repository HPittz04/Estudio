import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyUserCredentials } from "./userStore";

const DEV_NEXTAUTH_SECRET = "local-dev-secret";
const DEV_NEXTAUTH_URL = "http://localhost:3000";

function resolveSecret(): string {
  if (process.env.NEXTAUTH_SECRET) {
    return process.env.NEXTAUTH_SECRET;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("NEXTAUTH_SECRET não está definido. Adiciona-o ao ficheiro .env.");
  }

  console.warn("[auth] NEXTAUTH_SECRET não definido. A usar um valor apenas para desenvolvimento.");
  return DEV_NEXTAUTH_SECRET;
}

function resolveNextAuthUrl(): string | undefined {
  if (process.env.NEXTAUTH_URL) {
    return process.env.NEXTAUTH_URL;
  }

  if (process.env.NODE_ENV === "production") {
    console.warn("[auth] NEXTAUTH_URL não está definido. Algumas funcionalidades podem falhar.");
    return undefined;
  }

  console.warn("[auth] NEXTAUTH_URL não definido. A usar http://localhost:3000 em desenvolvimento.");
  return DEV_NEXTAUTH_URL;
}

const secret = resolveSecret();
const nextAuthUrl = resolveNextAuthUrl();

if (nextAuthUrl && !process.env.NEXTAUTH_URL) {
  process.env.NEXTAUTH_URL = nextAuthUrl;
}

export const authOptions: NextAuthOptions = {
  secret,
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
