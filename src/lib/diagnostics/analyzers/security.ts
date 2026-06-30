import type { SecurityAnalysis } from "../types";
import { normalizeWebsiteUrl } from "./fetch-site";

export async function analyzeSecurity(websiteUrl?: string): Promise<SecurityAnalysis> {
  const url = normalizeWebsiteUrl(websiteUrl);
  const empty: SecurityAnalysis = {
    https: false,
    httpRedirectsToHttps: false,
    sslValid: false,
    headers: {
      hsts: false,
      xFrameOptions: false,
      xContentTypeOptions: false,
      referrerPolicy: false,
      csp: false,
    },
  };

  if (!url) return empty;

  try {
    const httpsRes = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
    });

    const headers = httpsRes.headers;
    const result: SecurityAnalysis = {
      https: httpsRes.url.startsWith("https://"),
      httpRedirectsToHttps: false,
      sslValid: httpsRes.url.startsWith("https://"),
      headers: {
        hsts: Boolean(headers.get("strict-transport-security")),
        xFrameOptions: Boolean(headers.get("x-frame-options")),
        xContentTypeOptions: Boolean(headers.get("x-content-type-options")),
        referrerPolicy: Boolean(headers.get("referrer-policy")),
        csp: Boolean(headers.get("content-security-policy")),
      },
    };

    if (!result.https) {
      try {
        const httpUrl = url.replace(/^https:\/\//i, "http://");
        const httpRes = await fetch(httpUrl, {
          method: "HEAD",
          redirect: "manual",
          signal: AbortSignal.timeout(8000),
        });
        const loc = httpRes.headers.get("location") ?? "";
        result.httpRedirectsToHttps =
          httpRes.status >= 300 && httpRes.status < 400 && loc.startsWith("https://");
      } catch {
        /* ignore */
      }
    } else {
      result.httpRedirectsToHttps = true;
    }

    return result;
  } catch {
    return empty;
  }
}

export function scoreSecurity(sec: SecurityAnalysis, max = 10): number {
  let pts = 0;
  if (sec.https) pts += 3;
  if (sec.sslValid) pts += 2;
  if (sec.httpRedirectsToHttps) pts += 1;
  if (sec.headers.hsts) pts += 1;
  if (sec.headers.xFrameOptions) pts += 1;
  if (sec.headers.xContentTypeOptions) pts += 1;
  if (sec.headers.referrerPolicy) pts += 0.5;
  if (sec.headers.csp) pts += 0.5;
  return Math.min(max, Math.round(pts));
}
