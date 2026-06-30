import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { homeFaqs } from "@/lib/home-content";
import { faqJsonLd } from "@/lib/seo";

export function HomeFaqSection() {
  return (
    <Section className="bg-surface" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeFaqs)) }}
      />
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Tudo o que você precisa saber antes de solicitar orçamento."
          align="center"
          compact
        />
        <dl className="mx-auto mt-10 max-w-3xl space-y-4">
          {homeFaqs.map((faq, i) => (
            <div
              key={faq.question}
              className="shadow-card rounded-2xl border border-border border-l-4 border-l-valgor-500 bg-surface-card p-6"
            >
              <dt className="font-semibold text-foreground">{faq.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
