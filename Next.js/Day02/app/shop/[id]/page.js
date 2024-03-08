import React from "react";

export default async function Page({ params }) {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products/" + params.id
  );
  const product = await res.json();

  return (
    <div className="container mx-auto bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
          {product.title}
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {product.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Image ${index + 1}`}
              className="rounded-md object-cover h-64 w-full"
            />
          ))}
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          {product.description}
        </p>
        <p className="text-gray-700 font-semibold mb-4">
          Price: ${product.price}
        </p>
        <div className="flex items-center mb-4">
          <img
            src={product.category.image}
            alt={product.category.name}
            className="w-8 h-8 mr-2"
          />
          <span className="text-gray-700">{product.category.name}</span>
        </div>
        <div className="flex justify-between text-gray-500 text-sm">
          <p>Created At: {new Date(product.creationAt).toLocaleString()}</p>
          <p>Updated At: {new Date(product.updatedAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
