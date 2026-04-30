"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";
import GlassesMotif from "@/components/ui/GlassesMotif";
import { services } from "@/data/services";

export default function CareIndex() {
  const [activeSlug, setActiveSlug] = useState<string>(services[0]?.slug ?? "");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const slug = visible[0].target.getAttribute("data-slug");
          if (slug) setActiveSlug(slug);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Header */}
      <section className="relative bg-cream px-6 pb-20 pt-40 text-center md:px-10 md:pb-28 md:pt-48 lg:px-14 lg:pb-32 lg:pt-56">
        <div className="mx-auto flex max-w-[820px] flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-accent text-7xl italic text-gold md:text-8xl lg:text-[8rem]"
          >
            N° 014
          </motion.span>
          <div className="mt-6">
            <WordReveal
              as="h1"
              text="A complete practice."
              className="font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-12 w-48 md:w-64"
          >
            <GlassesMotif animated={false} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-12 max-w-xl font-body text-base font-light leading-relaxed text-charcoal/75 md:text-lg"
          >
            Four arms of care, practiced without rush. Each follows from the
            conviction that seeing well is worth the time it takes.
          </motion.p>
        </div>
      </section>

      {/* Mobile TOC ribbon */}
      <div className="sticky top-0 z-30 border-b border-gold/20 bg-cream-deep/95 backdrop-blur md:hidden">
        <ul className="flex gap-6 overflow-x-auto px-6 py-4">
          {services.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a
                href={`#${s.slug}`}
                className={`font-body text-[10px] uppercase tracking-eyebrow transition-colors duration-500 ease-expo ${
                  activeSlug === s.slug
                    ? "text-charcoal"
                    : "text-charcoal/40 hover:text-charcoal/70"
                }`}
              >
                <span className="font-accent italic text-gold">
                  N° {s.number}
                </span>{" "}
                {s.eyebrow}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Body */}
      <section className="relative bg-cream-deep px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
            {/* Sticky desktop TOC */}
            <aside className="hidden md:col-span-4 md:block">
              <div className="sticky top-32">
                <GoldRule width="4rem" />
                <span className="mt-4 inline-block font-body text-[11px] uppercase tracking-eyebrow text-charcoal/60">
                  Contents
                </span>
                <ul className="mt-10 flex flex-col gap-6">
                  {services.map((s) => {
                    const active = activeSlug === s.slug;
                    return (
                      <li key={s.slug}>
                        <a href={`#${s.slug}`} className="group block">
                          <div className="flex items-baseline gap-4">
                            <span
                              className={`font-accent text-lg italic transition-colors duration-500 ease-expo ${
                                active ? "text-gold-light" : "text-gold"
                              }`}
                            >
                              N° {s.number}
                            </span>
                            <span
                              className={`font-display text-base uppercase tracking-wide2 transition-colors duration-500 ease-expo ${
                                active
                                  ? "text-charcoal"
                                  : "text-charcoal/40 group-hover:text-charcoal/70"
                              }`}
                            >
                              {s.eyebrow}
                            </span>
                          </div>
                          <span
                            className={`mt-3 block h-px origin-left bg-gold transition-transform duration-700 ease-expo ${
                              active ? "scale-x-100" : "scale-x-0"
                            }`}
                            style={{ width: "3rem" }}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Vignettes */}
            <div className="md:col-span-8">
              {services.map((s, i) => (
                <article
                  key={s.slug}
                  id={s.slug}
                  data-slug={s.slug}
                  ref={(el) => {
                    if (el) sectionRefs.current.set(s.slug, el);
                  }}
                  className={`scroll-mt-32 ${i > 0 ? "mt-32 md:mt-40" : ""}`}
                >
                  <GoldRule width="8rem" />
                  <div className="mt-10 flex items-baseline gap-6">
                    <span className="font-accent text-4xl italic text-gold md:text-5xl">
                      N° {s.number}
                    </span>
                    <EyebrowLabel>{s.eyebrow}</EyebrowLabel>
                  </div>
                  <h2 className="mt-8 font-accent text-4xl italic leading-[1.05] text-charcoal md:text-5xl lg:text-6xl">
                    {s.title}
                  </h2>
                  <p className="mt-10 font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
                    {s.intro}
                  </p>
                  <ul className="mt-10 space-y-5">
                    {s.whatToExpect.map((line, idx) => (
                      <li key={idx} className="flex gap-5">
                        <span className="font-accent text-base italic text-gold">
                          N° {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-body text-sm font-light leading-relaxed text-charcoal/75 md:text-base">
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/care/${s.slug}`}
                    className="group mt-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-eyebrow text-gold transition-all duration-500 ease-expo hover:text-gold-light"
                  >
                    Read the full chapter
                    <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
