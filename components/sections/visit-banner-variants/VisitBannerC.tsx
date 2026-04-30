"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import Placeholder from "@/components/ui/Placeholder";
import { site } from "@/data/site";

const ledger = [
  { n: "01", label: "New patients welcome." },
  { n: "02", label: "Most major insurance accepted." },
];

export default function VisitBannerC() {
  return (
    <section className="relative bg-charcoal-deep px-6 py-24 text-cream md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4"
        >
          <Placeholder
            variant="square"
            tone="dark"
            caption="[ frame fitting ]"
            className="w-full"
          />
        </motion.div>

        <div className="md:col-span-8">
          <div className="flex flex-col gap-4">
            <GoldRule width="6rem" />
            <EyebrowLabel tone="cream">Visit · Senoia</EyebrowLabel>
            <WordReveal
              as="h2"
              text="Book your exam in Senoia."
              className="mt-2 font-display text-cream uppercase leading-[1.0] text-3xl md:text-5xl lg:text-6xl tracking-wide2"
            />
          </div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.25 }}
            className="mt-10 flex flex-col gap-2 border-t border-cream/15 pt-6"
          >
            {ledger.map((row) => (
              <motion.li
                key={row.n}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="flex items-baseline gap-6 border-b border-cream/15 pb-3"
              >
                <span className="font-accent text-xl italic text-gold md:text-2xl">
                  {row.n}
                </span>
                <span className="font-body text-base font-light text-cream/85 md:text-lg">
                  {row.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 font-body text-[11px] uppercase tracking-eyebrow text-charcoal-deep transition-all duration-500 ease-expo hover:bg-gold-light"
            >
              Book online
              <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={`tel:${site.phone.tel}`}
              className="group inline-flex items-center gap-3 border border-cream/40 px-8 py-4 font-body text-[11px] uppercase tracking-eyebrow text-cream transition-all duration-500 ease-expo hover:border-gold hover:text-gold"
            >
              {site.phone.display}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
