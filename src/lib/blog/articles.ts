import { additionalArticles } from "./articles-more";
import { padAllArticles } from "./blog-pad";
import { seoLocalExtraSections, siteCostExtraSections } from "./long-sections";

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  content: { heading?: string; paragraphs: string[] }[];
};

function wc(article: BlogArticle) {
  const text = article.content.flatMap((s) => s.paragraphs).join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

const _rawArticles: BlogArticle[] = [
  {
    slug: "quanto-custa-criar-um-site-profissional",
    title: "Quanto custa criar um site profissional em 2026?",
    excerpt:
      "Guia completo sobre preços, planos mensais, o que está incluso e como escolher o investimento ideal para sua empresa.",
    category: "Sites",
    publishedAt: "2026-01-15",
    content: [
      {
        paragraphs: [
          "Uma das perguntas mais frequentes de empresários é: quanto custa criar um site? A resposta honesta é: depende do objetivo, do escopo e do nível de suporte que você precisa. Mas em 2026, o mercado amadureceu — e modelos de mensalidade com desenvolvimento incluso tornaram sites profissionais acessíveis para pequenas empresas, comércios e prestadores de serviço.",
          "Neste artigo, explicamos faixas de preço, o que deve estar incluso, armadilhas comuns e como calcular retorno sobre investimento. Se você está em São José do Rio Preto ou em qualquer cidade do Brasil, as referências valem — mudam apenas detalhes de SEO local.",
        ],
      },
      {
        heading: "Por que sites baratos saem caros",
        paragraphs: [
          "Templates genéricos, construtores sem suporte e freelancers desaparecendo após a entrega geram custos ocultos: site lento, invisível no Google, sem SSL, sem backup, sem alguém para alterar telefone ou banner.",
          "Quando o site cai em pleno horário comercial ou é hackeado, o prejuízo supera anos de mensalidade de um plano profissional. Site não é commodity — é infraestrutura comercial.",
          "Empresas que dependem só do Instagram pagam aluguel em plataforma alheia. Algoritmo muda, alcance cai, conta bloqueia — e o negócio perde canal da noite para o dia. Site próprio é patrimônio digital.",
        ],
      },
      {
        heading: "Modelo mensal vs. projeto avulso",
        paragraphs: [
          "Projeto avulso cobra desenvolvimento upfront (R$ 3.000 a R$ 15.000+ conforme complexidade) mais hospedagem e manutenção separadas. Muitas PMEs adiam o investimento ou contratam o mais barato — e ficam com site parado.",
          "Modelo mensal VALGOR inclui desenvolvimento, hospedagem, SSL, domínio no primeiro ano, backups, segurança e horas de alteração. Planos a partir de R$ 199,90/mês com contrato de 12 meses. Após isso, renovação mensal sem fidelidade.",
          "Para loja virtual, planos e-commerce começam em R$ 499,90/mês — ainda assim sem investimento inicial de dezenas de milhares em plataforma e integrações.",
        ],
      },
      {
        heading: "O que comparar entre propostas",
        paragraphs: [
          "→ Número de páginas e se CMS está incluso.",
          "→ SEO técnico (meta tags, schema, sitemap, performance).",
          "→ Hospedagem, SSL, backups e monitoramento.",
          "→ Horas de alteração mensais e custo de extras.",
          "→ Suporte: quem responde e em quanto tempo.",
          "→ Propriedade do domínio e do código.",
          "→ Integrações: WhatsApp, formulários, Analytics, pixels.",
          "Propostas sem estes itens detalhados escondem custos futuros. Peça tudo por escrito.",
        ],
      },
      {
        heading: "Quanto tempo leva",
        paragraphs: [
          "Site institucional: 15 a 30 dias úteis. Loja virtual: 30 a 60 dias. Landing page: 7 a 15 dias. Prazo depende de conteúdo (textos e fotos) fornecidos pelo cliente e velocidade de aprovações.",
          "Atrasos costumam vir de conteúdo pendente, não de desenvolvimento. Por isso equipes organizadas enviam checklist de materiais no kickoff.",
        ],
      },
      {
        heading: "ROI: site como canal de vendas",
        paragraphs: [
          "Calcule quantos clientes novos por mês justificam o plano. Se R$ 299,90/mês gera 3 clientes extras de ticket médio R$ 500, o retorno é imediato.",
          "SEO leva 3 a 6 meses para tracionar forte, mas Google Ads + landing page pode gerar leads na primeira semana. Site profissional suporta ambas estratégias.",
          "Métricas para acompanhar: visitas, formulários, cliques WhatsApp, ligações, taxa de conversão. Sem Analytics configurado, você voa cego.",
        ],
      },
      ...siteCostExtraSections(),
      {
        heading: "Conclusão",
        paragraphs: [
          "Investir em site profissional não é gasto — é habilitar um canal de aquisição 24 horas. Compare propostas pelo valor total de propriedade, não só pelo preço inicial.",
          "A VALGOR atende empresas em São José do Rio Preto e todo o Brasil com planos transparentes e foco em conversão. Solicite orçamento sem compromisso e receba escopo claro para decidir com segurança.",
        ],
      },
    ],
  },
  {
    slug: "seo-local-como-aparecer-no-google",
    title: "SEO local: como aparecer no Google na sua cidade",
    excerpt:
      "Estratégias práticas de SEO local para empresas de São José do Rio Preto e região aparecerem quando o cliente busca.",
    category: "SEO",
    publishedAt: "2026-02-01",
    content: [
      {
        paragraphs: [
          "Quando alguém digita 'advogado Rio Preto', 'dentista perto de mim' ou 'empresa de sites São José do Rio Preto', o Google mostra resultados locais — mapa, avaliações, sites. Estar ausente dessa lista é invisibilidade comercial.",
          "SEO local combina otimização técnica do site, Google Meu Negócio, conteúdo regional e autoridade. Neste guia, explicamos passo a passo o que funciona em 2026.",
        ],
      },
      {
        heading: "Fundamentos técnicos",
        paragraphs: [
          "Site rápido e responsivo é pré-requisito. Core Web Vitals impactam ranking. Use HTTPS, URLs limpas, títulos H1 únicos por página e meta descriptions persuasivas.",
          "Schema.org LocalBusiness ajuda Google entender nome, endereço, telefone e horário. Mantenha NAP (Name, Address, Phone) idêntico em site, GMB e diretórios.",
          "Sitemap.xml e robots.txt configurados. Páginas de serviço por cidade/bairro quando faz sentido comercial — sem spam de doorway pages.",
        ],
      },
      {
        heading: "Google Meu Negócio",
        paragraphs: [
          "Perfil completo: fotos reais, categorias corretas, serviços, horários, link do site, botão WhatsApp.",
          "Peça avaliações a clientes satisfeitos — volume e nota influenciam map pack.",
          "Publique posts semanais: promoções, novidades, dicas. Perfil ativo sinaliza relevância.",
          "Responda todas as avaliações, positivas e negativas, com profissionalismo.",
        ],
      },
      {
        heading: "Conteúdo local",
        paragraphs: [
          "Blog com artigos sobre problemas da região: 'Como escolher X em São José do Rio Preto'.",
          "Cases de clientes locais (com permissão) reforçam proximidade e confiança.",
          "Página de contato com mapa embed, bairro, referências de landmarks locais.",
          "Links de parceiros locais, associações comerciais e mídia regional — backlinks geográficos.",
        ],
      },
      {
        heading: "Erros que derrubam ranking",
        paragraphs: [
          "Conteúdo duplicado copiado de concorrentes.",
          "Keyword stuffing — texto artificial cheio de cidade repetida.",
          "Site só com imagem, sem texto indexável.",
          "Redirecionamentos quebrados e links 404.",
          "Ignorar mobile — maioria das buscas locais vem do celular.",
        ],
      },
      ...seoLocalExtraSections(),
      {
        heading: "Próximos passos",
        paragraphs: [
          "Audite seu site atual: velocidade, mobile, títulos, GMB. Liste gaps.",
          "Defina 5 a 10 palavras-chave locais com intenção comercial.",
          "Produza conteúdo mensal — consistência vence atalhos.",
          "Se precisar de parceiro técnico, a VALGOR entrega sites já otimizados para SEO local desde o lançamento, com planos que incluem SEO contínuo nos níveis superiores.",
        ],
      },
    ],
  },
  ...additionalArticles,
];

export const staticArticles: BlogArticle[] = padAllArticles(_rawArticles);

export function getStaticArticle(slug: string) {
  return staticArticles.find((a) => a.slug === slug);
}

export function estimateWordCount(article: BlogArticle) {
  return wc(article);
}
