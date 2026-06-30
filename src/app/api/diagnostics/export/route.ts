import { isAdminAuthenticated } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function csvEscape(val: string | null | undefined): string {
  const s = String(val ?? "");
  if (s.includes('"') || s.includes(",") || s.includes("\n")) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const rows = await prisma.digitalDiagnostic.findMany({ orderBy: { createdAt: "desc" } });
    const headers = [
      "Data", "Empresa", "Responsável", "WhatsApp", "E-mail", "Cidade", "Segmento",
      "Status", "Nota", "Classificação", "Site", "Instagram", "Google Business", "Contatado",
    ];
    const lines = [
      headers.join(","),
      ...rows.map((r) =>
        [
          r.createdAt.toISOString(),
          csvEscape(r.companyName),
          csvEscape(r.responsibleName),
          csvEscape(r.whatsapp),
          csvEscape(r.email),
          csvEscape(r.city),
          csvEscape(r.segment),
          r.status,
          r.score ?? "",
          csvEscape(r.classification),
          csvEscape(r.websiteUrl),
          csvEscape(r.instagramUrl),
          csvEscape(r.googleBusinessUrl),
          r.contacted ? "sim" : "nao",
        ].join(","),
      ),
    ];
    return new NextResponse("\uFEFF" + lines.join("\n"), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="diagnosticos-fox-it-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Banco indisponível" }, { status: 503 });
  }
}
