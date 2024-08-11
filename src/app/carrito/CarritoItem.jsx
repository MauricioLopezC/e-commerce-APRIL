'use client'
import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { useRouter } from "next/navigation"

function CarritoItem({ productName, imgSrc, productPrice, productQuantity, cartItemId }) {
  const [cantidad, setCantidad] = useState(productQuantity)
  const router = useRouter()

  const editQuantity = async (quantity, cartItemId) => {
    const res = await fetch(`http://localhost:3000/api/carrito/item/${cartItemId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        quantity,
      }),
    })
    return res.json()
  }

  const deleteCarritoItem = async (cartItemId) => {
    const res = await fetch(`http://localhost:3000/api/carrito/item/${cartItemId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    return res.json()
  }

  return (
    <div className='flex border-t-2 border-b-2 max-w-fit'>
      <div className='w-48'>
        <img src={imgSrc} alt="" className='object-cover h-48 w-48' />
      </div>
      <div className='w-48 flex flex-col justify-around items-center'>
        <h1 className="font-bold text-lg">{productName}</h1>
        <div className="p-2 border border-black flex justify-between">
          <button
            className="px-2 py-1"
            onClick={async () => {
              if (cantidad > 0) {
                const nextCantidad = cantidad - 1
                setCantidad(nextCantidad)
                const res = await editQuantity(nextCantidad, cartItemId)
                console.log('RES', res)
              }
            }}>
            <MinusIcon className="h-4 w-4 hover:text-red-500" />
          </button>
          <h2 className="px-2">{cantidad}</h2>
          <button
            className="px-2 py-1"
            onClick={async () => {
              if (cantidad < 10) {
                const nextCantidad = cantidad + 1
                setCantidad(nextCantidad)
                const res = await editQuantity(nextCantidad, cartItemId)
                console.log('RES', res)
              }
            }}>
            <PlusIcon className="h-4 w-4 hover:text-green-700" />
          </button>
        </div>

        <h2 className="font-normal text-gray-600 mb-3">{productPrice} ARS</h2>
      </div>
      <div>
        <button onClick={async () => {
          const res = await deleteCarritoItem(cartItemId)
          console.log("DEL RES", res)
          router.refresh()
        }}>
          <XMarkIcon className="h-5 w-5 mt-2 mr-2 hover:text-red-600" />
        </button>
      </div>
    </div>
  )
}

export default CarritoItem
