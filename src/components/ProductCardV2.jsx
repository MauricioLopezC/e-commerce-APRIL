import Link from "next/link"

function ProductCardV2({ id, title, price, imgSrc }) {
  return (
    <div>
      <Link href={`/products/${id}`}>
        <div className="w-72 bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg object-cover h-80 w-72"
            src={imgSrc}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
            <p className="mb-3 font-normal text-gray-400">
              ${price}ARS
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCardV2
