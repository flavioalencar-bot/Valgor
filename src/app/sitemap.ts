import { segmentSlugs } from "@/lib/segment-pages";
import { servicePages } from "@/lib/services-data";
import { staticArticles } from "@/lib/blog/articles";
import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

const staticPaths = [
  "/",
  "/solicitar-orcamento",
  "/valgor-score",
  "/diagnostico-digital",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  return staticPaths.map((path) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/solicitar-orcamento"
          ? 0.95
          : path === "/valgor-score" || path === "/diagnostico-digital"
            ? 0.9
          : path.startsWith("/blog") || path in servicePages || segmentSlugs.includes(path.slice(1))
            ? 0.85
            : 0.7,
  }));
}
