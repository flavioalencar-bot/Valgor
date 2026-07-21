import { PortfolioView } from "@/components/portfolio/PortfolioView";
import { getPortfolioProjects } from "@/lib/portfolio";
import { buildMetadata } from "@/lib/seo";

/** ISR — projetos cadastrados no admin aparecem em até 1h sem rebuild */
export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Portfólio — Sites, E-commerce e Portais",
  description:
    "Portfólio VALGOR: projetos de criação de sites, lojas virtuais, landing pages e portais desenvolvidos em São José do Rio Preto. Veja resultados reais.",
  path: "/criacao-de-sites-e-loja-virtual",
});

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();
  return <PortfolioView projects={projects} />;
}
