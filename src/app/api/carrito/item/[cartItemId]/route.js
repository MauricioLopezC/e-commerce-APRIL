import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function PATCH(request, { params }) {
  console.log("REQUEST +++++++++++++++++++++++++")
  const data = await request.json()
  console.log("DATAAA", data)
  console.log("paramasss", params)

  const cartItemId = Number(params.cartItemId)
  const quantity = Number(data.quantity)


  console.log(cartItemId, quantity)

  const updatedCartItem = await prisma.cartItem.update({
    where: {
      id: cartItemId
    },
    data: {
      quantity: quantity
    }
  })


  return NextResponse.json(updatedCartItem)
}

export async function DELETE(request, { params }) {
  const cartItemId = Number(params.cartItemId)

  console.log(cartItemId)
  const deletedItem = await prisma.cartItem.delete({
    where: {
      id: cartItemId
    }
  })
  return NextResponse.json({ message: `Producto con id:${deletedItem.productId} eliminando del carrito` })
}
