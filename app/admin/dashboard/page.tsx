'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CategoryManager from '@/component/admin/CategoryManager';
import ProductManager from '@/component/admin/ProductManager';


export default function Dashboard() {
  const [tab, setTab] = useState<'products' | 'categories'>('products');
  const router = useRouter();

  async function logout() {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <main className='max-w-6xl mx-auto p-6'>
      <header className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-semibold'>Dashboard</h1>
        <button onClick={logout} className='border px-3 py-1 rounded'>Logout</button>
      </header>
      <nav className='flex gap-2 mb-6'>
        {(['products', 'categories'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded border ${tab === t ? 'bg-black text-white' : ''}`}
          >
            {t === 'products' ? 'Products' : 'Categories'}
          </button>
        ))}
      </nav>
      {tab === 'products' ? <ProductManager /> : <CategoryManager />}
    </main>
  );
}