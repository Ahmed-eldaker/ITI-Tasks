import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductContainer(props) {
  console.log(props.products);
  const { products, setUpdateDom } = props;

  return (
    <>
      <div className="d-flex justify-content-around align-items-center flex-wrap gap-5">
        {products.map((p) => (
          <div className="card w-25" key={p.id}>
            <img src={p.thumbnail} className="card-img-top" alt={p.title} />
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">{p.description}</p>
              <Link href={`/products/${p.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
