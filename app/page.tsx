"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";
import { useTheme } from "next-themes";

// import { ThemeToggle } from "@/components/theme-toggle";
// import { Button } from "@/components/button";
import pp from "../public/pp.png";
import vuwLogo from "../public/vuwLogo.png"; // update the path/name if needed
import { useEffect, useState } from "react";


export default function Home() {
  const { setTheme, theme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  return (
    <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-20 px-5 ">
      <main className="flex flex-col min-h-[100dvh] space-y-2">
        <div className="mx-auto w-full max-w-2xl space-y-8"> 
          {/* Hero Section */}
          <section id="hero-about" className="space-y-10">
            <div className="flex justify-between items-center gap-4">
              {/* Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex-col space-y-2.5"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Hi, Gihan Here
                </h1>
                <p className="max-w-[600px] md:text-xl">
                  20 year old human
                </p>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, y: -7 }}
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
               <p>Hey there. I&apos;m Gihan, a 20y/o CS undergrad at Victoria University of Wellington.</p>
<p>I&apos;m into machine learning and building things that actually work.</p>
<p>Outside of code, it&apos;s anime, chess, and the occasional game grind.</p>

                <p>Always learning, always leveling up.</p>
              </div>
            </motion.div>
          </section>


</div>

<section className="space-y-2 mt-10">
  <motion.div
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-xl font-bold">Education</h2>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <a
      href="https://www.wgtn.ac.nz/"
      className="block cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
<div className="rounded-lg  bg-background text-foreground flex p-3 hover:shadow-lg transition">
        {/* Left: Image */}
        <div className="flex-none">
          <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
            <Image
              src={vuwLogo} // import this at the top
              alt="Victoria University of Wellington"
              className="aspect-square h-full w-full object-contain"
            />
          </span>
        </div>

        {/* Right: Text + Dates */}
        <div className="flex-grow ml-4 flex-col items-center group flex">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                Victoria University of Wellington
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                2023 – Present
              </div>
            </div>
            <div className="font-sans text-xs">Computer Science</div>
          </div>
        </div>
      </div>
    </a>
  </motion.div>
</section>



<section className="space-y-8 mt-10">
  <h2 className="text-2xl font-bold">Projects</h2>
  <div className="grid gap-6 sm:grid-cols-2">
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">My Portfolio Website</h3>
      <p className="text-sm text-muted-foreground mt-2">
        Personal site built with Next.js and Tailwind to showcase my projects and resume.
      </p>
      <a href="https://github.com/GihanBandarage/PersonalWebsite" target="_blank" className="inline-block mt-3 text-primary hover:underline">
        View on GitHub
      </a>
    </div>
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">Anime Recommender</h3>
      <p className="text-sm text-muted-foreground mt-2">
        A machine learning app that suggests anime based on user preferences, using Python & Streamlit.
      </p>
      <a href="#" className="inline-block mt-3 text-primary hover:underline">
        View on GitHub
      </a>
    </div>
    {/* add more projects here */}
  </div>
</section>

</main>

      {/* New bottom navbar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center mb-4 pointer-events-none">
        <div className="flex items-center gap-4 rounded-full border bg-background px-4 py-2 shadow-lg backdrop-blur-lg pointer-events-auto dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
          
          <Link href="/" className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z"></path>
              <path d="M9 22V12H15V22"></path>
            </svg>
          </Link>

          <Link href="/blog" className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M2 6h4M2 10h4M2 14h4M2 18h4"></path>
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
              <path d="M16 2v20"></path>
            </svg>
          </Link>

          <div className="h-6 w-px bg-border"></div>

          <Link href="https://github.com/GihanBandarage/" className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.1-1.2-1.4-1.2-1.4-1-.6.1-.6.1-.6 1.1.1 1.6 1.1 1.6 1.1.9 1.5 2.3 1.1 2.8.9.1-.6.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3 0-.3-.5-1.3.1-2.7 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.1 2.4.1 2.7.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.7.9.7 1.8v2.7c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12c0-6.3-5.2-11.5-11.5-11.5z" />
            </svg>
          </Link>

          <Link href="https://www.linkedin.com/in/gihanbandarage/" className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zM8.5 8h3.5v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.7 2.7 4.7 6.2V20h-4v-5.4c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9V20h-4V8z"/>
            </svg>
          </Link>

  

          <Link href="mailto:gihanbandarage@gmail.com" className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="M22 7l-8.97 5.7a2 2 0 0 1-2.06 0L2 7"></path>
            </svg>
          </Link>

          <div className="h-6 w-px bg-border"></div>

{mounted && (
  <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground"
  >
    {theme === "dark" ? (
      // 🌞 Show sun icon (we're currently in dark mode, clicking switches to light)
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
      </svg>
    ) : (
      // 🌙 Show moon icon (we're currently in light mode, clicking switches to dark)
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    )}
  </button>
)}


        </div>
      </div>
    </div>
  );
}
