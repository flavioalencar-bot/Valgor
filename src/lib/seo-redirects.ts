/** Slugs de segmento consolidados via 301 — não indexar no sitemap. */
export const SEGMENT_REDIRECTS: Record<string, string> = {
  "desenvolvimento-de-sites": "/criacao-de-sites",
};

export function isRedirectedSegment(slug: string): boolean {
  return slug in SEGMENT_REDIRECTS;
}

export function segmentRedirectTarget(slug: string): string | undefined {
  return SEGMENT_REDIRECTS[slug];
}
