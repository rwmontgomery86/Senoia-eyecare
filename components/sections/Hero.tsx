"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import WordReveal from "@/components/ui/WordReveal";
import GlassesMotif from "@/components/ui/GlassesMotif";
import { site } from "@/data/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal-deep"
    >
      {/* Parallax photo */}
      <motion.div style={{ y: photoY }} className="absolute inset-0 -inset-y-12">
        <Image
          src="/assets/images/home-page/hero-mobile.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        <Image
          src="/assets/images/home-page/hero-desktop.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(26,25,24,0.92) 0%, rgba(26,25,24,0.7) 35%, rgba(26,25,24,0.82) 75%, rgba(26,25,24,0.95) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-14 lg:pb-24"
      >
        {/* Eyebrow pinned top */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <span className="block h-px w-10 bg-gold/70" />
          <EyebrowLabel tone="cream" className="text-cream/85">
            Senoia, Georgia · Est. {site.founded}
          </EyebrowLabel>
        </motion.div>

        {/* Headline + body + CTA pinned bottom */}
        <div>
          <WordReveal
            text="Considered eyewear."
            as="h1"
            inView={false}
            delay={0.6}
            className="font-display text-cream uppercase leading-[1] text-[clamp(2.25rem,6.5vw,5.25rem)] tracking-[0.02em]"
          />
          <WordReveal
            text="Comprehensive care."
            as="h1"
            inView={false}
            delay={1.0}
            className="mt-2 font-display text-gold/90 uppercase leading-[1] text-[clamp(2.25rem,6.5vw,5.25rem)] tracking-[0.02em]"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md font-body text-sm font-light leading-relaxed text-cream/80 md:text-base"
          >
            A boutique optometry practice for those who believe how you see
            — and how you are seen — is worth a quiet kind of attention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 border border-cream/50 px-7 py-4 font-body text-[11px] uppercase tracking-eyebrow text-cream transition-all duration-500 ease-expo hover:border-gold hover:text-gold"
            >
              Book an exam
              <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated glasses motif - watermark bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute bottom-10 right-6 z-10 w-[200px] md:bottom-12 md:right-12 md:w-[260px]"
      >
        <GlassesMotif animated />
      </motion.div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-body text-[10px] uppercase tracking-eyebrow text-cream/60">
          Scroll
        </span>
        <span className="block h-10 w-px animate-scrollHint bg-cream/50" />
      </div>
    </section>
  );
}
