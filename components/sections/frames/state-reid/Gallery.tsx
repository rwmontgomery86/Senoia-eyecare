"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import Placeholder from "@/components/ui/Placeholder";
import WordReveal from "@/components/ui/WordReveal";

const tiles = [
  {
    variant: "square",
    span: "md:col-span-6",
    caption: "[ Reid · front · linen ground ]",
  },
  {
    variant: "square",
    span: "md:col-span-6",
    caption: "[ Reid · three-quarter · low key ]",
  },
  {
    variant: "landscape",
    span: "md:col-span-7",
    caption: "[ Reid · side profile · titanium temple ]",
  },
  {
    variant: "portrait",
    span: "md:col-span-5",
    caption: "[ Reid · on-face · daylight ]",
  },
] as const;

export default function Gallery() {
  return (
    <section className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>The frame · 02</EyebrowLabel>
          <WordReveal
            text="In four views."
            as="h2"
            className="mt-2 font-display text-charcoal uppercase leading-[1.05] text-3xl md:text-4xl lg:text-5xl tracking-wide2"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.1,
                delay: (i % 2) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={t.span}
            >
              <Placeholder
                variant={t.variant}
                tone="light"
                caption={t.caption}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
