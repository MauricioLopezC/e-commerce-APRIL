'use client'
import CarritoItem from "./CarritoItem"
import { useProductStore } from '@/store/productStore'

function CarritoList() {
  const carrito = useProductStore((state) => state.carrito)
  return (
    <div>
      <h1 className='font-bold text-lg flex justify-center lg:justify-start'>PRODUCTOS</h1>
      <div className='flex flex-col gap-4 items-center'>
        {carrito.map((item) => (
          <CarritoItem producto={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default CarritoList
