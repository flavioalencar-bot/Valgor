import { isAdminAuthenticated } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

async function guard() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await guard();
  if (denied) return denied;
  const projects = await prisma.project.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const denied = await guard();
  if (denied) return denied;
  const data = await req.json();
  const project = await prisma.project.create({ data });
  return NextResponse.json(project, { status: 201 });
}
