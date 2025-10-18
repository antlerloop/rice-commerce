"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { productQuery } from "@/sanity/lib/queries";
import { Product } from "@/sanity/types/product";
import { ProductCard } from "@/components/ProductCard";

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard product={product} index={index} key={product._id} />
        ))}
      </div>
    </div>
  );
}
