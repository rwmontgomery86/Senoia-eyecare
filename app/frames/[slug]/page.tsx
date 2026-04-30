import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBack from "@/components/ui/PageBack";
import BookingCTA from "@/components/sections/BookingCTA";
import Hero from "@/components/sections/frames/template/heroes/Hero";
import Story from "@/components/sections/frames/template/Story";
import Gallery from "@/components/sections/frames/template/Gallery";
import Specs from "@/components/sections/frames/template/Specs";
import { featuredFrames } from "@/data/frames";

export function generateStaticParams() {
  return featuredFrames.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const frame = featuredFrames.find((f) => f.slug === slug);
  if (!frame) return {};
  return {
    title: `${frame.brand} ${frame.model} · Senoia Eyecare`,
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
      <Hero frame={frame} />

      <div className="bg-cream px-6 pt-16 md:px-10 md:pt-20 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <PageBack href="/frames" label="Back to frames" />
        </div>
      </div>

      <Story frame={frame} />
      <Gallery frame={frame} />
      <Specs frame={frame} />
      <BookingCTA />
    </main>
  );
}
