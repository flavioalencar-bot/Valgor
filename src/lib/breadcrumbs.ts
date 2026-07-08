import { type SegmentPageData } from "@/lib/segment-pages";
import { type ServicePageData } from "@/lib/services-data";
import { site } from "@/lib/site";

export type BreadcrumbItem = { name: string; href: string };

export const PILLAR_CREACAO_SITES: BreadcrumbItem = {
  name: "Criação de Sites",
  href: "/criacao-de-sites",
};

export const PILLAR_HOSPEDAGEM: BreadcrumbItem = {
  name: "Hospedagem",
  href: "/hospedagem",
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function breadcrumbsHome(): BreadcrumbItem[] {
  return [{ name: "Início", href: "/" }];
}

export function breadcrumbsForService(page: ServicePageData): BreadcrumbItem[] {
  const home = { name: "Início", href: "/" };
  const current = { name: page.title, href: page.slug };

  if (page.slug === "/criacao-de-sites") {
    return [home, current];
  }
  if (page.slug === "/web-design-ux-ui") {
    return [home, PILLAR_CREACAO_SITES, current];
  }
  if (page.slug === "/hospedagem") {
    return [home, current];
  }

  return [home, current];
}

export function breadcrumbsForSegment(page: SegmentPageData): BreadcrumbItem[] {
  const home = { name: "Início", href: "/" };

  if (page.slug === "/manutencao-de-sites") {
    return [home, PILLAR_HOSPEDAGEM, { name: page.title, href: page.slug }];
  }

  return [
    home,
    { name: "Segmentos", href: "/segmentos" },
    PILLAR_CREACAO_SITES,
    { name: page.title, href: page.slug },
  ];
}

export function breadcrumbsForBlog(): BreadcrumbItem[] {
  return [{ name: "Início", href: "/" }, { name: "Blog", href: "/blog" }];
}

export function breadcrumbsForBlogArticle(title: string, slug: string): BreadcrumbItem[] {
  return [...breadcrumbsForBlog(), { name: title, href: `/blog/${slug}` }];
}
