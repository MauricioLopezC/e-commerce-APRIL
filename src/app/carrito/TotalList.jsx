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

async function TotalList({ total }) {
  const session = await auth()
  const carrito = await getCarrito(session.user.id)

  return (
    <div className='flex flex-col divide-y-2 justify-around'>
      <div className='py-6'>
        <div className='flex justify-between'>
          <p className='font-bold'>Subtotal</p>
          <p>{total} USD</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-bold'>Delivery</p>
          <p>Free</p>
        </div>
      </div>
      <div className='flex justify-between py-6'>
        <p className='font-bold'>Precio total</p>
        <p>{total} USD</p>
      </div>
    </div>
  )
}

export default TotalList
