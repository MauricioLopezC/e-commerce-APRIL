import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import bcrypt from 'bcryptjs'

export async function POST(request, { params }) {
  const data = await request.json()
  //first check if user already exists in database
  const emailFound = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  })
  if (emailFound) {
    return NextResponse.json({ user: null, message: 'email already exists' }, { status: 400 })
  }

  //encrypt password
  //TODO: modificar newUser para no enviar la contra
  const hashedPassword = await bcrypt.hash(data.password, 10)
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword
    }
  })

  //create a cart for the new user 
  const newUserCart = await prisma.cart.create({
    data: {
      userId: newUser.id,
    }
  })

  return NextResponse.json({ user: newUser, cart: newUserCart, message: 'user created successfully' })
}
