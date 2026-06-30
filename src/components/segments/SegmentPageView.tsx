import { CtaBand } from "@/components/home/CtaBand";
import { SeoFaqSection } from "@/components/seo/SeoFaqSection";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { type SegmentPageData } from "@/lib/segment-pages";
import { serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export function SegmentPageView({ page }: { page: SegmentPageData }) {
  const pageUrl = `${site.url}${page.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: page.metaTitle,
              description: page.description,
              url: pageUrl,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: page.metaTitle,
              description: page.description,
              url: pageUrl,
            }),
          ),
        }}
      />

      <ServiceLayout
        title={page.title}
        lead={page.lead}
        accent={page.accent}
        features={page.features}
        compact
      >
        {page.sections.map((section) => (
          <div key={section.heading} className="space-y-4">
            <h2 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground sm:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}
      </ServiceLayout>

      <SeoFaqSection
        faqs={page.faqs}
        eyebrow="Dúvidas frequentes"
        title={`Perguntas sobre site para ${page.niche}`}
        description={`Respostas sobre preço, prazo e contratação em ${site.city}.`}
        id={`faq-${page.slug.slice(1)}`}
        compact
      />
      <CtaBand compact />
    </>
  );
}
