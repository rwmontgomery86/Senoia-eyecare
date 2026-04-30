import type { Metadata } from "next";
import CareIndex from "@/components/sections/CareIndex";
import BookingCTA from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: "Eye care",
  description:
    "Comprehensive exams, specialty contacts, dry eye therapy, and pediatric care. A complete practice, in a room without rush.",
};

export default function CareIndexPage() {
  return (
    <main className="relative">
      <CareIndex />
      <BookingCTA />
    </main>
  );
}
