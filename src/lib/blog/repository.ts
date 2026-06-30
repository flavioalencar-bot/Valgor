import { prisma } from "@/lib/prisma";
import { staticArticles, type BlogArticle } from "@/lib/blog/articles";

export async function getPublishedArticles(): Promise<BlogArticle[]> {
  try {
    const rows = await prisma.article.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
    });
    if (rows.length > 0) {
      return rows.map((r) => ({
        slug: r.slug,
        title: r.title,
        excerpt: r.excerpt,
        category: r.category,
        publishedAt: r.publishedAt?.toISOString().slice(0, 10) ?? "",
        content: [{ paragraphs: r.content.split("\n\n").filter(Boolean) }],
      }));
    }
  } catch {
    /* fallback */
  }
  return staticArticles;
}

export async function getArticleBySlug(slug: string): Promise<BlogArticle | null> {
  try {
    const row = await prisma.article.findFirst({
      where: { slug, published: true },
    });
    if (row) {
      return {
        slug: row.slug,
        title: row.title,
        excerpt: row.excerpt,
        category: row.category,
        publishedAt: row.publishedAt?.toISOString().slice(0, 10) ?? "",
        content: [{ paragraphs: row.content.split("\n\n").filter(Boolean) }],
      };
    }
  } catch {
    /* fallback */
  }
  return staticArticles.find((a) => a.slug === slug) ?? null;
}
