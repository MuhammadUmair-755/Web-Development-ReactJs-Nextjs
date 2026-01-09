import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin", // custom signin page route
  },
  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();
        session.user.uid = token.sub;// this is google user id that comes back
        return session;
    },
  },
});
