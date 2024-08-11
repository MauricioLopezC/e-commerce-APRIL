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

export async function DELETE(request, { params }) {
  const ReqUserId = Number(params.userId)
  console.log('userID', ReqUserId)

  try {

    const userCart = await prisma.cart.findUnique({
      where: {
        userId: ReqUserId
      }
    })

    const cartId = userCart.id
    console.log("CARTID", cartId)

    const deletedItems = await prisma.cartItem.deleteMany({
      where: {
        cartId: cartId
      }
    })

    return NextResponse.json(deletedItems)
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar los productos de carrito' })
  }

}
