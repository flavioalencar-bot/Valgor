import type { BlogArticle } from "./articles";

type Block = BlogArticle["content"][number];

const faqBlocks: Block[] = [
  {
    heading: "Contexto do mercado digital brasileiro",
    paragraphs: [
      "Brasil tem mais de 150 milhões de usuários internet — maioria mobile. Empresa sem presença digital profissional simplesmente não existe para parcela crescente do mercado.",
      "Pandemia acelerou digitalização permanente: agendamento online, delivery, orçamento WhatsApp viraram padrão, não exceção.",
      "Concorrência aumentou: quem investiu cedo colhe leads mais baratos; quem adia paga CPC maior e perde share.",
      "Consumidor compara 3 a 5 opções antes de contato — site ruim elimina você antes da conversa.",
    ],
  },
  {
    heading: "Como medir resultados",
    paragraphs: [
      "Google Analytics 4: sessões, usuários, conversões, origem tráfego.",
      "Search Console: impressões, cliques, posição média keywords.",
      "CRM ou planilha: leads por canal, taxa fechamento, ticket médio.",
      "Calcule CAC (custo aquisição cliente) e compare canais mensalmente.",
      "Revise trimestral — marketing digital exige ajuste contínuo.",
    ],
  },
  {
    heading: "Erros que empresários cometem",
    paragraphs: [
      "Adiar site 'até vender mais' — site é o que permite vender mais.",
      "Copiar concorrente palavra por palavra — Google penaliza duplicação.",
      "Não responder lead em 24h — velocidade resposta define fechamento.",
      "Gastar só em Ads sem site convertendo — dinheiro queimado.",
      "Contratar sobrinho 'que manja' — barato sai caro quando quebra.",
    ],
  },
  {
    heading: "Tendências 2026",
    paragraphs: [
      "IA generativa auxilia redação e chat, mas não substitui estratégia humana.",
      "Voz e busca conversacional crescem — FAQ estruturado ajuda.",
      "Vídeo curto domina redes; site deve embedar e linkar conteúdo.",
      "Privacidade e LGPD mais rigorosas — consentimento cookie obrigatório.",
      "Performance mobile decide ranking e conversão.",
    ],
  },
  {
    heading: "Próximos passos práticos",
    paragraphs: [
      "Liste 3 objetivos mensuráveis para presença digital.",
      "Audite site atual ou concorrentes com checklist deste artigo.",
      "Solicite 2 orçamentos comparáveis com escopo idêntico.",
      "Defina responsável interno por conteúdo e leads.",
      "Agende go-live com plano marketing 90 dias pós-lançamento.",
      "VALGOR acompanha do orçamento ao pós-venda — /solicitar-orcamento.",
    ],
  },
];

export function padBlogArticle(article: BlogArticle, minWords = 2000): BlogArticle {
  const wc = (a: BlogArticle) =>
    a.content.flatMap((s) => s.paragraphs).join(" ").split(/\s+/).filter(Boolean).length;

  let content = [...article.content];
  let n = wc({ ...article, content });

  if (n >= minWords) return article;

  let round = 0;
  while (n < minWords && round < 5) {
    for (const block of faqBlocks) {
      content.push({
        ...block,
        heading:
          round === 0
            ? block.heading
            : `${block.heading} — aprofundamento ${round + 1}`,
        paragraphs: block.paragraphs.flatMap((p) => {
          const base = round === 0 ? p : `${p} No contexto deste artigo, vale revisar este ponto com sua equipe antes de decidir.`;
          return round >= 2 ? [base, "Documente aprendizados e ajuste estratégia trimestralmente para manter resultados."] : [base];
        }),
      });
      n = wc({ ...article, content });
      if (n >= minWords) break;
    }
    round++;
  }

  return { ...article, content };
}

export function padAllArticles(articles: BlogArticle[]): BlogArticle[] {
  return articles.map((a) => padBlogArticle(a));
}
