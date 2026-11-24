import type { Product } from '@/lib/types';

const API = process.env.NEXT_PUBLIC_API_URL;

async function load(): Promise<Product[]> {
  if (!API) throw new Error('NEXT_PUBLIC_API_URL is not set');
  const res = await fetch(`${API}/api/products`);
  if (!res.ok) throw new Error(`Products API failed: ${res.status}`);
  return res.json();
}

// Ek build mein bar bar API na bulani pade, isliye ek baar laakar yaad rakhte hain
let cached: Promise<Product[]> | null = null;
export function fetchProducts() {
  cached ??= load();
  return cached;
}