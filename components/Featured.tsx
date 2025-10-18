"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity/types/product";
import { productQuery } from "@/sanity/lib/queries";
import { CartCounter } from "./CartCounter";
import { ProductCard } from "./ProductCard";

const fetchProducts = async () => {
  const res = await client.fetch<Product[]>(productQuery);
  return res;
};

export const Featured = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const {
    addItem,
    removeItem,
    items: cartItems,
  } = useCartStore((state) => state);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch products when the component mounts
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts.filter((product) => product.isFeatured));
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (error) return <div>{error}</div>;

  if (!products.length) {
    return null;
  }
  return (
    <section className="mt-6 w-full px-4 xl:px-0" id="featured">
      <h2 className="text-lg md:text-2xl lg:text-4xl font-bold pb-4">
        Featured
      </h2>
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-4">
          {products.map((product, index) => (
            <ProductCard
              product={product}
              index={index}
              key={product._id}
              isCarousel
            />
          ))}
        </div>
      </div>
    </section>
  );
};
