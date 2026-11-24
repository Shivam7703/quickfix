'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiLogOut, FiPackage, FiGrid } from 'react-icons/fi';
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Top Header */}
        <header className="flex items-center justify-between bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-xs mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Admin Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Manage your store catalog and categories
            </p>
          </div>

          <button
            onClick={logout}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-colors cursor-pointer"
          >
            <FiLogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </header>

        {/* Navigation Tabs */}
        <nav className="inline-flex p-1 bg-slate-200/70 rounded-xl mb-6">
          {(
            [
              { id: 'products', label: 'Products', icon: FiPackage },
              { id: 'categories', label: 'Categories', icon: FiGrid },
            ] as const
          ).map(({ id, label, icon: Icon }) => {
            const isActive = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Main Content Surface */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-xs p-6">
          {tab === 'products' ? <ProductManager /> : <CategoryManager />}
        </section>
      </main>
    </div>
  );
}