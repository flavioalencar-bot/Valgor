/** Indicadores institucionais exibidos na página Valgor Score — ajuste aqui. */
export const FOX_SCORE_TRUST = {
  companiesAnalyzed: "+1.400",
  accuracyLabel: "94% de precisão estimada",
  realtimeLabel: "Análise atualizada em tempo real",
} as const;

export const FOX_SCORE_AUTHORITY_ITEMS = [
  "SEO",
  "Performance",
  "Segurança",
  "UX",
  "Conversão",
  "Google Business Profile",
  "Redes Sociais",
  "Inteligência VALGOR",
] as const;

export const FOX_SCORE_CTA_LABEL = "🚀 Quero aumentar meu Valgor Score";

export const FOX_SCORE_CTA_SUBTITLE =
  "Receba uma consultoria personalizada baseada neste diagnóstico.";

export const FOX_SCORE_CRITERIA_COUNT = 150;

export const FOX_SCORE_CRITERIA_ITEMS = [
  { label: "SEO", tooltip: "Avalia títulos, meta descriptions, headings, sitemap e indexação." },
  { label: "Performance", tooltip: "Velocidade, Core Web Vitals e tempo de carregamento." },
  { label: "UX", tooltip: "Hierarquia visual, legibilidade, menu e responsividade." },
  { label: "Conversão", tooltip: "Avalia CTAs, formulários, WhatsApp e geração de contatos." },
  { label: "Segurança", tooltip: "SSL, HTTPS, headers de segurança e boas práticas." },
  { label: "Google Business", tooltip: "Presença local, Maps e perfil comercial no Google." },
  { label: "Redes sociais", tooltip: "Integração, bio, links e presença no Instagram." },
  { label: "Conteúdo", tooltip: "Autoridade, blog, cases e profundidade de informação." },
] as const;

export const FOX_SCORE_DEFAULTS = {
  averageTicket: 800,
  clientsPerMonth: 12,
  marginPercent: 35,
} as const;
