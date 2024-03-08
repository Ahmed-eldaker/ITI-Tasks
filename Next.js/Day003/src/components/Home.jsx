import React from "react";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className="display-2 mt-5 mb-4">Home</div>
      <button className="btn btn-outline-info">
        <Link href="/products" className="text-success btn-link">
          Go to Products
        </Link>
      </button>
    </>
  );
}

export default Home;
