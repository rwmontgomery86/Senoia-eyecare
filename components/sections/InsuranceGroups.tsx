"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GlassesMotif from "@/components/ui/GlassesMotif";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import { insurances } from "@/data/insurances";

const GRID_COLS = 3;

export default function InsuranceGroups() {
  return (
    <>
      {insurances.map((group, idx) => {
        const dark = idx % 2 === 1;
        const number = String(idx + 1).padStart(2, "0");
        const fillerCount =
          (GRID_COLS - (group.carriers.length % GRID_COLS)) % GRID_COLS;

        return (
          <section
            key={group.eyebrow}
            className={`relative isolate overflow-hidden px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44 ${
              dark
                ? "bg-charcoal-deep text-cream"
                : "bg-cream-deep text-charcoal"
            }`}
          >
            {dark ? (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 15% 30%, rgba(168,136,77,0.14) 0%, rgba(26,25,24,0) 55%)",
                }}
              />
            ) : null}

            {/* Ghosted background ordinal */}
            <motion.span
              aria-hidden
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className={`pointer-events-none absolute -left-4 top-20 select-none font-accent italic leading-[0.82] text-[34vw] md:-left-8 md:top-28 md:text-[22rem] lg:-left-10 lg:top-24 lg:text-[28rem] ${
                dark ? "text-gold/[0.07]" : "text-charcoal/[0.05]"
              }`}
            >
              {number}
            </motion.span>

            <div className="relative mx-auto max-w-[1280px]">
              <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-16">
                {/* Left: eyebrow, ordinal, headline */}
                <div className="md:col-span-5">
                  <div className="flex flex-col items-start gap-4">
                    <GoldRule width="6rem" />
                    <EyebrowLabel tone={dark ? "cream" : "gold"}>
                      {group.eyebrow}
                    </EyebrowLabel>
                  </div>

                  <motion.span
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`mt-10 block font-accent italic leading-[0.82] text-[22vw] md:text-[9rem] lg:text-[11rem] ${
                      dark ? "text-gold/50" : "text-gold/40"
                    }`}
                  >
                    N°&nbsp;{number}
                  </motion.span>

                  <div className="mt-10">
                    <WordReveal
                      as="h2"
                      text={group.title}
                      className={`font-display uppercase leading-[1.05] text-3xl md:text-4xl lg:text-5xl tracking-wide2 ${
                        dark ? "text-cream" : "text-charcoal"
                      }`}
                    />
                  </div>

                  <p
                    className={`mt-6 max-w-md font-accent italic text-lg md:text-xl ${
                      dark ? "text-gold-light" : "text-gold"
                    }`}
                  >
                    {group.caption}
                  </p>
                </div>

                {/* Right: carrier grid */}
                <div className="md:col-span-7">
                  <div
                    className={`grid grid-cols-2 gap-px md:grid-cols-3 ${
                      dark ? "bg-cream/10" : "bg-charcoal/10"
                    }`}
                  >
                    {group.carriers.map((carrier, i) => (
                      <motion.div
                        key={carrier}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`group relative flex min-h-[140px] items-center justify-center overflow-hidden px-4 py-10 md:min-h-[160px] md:px-6 md:py-12 ${
                          dark ? "bg-charcoal-deep" : "bg-cream-deep"
                        }`}
                      >
                        {/* Sweep fill on hover */}
                        <span
                          aria-hidden
                          className={`pointer-events-none absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-expo group-hover:scale-y-100 ${
                            dark ? "bg-cream" : "bg-charcoal"
                          }`}
                        />
                        {/* Tiny index marker */}
                        <span
                          className={`pointer-events-none absolute left-3 top-3 font-accent italic text-[11px] transition-colors duration-500 ease-expo md:left-4 md:top-4 ${
                            dark
                              ? "text-gold/70 group-hover:text-charcoal/70"
                              : "text-gold group-hover:text-cream/80"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`relative z-10 text-center font-display uppercase leading-tight tracking-[0.08em] text-base transition-colors duration-500 ease-expo md:text-lg ${
                            dark
                              ? "text-cream group-hover:text-charcoal"
                              : "text-charcoal group-hover:text-cream"
                          }`}
                        >
                          {carrier}
                        </span>
                      </motion.div>
                    ))}
                    {Array.from({ length: fillerCount }).map((_, i) => (
                      <div
                        key={`filler-${i}`}
                        aria-hidden
                        className={dark ? "bg-charcoal-deep" : "bg-cream-deep"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
