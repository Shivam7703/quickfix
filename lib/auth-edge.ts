import { jwtVerify } from "jose";

export const COOKIE = "admin_token";

export async function verifyToken(token?: string) {
  if (!token) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
    return true;
  } catch {
    return false;
  }
}