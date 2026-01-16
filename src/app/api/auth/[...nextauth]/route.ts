// import { authOptions } from "@/auth";
// import NextAuth from "next-auth";

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


import NextAuth from "next-auth"
import { authOptions } from "@/auth"
import { NextRequest, NextResponse } from "next/server"

// export async function GET(req: NextRequest) {
//   const res = await NextAuth(authOptions)
//   // Convert the NextAuth result into a NextResponse
//   return new NextResponse(res.body, { status: res.status, headers: res.headers })
// }

// export async function POST(req: NextRequest) {
//   const res = await NextAuth(authOptions)
//   return new NextResponse(res.body, { status: res.status, headers: res.headers })
// }

export const GET = (req: NextRequest) => NextAuth(authOptions)
export const POST = (req: NextRequest) => NextAuth(authOptions)
