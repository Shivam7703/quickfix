'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  FiPlus,
  FiArrowUp,
  FiArrowDown,
  FiEdit2,
  FiTrash2,
  FiCheck,
  FiX,
} from 'react-icons/fi';
import type { Category } from '@/lib/types';

export default function CategoryManager() {
  const [items, setItems] = useState<Category[]>([]);
  const [label, setLabel] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editLabel, setEditLabel] = useState('');
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    const res = await fetch('/api/categories', { cache: 'no-store' });
    setItems(await res.json());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function send(url: string, method: string, body?: unknown) {
    setError('');
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      setError(d.error ?? 'Something went wrong');
      return false;
    }
    await load();
    return true;
  }

  async function add(e: React.FormEvent) {
    e.preventDefault();
    if (await send('/api/categories', 'POST', { label })) setLabel('');
  }

  async function save(id: number) {
    if (await send(`/api/categories/${id}`, 'PUT', { label: editLabel })) setEditId(null);
  }

  function remove(c: Category) {
    if (confirm(`Delete category "${c.label}"?`)) send(`/api/categories/${c.id}`, 'DELETE');
  }

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Categories</h2>
          <p className="text-sm text-slate-500">
            Organize and reorder product categories ({items.length} total)
          </p>
        </div>

        <form onSubmit={add} className="flex items-center gap-2">
          <input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="New category name"
            required
            className="bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 outline-none px-3.5 py-2 rounded-lg text-sm w-64 sm:w-72 transition-all"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <FiPlus className="w-4 h-4" />
            <span>Add</span>
          </button>
        </form>
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
              <th className="py-3 px-4 w-20">Sr.</th>
              <th className="py-3 px-4">Label</th>
              <th className="py-3 px-4 w-80 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
            {items.map((c, i) => (
              <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-mono text-xs text-slate-600">
                  {c.serial_no}
                </td>
                <td className="py-3 px-4">
                  {editId === c.id ? (
                    <input
                      value={editLabel}
                      onChange={(e) => setEditLabel(e.target.value)}
                      className="bg-white text-slate-900 border border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 outline-none px-3 py-1.5 rounded-lg text-sm w-full transition-all"
                    />
                  ) : (
                    <span className="font-medium text-slate-900">{c.label}</span>
                  )}
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="inline-flex items-center gap-1.5">
                    <button
                      type="button"
                      disabled={i === 0}
                      onClick={() => send(`/api/categories/${c.id}/move`, 'POST', { direction: 'up' })}
                      aria-label="Move category up"
                      className="inline-flex items-center justify-center p-1.5 text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      <FiArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      disabled={i === items.length - 1}
                      onClick={() => send(`/api/categories/${c.id}/move`, 'POST', { direction: 'down' })}
                      aria-label="Move category down"
                      className="inline-flex items-center justify-center p-1.5 text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      <FiArrowDown className="w-3.5 h-3.5" />
                    </button>

                    {editId === c.id ? (
                      <>
                        <button
                          type="button"
                          onClick={() => save(c.id)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer"
                        >
                          <FiCheck className="w-3.5 h-3.5" />
                          <span>Save</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditId(null)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                          <FiX className="w-3.5 h-3.5" />
                          <span>Cancel</span>
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setEditId(c.id);
                          setEditLabel(c.label);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                      >
                        <FiEdit2 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => remove(c)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-600 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 hover:border-rose-300 transition-colors cursor-pointer"
                    >
                      <FiTrash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={3} className="py-10 px-4 text-center text-sm text-slate-500">
                  No categories yet. Add one above to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}