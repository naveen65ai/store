import Image from "next/image";
import Link from "next/link";


export default async function Home() {
 

  return (
    <main className="min-h-screen bg-black">
    
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to My Store
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover premium products at affordable prices.
            Shop the latest fashion, electronics, and more.
          </p>

          <Link
            href="products"
            className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      
   
    </main>
  );
}