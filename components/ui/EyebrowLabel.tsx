import { ReactNode } from "react";

export default function EyebrowLabel({
  children,
  className = "",
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "cream" | "charcoal";
}) {
  const color =
    tone === "gold"
      ? "text-gold"
      : tone === "cream"
        ? "text-cream/80"
        : "text-charcoal/70";
  return (
    <span
      className={`inline-block font-body text-[11px] uppercase tracking-eyebrow ${color} ${className}`}
    >
      {children}
    </span>
  );
}
