import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import PageBack from "@/components/ui/PageBack";
import BookingCTA from "@/components/sections/BookingCTA";
import { doctors } from "@/data/doctors";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return {};
  return {
    title: doctor.name,
    description: doctor.bioIntro,
  };
}

export default async function DoctorDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) notFound();

  return (
    <main className="relative">
      <div className="bg-cream px-6 pt-32 md:px-10 md:pt-40 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <PageBack href="/doctors" label="Back to doctors" />
        </div>
      </div>

      <section className="relative bg-cream px-6 pb-32 pt-12 md:px-10 md:pb-40 md:pt-16 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={doctor.portrait}
                alt={`Portrait of ${doctor.name}`}
                fill
                priority
                sizes="(min-width: 768px) 42vw, 100vw"
                quality={85}
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <GoldRule width="6rem" />
            <EyebrowLabel>The doctors</EyebrowLabel>
            <h1 className="mt-4 font-display text-4xl uppercase leading-[1.05] tracking-wide2 text-charcoal md:text-5xl">
              {doctor.name}
            </h1>
            <p className="mt-3 text-[11px] uppercase tracking-eyebrow text-charcoal/60">
              {doctor.credentials}
            </p>
            <p className="mt-10 max-w-xl font-accent text-2xl italic leading-snug text-charcoal/85 md:text-3xl">
              {doctor.focusLine}
            </p>
            <div className="mt-10 max-w-xl space-y-6 font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
              <p>{doctor.bioIntro}</p>
              {doctor.bioBody.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <GoldRule width="6rem" />
            <EyebrowLabel>Focus</EyebrowLabel>
          </div>
          <ul className="space-y-6 md:col-span-7">
            {doctor.focusAreas.map((area, i) => (
              <li
                key={i}
                className="flex gap-6 border-b border-charcoal/10 pb-6 last:border-none"
              >
                <span className="font-accent text-base italic text-gold">
                  0{i + 1}
                </span>
                <p className="font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
                  {area}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
