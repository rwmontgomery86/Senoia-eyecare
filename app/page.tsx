import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import FeaturedFrame from "@/components/sections/FeaturedFrame";
import BrandsStrip from "@/components/sections/BrandsStrip";
import Doctors from "@/components/sections/Doctors";
import Lookbook from "@/components/sections/Lookbook";
import Testimonials from "@/components/sections/Testimonials";
import BookingCTA from "@/components/sections/BookingCTA";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Philosophy />
      <Services />
      <FeaturedFrame />
      <BrandsStrip />
      <Doctors />
      <Lookbook />
      <Testimonials />
      <BookingCTA />
    </main>
  );
}
