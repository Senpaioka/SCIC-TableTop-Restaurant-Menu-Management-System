import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const privateRoutes = ["/dashboard"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Get the token and explicitly type it
  const token = await getToken({
    req,
    secret: process.env.SECRET,
  }) as { role?: string } | null;

  const isLoggedIn = !!token;
  const role = token?.role;

  // Protect private routes
  if (privateRoutes.some(route => pathname.startsWith(route))) {
    if (!isLoggedIn || !["admin", "staff"].includes(role ?? "")) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
