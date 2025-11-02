"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DollarSign, Menu, X } from "lucide-react";
import Image from "next/image";
import { useToast, Toaster } from "./ui/toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { toast, toasts } = useToast();

  const handleComingSoon = () => {
    toast({
      title: "Coming Soon!",
      description: "This feature is currently under development.",
      duration: 2500
    });
  };

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
    <>
      <header className="border-b border-gray-200 backdrop-blur-sm fixed w-full top-0 z-50 bg-white/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover-scale group">
              <div className="w-8 h-8 bg-transparent flex items-center justify-center icon-bounce">
                <DollarSign className="w-5 h-5 text-gray-800" />
                <Image
                  src="/android-chrome-192x192.png"
                  width={128}
                  height={128}
                  alt="moneyhunter-logo"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#FF5900] to-[#FF5900] bg-clip-text text-transparent gradient-text-hover">
                Money Hunter
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={handleComingSoon}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer link-underline color-transition"
            >
              Learn
            </button>
            <button
              onClick={handleComingSoon}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer link-underline color-transition"
            >
              About
            </button>
            <button
              onClick={handleComingSoon}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer link-underline color-transition"
            >
              Resources
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-[#FF5900] text-white hover:bg-[#FF5900]/90 hover:shadow-lg hover:shadow-[#FF5900]/25 shadow-md ripple shimmer hover-scale"
            >
              Join Our Community
            </a>
          </div>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF5900] hover-scale"
          >
            {open ? (
              <X className="h-6 w-6 text-gray-800 icon-rotate" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 icon-rotate" />
            )}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden border-t border-gray-200 ${open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 py-3 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => {
                  handleComingSoon();
                  closeMenu();
                }}
                className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-left color-transition"
              >
                Learn
              </button>
              <button
                onClick={() => {
                  handleComingSoon();
                  closeMenu();
                }}
                className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-left color-transition"
              >
                About
              </button>
              <Link
                href="#faq"
                onClick={closeMenu}
                className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-100 color-transition"
              >
                Resources
              </Link>
            </nav>

            <div className="mt-4 flex flex-col gap-2">
              <Button
                onClick={closeMenu}
                className="bg-[#FF5900] hover:bg-[#FF5900]/90 text-white ripple shimmer"
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </header>
      <Toaster toasts={toasts} />
    </>
  );
};

export default Navbar;