"use client"

import Image from "next/image";
import pp from "../public/pp.png"
import { ThemeToggle } from "@/components/theme-toggle";
import { animate, scroll } from "motion"
 

 
export default function Home() {
  return (
   
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <header className="flex items-center ml-auto mb-12 w-full">
          <ThemeToggle />   
          <div className="relative flex shrink-0 overflow-hidden ml-auto rounded-full size-28 border">
            <Image 
              src={pp} 
              alt="profile picture" 
              className="cursor-pointer transition-all duration-300 object-cover w-full h-full"
            />
          </div>
        </header>
      </div>
    </div>
  );
}
