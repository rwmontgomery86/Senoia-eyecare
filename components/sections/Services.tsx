"use client";

import Link from "next/link";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import Placeholder from "@/components/ui/Placeholder";
import { services } from "@/data/services";

export default function Services() {
  const [feature, ...rest] = services;

  return (
    <section
      id="services"
      className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>Care</EyebrowLabel>
          <WordReveal
            as="h2"
            text="A complete practice."
            className="mt-2 font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2"
          />
          <p className="mt-6 max-w-xl font-body text-sm font-light leading-relaxed text-charcoal/70 md:text-base">
            One discipline, opened. Three more, indexed alongside.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Featured service — col 1–7 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="group lg:col-span-7"
          >
            <Placeholder
              variant="landscape"
              caption={`${feature.eyebrow} · feature`}
            />

            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-accent text-base italic text-gold">
                N° {feature.number}
              </span>
              <span className="h-px flex-1 bg-gold/30" />
              <span className="font-body text-[10px] uppercase tracking-eyebrow text-charcoal/55">
                Featured
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl uppercase leading-[1.1] text-charcoal tracking-[0.04em] md:text-4xl">
              {feature.title}
            </h3>
            <p className="mt-6 max-w-xl font-body text-base font-light leading-relaxed text-charcoal/75 md:text-lg">
              {feature.intro}
            </p>
            <Link
              href={`/care/${feature.slug}`}
              className="mt-10 inline-flex items-center gap-2 font-body text-[10px] uppercase tracking-eyebrow text-gold transition-colors duration-500 ease-expo hover:text-gold-light"
            >
              Read on {feature.eyebrow.toLowerCase()}
              <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </motion.article>

          {/* Index of remaining services — col 8–12 */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <span className="font-body text-[10px] uppercase tracking-eyebrow text-charcoal/55">
              Also in care
            </span>
            <div className="flex flex-col gap-4">
              {rest.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={`/care/${s.slug}`}
                    className="group block border border-gold/30 bg-cream p-7 transition-all duration-500 ease-expo hover:translate-x-1 hover:border-gold md:p-8"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-accent text-sm italic text-gold">
                        N° {s.number}
                      </span>
                      <span
                        aria-hidden
                        className="font-display text-base text-gold transition-transform duration-500 ease-expo group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </div>
                    <h4 className="mt-4 font-display text-lg uppercase leading-[1.15] text-charcoal tracking-[0.04em] md:text-xl">
                      {s.eyebrow}
                    </h4>
                    <p className="mt-3 font-body text-sm font-light leading-relaxed text-charcoal/70">
                      {s.summary}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
