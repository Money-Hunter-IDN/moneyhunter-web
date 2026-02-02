"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm fixed w-full top-0 z-50 bg-white/95 dark:bg-gray-900/95">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-transparent flex items-center justify-center">
              <Image
                src="/android-chrome-192x192.png"
                width={32}
                height={32}
                alt="moneyhunter-logo"
              />
            </div>
            <span className="text-xl font-bold text-[#FF5900]">
              Money Hunter
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Community
          </a>
          <a
            href="#faq"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#features"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-[#FF5900] text-white hover:bg-[#FF5900]/90 hover:shadow-lg hover:shadow-[#FF5900]/25 shadow-md"
          >
            Join Our Community
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF5900]"
          >
            {open ? (
              <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden border-t border-gray-200 dark:border-gray-800 ${open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <nav className="flex flex-col gap-3">
            <a
              href="#features"
              onClick={closeMenu}
              className="px-2 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Community
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="px-2 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              FAQ
            </a>
          </nav>

          <div className="mt-4 flex flex-col gap-2">
            <Button
              onClick={closeMenu}
              className="bg-[#FF5900] hover:bg-[#FF5900]/90 text-white"
              asChild
            >
              <a href="#features">Join Our Community</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
