import { isAdminAuthenticated } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Props = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }
  const { id } = await params;
  const data = await req.json();
  const project = await prisma.project.update({ where: { id }, data });
  return NextResponse.json(project);
}

export async function DELETE(_req: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }
  const { id } = await params;
  await prisma.project.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
