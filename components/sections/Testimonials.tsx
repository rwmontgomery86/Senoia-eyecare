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
      className="relative overflow-hidden bg-cream py-32 md:py-40"
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
              className="flex w-[80vw] max-w-[560px] flex-col border-t border-gold/50 bg-cream-deep p-10 md:w-[440px] md:p-12 lg:w-[520px] lg:p-14"
            >
              <div
                aria-label="5 out of 5 stars"
                className="flex items-center gap-1.5 text-gold"
              >
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} />
                ))}
              </div>

              <blockquote className="mt-10 font-accent text-xl italic leading-relaxed text-charcoal/85 md:text-2xl md:leading-relaxed">
                &ldquo;{q.text}&rdquo;
              </blockquote>

              <figcaption className="mt-12 font-body text-[11px] uppercase tracking-eyebrow text-gold">
                <span aria-hidden>—&nbsp;</span>
                <span className="text-charcoal/70">{q.name}</span>
                {q.note && (
                  <span className="ml-2 text-charcoal/45">· {q.note}</span>
                )}
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

function Star() {
  return (
    <svg
      aria-hidden
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M12 2.5l2.95 6.6 7.05.62-5.32 4.78 1.62 7-6.3-3.85L5.7 21.5l1.62-7L2 9.72l7.05-.62L12 2.5z" />
    </svg>
  );
}
