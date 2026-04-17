import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Our commitment to making the practice and this website usable by everyone.",
};

export default function AccessibilityPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="Accessibility"
        title="A practice, accessible to all."
      />

      <section className="relative bg-cream px-6 pb-40 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[720px] space-y-6 font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
          <p>
            [Placeholder — this is where the practice's accessibility statement
            will live. To be drafted before launch, covering both the physical
            space and this website.]
          </p>
          <p>
            We build this site with the conviction that design and access are
            the same work. We follow WCAG 2.2 AA guidance, honor reduced-motion
            preferences, use adequate color contrast, and name every image and
            interactive element for assistive technology.
          </p>
          <p>
            The practice is wheelchair accessible, with a level threshold at
            the entrance. If there is any way we can make your visit easier —
            from large-print intake forms to extended appointment time — please
            tell us when you book, or reach us at hello@senoiaeyecare.com.
          </p>
        </div>
      </section>
    </main>
  );
}
