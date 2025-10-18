"use client";
import Link from "next/link";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { Menu, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";

const navMenu: Array<{ link: string; name: string }> = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/products",
    name: "Products",
  },
];
export const Header = () => {
  const router = useRouter();
  const { items: cartItems } = useCartStore((state) => state);
  return (
    <div className="fixed top-0 inset-x-0 z-30 w-full bg-white shadow-md">
      <div className="flex justify-between max-w-5xl mx-auto px-3 xl:px-0 py-3 items-center w-full ">
        <div className="hidden sm:block space-x-4 flex-1">
          <Link href={"/"} className="text-black hover:text-gray-700">
            Home
          </Link>
          <Link href={"/products"} className="text-black hover:text-gray-700">
            Products
          </Link>
        </div>
        <div className="sm:hidden flex-1 flex items-center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="cursor-pointer" aria-label="nav menu">
                <Menu />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="rounded-md p-5 shadow-md bg-white sm:hidden border border-gray-100 z-40">
                {navMenu.map((item) => (
                  <DropdownMenu.Item className="px-2.5 py-1" key={item.name}>
                    <div
                      onClick={() => {
                        router.push(item.link);
                      }}
                      className="cursor-pointer"
                    >
                      {item.name}
                    </div>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        <div className="text-4xl">
          <Link href={"/"}>Logo</Link>
        </div>
        <div className="flex-1 flex justify-end relative mr-2.5">
          <Link
            href={"/cart"}
            className="text-black hover:text-gray-700 flex gap-1"
          >
            <ShoppingCart />
            {cartItems.length > 0 ? (
              <span className="font-bold">
                {cartItems.map((item) => item.quantity).reduce((a, b) => a + b)}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
};
