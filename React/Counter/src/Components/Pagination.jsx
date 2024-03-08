import React from "react";
import { range } from "./../utils/range";

export default function Pagination(props) {
  const { currentPage, handlePageChange, pageSize, itemsLength } = props;
  const numOfPages = Math.ceil(itemsLength / pageSize);
  const pages = range(numOfPages);
  //   if (numOfPages === 1) return null;
  return (
    <div className=" flex gap-2 mt-1">
      {pages.map((p) => (
        <div
          onClick={() => handlePageChange(p)}
          className={`border-2 px-3 py-2 cursor-pointer mt3 hover:bg-slate-300 transition
          ${currentPage === p ? "bg-slate-300" : ""}`}
          key={p}
        >
          {p}
        </div>
      ))}
    </div>
  );
}
