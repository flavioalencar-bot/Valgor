import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Props = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Props) {
  const { id } = await params;

  try {
    const row = await prisma.digitalDiagnostic.findUnique({
      where: { id },
      select: { id: true, status: true, progress: true, processingStep: true, errorMessage: true },
    });

    if (!row) {
      return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
    }

    return NextResponse.json({
      id: row.id,
      status: row.status,
      progress: row.progress,
      processingStep: row.processingStep,
      errorMessage: row.errorMessage,
    });
  } catch {
    return NextResponse.json({ error: "Erro" }, { status: 500 });
  }
}
