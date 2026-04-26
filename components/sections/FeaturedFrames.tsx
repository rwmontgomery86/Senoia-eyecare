"use client";

import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import FrameCard from "@/components/ui/FrameCard";
import { featuredFrames } from "@/data/frames";

export default function FeaturedFrames() {
  return (
    <section
      id="featured"
      className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>Featured frames · April</EyebrowLabel>
          <WordReveal
            as="h2"
            text="This month, in the case."
            className="mt-2 max-w-[760px] font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2"
          />
          <p className="mt-4 max-w-[540px] font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
            Three pieces, on the bench this season — each with its own story,
            fit notes, and a place in the shop. Visit any of them.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {featuredFrames.map((frame, i) => (
            <FrameCard key={frame.slug} frame={frame} index={i} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/frames"
            className="group inline-flex items-center gap-3 border border-charcoal/30 px-7 py-4 font-body text-[11px] uppercase tracking-eyebrow text-charcoal transition-all duration-500 ease-expo hover:border-gold hover:text-gold"
          >
            Browse the case
            <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
