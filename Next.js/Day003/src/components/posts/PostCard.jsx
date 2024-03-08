import React from "react";
import Link from "next/link";

export default function PostCard(props) {
  const { title, body, id } = props;
  return (
    <div className="container">
      <h2 className="mt-4">{title}</h2>
      <p>{body}</p>
      <button className="btn btn-primary">
        <Link href={`/posts/${id}`} className="text-white">
          See More
        </Link>
      </button>
    </div>
  );
}
