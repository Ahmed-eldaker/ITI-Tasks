import PostContainer from "@/components/posts/PostsContainer";
import React from "react";

export default function index(data) {
  return (
    <div className="container">
      <PostContainer {...data} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
