import type { Metadata } from "next";
import VisitBannerA from "@/components/sections/visit-banner-variants/VisitBannerA";
import VisitBannerB from "@/components/sections/visit-banner-variants/VisitBannerB";
import VisitBannerC from "@/components/sections/visit-banner-variants/VisitBannerC";

export const metadata: Metadata = {
  title: "Visit · Banner preview (internal)",
  description: "Internal preview — three macro layouts for the /visit booking banner.",
  robots: { index: false, follow: false },
};

const variants: Array<{
  id: string;
  label: string;
  title: string;
  blurb: string;
  Component: () => React.ReactElement;
  midHref: string;
  heroHref: string;
}> = [
  {
    id: "A",
    label: "Variant A",
    title: "Editorial split — cream, image-right",
    blurb: "Two-column. Brand-consistent, welcoming. Lowest risk, highest brand fit.",
    Component: VisitBannerA,
    midHref: "/visit?v=1",
    heroHref: "/visit?hero=1",
  },
  {
    id: "B",
    label: "Variant B",
    title: "Centered insert — cream-deep, no image",
    blurb: "Single centered column. Print-insert / formal. Negative space does the work.",
    Component: VisitBannerB,
    midHref: "/visit?v=2",
    heroHref: "/visit?hero=2",
  },
  {
    id: "C",
    label: "Variant C",
    title: "Ledger band — charcoal-deep, asymmetric",
    blurb: "Image-left + numbered ledger. Most landing-page-shaped of the three.",
    Component: VisitBannerC,
    midHref: "/visit?v=3",
    heroHref: "/visit?hero=3",
  },
];

export default function VisitBannerPreviewPage() {
  return (
    <main className="relative bg-cream">
      <header className="border-b border-charcoal/10 bg-cream px-6 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <span className="font-body text-[11px] uppercase tracking-eyebrow text-gold">
            Internal preview
          </span>
          <h1 className="mt-4 font-display text-3xl uppercase leading-[1.05] tracking-wide2 text-charcoal md:text-4xl">
            /visit banner — three macro variants
          </h1>
          <p className="mt-4 max-w-2xl font-body text-sm font-light leading-relaxed text-charcoal/70 md:text-base">
            Three meaningfully different directions for the mid-page conversion banner on
            the /visit page. Each is rendered below at full width. Click a variant title
            to see it in real context on /visit.
          </p>
        </div>
      </header>

      {variants.map(({ id, label, title, blurb, Component, midHref, heroHref }) => (
        <div key={id}>
          <div className="border-y border-charcoal/10 bg-cream-deep/60 px-6 py-8 md:px-10 lg:px-14">
            <div className="mx-auto flex max-w-[1280px] flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-body text-[11px] uppercase tracking-eyebrow text-gold">
                  {label}
                </span>
                <h2 className="font-display text-xl uppercase tracking-wide2 text-charcoal md:text-2xl">
                  {title}
                </h2>
                <p className="mt-1 font-body text-sm font-light text-charcoal/65">
                  {blurb}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:flex-nowrap">
                <a
                  href={midHref}
                  className="self-start whitespace-nowrap border border-charcoal/30 px-4 py-2 font-body text-[11px] uppercase tracking-eyebrow text-charcoal transition-colors duration-300 ease-expo hover:border-gold hover:text-gold"
                >
                  Mid-page →
                </a>
                <a
                  href={heroHref}
                  className="self-start whitespace-nowrap border border-charcoal/30 px-4 py-2 font-body text-[11px] uppercase tracking-eyebrow text-charcoal transition-colors duration-300 ease-expo hover:border-gold hover:text-gold"
                >
                  As hero →
                </a>
              </div>
            </div>
          </div>
          <Component />
        </div>
      ))}

      <footer className="border-t border-charcoal/10 bg-cream px-6 py-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <p className="font-body text-xs font-light text-charcoal/55">
            Internal preview — delete with the variants once a direction wins.
          </p>
        </div>
      </footer>
    </main>
  );
}
