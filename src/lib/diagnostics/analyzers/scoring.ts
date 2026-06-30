import type {
  AnalysisResult,
  DiagnosticInput,
  HtmlAnalysis,
  ModuleScores,
  PageSpeedResult,
  SecurityAnalysis,
  SitemapRobotsAnalysis,
} from "../types";
import { MODULE_WEIGHTS } from "../types";
import { estimatePerformanceFromLoad } from "./pagespeed";
import { scoreSecurity } from "./security";

function clamp(n: number, max: number) {
  return Math.max(0, Math.min(max, Math.round(n)));
}

function getClassification(score: number) {
  if (score <= 30) {
    return {
      classification: "Presença digital crítica",
      classificationMessage:
        "Sua empresa está pouco preparada para gerar clientes pela internet. Potenciais clientes podem encontrar concorrentes antes de você.",
    };
  }
  if (score <= 50) {
    return {
      classification: "Presença digital fraca",
      classificationMessage:
        "Sua empresa possui alguns canais digitais, mas pontos importantes prejudicam credibilidade, visibilidade e geração de contatos.",
    };
  }
  if (score <= 70) {
    return {
      classification: "Presença digital intermediária",
      classificationMessage:
        "Sua empresa já possui uma base digital, mas pode melhorar performance, SEO, conversão e experiência do usuário.",
    };
  }
  if (score <= 85) {
    return {
      classification: "Presença digital boa",
      classificationMessage:
        "Sua empresa está bem posicionada, mas ainda há oportunidades para aumentar leads e performance comercial.",
    };
  }
  return {
    classification: "Presença digital forte",
    classificationMessage:
      "Boa estrutura digital. O próximo passo é otimizar performance, automações, SEO avançado e campanhas.",
  };
}

function commercialCopy(score: number) {
  if (score <= 50) {
    return {
      commercialMessage:
        "Sua empresa está perdendo oportunidades por não possuir uma presença digital forte. A VALGOR pode criar uma estrutura profissional para melhorar sua credibilidade, presença no Google e geração de contatos.",
      ctaLabel: "Quero criar meu site profissional",
    };
  }
  if (score <= 70) {
    return {
      commercialMessage:
        "Sua empresa já possui uma base digital, mas ainda há pontos importantes que podem melhorar performance, SEO e conversão. A VALGOR pode ajudar sua empresa a transformar visitantes em clientes.",
      ctaLabel: "Quero melhorar minha presença digital",
    };
  }
  return {
    commercialMessage:
      "Sua empresa já possui uma boa presença digital. O próximo passo é evoluir com estratégias avançadas de SEO, landing pages, automações e campanhas para ampliar resultados.",
    ctaLabel: "Quero vender mais pela internet",
  };
}

function scorePerformance(html: HtmlAnalysis, ps: PageSpeedResult): number {
  const max = MODULE_WEIGHTS.performance;
  if (ps.available && ps.mobile && ps.desktop) {
    const avg = (ps.mobile.performance + ps.desktop.performance) / 2;
    return clamp((avg / 100) * max, max);
  }
  return clamp(estimatePerformanceFromLoad(html.loadTimeMs, html.fetched), max);
}

function scoreSeo(html: HtmlAnalysis, sitemap: SitemapRobotsAnalysis): number {
  const max = MODULE_WEIGHTS.seo;
  if (!html.fetched) return 0;
  let pts = 0;
  if (html.title && html.title.length >= 10 && html.title.length <= 70) pts += 2;
  else if (html.title) pts += 1;
  if (html.metaDescription && html.metaDescription.length >= 50) pts += 2;
  else if (html.metaDescription) pts += 1;
  if (html.h1.length === 1) pts += 2;
  else if (html.h1.length > 0) pts += 1;
  if (html.h2.length >= 2) pts += 1;
  if (html.canonical) pts += 1;
  if (sitemap.robotsExists) pts += 1;
  if (sitemap.sitemapExists) pts += 2;
  if (html.ogTitle || html.ogDescription) pts += 1;
  if (html.schemaTypes.length > 0) pts += 2;
  if (html.imagesTotal > 0 && html.imagesWithAlt / html.imagesTotal >= 0.5) pts += 1;
  return clamp(pts, max);
}

function scoreResponsive(html: HtmlAnalysis, ps: PageSpeedResult): number {
  const max = MODULE_WEIGHTS.responsive;
  if (!html.fetched) return 0;
  let pts = 0;
  if (html.hasViewport) pts += 4;
  if (ps.available && ps.mobile && ps.mobile.performance >= 50) pts += 3;
  else if (html.hasViewport) pts += 2;
  if (html.bodyTextLength > 300) pts += 1;
  if (html.linkCount >= 5) pts += 1;
  if (html.hasNav) pts += 1;
  return clamp(pts, max);
}

function scoreConversion(html: HtmlAnalysis): number {
  const max = MODULE_WEIGHTS.conversion;
  if (!html.fetched) return 0;
  let pts = 0;
  if (html.hasWhatsAppLink) pts += 3;
  if (html.hasForm) pts += 2;
  if (html.hasTelLink) pts += 2;
  if (html.hasEmailVisible) pts += 1;
  if (html.h1.length > 0) pts += 1;
  if (html.hasTestimonialsSection) pts += 2;
  if (html.hasCasesSection) pts += 2;
  if (html.hasMapsEmbed || html.hasGoogleMapsLink) pts += 1;
  if (html.servicePageHints >= 3) pts += 1;
  return clamp(pts, max);
}

function scoreLocal(
  input: DiagnosticInput,
  html: HtmlAnalysis,
): number {
  const max = MODULE_WEIGHTS.localPresence;
  let pts = 0;
  if (input.city?.trim()) pts += 2;
  if (html.cityMentioned) pts += 2;
  if (html.hasMapsEmbed || html.hasGoogleMapsLink) pts += 2;
  if (html.hasGoogleBusinessLink || input.googleBusinessUrl?.trim()) pts += 2;
  if (html.phoneMentioned || html.hasTelLink) pts += 1;
  if (html.bodyTextLength > 0 && input.companyName && html.fetched) pts += 1;
  return clamp(pts, max);
}

function scoreSocial(input: DiagnosticInput, html: HtmlAnalysis): number {
  const max = MODULE_WEIGHTS.social;
  let pts = 0;
  if (input.instagramUrl?.trim()) pts += 4;
  if (html.hasInstagramLink) pts += 4;
  if (input.instagramUrl && html.hasInstagramLink) pts += 2;
  return clamp(pts, max);
}

function scoreUx(html: HtmlAnalysis): number {
  const max = MODULE_WEIGHTS.ux;
  if (!html.fetched) return 0;
  let pts = 0;
  if (html.hasNav) pts += 2;
  if (html.h1.length === 1) pts += 2;
  if (html.h2.length >= 2) pts += 1;
  if (html.bodyTextLength >= 500) pts += 2;
  if (html.linkCount >= 8 && html.linkCount <= 120) pts += 1;
  if (html.hasWhatsAppLink || html.hasForm || html.hasTelLink) pts += 2;
  return clamp(pts, max);
}

function scoreAuthority(html: HtmlAnalysis): number {
  const max = MODULE_WEIGHTS.authority;
  if (!html.fetched) return 0;
  let pts = 0;
  if (html.hasBlogSection) pts += 2;
  if (html.hasTestimonialsSection) pts += 1;
  if (html.hasCasesSection) pts += 1;
  if (html.servicePageHints >= 5) pts += 1;
  return clamp(pts, max);
}

function buildStrengths(
  modules: ModuleScores,
  html: HtmlAnalysis,
  input: DiagnosticInput,
): string[] {
  const s: string[] = [];
  if (modules.performance >= 10) s.push("Performance do site dentro de um patamar competitivo.");
  if (modules.seo >= 10) s.push("Boa base de SEO técnico detectada no site.");
  if (modules.security >= 7) s.push("Site com HTTPS e práticas de segurança adequadas.");
  if (html.hasWhatsAppLink) s.push("Canal de WhatsApp presente no site.");
  if (html.hasForm) s.push("Formulário de contato identificado.");
  if (input.instagramUrl) s.push("Instagram informado — presença em rede social ativa.");
  if (html.hasInstagramLink) s.push("Link do Instagram integrado ao site.");
  if (input.city) s.push("Cidade de atuação informada — favorece SEO local.");
  if (html.cityMentioned) s.push("Site menciona a região de atuação.");
  if (html.hasMapsEmbed) s.push("Mapa ou localização visível no site.");
  if (html.schemaTypes.length > 0) s.push("Dados estruturados (Schema.org) encontrados.");
  if (s.length === 0) s.push("Dados básicos de contato informados para follow-up comercial.");
  return s.slice(0, 8);
}

function buildWeaknesses(
  modules: ModuleScores,
  html: HtmlAnalysis,
  input: DiagnosticInput,
  ps: PageSpeedResult,
): string[] {
  const w: string[] = [];
  if (!input.websiteUrl?.trim()) w.push("Sua empresa ainda não possui um site profissional informado.");
  if (input.websiteUrl && !html.fetched) {
    w.push("O site informado não pôde ser acessado — verifique se está online.");
  }
  if (html.fetched && !html.hasHttps) w.push("Seu site pode não estar utilizando HTTPS corretamente.");
  if (modules.performance < 8) {
    w.push("Performance abaixo do ideal — site lento afeta Google e conversão.");
  }
  if (modules.seo < 8) w.push("SEO técnico incompleto — title, meta, sitemap ou schema podem melhorar.");
  if (modules.security < 6) w.push("Headers de segurança ou SSL podem ser reforçados.");
  if (!html.hasWhatsAppLink && !html.hasForm) {
    w.push("Faltam CTAs claros de contato (WhatsApp ou formulário) no site.");
  }
  if (!input.instagramUrl) w.push("Instagram não informado — redes sociais complementam o site.");
  if (!html.hasInstagramLink && input.instagramUrl) {
    w.push("Site não linka para o Instagram — perde integração entre canais.");
  }
  if (modules.localPresence < 6) w.push("Presença local fraca — Maps, NAP ou Google Business podem melhorar.");
  if (!ps.available && input.websiteUrl) {
    w.push("Análise PageSpeed não disponível — configure API ou otimize manualmente.");
  }
  return w.slice(0, 10);
}

function buildRecommendations(modules: ModuleScores, score: number): string[] {
  const r: string[] = [];
  if (modules.performance < 10) r.push("Otimizar velocidade mobile e Core Web Vitals (imagens, cache, CDN).");
  if (modules.seo < 12) r.push("Completar SEO técnico: meta tags, sitemap.xml, robots.txt e Schema.org.");
  if (modules.conversion < 10) r.push("Adicionar WhatsApp flutuante, formulário e CTA acima da dobra.");
  if (modules.localPresence < 7) r.push("Reforçar SEO local: Google Business, mapa e NAP consistente.");
  if (modules.social < 7) r.push("Integrar Instagram ao site e manter bio com link de conversão.");
  if (modules.authority < 3) r.push("Publicar blog, cases e depoimentos para autoridade digital.");
  if (score <= 50) r.push("Contratar site profissional VALGOR com SEO local incluso.");
  else if (score <= 70) r.push("Reformulação do site + landing pages de conversão.");
  else r.push("Evoluir com SEO avançado, automações e campanhas pagas.");
  return r.slice(0, 6);
}

export function computeAnalysis(params: {
  input: DiagnosticInput;
  html: HtmlAnalysis;
  pageSpeed: PageSpeedResult;
  security: SecurityAnalysis;
  sitemap: SitemapRobotsAnalysis;
}): AnalysisResult {
  const { input, html, pageSpeed, security, sitemap } = params;

  const moduleScores: ModuleScores = {
    performance: scorePerformance(html, pageSpeed),
    seo: scoreSeo(html, sitemap),
    security: scoreSecurity(security, MODULE_WEIGHTS.security),
    responsive: scoreResponsive(html, pageSpeed),
    conversion: scoreConversion(html),
    localPresence: scoreLocal(input, html),
    social: scoreSocial(input, html),
    ux: scoreUx(html),
    authority: scoreAuthority(html),
  };

  const score = Object.values(moduleScores).reduce((a, b) => a + b, 0);
  const { classification, classificationMessage } = getClassification(score);
  const { commercialMessage, ctaLabel } = commercialCopy(score);

  return {
    moduleScores,
    score,
    classification,
    classificationMessage,
    strengths: buildStrengths(moduleScores, html, input),
    weaknesses: buildWeaknesses(moduleScores, html, input, pageSpeed),
    recommendations: buildRecommendations(moduleScores, score),
    commercialMessage,
    ctaLabel,
    rawData: {
      html,
      pageSpeed,
      security,
      sitemap,
      input,
      analyzedAt: new Date().toISOString(),
    },
  };
}

export { getClassification, commercialCopy };
