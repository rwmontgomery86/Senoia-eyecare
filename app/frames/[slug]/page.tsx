import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import PageBack from "@/components/ui/PageBack";
import PageHeader from "@/components/ui/PageHeader";
import Placeholder from "@/components/ui/Placeholder";
import BookingCTA from "@/components/sections/BookingCTA";
import { featuredFrames } from "@/data/frames";
import { site } from "@/data/site";

export function generateStaticParams() {
  return featuredFrames
    .filter((f) => f.slug !== "state-reid")
    .map((f) => ({ slug: f.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const frame = featuredFrames.find((f) => f.slug === slug);
  if (!frame) return {};
  return {
    title: `${frame.brand} ${frame.model}`,
    description: frame.note,
  };
}

export default async function FrameDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const frame = featuredFrames.find((f) => f.slug === slug);
  if (!frame) notFound();

  return (
    <main className="relative">
      <div className="bg-cream px-6 pt-32 md:px-10 md:pt-40 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <PageBack href="/frames" label="Back to frames" />
        </div>
      </div>

      <PageHeader
        eyebrow={`N° ${frame.serial}  ·  The Case`}
        title={`${frame.brand} — ${frame.model}`}
        description={frame.note}
      />

      <section className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-6">
            <Placeholder
              variant="square"
              tone="light"
              caption={`[ ${frame.brand} ${frame.model} — macro, 1:1 ]`}
            />
          </div>

          <div className="md:col-span-6">
            <GoldRule width="6rem" />
            <EyebrowLabel>Specifications</EyebrowLabel>

            <dl className="mt-10 space-y-8">
              <div className="flex items-baseline gap-6 border-b border-charcoal/10 pb-6">
                <dt className="w-28 shrink-0 font-body text-[10px] uppercase tracking-eyebrow text-charcoal/55">
                  Serial
                </dt>
                <dd className="font-accent text-xl italic text-gold">
                  N° {frame.serial}
                </dd>
              </div>
              <div className="flex items-baseline gap-6 border-b border-charcoal/10 pb-6">
                <dt className="w-28 shrink-0 font-body text-[10px] uppercase tracking-eyebrow text-charcoal/55">
                  Material
                </dt>
                <dd className="font-body text-base font-light text-charcoal/85 md:text-lg">
                  {frame.material}
                </dd>
              </div>
              <div className="flex items-baseline gap-6">
                <dt className="w-28 shrink-0 font-body text-[10px] uppercase tracking-eyebrow text-charcoal/55">
                  Notes
                </dt>
                <dd className="font-accent text-lg italic text-charcoal/85">
                  {frame.note}
                </dd>
              </div>
            </dl>

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="group mt-12 inline-flex items-center gap-3 border border-gold/60 px-7 py-4 font-body text-[11px] uppercase tracking-eyebrow text-gold transition-all duration-500 ease-expo hover:border-gold-light hover:text-gold-light"
            >
              Book an exam to try it on
              <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
