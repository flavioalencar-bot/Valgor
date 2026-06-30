import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { homeFaqs } from "@/lib/keywords";
import { faqJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

type FaqItem = { question: string; answer: string };

type Props = {
  faqs?: readonly FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
  compact?: boolean;
};

export function SeoFaqSection({
  faqs = homeFaqs,
  eyebrow = "Dúvidas frequentes",
  title = "Orçamento, preço e como contratar",
  description = "Respostas sobre criação de sites, desenvolvimento web e agência em São José do Rio Preto.",
  id = "faq",
  compact = false,
}: Props) {
  return (
    <Section
      compact={compact}
      className={cn(
        "border-t border-border-subtle bg-surface-elevated",
        compact && "pb-10 sm:pb-14",
      )}
      id={id}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <Container>
        <SectionHeader
          compact={compact}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <dl className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const borders = [
              "border-l-valgor-500",
              "border-l-valgor-400",
              "border-l-brand-grey",
              "border-l-valgor-600",
              "border-l-valgor-500",
            ];
            return (
              <div
                key={faq.question}
                className={`shadow-card rounded-2xl border border-border border-l-4 bg-surface-card p-6 ${borders[i % borders.length]}`}
              >
                <dt className="font-semibold text-foreground">{faq.question}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </Section>
  );
}
