import Image from "next/image";
import Link from "next/link";
import GlassesMotif from "@/components/ui/GlassesMotif";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer
      id="visit"
      className="relative bg-charcoal-deep px-6 pt-24 text-cream md:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Image
              src="/assets/logo.png"
              alt={site.name}
              width={240}
              height={155}
              className="h-20 w-auto [filter:brightness(0)_invert(1)]"
            />
            <p className="mt-6 max-w-xs font-body text-sm font-light leading-relaxed text-cream/65">
              A boutique optometry practice in the heart of Senoia, Georgia.
              Considered eyewear. Comprehensive care.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-cream/70 transition-colors hover:text-gold"
              >
                <span className="grid h-9 w-9 place-items-center border border-cream/30 transition-colors group-hover:border-gold">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                  </svg>
                </span>
                {site.social.instagram.handle}
              </a>
            </div>
          </div>

          {/* Visit */}
          <div className="md:col-span-3">
            <EyebrowLabel>Visit</EyebrowLabel>
            <ul className="mt-5 space-y-3 font-body text-sm font-light text-cream/75">
              <li>{site.address.line1}</li>
              <li>{site.address.line2}</li>
              <li className="pt-2">
                <a href={`tel:${site.phone.tel}`} className="hover:text-gold">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <EyebrowLabel>Hours</EyebrowLabel>
            <ul className="mt-5 space-y-3 font-body text-sm font-light text-cream/75">
              {site.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <EyebrowLabel>Senoia</EyebrowLabel>
            <ul className="mt-5 space-y-3 font-body text-sm font-light text-cream/75">
              <li>
                <Link href="/care" className="hover:text-gold">
                  Eye care
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-gold">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-gold">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-gold">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-gold">
                  Visit
                </Link>
              </li>
              <li>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gold"
                >
                  Book an exam
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Glasses motif divider */}
        <div className="mt-20 flex items-center justify-center">
          <div className="w-[280px] opacity-70">
            <GlassesMotif animated={false} strokeWidth={1.2} />
          </div>
        </div>

        {/* Fine print */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-8 text-[10px] uppercase tracking-eyebrow text-cream/40 md:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Senoia, Georgia · Est. {site.founded}</span>
          <span>
            <Link href="/privacy" className="hover:text-gold">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/accessibility" className="hover:text-gold">
              Accessibility
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
