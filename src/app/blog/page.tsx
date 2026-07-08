import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/ui/PageBanner";
import { Container, Section } from "@/components/ui/Section";
import { getPublishedArticles } from "@/lib/blog/repository";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Blog — Marketing Digital, SEO e Sites",
  description: `Artigos sobre marketing digital, SEO, Google, sites e tecnologia para empresas.`,
  path: "/blog",
});

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <PageBanner
        accent="valgor"
        title="Blog VALGOR"
        lead="Conteúdo estratégico para atrair tráfego orgânico e educar empresas sobre crescimento digital."
      />
      <Section className="bg-surface">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="rounded-2xl border border-border bg-surface-card p-6 shadow-sm transition hover:border-valgor-500/30 dark:shadow-none"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-valgor-500">
                  {article.category}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground">
                  <Link href={`/blog/${article.slug}`} className="hover:text-valgor-500">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
                <p className="mt-4 text-xs text-subtle">{article.publishedAt}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/solicitar-orcamento" className="!rounded-xl">
              Solicitar Orçamento
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
