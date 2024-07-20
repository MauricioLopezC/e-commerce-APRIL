import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";
export async function POST(request, { params }) {
  const data = await request.json()
  const word = data.word.toLowerCase()
  console.log("DATA ==> ", data)
  console.log("WORD ==>", word)

  const result = await prisma.product.findMany({
    where: {
      name: {
        contains: word
      }
    },
    include: {
      images: true
    }
  })

  return NextResponse.json(result)
}
