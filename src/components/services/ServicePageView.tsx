import { CtaBand } from "@/components/home/CtaBand";
import { SeoFaqSection } from "@/components/seo/SeoFaqSection";
import { SegmentsSection } from "@/components/seo/SegmentsSection";
import { TechStackSection } from "@/components/seo/TechStackSection";
import { PlansSection } from "@/components/services/PlansSection";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { faqsForPath } from "@/lib/keywords";
import { plansSets } from "@/lib/plans";
import { type ServicePageData } from "@/lib/services-data";
import { serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

function isPlansFocusedPage(page: ServicePageData) {
  return Boolean(page.plansKey && page.seoExtras?.includes("plans"));
}

export function ServicePageView({ page }: { page: ServicePageData }) {
  const pageUrl = `${site.url}${page.slug}`;
  const faqs = faqsForPath(page.slug);
  const plansFocused = isPlansFocusedPage(page);

  return (
    <>
      {page.schemaService && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                serviceJsonLd({
                  name: page.schemaService.name,
                  description: page.schemaService.description,
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
        </>
      )}

      <ServiceLayout
        title={page.title}
        lead={page.lead}
        accent={page.accent}
        features={page.features}
        highlights={page.highlights}
        compact={plansFocused}
        plansAnchor={plansFocused}
      >
        {page.sections
          ? page.sections.map((section) => (
              <div key={section.heading} className="space-y-4">
                <h2 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p.replace(/\*\*(.*?)\*\*/g, "$1")}</p>
                ))}
              </div>
            ))
          : page.body.map((p, i) => <p key={i}>{p}</p>)}
      </ServiceLayout>

      {page.seoExtras?.includes("segments") && <SegmentsSection />}
      {page.seoExtras?.includes("plans") && page.plansKey && (
        <PlansSection {...plansSets[page.plansKey]} />
      )}
      {page.seoExtras?.includes("tech") && <TechStackSection />}
      {page.seoExtras?.includes("faq") && faqs && (
        <SeoFaqSection
          faqs={faqs}
          eyebrow={page.faqHeader?.eyebrow}
          title={page.faqHeader?.title ?? "Perguntas frequentes"}
          description={page.faqHeader?.description}
          id={`faq-${page.slug.replace(/\//g, "")}`}
          compact={plansFocused}
        />
      )}
      <CtaBand compact={plansFocused} />
    </>
  );
}
