"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function HeaderToggler({ children }) {
  const [isOpen, setIsOpen] = useState(false);
 const pathname = usePathname(); 
  const searchParams = useSearchParams(); 

  useEffect(() => {    
    setIsOpen(false);    
  }, [pathname, searchParams]);

  return (
    <span className="flex flex-col items-end">
      <button
        className="z-10 md:hidden"
        onClick={() => setIsOpen((cur) => !cur)}
      >
        {!isOpen ? (
          <span className="">
            <Bars3Icon className="h-8 w-8 text-primary-100 " />
          </span>
        ) : (
          <span>
            <XMarkIcon className="h-8 w-8 text-primary-100 " />
          </span>
        )}
      </button>
      <div
        className={`
        ${isOpen ? "block" : "hidden"} z-10 md:block p-8
        `}
      >
        {children}
      </div>
    </span>
  );
}

export default HeaderToggler;
