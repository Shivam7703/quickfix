'use client';
import { useState } from 'react';
import type { Category, Product, TableData } from '@/lib/types';
import ListEditor from './ListEditor';
import TableEditor from './TableEditor';


const SIZE_HEAD = ['Size', 'Description', 'Box Quantity', 'Shipper Quantity', 'Dimensions (in Inches)', 'Gross Wt (in Kgs)'];
const PRICE_HEAD = ['SKU', 'Basic Rate', 'With GST', 'MRP', 'Inner Carton', 'Master Carton'];

const clean = (a: string[]) => a.map((s) => s.trim()).filter(Boolean);
const withHead = (t: TableData | undefined, head: string[]): TableData =>
  t && t.heading?.length ? t : { heading: head, rows: [] };
const inp = 'w-full border p-2 rounded';

type Props = {
  categories: Category[];
  product: Product | null;
  onDone: () => void;
  onCancel: () => void;
};

export default function ProductForm({ categories, product, onDone, onCancel }: Props) {
  const [title, setTitle] = useState(product?.title ?? '');
  const [categoryId, setCategoryId] = useState(product ? String(product.category_id) : '');
  const [series, setSeries] = useState(product?.series_number?.toString() ?? '');
  const [description, setDescription] = useState(product?.description ?? '');
  const [usage, setUsage] = useState<string[]>(product?.usage ?? []);
  const [benefits, setBenefits] = useState<string[]>(product?.benefits ?? []);
  const [precaution, setPrecaution] = useState<string[]>(product?.precaution ?? []);
  const [sizes, setSizes] = useState<TableData>(withHead(product?.sizes, SIZE_HEAD));
  const [price, setPrice] = useState<TableData>(withHead(product?.price, PRICE_HEAD));
  const [keepImgs, setKeepImgs] = useState<string[]>(product?.imgs ?? []);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [tdsFile, setTdsFile] = useState<File | null>(null);
  const [msdsFile, setMsdsFile] = useState<File | null>(null);
  const [removeTds, setRemoveTds] = useState(false);
  const [removeMsds, setRemoveMsds] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const keepRows = (t: TableData): TableData => ({
      ...t,
      rows: t.rows.filter((r) => r.some((c) => c.trim() !== '')),
    });

    const fd = new FormData();
    fd.append('title', title);
    fd.append('category_id', categoryId);
    fd.append('series_number', series);
    fd.append('description', description);
    fd.append('usage', JSON.stringify(clean(usage)));
    fd.append('benefits', JSON.stringify(clean(benefits)));
    fd.append('precaution', JSON.stringify(clean(precaution)));
    fd.append('sizes', JSON.stringify(keepRows(sizes)));
    fd.append('price', JSON.stringify(keepRows(price)));
    fd.append('keepImgs', JSON.stringify(keepImgs));
    newImages.forEach((f) => fd.append('images', f));
    if (tdsFile) fd.append('tds', tdsFile);
    if (msdsFile) fd.append('msds', msdsFile);
    if (removeTds) fd.append('removeTds', '1');
    if (removeMsds) fd.append('removeMsds', '1');

    const res = await fetch(product ? `/api/products/${product.id}` : '/api/products', {
      method: product ? 'PUT' : 'POST',
      body: fd,
    });
    setSaving(false);
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      setError(d.error ?? 'Save failed');
      return;
    }
    onDone();
  }

  return (
    <form onSubmit={submit} className='space-y-6'>
      <h2 className='text-xl font-semibold'>{product ? 'Edit product' : 'Add product'}</h2>

      <div className='grid md:grid-cols-3 gap-4'>
        <label className='md:col-span-2'>
          Title
          <input required value={title} onChange={(e) => setTitle(e.target.value)} className={inp} />
        </label>
        <label>
          Series number
          <input
            type='number'
            value={series}
            onChange={(e) => setSeries(e.target.value)}
            placeholder='Auto'
            className={inp}
          />
        </label>
        <label className='md:col-span-3'>
          Category
          <select required value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className={inp}>
            <option value=''>Select category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className='block'>
        Description
        <textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} className={inp} />
      </label>

      <div>
        <p className='font-medium mb-1'>Images</p>
        <div className='flex flex-wrap gap-3 mb-2'>
          {keepImgs.map((src) => (
            <div key={src} className='relative'>
              <img src={src} alt='' className='h-24 w-24 object-cover border rounded' />
              <button
                type='button'
                onClick={() => setKeepImgs(keepImgs.filter((x) => x !== src))}
                className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs'
              >
                ×
              </button>
            </div>
          ))}
        </div>
        {newImages.map((f, i) => (
          <p key={i} className='text-sm'>
            {f.name}
            <button
              type='button'
              onClick={() => setNewImages(newImages.filter((_, j) => j !== i))}
              className='text-red-600 ml-3'
            >
              remove
            </button>
          </p>
        ))}
        <input
          type='file'
          accept='image/jpeg,image/png,image/webp'
          multiple
          onChange={(e) => {
            setNewImages([...newImages, ...Array.from(e.target.files ?? [])]);
            e.target.value = '';
          }}
        />
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        <PdfField
          label='TDS'
          current={product?.tds ?? null}
          file={tdsFile}
          removed={removeTds}
          onFile={setTdsFile}
          onRemoved={setRemoveTds}
        />
        <PdfField
          label='MSDS'
          current={product?.msds ?? null}
          file={msdsFile}
          removed={removeMsds}
          onFile={setMsdsFile}
          onRemoved={setRemoveMsds}
        />
      </div>

      <ListEditor label='Usage' items={usage} onChange={setUsage} />
      <ListEditor label='Benefits' items={benefits} onChange={setBenefits} />
      <ListEditor label='Precaution' items={precaution} onChange={setPrecaution} />
      <TableEditor label='Sizes' data={sizes} onChange={setSizes} />
      <TableEditor label='Price' data={price} onChange={setPrice} />

      {error && <p className='text-red-600 text-sm'>{error}</p>}
      <div className='flex gap-3'>
        <button disabled={saving} className='bg-black text-white px-5 py-2 rounded disabled:opacity-50'>
          {saving ? 'Saving...' : 'Save'}
        </button>
        <button type='button' onClick={onCancel} className='border px-5 py-2 rounded'>
          Cancel
        </button>
      </div>
    </form>
  );
}

function PdfField(props: {
  label: string;
  current: string | null;
  file: File | null;
  removed: boolean;
  onFile: (f: File | null) => void;
  onRemoved: (v: boolean) => void;
}) {
  const { label, current, file, removed, onFile, onRemoved } = props;
  return (
    <div>
      <p className='font-medium mb-1'>{label} (PDF)</p>
      {current && !removed && !file && (
        <p className='text-sm mb-1'>
          <a href={current} target='_blank' className='text-blue-600 underline'>
            Current file
          </a>
          <button type='button' onClick={() => onRemoved(true)} className='text-red-600 ml-3'>
            remove
          </button>
        </p>
      )}
      {removed && (
        <p className='text-sm text-red-600 mb-1'>
          Will be removed on save
          <button type='button' onClick={() => onRemoved(false)} className='underline ml-2'>
            undo
          </button>
        </p>
      )}
      <input type='file' accept='application/pdf' onChange={(e) => onFile(e.target.files?.[0] ?? null)} />
      {file && <p className='text-xs text-gray-500 mt-1'>This file replaces the current one</p>}
    </div>
  );
}