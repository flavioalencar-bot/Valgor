"use client";

import { buildLeadWhatsAppUrl } from "@/lib/diagnostics/whatsapp";
import { jsonStringArray } from "@/lib/diagnostics/types";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export type AdminDiagnosticRow = {
  id: string;
  companyName: string;
  responsibleName: string;
  email: string;
  whatsapp: string;
  city: string;
  segment: string | null;
  websiteUrl: string | null;
  instagramUrl: string | null;
  status: string;
  score: number | null;
  classification: string | null;
  contacted: boolean;
  createdAt: string;
};

export function AdminDiagnosticsPanel({ rows }: { rows: AdminDiagnosticRow[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState<string | null>(null);

  const status = searchParams.get("status") ?? "";
  const city = searchParams.get("city") ?? "";
  const segment = searchParams.get("segment") ?? "";

  function applyFilters(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const p = new URLSearchParams();
    ["status", "city", "segment", "minScore"].forEach((k) => {
      const v = String(fd.get(k) ?? "").trim();
      if (v) p.set(k, v);
    });
    router.push(`/admin/diagnosticos?${p.toString()}`);
  }

  async function copyEmail(email: string, id: string) {
    await navigator.clipboard.writeText(email);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }

  async function reprocess(id: string) {
    await fetch(`/api/diagnostics/${id}/reprocess`, { method: "POST" });
    router.refresh();
  }

  async function toggleContacted(id: string, contacted: boolean) {
    await fetch(`/api/diagnostics/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contacted }),
    });
    router.refresh();
  }

  return (
    <>
      <form onSubmit={applyFilters} className="mt-6 flex flex-wrap gap-3 rounded-xl border border-border bg-surface-card p-4">
        <select name="status" defaultValue={status} className="rounded-lg border border-border bg-surface px-3 py-2 text-sm">
          <option value="">Todos status</option>
          <option value="pending">pending</option>
          <option value="processing">processing</option>
          <option value="completed">completed</option>
          <option value="failed">failed</option>
        </select>
        <input name="city" defaultValue={city} placeholder="Cidade" className="rounded-lg border border-border bg-surface px-3 py-2 text-sm" />
        <input name="segment" defaultValue={segment} placeholder="Segmento" className="rounded-lg border border-border bg-surface px-3 py-2 text-sm" />
        <input name="minScore" type="number" min={0} max={100} placeholder="Nota mín." className="w-24 rounded-lg border border-border bg-surface px-3 py-2 text-sm" />
        <button type="submit" className="rounded-lg bg-fox-500 px-4 py-2 text-sm font-semibold text-white">Filtrar</button>
      </form>

      <div className="mt-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[1000px] text-left text-sm">
          <thead className="border-b border-border bg-muted-bg/50 text-xs uppercase text-muted">
            <tr>
              <th className="px-4 py-3">Data</th>
              <th className="px-4 py-3">Empresa</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Nota</th>
              <th className="px-4 py-3">Cidade</th>
              <th className="px-4 py-3">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((r) => (
              <tr key={r.id} className="bg-surface-card">
                <td className="whitespace-nowrap px-4 py-3 text-muted">{new Date(r.createdAt).toLocaleString("pt-BR")}</td>
                <td className="px-4 py-3">
                  <span className="font-medium">{r.companyName}</span>
                  {r.contacted && <span className="ml-2 text-xs text-emerald-600">✓ contatado</span>}
                </td>
                <td className="px-4 py-3 text-muted">{r.status}</td>
                <td className="px-4 py-3 font-bold tabular-nums">{r.score ?? "—"}</td>
                <td className="px-4 py-3 text-muted">{r.city}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Link href={`/admin/diagnosticos/${r.id}`} className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium hover:border-fox-500/40">Detalhe</Link>
                    <a href={buildLeadWhatsAppUrl(r.whatsapp, r.companyName)} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">WhatsApp</a>
                    <button type="button" onClick={() => copyEmail(r.email, r.id)} className="rounded-lg border border-border px-2.5 py-1 text-xs">{copied === r.id ? "Copiado!" : "E-mail"}</button>
                    <button type="button" onClick={() => reprocess(r.id)} className="rounded-lg border border-border px-2.5 py-1 text-xs">Reprocessar</button>
                    <button type="button" onClick={() => toggleContacted(r.id, !r.contacted)} className="rounded-lg border border-border px-2.5 py-1 text-xs">{r.contacted ? "Desmarcar" : "Contatado"}</button>
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-muted">Nenhum diagnóstico.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function ExportCsvButton() {
  return (
    <a href="/api/diagnostics/export" className="inline-flex rounded-xl border border-border bg-surface-card px-4 py-2 text-sm font-semibold hover:border-fox-500/30">
      Exportar CSV
    </a>
  );
}

export { jsonStringArray };
