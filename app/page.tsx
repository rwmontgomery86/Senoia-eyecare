import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import FeaturedFrames from "@/components/sections/FeaturedFrames";
import MidCTAPhoto from "@/components/sections/MidCTAPhoto";
import Doctors from "@/components/sections/Doctors";
import BrandsStrip from "@/components/sections/BrandsStrip";
import Testimonials from "@/components/sections/Testimonials";
import BookingCTA from "@/components/sections/BookingCTA";
import GoldRule from "@/components/ui/GoldRule";

function SectionDivider({ tone = "cream" }: { tone?: "cream" | "cream-deep" }) {
  const bg = tone === "cream-deep" ? "bg-cream-deep" : "bg-cream";
  return (
    <div aria-hidden className={`relative ${bg}`}>
      <GoldRule width="100%" className="opacity-50" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Philosophy />
      <SectionDivider tone="cream" />
      <Services />
      <SectionDivider tone="cream-deep" />
      <FeaturedFrames />
      <MidCTAPhoto />
      <Doctors />
      <SectionDivider tone="cream" />
      <BrandsStrip />
      <SectionDivider tone="cream-deep" />
      <Testimonials />
      <BookingCTA />
    </main>
  );
}
