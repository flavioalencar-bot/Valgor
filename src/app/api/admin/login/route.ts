import { ADMIN_COOKIE, createAdminToken, isValidAdminPassword } from "@/lib/admin/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = (await req.json()) as { password?: string };
  if (!password || !isValidAdminPassword(password)) {
    return NextResponse.json({ error: "Senha inválida" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, createAdminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
