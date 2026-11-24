'use client';
import type { TableData } from '@/lib/types';

type Props = { label: string; data: TableData; onChange: (v: TableData) => void };

export default function TableEditor({ label, data, onChange }: Props) {
  function setCell(r: number, c: number, v: string) {
    onChange({
      ...data,
      rows: data.rows.map((row, i) => (i === r ? row.map((x, j) => (j === c ? v : x)) : row)),
    });
  }

  return (
    <div>
      <p className='font-medium mb-1'>{label}</p>
      <div className='overflow-x-auto'>
        <table className='text-sm border'>
          <thead>
            <tr>
              {data.heading.map((h, i) => (
                <th key={i} className='border px-2 py-1 text-left whitespace-nowrap'>
                  {h}
                </th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, r) => (
              <tr key={r}>
                {data.heading.map((_, c) => (
                  <td key={c} className='border p-1'>
                    <input
                      value={row[c] ?? ''}
                      onChange={(e) => setCell(r, c, e.target.value)}
                      className='w-full min-w-24 border px-1 py-1 rounded'
                    />
                  </td>
                ))}
                <td className='p-1'>
                  <button
                    type='button'
                    onClick={() => onChange({ ...data, rows: data.rows.filter((_, i) => i !== r) })}
                    className='border px-2 rounded'
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type='button'
        onClick={() => onChange({ ...data, rows: [...data.rows, Array(data.heading.length).fill('')] })}
        className='mt-2 border px-3 py-1 rounded text-sm'
      >
        + Add row
      </button>
    </div>
  );
}