"use client";

import { motion } from "motion/react";
import { forms } from "@/data/forms";

export default function PatientForms() {
  return (
    <section className="relative bg-cream px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
      <div className="mx-auto max-w-[1280px]">
        <ul className="flex flex-col border-t border-charcoal/15">
          {forms.map((form, i) => {
            const number = String(i + 1).padStart(2, "0");
            const available = form.url.trim().length > 0;
            return (
              <motion.li
                key={form.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-b border-charcoal/15"
              >
                <div className="grid grid-cols-12 items-start gap-6 py-10 md:gap-10 md:py-14">
                  <span className="col-span-2 font-accent italic text-xl text-gold md:col-span-1 md:text-2xl">
                    {number}
                  </span>
                  <div className="col-span-10 md:col-span-7">
                    <h2 className="font-display text-2xl uppercase leading-tight tracking-wide2 text-charcoal md:text-3xl">
                      {form.title}
                    </h2>
                    <p className="mt-4 max-w-xl font-body text-sm font-light leading-relaxed text-charcoal/75 md:text-base">
                      {form.description}
                    </p>
                  </div>
                  <div className="col-span-12 flex md:col-span-4 md:justify-end">
                    {available ? (
                      <a
                        href={form.url}
                        target="_blank"
                        rel="noopener"
                        className="group/link inline-flex items-center gap-3 font-body text-[11px] uppercase tracking-eyebrow text-charcoal transition-colors duration-500 ease-expo hover:text-gold"
                      >
                        <span className="h-px w-8 bg-charcoal/40 transition-all duration-500 ease-expo group-hover/link:w-12 group-hover/link:bg-gold" />
                        Open PDF
                        <span className="inline-block transition-transform duration-500 ease-expo group-hover/link:translate-x-1">
                          →
                        </span>
                      </a>
                    ) : (
                      <span className="font-accent italic text-sm text-charcoal/55 md:text-base">
                        Available at the front desk.
                      </span>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <p className="mt-16 max-w-2xl font-accent italic text-lg leading-snug text-charcoal/70 md:text-xl">
          Can&rsquo;t print? No need. We keep blank copies of every form on
          hand, and there&rsquo;s always time to fill them in before your
          exam.
        </p>
      </div>
    </section>
  );
}
