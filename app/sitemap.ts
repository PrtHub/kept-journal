import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import {
  COMPARISONS,
  USE_CASES,
  FEATURES,
  PROMPTS,
  ALTERNATIVES,
  GUIDES,
} from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static pages and directory hubs
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/vs`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/for`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/features`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/prompts`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/alternatives`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/guides`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/terms`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/support`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.4 },
  ];

  // Programmatic comparison routes (/vs/*)
  const comparisonRoutes: MetadataRoute.Sitemap = COMPARISONS.map((comp) => ({
    url: `${SITE_URL}/vs/${comp.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Programmatic use case routes (/for/*)
  const useCaseRoutes: MetadataRoute.Sitemap = USE_CASES.map((uc) => ({
    url: `${SITE_URL}/for/${uc.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Programmatic feature routes (/features/*)
  const featureRoutes: MetadataRoute.Sitemap = FEATURES.map((feat) => ({
    url: `${SITE_URL}/features/${feat.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Programmatic prompt collections (/prompts/*)
  const promptRoutes: MetadataRoute.Sitemap = PROMPTS.map((p) => ({
    url: `${SITE_URL}/prompts/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Programmatic alternative pages (/alternatives/*)
  const alternativeRoutes: MetadataRoute.Sitemap = ALTERNATIVES.map((alt) => ({
    url: `${SITE_URL}/alternatives/${alt.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Programmatic guides (/guides/*)
  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...comparisonRoutes,
    ...useCaseRoutes,
    ...featureRoutes,
    ...promptRoutes,
    ...alternativeRoutes,
    ...guideRoutes,
  ];
}
