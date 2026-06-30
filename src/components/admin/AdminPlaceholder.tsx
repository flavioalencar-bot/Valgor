import { isAdminAuthenticated } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function AdminPlaceholder({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  let count = 0;
  try {
    if (path === "testimonials") count = await prisma.testimonial.count();
    if (path === "articles") count = await prisma.article.count();
    if (path === "messages") count = await prisma.contactMessage.count();
  } catch {
    /* */
  }
  return (
    <div className="min-h-screen bg-surface-elevated pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-5">
        <Link href="/admin" className="text-sm text-valgor-500 hover:underline">
          ← Dashboard
        </Link>
        <h1 className="mt-4 font-[family-name:var(--font-poppins)] text-2xl font-bold">
          {title}
        </h1>
        <p className="mt-4 text-muted">{count} registro(s) no banco.</p>
        <p className="mt-2 text-sm text-subtle">
          CRUD completo via API admin — expandir formulários conforme necessidade.
        </p>
      </div>
    </div>
  );
}
