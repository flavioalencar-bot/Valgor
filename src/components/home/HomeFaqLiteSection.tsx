import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { homeFaqs } from "@/lib/home-content";
import { faqJsonLd } from "@/lib/seo";

const liteFaqs = homeFaqs.slice(0, 4);

export function HomeFaqLiteSection() {
  return (
    <Section className="bg-surface" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(liteFaqs)) }}
      />

      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Dúvidas mais comuns antes de contratar"
          description="As respostas que costumam pesar mais na decisão comercial."
          align="center"
          compact
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 lg:grid-cols-2">
          {liteFaqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[1.2rem] border border-border border-l-4 border-l-valgor-500 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
