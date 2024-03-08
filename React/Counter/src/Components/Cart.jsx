import React, { useState } from "react";
import CartItem from "./CartItem";
// import CartItem from './CartItem';

const Cart = (props) => {
  const { data, handelDecrement, handelIncrement, handelDelete, reset } = props;

  // if (!data.length) {
  //   return <h1>No available items </h1>;
  // }
  return (
    <div>
      {!data.length && (
        <h2 className="w-28 text-red-500 mt-5 text-pretty m-auto">
          No Cart items
        </h2>
      )}
      <div className="rounded-xl  m-auto p-7 flex flex-col justify-center items-center">
        {data.map((e) => (
          <CartItem
            key={e.name}
            prod={e}
            handelIncrement={handelIncrement}
            handelDecrement={handelDecrement}
            handelDelete={handelDelete}
          />
        ))}
        <button
          className="rounded bg-slate-900 text-white p-2  m-auto max-w-20"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Cart;
