// hooks/useCatalog.ts

"use client";
import { useEffect, useState } from "react";
import type { Category, Product } from "@/lib/types";

// Admin app ka address. Website static export hai, isliye ye zaroor set karna
const API = process.env.NEXT_PUBLIC_API_URL ?? "";

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

export function useCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      getJson<Product[]>("/api/products"),
      getJson<Category[]>("/api/categories"),
    ])
      .then(([p, c]) => {
        if (cancelled) return;
        setProducts(p);
        setCategories(c);
      })
      .catch(() => {
        if (!cancelled) setError("Could not load products. Please try again.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { products, categories, loading, error };
}