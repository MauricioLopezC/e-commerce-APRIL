'use client'
import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { useProductStore } from "@/store/productStore"


function CarritoItem({ img, name, price, id }) {
  const carrito = useProductStore((store) => store.carrito)
  const updateCarrito = useProductStore((store) => store.updateCarrito)
  const [cantidad, setCantidad] = useState(0)

  return (
    <div className='flex border-t-2 border-b-2 max-w-fit'>
      <div className='w-48'>
        <img src={`/${img}`} alt="" className='object-cover h-48 w-48' />
      </div>
      <div className='w-48 flex flex-col justify-around items-center'>
        <h1 className="font-bold text-lg">{name}</h1>
        <div className="p-2 border border-black flex justify-between">
          <button
            className="px-2 py-1"
            onClick={() => {
              if (cantidad > 0) {
                setCantidad(cantidad => cantidad - 1)
              }
            }}>
            <MinusIcon className="h-4 w-4" />
          </button>
          <h2 className="px-2">{cantidad}</h2>
          <button
            className="px-2 py-1"
            onClick={() => {
              setCantidad(cantidad => cantidad + 1)
            }}>
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>

        <h2 className="font-normal text-gray-600 mb-3">{price} USD</h2>
      </div>
      <div>
        <button onClick={() => {
          const filtered = carrito.filter((item) => item.id !== id) 
          updateCarrito(filtered)
        }}>
          <XMarkIcon className="h-4 w-4 mt-2 mr-2" />
        </button>
      </div>
    </div>
  )
}

export default CarritoItem
