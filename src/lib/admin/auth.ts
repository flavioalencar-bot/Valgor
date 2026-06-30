import { cookies } from "next/headers";

export const ADMIN_COOKIE = "fox_admin_token";

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? "foxit-admin-change-me";
}

export function isValidAdminPassword(password: string) {
  return password === getAdminPassword();
}

export function createAdminToken() {
  return Buffer.from(`fox-it:${getAdminPassword()}`).toString("base64url");
}

export function verifyAdminToken(token: string | undefined) {
  if (!token) return false;
  return token === createAdminToken();
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  const token = jar.get(ADMIN_COOKIE)?.value;
  return verifyAdminToken(token);
}
