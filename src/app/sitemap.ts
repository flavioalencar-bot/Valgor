import { segmentSlugs } from "@/lib/segment-pages";
import { servicePages } from "@/lib/services-data";
import { staticArticles } from "@/lib/blog/articles";
import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

const staticPaths = [
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
  ...segmentSlugs.map((s) => `/${s}`),
  ...staticArticles.map((a) => `/blog/${a.slug}`),
  "/Portal-Imobiliario",
  "/Portal-de-Classificados",
  "/portal-de-empregos",
  "/criacao-de-sites-em-sao-paulo",
];

function sitemapPriority(path: string): number {
  if (path === "/") return 1;
  if (path === "/solicitar-orcamento") return 0.95;
  if (path === "/valgor-score") return 0.9;
  if (path === "/criacao-de-sites" || path === "/empresa-de-criacao-de-site") return 0.9;

  const slug = path.slice(1);
  if (path.startsWith("/blog/")) return 0.75;
  if (path === "/blog") return 0.8;
  if (slug in servicePages || segmentSlugs.includes(slug)) return 0.85;

  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  return staticPaths.map((path) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    lastModified: new Date("2026-07-08"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: sitemapPriority(path),
  }));
}
