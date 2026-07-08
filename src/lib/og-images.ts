import { images } from "@/lib/images";

const DEFAULT = images.visuals.hero;
const ABOUT = images.visuals.about;

/** Imagem Open Graph por rota — categorias distintas para compartilhamento social. */
const OG_BY_PATH: Record<string, string> = {
  "/": DEFAULT,
  "/criacao-de-sites": DEFAULT,
  "/criacao-de-loja-virtual": DEFAULT,
  "/landing-pages": DEFAULT,
  "/seo-otimizacao-de-site": DEFAULT,
  "/google-adwords": DEFAULT,
  "/hospedagem": DEFAULT,
  "/valgor-score": DEFAULT,
  "/criacao-de-sites-e-loja-virtual": DEFAULT,
  "/Portal-Imobiliario": DEFAULT,
  "/Portal-de-Classificados": DEFAULT,
  "/portal-de-empregos": DEFAULT,
  "/empresa-de-criacao-de-site": ABOUT,
  "/solicitar-orcamento": ABOUT,
  "/blog": ABOUT,
  "/politica-de-privacidade": ABOUT,
  "/segmentos": DEFAULT,
  "/web-design-ux-ui": ABOUT,
};

export function ogImageForPath(path: string): string {
  if (OG_BY_PATH[path]) return OG_BY_PATH[path];
  if (path.startsWith("/blog/")) return ABOUT;
  if (path.startsWith("/site-para-")) return DEFAULT;
  return DEFAULT;
}
