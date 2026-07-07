import { isMailConfigured, sendDiagnosticReportEmail } from "@/lib/mail";
import { jsonArr } from "@/lib/diagnostics/process";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Props = { params: Promise<{ id: string }> };

export async function POST(_req: Request, { params }: Props) {
  const { id } = await params;

  try {
    const row = await prisma.digitalDiagnostic.findUnique({ where: { id } });
    if (!row) {
      return NextResponse.json({ error: "Diagnóstico não encontrado" }, { status: 404 });
    }

    if (row.status !== "completed" || row.score == null) {
      return NextResponse.json(
        { error: "Diagnóstico ainda não concluído", status: row.status },
        { status: 409 },
      );
    }

    if (!isMailConfigured()) {
      return NextResponse.json(
        { error: "Envio de e-mail não configurado no servidor." },
        { status: 503 },
      );
    }

    const result = await sendDiagnosticReportEmail({
      id: row.id,
      companyName: row.companyName,
      responsibleName: row.responsibleName,
      email: row.email,
      city: row.city,
      score: row.score,
      classification: row.classification ?? "—",
      strengths: jsonArr(row.strengthsJson),
      weaknesses: jsonArr(row.weaknessesJson),
      recommendations: jsonArr(row.recommendationsJson),
      commercialMessage: row.commercialMessage,
    });

    if (!result.ok) {
      return NextResponse.json({ error: "Não foi possível enviar o e-mail." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, email: row.email });
  } catch {
    return NextResponse.json({ error: "Erro ao enviar relatório" }, { status: 500 });
  }
}
