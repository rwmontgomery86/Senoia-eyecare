import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Senoia Eyecare",
  tagline: "Considered eyewear. Comprehensive care.",
  url: "https://senoiaeyecare.com",
  bookingUrl:
    "https://scheduler.eyefinity.com/index.html?domainName=senoiaeyecare.net",
  phone: { display: "(770) 727 — 6687", tel: "+17707276687" },
  fax: "(770) 727 — 6688",
  email: "info@senoiaeyecare.com",
  address: { line1: "7280 GA-16 Suite F", line2: "Senoia, Georgia 30276" },
  hours: ["Mon – Fri · 8 — 5", "Sat · Sun — closed"],
  social: {
    facebook: {
      handle: "Senoia Eyecare",
      url: "https://www.facebook.com/senoiaeyecare",
    },
  },
  founded: "2024",
};
