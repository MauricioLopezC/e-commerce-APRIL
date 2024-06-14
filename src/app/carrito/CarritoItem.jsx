'use client'
import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState, useEffect } from "react"
import { useProductStore } from "@/store/productStore"


function CarritoItem({ producto }) {
  const carrito = useProductStore((store) => store.carrito)
  const updateCarrito = useProductStore((store) => store.updateCarrito)
  const [cantidad, setCantidad] = useState(producto.cantidad)

  useEffect(() => {
    const updatedCarrito = carrito.map((item) => {
      if (item.id === producto.id) {
        return { ...producto, cantidad: cantidad }
      } else {
        return item
      }
    })
    updateCarrito(updatedCarrito)
    console.log(carrito)
  }, [cantidad])

  return (
    <div className='flex border-t-2 border-b-2 max-w-fit'>
      <div className='w-48'>
        <img src={producto.imgSrc} alt="" className='object-cover h-48 w-48' />
      </div>
      <div className='w-48 flex flex-col justify-around items-center'>
        <h1 className="font-bold text-lg">{producto.Nombre}</h1>
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

        <h2 className="font-normal text-gray-600 mb-3">{producto.price} USD</h2>
      </div>
      <div>
        <button onClick={() => {
          const filtered = carrito.filter((item) => item.id !== producto.id)
          updateCarrito(filtered)
        }}>
          <XMarkIcon className="h-5 w-5 mt-2 mr-2 hover:text-red-600" />
        </button>
      </div>
    </div>
  )
}

export default CarritoItem
