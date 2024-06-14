import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import productos from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <div className="relative h-3/4 bg-[#333232] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/portada.jpg')", height: "75%", }}>
          {/*<img src="portada.jpg" alt="" className="rounded-t-lg rounded-b-lg object-none h-3/4 w-full px-2 " /> */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Link href={'/products'}>
              <button className="w-full mx-2 px-8 py-2 bg-white md: max-w-md font-bold">VER TODO</button>
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <Features />
        </div>
      </div>
      <section>
        <div className="flex justify-between px-8 py-2">
          <h2 className="font-bold">Nuevos</h2>
          <p className="text-gray-600">MAS</p>
        </div>
        {/* new arrival*/}
        <div className="flex gap-6 overflow-x-auto mb-16 mx-6">
          {productos.map((item, id) => (
            <Link href={`/products/${item.id}`}>
              <ProductCard image={item.imgSrc} titile={item.Nombre} price={item.price} key={id} />
            </Link>
          ))}


        </div>
      </section>
    </main>
  );
}
