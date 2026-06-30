import { site } from "@/lib/site";
import { type LongFormSection } from "@/lib/content/long-form";

/** Seções exclusivas por serviço — combinadas ao bloco base para 1500+ palavras */
export const serviceExclusiveSections: Record<string, LongFormSection[]> = {
  "criacao-de-sites": [
    {
      heading: "Tipos de site que desenvolvemos",
      paragraphs: [
        "Site institucional apresenta sua empresa, história, serviços e formas de contato — é a base da presença digital para a maioria dos negócios. Estruturamos arquitetura de informação clara para que visitantes encontrem o que buscam em poucos cliques.",
        "Site empresarial e site comercial enfatizam proposta de valor, diferenciais e prova social (depoimentos, cases, certificações). Copy orientada a conversão conduz o visitante ao WhatsApp ou formulário.",
        "Landing page foca campanha específica: anúncio no Google, promoção sazonal ou lançamento. Uma página, uma oferta, um CTA — ideal para tráfego pago.",
        "Sites para nichos (advogados, médicos, clínicas, restaurantes, contadores, imobiliárias) recebem conteúdo e layout adaptados à linguagem e exigências do segmento.",
      ],
    },
    {
      heading: "SEO e Google: como seu site é encontrado",
      paragraphs: [
        "SEO técnico começa na construção: URLs amigáveis, títulos H1-H3 hierárquicos, meta description persuasiva, imagens com alt text, schema.org LocalBusiness e sitemap.xml atualizado.",
        "SEO local posiciona você em buscas como 'criação de sites São José do Rio Preto' ou 'advogado Rio Preto'. Google Meu Negócio integrado, NAP consistente e conteúdo regional fazem diferença.",
        "Core Web Vitals (LCP, INP, CLS) são fatores de ranking. Sites lentos ou instáveis perdem posição e conversão. Nossos projetos visam Lighthouse 95+.",
        "Conteúdo estratégico — blog, FAQ, páginas de serviço — amplia palavras-chave de cauda longa e educa o cliente antes do contato, aumentando taxa de fechamento.",
      ],
    },
    {
      heading: "Planos VALGOR para sites",
      paragraphs: [
        "Valgor Start (Essencial) — R$ 199,90/mês: até 5 páginas, layout personalizado, formulário, WhatsApp, hospedagem, SSL, domínio no 1º ano. Ideal para começar com presença profissional.",
        "Valgor Business (Profissional) — R$ 299,90/mês: até 10 páginas, SEO básico, Google Analytics, backup diário, 2h de alterações/mês. Para quem quer site sempre atualizado.",
        "Valgor Prime (Premium) — R$ 499,90/mês: páginas amplas, blog, SEO mensal, consultoria, 5h de alterações. Para empresas que tratam o site como canal principal de vendas.",
        "Desenvolvimento incluso na mensalidade — sem cobrança separada de 'projeto'. Contrato 12 meses; depois, renovação mensal sem fidelidade.",
      ],
    },
    {
      heading: "Perguntas que todo empresário deve fazer antes de contratar",
      paragraphs: [
        "Quem será responsável por alterações depois do lançamento? Com plano VALGOR, você tem horas mensais e suporte técnico — não fica órfão.",
        "O site será meu ou da agência? Domínio e conteúdo são seus. Código e infraestrutura gerenciados conforme contrato.",
        "Quanto tempo até aparecer no Google? Indexação ocorre em dias; posicionamento competitivo leva 3 a 6 meses com SEO contínuo.",
        "Preciso fornecir textos e fotos? Orientamos checklist. Podemos apoiar redação e banco de imagens conforme plano.",
      ],
    },
  ],
  "criacao-de-loja-virtual": [
    {
      heading: "Por que ter loja virtual própria",
      paragraphs: [
        "Marketplaces cobram comissão por venda e limitam relacionamento com cliente. Loja virtual própria captura e-mails, permite remarketing e constrói marca.",
        "Checkout transparente aumenta confiança: PIX, cartão, boleto conforme gateway escolhido. Cliente compra sem sair da sua identidade visual.",
        "Painel administrativo centraliza pedidos, estoque, cupons e relatórios — operação profissional desde o primeiro dia.",
        "Integração WhatsApp para dúvidas pós-venda ou produtos sob consulta complementa a experiência de compra.",
      ],
    },
    {
      heading: "Funcionalidades por plano e-commerce",
      paragraphs: [
        "E-COMMERCE START: até 100 produtos, PIX e cartão, frete Correios, área do cliente, responsivo. Entrada acessível para pequeno varejo.",
        "E-COMMERCE BUSINESS: produtos ilimitados, Mercado Pago/PagSeguro/Stripe, transportadoras, cupons, Merchant Center, SEO produtos.",
        "E-COMMERCE PRIME: ERP, carrinho abandonado, blog, SEO avançado, layout exclusivo, monitoramento 24x7 — para operação que vive de e-commerce.",
        "Cadastro de produtos pode ser feito pelo cliente ou pela VALGOR conforme volume contratado.",
      ],
    },
    {
      heading: "Logística, pagamento e conversão",
      paragraphs: [
        "Cálculo de frete automático reduz abandono de carrinho. Exibir prazo e valor antes do checkout é obrigatório para conversão.",
        "Gateways certificados PCI-DSS processam pagamentos com segurança. Não armazenamos dados de cartão em servidores próprios.",
        "Páginas de produto otimizadas: fotos zoom, descrição completa, avaliações, produtos relacionados, botão comprar visível no mobile.",
        "Recuperação de carrinho abandonado (planos superiores) envia lembretes e recupera vendas que seriam perdidas.",
      ],
    },
    {
      heading: "Marketing digital para loja virtual",
      paragraphs: [
        "Google Shopping e Merchant Center expõem produtos em buscas com intenção de compra.",
        "Pixels Meta e Google Ads rastreiam conversões para otimizar campanhas.",
        "Blog integrado atrai tráfego orgânico e educa sobre uso dos produtos.",
        "Landing pages por coleção ou promoção complementam campanhas sazonais.",
      ],
    },
  ],
  "seo-otimizacao-de-site": [
    {
      heading: "O que é SEO e por que importa",
      paragraphs: [
        "SEO (Search Engine Optimization) é o conjunto de técnicas para aparecer organicamente no Google quando clientes buscam seus serviços — sem pagar por clique.",
        "Tráfego orgânico tem custo marginal baixo após posicionamento: diferente de anúncios que param quando o budget acaba.",
        "Usuários confiam mais em resultados naturais do que em anúncios marcados 'Patrocinado'.",
        "SEO combina técnica (código, velocidade, estrutura) e conteúdo (palavras-chave, autoridade, links).",
      ],
    },
    {
      heading: "Auditoria técnica de SEO",
      paragraphs: [
        "Analisamos indexação, robots.txt, sitemap, canonical tags, redirecionamentos 301/302, erros 404 e cadeia de redirects.",
        "Verificamos Core Web Vitals em mobile e desktop — Google prioriza experiência do usuário.",
        "Schema.org (LocalBusiness, Service, FAQ) enriquece snippets nos resultados de busca.",
        "Identificamos conteúdo duplicado, thin content e problemas de hreflang quando aplicável.",
      ],
    },
    {
      heading: "SEO local para São José do Rio Preto",
      paragraphs: [
        "Otimizamos Google Meu Negócio: categorias, fotos, posts, avaliações e perguntas frequentes.",
        "Criamos páginas e conteúdo para bairros e cidades vizinhas quando relevante comercialmente.",
        "Citaciones locais (nome, endereço, telefone) consistentes em diretórios reforçam autoridade regional.",
        "Monitoramos posição para palavras-chave locais e ajustamos estratégia mensalmente nos planos contínuos.",
      ],
    },
    {
      heading: "Conteúdo e link building",
      paragraphs: [
        "Calendário editorial alinha blog e páginas de serviço à intenção de busca do público.",
        "Conteúdo evergreen (guias, tutoriais) gera tráfego por anos; notícias capturam picos sazonais.",
        "Parcerias locais e mídia regional geram backlinks qualificados — sinal de confiança para Google.",
        "Relatórios mensais mostram tráfego, keywords, conversões e próximas ações.",
      ],
    },
  ],
  "google-adwords": [
    {
      heading: "Google Ads: visibilidade imediata",
      paragraphs: [
        "Enquanto SEO leva meses, Google Ads coloca sua empresa no topo da busca em horas — ideal para lançamentos, sazonalidade ou testar ofertas.",
        "Segmentação geográfica foca São José do Rio Preto, região ou Brasil conforme raio de atendimento.",
        "Controle de budget diário evita surpresas. Pausamos campanhas que não performam e escalamos vencedoras.",
        "Remarketing reconecta visitantes que não converteram na primeira visita.",
      ],
    },
    {
      heading: "Tipos de campanha",
      paragraphs: [
        "Search: anúncios textuais quando alguém busca 'criação de sites', 'dentista Rio Preto' etc.",
        "Display: banners em sites parceiros Google para awareness de marca.",
        "Performance Max: automação Google com múltiplos canais — útil com criativos e landing page sólidos.",
        "Shopping: para e-commerce com feed de produtos no Merchant Center.",
      ],
    },
    {
      heading: "Landing page + anúncio = conversão",
      paragraphs: [
        "Anúncio promete; landing page cumpre. Mensagem consistente entre título do ad e H1 da página aumenta Quality Score e reduz CPC.",
        "Formulários curtos (nome, telefone, interesse) convertem mais que formulários longos em tráfego frio.",
        "WhatsApp como CTA secundário captura leads que preferem conversa imediata.",
        "Testes A/B de headline, imagem e CTA otimizam CPA ao longo do tempo.",
      ],
    },
    {
      heading: "Métricas e transparência",
      paragraphs: [
        "Acompanhamos impressões, cliques, CTR, CPC, conversões, CPA e ROAS.",
        "Dashboard compartilhado ou relatório mensal em linguagem clara — não apenas jargão técnico.",
        "Integração com Google Analytics 4 e Tag Manager para rastreamento preciso.",
        "Recomendamos budget mínimo viável conforme nicho e concorrência local.",
      ],
    },
  ],
  "Portal-Imobiliario": [
    {
      heading: "Portal imobiliário completo",
      paragraphs: [
        "Plataforma para imobiliárias, corretores autônomos e construtoras exibirem imóveis com busca avançada por bairro, preço, tipo e características.",
        "Cada imóvel tem página otimizada para SEO com fotos, tour virtual (quando disponível), mapa e formulário de interesse.",
        "Painel administrativo permite cadastro em massa, importação XML/CSV e gestão de corretores associados.",
        "Monetização via planos para anunciantes, destaques pagos e banners — modelo de negócio digital escalável.",
      ],
    },
    {
      heading: "Funcionalidades para corretores",
      paragraphs: [
        "Área do corretor com imóveis próprios, leads recebidos e estatísticas de visualização.",
        "Notificações por e-mail ou WhatsApp quando lead solicita visita ou informação.",
        "Integração CRM via API para times comerciais maiores.",
        "App responsivo: corretor atualiza status do imóvel pelo celular.",
      ],
    },
    {
      heading: "SEO imobiliário",
      paragraphs: [
        "URLs amigáveis por bairro e tipo: /apartamento-centro-rio-preto — captura buscas long tail.",
        "Schema Product/RealEstateListing enriquece resultados Google.",
        "Blog com dicas de compra, financiamento e mercado local gera tráfego qualificado.",
        "Integração Google Maps e Street View quando aplicável.",
      ],
    },
    {
      heading: "Implementação e suporte",
      paragraphs: [
        "Projeto sob medida conforme número de imóveis, corretores e integrações exigidas.",
        "Treinamento da equipe para cadastro e moderação de anúncios.",
        "Hospedagem escalável para picos de tráfego em campanhas.",
        "Suporte técnico e evolução contínua conforme crescimento do portal.",
      ],
    },
  ],
  "Portal-de-Classificados": [
    {
      heading: "Portal de classificados regional",
      paragraphs: [
        "Plataforma estilo OLX regional: usuários anunciam produtos, serviços, veículos e imóveis com categorias e filtros.",
        "Moderação manual ou automática evita spam e fraudes — reputação do portal depende disso.",
        "Monetização: anúncios destacados, pacotes de visibilidade, banners para empresas locais.",
        "Painel admin com métricas de anunciantes, receita e categorias mais acessadas.",
      ],
    },
    {
      heading: "Experiência do anunciante",
      paragraphs: [
        "Cadastro simplificado com verificação de e-mail ou telefone.",
        "Upload múltiplo de fotos, descrição rica e preço negociável ou fixo.",
        "Renovação automática de anúncios e alertas de expiração.",
        "Mensagens internas ou redirecionamento WhatsApp para negociação.",
      ],
    },
    {
      heading: "Experiência do comprador",
      paragraphs: [
        "Busca full-text, filtros por preço, localização e categoria.",
        "Favoritos e alertas quando novo anúncio combina com critério salvo.",
        "Denúncia de anúncio inadequado com workflow de moderação.",
        "Design mobile-first — maioria dos acessos vem de smartphone.",
      ],
    },
    {
      heading: "Tecnologia e escala",
      paragraphs: [
        "Arquitetura preparada para milhares de anúncios e picos de acesso.",
        "CDN para imagens e cache de listagens populares.",
        "API para integração com apps futuros ou parceiros.",
        "Backups diários e monitoramento de uptime.",
      ],
    },
  ],
  "portal-de-empregos": [
    {
      heading: "Portal de empregos e RH",
      paragraphs: [
        "Empresas publicam vagas; candidatos cadastram currículo e candidatam-se online.",
        "Busca por área, salário, modelo (presencial/híbrido/remoto) e cidade.",
        "Painel RH: triagem, status da vaga, exportação de currículos, comunicação com candidatos.",
        "Planos B2B para empresas que publicam múltiplas vagas simultaneamente.",
      ],
    },
    {
      heading: "Para candidatos",
      paragraphs: [
        "Perfil único com histórico profissional, formação e preferências.",
        "Alertas de vagas compatíveis por e-mail.",
        "Candidatura em um clique e acompanhamento de status.",
        "Dicas de currículo e entrevista via blog integrado — tráfego orgânico adicional.",
      ],
    },
    {
      heading: "Para empresas e consultorias",
      paragraphs: [
        "Marca empregadora reforçada com página da empresa no portal.",
        "Relatórios de visualizações e candidaturas por vaga.",
        "Integração LinkedIn ou importação de vagas via API.",
        "Destaque pago para vagas urgentes ou difíceis de preencher.",
      ],
    },
    {
      heading: "Compliance e dados",
      paragraphs: [
        "LGPD: consentimento explícito, política de privacidade, direito de exclusão de dados.",
        "Dados de currículo criptografados em trânsito e repouso.",
        "Retenção configurável conforme política do portal.",
        "Auditoria de acessos administrativos.",
      ],
    },
  ],
  "criacao-de-sites-em-sao-paulo": [
    {
      heading: "Web design orientado a conversão",
      paragraphs: [
        "Design não é enfeite — é ferramenta de vendas. Hierarquia visual guia o olhar do visitante até o CTA.",
        "Tipografia legível, contraste acessível (WCAG) e espaçamento generoso transmitem profissionalismo.",
        "Identidade visual consistente entre site, redes sociais e materiais impressos reforça marca.",
        "Prototipação em Figma antes do desenvolvimento evita retrabalho caro.",
      ],
    },
    {
      heading: "UX/UI e jornada do usuário",
      paragraphs: [
        "Mapeamos personas, dores e objetivos antes de desenhar telas.",
        "Wireframes validam estrutura; UI aplicada depois com cores e componentes da marca.",
        "Mobile-first: 70%+ dos acessos vêm de celular — layout pensado para polegar e scroll.",
        "Microinterações sutis (hover, feedback de formulário) melhoram percepção de qualidade.",
      ],
    },
    {
      heading: "Manual de marca e design system",
      paragraphs: [
        "Entregamos guia com logo, cores, tipografia, tom de voz e exemplos de uso.",
        "Design system acelera páginas futuras e mantém consistência quando equipe interna cria conteúdo.",
        "Componentes reutilizáveis (botões, cards, formulários) reduzem custo de evolução.",
        "Alinhamento total com manual VALGOR quando cliente não possui identidade própria.",
      ],
    },
    {
      heading: "Integração design + desenvolvimento",
      paragraphs: [
        "Designers e desenvolvedores trabalham no mesmo time — sem 'jogo de telefone' entre agência e dev.",
        "Assets exportados otimizados para web (SVG, WebP) garantem performance.",
        "Design responsivo testado em dispositivos reais, não só simulador.",
        "Handoff documentado para manutenção futura.",
      ],
    },
  ],
  hospedagem: [
    {
      heading: "Infraestrutura confiável",
      paragraphs: [
        "Servidores cloud com redundância, SSD NVMe e rede de alta velocidade mantêm site disponível 99,9%+ do tempo.",
        "SSL/TLS gratuito ou gerenciado renova automaticamente — site sempre com cadeado verde.",
        "Backups automáticos diários ou semanais conforme plano — restauração em minutos após incidente.",
        "Monitoramento 24x7 com alertas proativos antes que cliente perceba queda.",
      ],
    },
    {
      heading: "Performance e CDN",
      paragraphs: [
        "Cache inteligente, compressão Gzip/Brotli e HTTP/2 reduzem tempo de carregamento.",
        "CDN distribui assets estáticos globalmente — visitante carrega do servidor mais próximo.",
        "Otimização de imagens e lazy loading configurados no deploy.",
        "Relatórios de uptime e performance mensais nos planos gerenciados.",
      ],
    },
    {
      heading: "Segurança",
      paragraphs: [
        "Firewall de aplicação web (WAF) bloqueia ataques comuns.",
        "Atualizações de segurança aplicadas pela equipe VALGOR — cliente não precisa ser sysadmin.",
        "Scan de malware e remoção quando detectado.",
        "Conformidade LGPD em logs e retenção de dados de acesso.",
      ],
    },
    {
      heading: "Suporte e manutenção",
      paragraphs: [
        "Canal direto WhatsApp e e-mail para incidentes.",
        "Horas de alteração inclusas nos planos de site — telefone, banner, texto atualizado rapidamente.",
        "Migração gratuita de hospedagem legada quando contrata plano VALGOR.",
        "Consultoria para upgrade quando tráfego cresce além do plano atual.",
      ],
    },
  ],
  "landing-pages": [
    {
      heading: "Anatomia de uma landing page que converte",
      paragraphs: [
        "Headline clara com benefício principal acima da dobra — visitante entende oferta em 3 segundos.",
        "Subheadline expande promessa com prova ou diferencial.",
        "Hero visual (foto, vídeo ou mockup) reforça credibilidade.",
        "CTA primário repetido ao longo da página — nunca esconder botão de ação.",
        "Prova social: depoimentos, logos de clientes, números (anos, projetos, avaliações).",
        "FAQ reduz objeções antes do clique final.",
      ],
    },
    {
      heading: "Landing page para Google Ads",
      paragraphs: [
        "Quality Score depende de relevância anúncio-página. Palavra-chave do ad deve aparecer no H1 e meta title.",
        "Velocidade de carregamento impacta CPC — landing lenta paga mais caro por clique.",
        "Formulário acima da dobra em mobile captura lead antes do scroll.",
        "Página de obrigado com pixel de conversão confirma evento para otimização automática Google.",
      ],
    },
    {
      heading: "Landing page para Meta Ads",
      paragraphs: [
        "Visual forte e copy emocional performam bem no feed Instagram/Facebook.",
        "Vídeo curto autoplay muted aumenta engajamento.",
        "Lead form nativo Meta vs. landing externa — testamos conforme objetivo de campanha.",
        "Pixel Meta e API de conversões configurados para atribuição iOS14+.",
      ],
    },
    {
      heading: "Entrega e otimização contínua",
      paragraphs: [
        "Prazo típico: 7 a 15 dias úteis com copy e criativos aprovados.",
        "Hospedagem inclusa no plano ou avulsa conforme contrato.",
        "Heatmaps e gravações de sessão (Hotjar/Clarity) opcionais para iterar layout.",
        "Variantes A/B para headline e CTA quando volume de tráfego justifica teste estatístico.",
      ],
    },
  ],
};

export function mergeServiceSections(
  base: LongFormSection[],
  key: string,
): LongFormSection[] {
  const exclusive = serviceExclusiveSections[key] ?? [];
  const closing: LongFormSection = {
    heading: "Solicite orçamento",
    paragraphs: [
      `A ${site.brand} atende ${site.city}, ${site.region} e todo o Brasil. Preencha o formulário em /solicitar-orcamento ou fale no WhatsApp ${site.phoneDisplay}.`,
      "Proposta sem compromisso com escopo, prazo e investimento detalhados.",
      site.headline,
    ],
  };
  return [...base, ...exclusive, closing];
}

export function countWordsInSections(sections: LongFormSection[]): number {
  const text = sections.flatMap((s) => [s.heading, ...s.paragraphs]).join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
