import type { Metadata } from "next";
import PageBack from "@/components/ui/PageBack";
import BookingCTA from "@/components/sections/BookingCTA";
import Hero from "@/components/sections/featured-frame/Hero";
import Story from "@/components/sections/featured-frame/Story";
import Gallery from "@/components/sections/featured-frame/Gallery";
import Specs from "@/components/sections/featured-frame/Specs";
import Lenses from "@/components/sections/featured-frame/Lenses";

export const metadata: Metadata = {
  title: "Featured frame · State Reid · Senoia Eyecare",
  description:
    "Hand-built in Chicago by State Optical — titanium and acetate, drawn from the 1914 Reid Murdoch clocktower. Available exclusively at the Senoia atelier.",
};

export default function FeaturedFramePage() {
  return (
    <main className="relative">
      <div className="bg-cream px-6 pt-32 md:px-10 md:pt-40 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <PageBack href="/" label="Back to home" />
        </div>
      </div>

      <Hero />
      <Story />
      <Gallery />
      <Specs />
      <Lenses />
      <BookingCTA />
    </main>
  );
}
