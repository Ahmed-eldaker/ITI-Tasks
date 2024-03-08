import React from "react";

const CartItem = ({ prod, handelIncrement, handelDecrement, handelDelete }) => {
  return (
    <div className="mb-5  w-52 flex justify-between items-center ">
      <div className="border min-w-52  border-gray-600 rounded flex justify-between items-center mr-4 ">
        <p className="mr-4 p-2 ">{prod.name}</p>
        <p className="mr-4  min-w-5 ">{prod.count}</p>
      </div>
      <div className="flex gap-4">
        <button
          className="py-2 px-3 bg-slate-300 rounded"
          onClick={() => handelIncrement(prod)}
        >
          +
        </button>
        <button
          className="py-2 px-3 bg-slate-300 rounded"
          onClick={() => handelDecrement(prod)}
        >
          -
        </button>
        <button
          className="py-2 px-3 bg-red-600 rounded"
          onClick={() => handelDelete(prod)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
