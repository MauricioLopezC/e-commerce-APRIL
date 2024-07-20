import PagoGroup from "./PagoGroup";
import { auth } from "@/auth";
import ChekOutForm from "./CheckoutForm";

async function getCarrito(userId) {
  const res = await fetch(`http://localhost:3000/api/carrito/${userId}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res.json()
}

async function page() {
  const session = await auth()

  const carrito = await getCarrito(session.user.id)
  const total = carrito.CartItem.reduce((previous, current) => (
    previous + current.product.price
  ), 0)

  return (
    <>
      <h1 className="font-bold text-xl flex justify-center items-center mt-4">
        VERIFICAR
      </h1>
      <section className="container mx-auto mb-6 lg:flex lg:justify-around min-h-[70vh]">
        <ChekOutForm session={session} cartItems={carrito.CartItem} />
        <PagoGroup carrito={carrito.CartItem} total={total} />
      </section>
    </>
  );
}

export default page;
