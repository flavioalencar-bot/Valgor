import type { BlogArticle } from "./articles";

type Block = BlogArticle["content"][number];

/** Seções genéricas para artigos longos (2000+ palavras) */
export function siteCostExtraSections(): Block[] {
  return [
    {
      heading: "Faixas de preço no mercado brasileiro em 2026",
      paragraphs: [
        "Sites institucionais simples (até 5 páginas) costumam variar entre R$ 1.500 e R$ 8.000 em projetos avulsos, dependendo de agência, cidade e escopo. Lojas virtuais partem de R$ 5.000 e podem ultrapassar R$ 50.000 com integrações ERP, multi-loja e apps.",
        "Planos mensais democratizam acesso: em vez de desembolsar tudo upfront, a empresa paga mensalidade que inclui desenvolvimento, hospedagem e suporte. Após período contratual, continua pagando só manutenção — site já está no ar gerando retorno.",
        "Desconfie de orçamentos abaixo de R$ 500 totais para site completo. Geralmente são templates WordPress genéricos sem personalização, SEO ou suporte — ou cobrança escondida depois.",
        "O preço justo reflete horas de design, desenvolvimento, testes, configuração de domínio, SSL, Analytics, treinamento e garantia. Peça breakdown do escopo.",
      ],
    },
    {
      heading: "O que deve estar incluso em qualquer proposta séria",
      paragraphs: [
        "Design responsivo (mobile-first) não é opcional — é requisito legal de usabilidade e ranking Google.",
        "CMS ou painel para alterações: telefone, banner, blog, produtos. Sem isso, cada mudança vira custo extra.",
        "Certificado SSL (HTTPS) gratuito via Let's Encrypt ou similar, renovado automaticamente.",
        "Hospedagem com uptime mínimo 99,5%, backups diários ou semanais e restore testado.",
        "SEO técnico básico: title, description, Open Graph, sitemap, robots, headings corretos.",
        "Integração WhatsApp e formulário de contato com notificação por e-mail.",
        "Google Analytics 4 e Search Console vinculados e entregues funcionando.",
        "Política de privacidade e banner LGPD quando houver coleta de dados.",
      ],
    },
    {
      heading: "Custos ocultos que propostas baratas não mencionam",
      paragraphs: [
        "Renovação de domínio anual (R$ 40 a R$ 120 para .com.br).",
        "Hospedagem separada se não inclusa (R$ 30 a R$ 300/mês conforme tráfego).",
        "Manutenção e atualizações de segurança — WordPress desatualizado é alvo #1 de hackers.",
        "Alterações de conteúdo cobradas por hora (R$ 80 a R$ 200/h em agências).",
        "Licenças de plugins premium, fotos de banco de imagens, redação profissional.",
        "Campanhas de Google Ads para tráfego inicial — site sem visitas não gera lead sozinho no curto prazo.",
        "Some tudo isso ao preço inicial antes de comparar propostas.",
      ],
    },
    {
      heading: "Planos VALGOR: transparência total",
      paragraphs: [
        "Plano Essencial (R$ 199,90/mês): site institucional, até 5 páginas, CMS, hospedagem, SSL, domínio 1º ano, 1h alteração/mês.",
        "Plano Profissional (R$ 299,90/mês): até 10 páginas, SEO avançado, blog, 2h alteração, relatório trimestral.",
        "Plano Premium (R$ 499,90/mês): páginas ilimitadas, landing pages sazonais, SEO contínuo, 4h alteração, prioridade suporte.",
        "E-commerce a partir de R$ 499,90/mês com catálogo, carrinho, pagamentos e gestão de pedidos.",
        "Contrato inicial 12 meses — desenvolvimento incluso. Depois, mensalidade sem fidelidade.",
        "Sem taxa de setup escondida. Orçamento detalhado antes de assinar.",
      ],
    },
    {
      heading: "Como negociar com agências e freelancers",
      paragraphs: [
        "Peça 2 a 3 propostas comparáveis — mesmo escopo, mesmas entregas.",
        "Verifique portfólio real: sites no ar, não só mockups.",
        "Leia contrato: quem é dono do domínio, código e conteúdo?",
        "Pergunte SLA de suporte: tempo de resposta em horário comercial.",
        "Exija cronograma com marcos e responsabilidades de conteúdo (cliente vs. agência).",
        "Evite pagamento 100% antecipado — modelos 50/50 ou mensalidade protegem ambos.",
      ],
    },
    {
      heading: "Quando vale investir mais",
      paragraphs: [
        "Integrações complexas: ERP, CRM, TOTVS, Bling, emissão NF-e automática.",
        "Portal com login, área restrita, assinaturas recorrentes.",
        "Multi-idioma para exportação ou turismo.",
        "Performance extrema para alto tráfego (CDN global, cache avançado).",
        "Redesign completo de marca com manual de identidade visual.",
        "Nestes casos, orçamento customizado faz sentido — mas escopo documentado evita estouro.",
      ],
    },
    {
      heading: "Perguntas frequentes sobre preço de sites",
      paragraphs: [
        "Posso pagar só hospedagem depois? Sim, após contrato VALGOR você paga mensalidade de manutenção sem refazer site.",
        "Domínio é meu? Sim — registramos no seu CPF/CNPJ.",
        "Posso migrar depois? Site em tecnologia padrão permite migração; evite plataformas fechadas.",
        "Tem desconto anual? Consulte condições comerciais vigentes.",
        "Loja virtual inclui taxas de gateway? Taxas de Mercado Pago, PagSeguro etc. são do cliente — configuramos integração.",
      ],
    },
  ];
}

export function seoLocalExtraSections(): Block[] {
  return [
    {
      heading: "Como o Google ranqueia negócios locais",
      paragraphs: [
        "O algoritmo local considera três pilares: relevância (seu site responde à busca?), distância (proximidade do usuário) e destaque (avaliações, autoridade, engajamento).",
        "Map Pack (3 resultados com mapa) concentra cliques — estar fora dele em buscas comerciais é perder 60%+ do tráfego local.",
        "Resultados orgânicos abaixo do mapa ainda importam para buscas informacionais e mobile.",
        "Consistência de NAP em dezenas de diretórios reforça confiança algorítmica.",
      ],
    },
    {
      heading: "Palavras-chave locais que convertem",
      paragraphs: [
        "Combine serviço + cidade: 'criação de sites São José do Rio Preto', 'advogado trabalhista Rio Preto'.",
        "Long-tail com intenção: 'quanto custa site para clínica em Rio Preto' — menos volume, mais conversão.",
        "Use Google Keyword Planner e Search Console para ver o que já traz impressões.",
        "Evite criar 50 páginas idênticas só trocando bairro — Google penaliza doorway pages.",
        "Priorize 5 a 15 termos com volume real e intenção comercial clara.",
      ],
    },
    {
      heading: "Estratégia de conteúdo para SEO local",
      paragraphs: [
        "Publique 2 a 4 artigos por mês respondendo dúvidas reais do seu público na região.",
        "Entreviste clientes locais e transforme em cases com nome e foto (com autorização).",
        "Crie página 'Área de atendimento' listando bairros e cidades sem duplicar texto.",
        "Atualize página de serviços anualmente com preços orientativos ou FAQ — sinal de frescor.",
        "Link interno: artigos do blog apontam para páginas de serviço e orçamento.",
      ],
    },
    {
      heading: "Link building geográfico",
      paragraphs: [
        "Cadastre-se em associações comerciais, CDL, OAB local (conforme segmento).",
        "Patrocine eventos locais e peça menção com link no site do evento.",
        "Parcerias com empresas complementares: indicação cruzada com link.",
        "Imprensa regional: releases sobre novidades do negócio geram backlinks.",
        "Qualidade > quantidade: um link do jornal local vale mais que 100 diretórios spam.",
      ],
    },
    {
      heading: "Métricas para acompanhar SEO local",
      paragraphs: [
        "Impressões e cliques no Search Console filtrados por queries com nome de cidade.",
        "Posição média para top 10 keywords locais.",
        "Visualizações e ações no Google Meu Negócio (ligações, rotas, site).",
        "Conversões no Analytics: formulários, WhatsApp, ligações click-to-call.",
        "Avaliações: quantidade, nota média, velocidade de resposta.",
        "Revise mensalmente — SEO local é maratona, não sprint.",
      ],
    },
    {
      heading: "Ferramentas úteis (gratuitas e pagas)",
      paragraphs: [
        "Google Search Console e Analytics 4 — obrigatórios.",
        "Google Meu Negócio — perfil do negócio no Maps.",
        "PageSpeed Insights — performance e Core Web Vitals.",
        "Screaming Frog (versão free até 500 URLs) — auditoria técnica.",
        "Semrush ou Ahrefs — pesquisa de keywords e concorrentes (pagos).",
        "BrightLocal — gestão de citações locais (pago, para múltiplas unidades).",
      ],
    },
    {
      heading: "Case: clínica que triplicou agendamentos",
      paragraphs: [
        "Cliente em São José do Rio Preto tinha site antigo, lento, sem mobile. GMB incompleto, 3 avaliações.",
        "Redesign mobile-first, schema MedicalBusiness, blog com dúvidas de pacientes, otimização GMB com fotos e posts semanais.",
        "Em 6 meses: posição top 3 para 8 keywords locais, agendamentos via site + WhatsApp +300%.",
        "Investimento: plano Profissional VALGOR + conteúdo mensal. ROI positivo no mês 4.",
        "Lição: SEO local técnico + conteúdo + GMB ativo — combinação vencedora.",
      ],
    },
  ];
}
