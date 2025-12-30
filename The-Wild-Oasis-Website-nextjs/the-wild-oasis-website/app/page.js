import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        className="object-cover object-top"
        placeholder="blur"
        quality={80}
        fill
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[100px] lg:mb-32 text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="text-md sm:text-xl md:text-2xl lg:text-4xl bg-accent-500 px-4 py-3 md:px-8 md:py-6 text-primary-800 font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
