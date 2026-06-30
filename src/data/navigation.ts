import { QUOTE_PATH } from "@/lib/conversion";

import { site } from "@/lib/site";



export type NavItem = {
  label: string;
  href: string;
  /** Texto curto no desktop (evita quebra de linha) */
  desktopLabel?: string;
  /** Destaque visual — ferramenta de conversão */
  highlight?: boolean;
};

export type NavGroup = { label: string; items: NavItem[] };



export const navigation: (NavItem | NavGroup)[] = [

  { label: "Início", href: "/" },

  {

    label: "Serviços",

    items: [

      { label: "Criação de Sites", href: "/criacao-de-sites" },

      { label: "Landing Pages", href: "/landing-pages" },

      { label: "Loja Virtual", href: "/criacao-de-loja-virtual" },

      { label: "SEO", href: "/seo-otimizacao-de-site" },

      { label: "Hospedagem", href: "/hospedagem" },

    ],

  },

  { label: "Portfólio", href: "/criacao-de-sites-e-loja-virtual", desktopLabel: "Portfólio" },

  { label: "Blog", href: "/blog" },

  { label: "Sobre", href: "/empresa-de-criacao-de-site" },

  { label: "Contato", href: QUOTE_PATH },

];



export const services = [

  {

    title: "Sites",

    subtitle: "Criação de Sites",

    description: "Sites rápidos, responsivos e otimizados para converter visitantes em clientes.",

    href: "/criacao-de-sites",

    accent: "from-valgor-500 to-rose-600",

    icon: "layout",

  },

  {

    title: "Landing Pages",

    subtitle: "Alta conversão",

    description: "Páginas focadas em campanhas, anúncios e captura de leads qualificados.",

    href: "/landing-pages",

    accent: "from-amber-500 to-orange-600",

    icon: "rocket",

  },

  {

    title: "E-commerce",

    subtitle: "Loja Virtual",

    description: "Lojas virtuais completas com checkout, estoque e integrações de pagamento.",

    href: "/criacao-de-loja-virtual",

    accent: "from-violet-500 to-valgor-600",

    icon: "cart",

  },

  {

    title: "Visibilidade",

    subtitle: "SEO",

    description: "Apareça no Google quando seu cliente buscar na região.",

    href: "/seo-otimizacao-de-site",

    accent: "from-cyan-500 to-blue-600",

    icon: "chart",

  },

] as const;



export const stats = [

  { value: "12+", label: "Anos de mercado" },

  { value: "10k+", label: "Projetos entregues" },

  { value: "SJRP", label: "Base em Rio Preto" },

  { value: "360°", label: "Sites, lojas e portais" },

] as const;



export { site };


