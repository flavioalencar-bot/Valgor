import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";
import { buildFoxScorePayload } from "@/lib/fox-score/enrich";
import type { FoxScorePayload } from "@/lib/fox-score/enrich";
import { fetchSiteHtml, fetchSitemapRobots } from "./analyzers/fetch-site";
import { analyzePageSpeed } from "./analyzers/pagespeed";
import { analyzeSecurity } from "./analyzers/security";
import { computeAnalysis } from "./analyzers/scoring";
import type { DiagnosticInput, HtmlAnalysis } from "./types";

async function setProgress(id: string, progress: number, step?: string, status = "processing") {
  await prisma.digitalDiagnostic.update({
    where: { id },
    data: {
      progress,
      status,
      ...(step ? { processingStep: step } : {}),
    },
  });
}

export async function processDigitalDiagnostic(id: string): Promise<void> {
  const row = await prisma.digitalDiagnostic.findUnique({ where: { id } });
  if (!row) return;

  const input: DiagnosticInput = {
    companyName: row.companyName,
    responsibleName: row.responsibleName,
    email: row.email,
    whatsapp: row.whatsapp,
    city: row.city,
    segment: row.segment ?? undefined,
    websiteUrl: row.websiteUrl ?? undefined,
    instagramUrl: row.instagramUrl ?? undefined,
    googleBusinessUrl: row.googleBusinessUrl ?? undefined,
  };

  try {
    await setProgress(id, 8, "site");

    const html = await fetchSiteHtml(input.websiteUrl, input.city);
    await setProgress(id, 22, "speed");

    const [pageSpeed, security, sitemap] = await Promise.all([
      analyzePageSpeed(input.websiteUrl),
      analyzeSecurity(input.websiteUrl),
      fetchSitemapRobots(input.websiteUrl),
    ]);
    await setProgress(id, 38, "seo");
    await setProgress(id, 50, "security");
    await setProgress(id, 60, "google");
    await setProgress(id, 70, "social");

    const result = computeAnalysis({ input, html, pageSpeed, security, sitemap });
    await setProgress(id, 82, "competitors");

    const foxScore = buildFoxScorePayload(result, input);
    await setProgress(id, 94, "ai");

    await prisma.digitalDiagnostic.update({
      where: { id },
      data: {
        status: "completed",
        progress: 100,
        processingStep: "ai",
        score: result.score,
        classification: result.classification,
        performanceScore: result.moduleScores.performance,
        seoScore: result.moduleScores.seo,
        securityScore: result.moduleScores.security,
        responsiveScore: result.moduleScores.responsive,
        conversionScore: result.moduleScores.conversion,
        localPresenceScore: result.moduleScores.localPresence,
        socialScore: result.moduleScores.social,
        uxScore: result.moduleScores.ux,
        authorityScore: result.moduleScores.authority,
        strengthsJson: result.strengths,
        weaknessesJson: result.weaknesses,
        recommendationsJson: result.recommendations,
        rawDataJson: result.rawData as Prisma.InputJsonValue,
        foxScoreJson: foxScore as Prisma.InputJsonValue,
        commercialMessage: result.commercialMessage,
        ctaLabel: result.ctaLabel,
        errorMessage: null,
        completedAt: new Date(),
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Erro desconhecido";
    await prisma.digitalDiagnostic.update({
      where: { id },
      data: {
        status: "failed",
        errorMessage: msg,
        progress: 0,
      },
    });
  }
}

export function diagnosticInputFromRow(row: {
  companyName: string;
  responsibleName: string;
  email: string;
  whatsapp: string;
  city: string;
  segment: string | null;
  websiteUrl: string | null;
  instagramUrl: string | null;
  googleBusinessUrl: string | null;
}): DiagnosticInput {
  return {
    companyName: row.companyName,
    responsibleName: row.responsibleName,
    email: row.email,
    whatsapp: row.whatsapp,
    city: row.city,
    segment: row.segment ?? undefined,
    websiteUrl: row.websiteUrl ?? undefined,
    instagramUrl: row.instagramUrl ?? undefined,
    googleBusinessUrl: row.googleBusinessUrl ?? undefined,
  };
}

export function foxScoreFromRow(row: NonNullable<Awaited<ReturnType<typeof prisma.digitalDiagnostic.findUnique>>>): FoxScorePayload | null {
  if (row.foxScoreJson && typeof row.foxScoreJson === "object") {
    return row.foxScoreJson as FoxScorePayload;
  }
  if (row.score == null) return null;

  const rawData = (row.rawDataJson ?? {}) as Record<string, unknown>;
  const html = (rawData.html ?? {
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
  }) as HtmlAnalysis;

  return buildFoxScorePayload(
    {
      moduleScores: {
        performance: row.performanceScore ?? 0,
        seo: row.seoScore ?? 0,
        security: row.securityScore ?? 0,
        responsive: row.responsiveScore ?? 0,
        conversion: row.conversionScore ?? 0,
        localPresence: row.localPresenceScore ?? 0,
        social: row.socialScore ?? 0,
        ux: row.uxScore ?? 0,
        authority: row.authorityScore ?? 0,
      },
      score: row.score,
      classification: row.classification ?? "",
      classificationMessage: "",
      strengths: jsonArr(row.strengthsJson),
      weaknesses: jsonArr(row.weaknessesJson),
      recommendations: jsonArr(row.recommendationsJson),
      commercialMessage: row.commercialMessage ?? "",
      ctaLabel: row.ctaLabel ?? "",
      rawData: { ...rawData, html },
    },
    diagnosticInputFromRow(row),
  );
}

export function serializeDiagnosticResult(row: Awaited<
  ReturnType<typeof prisma.digitalDiagnostic.findUnique>
>) {
  if (!row) return null;

  return {
    id: row.id,
    status: row.status,
    progress: row.progress,
    processingStep: row.processingStep,
    score: row.score,
    classification: row.classification,
    classificationMessage: row.commercialMessage
      ? undefined
      : undefined,
    moduleScores: {
      performance: row.performanceScore ?? 0,
      seo: row.seoScore ?? 0,
      security: row.securityScore ?? 0,
      responsive: row.responsiveScore ?? 0,
      conversion: row.conversionScore ?? 0,
      localPresence: row.localPresenceScore ?? 0,
      social: row.socialScore ?? 0,
      ux: row.uxScore ?? 0,
      authority: row.authorityScore ?? 0,
    },
    strengths: jsonArr(row.strengthsJson),
    weaknesses: jsonArr(row.weaknessesJson),
    recommendations: jsonArr(row.recommendationsJson),
    commercialMessage: row.commercialMessage,
    ctaLabel: row.ctaLabel,
    companyName: row.companyName,
    city: row.city,
    whatsapp: row.whatsapp,
    segment: row.segment,
    websiteUrl: row.websiteUrl,
    createdAt: row.createdAt.toISOString(),
    completedAt: row.completedAt?.toISOString() ?? null,
    foxScore: foxScoreFromRow(row),
  };
}

function jsonArr(val: unknown): string[] {
  if (Array.isArray(val)) return val.filter((x): x is string => typeof x === "string");
  return [];
}
