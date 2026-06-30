import { PortfolioView } from "@/components/portfolio/PortfolioView";
import { getPortfolioProjects } from "@/lib/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfólio — Sites, E-commerce e Portais",
  description:
    "Portfólio VALGOR: criação de sites, lojas virtuais e desenvolvimento web em São José do Rio Preto.",
  path: "/criacao-de-sites-e-loja-virtual",
});

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();
  return <PortfolioView projects={projects} />;
}
