"use client";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom hook ko export karna zaroori hai taake LayoutClient ise use kar sakay
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) 
    throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
}