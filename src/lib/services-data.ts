import { type BannerAccent } from "@/lib/images";
import { site } from "@/lib/site";
import { type LongFormSection } from "@/lib/content/long-form";

export type ServiceHighlight = {
  title: string;
  description: string;
  href?: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  lead: string;
  accent: BannerAccent;
  features: string[];
  body: string[];
  sections?: LongFormSection[];
  highlights?: ServiceHighlight[];
  /** Seções extras de SEO (segmentos, FAQ, etc.) */
  seoExtras?: ("segments" | "tech" | "faq" | "plans")[];
  /** Conjunto de planos mensais (quando seoExtras inclui "plans") */
  plansKey?: "site" | "ecommerce";
  /** Dados para Schema.org Service */
  schemaService?: { name: string; description: string };
  /** Cabeçalho da seção FAQ (quando seoExtras inclui "faq") */
  faqHeader?: { eyebrow?: string; title?: string; description?: string };
};

export const servicePages: Record<string, ServicePageData> = {
  "criacao-de-sites": {
    slug: "/criacao-de-sites",
    title: `Criação de sites em ${site.city}`,
    metaTitle: "Criação de Sites em São José do Rio Preto | Orçamento em 24h",
    description:
      "Criação de sites em Rio Preto (SJRP): site profissional, institucional e landing page com SEO local, WhatsApp e CMS. Agência VALGOR — peça orçamento sem compromisso.",
    lead: "Criação de sites em São José do Rio Preto com foco em Google, WhatsApp e geração de contatos — atendimento local e entrega profissional.",
    accent: "valgor",
    seoExtras: ["segments", "plans", "tech", "faq"],
    plansKey: "site",
    schemaService: {
      name: "Criação de Sites e Desenvolvimento Web",
      description:
        "Desenvolvimento de sites profissionais, institucionais e landing pages responsivas com SEO, CMS, SSL e integração WhatsApp em São José do Rio Preto.",
    },
    faqHeader: {
      eyebrow: "Dúvidas frequentes",
      title: "Perguntas sobre criação de sites",
      description: `Respostas sobre preço, prazo e tipos de site em ${site.city} e região.`,
    },
    features: [
      "Web design e UX/UI profissional",
      "Site responsivo mobile-first",
      "CMS e painel administrativo",
      "SEO para sites e Core Web Vitals",
      "Integração WhatsApp e formulários",
      "Hospedagem, domínio e SSL",
      "LGPD e site seguro",
    ],
    body: [
      `A ${site.brand} é empresa de criação de sites e desenvolvimento web em São José do Rio Preto. Criamos site profissional, site empresarial, site institucional e landing page de alta conversão para empresas que querem site para vender mais e site para captar clientes.`,
      "Nosso processo de desenvolvimento de sites combina web design, performance e SEO técnico. Você recebe site responsivo, site rápido, site seguro e site moderno — com HTML, CSS e JavaScript de qualidade, usando React e Next.js quando o projeto exige aplicação web robusta.",
      "Precisa criar site profissional ou contratar desenvolvedor web? Oferecemos site personalizado para advogados, médicos, clínicas, restaurantes, contadores, imobiliárias, escolas, academias, comércio e indústrias. Cada site é otimizado para Google e preparado para Google Meu Negócio.",
      "Solicite orçamento de site: informamos preço de site e prazo com transparência. Somos referência em agência web e melhor empresa de sites da região para quem busca desenvolvimento sob medida e transformação digital.",
    ],
  },
  "criacao-de-loja-virtual": {
    slug: "/criacao-de-loja-virtual",
    title: `Loja virtual em ${site.city}`,
    metaTitle: "Criação de Loja Virtual e E-commerce em São José do Rio Preto",
    description:
      "Criação de loja virtual e e-commerce em São José do Rio Preto com checkout, PIX, cartão, painel administrativo, catálogo otimizado e SEO para vender online.",
    lead: "Criação de loja virtual e e-commerce profissional para vender online com site rápido, seguro e integração WhatsApp.",
    accent: "valgor",
    seoExtras: ["plans"],
    plansKey: "ecommerce",
    schemaService: {
      name: "Criação de Loja Virtual e E-commerce",
      description:
        "Loja virtual e e-commerce com checkout, PIX, cartão, painel administrativo, catálogo otimizado e SEO para vender online em São José do Rio Preto.",
    },
    features: [
      "Loja virtual e catálogo completo",
      "Gateways de pagamento",
      "Painel administrativo (CMS)",
      "Integração API e ERP",
      "SEO para sites e performance",
      "Hospedagem, SSL e suporte",
    ],
    body: [
      `A ${site.brand} desenvolve loja virtual e e-commerce sob medida para o varejo de ${site.city} e região. Criamos catálogo de produtos, checkout seguro, área do cliente e integração com WhatsApp — tudo com UX/UI focada em conversão e site responsivo.`,
      "Você gerencia pedidos, estoque e promoções em painel administrativo intuitivo. Nossos planos mensais incluem desenvolvimento, hospedagem, SSL, domínio no primeiro ano e suporte técnico — sem investimento inicial alto em plataforma ou projeto avulso.",
      "Escolha entre os planos Valgor E-commerce Start, BUSINESS ou PRIME conforme volume de produtos, integrações de pagamento e necessidade de SEO. Do pequeno comércio local à operação que exige ERP e recuperação de carrinho abandonado.",
    ],
    highlights: [
      {
        title: "Pagamentos integrados",
        description: "PIX, cartão de crédito e gateways como Mercado Pago, PagSeguro ou Stripe — conforme o plano contratado.",
      },
      {
        title: "Frete e logística",
        description: "Cálculo automático via Correios no plano START e integração com transportadoras nos planos superiores.",
      },
      {
        title: "Gestão de vendas",
        description: "Painel com pedidos, produtos, cupons, relatórios e área do cliente para acompanhar compras.",
      },
      {
        title: "Planos a partir de R$ 499,90/mês",
        description: "Desenvolvimento da loja incluso na mensalidade, com fidelidade de 12 meses. Compare os planos abaixo.",
        href: "#planos",
      },
    ],
  },
  "seo-otimizacao-de-site": {
    slug: "/seo-otimizacao-de-site",
    title: "SEO e Otimização",
    metaTitle: "SEO para Sites e Google Meu Negócio em São José do Rio Preto",
    description:
      "SEO para sites em São José do Rio Preto com auditoria técnica, Google Meu Negócio, Core Web Vitals, conteúdo estratégico e foco em mais tráfego orgânico e contatos.",
    lead: "SEO técnico, SEO local e performance para aumentar visibilidade no Google e gerar contatos recorrentes.",
    accent: "emerald",
    faqHeader: {
      eyebrow: "Dúvidas frequentes",
      title: "Perguntas sobre SEO",
      description: "Respostas sobre prazo, SEO local, performance e evolução orgânica.",
    },
    features: [
      "SEO para sites e auditoria técnica",
      "Google Meu Negócio",
      "Core Web Vitals e performance",
      "Palavras-chave e conteúdo local",
      "Relatórios mensais",
    ],
    schemaService: {
      name: "SEO para Sites e Google Meu Negócio",
      description:
        "SEO técnico, SEO local, Google Meu Negócio, Core Web Vitals e otimização de conteúdo para empresas que querem mais visibilidade orgânica e contatos recorrentes.",
    },
    body: [
      "Especialistas em SEO para sites em São José do Rio Preto. Deixamos seu site otimizado para Google com foco em SEO local, Core Web Vitals, site rápido e estrutura técnica correta.",
      "Combinamos marketing digital orgânico com orientação de conteúdo para site institucional, loja virtual e landing page. Ideal para empresas que investiram em criação de sites e querem site para captar clientes de forma recorrente.",
    ],
  },
  "google-adwords": {
    slug: "/google-adwords",
    title: "Google Ads",
    metaTitle: "Google Ads e Marketing Digital em São José do Rio Preto",
    description:
      "Campanhas Google Ads, marketing digital e landing page de alta conversão para empresas de SJRP.",
    lead: "Visibilidade imediata no Google com gestão profissional de anúncios.",
    accent: "cyan",
    seoExtras: ["faq"],
    schemaService: {
      name: "Google Ads e Marketing Digital",
      description:
        "Gestão de campanhas Google Ads, marketing digital e landing pages de alta conversão para empresas de São José do Rio Preto.",
    },
    features: [
      "Google Ads certificado",
      "Marketing digital regional",
      "Landing page de alta conversão",
      "Segmentação SJRP e interior",
      "Métricas e ROI transparente",
    ],
    body: [
      "Gestão de Google Ads e marketing digital para empresas de São José do Rio Preto. Criamos campanhas que direcionam tráfego qualificado para seu site profissional, loja virtual ou landing page.",
      "Integramos anúncios com site otimizado para Google e formulários de captura — site para vender mais e site para captar clientes com investimento mensurável.",
    ],
  },
  "Portal-Imobiliario": {
    slug: "/Portal-Imobiliario",
    title: "Portal Imobiliário",
    metaTitle: "Portal Web e Sistema Web para Imobiliárias",
    description:
      "Portal web, sistema web e aplicação web para imobiliárias — site para imobiliárias com painel administrativo.",
    lead: "Plataforma completa para corretores e imobiliárias monetizarem online.",
    accent: "amber",
    schemaService: {
      name: "Portal Web para Imobiliárias",
      description:
        "Portal web e sistema web para imobiliárias com painel administrativo, busca de imóveis e captura de leads.",
    },
    features: [
      "Portal web de imóveis",
      "Painel administrativo",
      "Busca avançada e leads",
      "Site responsivo",
      "Planos e monetização",
    ],
    body: [
      "Portal web e sistema web desenvolvido para o mercado imobiliário. Aplicação web com painel administrativo, busca de imóveis e site para imobiliárias que precisam de presença digital profissional.",
      "Solução de desenvolvimento sob medida para imobiliárias de São José do Rio Preto e todo o Brasil — portal corporativo escalável com integração API.",
    ],
  },
  "Portal-de-Classificados": {
    slug: "/Portal-de-Classificados",
    title: "Portal de Classificados",
    metaTitle: "Portal Web de Classificados e Anúncios",
    description:
      "Sistema web e portal web de classificados com painel administrativo para monetizar anúncios na sua região.",
    lead: "Seu portal de anúncios com aplicação web completa.",
    accent: "valgor",
    schemaService: {
      name: "Portal Web de Classificados",
      description:
        "Sistema web e portal de classificados com painel administrativo, moderação e monetização de anúncios.",
    },
    features: [
      "Portal web de classificados",
      "Painel administrativo",
      "Monetização com banners",
      "Aplicação web responsiva",
    ],
    body: [
      "Desenvolvimento de portal web e sistema web para classificados. Aplicação web com CMS, cadastro de anunciantes e dashboard web para gestão do negócio.",
      "Ideal para empreendedores digitais que buscam portal corporativo regional com desenvolvimento sob medida.",
    ],
  },
  "portal-de-empregos": {
    slug: "/portal-de-empregos",
    title: "Portal de Empregos",
    metaTitle: "Portal Web e Sistema de Gestão de Vagas",
    description:
      "Sistema web para vagas, currículos e portal web de empregos com painel administrativo.",
    lead: "Plataforma de RH e portal corporativo para sua região.",
    accent: "violet",
    schemaService: {
      name: "Portal Web de Empregos",
      description:
        "Sistema web para publicação de vagas, gestão de currículos e portal de empregos com painel administrativo.",
    },
    features: [
      "Portal web de empregos",
      "Sistema de gestão de vagas",
      "Área do candidato",
      "Painel administrativo",
      "Planos empresariais",
    ],
    body: [
      "Portal web e aplicação web para publicação de vagas e gestão de candidatos. Sistema web com painel administrativo para consultorias de RH e mídia regional.",
      "Desenvolvimento sob medida com integração API e automação comercial para empresas que precisam de sistema de gestão de recrutamento.",
    ],
  },
  "web-design-ux-ui": {
    slug: "/web-design-ux-ui",
    title: "Web Design e UX/UI",
    metaTitle: "Web Design, UX e UI para Sites Profissionais",
    description:
      "Web design, UX, UI e identidade visual para site moderno, site empresarial e landing page de alta conversão.",
    lead: "Design que comunica marca e converte visitantes em clientes.",
    accent: "valgor",
    schemaService: {
      name: "Web Design, UX e UI",
      description:
        "Web design, UX, UI e identidade visual para sites profissionais, institucionais e landing pages de alta conversão.",
    },
    features: [
      "Web design e identidade visual",
      "UX/UI e prototipação",
      "Site moderno e responsivo",
      "Manual de marca",
      "Integração com desenvolvimento web",
    ],
    body: [
      "Equipe de web design com foco em UX, UI e site moderno. Criamos identidade visual alinhada ao seu site profissional, site institucional ou landing page.",
      "O design é integrado ao desenvolvimento de sites — garantindo site responsivo, performance e experiência que apoia SEO e marketing digital.",
    ],
  },
  hospedagem: {
    slug: "/hospedagem",
    title: "Hospedagem de Sites",
    metaTitle: "Hospedagem de Sites, SSL e Cloud em São José do Rio Preto",
    description:
      "Hospedagem de sites em São José do Rio Preto com SSL, cloud, backups, domínio, suporte técnico e performance para manter seu site rápido e seguro.",
    lead: "Infraestrutura estável, suporte técnico e segurança para manter seu site rápido e no ar.",
    accent: "cyan",
    faqHeader: {
      eyebrow: "Dúvidas frequentes",
      title: "Perguntas sobre hospedagem",
      description: "Respostas sobre migração, SSL, backups, monitoramento e suporte técnico.",
    },
    features: [
      "Hospedagem de sites e cloud",
      "SSL e domínio",
      "Manutenção de sites",
      "Suporte de sites dedicado",
      "Performance e backups",
    ],
    schemaService: {
      name: "Hospedagem de Sites, SSL e Cloud",
      description:
        "Hospedagem de sites com cloud, SSL, domínio, backups, manutenção e suporte técnico para manter o site rápido, seguro e estável.",
    },
    body: [
      `Hospedagem de sites pensada para projetos ${site.brand} e clientes em São José do Rio Preto. Oferecemos cloud, SSL, domínio, manutenção de sites e suporte de sites com foco em site rápido e site seguro.`,
      "Monitoramos performance e Core Web Vitals para manter seu site profissional, loja virtual ou aplicação web sempre disponível.",
    ],
  },
  "landing-pages": {
    slug: "/landing-pages",
    title: "Landing Pages de Alta Conversão",
    metaTitle: "Criação de Landing Pages para Google Ads e Meta Ads",
    description:
      "Criação de landing pages para Google Ads e Meta Ads com copy orientada à conversão, formulários, WhatsApp, pixels e páginas rápidas para gerar mais leads.",
    lead: "Landing pages rápidas, persuasivas e feitas para transformar cliques em contatos.",
    accent: "valgor",
    seoExtras: ["faq"],
    schemaService: {
      name: "Landing Pages de Alta Conversão",
      description:
        "Criação de landing pages para campanhas digitais, Google Ads, Meta Ads e geração de leads com foco em conversão, performance e rastreamento.",
    },
    faqHeader: {
      eyebrow: "Dúvidas frequentes",
      title: "Perguntas sobre landing pages",
      description: "Respostas sobre prazo, investimento e integração com anúncios.",
    },
    features: [
      "Copy orientada a conversão",
      "Design premium VALGOR",
      "Formulários e WhatsApp",
      "Integração Google Ads / Meta",
      "Performance e SEO técnico",
      "Hospedagem e SSL",
    ],
    body: [
      `A ${site.brand} cria landing pages profissionais para empresas que investem em tráfego pago e precisam converter visitantes em leads ou vendas. Diferente de um site institucional completo, a landing page concentra a mensagem em uma única ação: solicitar orçamento, agendar consulta ou comprar.`,
      "Desenvolvemos páginas rápidas, responsivas e alinhadas ao manual de identidade VALGOR — com formulários, botões de WhatsApp, pixels de rastreamento e testes A/B quando necessário.",
      "Ideal para campanhas sazonais, lançamentos, serviços específicos e anúncios no Google ou Instagram. Você recebe uma página pronta para escalar resultados sem distrair o visitante.",
    ],
    highlights: [
      {
        title: "Foco total em conversão",
        description: "Uma página, uma oferta, um objetivo claro — sem menu ou distrações.",
      },
      {
        title: "Integração com anúncios",
        description: "Pixels, UTMs e eventos configurados para medir ROI das campanhas.",
      },
      {
        title: "Entrega rápida",
        description: "Prazos enxutos para colocar sua campanha no ar com agilidade.",
      },
      {
        title: "Mobile first",
        description: "Maioria dos cliques vem do celular — layout otimizado para isso.",
        href: "/solicitar-orcamento",
      },
    ],
  },
};
