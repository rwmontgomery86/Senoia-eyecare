"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import Placeholder from "@/components/ui/Placeholder";
import WordReveal from "@/components/ui/WordReveal";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6 lg:col-span-7">
            <div className="flex flex-col gap-4">
              <GoldRule width="6rem" />
              <EyebrowLabel>Our philosophy</EyebrowLabel>
            </div>
            <WordReveal
              text="A small practice for two careful crafts."
              as="h2"
              className="mt-6 font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <p className="font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
                Senoia Eyecare is built around a quiet conviction: that careful
                clinical work and well-chosen eyewear belong together, in the
                same unhurried room. Founded in 2024, the practice was made for
                patients who notice the difference.
              </p>
              <p className="mt-6 font-accent text-xl italic text-gold">
                — Eye care and eyewear, equally.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 md:self-center lg:col-span-5"
          >
            <Placeholder variant="square" caption="Studio interior" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
