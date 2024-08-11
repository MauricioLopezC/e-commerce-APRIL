import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function GET(request) {
  console.log(request.url)
  const { searchParams } = new URL(request.url);

  const sex = searchParams.get('sex')

  if (sex) {
    const menProducts = await prisma.product.findMany({
      where: {
        OR: [
          { sex: sex },
          { sex: 'unisex' }
        ]
      },
      include: {
        images: true
      },
    })

    return NextResponse.json(menProducts)

  }

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

// export async function GET() {
//   const products = await prisma.product.findMany({
//     include: {
//       images: true
//     },
//   })
//   return NextResponse.json(products)
// }
