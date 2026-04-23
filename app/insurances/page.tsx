import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import BookingCTA from "@/components/sections/BookingCTA";
import InsuranceGroups from "@/components/sections/InsuranceGroups";
import GlassesMotif from "@/components/ui/GlassesMotif";

export const metadata: Metadata = {
  title: "Insurances",
  description:
    "Vision and medical plans accepted at Senoia Eyecare. If yours isn't listed, call us.",
};

export default function InsurancesPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="Insurances"
        title="Accepted plans."
        description="We accept most major vision and medical insurance plans. Bring your card; we'll verify the rest."
      />

      <InsuranceGroups />

      <section className="relative bg-cream px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
          <div className="w-[220px] opacity-80 md:w-[280px]">
            <GlassesMotif animated={false} strokeWidth={1.2} />
          </div>
          <p className="mt-10 max-w-2xl font-accent italic text-xl leading-snug text-charcoal/75 md:text-2xl">
            Plans change. If yours isn&rsquo;t listed, call us and we&rsquo;ll
            check.
          </p>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
