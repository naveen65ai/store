import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="bg-white rounded-xl shadow-md p-10 flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain h-100"
          />
        </div>

        <div>
          <p className="text-sm uppercase text-gray-500 mb-2">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-3xl font-bold text-blue-600 mb-6">
            ${product.price}
          </p>

          <p className="text-gray-600 leading-7 mb-8">
            {product.description}
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>

            <button className="border border-black px-8 py-3 rounded-lg hover:bg-gray-500 transition">
              Buy Now
            </button>
          </div>

          <div className="mt-10 border-t pt-6">
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              In Stock
            </p>

            <p className="mt-2">
              <span className="font-semibold">Shipping:</span>{" "}
              Free Delivery
            </p>

            <p className="mt-2">
              <span className="font-semibold">Returns:</span>{" "}
              7-Day Return Policy
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}