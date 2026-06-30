import type { HtmlAnalysis } from "../types";

const FETCH_TIMEOUT = 18_000;

export function normalizeWebsiteUrl(raw?: string | null): string | undefined {
  if (!raw?.trim()) return undefined;
  const t = raw.trim();
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

export async function fetchSiteHtml(
  websiteUrl: string | undefined,
  city: string,
): Promise<HtmlAnalysis> {
  const empty: HtmlAnalysis = {
    fetched: false,
    h1: [],
    h2: [],
    schemaTypes: [],
    imagesTotal: 0,
    imagesWithAlt: 0,
    hasViewport: false,
    hasNav: false,
    hasForm: false,
    hasWhatsAppLink: false,
    hasTelLink: false,
    hasEmailVisible: false,
    hasMapsEmbed: false,
    hasInstagramLink: false,
    hasGoogleMapsLink: false,
    hasGoogleBusinessLink: false,
    bodyTextLength: 0,
    cityMentioned: false,
    phoneMentioned: false,
    hasTestimonialsSection: false,
    hasCasesSection: false,
    hasBlogSection: false,
    servicePageHints: 0,
    linkCount: 0,
    hasHttps: false,
  };

  const url = normalizeWebsiteUrl(websiteUrl);
  if (!url) return empty;

  const start = Date.now();
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "VALGOR-DigitalDiagnostic/2.0 (+https://www.valgor.com.br; diagnostic bot)",
        Accept: "text/html,application/xhtml+xml",
      },
    });
    clearTimeout(timer);

    const html = await res.text();
    const loadTimeMs = Date.now() - start;
    return parseHtml(html, url, city, loadTimeMs, res.url);
  } catch (err) {
    return {
      ...empty,
      fetchError: err instanceof Error ? err.message : "Site inacessível",
      url,
    };
  }
}

export function parseHtml(
  html: string,
  url: string,
  city: string,
  loadTimeMs: number,
  finalUrl: string,
): HtmlAnalysis {
  const lower = html.toLowerCase();
  const textOnly = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const metaDesc = html.match(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
  );
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i);
  const ogTitle = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)["']/i);
  const ogDesc = html.match(
    /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']*)["']/i,
  );
  const ogImage = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']*)["']/i);

  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    stripTags(m[1] ?? ""),
  );
  const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) =>
    stripTags(m[1] ?? ""),
  );

  const schemaTypes = [...html.matchAll(/"@type"\s*:\s*"([^"]+)"/gi)].map((m) => m[1] ?? "");
  const imgTags = [...html.matchAll(/<img[^>]*>/gi)];
  const imagesWithAlt = imgTags.filter((m) => /alt=["'][^"']+["']/i.test(m[0] ?? "")).length;

  const cityNorm = city.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
  const textNorm = textOnly.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");

  return {
    fetched: true,
    url: finalUrl,
    loadTimeMs,
    title: titleMatch ? stripTags(titleMatch[1] ?? "") : undefined,
    metaDescription: metaDesc?.[1],
    h1,
    h2,
    canonical: canonical?.[1],
    ogTitle: ogTitle?.[1],
    ogDescription: ogDesc?.[1],
    ogImage: ogImage?.[1],
    schemaTypes,
    imagesTotal: imgTags.length,
    imagesWithAlt,
    hasViewport: /<meta[^>]+name=["']viewport["']/i.test(html),
    hasNav: /<nav[\s>]/i.test(html),
    hasForm: /<form[\s>]/i.test(html),
    hasWhatsAppLink: /wa\.me|api\.whatsapp\.com|whatsapp/i.test(html),
    hasTelLink: /href=["']tel:/i.test(html),
    hasEmailVisible: /href=["']mailto:/i.test(html) || /@/.test(textOnly.slice(0, 5000)),
    hasMapsEmbed: /google\.com\/maps|maps\.google|iframe[^>]+maps/i.test(html),
    hasInstagramLink: /instagram\.com\//i.test(html),
    hasGoogleMapsLink: /google\.com\/maps|goo\.gl\/maps|maps\.app\.goo\.gl/i.test(html),
    hasGoogleBusinessLink: /business\.google|g\.page|google\.com\/maps\/place/i.test(html),
    bodyTextLength: textOnly.length,
    cityMentioned: cityNorm.length > 2 && textNorm.includes(cityNorm.split(",")[0]!.trim()),
    phoneMentioned: /\(\d{2}\)|\d{4,5}-\d{4}/.test(textOnly),
    hasTestimonialsSection: /depoimento|testimonial|avaliaç|clientes dizem/i.test(lower),
    hasCasesSection: /cases|portfólio|portfolio|projetos realizados/i.test(lower),
    hasBlogSection: /\/blog|class=["'][^"']*blog/i.test(lower),
    servicePageHints: (html.match(/serviço|servico|soluç|solucoes|products|produtos/gi) ?? [])
      .length,
    linkCount: (html.match(/<a[\s>]/gi) ?? []).length,
    hasHttps: finalUrl.startsWith("https://"),
  };
}

function stripTags(s: string) {
  return s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

export async function fetchSitemapRobots(baseUrl: string | undefined) {
  const url = normalizeWebsiteUrl(baseUrl);
  if (!url) return { sitemapExists: false, robotsExists: false };

  const origin = new URL(url).origin;
  const [sitemapRes, robotsRes] = await Promise.allSettled([
    fetch(`${origin}/sitemap.xml`, {
      method: "HEAD",
      signal: AbortSignal.timeout(8000),
    }),
    fetch(`${origin}/robots.txt`, {
      method: "HEAD",
      signal: AbortSignal.timeout(8000),
    }),
  ]);

  return {
    sitemapExists: sitemapRes.status === "fulfilled" && sitemapRes.value.ok,
    robotsExists: robotsRes.status === "fulfilled" && robotsRes.value.ok,
  };
}
