import CarritoItem from "./CarritoItem"
import { auth } from "@/auth"

async function getCarrito(userId) {
  console.log("id ---> ", userId)
  const res = await fetch(`http://localhost:3000/api/carrito/${userId}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res.json()
}

async function CarritoList() {
  const session = await auth()
  const carrito = await getCarrito(session.user.id)
  // console.log("carrito ==>", carrito)
  // console.log(carrito.CartItem[0].product.images)
  //console.log(carrito.CartItem)
  return (
    <div>
      <h1 className='font-bold text-lg flex justify-center lg:justify-start'>PRODUCTOS</h1>
      <div className='flex flex-col gap-4 items-center'>
        {carrito.CartItem.map((cartItem) => (
          <CarritoItem
            productName={cartItem.product.name}
            imgSrc={cartItem.product.images[0].imgSrc}
            productPrice={cartItem.product.price}
            productQuantity={cartItem.quantity}
            cartItemId={cartItem.id}
          />
        ))}
      </div>
    </div>
  )
}

export default CarritoList
