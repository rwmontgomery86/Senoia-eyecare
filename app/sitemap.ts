import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { journal } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/care",
    "/doctors",
    "/team",
    "/visit",
    "/insurances",
    "/forms",
    "/journal",
    "/privacy",
    "/accessibility",
  ];

  const dynamicRoutes = [
    ...services.map((s) => `/care/${s.slug}`),
    ...doctors.map((d) => `/doctors/${d.slug}`),
    ...journal.map((p) => `/journal/${p.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
