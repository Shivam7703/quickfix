import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { dbMessage } from '@/lib/errors';

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, { params }: Ctx) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { id } = await params;
    const { label } = await req.json();
    const name = String(label ?? '').trim();
    if (!name) return NextResponse.json({ error: 'Label is required' }, { status: 400 });
    await pool.execute('UPDATE categories SET label = ? WHERE id = ?', [name, id]);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: dbMessage(e) }, { status: 400 });
  }
}

export async function DELETE(_req: Request, { params }: Ctx) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { id } = await params;
    await pool.execute('DELETE FROM categories WHERE id = ?', [id]);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: dbMessage(e) }, { status: 400 });
  }
}