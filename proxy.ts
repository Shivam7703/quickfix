import { NextResponse, type NextRequest } from "next/server";
import { verifyToken, COOKIE } from "@/lib/auth-edge";

export async function proxy(req: NextRequest) {
  const ok = await verifyToken(req.cookies.get(COOKIE)?.value);
  if (!ok) return NextResponse.redirect(new URL("/admin/login", req.url));
  return NextResponse.next();
}

export const config = { matcher: ["/admin/dashboard/:path*"] };