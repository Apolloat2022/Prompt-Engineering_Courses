
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
            name: "Admin Access",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "admin" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const adminUser = process.env.ADMIN_USERNAME;
                const adminPass = process.env.ADMIN_PASSWORD;

                if (credentials?.username === adminUser && credentials?.password === adminPass) {
                    return {
                        id: "admin-user",
                        name: "Admin User",
                        email: "admin@apollotech.com",
                        image: null,
                    };
                }
                return null;
            }
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        session: async ({ session, user }: any) => {
            if (session?.user) {
                session.user.id = user.id;
            }
            return session;
        }
    }
};
