"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import Placeholder from "@/components/ui/Placeholder";
import WordReveal from "@/components/ui/WordReveal";

const lenses = [
  {
    brand: "Hoya",
    model: "MySV",
    note: "A premium single-vision lens, customized to your prescription. Quiet edges, faithful field of view.",
    caption: "[ Hoya · MySV ]",
  },
  {
    brand: "Hoya",
    model: "iD MyStyle V+",
    note: "Free-form progressive — computed to your prescription, your frame, and your posture. The Reid's narrow rims pair well with its slim corridor.",
    caption: "[ Hoya · iD MyStyle V+ ]",
  },
  {
    brand: "Hoya",
    model: "Sync III",
    note: "A near-zone boost on a single-vision lens — for hours behind a screen without the strain of a true progressive.",
    caption: "[ Hoya · Sync III ]",
  },
];

export default function Lenses() {
  return (
    <section className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>Worn with · 04</EyebrowLabel>
          <WordReveal
            text="Lenses."
            as="h2"
            className="mt-2 font-display text-charcoal uppercase leading-[1.05] text-3xl md:text-4xl lg:text-5xl tracking-wide2"
          />
          <p className="mt-4 max-w-xl font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
            We pair every Senoia frame with Hoya lenses — three options
            we&apos;d consider for the Reid, refined at fitting.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-charcoal/10 md:mt-20 md:grid-cols-3">
          {lenses.map((l, i) => (
            <motion.article
              key={l.model}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.1,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-5 bg-cream-deep p-10 md:p-12"
            >
              <span className="font-body text-[10px] uppercase tracking-eyebrow text-gold">
                Lens · Hoya
              </span>
              <Placeholder
                variant="landscape"
                tone="light"
                caption={l.caption}
              />
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
                <span className="font-display text-xl uppercase leading-[1.1] tracking-wide2 text-charcoal md:text-2xl">
                  {l.brand}
                </span>
                <span className="font-accent text-base italic text-gold">
                  {l.model}
                </span>
              </div>
              <p className="font-body text-sm font-light leading-relaxed text-charcoal/70">
                {l.note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
