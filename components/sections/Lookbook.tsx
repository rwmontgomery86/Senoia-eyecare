"use client";

import Image from "next/image";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";

type Variant = "portrait" | "square" | "tall" | "landscape";

type Tile = {
  variant: Variant;
  src: string;
  alt: string;
  span?: string;
};

const ASPECT: Record<Variant, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  tall: "aspect-[9/16]",
  landscape: "aspect-[16/9]",
};

const TILES: Tile[] = [
  { variant: "tall", src: "/assets/images/home-page/lookbook-1-tall-model.jpg", alt: "Model wearing oversized round frames", span: "row-span-2" },
  { variant: "square", src: "/assets/images/home-page/lookbook-2-square-macro.jpg", alt: "Macro — acetate detail, gold rivet" },
  { variant: "portrait", src: "/assets/images/home-page/lookbook-3-portrait-couple.jpg", alt: "Couple in golden-hour light" },
  { variant: "landscape", src: "/assets/images/home-page/lookbook-4-landscape-interior.jpg", alt: "Senoia atelier interior, frame wall", span: "col-span-2" },
  { variant: "square", src: "/assets/images/home-page/lookbook-5-square-macro.jpg", alt: "Macro — hand-finished temple tip" },
  { variant: "portrait", src: "/assets/images/home-page/lookbook-6-portrait-model.jpg", alt: "Model wearing slim metal frames" },
];

export default function Lookbook() {
  return (
    <section
      id="lookbook"
      className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>Lookbook · Spring</EyebrowLabel>
          <h2 className="mt-2 max-w-3xl font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2">
            A season in frame.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {TILES.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.1,
                delay: (i % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group cursor-pointer overflow-hidden ${t.span ?? ""}`}
            >
              <div className="h-full transition-transform duration-1000 ease-expo group-hover:scale-[1.04]">
                <div className={`relative h-full w-full ${ASPECT[t.variant]}`}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    loading="eager"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    quality={85}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 border border-charcoal/30 px-7 py-4 font-body text-[11px] uppercase tracking-eyebrow text-charcoal transition-all duration-500 ease-expo hover:border-gold hover:text-gold"
          >
            View the full lookbook
            <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
