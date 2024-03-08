import React from "react";
import Link from "next/link";

export default function PostDetails(props) {
  const { title, body, id } = props.data;
  console.log(props);
  return (
    <div className="container">
      <h2 className="mt-4">{title}</h2>
      <p>{body}</p>
      <button className="btn btn-primary">
        <Link href={`/posts`} className="text-white">
          Back
        </Link>
      </button>
    </div>
  );
}
