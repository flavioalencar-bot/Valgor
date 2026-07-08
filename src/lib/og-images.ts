import { images } from "@/lib/images";

const HERO = images.visuals.hero;
const ABOUT = images.visuals.about;

/** Banners e visuais por serviço — Open Graph / Twitter Card. */
export const ogImages = {
  default: HERO,
  about: ABOUT,
  sites: "/img/banners/banner_sites.jpg",
  loja: "/img/banners/banner_loja.jpg",
  seo: "/img/banners/banner-seo.jpg",
  ads: "/img/banners/banner-google-adwords.jpg",
  hosting: "/img/banners/cloud.jpg",
  design: "/img/banners/banner-design.png",
  empresa: "/img/banners/banner-empresa.jpg",
  portalImoveis: "/img/banners/banner_portal_imoveis.jpg",
  portalAnuncios: "/img/banners/banner_portal_anuncios.jpg",
  portalEmpregos: "/img/banners/banner_portal_emprego.jpg",
  services: "/img/services/criacao-de-sites.png",
  logo: "/img/valgor-logo.png",
} as const;

const OG_BY_PATH: Record<string, string> = {
  "/": HERO,
  "/criacao-de-sites": ogImages.sites,
  "/criacao-de-loja-virtual": ogImages.loja,
  "/landing-pages": ogImages.sites,
  "/seo-otimizacao-de-site": ogImages.seo,
  "/google-adwords": ogImages.ads,
  "/hospedagem": ogImages.hosting,
  "/valgor-score": HERO,
  "/criacao-de-sites-e-loja-virtual": ogImages.sites,
  "/Portal-Imobiliario": ogImages.portalImoveis,
  "/Portal-de-Classificados": ogImages.portalAnuncios,
  "/portal-de-empregos": ogImages.portalEmpregos,
  "/empresa-de-criacao-de-site": ogImages.empresa,
  "/solicitar-orcamento": ogImages.services,
  "/blog": ABOUT,
  "/politica-de-privacidade": ogImages.logo,
  "/segmentos": ogImages.sites,
  "/web-design-ux-ui": ogImages.design,
  "/criacao-de-sites-em-sao-jose-do-rio-preto": ogImages.sites,
  "/manutencao-de-sites": ogImages.hosting,
};

const OG_BY_SEGMENT_PREFIX: Record<string, string> = {
  "site-para-imobiliarias": ogImages.portalImoveis,
  "site-para-restaurantes": ogImages.loja,
};

const OG_BY_BLOG_SLUG: Record<string, string> = {
  "seo-local-como-aparecer-no-google": ogImages.seo,
  "quanto-custa-criar-um-site-profissional": ogImages.sites,
  "como-escolher-agencia-de-criacao-de-sites": ogImages.empresa,
  "loja-virtual-propria-vs-marketplace": ogImages.loja,
  "landing-pages-que-convertem-guia-completo": ogImages.sites,
  "core-web-vitals-e-impacto-no-seo": ogImages.seo,
  "google-ads-guia-iniciantes-pme": ogImages.ads,
};

export function ogImageForPath(path: string): string {
  if (OG_BY_PATH[path]) return OG_BY_PATH[path];

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    return OG_BY_BLOG_SLUG[slug] ?? ABOUT;
  }

  if (path.startsWith("/site-para-")) {
    const slug = path.slice(1);
    return OG_BY_SEGMENT_PREFIX[slug] ?? ogImages.sites;
  }

  return HERO;
}
