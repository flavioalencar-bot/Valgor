import type { FoxScorePayload } from "@/lib/fox-score/enrich";
import type { ModuleScores } from "@/lib/diagnostics/types";

export type ComparisonBullet = { type: "success" | "warning"; text: string };

export type ScoreEvolutionStep = {
  title: string;
  score: number;
  pointsGained: number;
  description?: string;
};

export type TimelineItem = { title: string; days: number };

export type PremiumImpact = {
  tierHeadline: string;
  lostContacts: number;
  monthlyOpportunity: number;
};

export type FoxScorePremium = {
  impact: PremiumImpact;
  comparisonBullets: ComparisonBullet[];
  comparisonActionHint: string;
  competitionGap: number;
  targetScore: number;
  scoreEvolution: ScoreEvolutionStep[];
  implementationTimeline: TimelineItem[];
  totalImplementationDays: number;
};

function shortRoadmapTitle(title: string): string {
  if (title.toLowerCase().includes("landing")) return "Landing Page";
  if (title.toLowerCase().includes("google business")) return "Google Business";
  if (title.toLowerCase().includes("blog") || title.toLowerCase().includes("conteúdo")) return "Conteúdo";
  if (title.toLowerCase().includes("crm") || title.toLowerCase().includes("automa")) return "CRM";
  if (title.toLowerCase().includes("seo")) return "SEO Local";
  if (title.toLowerCase().includes("performance")) return "Performance";
  return title.split(" ")[0] ?? title;
}

function daysForTitle(title: string): number {
  const t = title.toLowerCase();
  if (t.includes("landing")) return 7;
  if (t.includes("google business")) return 2;
  if (t.includes("blog") || t.includes("conteúdo")) return 15;
  if (t.includes("crm") || t.includes("automa")) return 10;
  if (t.includes("seo")) return 10;
  if (t.includes("performance")) return 7;
  return 7;
}

function tierHeadline(score: number): string {
  if (score >= 85) return "Sua presença digital está acima da média.";
  if (score >= 70) return "Sua empresa possui boa base, mas existem oportunidades importantes.";
  if (score >= 40) return "Sua empresa possui boa base, mas existem oportunidades importantes.";
  return "Sua presença digital precisa de atenção.";
}

export function buildFoxScorePremium(
  score: number,
  benchmarks: FoxScorePayload["benchmarks"],
  commercial: FoxScorePayload["commercial"],
  roadmap: FoxScorePayload["roadmap"],
  projectedScore: number,
  moduleScores: ModuleScores,
  ticket = 800,
): FoxScorePremium {
  const lostContacts = Math.round((commercial.lostLeadsMin + commercial.lostLeadsMax) / 2);
  const monthlyOpportunity = lostContacts * ticket;
  const targetScore = Math.min(95, Math.max(projectedScore, score + 8));
  const competitionGap = Math.max(0, benchmarks.topCompetitor - score);

  const bullets: ComparisonBullet[] = [];
  if (score > benchmarks.cityAvg) {
    bullets.push({ type: "success", text: "Sua empresa está acima da média da cidade." });
  } else {
    bullets.push({ type: "warning", text: "Sua empresa ainda está abaixo da média da cidade." });
  }
  if (score > benchmarks.segmentAvg) {
    bullets.push({ type: "success", text: "Você supera a média do seu segmento." });
  } else {
    bullets.push({ type: "warning", text: "Ainda há espaço para alcançar a média do segmento." });
  }
  if (score < benchmarks.topCompetitor) {
    bullets.push({
      type: "warning",
      text: "Ainda está abaixo do melhor concorrente encontrado.",
    });
  } else {
    bullets.push({ type: "success", text: "Você está no patamar do melhor concorrente analisado." });
  }

  const weak: string[] = [];
  if (moduleScores.localPresence < 7) weak.push("SEO Local");
  if (moduleScores.conversion < 10) weak.push("Conversão");
  if (moduleScores.seo < 11) weak.push("SEO");
  const comparisonActionHint =
    weak.length >= 2
      ? `Melhorando ${weak.slice(0, 2).join(" e ")} você pode ultrapassar esse resultado.`
      : weak.length === 1
        ? `Melhorando ${weak[0]} você pode ultrapassar esse resultado.`
        : "Com as melhorias sugeridas no plano, você pode alcançar o topo do segmento.";

  const scoreEvolution: ScoreEvolutionStep[] = [
    { title: "Hoje", score, pointsGained: 0 },
  ];
  let current = score;
  for (const phase of roadmap.slice(0, 4)) {
    current = Math.min(targetScore, current + phase.points);
    scoreEvolution.push({
      title: shortRoadmapTitle(phase.title),
      score: current,
      pointsGained: phase.points,
      description: phase.description,
    });
  }
  const last = scoreEvolution[scoreEvolution.length - 1]!;
  if (last.score < targetScore) {
    scoreEvolution.push({
      title: "Meta VALGOR",
      score: targetScore,
      pointsGained: targetScore - last.score,
      description: "Potencial após implementação completa.",
    });
  }

  const implementationTimeline = roadmap.slice(0, 4).map((p) => ({
    title: shortRoadmapTitle(p.title),
    days: daysForTitle(p.title),
  }));
  const totalImplementationDays = implementationTimeline.reduce((s, i) => s + i.days, 0);

  return {
    impact: {
      tierHeadline: tierHeadline(score),
      lostContacts,
      monthlyOpportunity,
    },
    comparisonBullets: bullets,
    comparisonActionHint,
    competitionGap,
    targetScore,
    scoreEvolution,
    implementationTimeline,
    totalImplementationDays,
  };
}
