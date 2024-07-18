import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const ReqUserId = Number(params.userId)
  const ReqCartId = Number(params.cartId)
  const carrito = await prisma.cart.findUnique({
    where: {
      userId: ReqUserId
    },
    include: {
      CartItem: {
        include: {
          product: {
            include: {
              images: true
            }
          },
        }
      }
    }
  })
  return NextResponse.json(carrito)
}

