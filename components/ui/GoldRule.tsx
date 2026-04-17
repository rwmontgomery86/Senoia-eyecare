"use client";

import { motion } from "motion/react";

export default function GoldRule({
  className = "",
  width = "8rem",
  vertical = false,
}: {
  className?: string;
  width?: string;
  vertical?: boolean;
}) {
  if (vertical) {
    return (
      <motion.span
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: width, transformOrigin: "top" }}
        className={`block w-px bg-gold/70 ${className}`}
      />
    );
  }
  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ width, transformOrigin: "left" }}
      className={`block h-px bg-gold/70 ${className}`}
    />
  );
}
