"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const NAV_LINKS = [
  { label: "Care", href: "/care" },
  { label: "Doctors", href: "/doctors" },
  { label: "Patient forms", href: "/forms" },
  { label: "Visit", href: "/visit" },
  { label: "Insurances", href: "/insurances" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const light = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barClasses = light
    ? "bg-cream/85 backdrop-blur-xl border-b border-charcoal/5 text-charcoal"
    : "bg-transparent text-cream";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ease-expo ${barClasses}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Mobile-only phone link (left) */}
        <div className="flex flex-1 items-center md:hidden">
          <a
            href={`tel:${site.phone.tel}`}
            aria-label={`Call ${site.phone.display}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 font-body text-[11px] uppercase tracking-eyebrow text-charcoal transition-colors duration-500 ease-expo hover:bg-gold-light"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call
          </a>
        </div>

        {/* Left links (desktop) */}
        <nav className="hidden flex-1 items-center gap-10 md:flex">
          {NAV_LINKS.slice(0, 3).map((l) => (
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
            } ${light ? "" : "[filter:brightness(0)_invert(1)]"}`}
          />
        </Link>

        {/* Right links + CTA (desktop) */}
        <nav className="hidden flex-1 items-center justify-end gap-8 md:flex">
          {NAV_LINKS.slice(3).map((l) => (
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
            className={`group inline-flex shrink-0 items-center gap-2 whitespace-nowrap border px-5 py-2.5 text-[10px] uppercase tracking-eyebrow transition-all duration-500 ease-expo ${
              light
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
        <div className="flex flex-1 items-center justify-end md:hidden">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center"
          aria-label="Open menu"
        >
          <span className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-px w-6 transition-all duration-500 ease-expo ${light ? "bg-charcoal" : "bg-cream"} ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${light ? "bg-charcoal" : "bg-cream"} ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-500 ease-expo ${light ? "bg-charcoal" : "bg-cream"} ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
        </div>
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
