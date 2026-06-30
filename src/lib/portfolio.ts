import { prisma } from "@/lib/prisma";

export type PortfolioProject = {
  id: string;
  title: string;
  slug: string;
  category: string;
  segment: string;
  description: string | null;
  objective: string | null;
  result: string | null;
  technologies: string[];
  url: string | null;
  thumbnail: string | null;
};

export const PORTFOLIO_CATEGORIES = [
  "Todos",
  "Site institucional",
  "E-commerce",
  "Portal",
  "Design",
  "Marketing",
] as const;

const fallbackProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Empresa de serviços locais",
    slug: "servicos-locais",
    category: "Site institucional",
    segment: "site",
    description: "Site institucional com foco em SEO local e captura de leads.",
    objective: "Aparecer no Google e aumentar contatos qualificados",
    result: "+180% de leads em 4 meses",
    technologies: ["Next.js", "SEO local", "WhatsApp"],
    url: null,
    thumbnail: null,
  },
  {
    id: "2",
    title: "Loja virtual regional",
    slug: "loja-regional",
    category: "E-commerce",
    segment: "ecommerce",
    description: "E-commerce completo com PIX, cartão e gestão de pedidos.",
    objective: "Vender online 24h com checkout integrado",
    result: "Catálogo completo e vendas automatizadas",
    technologies: ["E-commerce", "PIX", "Analytics"],
    url: null,
    thumbnail: null,
  },
  {
    id: "3",
    title: "Portal imobiliário",
    slug: "portal-imobiliario-case",
    category: "Portal",
    segment: "portal",
    description: "Plataforma de busca de imóveis com captação de corretores.",
    objective: "Centralizar imóveis e gerar leads próprios",
    result: "Plataforma escalável e monetizável",
    technologies: ["Portal", "CMS", "SEO"],
    url: null,
    thumbnail: null,
  },
  {
    id: "4",
    title: "Clínica médica",
    slug: "clinica-medica",
    category: "Site institucional",
    segment: "site",
    description: "Site para clínica com especialidades e agendamento.",
    objective: "Credibilidade e agendamentos online",
    result: "Contatos diários via site",
    technologies: ["React", "Forms", "SEO saúde"],
    url: null,
    thumbnail: null,
  },
  {
    id: "5",
    title: "Escritório de advocacia",
    slug: "advocacia",
    category: "Site institucional",
    segment: "site",
    description: "Site jurídico com áreas de atuação e blog.",
    objective: "Autoridade digital e consultas",
    result: "Posicionamento para buscas jurídicas locais",
    technologies: ["Next.js", "Blog", "Schema.org"],
    url: null,
    thumbnail: null,
  },
  {
    id: "6",
    title: "Campanha Google Ads",
    slug: "campanha-ads",
    category: "Marketing",
    segment: "marketing",
    description: "Landing page otimizada para campanhas de mídia paga.",
    objective: "Maximizar conversão de cliques pagos",
    result: "CPL reduzido em 35%",
    technologies: ["Landing page", "Pixels", "A/B"],
    url: null,
    thumbnail: null,
  },
];

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  try {
    const rows = await prisma.project.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
    if (rows.length > 0) {
      return rows.map((r) => ({
        id: r.id,
        title: r.title,
        slug: r.slug,
        category: r.category,
        segment: r.segment,
        description: r.description,
        objective: r.objective,
        result: r.result,
        technologies: r.technologies,
        url: r.url,
        thumbnail: r.thumbnail,
      }));
    }
  } catch {
    /* DB indisponível — usa fallback */
  }
  return fallbackProjects;
}
