import Image from "next/image";
function About() {
  return (
    <div className="container mx-auto px-4 mt-3 mb-16">
      <section className=" lg:flex lg:gap-4">
        <div>
          <div className="font-bold flex py-8 lg:py-16">
            <h1>ABOUT US</h1>
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
            <p>Welcome to APRIL where luxury meets sustainabiblity</p>
            <br />
            <p>
              Our brand is dedicated to crafting premium clothing, shoes and
              bags using a blend of high-quality materias and innovative
              recycled fabrics
            </p>
            <br />
            <p>
              Each pice is meticulously designed not to only elevate your style
              but also minimize our enviroment footprint
            </p>
          </div>
          <button className="bg-gray-900 text-white font-bold py-2 rounded-md w-full lg:max-w-lg">
            READ MORE
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
        <div className="lg:flex lg:justify-between lg:items-center">
          <div>
            <h1 className="font-bold text-xl lg:py-6">SUBSCRIPTION</h1>
            <div className="flex items-center">
              <Image
                src="/modelo.jpg"
                width={3831}
                height={4174}
                alt="image of the bussiness"
                className="lg:max-w-lg"
              />
            </div>
          </div>

          <div className="lg:flex lg:flex-col lg:items-center px-16 lg:max-w-lg">
            <div className="flex justify-center py-4">
              <h1 className="font-bold text-lg">STAY CONNECTED</h1>
            </div>
            <p>
              Sing up for our newsletter and be the first to receive the latest
              fashion news, exclusive offers and insider updates straight to
              your inbox.
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
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-gray-600 shadow-sm"
                />
              </div>
              <button className="bg-gray-900 text-white px-4 py-2">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
