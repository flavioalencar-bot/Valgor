import { isAdminAuthenticated } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Admin — Dashboard", robots: { index: false } };

export default async function AdminDashboard() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  let counts = { projects: 0, testimonials: 0, articles: 0, messages: 0, diagnostics: 0 };
  try {
    const [projects, testimonials, articles, messages, diagnostics] = await Promise.all([
      prisma.project.count(),
      prisma.testimonial.count(),
      prisma.article.count(),
      prisma.contactMessage.count(),
      prisma.digitalDiagnostic.count(),
    ]);
    counts = { projects, testimonials, articles, messages, diagnostics };
  } catch {
    /* DB offline */
  }

  return (
    <div className="min-h-screen bg-surface-elevated pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-5">
        <div className="flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold">
            Painel administrativo
          </h1>
          <form action="/api/admin/login" method="POST">
            <button
              type="button"
              onClick={undefined}
              className="hidden"
            />
          </form>
          <Link href="/" className="text-sm text-valgor-500 hover:underline">
            Ver site
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { label: "Projetos", value: counts.projects, href: "/admin/projects" },
            { label: "Depoimentos", value: counts.testimonials, href: "/admin/testimonials" },
            { label: "Artigos", value: counts.articles, href: "/admin/articles" },
            { label: "Mensagens", value: counts.messages, href: "/admin/messages" },
            { label: "Diagnósticos", value: counts.diagnostics, href: "/admin/diagnosticos" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-border bg-surface-card p-6 shadow-sm hover:border-valgor-500/30"
            >
              <p className="text-sm text-muted">{item.label}</p>
              <p className="mt-1 text-3xl font-bold text-foreground">{item.value}</p>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-xs text-subtle">
          Configure ADMIN_PASSWORD no .env. Execute <code>npm run db:seed</code> para dados iniciais.
        </p>
      </div>
    </div>
  );
}
