export type Service = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  whatToExpect: string[];
  related: string[];
};

export type Doctor = {
  slug: string;
  name: string;
  credentials: string;
  focusLine: string;
  bioIntro: string;
  bioBody: string[];
  focusAreas: string[];
  portraitCaption: string;
};

export type TeamMember = {
  name: string;
  role: string;
  focusLine: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  body: string[];
  heroCaption: string;
};

export type Testimonial = {
  text: string;
  name: string;
  note: string;
};

export type Brand = string;

export type SiteConfig = {
  name: string;
  tagline: string;
  url: string;
  bookingUrl: string;
  phone: { display: string; tel: string };
  email: string;
  address: { line1: string; line2: string };
  hours: string[];
  social: { instagram: { handle: string; url: string } };
  founded: string;
};
