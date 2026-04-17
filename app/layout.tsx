import type { Metadata } from "next";
import { Tenor_Sans, Inter, Cormorant_Garamond } from "next/font/google";
import Grain from "@/components/ui/Grain";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import { site } from "@/data/site";
import "./globals.css";

const display = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const accent = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Senoia Eyecare — Considered Eyewear. Comprehensive Care.",
    template: "%s — Senoia Eyecare",
  },
  description:
    "A boutique optometry practice in Senoia, Georgia. Curated frames, comprehensive vision care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable}`}
    >
      <body className="bg-cream text-charcoal font-body antialiased">
        <Nav />
        {children}
        <Footer />
        <Grain />
      </body>
    </html>
  );
}
