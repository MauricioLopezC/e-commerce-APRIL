function ProductCard({ image, titile, price }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          className="rounded-t-lg object-cover h-96 min-w-72"
          src={image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{titile}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">
          {price} USD
        </p>
      </div>
    </div>
  );
}

export default ProductCard;