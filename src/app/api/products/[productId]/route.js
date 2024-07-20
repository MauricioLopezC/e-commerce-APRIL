import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = Number(params.productId)
  const product = await prisma.product.findUnique({
    where: {
      id: id
    },
    include: {
      images: true,
      stock: true
    },
  })

  return NextResponse.json(product)
}

// export function PUT(request, { params }) {
//   return NextResponse.json(`Actulizando producto  con id: ${params.productId}`)
// }

// de momento yo no quiero eliminar mis productos de la base de datos chaval
// export function DELETE(request, { params }) {
//   return NextResponse.json(`Eliminando producto con id: ${params.productId}`)
// }
