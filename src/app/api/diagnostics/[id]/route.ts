import { getClassification } from "@/lib/diagnostics/analyzers/scoring";
import { serializeDiagnosticResult } from "@/lib/diagnostics/process";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Props = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Props) {
  const { id } = await params;

  try {
    const row = await prisma.digitalDiagnostic.findUnique({ where: { id } });
    if (!row) {
      return NextResponse.json({ error: "Diagnóstico não encontrado" }, { status: 404 });
    }

    if (row.status !== "completed") {
      return NextResponse.json(
        { error: "Diagnóstico ainda não concluído", status: row.status },
        { status: 409 },
      );
    }

    const base = serializeDiagnosticResult(row);
    const { classificationMessage } = getClassification(row.score ?? 0);

    return NextResponse.json({
      ...base,
      classificationMessage,
      foxScore: base?.foxScore ?? null,
      comparativeNote:
        (row.score ?? 0) >= 75
          ? "Sua empresa está acima da média de empresas competitivas na região (nota típica: 75+)."
          : `Empresas bem posicionadas digitalmente na sua região costumam ter nota acima de 75. Sua nota: ${row.score}/100.`,
    });
  } catch {
    return NextResponse.json({ error: "Erro ao buscar diagnóstico" }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();

  try {
    const row = await prisma.digitalDiagnostic.update({
      where: { id },
      data: {
        ...(typeof body.contacted === "boolean" ? { contacted: body.contacted } : {}),
        ...(typeof body.adminNotes === "string" ? { adminNotes: body.adminNotes } : {}),
      },
    });
    return NextResponse.json(row);
  } catch {
    return NextResponse.json({ error: "Falha ao atualizar" }, { status: 500 });
  }
}
