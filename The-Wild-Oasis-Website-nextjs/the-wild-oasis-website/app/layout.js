import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";
// import { Suspense } from "react";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Discover your perfect cabin getaway at The Wild Oasis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="ms-2.5 me-3 md:mx-8  flex-1 md:px-4 py-12 ">
          <main className="">
            <ReservationProvider>
              {children}
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
