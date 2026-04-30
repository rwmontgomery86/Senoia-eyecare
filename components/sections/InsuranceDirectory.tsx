"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import { insurances } from "@/data/insurances";

export default function InsuranceDirectory() {
  return (
    <section className="relative bg-cream-deep px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
      <div className="mx-auto max-w-[1280px]">
        {/* Directory eyebrow */}
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>An index of accepted plans</EyebrowLabel>
          <p className="mt-2 max-w-xl font-accent italic text-lg text-charcoal/70 md:text-xl">
            Read down. Vision on the left, medical on the right —&nbsp;listed in
            full.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-24 md:mt-28 md:grid-cols-2 md:gap-x-20 lg:gap-x-28">
          {insurances.map((group, gIdx) => {
            const number = String(gIdx + 1).padStart(2, "0");
            return (
              <div key={group.eyebrow} className="relative">
                {/* Column header — N° large, eyebrow + caption beside */}
                <div className="flex items-end justify-between gap-6 border-b border-charcoal/20 pb-6">
                  <div className="flex flex-col gap-3">
                    <EyebrowLabel>{group.eyebrow}</EyebrowLabel>
                    <h2 className="font-display uppercase tracking-wide2 text-charcoal text-2xl md:text-3xl">
                      {group.title.replace(/\.$/, "")}
                    </h2>
                    <p className="mt-1 max-w-sm font-body text-sm font-light leading-relaxed text-charcoal/65 md:text-base">
                      {group.caption}
                    </p>
                  </div>
                  <span className="shrink-0 font-accent italic leading-none text-gold/70 text-6xl md:text-7xl lg:text-8xl">
                    N°&nbsp;{number}
                  </span>
                </div>

                {/* Carrier rows */}
                <ol className="mt-2">
                  {group.carriers.map((carrier, i) => (
                    <motion.li
                      key={carrier}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative border-b border-charcoal/15"
                    >
                      <a
                        className="flex items-baseline gap-6 py-5 md:py-6"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="w-8 shrink-0 font-accent italic text-base text-gold/80 md:text-lg">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-display uppercase tracking-[0.1em] text-charcoal text-lg leading-snug transition-colors duration-500 ease-expo group-hover:text-gold md:text-xl lg:text-2xl">
                          {carrier}
                        </span>
                        <span
                          aria-hidden
                          className="font-accent italic text-sm text-charcoal/40 transition-all duration-500 ease-expo group-hover:translate-x-1 group-hover:text-gold md:text-base"
                        >
                          accepted
                        </span>
                      </a>
                      <span
                        aria-hidden
                        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 ease-expo group-hover:scale-x-100"
                      />
                    </motion.li>
                  ))}

                  {/* Closing flourish row */}
                  <li className="flex items-center justify-between gap-4 pt-6">
                    <span className="font-accent italic text-sm text-charcoal/55">
                      Total carriers
                    </span>
                    <span className="font-accent italic text-base text-gold md:text-lg">
                      {String(group.carriers.length).padStart(2, "0")}
                    </span>
                  </li>
                </ol>
              </div>
            );
          })}
        </div>

        {/* Final note as a directory closer */}
        <div className="mt-24 border-t border-charcoal/15 pt-10 md:mt-32">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <p className="max-w-xl font-accent italic text-xl text-charcoal/75 md:text-2xl">
              Plans change. If yours isn&rsquo;t listed, call us and we&rsquo;ll
              check.
            </p>
            <span className="font-accent italic text-sm text-gold md:text-base">
              Fin.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
