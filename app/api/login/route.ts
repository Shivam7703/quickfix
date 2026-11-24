import { NextResponse } from "next/server";
import { createToken, COOKIE } from "@/lib/auth";

export async function POST(req: Request) {
  const { secret } = await req.json();
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, await createToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}