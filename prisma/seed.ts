import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    skipDuplicates: true,
    data: [
      {
        title: "Empresa de serviços locais",
        slug: "servicos-locais",
        category: "Site institucional",
        segment: "site",
        description: "Site institucional com SEO local.",
        objective: "Captar leads via Google",
        result: "+180% de contatos",
        technologies: ["Next.js", "SEO", "WhatsApp"],
        published: true,
        sortOrder: 1,
      },
      {
        title: "Loja virtual regional",
        slug: "loja-regional",
        category: "E-commerce",
        segment: "ecommerce",
        description: "E-commerce com PIX e cartão.",
        objective: "Vender online 24h",
        result: "Vendas automatizadas",
        technologies: ["E-commerce", "PIX"],
        published: true,
        sortOrder: 2,
      },
    ],
  });

  await prisma.testimonial.createMany({
    skipDuplicates: true,
    data: [
      {
        name: "Mariana S.",
        company: "Clínica · SJRP",
        quote: "Passamos a receber contatos todos os dias pelo Google.",
        rating: 5,
        published: true,
        sortOrder: 1,
      },
    ],
  });

  const articleBody = (await import("../src/lib/blog/articles")).staticArticles[0];
  if (articleBody) {
    await prisma.article.upsert({
      where: { slug: articleBody.slug },
      create: {
        slug: articleBody.slug,
        title: articleBody.title,
        excerpt: articleBody.excerpt,
        content: articleBody.content.flatMap((b) => b.paragraphs).join("\n\n"),
        category: articleBody.category,
        published: true,
        publishedAt: new Date(articleBody.publishedAt),
      },
      update: {},
    });
  }

  console.log("Seed concluído.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
