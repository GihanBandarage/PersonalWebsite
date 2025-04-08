"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/button";
import pp from "../public/pp.png";

export default function Home() {
  return (
    //same height
<div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-20 px-5 ">
<main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="mx-auto w-full max-w-2xl space-y-8"> 
        {/* Hero Section */}
        <section id="hero-about" className="space-y-10">
  <div className="flex justify-between items-center gap-4">
    {/* Hero Text */}
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex-col space-y-1.5"
    >
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
        Hi, Gihan Here
      </h1>
      <p className="max-w-[600px] md:text-xl">
        20 year old something guy
      </p>
    </motion.div>

    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative shrink-0 overflow-hidden rounded-full size-28 border"
    >
      <Image
        src={pp}
        alt="Gihan"
        className="aspect-square h-full w-full"
      />
    </motion.div>
  </div>

  {/* About Section */}
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="space-y-3"
  >
    <h2 className="text-xl font-bold">About</h2>
    <div className="prose max-w-full text-sm text-muted-foreground dark:prose-invert font-sans">
      <p>Hey there. I'm Gihan, a 20y/o CS undergrad at Victoria University of Wellington.</p>
      <p>I'm into machine learning and building things that actually work. Outside of code, it's mostly anime, chess, and the occasional game grind. Always learning, always leveling up.</p>
    </div>
  </motion.div>
</section>

        {/* Buttons & Socials */}
        <main className="space-y-6 mt-10">
          <section>
            <motion.div
         initial={{ opacity: 0, y: -8 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-full text-white transition-transform hover:scale-105">
                Resume
              </Button>

              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <FaGithub className="h-6 w-6" />
              </Link>

              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>

              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <MdOutlineMail className="h-6 w-6" />
              </Link>
            </motion.div>
          </section>
        </main>

        {/* Theme Toggle */}
        <div className="mt-10">
          <ThemeToggle />
        </div>
      </div>
      </main>
    </div>
  );
}
