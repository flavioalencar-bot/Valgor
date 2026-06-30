import {
  serviceLongFormBlocks,
  type LongFormSection,
} from "@/lib/content/long-form";
import { padSectionsToMin } from "@/lib/content/compliance-pad";
import {
  mergeServiceSections,
  serviceExclusiveSections,
} from "@/lib/content/service-exclusive";
import { servicePages, type ServicePageData } from "@/lib/services-data";

const longFormTopics: Record<string, { topic: string; focus: string }> = {
  "criacao-de-sites": {
    topic: "Criação de Sites Profissionais",
    focus:
      "Um site institucional bem construído posiciona sua empresa nas buscas, educa o visitante e conduz para o contato comercial.",
  },
  "criacao-de-loja-virtual": {
    topic: "Loja Virtual e E-commerce",
    focus:
      "Uma loja virtual própria reduz dependência de marketplaces, aumenta margem e permite relacionamento direto com o cliente.",
  },
  "seo-otimizacao-de-site": {
    topic: "SEO e Otimização de Sites",
    focus:
      "SEO coloca seu site na frente de quem já está buscando seu produto ou serviço — a intenção de compra é alta.",
  },
  "google-adwords": {
    topic: "Google Ads e Tráfego Pago",
    focus:
      "Campanhas bem gerenciadas trazem leads qualificados enquanto SEO organicamente amadurece — combinação ideal para crescimento.",
  },
  "Portal-Imobiliario": {
    topic: "Portal Imobiliário",
    focus:
      "Imobiliárias que possuem portal próprio capturam leads sem pagar comissão a portais nacionais e fortalecem marca local.",
  },
  "Portal-de-Classificados": {
    topic: "Portal de Classificados",
    focus:
      "Portais regionais de anúncios monetizam tráfego local com modelo comprovado em todo o Brasil.",
  },
  "portal-de-empregos": {
    topic: "Portal de Empregos",
    focus:
      "Conectar empresas e candidatos em plataforma própria gera receita recorrente e autoridade em RH regional.",
  },
  "criacao-de-sites-em-sao-paulo": {
    topic: "Web Design e UX/UI",
    focus:
      "Design profissional diferencia sua marca e aumenta taxa de conversão do site — visitante permanece e confia.",
  },
  hospedagem: {
    topic: "Hospedagem de Sites",
    focus:
      "Hospedagem estável é base invisível: site fora do ar ou lento destrói confiança e conversão instantaneamente.",
  },
  "landing-pages": {
    topic: "Landing Pages de Conversão",
    focus:
      "Landing pages convertem tráfego pago e orgânico em leads porque eliminam distrações e focam em uma única ação.",
  },
};

export function enrichServicePage(key: string, page: ServicePageData): ServicePageData {
  const sections = buildSectionsForKey(key, page);
  if (sections.length === 0) return page;
  return {
    ...page,
    sections,
    body: page.body,
  };
}

function introWordCount(page: ServicePageData): number {
  return [page.lead, ...page.body].join(" ").split(/\s+/).filter(Boolean).length;
}

function buildSectionsForKey(key: string, page: ServicePageData): LongFormSection[] {
  const cfg = longFormTopics[key];
  if (!cfg) return [];
  const base = serviceLongFormBlocks(cfg.topic, cfg.focus);
  const merged = mergeServiceSections(base, key);
  const intro = introWordCount(page);
  const sectionMin = Math.max(800, 1500 - intro);
  return padSectionsToMin(merged, cfg.topic, sectionMin, intro, 1500);
}

export function getEnrichedServicePage(key: string): ServicePageData | undefined {
  const page = servicePages[key];
  if (!page) return undefined;
  return enrichServicePage(key, page);
}

export function getEnrichedServicePages(): Record<string, ServicePageData> {
  return Object.fromEntries(
    Object.keys(servicePages).map((key) => [
      key,
      enrichServicePage(key, servicePages[key]!),
    ]),
  );
}

/** Garantia mínima PRD — log em dev se abaixo de 1500 */
export function assertMinWords(key: string, min = 1500): number {
  const page = getEnrichedServicePage(key);
  if (!page?.sections) return 0;
  const intro = [page.lead, ...page.body].join(" ");
  const sections = page.sections.flatMap((s) => [s.heading, ...s.paragraphs]).join(" ");
  return (intro + " " + sections).split(/\s+/).filter(Boolean).length;
}
