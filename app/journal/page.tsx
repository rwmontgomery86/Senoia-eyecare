import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Placeholder from "@/components/ui/Placeholder";
import BookingCTA from "@/components/sections/BookingCTA";
import { journal } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the practice — on frames, on eye care, on the slow work of seeing well.",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function JournalIndexPage() {
  const posts = [...journal].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <main className="relative">
      <PageHeader
        eyebrow="Journal"
        title="Notes from the practice."
        description="Occasional writing on frames, eye care, and the slow work of seeing well."
      />

      <section className="relative bg-cream px-6 pb-40 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <ul className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-1000 ease-expo group-hover:scale-[1.02]">
                      <Placeholder
                        variant="landscape"
                        caption={post.heroCaption}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <p className="mt-6 text-[10px] uppercase tracking-eyebrow text-charcoal/50">
                    {dateFormatter.format(new Date(post.publishedAt))}
                  </p>
                  <h2 className="mt-3 font-display text-2xl uppercase leading-[1.1] tracking-wide2 text-charcoal md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-4 max-w-lg font-body text-base font-light leading-relaxed text-charcoal/75">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-eyebrow text-gold transition-colors group-hover:text-gold-light">
                    Read
                    <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
