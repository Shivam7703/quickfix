import { NextResponse } from 'next/server';
import type { ResultSetHeader, RowDataPacket } from 'mysql2';
import { pool } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { dbMessage } from '@/lib/errors';

export async function GET() {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT id, label, serial_no FROM categories ORDER BY serial_no ASC'
  );
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { label } = await req.json();
    const name = String(label ?? '').trim();
    if (!name) return NextResponse.json({ error: 'Label is required' }, { status: 400 });

    const [r] = await pool.query<RowDataPacket[]>(
      'SELECT COALESCE(MAX(serial_no), 0) + 1 AS next FROM categories'
    );
    const [res] = await pool.execute<ResultSetHeader>(
      'INSERT INTO categories (label, serial_no) VALUES (?, ?)',
      [name, r[0].next]
    );
    return NextResponse.json({ id: res.insertId }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: dbMessage(e) }, { status: 400 });
  }
}