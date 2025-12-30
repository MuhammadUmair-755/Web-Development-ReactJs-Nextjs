"use client";
import {
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

function SideNavToggler({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen ? (
        <>
          <ChevronDoubleLeftIcon
            className="h-8 w-8 border  text-accent-500 border-gray-300 mb-4 md:hidden"
            onClick={() => setIsOpen((cur) => !cur)}
          />
          {children}
        </>
      ) : (
        <ChevronDoubleLeftIcon
          className="h-8 w-8 border  text-accent-500 border-gray-300 rotate-180 mb-4"
          onClick={() => setIsOpen((cur) => !cur)}
        />
      )}
    </>
  );
}

export default SideNavToggler;
