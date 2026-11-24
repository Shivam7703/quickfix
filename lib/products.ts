import type { RowDataPacket } from 'mysql2';
import type { Product } from './types';

// Every product query starts from this, so the label always comes from categories
export const PRODUCT_SELECT = `SELECT p.*, c.label AS category_label
  FROM products p
  JOIN categories c ON c.id = p.category_id`;

const j = (v: unknown) => (typeof v === 'string' ? JSON.parse(v) : v);

export function rowToProduct(r: RowDataPacket): Product {
  return {
    id: r.id,
    title: r.title,
    category_id: r.category_id,
    category: r.category_label,
    series_number: r.series_number ?? null,
    description: r.description ?? '',
    tds: r.tds,
    msds: r.msds,
    imgs: j(r.imgs),
    sizes: j(r.sizes),
    usage: j(r.usage_list),
    benefits: j(r.benefits),
    precaution: j(r.precaution),
    price: j(r.price),
  };
}

export function readJson<T>(form: FormData, key: string, fallback: T): T {
  const v = form.get(key);
  if (typeof v !== 'string' || !v) return fallback;
  try {
    return JSON.parse(v) as T;
  } catch {
    return fallback;
  }
}

export function readFile(form: FormData, key: string): File | null {
  const v = form.get(key);
  return v instanceof File && v.size > 0 ? v : null;
}

export function readInt(form: FormData, key: string): number | null {
  const v = form.get(key);
  if (typeof v !== 'string' || v.trim() === '') return null;
  const n = Number(v);
  return Number.isInteger(n) ? n : null;
}