import NextAuth from "next-auth"
import { prisma } from "@/libs/prisma"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'

const authConfig = {
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
          console.log("******************not user fond")
          throw new Error("User not found")
        }

        const matchPass = await bcrypt.compare(credentials.password, userFound.password)
        if (!matchPass) {
          throw new Error("Passwords do no match ")
        }

        return {
          id: userFound.id,
          email: userFound.email,
        }

      }
    })
  ],
}

const handler = NextAuth({
  pages: {
    signIn: "/login"
  },
  ...authConfig,
})

export { handler as GET, handler as POST }
