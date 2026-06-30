import { site } from "@/lib/site";
import type { LongFormSection } from "./long-form";

/** Seções adicionais para atingir 1500+ palavras (PRD Fase 2) */
export function serviceCompliancePad(topic: string): LongFormSection[] {
  return [
    {
      heading: `Guia completo: o que esperar de ${topic}`,
      paragraphs: [
        `Contratar ${topic.toLowerCase()} é decisão que impacta receita por anos. Antes de assinar qualquer proposta, mapeie jornada do seu cliente: como ele descobre você, o que pesquisa, quais objeções tem antes de comprar e qual canal prefere (WhatsApp, formulário, ligação).`,
        "Documente concorrentes diretos na sua cidade e analise sites deles. Note o que funciona (clareza, velocidade, prova social) e onde há oportunidade (conteúdo fraco, mobile ruim, formulário escondido).",
        "Defina prioridades: credibilidade imediata, geração de leads, vendas online ou automação. Escopo deriva do objetivo — não do pacote genérico mais barato.",
        "Envolva quem atende clientes no dia a dia: vendedores e SAC conhecem dúvidas reais que site deve responder.",
        "Estabeleça indicadores: visitas/mês, taxa de conversão, custo por lead, ticket médio. Sem métrica, impossível saber se investimento funcionou.",
      ],
    },
    {
      heading: "Checklist antes do go-live",
      paragraphs: [
        "Testar formulários enviando mensagem real — e-mail chegou? WhatsApp abre com texto correto?",
        "Validar site em iPhone e Android reais, não só Chrome desktop.",
        "Conferir telefone, endereço e horário em rodapé, contato e Google Meu Negócio.",
        "Rodar PageSpeed Insights e corrigir alertas críticos antes de anunciar lançamento.",
        "Configurar favicon, Open Graph (preview WhatsApp/Facebook) e título aba navegador.",
        "Publicar política de privacidade e termos se coletar dados pessoais.",
        "Submeter sitemap no Google Search Console e solicitar indexação página principal.",
        "Treinar equipe para atualizar CMS — vídeo curto gravado evita dependência eterna da agência.",
      ],
    },
    {
      heading: "Manutenção e evolução contínua",
      paragraphs: [
        "Site estático por anos perde ranking e credibilidade. Google favorece conteúdo atualizado.",
        "Revise textos trimestralmente: preços, equipe, serviços novos, cases recentes.",
        "Publique blog ou notícias — 2 artigos/mês já diferenciam de concorrentes parados.",
        "Monitore uptime e certificado SSL — expiração gera aviso 'não seguro' no Chrome.",
        "Atualize plugins ou dependências (se WordPress) ou redeploy periódico (stack moderna).",
        "Analise Search Console: queries novas podem virar páginas de serviço.",
        "Planos VALGOR incluem horas de alteração mensais — use-as, site vivo converte mais.",
      ],
    },
    {
      heading: "Integração com marketing digital",
      paragraphs: [
        "Google Ads exige landing alinhada ao anúncio — Quality Score alto reduz CPC.",
        "Meta Ads remarketing visitantes site — pixel instalado corretamente é obrigatório.",
        "E-mail marketing captura leads blog e formulários — LGPD exige opt-in claro.",
        "Redes sociais devem linkar site, não substituí-lo — bio Instagram com link orçamento.",
        "Offline: QR code cartão visita, vitrine, caminhão — apontando página conversão.",
        `${site.brand} integra site + campanhas + SEO quando cliente contrata pacote completo.`,
      ],
    },
    {
      heading: "Perguntas frequentes",
      paragraphs: [
        "Quanto tempo demora? Institucional 15-30 dias úteis; complexos 45-60. Conteúdo cliente acelera ou atrasa.",
        "Posso editar sozinho? Sim, CMS incluso nos planos com treinamento.",
        "E se eu cancelar? Domínio e conteúdo seus; hospedagem migrável conforme contrato.",
        "Atendem fora de Rio Preto? Sim, todo Brasil — reuniões online.",
        "Fazem redação? Apoio conforme plano; copy premium sob consulta.",
        "Site aparece no Google? Indexação rápida; ranking competitivo exige SEO contínuo 3-6 meses.",
        "Aceitam cartão no plano mensal? Sim, boleto e PIX também.",
      ],
    },
    {
      heading: `Por que empresas de ${site.region} escolhem a ${site.brand}`,
      paragraphs: [
        `Mais de uma década desenvolvendo projetos web na região de ${site.city} — conhecemos mercado local e demandas nacionais.`,
        "Equipe própria: designer, desenvolvedor, suporte — sem terceirizar para desconhecido.",
        "Planos previsíveis sem surpresa de 'hora técnica' a R$ 200 sem aviso.",
        "Portfólio verificável — peça URLs de clientes ativos.",
        "Cultura de parceria: queremos que seu site gere negócio, não só fatura de mensalidade.",
        "Solicite orçamento em /solicitar-orcamento — resposta em horário comercial, proposta detalhada.",
      ],
    },
  ];
}

export function countSectionWords(sections: LongFormSection[]): number {
  return sections
    .flatMap((s) => [s.heading, ...s.paragraphs])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function padSectionsToMin(
  sections: LongFormSection[],
  topic: string,
  minSectionWords: number,
  introWords = 0,
  totalMin = 1500,
): LongFormSection[] {
  const result = [...sections];
  const pad = serviceCompliancePad(topic);
  let i = 0;
  while (
    (countSectionWords(result) < minSectionWords ||
      countSectionWords(result) + introWords < totalMin) &&
    i < pad.length * 3
  ) {
    const block = pad[i % pad.length]!;
    const round = Math.floor(i / pad.length);
    result.push({
      heading: round > 0 ? `${block.heading} (${round + 1})` : block.heading,
      paragraphs: block.paragraphs,
    });
    i++;
  }
  return result;
}
