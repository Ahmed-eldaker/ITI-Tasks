import PostDetails from "@/components/posts/PostDetails";
import React from "react";

export default function PostId(data) {
  console.log(data);
  return <PostDetails {...data} />;
}

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
