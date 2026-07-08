import { CtaBand } from "@/components/home/CtaBand";
import { PageBanner } from "@/components/ui/PageBanner";
import { Container, Section } from "@/components/ui/Section";
import { getArticleBySlug } from "@/lib/blog/repository";
import { blogPostingJsonLd, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { staticArticles } = await import("@/lib/blog/articles");
  return staticArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const articleUrl = `${site.url}/blog/${slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingJsonLd({
              title: article.title,
              description: article.excerpt,
              url: articleUrl,
              datePublished: article.publishedAt,
            }),
          ),
        }}
      />
      <PageBanner accent="valgor" title={article.title} lead={article.excerpt} />
      <Section className="bg-surface">
        <Container>
          <article className="prose prose-neutral mx-auto max-w-3xl dark:prose-invert">
            <p className="text-sm text-subtle">
              {article.category} · {article.publishedAt}
            </p>
            {article.content.map((block, i) => (
              <div key={i} className="mt-8 space-y-4">
                {block.heading && (
                  <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground">
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </article>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
