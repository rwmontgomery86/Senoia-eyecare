import type { Metadata } from "next";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import PageHeader from "@/components/ui/PageHeader";
import Placeholder from "@/components/ui/Placeholder";
import BookingCTA from "@/components/sections/BookingCTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `Address, hours, and how to find us. ${site.address.line1}, ${site.address.line2}.`,
};

export default function VisitPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="Visit"
        title="Finding us."
        description="One door, on Main Street, in the quietest corner of the square. Come early; stay a while."
      />

      <section className="relative bg-cream-deep px-6 py-32 md:px-10 md:py-40 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="flex flex-col gap-4">
              <GoldRule width="6rem" />
              <EyebrowLabel>Address</EyebrowLabel>
              <address className="mt-2 not-italic font-body text-lg font-light leading-relaxed text-charcoal/80">
                {site.address.line1}
                <br />
                {site.address.line2}
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
            <div className="mt-12 flex flex-col gap-4">
              <GoldRule width="6rem" />
              <EyebrowLabel>Parking</EyebrowLabel>
              <p className="mt-2 max-w-md font-body text-base font-light leading-relaxed text-charcoal/75">
                [Placeholder — street parking along Main; a small lot behind the
                building accessible from Baggarly Way. No meters.]
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <Placeholder
              variant="square"
              caption="[ map — Senoia, Georgia · 120 Main Street ]"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
