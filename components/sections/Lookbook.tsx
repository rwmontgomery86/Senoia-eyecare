"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import Placeholder from "@/components/ui/Placeholder";

type Tile = {
  variant: "portrait" | "square" | "tall" | "landscape";
  caption: string;
  span?: string;
};

const TILES: Tile[] = [
  { variant: "tall", caption: "[ portrait — model, oversized round ]", span: "row-span-2" },
  { variant: "square", caption: "[ macro — acetate detail, gold rivet ]" },
  { variant: "portrait", caption: "[ portrait — couple, golden hour ]" },
  { variant: "landscape", caption: "[ interior — Senoia atelier, frame wall ]", span: "col-span-2" },
  { variant: "square", caption: "[ macro — temple tip, hand-finished ]" },
  { variant: "portrait", caption: "[ portrait — model, slim metal ]" },
];

export default function Lookbook() {
  return (
    <section
      id="lookbook"
      className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>Lookbook · Spring</EyebrowLabel>
          <h2 className="mt-2 max-w-3xl font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2">
            A season in frame.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {TILES.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.1,
                delay: (i % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group cursor-pointer overflow-hidden ${t.span ?? ""}`}
            >
              <div className="h-full transition-transform duration-1000 ease-expo group-hover:scale-[1.04]">
                <Placeholder variant={t.variant} caption={t.caption} className="h-full w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 border border-charcoal/30 px-7 py-4 font-body text-[11px] uppercase tracking-eyebrow text-charcoal transition-all duration-500 ease-expo hover:border-gold hover:text-gold"
          >
            View the full lookbook
            <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
