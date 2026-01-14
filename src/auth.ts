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
          credentials.email === "test@mail.com" &&
          credentials.password === "1234"
        ) {
          return {
            id: "1",
            name: "Test User",
            email: "test@mail.com",
            role: "admin",
          }
        }

        return null
      },
    }),

  ],

  pages: {
    signIn: "/login",
  },
  
})
