"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      const c = containerRef.current.offsetWidth;
      const t = trackRef.current.scrollWidth;
      setDrag(Math.max(0, t - c));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      id="words"
      className="relative overflow-hidden bg-cream-deep py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>In their words</EyebrowLabel>
          <h2 className="mt-2 max-w-3xl font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2">
            What our patients say.
          </h2>
        </div>
      </div>

      <div ref={containerRef} className="mt-16 cursor-grab overflow-hidden md:mt-24">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -drag, right: 0 }}
          dragElastic={0.08}
          whileTap={{ cursor: "grabbing" }}
          className="flex w-max gap-6 px-6 md:gap-10 md:px-10 lg:px-14"
        >
          {testimonials.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex w-[80vw] max-w-[520px] flex-col justify-between border border-charcoal/10 bg-cream p-10 md:w-[520px] md:p-14"
            >
              <span className="font-display text-7xl leading-none text-gold/70 md:text-8xl">
                &ldquo;
              </span>
              <blockquote className="mt-2 font-accent text-2xl italic leading-snug text-charcoal/85 md:text-3xl">
                {q.text}
              </blockquote>
              <figcaption className="mt-12 flex items-center gap-4">
                <span className="block h-px w-8 bg-gold" />
                <div>
                  <p className="font-display text-sm uppercase tracking-wide2 text-charcoal">
                    {q.name}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-eyebrow text-charcoal/60">
                    {q.note}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1440px] items-center gap-3 px-6 text-[10px] uppercase tracking-eyebrow text-charcoal/40 md:px-10 lg:px-14">
        <span className="block h-px w-8 bg-charcoal/30" />
        Drag to read more
      </div>
    </section>
  );
}
