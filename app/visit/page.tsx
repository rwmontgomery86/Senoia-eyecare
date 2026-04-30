import type { Metadata } from "next";
import AddressLink from "@/components/ui/AddressLink";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import PageHeader from "@/components/ui/PageHeader";
import BookingCTA from "@/components/sections/BookingCTA";
import VisitBannerA from "@/components/sections/visit-banner-variants/VisitBannerA";
import VisitBannerB from "@/components/sections/visit-banner-variants/VisitBannerB";
import VisitBannerC from "@/components/sections/visit-banner-variants/VisitBannerC";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `Address, hours, and how to find us. ${site.address.line1}, ${site.address.line2}.`,
};

function VariantBanner({ v }: { v: string | undefined }) {
  if (v === "1") return <VisitBannerA />;
  if (v === "2") return <VisitBannerB />;
  if (v === "3") return <VisitBannerC />;
  return null;
}

export default async function VisitPage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string; hero?: string }>;
}) {
  const { v, hero } = await searchParams;
  const heroBanner = hero ? <VariantBanner v={hero} /> : null;
  return (
    <main className="relative">
      {heroBanner ?? (
        <PageHeader
          eyebrow="Visit"
          title="Finding us."
          description="One door, on Main Street, in the quietest corner of the square. Come early; stay a while."
        />
      )}

      <section className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="flex flex-col gap-4">
              <GoldRule width="6rem" />
              <EyebrowLabel>Address</EyebrowLabel>
              <address className="mt-2 not-italic font-body text-lg font-light leading-relaxed text-charcoal/80">
                <AddressLink
                  address={`${site.address.line1}, ${site.address.line2}`}
                  className="block transition-colors duration-300 ease-expo hover:text-gold"
                >
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </AddressLink>
              </address>
            </div>
            <div className="mt-12 flex flex-col gap-4">
              <GoldRule width="6rem" />
              <EyebrowLabel>Contact</EyebrowLabel>
              <ul className="mt-2 space-y-3 font-body text-lg font-light text-charcoal/80">
                <li>
                  <a href={`tel:${site.phone.tel}`} className="hover:text-gold">
                    {site.phone.display}
                  </a>
                </li>
                <li className="text-charcoal/55">Fax · {site.fax}</li>
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-gold">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 flex flex-col gap-4">
              <GoldRule width="6rem" />
              <EyebrowLabel>Hours</EyebrowLabel>
              <ul className="mt-2 space-y-3 font-body text-lg font-light text-charcoal/80">
                {site.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative aspect-square w-full overflow-hidden border border-gold/30">
              <iframe
                title={`Map showing ${site.address.line1}, ${site.address.line2}`}
                src={site.mapEmbedUrl}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <VariantBanner v={v} />

      <BookingCTA />
    </main>
  );
}
