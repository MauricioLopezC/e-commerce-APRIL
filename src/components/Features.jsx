import { ArrowPathIcon, GlobeAmericasIcon, ReceiptPercentIcon, TruckIcon } from "@heroicons/react/24/outline";

function Features() {
  return (
    <div className="p-4 flex gap-16 overflow-x-auto lg:justify-center ">
      <div className="flex gap-2">
        <div className="flex items-center">
          <TruckIcon className="w-10 h-10" />
        </div>
        <div className="text-nowrap flex flex-col justify-center">
          <h3 className="font-bold">FREE SHIPPING</h3>
          <p className="text-gray-600">Over 100 USD</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center">
          <ReceiptPercentIcon className="w-10 h-10" />
        </div>
        <div className="text-nowrap flex flex-col justify-center">
          <h3 className="font-bold ">DISCOUNT</h3>
          <p className="text-gray-600">15% on a first purchase</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center">
          <ArrowPathIcon className="h-10 w-10" />
        </div>
        <div className="text-nowrap flex flex-col justify-center">
          <h3 className="font-bold">30 DAYS RETURN</h3>
          <p className="text-gray-600">Simple return within 30 days</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center">
          <GlobeAmericasIcon className="h-10 w-10" />
        </div>
        <div className="text-nowrap flex flex-col justify-center">
          <h3 className="font-bold">RECYCLE</h3>
          <p className="text-gray-600">We recycle for sustainabiblity</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
