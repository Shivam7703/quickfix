'use client';
import { useCallback, useEffect, useState } from 'react';
import type { Category, Product } from '@/lib/types';
import ProductForm from './ProductForm';

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [editing, setEditing] = useState<Product | 'new' | null>(null);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    const [p, c] = await Promise.all([
      fetch('/api/products', { cache: 'no-store' }).then((r) => r.json()),
      fetch('/api/categories', { cache: 'no-store' }).then((r) => r.json()),
    ]);
    setProducts(p);
    setCategories(c);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function remove(p: Product) {
    if (!confirm(`Delete "${p.title}"? Its images and PDFs will also be deleted.`)) return;
    const res = await fetch(`/api/products/${p.id}`, { method: 'DELETE' });
    if (!res.ok) setError('Delete failed');
    else {
      setError('');
      load();
    }
  }

  if (editing) {
    return (
      <ProductForm
        categories={categories}
        product={editing === 'new' ? null : editing}
        onDone={() => {
          setEditing(null);
          load();
        }}
        onCancel={() => setEditing(null)}
      />
    );
  }

  return (
    <section>
      <button onClick={() => setEditing('new')} className='bg-black text-white px-4 py-2 rounded mb-4'>
        + Add product
      </button>
      {error && <p className='text-red-600 text-sm mb-3'>{error}</p>}

      <table className='w-full text-left border'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='p-2 w-16'>Series</th>
            <th className='p-2 w-20'>Image</th>
            <th className='p-2'>Title</th>
            <th className='p-2'>Category</th>
            <th className='p-2 w-40'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className='border-t'>
              <td className='p-2'>{p.series_number}</td>
              <td className='p-2'>
                {p.imgs[0] && <img src={p.imgs[0]} alt='' className='h-12 w-12 object-cover rounded' />}
              </td>
              <td className='p-2'>{p.title}</td>
              <td className='p-2'>{p.category}</td>
              <td className='p-2 space-x-2'>
                <button onClick={() => setEditing(p)} className='border px-2 rounded'>Edit</button>
                <button onClick={() => remove(p)} className='border px-2 rounded text-red-600'>Delete</button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan={5} className='p-4 text-center text-gray-500'>No products yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}