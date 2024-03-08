import React from "react";
import { useRouter } from "next/router";

export default function ProductDetails(props) {
  const router = useRouter();
  console.log(props);
  const { images, title, brand, price, description } = { ...props[0] };
  //   console.log(images);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src={images[0]} alt="" className="img-fluid" />
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <p className="mb-0">Title: {title}</p>
            <p className="mb-0">Brand: {brand}</p>
            <p className="mb-0">Price: {price}</p>
            <div>
              <p>Description:</p>
              <p>{description}</p>
              <button
                className="btn btn-info"
                onClick={() => router.push("/products")}
              >
                Return
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
