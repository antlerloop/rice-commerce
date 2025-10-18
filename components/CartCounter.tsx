import React, { useState } from "react";

interface CartCounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
export const CartCounter = ({ count, setCount }: CartCounterProps) => {
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <div className="flex w-full max-w-25 rounded-[5px] justify-between items-center font-bold">
      <button
        className={`px-2 text-md ${
          count < 1 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={handleDecrement}
        disabled={count < 1}
      >
        -
      </button>
      <button className="text-md">{count}</button>
      <button
        className=" px-2 text-md cursor-pointer"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};
