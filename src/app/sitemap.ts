import { getPublishedArticles } from "@/lib/blog/repository";
import { SEGMENT_REDIRECTS } from "@/lib/seo-redirects";
import { segmentSlugs } from "@/lib/segment-pages";
import { servicePages } from "@/lib/services-data";
import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

const BASE_STATIC_PATHS = [
  "/",
  "/solicitar-orcamento",
  "/valgor-score",
  "/criacao-de-sites",
  "/landing-pages",
  "/criacao-de-loja-virtual",
  "/seo-otimizacao-de-site",
  "/google-adwords",
  "/hospedagem",
  "/criacao-de-sites-e-loja-virtual",
  "/empresa-de-criacao-de-site",
  "/blog",
  "/Portal-Imobiliario",
  "/Portal-de-Classificados",
  "/portal-de-empregos",
  "/politica-de-privacidade",
  "/segmentos",
  "/web-design-ux-ui",
] as const;

const activeSegmentSlugs = segmentSlugs.filter((s) => !(s in SEGMENT_REDIRECTS));

function sitemapPriority(path: string): number {
  if (path === "/") return 1;
  if (path === "/solicitar-orcamento") return 0.95;
  if (path === "/valgor-score") return 0.9;
  if (path === "/criacao-de-sites" || path === "/empresa-de-criacao-de-site") return 0.9;

  const slug = path.slice(1);
  if (path.startsWith("/blog/")) return 0.75;
  if (path === "/blog") return 0.8;
  if (slug in servicePages || activeSegmentSlugs.includes(slug)) return 0.85;

  return 0.7;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = site.url.replace(/\/$/, "");
  const articles = await getPublishedArticles();
  const blogPaths = [...new Set(articles.map((a) => `/blog/${a.slug}`))];
  const articleDates = new Map(articles.map((a) => [`/blog/${a.slug}`, a.publishedAt]));
  const segmentPaths = activeSegmentSlugs.map((s) => `/${s}`);
  const allPaths = [...BASE_STATIC_PATHS, ...segmentPaths, ...blogPaths];

  return allPaths.map((path) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    lastModified: articleDates.get(path)
      ? new Date(articleDates.get(path)!)
      : new Date("2026-07-08"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: sitemapPriority(path),
  }));
}
