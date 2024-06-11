import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

function ConfirmDialog({ isOpen, setIsOpen }) {
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">
              <div className='flex gap-1'>
              <h1>PRODUCTO AGREGADO CORRECTAMENTE</h1>
              <CheckCircleIcon className='w-6 h-6' />
              </div>

            </DialogTitle>
            <div className="flex gap-4">
              <button 
                className='w-full px-2 bg-black text-white font-bold py-2'
                onClick={() => setIsOpen(false)}>OK</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default ConfirmDialog


import React from 'react'
