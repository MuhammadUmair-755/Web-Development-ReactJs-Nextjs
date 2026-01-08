import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import LeftSideNav from "@/components/LeftSideNav";
import { SessionProvider } from "next-auth/react";
import { auth } from "./lib/auth";
import StoreProvider from "@/components/StoreProvider";

export const metadata = {
  title: "Instagram",
  description: "This is Insta clone",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en" className="">
      <body suppressHydrationWarning={true} className="">
        {/* Header for small */}
        <SessionProvider session={session}>
          <StoreProvider>
            <Header />

            {/* Feed + Stories */}
            <main className={`flex ${!session && "justify-center"}`}>
              <aside className="hidden md:block sticky top-0 md:h-screen md:px-4 md:max-w-85 lg:w-64">
                <LeftSideNav />
              </aside>
              <div className="overflow-y-scroll">
                <div>{children}</div>
              </div>
            </main>
            {/* Footer */}
            <Footer />
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
