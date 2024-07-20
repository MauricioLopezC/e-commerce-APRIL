import Link from 'next/link'
import CarritoList from './CarritoList'
import TotalList from './TotalList'


function page() {
  return (
    <>
      <h1 className="font-bold text-xl flex justify-center items-center mt-4">CARRITO</h1>
      <section className='container mx-auto mb-6 min-h-[70vh] lg:flex lg:justify-around mt-4'>

        <div>
          <CarritoList />
        </div>
        <div className='flex flex-col items-center'>
          <div className='max-w-md mt-6 divide-y-2'>
            <h2 className='py-6 font-bold text-xl'>TOTAL</h2>
            <TotalList />
            {/* Promo and chekout button */}
            <div>
              <div className='max-w-md'>
                <label htmlFor="codeInput" className='block py-2'>Tienes un codigo de descuento?</label>
                <div className='flex items-center border border-black'>
                  <input type="text"
                    placeholder='ingresa tu codigo'
                    className='w-full p-2.5 ml-2 bg-transparent outline-none'
                    id='codeInput'
                  />
                  <button className='bg-black text-white py-2.5 px-4 border border-black'>APLICAR</button>
                </div>
              </div>
              <Link href={'/checkout'}>
                <button className='max-w-md w-full px-4 py-2 bg-black text-white mt-2'> VERIFICAR </button>
              </Link>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}



export default page
