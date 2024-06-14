'use client'
import { useProductStore } from "@/store/productStore"
import CarritoItem from "../carrito/CarritoItem"
//en los componentes cliente da un error al solo poner el nombre de la imagen que se encuentra en static
//en vez de eso hay que poner con backticks indicando `/${imgSrc}`

function PagoGroup() {
  const carrito = useProductStore((store) => store.carrito)
  const precio = carrito.reduce((previous, current) => (
    previous + current.price
  ), 0) 

  return (
    <div id="PagoGroup">
      <div id="orderGroup" className="">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-xl">TU ORDEN</h1>
          <div className='flex flex-col gap-4 items-center'>
            {carrito.map((item) => (
              <CarritoItem producto={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="flex mt-6 justify-between">
          <p className="font-bold">PRECIO TOTAL</p>
          <p className="font-bold">{precio} USD</p>
        </div>
        <button className='max-w-md w-full px-4 py-2 bg-black text-white mt-2'> PAGAR </button>
      </div>
    </div>
  )
}

export default PagoGroup
