import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { allArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-10-01").toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2026-10-01").toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/editorial-policy`,
      lastModified: new Date("2026-10-01").toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date("2026-10-01").toISOString(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/terms-and-conditions`,
      lastModified: new Date("2026-10-01").toISOString(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/disclaimer`,
      lastModified: new Date("2026-10-01").toISOString(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/cookie-policy`,
      lastModified: new Date("2026-10-01").toISOString(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/affiliate-disclosure`,
      lastModified: new Date("2026-10-01").toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${base}/category/${cat.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Article pages
  const articlePages: MetadataRoute.Sitemap = allArticles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: new Date(article.updatedDate ?? article.publishedDate).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
