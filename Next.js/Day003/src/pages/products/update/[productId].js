import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Update({ data }) {
  const router = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(data[0]);
  }, [data]);

  const SubmitComment = async () => {
    const res = await fetch(
      `http://localhost:3000/api/products/${product.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ product }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.message === "Update Successfully") {
      setProduct({});
      router.push("/products");
    }
  };
  return (
    <>
      <div class="container">
        <h1 class="mt-5 mb-4">Product Page</h1>
        <div class="form-group">
          <label for="productName" class="d-block">
            Product Name
          </label>
          <input
            id="productName"
            class="form-control"
            type="text"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="price" class="d-block">
            Price
          </label>
          <input
            id="price"
            class="form-control"
            type="text"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="description" class="d-block">
            Description
          </label>
          <input
            id="description"
            class="form-control"
            type="text"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>

        <button class="btn btn-primary" onClick={SubmitComment}>
          Submit
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params.productId);

  // const req = await fetch(`https://dummyjson.com/products/${params.ProductId}`);
  const req = await fetch(
    `http://localhost:3000/api/products/${params.productId}`
  );

  const data = await req.json();

  return {
    props: {
      data,
    },
  };
}
