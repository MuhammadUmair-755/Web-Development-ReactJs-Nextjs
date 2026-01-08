"use client";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // 1. Initial Check: System Preference ya LocalStorage
  useEffect(() => {
    const isDark = 
      localStorage.theme === "dark" || 
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setDarkMode(isDark);
  }, []);

  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {darkMode ? (
        <HiSun className="h-6 w-6 text-yellow-500" />
      ) : (
        <HiMoon className="h-6 w-6 text-gray-600" />
      )}
    </button>
  );
}