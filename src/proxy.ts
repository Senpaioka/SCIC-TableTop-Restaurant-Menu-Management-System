import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const privateRoutes = ["/dashboard",];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const response = NextResponse.next();

  const token = await getToken({
    req,
    secret: process.env.NEXT_AUTH_SECRET,
  });

  const isLoggedIn = !!token;
  const role = token?.role; 

   if (privateRoutes.some(route => pathname.startsWith(route))) {
    if (!isLoggedIn || (role !== "admin" && role !== "staff")) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};