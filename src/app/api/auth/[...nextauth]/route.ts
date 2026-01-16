// import { authOptions } from "@/auth";
// import NextAuth from "next-auth";

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


import NextAuth from "next-auth"
import { authOptions } from "@/auth"
import type { NextRequest } from "next/server"

// This wrapper makes NextAuth compatible with App Router
const handler = async (req: NextRequest) => {
  return await NextAuth(authOptions) 
}

// Export GET and POST correctly
export const GET = handler
export const POST = handler
