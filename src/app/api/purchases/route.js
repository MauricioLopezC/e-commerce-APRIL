import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function PATCH(request, { params }) {
  const data = await request.json()
  const cartItems = data.cartItems //array con los elementos productos del carrito
  //del formato [{id, cartId, productId, quantity}, {id, cartId, productId, quantity}, ... ]
  try {
    cartItems.forEach(async (element) => {
      const ReqProductId = Number(element.productId)
      const ReqQuantity = Number(element.quantity)


      const actualStockCart = await prisma.stock.findUnique({
        where: {
          ProductId: ReqProductId
        },
        select: {
          stock: true
        }
      })

      const actualStock = actualStockCart.stock
      console.log("AS --> ", actualStock)
      console.log("NS ===> ", actualStock - ReqQuantity)

      const newStock = await prisma.stock.update({
        where: {
          ProductId: ReqProductId
        },
        data: {
          stock: actualStock - ReqQuantity
        }
      })
    });

    return NextResponse.json({ ok: true })

  } catch (error) {
    return NextResponse.json({ error: error })

  }



}
