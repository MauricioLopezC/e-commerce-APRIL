import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/credentials'
import { prisma } from "./libs/prisma"
import bcrypt from 'bcryptjs'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        //logic to find mi user in database
        console.log(credentials)

        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!userFound) {
          throw new Error("User not found")
        }

        const matchPass = await bcrypt.compare(credentials.password, userFound.password)
        if (!matchPass) {
          throw new Error("Passwords do no match ")
        }

        return {
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    },
  }
})
