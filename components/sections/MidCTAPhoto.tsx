"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Placeholder from "@/components/ui/Placeholder";
import { site } from "@/data/site";

export default function MidCTAPhoto() {
  return (
    <section className="relative overflow-hidden bg-charcoal-deep px-6 py-28 text-cream md:px-10 lg:px-14">
      {/* Photo layer */}
      <div className="absolute inset-0 opacity-55">
        <Placeholder
          variant="free"
          tone="dark"
          className="h-full w-full"
          caption="[ practice interior — golden-hour, low-contrast ]"
        />
      </div>

      {/* Scrim */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(26,25,24,0.85) 0%, rgba(26,25,24,0.5) 60%, rgba(26,25,24,0.7) 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[640px]"
        >
          <EyebrowLabel tone="cream">Schedule</EyebrowLabel>
          <h3 className="mt-4 font-display text-3xl uppercase leading-[1.05] tracking-wide2 text-cream md:text-4xl lg:text-5xl">
            Ready when you are.
          </h3>
          <p className="mt-4 font-accent text-2xl italic text-cream/85">
            A room without rush — please allow ninety minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-3 border border-gold bg-gold px-8 py-4 font-body text-[11px] uppercase tracking-eyebrow text-charcoal-deep transition-all duration-500 ease-expo hover:border-gold-light hover:bg-gold-light"
          >
            Book online
            <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex items-center gap-3 border border-cream/40 px-7 py-4 font-body text-[11px] uppercase tracking-eyebrow text-cream transition-all duration-500 ease-expo hover:border-gold hover:text-gold"
          >
            {site.phone.display}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
