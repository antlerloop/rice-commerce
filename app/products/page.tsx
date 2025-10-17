"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { productQuery } from "@/sanity/lib/queries";
import { Product } from "@/sanity/types/product";
import Image from "next/image";

const fetchProducts = async () => {
  const res = await client.fetch<Product[]>(productQuery);
  return res;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch products when the component mounts
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []); // Empty dependency array ensures this runs only once

  if (loading)
    return (
      <div className="max-w-5xl mx-auto p-4 mt-5 text-center">Loading...</div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="my-4 text-2xl md:text-3xl">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-400 p-4 rounded relative"
          >
            {product.discount ? (
              <div className="absolute right-0 top-0 px-4 py-2 bg-green-600 text-white">
                {product.discountType === "amount" ? "Rs." : ""}
                {product.discount}
                {product.discountType === "percentage" ? "%" : ""} off
              </div>
            ) : null}
            <h2>{product.name}</h2>
            {/* Assuming description is rich text */}
            <Image
              src={product.image?.asset?.url ?? ""}
              alt={product.name}
              width={400}
              height={400}
            />
            <p>Price: ${product.price}</p>
            {/* <p>Category: {product.category}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
