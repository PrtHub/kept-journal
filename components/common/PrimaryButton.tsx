import React from "react";

interface PrimaryButtonProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function PrimaryButton({
  href = "#download",
  children = "Download on the App Store",
  className = "",
  ariaLabel,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel || (typeof children === "string" ? children : "Download on the App Store")}
      className={`inline-flex items-center justify-center gap-2.5 px-7 py-4 text-[17px] font-medium leading-none rounded-full cursor-pointer select-none transition-all duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] hover:brightness-110 active:scale-[0.98] ${className}`}
      style={{
        backgroundColor: "var(--accent)",
        color: "#0a0b0d", // dark ink on accent (10:1 ratio)
        fontFamily: "var(--font-geist)",
        minWidth: "44px",
        minHeight: "44px",
      }}
    >
      <svg
        viewBox="0 0 170 170"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0 -translate-y-0.5"
      >
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.86-12-14.45-6.26-9.59-11.21-20.73-14.86-33.41-3.65-12.68-5.48-24.63-5.48-35.87 0-14.9 3.51-27.18 10.53-36.85 7.02-9.67 15.82-14.67 26.41-15 4.8-.13 10.23 1.34 16.29 4.41 6.07 3.07 10.02 4.67 11.87 4.8 1.48-.13 5.58-1.74 12.31-4.8 6.73-3.07 12.44-4.43 17.13-4.1 12.98.92 23.36 5.86 31.14 14.83-11.45 6.9-17.07 16.39-16.85 28.46.22 9.4 3.86 17.37 10.92 23.9 7.06 6.53 15.48 10.29 25.26 11.27-2.12 6.43-4.74 13.01-7.85 19.74zM119.22 33.64c0-7.39 2.68-14.38 8.04-20.97 5.36-6.59 12.06-10.94 20.1-13.06.65 4.14.36 8.35-.87 12.63-1.23 4.28-3.4 8.44-6.52 12.49-3.23 4.13-6.99 7.27-11.27 9.42-4.28 2.15-8.49 3.32-12.63 3.51-.43-1.3-.85-2.64-1.25-4.02h.4z" />
      </svg>
      <span>{children}</span>
    </a>
  );
}
