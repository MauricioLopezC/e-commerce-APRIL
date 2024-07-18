'use client'
import CarritoButton from '@/components/CarritoButton'
import CantidadSelect from './Select'
import { HeartIcon } from "@heroicons/react/24/outline"
import { useState } from 'react'

function ProductOptions({ productId, isLoggedIn, userId }) {
  const [cantidad, setCantidad] = useState(1)
  return (
    <>
      <div className="flex flex-row gap-2 mt-2">
        <div className="basis-5/6 border border-black">
          <CantidadSelect setValue={setCantidad} />
        </div>
        <button className="border border-black basis-1/6 flex justify-center py-1 px-1">
          <HeartIcon className="w-6 h-6" />
        </button>
      </div>
      <CarritoButton productID={productId} quantity={cantidad} isLoggedIn={isLoggedIn} userID={userId} />
    </>
  )
}

export default ProductOptions
