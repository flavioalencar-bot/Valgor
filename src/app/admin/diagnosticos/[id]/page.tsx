import { AdminNotesForm } from "@/components/admin/AdminDiagnosticDetail";
import { buildLeadWhatsAppUrl } from "@/lib/diagnostics/whatsapp";
import { jsonStringArray } from "@/lib/diagnostics/types";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function AdminDiagnosticDetailPage({ params }: Props) {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const { id } = await params;

  const row = await prisma.digitalDiagnostic.findUnique({ where: { id } }).catch(() => null);
  if (!row) notFound();

  const strengths = jsonStringArray(row.strengthsJson);
  const weaknesses = jsonStringArray(row.weaknessesJson);
  const recommendations = jsonStringArray(row.recommendationsJson);

  return (
    <div className="min-h-screen bg-surface-elevated pt-24 pb-16">
      <div className="mx-auto max-w-2xl px-5">
        <Link href="/admin/diagnosticos" className="text-sm text-fox-500 hover:underline">← Diagnósticos</Link>
        <h1 className="mt-4 font-[family-name:var(--font-poppins)] text-2xl font-bold">{row.companyName}</h1>
        <p className="mt-1 text-sm text-muted">
          {new Date(row.createdAt).toLocaleString("pt-BR")} · Status: {row.status}
          {row.score != null && <> · Nota <strong>{row.score}/100</strong> · {row.classification}</>}
        </p>

        <dl className="mt-8 space-y-4 rounded-2xl border border-border bg-surface-card p-6 text-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><dt className="text-xs uppercase text-muted">Responsável</dt><dd className="mt-1 font-medium">{row.responsibleName}</dd></div>
            <div><dt className="text-xs uppercase text-muted">WhatsApp</dt><dd className="mt-1">{row.whatsapp}</dd></div>
            <div><dt className="text-xs uppercase text-muted">E-mail</dt><dd className="mt-1">{row.email}</dd></div>
            <div><dt className="text-xs uppercase text-muted">Cidade</dt><dd className="mt-1">{row.city}</dd></div>
            <div><dt className="text-xs uppercase text-muted">Segmento</dt><dd className="mt-1">{row.segment ?? "—"}</dd></div>
            <div><dt className="text-xs uppercase text-muted">Site</dt><dd className="mt-1 break-all">{row.websiteUrl ?? "—"}</dd></div>
            <div><dt className="text-xs uppercase text-muted">Instagram</dt><dd className="mt-1">{row.instagramUrl ?? "—"}</dd></div>
            <div><dt className="text-xs uppercase text-muted">Google Business</dt><dd className="mt-1 break-all">{row.googleBusinessUrl ?? "—"}</dd></div>
          </div>
          {row.score != null && (
            <div className="grid grid-cols-3 gap-2 border-t border-border pt-4 text-xs">
              <div>Perf: {row.performanceScore}</div>
              <div>SEO: {row.seoScore}</div>
              <div>Seg: {row.securityScore}</div>
              <div>Resp: {row.responsiveScore}</div>
              <div>Conv: {row.conversionScore}</div>
              <div>Local: {row.localPresenceScore}</div>
              <div>Social: {row.socialScore}</div>
              <div>UX: {row.uxScore}</div>
              <div>Aut: {row.authorityScore}</div>
            </div>
          )}
        </dl>

        {strengths.length > 0 && (
          <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
            <h2 className="text-sm font-semibold text-emerald-700">Pontos fortes</h2>
            <ul className="mt-2 list-inside list-disc text-sm text-muted">{strengths.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        )}
        {weaknesses.length > 0 && (
          <div className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
            <h2 className="text-sm font-semibold text-amber-700">Melhorias</h2>
            <ul className="mt-2 list-inside list-disc text-sm text-muted">{weaknesses.map((w) => <li key={w}>{w}</li>)}</ul>
          </div>
        )}
        {recommendations.length > 0 && (
          <div className="mt-4 rounded-2xl border border-border p-5">
            <h2 className="text-sm font-semibold">Recomendações</h2>
            <ul className="mt-2 list-inside list-disc text-sm text-muted">{recommendations.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
        )}

        {row.commercialMessage && (
          <p className="mt-4 text-sm text-muted">{row.commercialMessage}</p>
        )}

        <AdminNotesForm id={row.id} contacted={row.contacted} adminNotes={row.adminNotes ?? ""} />

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={buildLeadWhatsAppUrl(row.whatsapp, row.companyName)} target="_blank" rel="noopener noreferrer"
            className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">Abrir WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
