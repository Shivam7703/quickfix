import { NextResponse } from 'next/server';
import type { RowDataPacket } from 'mysql2';
import { pool } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { dbMessage } from '@/lib/errors';

type Ctx = { params: Promise<{ id: string }> };

export async function POST(req: Request, { params }: Ctx) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const { direction } = await req.json();
  if (direction !== 'up' && direction !== 'down') {
    return NextResponse.json({ error: 'Invalid direction' }, { status: 400 });
  }

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [cur] = await conn.query<RowDataPacket[]>(
      'SELECT id, serial_no FROM categories WHERE id = ? FOR UPDATE',
      [id]
    );
    if (!cur.length) {
      await conn.rollback();
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    const cmp = direction === 'up' ? '<' : '>';
    const ord = direction === 'up' ? 'DESC' : 'ASC';
    const [nb] = await conn.query<RowDataPacket[]>(
      `SELECT id, serial_no FROM categories WHERE serial_no ${cmp} ? ORDER BY serial_no ${ord} LIMIT 1 FOR UPDATE`,
      [cur[0].serial_no]
    );
    if (!nb.length) {
      await conn.rollback(); // already first or last
      return NextResponse.json({ ok: true });
    }
    // swap through a temporary value so the UNIQUE rule is never broken
    await conn.execute('UPDATE categories SET serial_no = -1 WHERE id = ?', [cur[0].id]);
    await conn.execute('UPDATE categories SET serial_no = ? WHERE id = ?', [cur[0].serial_no, nb[0].id]);
    await conn.execute('UPDATE categories SET serial_no = ? WHERE id = ?', [nb[0].serial_no, cur[0].id]);
    await conn.commit();
    return NextResponse.json({ ok: true });
  } catch (e) {
    await conn.rollback();
    return NextResponse.json({ error: dbMessage(e) }, { status: 500 });
  } finally {
    conn.release();
  }
}