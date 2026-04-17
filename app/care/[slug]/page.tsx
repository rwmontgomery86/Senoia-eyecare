import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import PageBack from "@/components/ui/PageBack";
import PageHeader from "@/components/ui/PageHeader";
import BookingCTA from "@/components/sections/BookingCTA";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.eyebrow,
    description: service.summary,
  };
}

export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <main className="relative">
      <div className="bg-cream px-6 pt-32 md:px-10 md:pt-40 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <PageBack href="/care" label="Back to care" />
        </div>
      </div>

      <PageHeader
        eyebrow={`N° ${service.number}  ·  Care`}
        title={service.title}
        description={service.intro}
      />

      <section className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <GoldRule width="6rem" />
            <EyebrowLabel>What to expect</EyebrowLabel>
          </div>
          <ul className="space-y-8 md:col-span-7">
            {service.whatToExpect.map((item, i) => (
              <li
                key={i}
                className="flex gap-6 border-b border-charcoal/10 pb-8 last:border-none"
              >
                <span className="font-accent text-base italic text-gold">
                  0{i + 1}
                </span>
                <p className="font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col gap-4">
              <GoldRule width="6rem" />
              <EyebrowLabel>Related care</EyebrowLabel>
            </div>
            <ul className="mt-12 grid grid-cols-1 gap-px bg-charcoal/10 md:grid-cols-2">
              {related.map((r) => (
                <li
                  key={r.slug}
                  className="group relative overflow-hidden bg-cream p-10 transition-colors duration-700 ease-expo md:p-12"
                >
                  <span className="font-accent text-base italic text-gold">
                    N° {r.number}
                  </span>
                  <h3 className="mt-6 font-display text-xl uppercase leading-[1.1] tracking-wide2 text-charcoal md:text-2xl">
                    {r.eyebrow}
                  </h3>
                  <p className="mt-6 font-body text-sm font-light leading-relaxed text-charcoal/70">
                    {r.summary}
                  </p>
                  <Link
                    href={`/care/${r.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-eyebrow text-gold transition-colors hover:text-gold-light"
                  >
                    Read more
                    <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <BookingCTA />
    </main>
  );
}
