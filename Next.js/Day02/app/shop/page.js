import Link from "next/link";
import React from "react";

export default async function Page() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => {
          return product.title === "abc" ? null : (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <Link href={"/" + product.id}>
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={product.images[0]}
                  alt=""
                />
              </Link>
              <div className="p-6">
                <Link href={"/" + product.id}>
                  <h5 className="text-xl font-semibold mb-2 text-gray-900">
                    {product.title}
                  </h5>
                </Link>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <Link
                  href={"/shop/" + product.id}
                  className="inline-block bg-violet-700 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
                >
                  Check Product
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
