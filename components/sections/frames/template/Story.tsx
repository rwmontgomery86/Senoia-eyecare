"use client";

import Image from "next/image";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import Placeholder from "@/components/ui/Placeholder";
import WordReveal from "@/components/ui/WordReveal";
import type { Frame } from "@/data/frames";

export default function Story({ frame }: { frame: Frame }) {
  const { story } = frame;

  return (
    <section
      id="story"
      className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>{story.eyebrow}</EyebrowLabel>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6"
          >
            {story.image.src ? (
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={story.image.src}
                  alt={story.image.alt ?? ""}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={85}
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <Placeholder
                variant="portrait"
                tone="light"
                caption={story.image.caption}
              />
            )}
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
              text={story.headline}
              as="h2"
              className="font-display text-charcoal uppercase leading-[1.05] text-3xl md:text-4xl lg:text-5xl tracking-wide2"
            />
            <div className="mt-10 space-y-6">
              {story.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
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
            &ldquo;{story.pullQuote.text}&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span aria-hidden className="block h-px w-12 bg-gold/70" />
            <span className="font-body text-[10px] uppercase tracking-eyebrow text-charcoal/60">
              {story.pullQuote.attribution}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
