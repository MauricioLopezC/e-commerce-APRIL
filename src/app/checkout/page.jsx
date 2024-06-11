import { CalendarDaysIcon, CreditCardIcon, KeyIcon } from "@heroicons/react/24/outline";
import MetodoDePago from "./MetodoDePago";
import { carrito } from "@/data";
import CarritoItem from "../carrito/CarritoItem";
import PagoGroup from "./PagoGroup";

function page() {
  return (
    <>
      <h1 className="font-bold text-xl flex justify-center items-center mt-4">
        VERIFICAR
      </h1>
      <section className="container mx-auto mb-6 lg:flex lg:justify-around">
        <div id="DatosGroup" className="max-w-xl">
          <div>
            <div className="mt-6">
              <h1 className="font-bold text-lg">INFORMACION PERSONAL</h1>
              <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
                <input type="text" placeholder="Numero de telefono" className="border border-black sm:col-span-3 py-1 pl-3" />
                <input type="text" placeholder="Email" className="border border-black sm:col-span-3 py-1 pl-3" />
              </div>
            </div>

            <div className="mt-6">
              <h1 className="font-bold text-lg">INFORMACION DE ENVIO</h1>
              <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
                <input type="text" placeholder="Nombre" className="border border-black sm:col-span-3 py-1 pl-3" />
                <input type="text" placeholder="Apellido" className="border border-black sm:col-span-3 py-1 pl-3" />
                <input type="text" placeholder="Pais" className="border border-black sm:col-span-3 py-1 pl-3" />
                <div className="grid grid-cols-subgrid sm:col-span-3">
                  <input type="text" placeholder="Ciudad" className="border border-black col-start-3 col-span-2 sm:col-span-2 py-1 pl-3" />
                  <input type="text" placeholder="C.P." className="border border-black col-start-5 sm:col-span-1 py-1 pl-3" />
                </div>
                <input type="text" placeholder="Pais" className="border border-black sm:col-span-6 py-1 pl-3" />
              </div>
            </div>

            <div id="pagoGroup" className="flex flex-col max-w-xl gap-4 mt-6 w-full">
              <div>
                <h1 className="font-bold text-lg">METODO DE PAGO</h1>
                <MetodoDePago />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-lg">Detalles de la tarjeta</h1>
                <div className="relative">
                  <CreditCardIcon className="w-6 h-6 absolute left-3 inset-y-0 my-auto" />
                  <input
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="w-full pl-12 pr-3 py-1 text-gray-500 bg-transparent outline-none border border-black"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="relative basis-1/2">
                    <CalendarDaysIcon className="w-6 h-6 absolute left-3 inset-y-0 my-auto" />
                    <input
                      type="text"
                      placeholder="MM/DD/AA"
                      className="w-full pl-12 pr-3 py-1 text-gray-500 bg-transparent outline-none border border-black"
                    />
                  </div>
                  <div className="relative basis-1/2">
                    <KeyIcon className="w-6 h-6 absolute left-3 inset-y-0 my-auto" />
                    <input
                      type="text"
                      placeholder="CVC/CVV"
                      className="w-full pl-12 pr-3 py-1 text-gray-500 bg-transparent outline-none border border-black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PagoGroup />
      </section>
    </>
  );
}

export default page;
