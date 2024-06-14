import Image from "next/image";
function About() {
  return (
    <div className="container mx-auto px-4 mt-3 mb-16">
      <section className="lg:flex lg:gap-4 justify-around">
        <div id='block1' className="max-w-xl">
          <div className="font-bold flex py-8 lg:py-8">
            <h1>ACERCA DE NOSOTROS</h1>
          </div>
          <div>
            <Image
              src="/about.jpg"
              className="w-full lg:hidden"
              width={736}
              height={491}
              alt="image of the bussiness"
            />
          </div>
          <div className="py-6">
            <p>Bienvenido a ABRIL donde el lujo se une a la sostenibilidad</p>
            <br />
            <p>
              Nuestra marca se dedica a confeccionar ropa, zapatos y bolsos de primera calidad utilizando una combinación de materiales de alta calidad y tejidos reciclados innovadores.
            </p>
            <br />
            <p>
              Cada pieza está meticulosamente diseñada no solo para realzar su estilo sino también para minimizar nuestra huella ambiental.
            </p>
          </div>
          <button className="bg-gray-900 text-white font-bold py-2 w-full lg:max-w-lg">
            LEER MAS
          </button>
        </div>
        <div>
          <div className="flex items-center">
            <Image
              src="/about.jpg"
              className="hidden lg:block"
              width={736}
              height={491}
              alt="image of the bussiness"
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="lg:flex lg:justify-around lg:items-center">
          <div>
            <h1 className="font-bold text-xl lg:py-6 text-center">SUSCRIBIRSE</h1>
            <div className="flex items-center">
              <Image
                src="/portada.jpg"
                width={3831}
                height={4174}
                alt="image of the bussiness"
                className="lg:max-w-lg"
              />
            </div>
          </div>

          <div className="lg:flex lg:flex-col lg:items-center px-16 lg:max-w-lg">
            <div className="flex justify-center py-4">
              <h1 className="font-bold text-lg">CONECTATE</h1>
            </div>
            <p>
              Suscríbete a nuestro boletín y sé el primero en recibir lo último
              noticias de moda, ofertas exclusivas y actualizaciones internas directamente a
              tu bandeja de entrada.
            </p>
            <div className="flex gap-1 mt-2 justify-center">
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Ingresa tu email"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-gray-600 shadow-sm"
                />
              </div>
              <button className="bg-gray-900 text-white px-4 py-2">
                SUSCRIBIRSE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
