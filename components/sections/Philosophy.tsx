"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>Our philosophy</EyebrowLabel>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <WordReveal
              text="Eyewear should feel inevitable — not chosen, but found."
              as="h2"
              className="font-display text-charcoal uppercase leading-[1.05] text-[7vw] md:text-[3.4rem] lg:text-[4rem] tracking-wide2"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 md:pt-4"
          >
            <p className="font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
              For seven generations, the small town of Senoia has been a place
              that rewards a slower second look. Our practice is built on the
              same principle: that comprehensive eye care and quietly
              extraordinary frames belong together, in a room without rush.
            </p>
            <p className="mt-6 font-accent text-xl italic text-gold">
              — A studio for the considered eye.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
