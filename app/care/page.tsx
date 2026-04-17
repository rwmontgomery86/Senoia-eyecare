import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import BookingCTA from "@/components/sections/BookingCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Eye care",
  description:
    "Comprehensive exams, specialty contacts, dry eye therapy, and pediatric care. A complete practice, in a room without rush.",
};

export default function CareIndexPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="Care"
        title="A complete practice."
        description="Four arms of care, practiced without rush. Each follows from the conviction that seeing well is worth the time it takes."
      />

      <section className="relative bg-cream-deep px-6 pb-40 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <ul className="grid grid-cols-1 gap-px bg-charcoal/10 md:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.slug}
                className="group relative overflow-hidden bg-cream-deep p-10 transition-colors duration-700 ease-expo md:p-14"
              >
                <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-charcoal transition-transform duration-700 ease-expo group-hover:scale-y-100" />
                <div className="relative z-10">
                  <span className="font-accent text-base italic text-gold transition-colors duration-700 group-hover:text-gold-light">
                    N° {s.number}
                  </span>
                  <h2 className="mt-6 font-display text-2xl uppercase leading-[1.1] tracking-wide2 text-charcoal transition-colors duration-700 group-hover:text-cream md:text-3xl">
                    {s.eyebrow}
                  </h2>
                  <p className="mt-6 max-w-md font-body text-sm font-light leading-relaxed text-charcoal/75 transition-colors duration-700 group-hover:text-cream/80 md:text-base">
                    {s.summary}
                  </p>
                  <Link
                    href={`/care/${s.slug}`}
                    className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-eyebrow text-gold transition-all duration-500 ease-expo group-hover:text-gold-light"
                  >
                    Read more
                    <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
