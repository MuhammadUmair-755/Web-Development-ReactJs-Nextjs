import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {      
      return !!auth?.user; // if user authenticated return true else false
    },
    async signIn({ user, account, profile }) {
      try {
        const exitingGuest = await getGuest(user.email);
        if (!exitingGuest) {
          await createGuest({ email: user.email, fullName: user.name });
        }
        return true;
      } catch {
        return false;
      }
    },
    async session({session}){
      const guest = await getGuest(session.user.email);
      session.user.guestid = guest.id;
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
};
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
