"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LogoMark from "@/components/common/LogoMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#12141a] focus:text-[#f4f4f1] focus:border focus:border-[#7ac4d1] focus:rounded-md text-sm"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "nav-blur bg-[#0a0b0d]/75 backdrop-blur-[20px] border-b border-[#242830]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-270 mx-auto h-full px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ac4d1] focus-visible:ring-offset-2 rounded"
            aria-label="Kept home"
          >
            <LogoMark size={28} />
            <span
              className="font-medium text-[19px] leading-none tracking-[-0.02em] text-[#f4f4f1]"
              style={{ fontFamily: "var(--font-geist)" }}
            >
              Kept
            </span>
          </Link>

          <a
            href="#download"
            className="secondary-link text-[15px] font-normal leading-none"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Download
          </a>
        </div>
      </header>
    </>
  );
}
