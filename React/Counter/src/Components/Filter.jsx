import React from "react";

export default function Filter(props) {
  const { categories, selectedCategory, handelSelectCategory } = props;

  return (
    <>
      <table className="min-w-48 mt-2  ms-5">
        <thead>
          <tr>
            <th className="bg-slate-400 border-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((p) => (
            <tr
              onClick={() => handelSelectCategory(p.id)}
              className={
                "border-2 text-center hover:bg-slate-300 transition-all " +
                (p.id === selectedCategory ? "bg-slate-300" : "")
              }
              key={p.id}
            >
              {p.category}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
