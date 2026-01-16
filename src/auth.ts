import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }


        // Example: mock user
        if (
          credentials.email === "staff@mail.com" &&
          credentials.password === "1234"
        ) {
          return {
            id: "1000",
            name: "Staff",
            email: "staff@mail.com",
            role: "staff",
          }
        }

        if (
          credentials.email === "admin@mail.com" &&
          credentials.password === "1234"
        ) {
          return {
            id: "1101",
            name: "Admin",
            email: "admin@mail.com",
            role: "admin",
          }
        }

        if (
          credentials.email === "customer@mail.com" &&
          credentials.password === "1234"
        ) {
          return {
            id: "1102",
            name: "Customer",
            email: "customer@mail.com",
            role: "customer",
          }
        }

        return null
      },
    }),

  ],

  callbacks: {
    async session({ session, token }) {
      const allowedRoles = ["admin", "staff", "customer"] as const

      if (token.role && allowedRoles.includes(token.role as any)) {
        session.user.role = token.role as typeof allowedRoles[number]
      }

      return session
    },

    async jwt({ token, user }) {
      if (user && (user as any).role) {
        token.role = (user as any).role as "admin" | "staff" | "customer"
      }
      return token
    },
  },

  pages: {
    signIn: "/login",
  },
  
})
