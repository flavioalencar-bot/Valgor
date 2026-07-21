import { site } from "@/lib/site";

export type LongFormSection = {
  heading: string;
  paragraphs: string[];
};

/** Blocos reutilizáveis para atingir 1500+ palavras em páginas de serviço */
export function serviceLongFormBlocks(topic: string, focus: string): LongFormSection[] {
  return [
    {
      heading: `Importância de ${topic} para o seu negócio`,
      paragraphs: [
        `Em ${new Date().getFullYear()}, a primeira impressão que seu cliente tem da empresa acontece online — muitas vezes antes de qualquer ligação ou visita. ${focus}`,
        `Empresas que tratam o site apenas como cartão de visitas deixam dinheiro na mesa. O site precisa ser uma ferramenta comercial: explicar o que você faz, para quem, por que confiar e qual o próximo passo (ligar, agendar, comprar, solicitar orçamento).`,
        `Quando o site é lento, confuso ou invisível no Google, o visitante fecha a aba em segundos e escolhe um concorrente. Por isso ${topic.toLowerCase()} não é custo — é investimento em aquisição de clientes.`,
        `A ${site.brand}, baseada em ${site.city}, desenvolve projetos com copy orientada a conversão, performance técnica e SEO desde a arquitetura inicial. Não entregamos apenas layout bonito: entregamos canal de vendas.`,
      ],
    },
    {
      heading: "Benefícios mensuráveis",
      paragraphs: [
        "→ Mais visibilidade no Google e no Maps quando clientes buscam na região.",
        "→ Mais credibilidade: site profissional transmite seriedade antes do primeiro contato.",
        "→ Mais leads qualificados via formulários, WhatsApp e CTAs estratégicos.",
        "→ Mais autonomia com painel para atualizar textos, banners e páginas.",
        "→ Mais segurança com SSL, backups e monitoramento contínuo.",
        "→ Mais velocidade: sites rápidos convertem melhor e ranqueiam melhor.",
        `${site.headline} Cada elemento do projeto é pensado para gerar retorno, não apenas presença.`,
      ],
    },
    {
      heading: "Nosso processo de trabalho",
      paragraphs: [
        "**Entendimento** — Reunião para mapear negócio, público, concorrência e objetivos comerciais.",
        "**Planejamento** — Definimos estrutura de páginas, palavras-chave, jornada do visitante e integrações.",
        "**Design** — Layout premium seguindo manual VALGOR e identidade da sua marca.",
        "**Desenvolvimento** — Código moderno (HTML, CSS, JavaScript, React/Next.js quando aplicável).",
        "**Publicação** — Domínio, hospedagem, SSL, testes e go-live.",
        "**Suporte** — Alterações, segurança e evolução conforme plano contratado.",
        "Você acompanha cada fase com pontos de aprovação claros. Prazo típico: 15 a 30 dias úteis para sites institucionais.",
      ],
    },
    {
      heading: "Tecnologias e performance",
      paragraphs: [
        "Utilizamos stack moderna: React, Next.js, Node.js, PostgreSQL quando o projeto exige aplicação robusta, sempre com Tailwind CSS e otimização de imagens.",
        "Metas de performance: Lighthouse acima de 95, carregamento inferior a 2 segundos em conexões comuns, Core Web Vitals aprovados.",
        "SEO técnico incluso: meta tags, schema.org, sitemap, robots.txt, URLs amigáveis, headings semânticos e mobile-first.",
        "Integrações comuns: WhatsApp, Google Analytics, Search Console, formulários, mapas, redes sociais e pixels de anúncios.",
        "Acessibilidade (WCAG) e LGPD considerados desde o wireframe — formulários com consentimento, política de privacidade e cookies configuráveis.",
        "Hospedagem em cloud com CDN opcional para projetos com audiência nacional ou internacional.",
      ],
    },
    {
      heading: "Erros comuns ao contratar criação de sites",
      paragraphs: [
        "Escolher só pelo menor preço: propostas sem suporte, SEO ou hospedagem geram custo oculto quando algo quebra.",
        "Não definir objetivo: site bonito sem CTA claro não gera lead. Começamos sempre pelo que você quer que visitante faça.",
        "Ignorar mobile: mais da metade do tráfego vem de celular. Site que quebra no iPhone perde metade dos clientes.",
        "Esquecer conteúdo: agência entrega estrutura; textos e fotos precisam existir — ajudamos com checklist e redação conforme plano.",
        "Não medir resultados: Analytics e Search Console configurados no go-live para acompanhar evolução.",
      ],
    },
    {
      heading: `Por que a ${site.brand}`,
      paragraphs: [
        `Mais de 12 anos de mercado e mais de 300 projetos entregues no ${site.region}. Equipe própria — design, desenvolvimento e suporte no mesmo time.`,
        "Planos mensais a partir de R$ 199,90 com desenvolvimento incluso, hospedagem, SSL, domínio no primeiro ano e suporte técnico.",
        "Atendimento em português, reuniões online ou presenciais em São José do Rio Preto, cobertura para todo o Brasil.",
        "Não somos apenas fornecedores: somos parceiros de crescimento digital. Seu sucesso com o site é nosso sucesso comercial.",
      ],
    },
  ];
}

export function expandBodyParagraphs(sections: LongFormSection[]): string[] {
  return sections.flatMap((s) => {
    const heading = `## ${s.heading}`;
    return [heading, ...s.paragraphs];
  });
}

/** Conteúdo extra para segmentos SEO (complementa sections existentes) */
export function segmentExtraSections(niche: string): LongFormSection[] {
  return [
    {
      heading: `Mercado digital para ${niche}`,
      paragraphs: [
        `O comportamento do consumidor em ${new Date().getFullYear()} passou por mudanças irreversíveis: pesquisa online precede quase toda decisão de compra ou contratação. Quem atua em ${niche} e não aparece nessa jornada perde quota para concorrentes mais visíveis.`,
        "Redes sociais complementam, mas não substituem site próprio: algoritmos mudam, alcance orgânico cai, perfil pode ser restrito. Site é ativo que você controla.",
        "Investir em presença digital profissional sinaliza que o negócio é sério, estabelecido e preparado para atender com padrão — especialmente importante em serviços de confiança.",
      ],
    },
    {
      heading: `Investimento e retorno para ${niche}`,
      paragraphs: [
        "O custo de não ter site profissional é invisível: são os clientes que nunca ligaram porque não encontraram você, ou que escolheram o concorrente com presença digital superior.",
        "Com planos mensais VALGOR, você dilui investimento e inclui manutenção — evitando surpresas com hospedagem, quebra de site ou vírus.",
        "Calcule quantos clientes novos por mês pagam o plano. Na maioria dos nichos, um único contrato fechado via site já retorna meses de mensalidade.",
        "Solicite orçamento sem compromisso. Analisamos segmento, concorrência local e objetivos para indicar plano ideal.",
      ],
    },
    {
      heading: "Comparativo: site amador vs. site VALGOR",
      paragraphs: [
        "Site amador: template genérico, lento, sem SEO, sem suporte, telefone desatualizado, imagens pixeladas.",
        "Site VALGOR: design exclusivo, performance otimizada, SEO técnico, CMS, SSL, backups, suporte humano em português.",
        "Diferença percebida pelo cliente em segundos — e refletida na taxa de contato e no ticket médio fechado.",
      ],
    },
    {
      heading: "Próximos passos",
      paragraphs: [
        "1. Preencha o formulário em /solicitar-orcamento ou fale no WhatsApp.",
        "2. Agendamos conversa para entender negócio, público e concorrência.",
        "3. Enviamos proposta com escopo, prazo e investimento transparentes.",
        "4. Aprovado, iniciamos planejamento, design e desenvolvimento.",
        "5. Site no ar com treinamento de CMS e suporte contínuo conforme plano.",
        `A ${site.brand} está em ${site.city} com atendimento presencial ou remoto para todo o Brasil.`,
      ],
    },
  ];
}
