'use client'
import { handdleCheckout } from "@/lib/actions"
import { CalendarDaysIcon, CreditCardIcon, KeyIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function ChekOutForm({ session, cartItems }) {
  const radios = ["Tarjeta Visa/Mastercard", "Apple pay", "Paypal"]
  const router = useRouter()
  return (
    <form action={async (data) => {
      console.log(cartItems)
      const res = await handdleCheckout(data, cartItems)

      if (res.success) {
        router.push('/checkout/confirm')

      }
    }}>
      <div id="DatosGroup" className="max-w-xl">
        <div>
          <div className="mt-6">
            <h1 className="font-bold text-lg">INFORMACIÓN PERSONAL</h1>
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
              <input name="telInput" required type="tel" placeholder="Numero de teléfono" className="border border-black sm:col-span-3 py-1 pl-3" />
              <input name="emailInput" defaultValue={session.user.email} type="email" placeholder="Email" className="border border-black sm:col-span-3 py-1 pl-3" />
            </div>
          </div>

          <div className="mt-6">
            <h1 className="font-bold text-lg">INFORMACIÓN DE ENVIO</h1>
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
              <input name="firstNameInput" defaultValue={session.user.name} type="text" placeholder="Nombre" className="border border-black sm:col-span-3 py-1 pl-3" />
              <input name="lastNameInput" type="text" placeholder="Apellido" className="border border-black sm:col-span-3 py-1 pl-3" />
              <input name="countryInput" defaultValue={'Argentina'} type="text" placeholder="País" className="border border-black sm:col-span-3 py-1 pl-3" />
              <div className="grid grid-cols-subgrid sm:col-span-3">
                <input name="cityInput" defaultValue={'salta'} type="text" placeholder="Ciudad" className="border border-black col-start-3 col-span-2 sm:col-span-2 py-1 pl-3" />
                <input name="cpInput" defaultValue={4400} type="text" placeholder="C.P." className="border border-black col-start-5 sm:col-span-1 py-1 pl-3" />
              </div>
              <input name="addressInput" type="text" placeholder="Direccion" className="border border-black sm:col-span-6 py-1 pl-3" />
            </div>
          </div>

          <div id="pagoGroup" className="flex flex-col max-w-xl gap-4 mt-6 w-full">
            <div>
              <h1 className="font-bold text-lg">MÉTODO DE PAGO</h1>
              <ul className="space-y-1">
                {/* Radio groups */}
                {
                  radios.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-x-2">
                      <input value={item} type="radio" name="paymentMethod" id={idx} className="form-radio border-gray-400 focus:ring-gray-600 duration-150" />
                      <label htmlFor={idx} className="text-sm  font-medium">
                        {item}
                      </label>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg">DETALLES DE TARJETA</h1>
              <div className="relative">
                <CreditCardIcon className="w-6 h-6 absolute left-3 inset-y-0 my-auto" />
                <input
                  name="cardNumber"
                  required
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="w-full pl-12 pr-3 py-1 text-gray-500 bg-transparent outline-none border border-black"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative basis-1/2">
                  <CalendarDaysIcon className="w-6 h-6 absolute left-3 inset-y-0 my-auto" />
                  <input
                    name="cardDate"
                    required
                    type="datetime"
                    placeholder="MM/DD/AA"
                    className="w-full pl-12 pr-3 py-1 text-gray-500 bg-transparent outline-none border border-black"
                  />
                </div>
                <div className="relative basis-1/2">
                  <KeyIcon className="w-6 h-6 absolute left-3 inset-y-0 my-auto" />
                  <input
                    name="cardKey"
                    required
                    type="password"
                    placeholder="CVC/CVV"
                    className="w-full pl-12 pr-3 py-1 text-gray-500 bg-transparent outline-none border border-black"
                  />
                </div>
              </div>
            </div>
            <button type="submit"
              className='w-full px-4 py-2 bg-black text-white mt-2'
            >
              PAGAR
            </button>
          </div>
        </div>
      </div>
    </form>

  )
}


export default ChekOutForm
