'use client';
import { useCallback, useEffect, useState } from 'react';
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
    <section>
      <form onSubmit={add} className='flex gap-2 mb-4'>
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder='New category name'
          required
          className='border p-2 rounded w-72'
        />
        <button className='bg-black text-white px-4 rounded'>Add</button>
      </form>

      {error && <p className='text-red-600 text-sm mb-3'>{error}</p>}

      <table className='w-full text-left border'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='p-2 w-16'>Sr.</th>
            <th className='p-2'>Label</th>
            <th className='p-2 w-80'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((c, i) => (
            <tr key={c.id} className='border-t'>
              <td className='p-2'>{c.serial_no}</td>
              <td className='p-2'>
                {editId === c.id ? (
                  <input
                    value={editLabel}
                    onChange={(e) => setEditLabel(e.target.value)}
                    className='border p-1 rounded w-full'
                  />
                ) : (
                  c.label
                )}
              </td>
              <td className='p-2 space-x-2'>
                <button
                  disabled={i === 0}
                  onClick={() => send(`/api/categories/${c.id}/move`, 'POST', { direction: 'up' })}
                  className='border px-2 rounded disabled:opacity-30'
                >
                  ↑
                </button>
                <button
                  disabled={i === items.length - 1}
                  onClick={() => send(`/api/categories/${c.id}/move`, 'POST', { direction: 'down' })}
                  className='border px-2 rounded disabled:opacity-30'
                >
                  ↓
                </button>
                {editId === c.id ? (
                  <>
                    <button onClick={() => save(c.id)} className='border px-2 rounded'>Save</button>
                    <button onClick={() => setEditId(null)} className='border px-2 rounded'>Cancel</button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(c.id);
                      setEditLabel(c.label);
                    }}
                    className='border px-2 rounded'
                  >
                    Edit
                  </button>
                )}
                <button onClick={() => remove(c)} className='border px-2 rounded text-red-600'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}