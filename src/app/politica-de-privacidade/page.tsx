import { PageBanner } from "@/components/ui/PageBanner";
import { Container, Section } from "@/components/ui/Section";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Política de Privacidade e Proteção de Dados",
  description: `Política de privacidade da ${site.brand} (${site.legalName}). Saiba como tratamos dados pessoais, cookies, formulários e diagnósticos digitais conforme a LGPD.`,
  path: "/politica-de-privacidade",
});

const sections = [
  {
    heading: "1. Quem somos",
    paragraphs: [
      `Esta política se aplica aos serviços digitais operados por ${site.legalName}, marca ${site.brand}, com sede em ${site.city}, ${site.state}, CNPJ ${site.cnpj}.`,
      `Controlador dos dados: ${site.legalName}. Contato do encarregado/DPO: ${site.email} ou telefone ${site.phoneDisplay}.`,
    ],
  },
  {
    heading: "2. Dados que coletamos",
    paragraphs: [
      "Dados de contato enviados voluntariamente em formulários (nome, e-mail, telefone, mensagem).",
      "Dados de diagnóstico digital (URL analisada, e-mail informado, resultados da avaliação).",
      "Dados técnicos de navegação via cookies e ferramentas de analytics (páginas visitadas, dispositivo, origem de tráfego), quando você consentir.",
    ],
  },
  {
    heading: "3. Finalidades do tratamento",
    paragraphs: [
      "Responder solicitações de orçamento e prestar atendimento comercial.",
      "Enviar relatórios de diagnóstico digital e comunicações relacionadas ao serviço solicitado.",
      "Medir desempenho do site, campanhas e melhorar a experiência do usuário.",
      "Cumprir obrigações legais e exercer direitos em processos administrativos ou judiciais.",
    ],
  },
  {
    heading: "4. Base legal (LGPD)",
    paragraphs: [
      "Consentimento do titular para cookies não essenciais e comunicações de marketing, quando aplicável.",
      "Execução de procedimentos preliminares relacionados a contrato a pedido do titular (orçamentos e propostas).",
      "Legítimo interesse para segurança, prevenção a fraudes e melhoria dos serviços, respeitando direitos do titular.",
    ],
  },
  {
    heading: "5. Cookies e analytics",
    paragraphs: [
      "Utilizamos cookies essenciais para funcionamento do site e, com seu consentimento, cookies de analytics (ex.: Google Analytics) para entender uso e conversões.",
      "Você pode aceitar ou recusar cookies não essenciais no banner exibido na primeira visita. Recusar não impede o uso básico do site.",
    ],
  },
  {
    heading: "6. Compartilhamento de dados",
    paragraphs: [
      "Não vendemos dados pessoais. Podemos compartilhar informações com provedores de infraestrutura (hospedagem, e-mail, analytics) estritamente para operar o serviço, sob contratos de confidencialidade.",
      "Dados podem ser compartilhados quando exigido por lei ou ordem judicial.",
    ],
  },
  {
    heading: "7. Retenção e segurança",
    paragraphs: [
      "Mantemos dados pelo tempo necessário à finalidade informada ou exigência legal. Mensagens de contato e diagnósticos são armazenados em ambiente controlado com acesso restrito.",
      "Adotamos medidas técnicas e organizacionais para proteger dados contra acesso não autorizado, perda ou alteração indevida.",
    ],
  },
  {
    heading: "8. Seus direitos",
    paragraphs: [
      "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação de dados tratados com consentimento, informação sobre compartilhamentos e revogação do consentimento.",
      `Para exercer seus direitos, envie e-mail para ${site.email} informando sua solicitação. Responderemos em prazo razoável conforme a LGPD.`,
    ],
  },
  {
    heading: "9. Atualizações",
    paragraphs: [
      "Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A data da última revisão será indicada nesta página.",
      "Última atualização: julho de 2026.",
    ],
  },
] as const;

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <PageBanner
        accent="valgor"
        title="Política de Privacidade"
        lead={`Transparência sobre como a ${site.brand} coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).`}
      />
      <Section className="bg-surface">
        <Container>
          <SeoBreadcrumbs
            items={[
              { name: "Início", href: "/" },
              { name: "Política de Privacidade", href: "/politica-de-privacidade" },
            ]}
            className="mb-8"
          />
          <article className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className="leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </article>
        </Container>
      </Section>
    </>
  );
}
