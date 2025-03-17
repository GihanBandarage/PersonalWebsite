"use client"

import Image from "next/image";
import pp from "../public/pp.png"
import { ThemeToggle } from "@/components/theme-toggle";
import { animate, scroll } from "motion"
import { motion } from "motion/react"
import { Button } from "@/components/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead, MdOutlineMail } from "react-icons/md";

export default function Home() {
  return (

    // Header Section
     <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <header className="flex items-center justify-between mb-12 w-full">
           <motion.div
            initial={{opacity:0, x: -100}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 0.8}} 
            className="space-y-1"
          >
            <h1 className="text-6xl font-bold text-black dark:text-white  inline-block">Hi, I'm Gihan</h1>
            <p className="  inline-block max-w-[600px] md:text-xl">20 year old something guy
            </p>

   
          </motion.div>
          <div className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
            <Image 
              src={pp} 
              alt="profile picture" 
              className="cursor-pointer transition-all duration-300 object-cover w-full h-full"
            />
          </div>
        </header>
        <section id="about">

          <motion.div
            initial={{opacity:0, x: -100}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 0.8}} 
            className="space-y-3"

            >
            <h2 className="text-xl font-bold">About</h2>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <p> tldr; anime fan, gamer, chess player.
i like anime, space stuff, coding, gaming and whatever looks cool on a screen.
i casually explore chess strategies and digital worlds. still figuring out what makes a dent in my universe.
</p>
</div>




            </motion.div>

          </section>

          
{/* Button Section */}
        <main className="space-y-6">

          <section className="y-10">
          <motion.div
            initial={{opacity:0, x: 50}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 0.8}} 
            
            className="flex itens-center gap-3">
            <Button className="rounded-full text-white transition-transform hover:scale-105">Resume</Button>


      <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
      <FaGithub className="w-6 h-6"></FaGithub>
      </Link>


      <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
      <FaLinkedin className="w-6 h-6"></FaLinkedin>
      </Link>


      <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
      <MdOutlineMail className="w-6 h-6"></MdOutlineMail>
      </Link>


      
            </motion.div>
          </section>

       
          
            
         </main>
        
        <ThemeToggle />
      </div>
    </div>
  );
}