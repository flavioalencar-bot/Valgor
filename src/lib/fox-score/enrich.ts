import { buildFoxScorePremium } from "@/lib/fox-score/premium-enrich";
import type { AnalysisResult, DiagnosticInput, HtmlAnalysis, ModuleScores } from "@/lib/diagnostics/types";
import { MODULE_WEIGHTS } from "@/lib/diagnostics/types";

export type RadarKey =
  | "seo"
  | "performance"
  | "conversion"
  | "security"
  | "ux"
  | "google"
  | "instagram"
  | "authority"
  | "content"
  | "reputation";

export const RADAR_LABELS: Record<RadarKey, string> = {
  seo: "SEO",
  performance: "Performance",
  conversion: "Conversão",
  security: "Segurança",
  ux: "UX",
  google: "Google",
  instagram: "Instagram",
  authority: "Autoridade",
  content: "Conteúdo",
  reputation: "Reputação",
};

export type FoxScorePayload = {
  radar: Record<RadarKey, number>;
  benchmarks: {
    yours: number;
    cityAvg: number;
    segmentAvg: number;
    topCompetitor: number;
  };
  commercial: {
    monthlyVisitors: number;
    conversionRate: number;
    benchmarkConversion: number;
    lostLeadsMin: number;
    lostLeadsMax: number;
  };
  aiInsights: string[];
  consultativeOpinion: string[];
  impactMessage: string;
  comparisonInsight: string;
  classificationSubtitle: string;
  roadmap: { phase: number; title: string; points: number; description: string }[];
  projectedScore: number;
  starRating: number;
  starsLabel: string;
  premium: import("@/lib/fox-score/premium-enrich").FoxScorePremium;
};

function norm(value: number, max: number): number {
  return Math.max(0, Math.min(100, Math.round((value / max) * 100)));
}

function seedHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function starRating(score: number): { stars: number; label: string } {
  if (score >= 86) return { stars: 5, label: "Excelente presença digital" };
  if (score >= 71) return { stars: 4, label: "Acima da média do segmento" };
  if (score >= 51) return { stars: 3, label: "Presença digital intermediária" };
  if (score >= 31) return { stars: 2, label: "Presença digital fraca" };
  return { stars: 1, label: "Presença digital crítica" };
}

function buildRadar(m: ModuleScores, html: HtmlAnalysis): Record<RadarKey, number> {
  const contentScore = Math.round(
    (norm(m.seo, MODULE_WEIGHTS.seo) * 0.4 +
      norm(m.authority, MODULE_WEIGHTS.authority) * 0.4 +
      (html.hasBlogSection ? 20 : 0)) /
      (html.hasBlogSection ? 1 : 0.8),
  );
  const reputationScore = Math.round(
    (html.hasTestimonialsSection ? 40 : 10) +
      (html.hasCasesSection ? 30 : 0) +
      norm(m.conversion, MODULE_WEIGHTS.conversion) * 0.3,
  );

  return {
    seo: norm(m.seo, MODULE_WEIGHTS.seo),
    performance: norm(m.performance, MODULE_WEIGHTS.performance),
    conversion: norm(m.conversion, MODULE_WEIGHTS.conversion),
    security: norm(m.security, MODULE_WEIGHTS.security),
    ux: norm(m.ux, MODULE_WEIGHTS.ux),
    google: norm(m.localPresence, MODULE_WEIGHTS.localPresence),
    instagram: norm(m.social, MODULE_WEIGHTS.social),
    authority: norm(m.authority, MODULE_WEIGHTS.authority),
    content: Math.min(100, contentScore),
    reputation: Math.min(100, reputationScore),
  };
}

function buildBenchmarks(score: number, input: DiagnosticInput) {
  const citySeed = seedHash(input.city.toLowerCase()) % 14;
  const segSeed = seedHash((input.segment ?? "geral").toLowerCase()) % 12;
  const compSeed = seedHash(input.companyName.toLowerCase()) % 10;

  const cityAvg = Math.min(78, Math.max(48, 58 + citySeed - 7));
  const segmentAvg = Math.min(82, Math.max(50, 62 + segSeed - 6));
  const topCompetitor = Math.min(96, Math.max(score + 5, score + 10 + compSeed));

  return {
    yours: score,
    cityAvg,
    segmentAvg,
    topCompetitor,
  };
}

function buildCommercial(score: number, html: HtmlAnalysis, input: DiagnosticInput) {
  const baseVisitors = html.fetched ? 180 + Math.floor(html.bodyTextLength / 15) : 60;
  const hasSite = Boolean(input.websiteUrl?.trim());
  const monthlyVisitors = hasSite ? baseVisitors : Math.max(40, baseVisitors - 80);

  const conversionRate =
    score >= 75 ? 2.8 : score >= 60 ? 1.8 : score >= 45 ? 1.1 : 0.6;
  const benchmarkConversion = 3.8;

  const currentLeads = monthlyVisitors * (conversionRate / 100);
  const potentialLeads = monthlyVisitors * (benchmarkConversion / 100);
  const lost = Math.max(0, potentialLeads - currentLeads);

  return {
    monthlyVisitors,
    conversionRate,
    benchmarkConversion,
    lostLeadsMin: Math.floor(lost * 0.7),
    lostLeadsMax: Math.ceil(lost * 1.15),
  };
}

function classificationSubtitle(score: number): string {
  if (score >= 85) return "Presença digital forte — foco em otimizações avançadas";
  if (score >= 70) return "Boa base digital com melhorias pontuais de alto impacto";
  if (score >= 40) return "Boa base, mas com alto potencial de crescimento";
  return "Atenção: presença digital precisa de evolução urgente";
}

function buildImpactMessage(commercial: FoxScorePayload["commercial"]): string {
  if (commercial.lostLeadsMax >= 5) {
    return `Sua empresa pode estar perdendo até ${commercial.lostLeadsMax} novos contatos por mês por falta de otimização digital.`;
  }
  return "Com pequenas melhorias, sua empresa pode aumentar significativamente a geração de contatos qualificados.";
}

function buildComparisonInsight(
  benchmarks: FoxScorePayload["benchmarks"],
  score: number,
): string {
  const aboveCity = score > benchmarks.cityAvg;
  const aboveSegment = score > benchmarks.segmentAvg;
  const belowCompetitor = score < benchmarks.topCompetitor;

  if (aboveCity && belowCompetitor) {
    return "Sua empresa está acima da média local, porém ainda abaixo do melhor concorrente identificado.";
  }
  if (!aboveCity && !aboveSegment) {
    return "Existe uma oportunidade clara de crescimento para aproximar sua presença digital dos melhores resultados do segmento.";
  }
  if (aboveSegment && belowCompetitor) {
    return "Você supera a média do segmento, mas ainda há espaço para alcançar o nível do melhor concorrente encontrado.";
  }
  return "Sua empresa está bem posicionada, com oportunidades para consolidar liderança digital na região.";
}

function moduleLabel(key: keyof ModuleScores): string {
  const map: Record<string, string> = {
    performance: "performance",
    seo: "SEO técnico",
    security: "segurança",
    responsive: "responsividade",
    conversion: "conversão",
    localPresence: "presença local",
    social: "redes sociais",
    ux: "experiência do usuário",
    authority: "autoridade e conteúdo",
  };
  return map[key] ?? key;
}

function strongModules(m: ModuleScores): string[] {
  return (Object.keys(m) as (keyof ModuleScores)[])
    .filter((k) => norm(m[k], MODULE_WEIGHTS[k]) >= 65)
    .map(moduleLabel);
}

function weakModules(m: ModuleScores): string[] {
  return (Object.keys(m) as (keyof ModuleScores)[])
    .filter((k) => norm(m[k], MODULE_WEIGHTS[k]) < 50)
    .map(moduleLabel);
}

function buildConsultativeOpinion(
  result: AnalysisResult,
  input: DiagnosticInput,
  html: HtmlAnalysis,
  targetScore: number,
): string[] {
  const score = result.score;
  const m = result.moduleScores;
  const strong = strongModules(m);
  const weak = weakModules(m);
  const paragraphs: string[] = [];

  if (score < 40) {
    paragraphs.push(
      `Após analisar sua presença digital, identificamos que ${input.companyName} precisa de atenção urgente. Lacunas em visibilidade, credibilidade e conversão podem estar afastando clientes que já buscam pelo seu serviço na internet.`,
    );
  } else if (score < 70) {
    paragraphs.push(
      `Após analisar sua presença digital, identificamos que sua empresa possui uma boa base técnica${strong.length ? `, principalmente em ${strong.slice(0, 2).join(" e ")}` : ""}.`,
    );
    paragraphs.push(
      `Entretanto, existem oportunidades relevantes relacionadas a ${weak.length ? weak.slice(0, 3).join(", ") : "conversão, presença local e experiência do usuário"}. Atualmente o visitante encontra sua empresa, porém existem poucos estímulos para transformar essa visita em um contato comercial.`,
    );
  } else if (score < 85) {
    paragraphs.push(
      `Após analisar sua presença digital, identificamos uma estrutura sólida${strong.length ? `, com destaque em ${strong.slice(0, 2).join(" e ")}` : ""}. Sua empresa já transmite confiança, mas ainda há ganhos expressivos em conversão e presença local.`,
    );
    paragraphs.push(
      "O visitante encontra sua empresa, porém a jornada até o contato comercial pode ser mais clara — especialmente em mobile, onde a maioria dos acessos acontece.",
    );
  } else {
    paragraphs.push(
      "Após analisar sua presença digital, identificamos uma presença de alto nível, com fundamentos técnicos bem construídos. Sua empresa já está acima da média do mercado.",
    );
    paragraphs.push(
      "As oportunidades agora estão em otimizações avançadas — automações, conteúdo estratégico e campanhas — para maximizar retorno comercial.",
    );
  }

  if (score >= 40 && score < 85) {
    if (m.localPresence < 7 || !input.googleBusinessUrl) {
      paragraphs.push(
        "Também identificamos oportunidades na estratégia de conteúdo e no Google Business Profile, fatores que podem aumentar significativamente sua presença nas buscas locais.",
      );
    } else if (m.authority < 3) {
      paragraphs.push(
        "Investir em conteúdo — blog, cases e depoimentos — pode ampliar autoridade no Google e reforçar a confiança de novos visitantes.",
      );
    } else if (!html.hasWhatsAppLink && !html.hasForm) {
      paragraphs.push(
        "Canal de contato visível na primeira dobra do site é decisivo: WhatsApp e formulários bem posicionados convertem visitas em oportunidades reais.",
      );
    }
  }

  paragraphs.push(
    `Com a implementação das melhorias sugeridas, estimamos evolução da nota para cerca de ${targetScore} pontos e um aumento importante na geração de oportunidades comerciais.`,
  );

  return paragraphs.slice(0, 5);
}

function buildRoadmap(m: ModuleScores, score: number) {
  const phases: FoxScorePayload["roadmap"] = [];
  let projected = score;
  let phase = 1;

  const add = (title: string, points: number, description: string, condition: boolean) => {
    if (!condition) return;
    projected = Math.min(100, projected + points);
    phases.push({ phase: phase++, title, points, description });
  };

  add(
    "Landing page de conversão",
    8,
    "Página focada em campanha com CTA único e formulário/WhatsApp.",
    m.conversion < 10,
  );
  add(
    "SEO local e técnico",
    12,
    "Meta tags, schema, sitemap e conteúdo regional otimizado.",
    m.seo < 11,
  );
  add("Blog e conteúdo", 6, "Artigos que respondem dúvidas do seu público no Google.", m.authority < 3);
  add(
    "Google Business Profile",
    5,
    "Perfil completo no Maps com fotos, avaliações e horários.",
    m.localPresence < 7,
  );
  add(
    "Performance e Core Web Vitals",
    7,
    "Otimização de imagens, cache e velocidade mobile.",
    m.performance < 10,
  );
  add("Automações e CRM", 10, "Integração WhatsApp, formulários e follow-up comercial.", score < 80);

  if (phases.length === 0) {
    phases.push({
      phase: 1,
      title: "SEO avançado e campanhas",
      points: 8,
      description: "Escalar tráfego qualificado com conteúdo e mídia paga.",
    });
    projected = Math.min(100, score + 8);
  }

  return { phases, projectedScore: projected };
}

export function buildFoxScorePayload(
  result: AnalysisResult,
  input: DiagnosticInput,
): FoxScorePayload {
  const html = (result.rawData.html ?? {}) as HtmlAnalysis;
  const radar = buildRadar(result.moduleScores, html);
  const benchmarks = buildBenchmarks(result.score, input);
  const commercial = buildCommercial(result.score, html, input);
  const { stars, label } = starRating(result.score);
  const { phases, projectedScore } = buildRoadmap(result.moduleScores, result.score);
  const targetScore = Math.min(95, Math.max(projectedScore, result.score + 8));
  const consultativeOpinion = buildConsultativeOpinion(result, input, html, targetScore);
  const impactMessage = buildImpactMessage(commercial);
  const comparisonInsight = buildComparisonInsight(benchmarks, result.score);
  const premium = buildFoxScorePremium(
    result.score,
    benchmarks,
    commercial,
    phases,
    projectedScore,
    result.moduleScores,
  );

  return {
    radar,
    benchmarks,
    commercial,
    aiInsights: consultativeOpinion.slice(0, 3),
    consultativeOpinion,
    impactMessage,
    comparisonInsight,
    classificationSubtitle: classificationSubtitle(result.score),
    roadmap: phases,
    projectedScore,
    starRating: stars,
    starsLabel: label,
    premium,
  };
}
