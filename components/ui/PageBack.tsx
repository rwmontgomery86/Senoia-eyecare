import Link from "next/link";

export default function PageBack({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-eyebrow text-charcoal/60 transition-colors hover:text-gold"
    >
      <span className="inline-block transition-transform duration-500 ease-expo group-hover:-translate-x-1">
        ←
      </span>
      {label}
    </Link>
  );
}
