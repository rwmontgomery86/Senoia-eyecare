"use client";

import { motion, type Variants } from "motion/react";
import { ElementType } from "react";

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WordReveal({
  text,
  as: Tag = "h1",
  className = "",
  delay = 0,
  stagger = 0.08,
  once = true,
  inView = true,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  /**
   * If true (default), animates when scrolled into view; if false, animates immediately on mount
   * (used for the hero so the headline reveals on page load).
   */
  inView?: boolean;
}) {
  const words = text.split(" ");
  const motionProps = inView
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once, amount: 0.3 },
      }
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
      };

  return (
    <Tag className={className}>
      <motion.span
        {...motionProps}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
        style={{ display: "block" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
              paddingBottom: "0.14em",
              lineHeight: 1.05,
            }}
          >
            <motion.span
              variants={wordVariants}
              style={{ display: "inline-block" }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
