"use client";

import Image from "next/image";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import Placeholder from "@/components/ui/Placeholder";
import WordReveal from "@/components/ui/WordReveal";
import type { Frame, GalleryTile } from "@/data/frames";

const aspectByVariant: Record<GalleryTile["variant"], string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  tall: "aspect-[2/3]",
  wide: "aspect-[16/9]",
  free: "aspect-square",
};

export default function Gallery({ frame }: { frame: Frame }) {
  const { gallery } = frame;

  return (
    <section className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>{gallery.eyebrow}</EyebrowLabel>
          <WordReveal
            text={gallery.headline}
            as="h2"
            className="mt-2 font-display text-charcoal uppercase leading-[1.05] text-3xl md:text-4xl lg:text-5xl tracking-wide2"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12">
          {gallery.tiles.map((tile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.1,
                delay: (i % 2) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={tile.span}
            >
              {tile.imageSrc ? (
                <div
                  className={`relative w-full overflow-hidden ${aspectByVariant[tile.variant]}`}
                >
                  <Image
                    src={tile.imageSrc}
                    alt={tile.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    quality={85}
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <Placeholder
                  variant={tile.variant}
                  tone="light"
                  caption={tile.caption}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
