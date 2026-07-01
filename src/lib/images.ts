/** Assets de marca e visuais novos (sem imagens legadas). */
export const images = {
  logo: "/img/valgor-logo.png",
  logoDark: "/img/valgor-logo-dark.png",
  mark: "/img/valgor-mark.png",
  whatsapp: "/img/icon_whats.png",
  visuals: {
    hero: "/img/visuals/hero-visual.png",
    about: "/img/visuals/about-visual.png",
  },
} as const;

export type PortfolioVariant =
  | "site"
  | "ecommerce"
  | "portal"
  | "design"
  | "marketing"
  | "imoveis";

export const portfolioItems: {
  variant: PortfolioVariant;
  cat: string;
  name: string;
}[] = [
  { variant: "site", cat: "Site institucional", name: "Projeto corporativo" },
  { variant: "ecommerce", cat: "E-commerce", name: "Loja virtual" },
  { variant: "portal", cat: "Portal", name: "Plataforma regional" },
  { variant: "site", cat: "Site institucional", name: "Serviços locais" },
  { variant: "ecommerce", cat: "E-commerce", name: "Varejo SJRP" },
  { variant: "design", cat: "Design", name: "Identidade visual" },
  { variant: "imoveis", cat: "Portal imobiliário", name: "Imóveis" },
  { variant: "marketing", cat: "Marketing", name: "Campanha digital" },
];

export type BannerAccent = "valgor" | "violet" | "cyan" | "amber" | "emerald";
