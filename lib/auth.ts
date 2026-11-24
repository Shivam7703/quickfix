import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const key = () => new TextEncoder().encode(process.env.JWT_SECRET!);
export const COOKIE = "admin_token";

export async function createToken() {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(key());
}

export async function verifyToken(token?: string) {
  if (!token) return false;
  try {
    await jwtVerify(token, key());
    return true;
  } catch {
    return false;
  }
}

export async function isAdmin() {
  const store = await cookies();
  return verifyToken(store.get(COOKIE)?.value);
}