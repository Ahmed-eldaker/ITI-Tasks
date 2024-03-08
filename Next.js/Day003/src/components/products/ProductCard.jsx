import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function ProductCard(prop) {
  const router = useRouter();
  const { data: session } = useSession();

  const { title, description, images, id } = prop.product;
  const { setUpdateDom } = prop;

  const DeleteComment = async (productId) => {
    const res = await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: "DELETE",
    });

    const data = await res.json();
    setUpdateDom(true);
  };
  return (
    <div className="card w-25 ">
      <img src={images[0]} className="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link href={`/products/${id}`} className="btn btn-primary">
          Read More
        </Link>
        {session ? (
          <>
            <button
              onClick={() => DeleteComment(id)}
              className="btn btn-outline-danger"
            >
              delete
            </button>

            <Link href={`/products/update/${id}`} className="btn btn-success ">
              Update
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}
