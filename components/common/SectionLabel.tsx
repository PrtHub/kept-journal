import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`text-label mb-3 ${className}`}
      style={{
        color: "var(--ink-3)",
      }}
    >
      {children}
    </p>
  );
}
