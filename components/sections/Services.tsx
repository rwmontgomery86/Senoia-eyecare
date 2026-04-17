"use client";

import Link from "next/link";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>Care</EyebrowLabel>
          <h2 className="mt-2 max-w-2xl font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2">
            A complete practice.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px bg-charcoal/10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden bg-cream-deep p-10 transition-colors duration-700 ease-expo md:p-12"
            >
              {/* charcoal sweep */}
              <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-charcoal transition-transform duration-700 ease-expo group-hover:scale-y-100" />

              <div className="relative z-10">
                <span className="font-accent text-base italic text-gold transition-colors duration-700 group-hover:text-gold-light">
                  N° {s.number}
                </span>
                <h3
                  className="mt-8 font-display text-xl uppercase leading-[1.1] text-charcoal tracking-[0.04em] transition-colors duration-700 group-hover:text-cream md:text-2xl"
                >
                  {s.eyebrow}
                </h3>
                <p className="mt-6 font-body text-sm font-light leading-relaxed text-charcoal/75 transition-colors duration-700 group-hover:text-cream/80">
                  {s.summary}
                </p>
                <Link
                  href={`/care/${s.slug}`}
                  className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-eyebrow text-gold transition-all duration-500 ease-expo group-hover:text-gold-light"
                >
                  Learn more
                  <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
