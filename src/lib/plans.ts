export type ServicePlan = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  featured?: boolean;
  includesPrevious?: string;
  features: string[];
};

export type PlansSet = {
  eyebrow: string;
  title: string;
  description: string;
  plans: ServicePlan[];
  notes: readonly string[];
  footnote?: string;
};

export const sitePlansSet: PlansSet = {
  eyebrow: "Planos",
  title: "Planos de site VALGOR",
  description:
    "Desenvolvimento, hospedagem e suporte em mensalidade — escolha o plano ideal para sua empresa.",
  plans: [
    {
      id: "start",
      name: "Valgor Start",
      price: "R$ 199,90",
      priceNote: "Fidelidade de 12 meses",
      tagline: "Ideal para empresas que precisam de uma presença profissional na internet.",
      features: [
        "Desenvolvimento do site",
        "Até 5 páginas",
        "Layout personalizado",
        "Site responsivo",
        "Formulário de contato",
        "Botão do WhatsApp",
        "Integração com redes sociais",
        "Hospedagem",
        "Certificado SSL",
        "Domínio (.com.br incluso no 1º ano)",
        "Backup semanal",
        "Atualizações de segurança",
        "Monitoramento",
        "Suporte técnico",
        "Até 30 minutos de alterações por mês",
      ],
    },
    {
      id: "business",
      name: "Valgor Business",
      price: "R$ 299,90",
      priceNote: "Fidelidade de 12 meses",
      tagline: "Ideal para empresas que desejam manter o site sempre atualizado.",
      featured: true,
      includesPrevious: "Valgor Start",
      features: [
        "Até 10 páginas",
        "SEO básico",
        "Google Maps",
        "Google Analytics",
        "Backup diário",
        "Até 2 horas de alterações por mês",
        "Atualização de banners",
        "Atualização de textos e imagens",
        "Relatório mensal",
        "Suporte prioritário",
      ],
    },
    {
      id: "prime",
      name: "Valgor Prime",
      price: "R$ 499,90",
      priceNote: "Fidelidade de 12 meses",
      tagline: "Para empresas que enxergam o site como uma ferramenta de negócios.",
      includesPrevious: "Valgor Business",
      features: [
        "Páginas ilimitadas*",
        "Blog",
        "Otimização contínua",
        "SEO mensal",
        "Monitoramento avançado",
        "Até 5 horas de alterações por mês",
        "Criação de novas páginas simples",
        "Consultoria mensal",
        "Atendimento prioritário",
      ],
    },
  ],
  notes: [
    "O desenvolvimento do site já está incluso na mensalidade.",
    "O contrato possui permanência mínima de 12 meses.",
    "Após esse período, o contrato passa a ser mensal, sem fidelidade.",
    "Alterações que excedam o limite mensal ou envolvam novas funcionalidades serão orçadas separadamente.",
    "Sistemas personalizados, lojas virtuais e integrações com APIs não fazem parte destes planos.",
  ],
  footnote:
    "* Páginas ilimitadas dentro do escopo de site institucional — páginas complexas ou novas funcionalidades podem ser orçadas à parte.",
};

export const ecommercePlansSet: PlansSet = {
  eyebrow: "Planos",
  title: "Planos de loja virtual VALGOR",
  description:
    "E-commerce completo em mensalidade — desenvolvimento, hospedagem, pagamentos e suporte para vender online.",
  plans: [
    {
      id: "ecom-start",
      name: "Valgor E-commerce Start",
      price: "R$ 499,90",
      priceNote: "Fidelidade de 12 meses",
      tagline: "Ideal para pequenas empresas que estão iniciando suas vendas online.",
      features: [
        "Desenvolvimento da loja virtual",
        "Layout personalizado",
        "Até 100 produtos cadastrados",
        "Carrinho de compras",
        "Integração com PIX",
        "Integração com cartão de crédito",
        "Cálculo de frete (Correios)",
        "Área do cliente",
        "Site responsivo",
        "Hospedagem",
        "Certificado SSL",
        "Domínio (.com.br incluso no 1º ano)",
        "Backup diário",
        "Atualizações de segurança",
        "Suporte técnico",
        "Até 1 hora de alterações por mês",
      ],
    },
    {
      id: "ecom-business",
      name: "Valgor E-commerce Business",
      price: "R$ 799,90",
      priceNote: "Fidelidade de 12 meses",
      tagline: "Ideal para empresas que desejam crescer suas vendas online.",
      featured: true,
      includesPrevious: "Valgor E-commerce Start",
      features: [
        "Produtos ilimitados",
        "Cadastro inicial de até 300 produtos",
        "Integração com Mercado Pago, PagSeguro ou Stripe",
        "Integração com transportadoras",
        "Cupons de desconto",
        "Produtos em destaque",
        "Relatórios de vendas",
        "SEO para produtos",
        "Google Analytics",
        "Google Merchant Center",
        "Backup diário",
        "Até 3 horas de alterações mensais",
        "Suporte prioritário",
      ],
    },
    {
      id: "ecom-prime",
      name: "Valgor E-commerce Prime",
      price: "R$ 1.299,90",
      priceNote: "Fidelidade de 12 meses",
      tagline:
        "Para empresas que utilizam a loja virtual como principal canal de vendas.",
      includesPrevious: "Valgor E-commerce Business",
      features: [
        "Layout totalmente personalizado",
        "Cadastro inicial de até 1.000 produtos",
        "Integração com ERP*",
        "Recuperação de carrinho abandonado",
        "Área do cliente avançada",
        "Programa de cupons e promoções",
        "Blog integrado",
        "SEO avançado",
        "Otimização contínua de performance",
        "Monitoramento 24x7",
        "Backup em múltiplos locais",
        "Até 8 horas de alterações mensais",
        "Atendimento prioritário",
      ],
    },
  ],
  notes: [
    "Desenvolvimento da loja incluso na mensalidade.",
    "Contrato mínimo de 12 meses.",
    "Após 12 meses, renovação mensal sem fidelidade.",
    "Produtos adicionais podem ser cadastrados pelo cliente ou pela VALGOR mediante contratação.",
    "Integrações específicas, ERPs personalizados, marketplaces ou funcionalidades exclusivas poderão ser orçadas separadamente.",
  ],
  footnote:
    "* Integração com ERP depende de compatibilidade técnica — soluções personalizadas são orçadas à parte.",
};

export const plansSets = {
  site: sitePlansSet,
  ecommerce: ecommercePlansSet,
} as const;

export type PlansSetKey = keyof typeof plansSets;
