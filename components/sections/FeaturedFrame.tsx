"use client";

import Image from "next/image";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";

export default function FeaturedFrame() {
  return (
    <section
      id="featured"
      className="relative isolate overflow-hidden bg-charcoal-deep px-6 py-32 text-cream md:px-10 md:py-48 lg:px-14 lg:py-56"
    >
      {/* Spotlight radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168,136,77,0.10) 0%, rgba(26,25,24,0) 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel tone="cream">Featured frame · April</EyebrowLabel>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-16 md:mt-20 md:grid-cols-12 md:gap-20">
          {/* Left: serial + headline */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-5"
            >
              <span className="font-accent text-base italic text-gold">
                N°&nbsp;014
              </span>
              <WordReveal
                text="State — Reid"
                as="h2"
                className="font-display text-cream uppercase leading-[1.05] text-4xl md:text-5xl tracking-wide2"
              />
            </motion.div>

            <p className="mt-6 max-w-md font-accent text-xl italic text-gold-light">
              Hand-built Chicago titanium, with an acetate inlay cut by hand.
            </p>
          </div>

          {/* Right: framed image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="relative p-3">
              <div className="pointer-events-none absolute inset-0 border border-gold/40" />
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/assets/images/home-page/featured-frame-state-reid.jpg"
                  alt="State Reid frame — hand-built Chicago titanium with acetate inlay"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  quality={85}
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-1 gap-10 border-t border-cream/10 pt-12 md:grid-cols-12 md:gap-20"
        >
          <p className="md:col-span-7 font-body text-base font-light leading-relaxed text-cream/75 md:text-lg">
            A study in American craft. The Reid takes its silhouette from the
            1914 Reid Murdoch clocktower on the Chicago River — titanium for
            the industry, acetate for the sun, earth, and water it overlooks.
            Built by seventy hands in Chicago. Available exclusively at the
            Senoia atelier.
          </p>
          <div className="flex items-end justify-start md:col-span-5 md:justify-end">
            <a
              href="#"
              className="group inline-flex items-center gap-3 border border-gold/60 px-7 py-4 font-body text-[11px] uppercase tracking-eyebrow text-gold transition-all duration-500 ease-expo hover:border-gold-light hover:text-gold-light"
            >
              Discover this frame
              <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
