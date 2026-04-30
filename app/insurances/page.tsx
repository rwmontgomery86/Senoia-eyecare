import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import BookingCTA from "@/components/sections/BookingCTA";
import InsuranceDirectory from "@/components/sections/InsuranceDirectory";

export const metadata: Metadata = {
  title: "Insurances",
  description:
    "An index of vision and medical carriers we accept. If yours isn't listed, call us.",
};

export default function InsurancesPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="Insurances"
        title="Accepted plans."
        description="An index of vision and medical carriers we accept. Bring your card; we'll verify the rest."
      />

      <InsuranceDirectory />

      <BookingCTA />
    </main>
  );
}
