'use client';

import { useCallback, useEffect, useState } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiImage } from 'react-icons/fi';
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
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Products</h2>
          <p className="text-sm text-slate-500">
            {products.length} {products.length === 1 ? 'product' : 'products'} in catalog
          </p>
        </div>

        <button
          onClick={() => setEditing('new')}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-xs transition-colors cursor-pointer"
        >
          <FiPlus className="w-4 h-4" />
          <span>Add product</span>
        </button>
      </div>

      {error && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <tr>
              <th className="py-3 px-4 w-20">Series</th>
              <th className="py-3 px-4 w-20">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4 w-44 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-mono text-xs text-slate-600">
                  {p.series_number}
                </td>
                <td className="py-3 px-4">
                  {p.imgs[0] ? (
                    <img
                      src={p.imgs[0]}
                      alt={p.title}
                      className="h-12 w-12 object-cover rounded-lg border border-slate-200 bg-slate-100"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">
                      <FiImage className="w-4 h-4" />
                    </div>
                  )}
                </td>
                <td className="py-3 px-4 font-medium text-slate-900">{p.title}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    {p.category}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="inline-flex items-center gap-2">
                    <button
                      onClick={() => setEditing(p)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <FiEdit2 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => remove(p)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-600 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 hover:border-rose-300 transition-colors cursor-pointer"
                    >
                      <FiTrash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan={5} className="py-10 px-4 text-center text-sm text-slate-500">
                  No products yet. Click <span className="font-medium text-slate-700">+ Add product</span> to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}