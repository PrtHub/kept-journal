import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { COMPARISONS, USE_CASES, FEATURES } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/vs`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/for`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/features`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/terms`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/support`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.4 },
  ];

  // Programmatic comparison routes
  const comparisonRoutes: MetadataRoute.Sitemap = COMPARISONS.map((comp) => ({
    url: `${SITE_URL}/vs/${comp.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Programmatic use case routes
  const useCaseRoutes: MetadataRoute.Sitemap = USE_CASES.map((uc) => ({
    url: `${SITE_URL}/for/${uc.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Programmatic feature routes
  const featureRoutes: MetadataRoute.Sitemap = FEATURES.map((feat) => ({
    url: `${SITE_URL}/features/${feat.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...comparisonRoutes,
    ...useCaseRoutes,
    ...featureRoutes,
  ];
}
