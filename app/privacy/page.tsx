import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Our privacy practices, and how we handle patient information.",
};

export default function PrivacyPage() {
  return (
    <main className="relative">
      <PageHeader
        eyebrow="Privacy"
        title="How we handle your information."
      />

      <section className="relative bg-cream px-6 pb-40 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[720px] space-y-6 font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
          <p>
            [Placeholder — this is where the practice's Notice of Privacy
            Practices (HIPAA) and the website's data-collection policy will
            live. To be drafted with counsel before launch.]
          </p>
          <p>
            The short version, in our own words: we collect what we need to
            provide your care and to run the practice well. We do not sell your
            information. We keep your records securely, and we share them only
            with the people and systems your care requires.
          </p>
          <p>
            For the full Notice of Privacy Practices, or to request a copy of
            your records, reach us at hello@senoiaeyecare.com.
          </p>
        </div>
      </section>
    </main>
  );
}
