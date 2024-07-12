import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function GET() {
  const products = await prisma.product.findMany({
    include: {
      images: true
    },
  })
  return NextResponse.json(products)
}

export async function POST(request) {
  const data = await request.json() //aqui vemos el request body
  console.log(data)
  // prisma.product.create({
  //   data: {
  //     name: 
  //   }
  // })
  return NextResponse.json("enviado")
}

