import { StarIcon } from "@heroicons/react/24/solid"
import CarouselCustom from "./Carousel" //carousel
import ProductOptions from "./ProuctOptions"
import { auth } from "@/auth"

async function getTheProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res.json()
}

async function getStock(id) {
  const res = await fetch(`http://localhost:3000/api/stock/${id}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res.json()
}


async function ProductPage({ params }) {
  const product = await getTheProduct(params.productsId)
  const images = await product.images
  const stock = await getStock(params.productsId)
  //por alguna razon no puedo trear el producto con su determinado stock
  //con prisma usando inclde: , hare otra api route para trear el stock usando el productId
  const session = await auth()
  console.log("STOCCCCK", stock)



  return (
    <section className="mb-16 lg:flex lg:justify-center lg:mt-6 lg:gap-16 mx-auto container">
      <div className="flex justify-center mx-auto px-2 max-w-md lg:max-w-3xl lg:h-3/4">
        <CarouselCustom images={images} productId={params.productsId} />
      </div>

      <div id="group2" className="px-2 mt-2 max-w-md mx-auto">
        <div className="flex justify-between">
          <p className="font-bold text-lg">{product.name.toUpperCase()}</p>
          <p className="font-bold text-lg">${product.price} ARS</p>
        </div>

        <div className="flex">
          <StarIcon className="w-6 h-6 text-yellow-400" />
          <StarIcon className="w-6 h-6 text-yellow-400" />
          <StarIcon className="w-6 h-6 text-yellow-400" />
          <StarIcon className="w-6 h-6" />
          <StarIcon className="w-6 h-6" />
        </div>

        <ProductOptions productId={product.id} isLoggedIn={session.user} userId={session.user.id} />
        <p className="text-xs text-gray-600 my-3">Envio gratis a partir de los 100USD</p>
        <div id="details" className="flex flex-col divide-y">
          <h1 className="font-semibold text-lg py-2 px-2">DISPONIBLES: {stock.stock}</h1>
          <h1 className="font-semibold text-lg py-2 px-2">TALLE: {product.size.toUpperCase()}</h1>
          <h1 className="font-semibold text-lg py-2 px-2">COLOR: {product.color}</h1>
        </div>


        <div className="mt-6">
          <h1 className="font-bold text-lg">DESCRIPCION</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </section>

  )
}

export default ProductPage

