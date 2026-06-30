import { isAdminAuthenticated } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Admin — Projetos", robots: { index: false } };

export default async function AdminProjectsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  let projects: Awaited<ReturnType<typeof prisma.project.findMany>> = [];
  try {
    projects = await prisma.project.findMany({ orderBy: { sortOrder: "asc" } });
  } catch {
    /* */
  }

  return (
    <div className="min-h-screen bg-surface-elevated pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-5">
        <Link href="/admin" className="text-sm text-fox-500 hover:underline">
          ← Dashboard
        </Link>
        <h1 className="mt-4 font-[family-name:var(--font-poppins)] text-2xl font-bold">
          Projetos (portfólio)
        </h1>
        <ul className="mt-6 space-y-3">
          {projects.map((p) => (
            <li
              key={p.id}
              className="rounded-xl border border-border bg-surface-card p-4 text-sm"
            >
              <span className="font-semibold">{p.title}</span>
              <span className="text-muted"> — {p.category}</span>
              {!p.published && (
                <span className="ml-2 text-xs text-amber-600">(rascunho)</span>
              )}
            </li>
          ))}
          {projects.length === 0 && (
            <li className="text-muted">Nenhum projeto. Rode o seed do banco.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
