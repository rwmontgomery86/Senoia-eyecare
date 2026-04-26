"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Placeholder from "@/components/ui/Placeholder";
import type { Frame } from "@/data/frames";

export default function FrameCard({
  frame,
  index = 0,
}: {
  frame: Frame;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.1,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/frames/${frame.slug}`}
        className="group block text-charcoal"
      >
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-1000 ease-expo group-hover:scale-[1.04]">
            <Placeholder
              variant="square"
              tone="light"
              caption={`[ ${frame.brand} ${frame.model} — macro, 1:1 ]`}
            />
          </div>
          <span className="pointer-events-none absolute right-5 top-5 font-accent text-lg italic text-gold">
            N° {frame.serial}
          </span>
        </div>

        <div className="pt-7">
          <h3 className="font-display text-xl uppercase tracking-wide2 text-charcoal transition-colors duration-500 ease-expo group-hover:text-gold">
            {frame.brand} — {frame.model}
          </h3>
          <p className="mt-2.5 font-body text-[10px] uppercase tracking-eyebrow text-charcoal/55">
            {frame.material}
          </p>
          <p className="mt-4 font-accent text-lg italic text-charcoal/85">
            {frame.note}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-eyebrow text-gold transition-colors duration-500 ease-expo group-hover:text-gold-light">
            Discover the frame
            <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
