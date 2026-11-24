// lib/types.ts

export type TableData = { heading: string[]; rows: string[][] };

export type Category = { id: number; label: string; serial_no: number };

export type Product = {
  id: number;
  title: string;
  category_id: number;
  category: string; 
  series_number: number | null;
  description: string;
  tds: string | null;
  msds: string | null;
  imgs: string[];
  sizes: TableData;
  usage: string[];
  benefits: string[];
  precaution: string[];
  price: TableData;
};