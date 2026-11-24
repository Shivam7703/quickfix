import { NextResponse } from 'next/server';
import type { ResultSetHeader, RowDataPacket } from 'mysql2';
import { pool } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { PRODUCT_SELECT, rowToProduct, readJson, readFile, readInt } from '@/lib/products';
import { saveImage, savePdf, removeFile } from '@/lib/upload';
import { dbMessage } from '@/lib/errors';
import type { TableData } from '@/lib/types';

export async function GET() {
  const [rows] = await pool.query<RowDataPacket[]>(
    `${PRODUCT_SELECT} ORDER BY p.series_number ASC, p.id ASC`
  );
  return NextResponse.json(rows.map(rowToProduct));
}

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const saved: (string | null)[] = [];
  try {
    const form = await req.formData();
    const title = String(form.get('title') ?? '').trim();
    const description = String(form.get('description') ?? '').trim();
    const categoryId = readInt(form, 'category_id');
    if (!title || !categoryId) {
      return NextResponse.json({ error: 'Title and category are required' }, { status: 400 });
    }

    let series = readInt(form, 'series_number');
    if (series === null) {
      const [r] = await pool.query<RowDataPacket[]>(
        'SELECT COALESCE(MAX(series_number), 0) + 1 AS next FROM products'
      );
      series = Number(r[0].next);
    }

    const empty: TableData = { heading: [], rows: [] };
    const sizes = readJson<TableData>(form, 'sizes', empty);
    const price = readJson<TableData>(form, 'price', empty);
    const usage = readJson<string[]>(form, 'usage', []);
    const benefits = readJson<string[]>(form, 'benefits', []);
    const precaution = readJson<string[]>(form, 'precaution', []);

    const imgs: string[] = [];
    for (const f of form.getAll('images')) {
      if (f instanceof File && f.size > 0) {
        const p = await saveImage(f);
        imgs.push(p);
        saved.push(p);
      }
    }
    const tdsFile = readFile(form, 'tds');
    const msdsFile = readFile(form, 'msds');
    const tds = tdsFile ? await savePdf(tdsFile) : null;
    const msds = msdsFile ? await savePdf(msdsFile) : null;
    saved.push(tds, msds);

    const [res] = await pool.execute<ResultSetHeader>(
      `INSERT INTO products
        (title, category_id, series_number, description, tds, msds, imgs, sizes, usage_list, benefits, precaution, price)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title, categoryId, series, description, tds, msds,
        JSON.stringify(imgs), JSON.stringify(sizes), JSON.stringify(usage),
        JSON.stringify(benefits), JSON.stringify(precaution), JSON.stringify(price),
      ]
    );
    return NextResponse.json({ id: res.insertId }, { status: 201 });
  } catch (e) {
    console.error(e);
    for (const f of saved) await removeFile(f); // no orphan files if the insert failed
    return NextResponse.json({ error: dbMessage(e) }, { status: 500 });
  }
}