import type { MetadataRoute } from "next";
import { guidePages, SITE_URL } from "./_content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const guideRoutes = Object.keys(guidePages).map((slug) => ({
    url: `${SITE_URL}/guides/${slug}`,
    changeFrequency: "weekly" as const,
    priority: slug === "quick-start" ? 0.9 : 0.8,
  }));

  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ...guideRoutes,
    { url: `${SITE_URL}/faq`, changeFrequency: "weekly", priority: 0.8 },
  ];
}
