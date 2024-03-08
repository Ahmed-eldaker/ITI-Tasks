import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function addproduct() {
  const router = useRouter();
  const [product, setProduct] = useState("");

  const SubmitComment = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (data.message === "Add Successfully") {
      setProduct("");
      router.push("/products");
    }
  };

  return (
    <>
      <div class="container">
        <h1 class="mt-5 mb-4">Product Page</h1>
        <div class="form-group">
          <label for="productName">Product Name</label>
          <input
            id="productName"
            class="form-control"
            type="text"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input
            id="price"
            class="form-control"
            type="text"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            class="form-control"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
        </div>

        <button class="btn btn-primary mt-2" onClick={SubmitComment}>
          Submit
        </button>
      </div>
    </>
  );
}
