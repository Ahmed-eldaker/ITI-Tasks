import React from "react";
import PostCard from "./PostCard";
import Link from "next/link";

export default function PostContainer(props) {
  const posts = props.data;
  console.log(props.data);
  return (
    <>
      <div className=" w-100 gap-5">
        {posts.map((p) => (
          <div key={p.id} className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">{p.body}</p>
              <button className="btn btn-primary">
                <Link href={`/posts/${p.id}`} className="text-white">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
