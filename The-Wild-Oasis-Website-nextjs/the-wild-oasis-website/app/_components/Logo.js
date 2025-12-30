import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center md:flex-row gap-4 z-10">
      <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
