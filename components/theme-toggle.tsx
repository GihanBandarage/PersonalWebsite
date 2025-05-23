"use client";
import React, { useState } from 'react';


import { useTheme } from "next-themes";
import { Button } from "./button";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaS } from 'react-icons/fa6';


export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className='absolute h-5 w-5 rotate-0 scale-100 transition-all dark:- rotate-90 scale-0'></FaSun>
      <FaMoon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:- rotate-0 scale-100'></FaMoon>
     </Button>
  );
}