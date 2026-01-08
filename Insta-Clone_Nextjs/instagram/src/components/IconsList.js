import { auth, signOut } from "@/app/lib/auth";
import {
  CompassIcon,
  HomeIcon,
  PlaySquareIcon,
  SearchIcon,
  SendIcon,
} from "lucide-react";
import Link from "next/link";
import { HiOutlineHeart } from "react-icons/hi";
import AddPostIcon from "./AddPostIcon";

async function IconsList() {
  const session = await auth();

  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/auth/signin" });
      }}
      className="w-full"
    >
      <div className="flex items-center justify-between w-full px-2 md:flex-col md:items-start md:justify-start md:gap-8 md:px-4">
        
        <Link href="/" className="flex items-center group">
          <HomeIcon className="navBtn h-7 w-7 md:h-8 md:w-8 transition-transform group-hover:scale-110" />
          <span className="hidden lg:inline-flex ml-4 text-lg font-medium group-hover:font-bold">
            Home
          </span>
        </Link>

        <Link href="/" className="flex items-center group ">
          <SearchIcon className="navBtn h-7 w-7 md:h-8 md:w-8 transition-transform group-hover:scale-110" />
          <span className="hidden lg:inline-flex ml-4 text-lg font-medium group-hover:font-bold">
            Search
          </span>
        </Link>

        <Link href="/" className="hidden sm:flex items-center group">
          <CompassIcon className="navBtn h-7 w-7 md:h-8 md:w-8 transition-transform group-hover:scale-110" />
          <span className="hidden lg:inline-flex ml-4 text-lg font-medium group-hover:font-bold">
            Explore
          </span>
        </Link>

        <Link href="/" className="flex items-center group">
          <PlaySquareIcon className="navBtn h-7 w-7 md:h-8 md:w-8 rounded-2xl transition-transform group-hover:scale-110" />
          <span className="hidden lg:inline-flex ml-4 text-lg font-medium group-hover:font-bold">
            Reels
          </span>
        </Link>

        <Link href="/" className="flex items-center group">
          <div className="relative">
            <SendIcon className="navBtn h-7 w-7 md:h-8 md:w-8 transition-transform group-hover:scale-110" />
            <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
              3
            </div>
          </div>
          <span className="hidden lg:inline-flex ml-4 text-lg font-medium group-hover:font-bold">
            Messages
          </span>
        </Link>

        <Link href="/" className="hidden md:flex items-center group">
          <HiOutlineHeart className="navBtn h-8 w-8 transition-transform group-hover:scale-110" />
          <span className="hidden lg:inline-flex ml-4 text-lg font-medium group-hover:font-bold">
            Notifications
          </span>
        </Link>

        <div className="flex items-center group">
          <AddPostIcon />
          <span className="hidden lg:inline-flex ml-4 text-lg font-medium group-hover:font-bold cursor-pointer">
            Create
          </span>
        </div>

        <div className="flex items-center group">
          {session ? (
            <button type="submit" className="flex items-center cursor-pointer outline-none">
              <img
                src={session?.user?.image}
                className="h-7 w-7 md:h-8 md:w-8 rounded-full border border-gray-200 object-cover"
                alt="profile"
              />
              <span className="hidden lg:inline-flex ml-4 text-lg font-medium group-hover:font-bold">
                Profile
              </span>
            </button>
          ) : (
            <Link href="/auth/signin" className="flex items-center">
              <img
                src="/default-user.png"
                className="h-7 w-7 md:h-8 md:w-8 rounded-full border border-gray-200"
                alt="default user"
              />
              <span className="hidden lg:inline-flex ml-4 text-lg font-medium group-hover:font-bold">
                Profile
              </span>
            </Link>
          )}
        </div>

      </div>
    </form>
  );
}

export default IconsList;