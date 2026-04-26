import EyebrowLabel from "@/components/ui/EyebrowLabel";
import { brands } from "@/data/brands";

export default function BrandsStrip() {
  return (
    <section className="relative overflow-hidden bg-cream-deep py-20 md:py-24">
      <div className="mb-10 flex justify-center">
        <EyebrowLabel>The collection · A curated house</EyebrowLabel>
      </div>

      <div className="relative">
        <div className="marquee-track gap-16 whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="font-display text-3xl uppercase tracking-wide2 text-charcoal/70 transition-colors duration-500 hover:text-gold md:text-4xl lg:text-5xl"
            >
              {b}
              <span className="ml-16 inline-block text-gold/60">·</span>
            </span>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream-deep to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream-deep to-transparent" />
      </div>
    </section>
  );
}
