import React from "react";
import ProductContainer from "@/components/products/ProductContainer";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

export default function index() {
  const [products, setProducts] = useState([]);
  const [updateDom, setUpdateDom] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      const req = await fetch("http://localhost:3000/api/products");
      let data = await req.json();
      const session = await getSession();
      console.log({ data: data }, { session: session });
      if (!session) data = data.slice(0, 3);
      setProducts(data);
    };
    getAllProducts();
    setUpdateDom(false);
  }, [updateDom]);

  if (products.length !== 0)
    return (
      <>
        <ProductContainer products={products} setUpdateDom={setUpdateDom} />{" "}
      </>
    );
  return (
    <>
      <div>Loading....</div>
    </>
  );
}
