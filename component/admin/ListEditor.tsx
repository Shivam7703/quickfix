'use client';

type Props = { label: string; items: string[]; onChange: (v: string[]) => void };

export default function ListEditor({ label, items, onChange }: Props) {
  return (
    <div>
      <p className='font-medium mb-1'>{label}</p>
      {items.map((it, i) => (
        <div key={i} className='flex gap-2 mb-2'>
          <textarea
            rows={2}
            value={it}
            onChange={(e) => onChange(items.map((x, j) => (j === i ? e.target.value : x)))}
            className='flex-1 border p-2 rounded'
          />
          <button
            type='button'
            onClick={() => onChange(items.filter((_, j) => j !== i))}
            className='border px-2 rounded'
          >
            ✕
          </button>
        </div>
      ))}
      <button type='button' onClick={() => onChange([...items, ''])} className='border px-3 py-1 rounded text-sm'>
        + Add
      </button>
    </div>
  );
}