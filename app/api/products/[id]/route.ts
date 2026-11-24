import { NextResponse } from 'next/server';
import type { RowDataPacket } from 'mysql2';
import { pool } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { PRODUCT_SELECT, rowToProduct, readJson, readFile, readInt } from '@/lib/products';
import { saveImage, savePdf, removeFile } from '@/lib/upload';
import { dbMessage } from '@/lib/errors';
import type { TableData } from '@/lib/types';

type Ctx = { params: Promise<{ id: string }> };

async function findProduct(id: string) {
  const [rows] = await pool.query<RowDataPacket[]>(`${PRODUCT_SELECT} WHERE p.id = ?`, [id]);
  return rows.length ? rowToProduct(rows[0]) : null;
}

export async function GET(_req: Request, { params }: Ctx) {
  const { id } = await params;
  const product = await findProduct(id);
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req: Request, { params }: Ctx) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { id } = await params;
    const old = await findProduct(id);
    if (!old) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const form = await req.formData();
    const title = String(form.get('title') ?? old.title).trim();
    const description = String(form.get('description') ?? old.description).trim();
    const categoryId = readInt(form, 'category_id') ?? old.category_id;
    const series = readInt(form, 'series_number') ?? old.series_number;
    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const sizes = readJson<TableData>(form, 'sizes', old.sizes);
    const price = readJson<TableData>(form, 'price', old.price);
    const usage = readJson<string[]>(form, 'usage', old.usage);
    const benefits = readJson<string[]>(form, 'benefits', old.benefits);
    const precaution = readJson<string[]>(form, 'precaution', old.precaution);

    // Images: keep the chosen old ones, add new ones, delete the rest from disk
    const keep = readJson<string[]>(form, 'keepImgs', old.imgs).filter((i) =>
      old.imgs.includes(i)
    );
    const removedImgs = old.imgs.filter((i) => !keep.includes(i));
    const imgs = [...keep];
    for (const f of form.getAll('images')) {
      if (f instanceof File && f.size > 0) imgs.push(await saveImage(f));
    }

    // PDFs: replace, remove, or leave as is
    let tds = old.tds;
    const tdsFile = readFile(form, 'tds');
    if (tdsFile) {
      tds = await savePdf(tdsFile);
      await removeFile(old.tds);
    } else if (form.get('removeTds') === '1') {
      await removeFile(old.tds);
      tds = null;
    }

    let msds = old.msds;
    const msdsFile = readFile(form, 'msds');
    if (msdsFile) {
      msds = await savePdf(msdsFile);
      await removeFile(old.msds);
    } else if (form.get('removeMsds') === '1') {
      await removeFile(old.msds);
      msds = null;
    }

    await pool.execute(
      `UPDATE products SET
        title = ?, category_id = ?, series_number = ?, description = ?, tds = ?, msds = ?,
        imgs = ?, sizes = ?, usage_list = ?, benefits = ?, precaution = ?, price = ?
       WHERE id = ?`,
      [
        title, categoryId, series, description, tds, msds,
        JSON.stringify(imgs), JSON.stringify(sizes), JSON.stringify(usage),
        JSON.stringify(benefits), JSON.stringify(precaution), JSON.stringify(price),
        id,
      ]
    );
    for (const r of removedImgs) await removeFile(r);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: dbMessage(e) }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Ctx) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const old = await findProduct(id);
  if (!old) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  await pool.execute('DELETE FROM products WHERE id = ?', [id]);
  for (const img of old.imgs) await removeFile(img);
  await removeFile(old.tds);
  await removeFile(old.msds);
  return NextResponse.json({ ok: true });
}