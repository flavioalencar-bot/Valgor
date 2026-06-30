import { padSectionsToMin } from "@/lib/content/compliance-pad";
import { segmentExtraSections } from "@/lib/content/long-form";
import { type BannerAccent } from "@/lib/images";
import { site } from "@/lib/site";

export type SegmentPageData = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  lead: string;
  accent: BannerAccent;
  niche: string;
  audience: string;
  features: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
};

type NicheConfig = {
  slug: string;
  niche: string;
  audience: string;
  title: string;
  metaTitle: string;
  description: string;
  lead: string;
  accent?: BannerAccent;
  features: string[];
  painPoints: string[];
  solutions: string[];
};

function buildSections(config: NicheConfig): SegmentPageData["sections"] {
  const { niche, audience, painPoints, solutions } = config;
  return [
    {
      heading: `Por que ${audience} precisa de um site profissional`,
      paragraphs: [
        `Seu cliente pesquisa no Google antes de ligar. Quando ${audience} não aparece nos resultados, o negócio perde oportunidades todos os dias para concorrentes que investiram em presença digital.`,
        `Depender apenas do Instagram ou de indicações limita o crescimento. Um site profissional funciona como vendedor 24 horas: apresenta serviços, transmite confiança e captura contatos enquanto você atende clientes.`,
        `Para ${niche}, credibilidade online não é luxo — é requisito. Pacientes, clientes e parceiros esperam encontrar informações claras, formas de contato e uma imagem alinhada ao nível do serviço prestado.`,
      ],
    },
    {
      heading: "Problemas comuns sem um site adequado",
      paragraphs: [
        ...painPoints.map((p) => `→ ${p}`),
        `A ${site.brand} resolve esses gargalos com sites sob medida para ${niche}, desenvolvidos em ${site.city} com atendimento para todo o Brasil.`,
      ],
    },
    {
      heading: `O que incluímos no site para ${niche}`,
      paragraphs: [
        ...solutions,
        `Utilizamos tecnologias modernas (React, Next.js) quando o projeto exige performance máxima, sempre com foco em SEO, velocidade e conversão.`,
      ],
    },
    {
      heading: "SEO local e captura de clientes",
      paragraphs: [
        `Otimizamos cada página para buscas relacionadas à sua região. Google Maps, schema.org e conteúdo estratégico aumentam visibilidade em ${site.city} e cidades vizinhas.`,
        `Formulários, botão WhatsApp e CTAs bem posicionados transformam visitantes em leads qualificados — o objetivo principal do site não é existir, é vender.`,
      ],
    },
    {
      heading: "Processo e prazos",
      paragraphs: [
        `Iniciamos com entendimento do seu negócio e público. Em seguida, planejamento, design, desenvolvimento, publicação e suporte contínuo conforme o plano contratado.`,
        `Sites institucionais costumam ficar prontos entre 15 e 30 dias úteis. Você acompanha cada etapa e recebe treinamento para atualizar conteúdos no painel administrativo.`,
      ],
    },
    {
      heading: `Por que escolher a ${site.brand}`,
      paragraphs: [
        `${site.brand} é parceira digital em ${site.city} com mais de 12 anos de mercado e milhares de projetos entregues. Equipe própria de design, desenvolvimento e suporte — sem terceirizar a entrega.`,
        `${site.headline} Nossos planos incluem desenvolvimento, hospedagem, SSL, domínio no primeiro ano e suporte técnico em mensalidade acessível.`,
      ],
    },
  ];
}

function buildFaqs(config: NicheConfig): SegmentPageData["faqs"] {
  return [
    {
      question: `Quanto custa um site para ${config.niche}?`,
      answer: `Planos a partir de R$ 199,90/mês com desenvolvimento incluso. O valor varia conforme páginas, SEO e funcionalidades específicas para ${config.niche}. Solicite orçamento personalizado.`,
    },
    {
      question: "Quanto tempo leva para ficar pronto?",
      answer: "Entre 15 e 30 dias úteis para sites institucionais, dependendo do escopo e aprovação de conteúdos.",
    },
    {
      question: "Meu site aparece no Google?",
      answer: "Sim. Entregamos site otimizado para SEO técnico e, nos planos superiores, SEO contínuo e conteúdo orientado a busca local.",
    },
    {
      question: "Posso atualizar o site sozinho?",
      answer: "Sim. Incluímos painel administrativo (CMS) para textos, imagens e banners conforme seu plano.",
    },
    {
      question: "Atendem fora de São José do Rio Preto?",
      answer: "Sim. Atendemos todo o Brasil com reuniões online e suporte remoto.",
    },
  ];
}

function createSegmentPage(config: NicheConfig): SegmentPageData {
  const rawSections = [...buildSections(config), ...segmentExtraSections(config.niche)];
  const leadWords = config.lead.split(/\s+/).filter(Boolean).length;
  const sectionMin = Math.max(800, 1500 - leadWords);
  const sections = padSectionsToMin(rawSections, config.niche, sectionMin, leadWords, 1500);

  return {
    slug: `/${config.slug}`,
    title: config.title,
    metaTitle: config.metaTitle,
    description: config.description,
    lead: config.lead,
    accent: config.accent ?? "valgor",
    niche: config.niche,
    audience: config.audience,
    features: config.features,
    sections,
    faqs: buildFaqs(config),
  };
}

const nichePages: NicheConfig[] = [
  {
    slug: "site-para-advogados",
    niche: "advogados e escritórios jurídicos",
    audience: "advogados",
    title: "Site para Advogados",
    metaTitle: "Site para Advogados — Criação Profissional com SEO",
    description:
      "Site para advogados e escritórios de advocacia: credibilidade, captura de clientes e SEO local em São José do Rio Preto.",
    lead: "Presença digital que transmite confiança e converte visitantes em consultas.",
    features: ["Áreas de atuação e equipe", "Formulário seguro", "SEO para advogados", "WhatsApp", "LGPD"],
    painPoints: ["Clientes não encontram o escritório no Google", "Site desatualizado", "Dependência de indicações", "Concorrentes com presença digital superior"],
    solutions: ["Layout profissional alinhado à OAB", "Páginas por área de atuação", "Blog jurídico para autoridade", "WhatsApp para consultas"],
  },
  {
    slug: "site-para-medicos",
    niche: "médicos e consultórios",
    audience: "médicos",
    title: "Site para Médicos",
    metaTitle: "Site para Médicos — Consultório Online Profissional",
    description: "Criação de site para médicos: credibilidade, agendamento, SEO local e conformidade.",
    lead: "Pacientes pesquisam antes de marcar. Seu site precisa aparecer e transmitir confiança.",
    features: ["Especialidades", "Agendamento", "SEO médico", "WhatsApp", "Mobile first"],
    painPoints: ["Pacientes não encontram o consultório", "Instagram não substitui site", "Falta canal para dúvidas"],
    solutions: ["Design que transmite seriedade", "Páginas por especialidade", "FAQ para pacientes", "SEO local saúde"],
  },
  {
    slug: "site-para-clinicas",
    niche: "clínicas e centros médicos",
    audience: "clínicas",
    title: "Site para Clínicas",
    metaTitle: "Site para Clínicas — Presença Digital Completa",
    description: "Site para clínicas: múltiplos profissionais, serviços e captura de pacientes.",
    lead: "Centralize especialidades, equipe e agendamentos em uma plataforma profissional.",
    accent: "emerald",
    features: ["Multi-profissionais", "Agendamento", "SEO clínicas", "Galeria", "CMS"],
    painPoints: ["Informações espalhadas", "Equipe difícil de apresentar", "Baixa visibilidade local"],
    solutions: ["Página por especialidade", "Mapa e horários", "Convênios e preparo", "Performance mobile"],
  },
  {
    slug: "site-para-restaurantes",
    niche: "restaurantes",
    audience: "restaurantes",
    title: "Site para Restaurantes",
    metaTitle: "Site para Restaurantes — Cardápio e Delivery",
    description: "Site para restaurantes com cardápio digital, delivery e SEO local.",
    lead: "Cardápio online, reservas e delivery — disponível 24 horas.",
    accent: "amber",
    features: ["Cardápio digital", "WhatsApp pedidos", "SEO gastronomia", "Galeria", "Mapa"],
    painPoints: ["Dependência do iFood", "Não aparece no Google", "Sem reservas online"],
    solutions: ["Cardápio responsivo", "Pedido via WhatsApp", "Schema restaurante", "Promoções"],
  },
  {
    slug: "site-para-imobiliarias",
    niche: "imobiliárias",
    audience: "imobiliárias",
    title: "Site para Imobiliárias",
    metaTitle: "Site para Imobiliárias — Portal e Leads",
    description: "Site e portal imobiliário com busca de imóveis e captação de leads.",
    lead: "Exiba imóveis, capture leads e fortaleça sua marca.",
    features: ["Busca imóveis", "Formulários", "SEO imobiliário", "Portal", "CRM"],
    painPoints: ["Portais terceiros caros", "Leads diluídos", "Marca fraca online"],
    solutions: ["Vitrine própria", "Filtros avançados", "Landing por empreendimento", "WhatsApp"],
  },
  {
    slug: "site-para-escritorios",
    niche: "escritórios corporativos",
    audience: "escritórios",
    title: "Site para Escritórios",
    metaTitle: "Site para Escritórios — Institucional Profissional",
    description: "Site institucional para escritórios com SEO e captura de clientes.",
    lead: "Comunicação profissional que reflete a seriedade do seu escritório.",
    features: ["Institucional", "Serviços", "Blog", "Formulários", "SEO"],
    painPoints: ["Site antigo", "Serviços mal explicados", "Concorrentes no Google"],
    solutions: ["Design corporativo", "Páginas por serviço", "Cases", "LGPD"],
  },
  {
    slug: "site-para-contadores",
    niche: "contadores",
    audience: "contadores",
    title: "Site para Contadores",
    metaTitle: "Site para Contadores — Escritório Contábil Online",
    description: "Site para contadores: credibilidade, serviços e captação de empresas.",
    lead: "Atraia empresas que buscam contabilidade confiável.",
    features: ["Serviços contábeis", "Área cliente", "SEO contabilidade", "Proposta", "Blog fiscal"],
    painPoints: ["Empresas não encontram online", "Falta conteúdo expert", "Site sem mobile"],
    solutions: ["Páginas por serviço fiscal", "Blog SEO", "Diagnóstico gratuito", "WhatsApp"],
  },
  {
    slug: "site-para-engenheiros",
    niche: "engenheiros",
    audience: "engenheiros",
    title: "Site para Engenheiros",
    metaTitle: "Site para Engenheiros — Portfólio e Projetos",
    description: "Site para engenheiros com portfólio de obras e SEO.",
    lead: "Apresente projetos, serviços e credenciais com site profissional.",
    accent: "cyan",
    features: ["Portfólio obras", "Serviços", "SEO", "Orçamento", "CREA"],
    painPoints: ["Obras só offline", "Dificuldade captar online", "Concorrentes com portfólio"],
    solutions: ["Galeria filtrada", "Páginas por serviço", "Depoimentos", "SEO local"],
  },
  {
    slug: "site-para-arquitetos",
    niche: "arquitetos",
    audience: "arquitetos",
    title: "Site para Arquitetos",
    metaTitle: "Site para Arquitetos — Portfólio Visual Premium",
    description: "Site para arquitetos com portfólio visual e captura de clientes.",
    lead: "Seu portfólio merece um site à altura dos seus projetos.",
    accent: "violet",
    features: ["Portfólio premium", "Galeria", "SEO arquitetura", "Briefing", "Instagram"],
    painPoints: ["Instagram insuficiente", "Clientes premium exigem site", "PDF difícil de navegar"],
    solutions: ["Design minimalista", "Categorias de projeto", "Processo de trabalho", "Imagens otimizadas"],
  },
  {
    slug: "site-para-empresas",
    niche: "empresas",
    audience: "empresas",
    title: "Site para Empresas",
    metaTitle: "Site para Empresas — Institucional e Comercial",
    description: "Site empresarial com SEO e geração de leads em São José do Rio Preto.",
    lead: "Site empresarial que vende, não apenas apresenta.",
    features: ["Institucional", "SEO", "Integrações", "CMS", "Analytics"],
    painPoints: ["Site desatualizado", "Zero leads", "Concorrentes no Google"],
    solutions: ["Redesign VALGOR", "Copy conversão", "Landing pages", "Analytics"],
  },
  {
    slug: "criacao-de-sites-em-sao-jose-do-rio-preto",
    niche: "empresas de São José do Rio Preto",
    audience: "empresas de Rio Preto",
    title: "Criação de Sites em São José do Rio Preto",
    metaTitle: "Criação de Sites em São José do Rio Preto — VALGOR",
    description: "Empresa de criação de sites em SJRP. Sites profissionais, SEO local e suporte próximo.",
    lead: `Agência web local em ${site.city} — mercado regional, padrão nacional.`,
    features: ["Atendimento local", "SEO Noroeste", "Equipe SJRP", "Planos mensais", "Suporte"],
    painPoints: ["Agências distantes", "Sites sem SEO regional", "Suporte terceirizado"],
    solutions: [`Operação em ${site.city}`, "SEO regional", "Cases locais", "Reuniões presenciais"],
  },
  {
    slug: "desenvolvimento-de-sites",
    niche: "desenvolvimento web",
    audience: "empresas",
    title: "Desenvolvimento de Sites",
    metaTitle: "Desenvolvimento de Sites — React e Next.js",
    description: "Desenvolvimento de sites modernos com React, Next.js e alta performance.",
    lead: "Código moderno, site rápido e preparado para escalar.",
    accent: "cyan",
    features: ["React/Next.js", "Lighthouse 95+", "SEO técnico", "APIs", "Hospedagem"],
    painPoints: ["Sites lentos", "Código legado", "Sem integrações"],
    solutions: ["TypeScript", "Core Web Vitals", "Integrações ERP/CRM", "Suporte contínuo"],
  },
  {
    slug: "manutencao-de-sites",
    niche: "manutenção de sites",
    audience: "empresas com site",
    title: "Manutenção de Sites",
    metaTitle: "Manutenção de Sites — Suporte e Segurança",
    description: "Manutenção de sites: atualizações, backups, SSL e suporte técnico.",
    lead: "Site sempre atualizado, seguro e funcionando.",
    accent: "emerald",
    features: ["Alterações", "Backups", "Monitoramento", "SSL", "Suporte"],
    painPoints: ["Conteúdo antigo", "Risco de queda", "Sem suporte rápido"],
    solutions: ["Horas mensais", "Alertas", "Segurança", "Relatórios"],
  },
];

export const segmentPages: Record<string, SegmentPageData> = Object.fromEntries(
  nichePages.map((config) => [config.slug, createSegmentPage(config)]),
);

export const segmentSlugs = Object.keys(segmentPages);

export function getSegmentPage(slug: string): SegmentPageData | undefined {
  return segmentPages[slug];
}
