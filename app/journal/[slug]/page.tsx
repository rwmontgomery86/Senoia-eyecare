import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBack from "@/components/ui/PageBack";
import Placeholder from "@/components/ui/Placeholder";
import BookingCTA from "@/components/sections/BookingCTA";
import { journal } from "@/data/journal";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams() {
  return journal.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="relative">
      <div className="bg-cream px-6 pt-32 md:px-10 md:pt-40 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <PageBack href="/journal" label="Back to journal" />
        </div>
      </div>

      <article className="relative bg-cream px-6 pb-32 pt-12 md:px-10 md:pb-40 md:pt-16 lg:px-14">
        <header className="mx-auto max-w-[720px]">
          <p className="text-[10px] uppercase tracking-eyebrow text-charcoal/50">
            {dateFormatter.format(new Date(post.publishedAt))}
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[1.05] tracking-wide2 text-charcoal md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 font-accent text-2xl italic leading-snug text-charcoal/80 md:text-3xl">
            {post.excerpt}
          </p>
        </header>

        <div className="mx-auto mt-16 max-w-[1040px]">
          <Placeholder
            variant="landscape"
            caption={post.heroCaption}
            className="w-full"
          />
        </div>

        <div className="mx-auto mt-16 max-w-[720px] space-y-6 font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>

      <BookingCTA />
    </main>
  );
}
