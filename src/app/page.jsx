import Image from "next/image";
import MainPicture from "../../public/mainPicture.jpg";
import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import remera1 from "./../../public/remera1.jpg";
import zapatilla from "./../../public/prueba.jpg";
import productos from "@/data";

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <div className="relative h-3/4 bg-[#333232] bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url('portada.jpg')", height: "75%", }}>
          {/*<img src="portada.jpg" alt="" className="rounded-t-lg rounded-b-lg object-none h-3/4 w-full px-2 " /> */}
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="w-full mx-2 px-8 py-2 bg-white md: max-w-md">SHOP ALL</button>
          </div>
        </div>
        <div className="mt-16">
          <Features />
        </div>
      </div>
      <section>
        <div className="flex justify-between px-8 py-2">
          <h2 className="font-bold">NEW ARRIVAL</h2>
          <p className="text-gray-600">MORE</p>
        </div>
        {/* new arraival*/}
        <div className="flex gap-6 overflow-x-auto mb-16 mx-6">
          {productos.map((item, id) => (
            <ProductCard image={item.imgSrc} titile={item.Nombre} price={item.price} key={id} />
          ))}


        </div>
      </section>
    </main>
  );
}
