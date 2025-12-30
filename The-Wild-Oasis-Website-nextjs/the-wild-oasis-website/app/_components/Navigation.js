import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
 
  return (
    <nav className="z-10 text-md md:block md:text-xl block">
      <ul className="flex flex-col justify-center gap-4 md:flex-row md:gap-16 items-end md:items-center">
        <li>
          <Link
            href="/cabins"
            className="text-lg sm:text-xl md:text-3xl hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-lg sm:text-xl md:text-3xl hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="text-lg sm:text-xl md:text-3xl hover:text-accent-400 transition-colors flex flex-col md:flex-row items-center gap-4"
            >
              <img
                className="h-14 md:h-20 rounded-full"
                src={session.user.image}
                alt="User image"
                referrerPolicy="no-referrer"
              />
              <span>Guest Area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="text-xl sm:text-3xl md:text-4xl lg:text-6xl hover:text-accent-400 transition-colors"
            >
              Guest Area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
