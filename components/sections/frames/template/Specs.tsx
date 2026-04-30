"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import type { Frame } from "@/data/frames";

export default function Specs({ frame }: { frame: Frame }) {
  const { specs } = frame;

  return (
    <section className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-5">
          <GoldRule width="6rem" />
          <EyebrowLabel className="mt-4">{specs.eyebrow}</EyebrowLabel>
          <WordReveal
            text={specs.headline}
            as="h2"
            className="mt-6 font-display text-charcoal uppercase leading-[1.05] text-3xl md:text-4xl lg:text-5xl tracking-wide2"
          />
          <p className="mt-6 max-w-sm font-body text-base font-light leading-relaxed text-charcoal/70">
            {specs.intro}
          </p>
        </div>
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="m-0 md:col-span-7"
        >
          {specs.items.map((item, i) => (
            <div
              key={item.label}
              className={`grid grid-cols-1 gap-3 border-b border-charcoal/10 py-5 md:grid-cols-2 md:gap-6 ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <dt className="font-body text-[10px] uppercase tracking-eyebrow text-charcoal/60">
                {item.label}
              </dt>
              <dd className="m-0 font-body text-base font-light text-charcoal">
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
