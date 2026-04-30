"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import { site } from "@/data/site";

export default function VisitBannerB() {
  return (
    <section className="relative bg-charcoal-deep px-6 py-32 text-cream md:px-10 md:py-40 lg:px-14">
      <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
        <GoldRule width="4rem" />
        <div className="mt-6">
          <EyebrowLabel>A first visit</EyebrowLabel>
        </div>
        <div className="mt-4">
          <WordReveal
            as="h2"
            text="Unhurried care, by appointment."
            className="font-display text-cream uppercase leading-[1.05] text-3xl md:text-5xl tracking-wide2"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 font-body text-base font-light leading-relaxed text-cream/75 md:text-lg"
        >
          Now welcoming new patients in Senoia. Most major insurance accepted.
          Ninety minutes, one room, one patient at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap justify-center gap-4"
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <GoldRule width="4rem" className="mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
