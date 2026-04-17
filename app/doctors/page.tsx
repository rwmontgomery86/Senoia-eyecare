import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Testimonials from "@/components/sections/Testimonials";
import BookingCTA from "@/components/sections/BookingCTA";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "The doctors",
  description:
    "Two practitioners. One practice. Meet the optometrists behind Senoia Eyecare.",
};

export default function DoctorsIndexPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="The doctors"
        title="Two practitioners. One practice."
        description="The two optometrists who see every patient who walks through the door. Different emphases, a shared conviction: that an eye exam is an act of attention."
      />

      <section className="relative bg-cream px-6 pb-40 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
          {doctors.map((d, i) => (
            <article key={d.slug} className={`group ${i === 1 ? "md:translate-y-24" : ""}`}>
              <Link href={`/doctors/${d.slug}`} className="block">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-1000 ease-expo group-hover:-translate-y-2">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={d.portrait}
                        alt={`Portrait of ${d.name}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        quality={85}
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-baseline gap-4">
                  <span className="font-accent text-base italic text-gold">
                    N° 0{i + 1}
                  </span>
                  <h2 className="font-display text-2xl uppercase tracking-wide2 text-charcoal md:text-3xl">
                    {d.name}
                  </h2>
                </div>
                <p className="mt-2 text-[11px] uppercase tracking-eyebrow text-charcoal/60">
                  {d.credentials}
                </p>
                <p className="mt-6 max-w-md font-accent text-xl italic text-charcoal/80">
                  {d.focusLine}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-eyebrow text-gold transition-colors group-hover:text-gold-light">
                  Read the full bio
                  <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Testimonials />
      <BookingCTA />
    </main>
  );
}
