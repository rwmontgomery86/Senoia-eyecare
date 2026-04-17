import type { Metadata } from "next";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import PageHeader from "@/components/ui/PageHeader";
import BookingCTA from "@/components/sections/BookingCTA";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "The team",
  description:
    "The opticians, technicians, and hands that make the practice what it is.",
};

export default function TeamPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="The team"
        title="The hands behind the practice."
        description="Two doctors, and the opticians and technicians who make everything else possible. A small team, by design."
      />

      <section className="relative bg-cream px-6 pb-40 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col gap-4">
            <GoldRule width="6rem" />
            <EyebrowLabel>Staff</EyebrowLabel>
          </div>
          <ul className="grid grid-cols-1 gap-px bg-charcoal/10 md:grid-cols-2">
            {team.map((member, i) => (
              <li
                key={i}
                className="bg-cream p-10 md:p-12"
              >
                <span className="font-accent text-base italic text-gold">
                  0{i + 1}
                </span>
                <h2 className="mt-6 font-display text-xl uppercase leading-[1.1] tracking-wide2 text-charcoal md:text-2xl">
                  {member.name}
                </h2>
                <p className="mt-2 text-[11px] uppercase tracking-eyebrow text-charcoal/60">
                  {member.role}
                </p>
                <p className="mt-6 max-w-md font-accent text-lg italic text-charcoal/75">
                  {member.focusLine}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
