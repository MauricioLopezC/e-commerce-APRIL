import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"
export async function GET(request, { params }) {
  const productId = Number(params.productId)

  const stock = await prisma.stock.findUnique({
    where: {
      ProductId: productId
    }
  })

  return NextResponse.json(stock)
}
