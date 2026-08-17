import React from "react";
import { APP_STORE_URL } from "@/lib/config";

interface PrimaryButtonProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function PrimaryButton({
  href = APP_STORE_URL,
  children = "Download on the App Store",
  className = "",
  ariaLabel,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      aria-label={
        ariaLabel ||
        (typeof children === "string" ? children : "Download on the App Store")
      }
      // Text only. The official Apple badge is the only permitted glyph here,
      // and an approximation of it is both off-spec and a trademark problem.
      className={`inline-flex items-center justify-center px-7 py-4 text-[17px] font-medium leading-none rounded-full cursor-pointer select-none transition-[filter,transform] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] hover:brightness-[1.08] hover:-translate-y-px active:scale-[0.98] ${className}`}
      style={{
        backgroundColor: "var(--accent)",
        color: "#0a0b0d", // dark ink on accent (10:1 ratio)
        fontFamily: "var(--font-geist)",
        minWidth: "44px",
        minHeight: "44px",
      }}
    >
      {children}
    </a>
  );
}
