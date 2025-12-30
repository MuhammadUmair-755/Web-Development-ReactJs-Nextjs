"use client";

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { useSidebar } from "./SidebarContext";

// import { useSidebar } from "./SidebarContext";

export default function LayoutClient({ sidenavigation, children }) {
  const { isOpen, setIsOpen } = useSidebar()

  return (
    <div className="grid h-screen transition-all duration-300 overflow-hidden" 
         style={{ gridTemplateColumns: isOpen ? "260px 1fr" : "80px 1fr" }}>
      
      {/* Sidebar Section */}
      <aside className="border-r border-primary-800 bg-primary-950 flex flex-col overflow-hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-4 text-accent-500">
          {isOpen ?  <ChevronDoubleLeftIcon
            className="h-8 w-8 border border-gray-300 mb-4"
            onClick={() => setIsOpen((cur) => !cur)}
          /> :<ChevronDoubleRightIcon
          className="h-8 w-8 border border-gray-300"
          onClick={() => setIsOpen((cur) => !cur)}
        />}
        </button>
        {sidenavigation} {/* Ye Server Component render ho raha hai */}
      </aside>

      {/* Content Section */}
      <main className="overflow-y-auto bg-primary-900">
        {children} {/* Ye bhi Server Component render ho raha hai */}
      </main>
    </div>
  );
}