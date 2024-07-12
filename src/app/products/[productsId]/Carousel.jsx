'use client'
import { useState } from "react"

function CarouselCustom({ images, productId }) {
  const [mainImage, setMainImage] = useState(images[0].imgSrc)
  return (
    <div className="container mx-auto flex flex-col gap-3 items-center">
      <div className="">
        <img src={mainImage}
          alt="productImage"
          className="rounded-t-lg rounded-b-lg h-[300px] object-center object-cover w-[600px] lg:h-[600px]"
          aria-placeholder="imagen" />
      </div>
      <div>
        {images.map((image, idx) => (
          <button type="button" className="w-24 h-24 mr-2 focus:ring focus:ring-black rounded-lg" key={image.id}>
            <img src={image.imgSrc}
              alt="productImage"
              className="rounded-t-lg rounded-b-lg object-cover w-full h-full"
              aria-placeholder="imagen"
              onClick={() => {
                setMainImage(images[idx].imgSrc)
              }}
            />
          </button>
        ))}

      </div>
    </div>
  )
}


export default CarouselCustom
