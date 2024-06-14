'use client'
import ConfirmDialog from "@/app/products/[productsId]/ConfirmDialog"
import { useProductStore } from "@/store/productStore"
import { useState } from "react"

function CarritoButton({ producto, cantidad }) {
  const carrito = useProductStore((state) => state.carrito)
  const updateCarrito = useProductStore((state) => state.updateCarrito)

  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className='max-w-md w-full px-4 py-2 bg-black text-white mt-2'
        onClick={() => {
          let band = false

          carrito.forEach((item) => {
            if (item.id === producto.id) {
              band = true
            }
          })

          if (band) {
            const updatedCarrito = carrito.map((item) => {
              if (item.id === producto.id) {
                return { ...producto, cantidad: cantidad }
              } else {
                return item
              }
            })
            updateCarrito(updatedCarrito)
          } else {
            updateCarrito([...carrito, { ...producto, cantidad: cantidad }])
          }

          //confirm dilog
          setIsOpen(true)
        }}
      >
        Agregar al carrito
      </button>
      <ConfirmDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default CarritoButton
