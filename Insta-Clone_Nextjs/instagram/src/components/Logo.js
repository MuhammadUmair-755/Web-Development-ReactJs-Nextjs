import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
function Logo() {

  return (
    <div className="flex items-center gap-1">
      <Link href="/" className="relative h-16 w-26 ">
        <Image
          src="/insta-text-logo.png"
          fill
          alt="insta logo"
          className="dark:invert"
          priority
        />
      </Link>
      <span>
        <ChevronDownIcon className="h-4 w-4" />
      </span>
    </div>
  ); 
}

export default Logo;
