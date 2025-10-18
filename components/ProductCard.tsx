import { Product } from "@/sanity/types/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CartCounter } from "./CartCounter";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";

interface ProductCardProps {
  product: Product;
  index: number;
  isCarousel?: boolean;
}
export const ProductCard = ({
  product,
  index,
  isCarousel = false,
}: ProductCardProps) => {
  const {
    addItem,
    removeItem,
    items: cartItems,
    setQuantity,
  } = useCartStore((state) => state);
  const [count, setCount] = useState(1);
  useEffect(() => {
    setQuantity(product._id, count);
  }, [count]);
  return (
    <div
      key={product._id}
      className={`relative border border-gray-300 rounded p-2 cursor-pointer flex-none basis-[40%] ${
        index === 0 && isCarousel ? "ml-4" : ""
      }`}
    >
      {product.discount ? (
        <div className="absolute z-10 right-0 top-0 px-4 py-2 bg-green-600 text-white">
          {product.discountType === "amount" ? "Rs." : ""}
          {product.discount}
          {product.discountType === "percentage" ? "%" : ""} off
        </div>
      ) : null}
      <div className="relative aspect-square">
        <Image
          src={product.image?.asset?.url ?? ""}
          alt={product.name}
          fill
          className="object-cover z-0"
        />
      </div>
      <div className="space-y-1 mt-2">
        <div className="font-bold text-sm text-gray-700">{product.name}</div>
        <div>
          <p className="font-bold">₹{product.price}</p>
        </div>
        <div className="flex justify-between items-center">
          <CartCounter count={count} setCount={setCount} />

          <div
            className={`p-2 rounded ${
              cartItems.find((item) => item.product._id === product._id)
                ? "bg-black"
                : ""
            }`}
          >
            <ShoppingCart
              color={
                cartItems.find((item) => item.product._id === product._id)
                  ? "white"
                  : "black"
              }
              width={16}
              height={16}
              onClick={() => {
                if (
                  cartItems.find((item) => item.product._id === product._id)
                ) {
                  removeItem(product);
                  setCount(1);
                } else {
                  addItem(product, count);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
