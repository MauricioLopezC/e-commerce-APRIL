import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function SearchDialog({ isOpen, setIsOpen }) {
  const [searchWord, setSearchWord] = useState('')
  const router = useRouter()

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-1/2 space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold text-center">Buscar Productos</DialogTitle>
            <form>
              <div className='relative'>
                <MagnifyingGlassIcon className='h-6 w-6 absolute top-0 bottom-0 my-auto text-gray-400 left-3' />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-black"
                  onChange={(e) => {
                    e.preventDefault()
                    console.log(e.target.value)
                    //updateSearchWord(e.target.value)
                    setSearchWord(e.target.value)
                  }}
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  className='bg-black text-white px-4 py-2'
                  onClick={() => {
                    console.log('CLICANKDO WN')
                    setIsOpen(false)
                    router.push(`/search?name=${searchWord}`)
                  }}>
                  Buscar
                </button>
                <button
                  className='px-4 py-2 bg-gray-200'
                  onClick={() => setIsOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default SearchDialog
