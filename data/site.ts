import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Senoia Eyecare",
  tagline: "Considered eyewear. Comprehensive care.",
  url: "https://senoiaeyecare.com",
  bookingUrl:
    "https://scheduler.eyefinity.com/index.html?domainName=senoiaeyecare.net",
  phone: { display: "(770) 555 — 0199", tel: "+17705550199" },
  email: "hello@senoiaeyecare.com",
  address: { line1: "120 Main Street", line2: "Senoia, Georgia 30276" },
  hours: ["Tue – Fri · 9 — 6", "Saturday · 10 — 4", "Sun · Mon — closed"],
  social: {
    instagram: { handle: "@senoiaeyecare", url: "https://instagram.com" },
  },
  founded: "2018",
};
