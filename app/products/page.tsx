import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-8">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border rounded-md p-4 hover:shadow-sm transition"
          >
            <div className="flex justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className="object-contain h-40"
              />
            </div>

            <h2 className="mt-4 text-sm font-medium line-clamp-2">
              {product.title}
            </h2>

            <p className="mt-2 font-semibold">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}