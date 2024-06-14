import { ArrowPathIcon, GlobeAmericasIcon, ReceiptPercentIcon, TruckIcon } from "@heroicons/react/24/outline";

function Features() {
  return (
    <div className="p-4 flex gap-16 overflow-x-auto lg:justify-center ">
      <div className="flex gap-2">
        <div className="flex items-center">
          <TruckIcon className="w-10 h-10" />
        </div>
        <div className="text-nowrap flex flex-col justify-center">
          <h3 className="font-bold">ENVIO GRATIS</h3>
          <p className="text-gray-600">Sobre los 100 USD</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center">
          <ReceiptPercentIcon className="w-10 h-10" />
        </div>
        <div className="text-nowrap flex flex-col justify-center">
          <h3 className="font-bold ">DESCUENTO</h3>
          <p className="text-gray-600">15% en la primera compra</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center">
          <ArrowPathIcon className="h-10 w-10" />
        </div>
        <div className="text-nowrap flex flex-col justify-center">
          <h3 className="font-bold">30 DIAS DE DEVOLUCIÓN</h3>
          <p className="text-gray-600">devolución en 30 Dias</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center">
          <GlobeAmericasIcon className="h-10 w-10" />
        </div>
        <div className="text-nowrap flex flex-col justify-center">
          <h3 className="font-bold">RECICLAJE</h3>
          <p className="text-gray-600">Reciclamos para la sostenibilidad</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
