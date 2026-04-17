"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import WordReveal from "@/components/ui/WordReveal";
import { site } from "@/data/site";

export default function BookingCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      id="book"
      className="relative isolate overflow-hidden bg-charcoal px-6 py-40 text-cream md:px-10 md:py-56 lg:px-14"
    >
      {/* Parallax bg */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -inset-y-16 opacity-60"
      >
        <Image
          src="/assets/images/home-page/booking-cta-background.jpg"
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/80 via-charcoal-deep/70 to-charcoal-deep/90"
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start">
        <EyebrowLabel tone="cream">Schedule</EyebrowLabel>
        <div className="mt-6">
          <WordReveal
            text="Book your eye exam."
            as="h2"
            className="font-display text-cream uppercase leading-[0.95] text-[12vw] md:text-[7rem] lg:text-[9rem] tracking-wide2"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 items-end gap-12 md:grid-cols-12"
        >
          <p className="md:col-span-6 font-body text-base font-light leading-relaxed text-cream/75 md:text-lg">
            Comprehensive evaluations by appointment. New patients welcome.
            We see one patient at a time, in a room without rush — please
            allow ninety minutes for your visit.
          </p>
          <div className="flex flex-wrap gap-6 md:col-span-6 md:justify-end">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
