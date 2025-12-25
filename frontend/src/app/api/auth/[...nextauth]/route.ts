import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === "admin@apollo.it" && credentials?.password === "cyber-secure") {
          return { id: "1", name: "IT Manager", email: "admin@apollo.it" };
        }
        return null;
      }
    })
  ],
  pages: { signIn: "/login" }
});
export { handler as GET, handler as POST };
