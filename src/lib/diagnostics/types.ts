export const MODULE_WEIGHTS = {
  performance: 15,
  seo: 15,
  security: 10,
  responsive: 10,
  conversion: 15,
  localPresence: 10,
  social: 10,
  ux: 10,
  authority: 5,
} as const;

export type ModuleKey = keyof typeof MODULE_WEIGHTS;

export type ModuleScores = Record<ModuleKey, number>;

export type HtmlAnalysis = {
  fetched: boolean;
  fetchError?: string;
  loadTimeMs?: number;
  url?: string;
  title?: string;
  metaDescription?: string;
  h1: string[];
  h2: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schemaTypes: string[];
  imagesTotal: number;
  imagesWithAlt: number;
  hasViewport: boolean;
  hasNav: boolean;
  hasForm: boolean;
  hasWhatsAppLink: boolean;
  hasTelLink: boolean;
  hasEmailVisible: boolean;
  hasMapsEmbed: boolean;
  hasInstagramLink: boolean;
  hasGoogleMapsLink: boolean;
  hasGoogleBusinessLink: boolean;
  bodyTextLength: number;
  cityMentioned: boolean;
  phoneMentioned: boolean;
  hasTestimonialsSection: boolean;
  hasCasesSection: boolean;
  hasBlogSection: boolean;
  servicePageHints: number;
  linkCount: number;
  hasHttps: boolean;
};

export type PageSpeedResult = {
  available: boolean;
  error?: string;
  mobile?: {
    performance: number;
    fcp?: number;
    lcp?: number;
    cls?: number;
    speedIndex?: number;
  };
  desktop?: {
    performance: number;
    fcp?: number;
    lcp?: number;
    cls?: number;
    speedIndex?: number;
  };
};

export type SecurityAnalysis = {
  https: boolean;
  httpRedirectsToHttps: boolean;
  sslValid: boolean;
  headers: {
    hsts: boolean;
    xFrameOptions: boolean;
    xContentTypeOptions: boolean;
    referrerPolicy: boolean;
    csp: boolean;
  };
};

export type SitemapRobotsAnalysis = {
  sitemapExists: boolean;
  robotsExists: boolean;
};

export type DiagnosticInput = {
  companyName: string;
  responsibleName: string;
  email: string;
  whatsapp: string;
  city: string;
  segment?: string;
  websiteUrl?: string;
  instagramUrl?: string;
  googleBusinessUrl?: string;
};

export type AnalysisResult = {
  moduleScores: ModuleScores;
  score: number;
  classification: string;
  classificationMessage: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  commercialMessage: string;
  ctaLabel: string;
  rawData: Record<string, unknown>;
};

export type DiagnosticStatus = "pending" | "processing" | "completed" | "failed";

export function jsonStringArray(val: unknown): string[] {
  if (Array.isArray(val)) return val.filter((x): x is string => typeof x === "string");
  return [];
}
