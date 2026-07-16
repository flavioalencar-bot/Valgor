import { PORTFOLIO_PATH } from "@/lib/conversion";
import { site } from "@/lib/site";

export const homeHero = {
  eyebrow: "VALGOR — criação de sites em São José do Rio Preto",
  title: `Criação de sites profissionais em ${site.city}`,
  subtitle:
    "Agência local para site institucional, landing page e SEO. Orçamento em até 24h — sua empresa aparece melhor no Google e gera mais contatos.",
  primaryCta: "Fazer diagnóstico gratuito",
  secondaryCta: "Solicitar orçamento",
} as const;

export const homeValgorScoreLead = {
  title: "Descubra a nota digital da sua empresa",
  subtitle:
    "Em poucos segundos, receba uma análise gratuita com nota, oportunidades de melhoria e estimativa de potencial comercial.",
  cta: "Analisar gratuitamente",
  footnote:
    "Análise baseada em SEO, performance, segurança, UX, conversão, Google Business Profile e redes sociais.",
} as const;

export const homeAuthorityStats = [
  { value: "+300", label: "Projetos entregues" },
  { value: "+150", label: "Empresas atendidas" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "12+", label: "Anos de experiência" },
] as const;

export const homeProblems = {
  title: "Sua empresa enfrenta algum destes problemas?",
  items: [
    "Seu site gera poucos contatos?",
    "Sua empresa aparece pouco no Google?",
    "Seus concorrentes recebem mais orçamentos?",
    "Seu WhatsApp recebe poucas mensagens?",
    "Seu site é lento ou antigo?",
    "Você não sabe quantos clientes está perdendo?",
  ],
  cta: "Descobrir minha situação agora",
} as const;

export const homeBenefits = {
  eyebrow: "Soluções",
  title: "O que um site VALGOR entrega para o seu negócio",
  items: [
    {
      title: "Mais visibilidade no Google",
      description:
        "Seu site preparado para ser encontrado por clientes que já estão procurando pelo seu serviço.",
    },
    {
      title: "Mais contatos pelo WhatsApp",
      description:
        "Botões, chamadas e estrutura pensada para transformar visitas em conversas comerciais.",
    },
    {
      title: "Mais velocidade e confiança",
      description:
        "Sites rápidos, seguros e responsivos para gerar credibilidade desde o primeiro acesso.",
    },
    {
      title: "Mais controle comercial",
      description:
        "Integração com formulários, CRM, automações e acompanhamento dos leads recebidos.",
    },
    {
      title: "Mais autoridade para sua marca",
      description:
        "Design profissional, conteúdo estratégico e presença digital coerente com o valor da empresa.",
    },
    {
      title: "Mais potencial de vendas",
      description:
        "Estrutura orientada à conversão para transformar tráfego em oportunidades reais.",
    },
  ],
} as const;

export const homeDifferentials = {
  title: "Por que a VALGOR é diferente?",
  items: [
    "Diagnóstico gratuito com Valgor Score",
    "Análise baseada em mais de 150 critérios",
    "Estimativa de retorno financeiro",
    "Plano de evolução personalizado",
    "Desenvolvimento com foco em conversão",
    "SEO, performance e automação no mesmo projeto",
  ],
} as const;

export const homeProcess = {
  eyebrow: "Processo",
  title: "Do briefing ao site no ar — com suporte contínuo",
  steps: [
    {
      step: "01",
      title: "Briefing estratégico",
      text: "Entendemos seu negócio, público, diferenciais e objetivos comerciais.",
    },
    {
      step: "02",
      title: "Diagnóstico digital",
      text: "Analisamos sua presença atual, concorrência e oportunidades de crescimento.",
    },
    {
      step: "03",
      title: "Planejamento",
      text: "Definimos estrutura, páginas, mensagens, CTAs e estratégia de conversão.",
    },
    {
      step: "04",
      title: "Desenvolvimento",
      text: "Criamos o site com foco em performance, SEO, responsividade e experiência do usuário.",
    },
    {
      step: "05",
      title: "Publicação",
      text: "Configuramos domínio, hospedagem, segurança, analytics e ferramentas essenciais.",
    },
    {
      step: "06",
      title: "Acompanhamento",
      text: "Monitoramos resultados e orientamos melhorias para evolução contínua.",
    },
  ],
} as const;

export const homeComparison = {
  title: "Sem site vs. com VALGOR",
  without: {
    title: "Sem site ou site antigo",
    items: [
      "Pouca visibilidade no Google",
      "Baixa geração de contatos",
      "Imagem amadora ou desatualizada",
      "Dificuldade para medir resultados",
      "Dependência apenas de indicação",
    ],
  },
  with: {
    title: "Com VALGOR",
    items: [
      "Presença digital profissional",
      "Site rápido, seguro e responsivo",
      "Estrutura preparada para SEO",
      "Mais contatos pelo WhatsApp",
      "Mensuração de visitas e conversões",
      "Plano de evolução contínua",
    ],
  },
} as const;

export const homeCases = [
  {
    name: "Landing Page Comercial",
    segment: "Captação de leads",
    challenge: "Baixa geração de contatos via campanhas digitais",
    solution: "Landing page focada em conversão com WhatsApp e formulário integrados.",
    objective: "Captar leads qualificados via Google e anúncios",
    result: "+180% de contatos no primeiro mês",
    tech: ["Landing Page", "WhatsApp", "SEO"],
    href: PORTFOLIO_PATH,
  },
  {
    name: "Site Institucional",
    segment: "Serviços locais",
    challenge: "Empresa invisível no Google e dependente de indicações",
    solution: "Site otimizado para SEO local com páginas de serviço e Google Maps.",
    objective: "Aparecer nas buscas regionais e gerar orçamentos",
    result: "Presença digital profissional e leads recorrentes",
    tech: ["Next.js", "SEO local", "Analytics"],
    href: PORTFOLIO_PATH,
  },
  {
    name: "Loja Virtual Regional",
    segment: "E-commerce",
    challenge: "Vendas limitadas ao ponto físico",
    solution: "Loja virtual com checkout, PIX e catálogo otimizado para mobile.",
    objective: "Vender online 24h com operação integrada",
    result: "Canal digital ativo com vendas fora do horário comercial",
    tech: ["E-commerce", "PIX", "Performance"],
    href: PORTFOLIO_PATH,
  },
] as const;

export const homeTestimonials = [
  {
    name: "Carlos Almeida",
    role: "Diretor Comercial",
    company: "Empresa de serviços · SJRP",
    quote:
      "A VALGOR nos ajudou a transformar nosso site em uma ferramenta real de captação de clientes.",
    rating: 5,
  },
  {
    name: "Mariana S.",
    role: "Proprietária",
    company: "Clínica · São José do Rio Preto",
    quote:
      "Depois do site novo, passamos a receber contatos todos os dias pelo Google. A VALGOR entregou muito além do visual.",
    rating: 5,
  },
  {
    name: "Ricardo M.",
    role: "Gestor comercial",
    company: "Comércio · Região Noroeste",
    quote:
      "Saímos do Instagram como único canal. Hoje o site vende sozinho e o suporte da equipe é excelente.",
    rating: 5,
  },
] as const;

export const homeFaqs = [
  {
    question: "Quanto tempo leva para criar um site?",
    answer:
      "Sites institucionais costumam ficar prontos entre 15 e 30 dias úteis, dependendo do escopo, conteúdo e aprovações.",
  },
  {
    question: "O site já vem com hospedagem?",
    answer:
      "Sim. Todos os planos VALGOR incluem hospedagem, SSL, backups, monitoramento e suporte técnico.",
  },
  {
    question: "O site aparece no Google?",
    answer:
      "Sim. Entregamos sites com SEO técnico desde o lançamento. Nos planos superiores, incluímos SEO contínuo e conteúdo.",
  },
  {
    question: "Vocês fazem manutenção mensal?",
    answer:
      "Sim. Alterações, segurança, backups e evolução estão inclusos conforme o plano contratado.",
  },
  {
    question: "Posso integrar WhatsApp e formulários?",
    answer:
      "Sim. Integramos WhatsApp, formulários de contato, CRM e automações para acompanhar cada lead.",
  },
  {
    question: "Vocês criam landing pages?",
    answer:
      "Sim. Desenvolvemos landing pages focadas em campanhas, anúncios e captação de leads qualificados.",
  },
  {
    question: "O que é o Valgor Score?",
    answer:
      "O Valgor Score é nossa ferramenta gratuita de diagnóstico digital. Ela analisa mais de 150 critérios e gera nota, oportunidades e plano de evolução.",
  },
  {
    question: "Como funciona o diagnóstico gratuito?",
    answer:
      "Você informa os dados da empresa e recebe uma análise com nota de 0 a 100, comparativos, estimativa comercial e recomendações práticas — em cerca de 1 minuto.",
  },
] as const;

export const homeFinalCta = {
  title: "Sua empresa merece um site que gere resultados.",
  subtitle:
    "Antes de investir, descubra gratuitamente como está sua presença digital e quais melhorias podem gerar mais clientes.",
  primaryCta: "Fazer diagnóstico gratuito",
  secondaryCta: "Falar com especialista",
} as const;

export const homePlanDisplayNames: Record<string, string> = {
  start: "Essencial",
  business: "Profissional",
  prime: "Performance",
};

export const homePlanBenefits: Record<string, string> = {
  start: "Ideal para empresas que precisam começar com presença profissional.",
  business: "Ideal para empresas que querem gerar mais contatos e melhorar sua presença no Google.",
  prime: "Ideal para empresas que querem crescimento, SEO, automação e acompanhamento contínuo.",
};
