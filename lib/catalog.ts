import { cache } from 'react';
import type { RowDataPacket } from 'mysql2';
import { pool } from '@/lib/db';
import { PRODUCT_SELECT, rowToProduct } from '@/lib/products';
import { createSlug } from '@/utils/createslug';
import type { Product } from '@/lib/types';

// Ek request mein generateMetadata aur Page dono call karein, tab bhi DB ek hi baar hit hoga
export const getProducts = cache(async (): Promise<Product[]> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `${PRODUCT_SELECT} ORDER BY p.series_number ASC, p.id ASC`
  );
  return rows.map(rowToProduct);
});

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const wanted = createSlug(decodeURIComponent(slug));
  const products = await getProducts();
  return products.find((p) => createSlug(p.title) === wanted);
}