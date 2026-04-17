import { ReactNode } from "react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-cream px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48 lg:px-14 lg:pb-32 lg:pt-56">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>{eyebrow}</EyebrowLabel>
          <WordReveal
            as="h1"
            text={title}
            className="mt-2 font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2"
          />
          {description ? (
            <p className="mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-charcoal/75 md:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
