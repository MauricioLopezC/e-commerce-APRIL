import productos from "@/data"
import CarouselProduct from "./carousel"
import { StarIcon } from "@heroicons/react/24/solid"
import { HeartIcon } from "@heroicons/react/24/outline"
import { Select } from "@headlessui/react"
import CarritoButton from "@/components/CarritoButton"

function page({ params }) {
  const producto = productos[params.productsId]
  return (
    <section className="mb-16 lg:flex lg:justify-around lg:mt-6">
      <div className="flex justify-center px-2 max-w-md mx-auto lg:max-w-2xl">
        {/*<CarouselProduct /> */}
        <img src={producto.imgSrc} alt="" className="rounded-t-lg rounded-b-lg object-cover h-80 w-full lg:h-5/6" />
      </div>

      <div id="group2" className="px-2 mt-2 max-w-md mx-auto">
        <div className="flex justify-between">
          <p className="font-bold text-lg">{producto.Nombre.toUpperCase()}</p>
          <p className="font-bold text-lg">{producto.price}</p>
        </div>

        <div className="flex">
          <StarIcon className="w-6 h-6 text-yellow-400" />
          <StarIcon className="w-6 h-6 text-yellow-400" />
          <StarIcon className="w-6 h-6 text-yellow-400" />
          <StarIcon className="w-6 h-6" />
          <StarIcon className="w-6 h-6" />
        </div>

        <div className="flex flex-row gap-2 mt-2">
          <div className="basis-5/6 border border-black">
            <CantidadSelect />
          </div>
          <button className="border border-black basis-1/6 flex justify-center py-1 px-1">
            <HeartIcon className="w-6 h-6" />
          </button>
        </div>
        <CarritoButton producto={producto}/>
        <p className="text-xs text-gray-600">Envio gratis a partir de los 100USD</p>

        <div className="mt-6">
          <h1 className="font-bold text-lg">DESCRIPCION</h1>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </div>
      </div>


    </section>

  )
}

export default page

function CantidadSelect() {
  return (
    <Select className="w-full py-1.5 bg-white focus:bg-gray-200" name="status" aria-label="Project status">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}
