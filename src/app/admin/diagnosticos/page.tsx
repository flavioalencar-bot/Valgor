import { AdminDiagnosticsPanel, ExportCsvButton } from "@/components/admin/AdminDiagnosticsPanel";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata = { title: "Admin — Diagnósticos", robots: { index: false } };

type Props = { searchParams: Promise<Record<string, string | undefined>> };

export default async function AdminDiagnosticsPage({ searchParams }: Props) {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  const sp = await searchParams;
  const status = sp.status;
  const city = sp.city;
  const segment = sp.segment;
  const minScore = sp.minScore ? Number(sp.minScore) : undefined;

  let rows: Awaited<ReturnType<typeof prisma.digitalDiagnostic.findMany>> = [];
  try {
    rows = await prisma.digitalDiagnostic.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(city ? { city: { contains: city, mode: "insensitive" } } : {}),
        ...(segment ? { segment: { contains: segment, mode: "insensitive" } } : {}),
        ...(minScore !== undefined && !Number.isNaN(minScore) ? { score: { gte: minScore } } : {}),
      },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    /* */
  }

  const serialized = rows.map((r) => ({
    id: r.id,
    companyName: r.companyName,
    responsibleName: r.responsibleName,
    email: r.email,
    whatsapp: r.whatsapp,
    city: r.city,
    segment: r.segment,
    websiteUrl: r.websiteUrl,
    instagramUrl: r.instagramUrl,
    status: r.status,
    score: r.score,
    classification: r.classification,
    contacted: r.contacted,
    createdAt: r.createdAt.toISOString(),
  }));

  return (
    <div className="min-h-screen bg-surface-elevated pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-5">
        <Link href="/admin" className="text-sm text-fox-500 hover:underline">← Dashboard</Link>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold">Diagnósticos digitais</h1>
          <ExportCsvButton />
        </div>
        <Suspense fallback={<p className="mt-6 text-muted">Carregando...</p>}>
          <AdminDiagnosticsPanel rows={serialized} />
        </Suspense>
      </div>
    </div>
  );
}
