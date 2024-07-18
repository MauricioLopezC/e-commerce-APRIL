'use client'
import ConfirmDialog from "@/app/products/[productsId]/ConfirmDialog"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CarritoButton({ productID, quantity, isLoggedIn, userID }) {
  let [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const addToCart = async (productId, userId, quantity) => {
    console.log("Agregaste al carritooooo")
    console.log(productId, userId, quantity)
    const res = await fetch(`http://localhost:3000/api/carrito`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productId,
        userId,
        quantity,
      }),
    })
    return res.json()
  }

  return (
    <>
      <button
        className='max-w-md w-full px-4 py-2 bg-black text-white mt-2'
        onClick={async () => {
          if (!isLoggedIn) {
            return alert("Debes iniciar sesion")
          } else {
            console.log(productID, userID, quantity)
            const res = await addToCart(productID, userID, quantity)
            if (res.error) {
              alert("Error el producto ya fue agregado")
            } else {
              console.log(res)
              setIsOpen(true)
              router.refresh()
            }
          }
        }}
      >
        Agregar al carrito
      </button>
      <ConfirmDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

