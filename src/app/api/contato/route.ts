import { NextResponse } from "next/server";
import { z } from "zod";
import { notifyTeamContactMessageAsync, sendContactConfirmation } from "@/lib/mail";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        subject: data.subject,
        message: data.message,
      },
    });

    notifyTeamContactMessageAsync(data);
    sendContactConfirmation(data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const msg = err.issues[0]?.message ?? "Verifique os campos do formulário.";
      return NextResponse.json({ error: msg }, { status: 400 });
    }
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }
}
