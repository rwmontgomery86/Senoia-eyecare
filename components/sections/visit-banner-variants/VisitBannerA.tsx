"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import Placeholder from "@/components/ui/Placeholder";
import { site } from "@/data/site";

export default function VisitBannerA() {
  return (
    <section className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-6">
          <div className="flex flex-col gap-4">
            <GoldRule width="6rem" />
            <EyebrowLabel>Now welcoming</EyebrowLabel>
            <WordReveal
              as="h2"
              text="Now seeing new patients."
              className="mt-2 font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-8"
          >
            <p className="max-w-md font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
              Comprehensive eye exams in Senoia, by appointment. Most major
              insurance accepted. We see one patient at a time, in a room
              without rush.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-charcoal px-8 py-4 font-body text-[11px] uppercase tracking-eyebrow text-cream transition-all duration-500 ease-expo hover:bg-charcoal-deep"
              >
                Book online
                <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={`tel:${site.phone.tel}`}
                className="group inline-flex items-center gap-3 border border-charcoal/30 px-8 py-4 font-body text-[11px] uppercase tracking-eyebrow text-charcoal transition-all duration-500 ease-expo hover:border-gold hover:text-gold"
              >
                {site.phone.display}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6"
        >
          <Placeholder
            variant="portrait"
            caption="[ exam room — warm, unhurried ]"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
