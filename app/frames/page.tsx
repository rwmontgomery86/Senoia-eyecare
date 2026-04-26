import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import FrameCard from "@/components/ui/FrameCard";
import BookingCTA from "@/components/sections/BookingCTA";
import { featuredFrames } from "@/data/frames";

export const metadata: Metadata = {
  title: "Frames",
  description:
    "A small, considered selection of frames pulled to the bench at Senoia Eyecare.",
};

export default function FramesIndexPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="The Case"
        title="Frames in the case."
        description="A small, considered selection — the pieces we've pulled to the bench this season."
      />

      <section className="relative bg-cream-deep px-6 pb-40 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {featuredFrames.map((frame, i) => (
              <FrameCard key={frame.slug} frame={frame} index={i} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
