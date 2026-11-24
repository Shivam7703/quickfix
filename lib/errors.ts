// Turns MySQL error codes into messages the dashboard can show
export function dbMessage(e: unknown): string {
  const err = e as { code?: string; message?: string };
  if (err.code === 'ER_DUP_ENTRY') return 'This value already exists (label and serial number must be unique)';
  if (err.code === 'ER_ROW_IS_REFERENCED_2') return 'This category still has products. Delete or move them first';
  if (err.code === 'ER_NO_REFERENCED_ROW_2') return 'Selected category does not exist';
  return err.message ?? 'Server error';
}