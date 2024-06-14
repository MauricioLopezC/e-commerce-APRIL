import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useProductStore } from '@/store/productStore'
import { useState } from 'react'
import Link from 'next/link'

function SearchDialog({ isOpen, setIsOpen }) {
  const products = useProductStore((store) => store.productos)
  const [productsFound, setProductsFound] = useState([])

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-1/2 space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold text-center">Buscar Productos</DialogTitle>
            <div className='relative'>
              <MagnifyingGlassIcon className='h-6 w-6 absolute top-0 bottom-0 my-auto text-gray-400 left-3' />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-black"
                onChange={(e) => {
                  const filteredArray = products.filter((item) => (
                    item.Nombre.toLowerCase().includes(e.target.value.toLowerCase())
                  ))
                  setProductsFound(filteredArray)
                }}
              />
            </div>

            <div className='flex flex-col gap-6'>
              {productsFound.map((item) => (
                <Link href={`/products/${item.id}`} key={item.id}>
                  <button onClick={() => {
                    setIsOpen(false)
                  }}>
                    <p className='font-bold'>{item.Nombre}</p>
                  </button>
                </Link>
              ))}
            </div>

            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default SearchDialog
