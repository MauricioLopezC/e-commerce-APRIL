import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function POST(request, { params }) {
  const data = await request.json()
  const ReqProductId = Number(data.productId)
  const ReqUserId = Number(data.userId)
  const ReqQuantity = Number(data.quantity)

  console.log(data)
  console.log(ReqProductId, ReqUserId, ReqQuantity)

  const stock = await prisma.stock.findUnique({
    where: {
      ProductId: ReqProductId
    }
  })

  if (ReqQuantity > stock.stock) {
    return NextResponse.json({ error: "No hay stock suficiente" })
  }

  const cart = await prisma.cart.findUnique({
    where: {
      userId: ReqUserId
    },
    include: {
      CartItem: true
    }
  })

  if (cart.CartItem.some(item => item.productId === ReqProductId)) {
    console.log("error ya esta en el carrito")
    return NextResponse.json({ error: "El producto ya fue agregado" })
  }

  const cartItem = await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId: ReqProductId,
      quantity: ReqQuantity
    }
  })

  const actualStock = stock.stock

  // const newStock = await prisma.stock.update({
  //   where: {
  //     ProductId: ReqProductId
  //   },
  //   data: {
  //     stock: actualStock - ReqQuantity
  //   }
  // })

  return NextResponse.json(cartItem)
}

