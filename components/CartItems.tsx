"use client";
import { useCartStore } from "@/stores/cart-store";
import { CircleX } from "lucide-react";
import Image from "next/image";
import React from "react";

export const CartItems = () => {
  const { items: cartItems, removeItem } = useCartStore((state) => state);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-lg md:text-2xl lg:text-4xl font-bold pb-4">Cart</h2>
      <div className="border border-gray-300 py-5 flex flex-col items-center justify-center mb-2 max-w-xl rounded">
        <div className="text-lg font-bold">
          ₹
          {cartItems
            .map((item) => item.quantity * item.product.price)
            .reduce((a, b) => a + b)}
        </div>

        <div>Pay</div>
      </div>
      <div className="max-w-lg space-y-2">
        {cartItems.map((item) => (
          <div
            key={item.product._id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="relative size-20">
                <Image
                  src={item.product.image?.asset?.url ?? ""}
                  alt={item.product.name}
                  fill
                />
              </div>
              <div>
                {item.product.name} x {item.quantity}
              </div>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                removeItem(item.product);
              }}
            >
              <CircleX className="text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
