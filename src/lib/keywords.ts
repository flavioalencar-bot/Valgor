/** Palavras-chave estratégicas — distribuídas por página (sem keyword stuffing). */
import { site } from "./site";

export const keywordClusters = {
  core: [
    "criação de sites",
    "desenvolvimento de sites",
    "empresa de criação de sites",
    "agência web",
    "web design",
    "desenvolvimento web",
    "site profissional",
    "site empresarial",
    "criar site",
    "criar site profissional",
    "desenvolvedor web",
    "site responsivo",
    "landing page",
    "site institucional",
    "site personalizado",
    "site moderno",
    "site para empresas",
  ],
  ecommerce: [
    "loja virtual",
    "e-commerce",
    "site para comércio",
    "site para vender mais",
    "site para captar clientes",
  ],
  platforms: [
    "portal web",
    "sistema web",
    "aplicação web",
    "portal corporativo",
    "sistema administrativo",
    "dashboard web",
    "painel administrativo",
    "CMS",
  ],
  hosting: [
    "hospedagem de sites",
    "hospedagem",
    "manutenção de sites",
    "suporte de sites",
    "domínio",
    "SSL",
    "cloud",
    "site rápido",
    "site seguro",
    "performance",
  ],
  marketing: [
    "SEO",
    "SEO para sites",
    "google meu negócio",
    "marketing digital",
    "google ads",
    "site otimizado para google",
    "landing page de alta conversão",
  ],
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "PHP",
    "MySQL",
    "Oracle",
    "desenvolvimento front-end",
    "desenvolvimento back-end",
    "PWA",
    "aplicativo empresarial",
    "core web vitals",
    "UX",
    "UI",
    "LGPD",
  ],
  integrations: [
    "integração WhatsApp",
    "integração API",
    "integração ERP",
    "integração CRM",
    "automação comercial",
    "sistema de gestão",
  ],
  business: [
    "quanto custa criar um site",
    "preço de site",
    "orçamento de site",
    "contratar desenvolvedor",
    "melhor empresa de sites",
    "desenvolvimento sob medida",
    "consultoria em tecnologia",
    "transformação digital",
    "criação de aplicativos",
  ],
  verticals: [
    "site para advogados",
    "site para médicos",
    "site para clínicas",
    "site para restaurantes",
    "site para contadores",
    "site para imobiliárias",
    "site para escolas",
    "site para academias",
    "site para indústrias",
  ],
  local: [
    "criação de sites são josé do rio preto",
    "desenvolvimento de sites são josé do rio preto",
    "agência web são josé do rio preto",
    "empresa de criação de sites rio preto",
    "loja virtual são josé do rio preto",
    "SEO são josé do rio preto",
  ],
} as const;

/** Keywords por rota (primárias + local). */
export const pageKeywords: Record<string, string[]> = {
  "/": [
    ...keywordClusters.core.slice(0, 10),
    ...keywordClusters.local.slice(0, 4),
    "transformação digital",
    "melhor empresa de sites",
  ],
  "/criacao-de-sites": [
    ...keywordClusters.core,
    ...keywordClusters.verticals,
    "landing page de alta conversão",
    "site otimizado para google",
    ...keywordClusters.local,
  ],
  "/criacao-de-loja-virtual": [
    ...keywordClusters.ecommerce,
    "painel administrativo",
    "integração API",
    ...keywordClusters.local,
  ],
  "/seo-otimizacao-de-site": [
    ...keywordClusters.marketing,
    "core web vitals",
    "performance",
    "site rápido",
    ...keywordClusters.local,
  ],
  "/google-adwords": [
    "google ads",
    "marketing digital",
    "site para captar clientes",
    "landing page",
    ...keywordClusters.local,
  ],
  "/Portal-Imobiliario": [
    "portal web",
    "sistema web",
    "site para imobiliárias",
    "painel administrativo",
    "aplicação web",
  ],
  "/Portal-de-Classificados": [
    "portal web",
    "sistema web",
    "aplicação web",
    "portal corporativo",
  ],
  "/portal-de-empregos": [
    "portal web",
    "sistema web",
    "sistema de gestão",
    "painel administrativo",
  ],
  "/criacao-de-sites-em-sao-paulo": [
    "web design",
    "UX",
    "UI",
    "site moderno",
    "identidade visual",
  ],
  "/hospedagem": [
    ...keywordClusters.hosting,
    "manutenção de sites",
    "suporte de sites",
  ],
  "/criacao-de-sites-e-loja-virtual": [
    "portfólio",
    "site profissional",
    "loja virtual",
    "desenvolvimento web",
    ...keywordClusters.local.slice(0, 2),
  ],
  "/empresa-de-criacao-de-site": [
    "empresa de criação de sites",
    "agência web",
    "melhor empresa de sites",
    "consultoria em tecnologia",
    ...keywordClusters.local,
  ],
  "/criacao-de-sites-fox-solution": [
    ...keywordClusters.business,
    "contratar desenvolvedor",
    "integração WhatsApp",
    ...keywordClusters.local,
  ],
};

export function keywordsForPath(path: string): string[] {
  return pageKeywords[path] ?? keywordClusters.local;
}

export const homeFaqs = [
  {
    question: "Quanto custa criar um site profissional?",
    answer:
      "O investimento varia conforme escopo: site institucional, loja virtual ou portal. Solicite orçamento sem compromisso — retornamos com preço de site e prazo para São José do Rio Preto e todo o Brasil.",
  },
  {
    question: "Qual a melhor empresa de criação de sites em Rio Preto?",
    answer:
      `A ${site.brand} é agência web com mais de 12 anos em desenvolvimento de sites, e-commerce e SEO local em São José do Rio Preto, com equipe própria de design, desenvolvimento e suporte.`,
  },
  {
    question: "Vocês fazem site responsivo e otimizado para o Google?",
    answer:
      "Sim. Todo projeto inclui web design mobile-first, Core Web Vitals, SSL, SEO técnico e estrutura para ranquear — site rápido, seguro e moderno.",
  },
  {
    question: "Posso contratar desenvolvedor web para projeto sob medida?",
    answer:
      "Sim. Desenvolvemos com React, Next.js, Node.js e PHP conforme a necessidade — front-end, back-end, integração API, ERP, CRM e painel administrativo (CMS).",
  },
] as const;

export const criacaoDeSitesFaqs = [
  {
    question: "Quanto custa a criação de um site em São José do Rio Preto?",
    answer:
      "O valor depende do tipo de site (institucional, landing page ou portal), número de páginas, integrações e conteúdo. Enviamos proposta detalhada com preço e prazo após entender seu objetivo — sem compromisso.",
  },
  {
    question: "Quanto tempo leva para desenvolver um site profissional?",
    answer:
      "Sites institucionais costumam levar de 3 a 6 semanas; projetos maiores ou com funcionalidades extras podem exigir mais tempo. Definimos cronograma na proposta, com etapas de design, desenvolvimento e revisão.",
  },
  {
    question: "O site já vem otimizado para o Google?",
    answer:
      `Sim. Entregamos site responsivo, rápido e com SEO técnico: URLs amigáveis, meta tags, Core Web Vitals, SSL, sitemap e estrutura preparada para Google Meu Negócio. A ${site.brand} também oferece planos de SEO contínuo.`,
  },
  {
    question: "Posso atualizar o conteúdo do site sozinho?",
    answer:
      "Sim. Incluímos CMS e painel administrativo para editar textos, imagens, blog e páginas sem depender de programador — com treinamento na entrega do projeto.",
  },
  {
    question: "Vocês criam site para advogados, clínicas, restaurantes e outros segmentos?",
    answer:
      "Sim. Desenvolvemos site personalizado para diversos nichos — advogados, médicos, contadores, imobiliárias, escolas, academias, comércio e indústria — com layout e conteúdo adaptados ao seu mercado.",
  },
] as const;

export const pageFaqs: Record<
  string,
  readonly { question: string; answer: string }[]
> = {
  "/criacao-de-sites": criacaoDeSitesFaqs,
  "/landing-pages": [
    {
      question: "Qual a diferença entre landing page e site completo?",
      answer:
        "A landing page foca em uma única oferta e ação (ex.: solicitar orçamento). O site institucional apresenta toda a empresa com várias páginas e navegação completa.",
    },
    {
      question: "Landing page funciona com Google Ads?",
      answer:
        "Sim. Desenvolvemos páginas otimizadas para campanhas, com pixels, formulários e CTAs alinhados ao anúncio.",
    },
    {
      question: "Quanto tempo leva para ficar pronta?",
      answer: "Landing pages costumam ser entregues entre 7 e 15 dias úteis, conforme complexidade e conteúdo.",
    },
  ],
};

export function faqsForPath(path: string) {
  return pageFaqs[path];
}

export const siteSegments = [
  { title: "Site para Advogados", desc: "Site institucional com credibilidade e captura de clientes." },
  { title: "Site para Médicos e Clínicas", desc: "Presença profissional, agendamento e SEO local." },
  { title: "Site para Restaurantes", desc: "Cardápio digital, delivery e integração WhatsApp." },
  { title: "Site para Contadores", desc: "Site empresarial com serviços e formulários seguros." },
  { title: "Site para Imobiliárias", desc: "Site + portal imobiliário com busca de imóveis." },
  { title: "Site para Escolas", desc: "Portal institucional e comunicação com famílias." },
  { title: "Site para Academias", desc: "Landing page de alta conversão e planos online." },
  { title: "Site para Comércio e Indústrias", desc: "Site empresarial e loja virtual integrada." },
] as const;

export const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Cloud",
  "SSL",
  "LGPD",
] as const;
