import Link from "next/link"

function ProductCardV2({image, title, price, id}) {
  return (
    <div>
      <div className="w-72 bg-white border border-gray-200 rounded-lg shadow">
        <Link href={`/products/${id}`}>
          <img
            className="rounded-t-lg object-cover h-80 w-72"
            src={image}
            alt=""
          />
        </Link>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">
            {price} USD
          </p>
        </div>
      </div>

    </div>
  )
}

export default ProductCardV2
