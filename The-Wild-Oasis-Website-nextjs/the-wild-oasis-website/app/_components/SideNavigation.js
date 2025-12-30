"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathName = usePathname(); // only runs on client side to get current path

  return (
    <nav className="border-r border-primary-900 flex flex-col h-full">
      <ul className="flex md:flex-col gap-1 sm:gap-8 h-full text-sm md:text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 md:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-2 sm:gap-8 font-semibold text-primary-200 ${
                pathName === link.href ? "bg-primary-900 text-primary-100" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      <span className="md:text-lg">
        <SignOutButton />
      </span>
      </ul>
    </nav>
  );
}

export default SideNavigation;
