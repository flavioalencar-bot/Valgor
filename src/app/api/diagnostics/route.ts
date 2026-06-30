import { isAdminAuthenticated } from "@/lib/admin/auth";
import { enqueueDigitalDiagnostic } from "@/lib/diagnostics/queue";
import { diagnosticFormSchema, normalizeDiagnosticPayload } from "@/lib/diagnostics/validators";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

function clientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    null
  );
}

export async function POST(request: Request) {
  try {
    if (!("digitalDiagnostic" in prisma)) {
      throw new Error(
        "Prisma Client desatualizado. Pare o servidor, rode npx prisma generate && npx prisma db push e inicie npm run dev novamente.",
      );
    }

    const body = await request.json();
    const parsed = diagnosticFormSchema.parse(body);
    const data = normalizeDiagnosticPayload(parsed);

    const row = await prisma.digitalDiagnostic.create({
      data: {
        companyName: data.companyName,
        responsibleName: data.responsibleName,
        email: data.email,
        whatsapp: data.whatsapp,
        city: data.city,
        segment: data.segment ?? null,
        websiteUrl: data.websiteUrl ?? null,
        instagramUrl: data.instagramUrl ?? null,
        googleBusinessUrl: data.googleBusinessUrl ?? null,
        status: "processing",
        progress: 0,
        consentAccepted: true,
        consentAcceptedAt: new Date(),
        ipAddress: clientIp(request),
      },
    });

    try {
      await enqueueDigitalDiagnostic(row.id);
    } catch (enqueueErr) {
      console.error("[diagnostics] enqueue failed, running inline:", enqueueErr);
      const { processDigitalDiagnostic } = await import("@/lib/diagnostics/process");
      void processDigitalDiagnostic(row.id).catch(console.error);
    }

    return NextResponse.json({ id: row.id, status: "processing" }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const msg = err.issues[0]?.message ?? "Preencha os campos obrigatórios para gerar seu diagnóstico.";
      return NextResponse.json({ error: msg }, { status: 400 });
    }
    console.error("[diagnostics] POST failed:", err);
    const detail =
      process.env.NODE_ENV === "development" && err instanceof Error ? err.message : undefined;
    return NextResponse.json(
      {
        error: detail?.includes("connect")
          ? "Banco de dados indisponível. Verifique se o PostgreSQL está rodando (docker compose up -d db)."
          : detail?.includes("Unknown argument") || detail?.includes("column")
            ? "Schema desatualizado. Rode npx prisma db push e reinicie o servidor (npm run dev)."
            : "Não foi possível iniciar o diagnóstico.",
        ...(detail ? { detail } : {}),
      },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const city = searchParams.get("city");
  const segment = searchParams.get("segment");
  const minScore = searchParams.get("minScore");
  const maxScore = searchParams.get("maxScore");

  try {
    const rows = await prisma.digitalDiagnostic.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(city ? { city: { contains: city, mode: "insensitive" } } : {}),
        ...(segment ? { segment: { contains: segment, mode: "insensitive" } } : {}),
        ...(minScore ? { score: { gte: Number(minScore) } } : {}),
        ...(maxScore ? { score: { lte: Number(maxScore) } } : {}),
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Banco indisponível" }, { status: 503 });
  }
}
