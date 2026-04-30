"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import { site } from "@/data/site";
import type { Frame } from "@/data/frames";

export default function Hero({ frame }: { frame: Frame }) {
  const headline = `${frame.brand} — ${frame.model}.`;

  return (
    <section
      id="frame-hero"
      className="relative isolate overflow-hidden bg-charcoal-deep text-cream"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
        aria-hidden
      >
        <Image
          src={frame.hero.imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(26,25,24,0.97) 0%, rgba(26,25,24,0.88) 40%, rgba(26,25,24,0.45) 70%, rgba(26,25,24,0.2) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 75% 35%, rgba(168,136,77,0.18) 0%, rgba(26,25,24,0) 55%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-[1280px] flex-col justify-end px-6 pb-32 pt-32 md:min-h-[92vh] md:px-10 md:pb-40 md:pt-40 lg:px-14 lg:pb-48 lg:pt-48">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-4"
          >
            <GoldRule width="6rem" />
            <EyebrowLabel tone="cream">{frame.hero.eyebrow}</EyebrowLabel>
          </motion.div>

          <motion.span
            aria-hidden
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 block font-display text-gold/30 leading-[0.82] text-[clamp(5rem,12vw,11rem)] tracking-[0.02em]"
          >
            N°&nbsp;{frame.serial}
          </motion.span>

          <div className="mt-6">
            <WordReveal
              text={headline}
              as="h1"
              inView={false}
              delay={0.95}
              className="font-display text-cream uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-md font-accent text-xl italic text-gold-light md:text-2xl"
          >
            {frame.hero.intro}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md font-body text-base font-light leading-relaxed text-cream/80 md:text-lg"
          >
            {frame.hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 font-body text-[11px] uppercase tracking-eyebrow text-charcoal-deep transition-all duration-500 ease-expo hover:bg-gold-light"
            >
              Book a fitting
              <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
                →
              </span>
            </a>
            <Link
              href="#story"
              className="group inline-flex items-center gap-3 border border-cream/40 px-8 py-4 font-body text-[11px] uppercase tracking-eyebrow text-cream transition-all duration-500 ease-expo hover:border-gold hover:text-gold"
            >
              Read the story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
