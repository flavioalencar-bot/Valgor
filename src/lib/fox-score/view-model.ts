import { buildFoxScorePremium } from "@/lib/fox-score/premium-enrich";
import { FOX_SCORE_DEFAULTS } from "@/lib/fox-score/config";
import type { FoxScorePayload } from "@/lib/fox-score/enrich";
import type { MODULE_WEIGHTS } from "@/lib/diagnostics/types";

export type FoxScoreViewModel = {
  companyName: string;
  score: number;
  classification: string;
  classificationSubtitle: string;
  cityAverage: number;
  segmentAverage: number;
  bestCompetitor: number;
  estimatedVisitors: number;
  currentConversionRate: number;
  optimizedConversionRate: number;
  currentClients: number;
  projectedClients: number;
  averageTicket: number;
  margin: number;
  currentRevenue: number;
  potentialRevenue: number;
  estimatedReturn: number;
  revenueDifference: number;
  lostLeadsMin: number;
  lostLeadsMax: number;
  impactMessage: string;
  comparisonInsight: string;
  consultativeOpinion: string[];
  priorities: string[];
  strengths: string[];
  suggestedActions: string[];
  foxScore: FoxScorePayload;
};

type ApiResult = {
  score: number;
  classification: string;
  companyName: string;
  weaknesses: string[];
  strengths: string[];
  moduleScores?: Record<keyof typeof MODULE_WEIGHTS, number>;
  foxScore: FoxScorePayload | null;
};

export function buildFoxScoreViewModel(result: ApiResult): FoxScoreViewModel | null {
  const fs = result.foxScore;
  if (!fs) return null;

  const { commercial, benchmarks, roadmap } = fs;
  const ticket = FOX_SCORE_DEFAULTS.averageTicket;
  const clients = FOX_SCORE_DEFAULTS.clientsPerMonth;
  const margin = FOX_SCORE_DEFAULTS.marginPercent;

  const currentClients = Math.round(commercial.monthlyVisitors * (commercial.conversionRate / 100));
  const projectedClients = Math.round(commercial.monthlyVisitors * (commercial.benchmarkConversion / 100));
  const currentRevenue = ticket * clients;
  const potentialRevenue = ticket * (clients + Math.max(0, projectedClients - currentClients));
  const revenueDifference = potentialRevenue - currentRevenue;
  const estimatedReturn = revenueDifference * (margin / 100);

  const premium =
    fs.premium ??
    buildFoxScorePremium(
      result.score,
      benchmarks,
      commercial,
      roadmap,
      fs.projectedScore,
      result.moduleScores ?? {
        performance: 0,
        seo: 0,
        security: 0,
        responsive: 0,
        conversion: 0,
        localPresence: 0,
        social: 0,
        ux: 0,
        authority: 0,
      },
      ticket,
    );

  return {
    companyName: result.companyName,
    score: result.score,
    classification: result.classification,
    classificationSubtitle: fs.classificationSubtitle,
    cityAverage: benchmarks.cityAvg,
    segmentAverage: benchmarks.segmentAvg,
    bestCompetitor: benchmarks.topCompetitor,
    estimatedVisitors: commercial.monthlyVisitors,
    currentConversionRate: commercial.conversionRate,
    optimizedConversionRate: commercial.benchmarkConversion,
    currentClients,
    projectedClients,
    averageTicket: ticket,
    margin,
    currentRevenue,
    potentialRevenue,
    estimatedReturn,
    revenueDifference,
    lostLeadsMin: commercial.lostLeadsMin,
    lostLeadsMax: commercial.lostLeadsMax,
    impactMessage: fs.impactMessage,
    comparisonInsight: fs.comparisonInsight,
    consultativeOpinion: fs.consultativeOpinion,
    priorities: result.weaknesses,
    strengths: result.strengths,
    suggestedActions: roadmap.map((r) => r.title),
    foxScore: { ...fs, premium },
  };
}

export type ModuleScores = Record<keyof typeof MODULE_WEIGHTS, number>;
