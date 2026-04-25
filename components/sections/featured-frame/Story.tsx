"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import Placeholder from "@/components/ui/Placeholder";
import WordReveal from "@/components/ui/WordReveal";

export default function Story() {
  return (
    <section
      id="story"
      className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>The story · 01</EyebrowLabel>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6"
          >
            <Placeholder
              variant="portrait"
              tone="light"
              caption="[ atelier hand · brushing titanium ]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-6 md:pt-4"
          >
            <WordReveal
              text="From a clocktower on the Chicago River."
              as="h2"
              className="font-display text-charcoal uppercase leading-[1.05] text-3xl md:text-4xl lg:text-5xl tracking-wide2"
            />
            <div className="mt-10 space-y-6">
              <p className="font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
                The Reid Murdoch building has stood at the corner of LaSalle
                and the river since 1914. Its clocktower has kept Chicago on
                time for more than a century — a quiet civic instrument,
                hidden in plain sight. The frame takes its name, and its
                proportion, from the building.
              </p>
              <p className="font-body text-base font-light leading-relaxed text-charcoal/80">
                State Optical builds in Chicago. Seventy craftspeople, working
                by hand, in one factory — finishing each frame from titanium
                and acetate sourced globally and assembled patiently. A frame
                for someone who considers how a thing is made with as much
                mindfulness as how it looks.
              </p>
              <p className="font-body text-base font-light leading-relaxed text-charcoal/80">
                Titanium for the industry. Acetate for the sun, the earth, and
                the water the building overlooks. The Reid is the place where
                those two ideas meet — one in the bone of the frame, the other
                cut by hand into its insert.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 flex flex-col items-center text-center md:mt-40"
        >
          <p className="max-w-3xl font-accent italic leading-[1.25] text-charcoal/85 text-[clamp(2rem,3.6vw,3rem)]">
            “A frame should tell you who made it without saying so.”
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span aria-hidden className="block h-px w-12 bg-gold/70" />
            <span className="font-body text-[10px] uppercase tracking-eyebrow text-charcoal/60">
              Dr. Ross Montgomery · OD
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
