import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import BookingCTA from "@/components/sections/BookingCTA";
import PatientForms from "@/components/sections/PatientForms";

export const metadata: Metadata = {
  title: "Patient forms",
  description:
    "Download and complete patient forms before your visit to Senoia Eyecare.",
};

export default function FormsPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="Patient forms"
        title="Before your visit."
        description="A few short forms save time in the chair. Download, print, and bring them with you — or fill them out when you arrive."
      />

      <PatientForms />

      <BookingCTA />
    </main>
  );
}
