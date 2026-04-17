"use client";

import Link from "next/link";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import Placeholder from "@/components/ui/Placeholder";
import { doctors } from "@/data/doctors";

const OFFSETS = ["md:translate-y-0", "md:translate-y-24"];

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="relative bg-cream px-6 py-32 md:px-10 md:py-44 lg:px-14 lg:py-56"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>The doctors</EyebrowLabel>
          <h2 className="mt-2 max-w-3xl font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2">
            Two practitioners. One practice.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:mt-28 md:grid-cols-2 md:gap-20">
          {doctors.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group ${OFFSETS[i] ?? ""}`}
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-1000 ease-expo group-hover:-translate-y-2">
                  <Placeholder
                    variant="portrait"
                    caption={d.portraitCaption}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-accent text-base italic text-gold">
                  N° 0{i + 1}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide2 text-charcoal md:text-3xl">
                  {d.name}
                </h3>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-eyebrow text-charcoal/60">
                {d.credentials}
              </p>
              <p className="mt-6 max-w-md font-accent text-xl italic text-charcoal/80">
                {d.focusLine}
              </p>
              <Link
                href={`/doctors/${d.slug}`}
                className="group/link mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-eyebrow text-gold transition-colors hover:text-gold-light"
              >
                Read more
                <span className="inline-block transition-transform duration-500 ease-expo group-hover/link:translate-x-1.5">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
