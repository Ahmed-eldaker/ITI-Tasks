import ProductDetails from "@/components/products/ProductDetails";
import { useRouter } from "next/router";
import React from "react";

export default function ProductId({ data }) {
  return (
    <>
      <ProductDetails {...data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params.productId);
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
