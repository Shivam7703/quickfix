export const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/\s*&\s*/g, "-")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};