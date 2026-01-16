import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
        id?: number | null
      name?: string | null
      email?: string | null
      role?: "admin" | "staff" | "customer"
    }
  }
}
