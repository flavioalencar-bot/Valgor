import type { PageSpeedResult } from "../types";
import { normalizeWebsiteUrl } from "./fetch-site";

type Strategy = "mobile" | "desktop";

async function runPageSpeed(url: string, strategy: Strategy, apiKey: string) {
  const params = new URLSearchParams({
    url,
    strategy,
    key: apiKey,
    category: "performance",
  });

  const res = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`,
    { signal: AbortSignal.timeout(45_000) },
  );

  if (!res.ok) {
    throw new Error(`PageSpeed ${strategy}: HTTP ${res.status}`);
  }

  const json = await res.json();
  const lh = json.lighthouseResult;
  const audits = lh?.audits ?? {};
  const perf = Math.round((lh?.categories?.performance?.score ?? 0) * 100);

  return {
    performance: perf,
    fcp: audits["first-contentful-paint"]?.numericValue,
    lcp: audits["largest-contentful-paint"]?.numericValue,
    cls: audits["cumulative-layout-shift"]?.numericValue,
    speedIndex: audits["speed-index"]?.numericValue,
  };
}

export async function analyzePageSpeed(websiteUrl?: string): Promise<PageSpeedResult> {
  const url = normalizeWebsiteUrl(websiteUrl);
  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;

  if (!url) {
    return { available: false, error: "URL não informada" };
  }
  if (!apiKey) {
    return { available: false, error: "PageSpeed API não configurada" };
  }

  try {
    const [mobile, desktop] = await Promise.all([
      runPageSpeed(url, "mobile", apiKey),
      runPageSpeed(url, "desktop", apiKey),
    ]);
    return { available: true, mobile, desktop };
  } catch (err) {
    return {
      available: false,
      error: err instanceof Error ? err.message : "Falha PageSpeed",
    };
  }
}

export function estimatePerformanceFromLoad(loadTimeMs?: number, fetched?: boolean): number {
  if (!fetched) return 0;
  if (!loadTimeMs) return 5;
  if (loadTimeMs < 1500) return 12;
  if (loadTimeMs < 3000) return 9;
  if (loadTimeMs < 5000) return 6;
  return 3;
}
