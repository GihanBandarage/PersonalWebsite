"use client";
import React from 'react';
import { useTheme } from "next-themes";
import { Button } from "./button";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon"
      className="rounded-full relative"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="absolute h-5 w-5 transition-all rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      <FaMoon className="absolute h-5 w-5 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
