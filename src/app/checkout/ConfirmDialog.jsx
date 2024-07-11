'use client'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function ConfirmDialog({ isOpen, setIsOpen }) {
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">
              <div className='flex gap-1'>
                <h1>COMPRA REALIZADA CON EXITO</h1>
                <CheckCircleIcon className='w-6 h-6' />
              </div>

            </DialogTitle>
            <div className="">
              <Link href={'/'}>
                <button
                  className='w-full px-2 bg-black text-white font-bold py-2'
                  onClick={() => setIsOpen(false)}>OK</button>
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>

  )
}

export default ConfirmDialog
