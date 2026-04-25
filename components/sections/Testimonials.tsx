"use client";

import { motion, useAnimation, useMotionValue } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import { testimonials } from "@/data/testimonials";

const SLIDE_INTERVAL_MS = 6000;
const SLIDE_EASE = [0.16, 1, 0.3, 1] as const;
const SLIDE_DURATION = 1.1;

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  const [drag, setDrag] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      const c = containerRef.current.offsetWidth;
      const t = trackRef.current.scrollWidth;
      setDrag(Math.max(0, t - c));

      const firstCard = trackRef.current.querySelector(
        "figure",
      ) as HTMLElement | null;
      if (firstCard && trackRef.current.children.length > 1) {
        const second = trackRef.current.children[1] as HTMLElement;
        setCardStep(second.offsetLeft - firstCard.offsetLeft);
      } else if (firstCard) {
        setCardStep(firstCard.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const slideTo = useCallback(
    (next: number) => {
      if (cardStep <= 0) return;
      const maxIndex = Math.max(
        0,
        Math.min(testimonials.length - 1, Math.floor(drag / cardStep)),
      );
      const target = next > maxIndex ? 0 : next;
      setIndex(target);
      controls.start({
        x: -target * cardStep,
        transition: { duration: SLIDE_DURATION, ease: SLIDE_EASE },
      });
    },
    [cardStep, drag, controls],
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isPaused) return;
    if (cardStep <= 0) return;
    const id = window.setInterval(() => {
      slideTo(index + 1);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [index, isPaused, cardStep, prefersReducedMotion, slideTo]);

  const handleDragEnd = () => {
    if (cardStep > 0) {
      const current = x.get();
      const nearest = Math.round(-current / cardStep);
      const maxIndex = Math.max(
        0,
        Math.min(testimonials.length - 1, Math.floor(drag / cardStep)),
      );
      const clamped = Math.max(0, Math.min(maxIndex, nearest));
      setIndex(clamped);
      controls.start({
        x: -clamped * cardStep,
        transition: { duration: 0.6, ease: SLIDE_EASE },
      });
    }
    setIsPaused(false);
  };

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

      <div
        ref={containerRef}
        className="mt-16 cursor-grab overflow-hidden md:mt-24"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -drag, right: 0 }}
          dragElastic={0.08}
          whileTap={{ cursor: "grabbing" }}
          animate={controls}
          style={{ x }}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={handleDragEnd}
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
                  {q.note && (
                    <p className="mt-1 text-[10px] uppercase tracking-eyebrow text-charcoal/60">
                      {q.note}
                    </p>
                  )}
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
