"use client";
import { useEffect, useState } from "react";
import type { Category, Product } from "@/lib/types";

const API = process.env.NEXT_PUBLIC_API_URL ?? "";

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

type Catalog = { products: Product[]; categories: Category[] };
const EMPTY: Catalog = { products: [], categories: [] };

// Header aur ProductSection dono use karte hain, to 60 second tak ek hi fetch chalta hai
let cache: { at: number; promise: Promise<Catalog> } | null = null;

function loadCatalog(): Promise<Catalog> {
  if (!cache || Date.now() - cache.at > 60_000) {
    const promise = Promise.all([
      getJson<Product[]>("/api/products"),
      getJson<Category[]>("/api/categories"),
    ]).then(([products, categories]) => ({ products, categories }));
    cache = { at: Date.now(), promise };
    promise.catch(() => {
      cache = null; // fail hua to agli baar dobara try ho
    });
  }
  return cache.promise;
}

export function useCatalog() {
  const [data, setData] = useState<Catalog | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    loadCatalog()
      .then((d) => {
        if (!cancelled) setData(d);
      })
      .catch(() => {
        if (!cancelled) setError("Could not load products. Please try again.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const d = data ?? EMPTY;
  return {
    products: d.products,
    categories: d.categories,
    loading: !data && !error,
    error,
  };
}