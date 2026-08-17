"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger against the rest of the group, in milliseconds. */
  delay?: number;
  /** "view" waits for the element to scroll in; "load" fires once mounted. */
  on?: "view" | "load";
  /** Travel distance in px. 0 fades without movement. */
  y?: number;
  style?: CSSProperties;
};

/**
 * Entry animation wrapper.
 *
 * The hidden state lives in CSS behind an `html.js` class, so with scripting
 * off nothing is ever hidden and the page renders complete. Reduced motion is
 * handled in CSS for the same reason — it can't depend on this running.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  on = "view",
  y = 16,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (on === "load") {
      // Two frames, so the hidden state is painted before the class flips and
      // the transition actually has something to animate from.
      let inner = 0;
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setShown(true));
      });
      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(inner);
      };
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      // Trip on the element's leading edge rather than on a visible ratio.
      // A section taller than the viewport can never reach a ratio threshold.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [on]);

  return (
    <div
      ref={ref}
      className={`reveal${shown ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-y": `${y}px`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
