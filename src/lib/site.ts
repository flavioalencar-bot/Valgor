export const site = {
  name: "VALGOR",
  brand: "VALGOR",
  legalName: "Alencar & Filho",
  tagline: "Publicidade e comunicação digital",
  headline: "Seu site deve vender. Não apenas existir.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.valgor.com.br",
  city: "São José do Rio Preto",
  state: "SP",
  region: "Noroeste Paulista",
  phone: "5517991093195",
  phoneDisplay: "(17) 99109-3195",
  email: "contato@valgor.com.br",
  cnpj: "11.501.820/0001-83",
  hours: "Seg–Sex, 08h30–18h",
  whatsapp:
    "https://api.whatsapp.com/send?phone=5517991093195&text=Olá! Quero falar com a VALGOR.",
  social: {
    facebook: "https://www.facebook.com/valgor",
    linkedin: "https://www.linkedin.com/company/3221342",
    twitter: "https://twitter.com/valgor",
  },
} as const;

export type SiteConfig = typeof site;
