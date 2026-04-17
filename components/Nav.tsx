"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const NAV_LINKS = [
  { label: "Eyewear", href: "/#featured" },
  { label: "Care", href: "/care" },
  { label: "Doctors", href: "/doctors" },
  { label: "Visit", href: "/visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barClasses = scrolled
    ? "bg-cream/85 backdrop-blur-xl border-b border-charcoal/5 text-charcoal"
    : "bg-transparent text-cream";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ease-expo ${barClasses}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Left links (desktop) */}
        <nav className="hidden flex-1 items-center gap-10 md:flex">
          {NAV_LINKS.slice(0, 2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-eyebrow transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Logo center */}
        <Link
          href="/"
          className="flex flex-1 items-center justify-center py-4"
        >
          <Image
            src="/assets/logo.png"
            alt={site.name}
            width={420}
            height={272}
            priority
            className={`w-auto transition-all duration-700 ease-expo ${
              scrolled ? "h-10" : "h-14 md:h-16"
            } ${scrolled ? "" : "[filter:brightness(0)_invert(1)]"}`}
          />
        </Link>

        {/* Right links + CTA (desktop) */}
        <nav className="hidden flex-1 items-center justify-end gap-8 md:flex">
          {NAV_LINKS.slice(2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-eyebrow transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className={`group inline-flex items-center gap-2 border px-5 py-2.5 text-[10px] uppercase tracking-eyebrow transition-all duration-500 ease-expo ${
              scrolled
                ? "border-charcoal/30 text-charcoal hover:border-gold hover:text-gold"
                : "border-cream/40 text-cream hover:border-gold hover:text-gold"
            }`}
          >
            Book an exam
            <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
              →
            </span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex flex-1 justify-end md:hidden"
          aria-label="Open menu"
        >
          <span className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-px w-6 transition-all duration-500 ease-expo ${scrolled ? "bg-charcoal" : "bg-cream"} ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-charcoal" : "bg-cream"} ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-500 ease-expo ${scrolled ? "bg-charcoal" : "bg-cream"} ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-cream transition-[max-height] duration-700 ease-expo md:hidden ${
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 py-10 text-charcoal">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl uppercase tracking-wide2"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-block border border-charcoal/40 px-5 py-3 text-[11px] uppercase tracking-eyebrow"
          >
            Book an exam →
          </a>
        </nav>
      </div>
    </header>
  );
}
