"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="frame-hero"
      className="relative isolate overflow-hidden bg-charcoal-deep px-6 pb-32 pt-20 text-cream md:px-10 md:pb-40 md:pt-24 lg:px-14 lg:pb-48 lg:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(168,136,77,0.14) 0%, rgba(26,25,24,0) 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel tone="cream">Featured frame · April</EyebrowLabel>
        </div>

        <div className="mt-14 grid grid-cols-1 items-end gap-16 md:mt-20 md:grid-cols-12 md:gap-20 lg:gap-24">
          <div className="md:col-span-5">
            <motion.span
              aria-hidden
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="block font-display text-gold/30 leading-[0.82] text-[clamp(6rem,16vw,14rem)] tracking-[0.02em]"
            >
              N°&nbsp;014
            </motion.span>

            <div className="mt-10">
              <WordReveal
                text="State — Reid."
                as="h1"
                inView={false}
                className="font-display text-cream uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2"
              />
            </div>

            <p className="mt-7 max-w-md font-accent text-xl italic text-gold-light md:text-2xl">
              Hand-built Chicago titanium, with an acetate inlay cut by hand.
            </p>

            <p className="mt-8 max-w-md font-body text-base font-light leading-relaxed text-cream/75 md:text-lg">
              Drawn from the 1914 Reid Murdoch clocktower on the Chicago River
              — titanium for the industry, acetate for the sun, earth, and
              water it overlooks. Built by seventy hands at State&apos;s
              Chicago factory.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
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
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="relative p-3">
              <div className="pointer-events-none absolute inset-0 border border-gold/40" />
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/assets/images/home-page/featured-frame-state-reid.jpg"
                  alt="State Reid frame — hand-built Chicago titanium with acetate inlay"
                  fill
                  priority
                  sizes="(min-width: 768px) 58vw, 100vw"
                  quality={85}
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
              <span className="font-body text-[10px] uppercase tracking-eyebrow text-cream/60">
                Colorway · TBC at fitting
              </span>
              <span className="font-accent text-base italic text-gold">
                State Optical Co. · Chicago
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
