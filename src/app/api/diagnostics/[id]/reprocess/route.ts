import { isAdminAuthenticated } from "@/lib/admin/auth";
import { enqueueDigitalDiagnostic } from "@/lib/diagnostics/queue";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Props = { params: Promise<{ id: string }> };

export async function POST(_req: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.digitalDiagnostic.update({
      where: { id },
      data: {
        status: "processing",
        progress: 0,
        score: null,
        classification: null,
        errorMessage: null,
        completedAt: null,
      },
    });

    await enqueueDigitalDiagnostic(id);
    return NextResponse.json({ ok: true, status: "processing" });
  } catch {
    return NextResponse.json({ error: "Falha ao reprocessar" }, { status: 500 });
  }
}
