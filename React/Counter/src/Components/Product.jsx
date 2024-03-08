import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  console.log(id);
  const navigate = useNavigate();
  console.log(searchParams.get("orderby"));
  const handleNavigator = () => {
    navigate("/");
  };
  return (
    <>
      <div>Product ID :{id}</div>
      <button
        onClick={handleNavigator}
        className="border rounded bg-slate-300 p-1 hover:bg-slate-400 transition"
      >
        Go Home
      </button>
    </>
  );
}
