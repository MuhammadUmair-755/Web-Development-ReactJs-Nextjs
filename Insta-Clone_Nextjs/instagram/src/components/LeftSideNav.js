import { InstagramIcon } from "lucide-react";
import { HiMenu, HiOutlineViewGrid } from "react-icons/hi";
import IconsList from "./IconsList";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/app/lib/auth";

async function LeftSideNav() {
  const session = await auth();

  if (!session) return null;

  return (
    <div className="flex flex-col justify-between h-screen p-4 pb-8 border-r border-gray-200 dark:border-gray-800">
      
      <div className="mt-8 mb-10">
        <Link href="/" className="flex items-center gap-4 px-2">
        
          <InstagramIcon className="navBtn w-8 h-8 lg:hidden" />
          
          <div className="hidden lg:block relative h-10 w-28">
            <Image
              src="/insta-text-logo.png"
              fill
              alt="insta logo"
              className="dark:invert object-contain object-left"
              priority
            />
          </div>
        </Link>
      </div>

      <div className="flex-1">
        <IconsList />
      </div>

      <div className="flex flex-col gap-2 mt-auto">
        <div className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
          <HiOutlineViewGrid className="navBtn w-7 h-7" />
          <span className="hidden ml-4 lg:block text-lg font-medium group-hover:font-bold">
            View
          </span>
        </div>
        
        <div className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
          <HiMenu className="navBtn w-7 h-7" />
          <span className="hidden ml-4 lg:block text-lg font-medium group-hover:font-bold">
            More
          </span>
        </div>
      </div>

    </div>
  );
}

export default LeftSideNav;