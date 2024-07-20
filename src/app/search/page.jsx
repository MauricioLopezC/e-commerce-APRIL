import { AdjustmentsHorizontalIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import ProductCardV2 from "@/components/ProductCardV2"
import { SkullIcon } from "lucide-react"

export const metadata = {
  title: 'Search'
}

async function getProducts(word) {
  const res = await fetch('http://localhost:3000/api/search', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      word
    })
  })
  return res.json()
}

async function SearchPage(props) {
  //props es un obj con
  const searchWord = props.searchParams.name
  console.log("S W => ", searchWord)
  const products = await getProducts(searchWord)
  console.log(products)

  return (
    <section className="mt-6 min-h-[70vh]">
      <h1 className="font-bold text-xl flex justify-center items-center">PRODUCTOS</h1>

      {products.length === 0 &&
        <div className="mt-16 flex justify-center items-center">
          <h1 className="font-bold">NO HAY RESULTADOS</h1>
          <SkullIcon className="w-6 h-6 ml-2" />
        </div>
      }

      {/* products section */}
      {products.length !== 0 &&
        <div className="w-fit mx-auto mt-10 mb-5">
          <div className="flex justify-between">
            <FiltersMenu />
            <div className="flex items-center">
              Ordenar por
              <ChevronDownIcon className="h-4 w-4 mx-2" />
            </div>
          </div>


          <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-14">
            {products.map((item) => (
              <ProductCardV2 id={item.id} title={item.name} price={item.price} imgSrc={item.images[0].imgSrc} key={item.id} />
            ))}
          </div>
        </div>
      }

    </section>
  )
}


function FiltersMenu() {
  return (
    <div className="text-right">
      <Menu>
        <MenuButton className="flex items-center">
          <AdjustmentsHorizontalIcon className="h-6 w-6 mx-2" />
          Filtros
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 rounded-xl border p-1 text-sm/6 bg-white"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                Color
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                Size
              </button>
            </MenuItem>
            <div className="my-1 h-px" />
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                Price
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default SearchPage
