import { writeFile, unlink, mkdir } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const IMG_TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};
const MAX_IMG = 5 * 1024 * 1024; // 5 MB
const MAX_PDF = 10 * 1024 * 1024; // 10 MB

// Upload ke time padhta hai, isliye setting missing ho to saaf error aata hai
function cfg() {
  const {
    UPLOAD_DIR, FILES_DIR, IMG_BASE_URL, FILES_BASE_URL, BACKUP_IMG_DIR, BACKUP_FILES_DIR,
  } = process.env;
  if (!UPLOAD_DIR || !FILES_DIR || !IMG_BASE_URL || !FILES_BASE_URL || !BACKUP_IMG_DIR || !BACKUP_FILES_DIR) {
    throw new Error(
      'Upload settings missing in .env (UPLOAD_DIR, FILES_DIR, IMG_BASE_URL, FILES_BASE_URL, BACKUP_IMG_DIR, BACKUP_FILES_DIR)'
    );
  }
  return {
    imgDir: UPLOAD_DIR,
    pdfDir: FILES_DIR,
    imgUrl: IMG_BASE_URL.replace(/[/]+$/, ''),
    pdfUrl: FILES_BASE_URL.replace(/[/]+$/, ''),
    backupImgDir: BACKUP_IMG_DIR,
    backupPdfDir: BACKUP_FILES_DIR,
  };
}

function randomName(ext: string) {
  return `${Date.now()}-${crypto.randomBytes(6).toString('hex')}.${ext}`;
}

// File ko public folder aur backup folder, dono mein same naam se save karta hai.
// Backup copy fail ho jaye to public copy hata deta hai aur upload cancel ho jata hai.
async function store(buf: Buffer, name: string, dir: string, backupDir: string) {
  await mkdir(dir, { recursive: true });
  await mkdir(backupDir, { recursive: true });
  const publicPath = path.join(dir, name);
  await writeFile(publicPath, buf);
  try {
    await writeFile(path.join(backupDir, name), buf);
  } catch {
    await unlink(publicPath).catch(() => {});
    throw new Error('Backup copy failed, upload cancelled');
  }
}

// Poora public URL return karta hai, wahi database mein store hota hai
export async function saveImage(file: File): Promise<string> {
  const ext = IMG_TYPES[file.type];
  if (!ext) throw new Error('Only JPG, PNG or WEBP images are allowed');
  if (file.size > MAX_IMG) throw new Error('Image is larger than 5 MB');
  const { imgDir, imgUrl, backupImgDir } = cfg();
  const name = randomName(ext);
  await store(Buffer.from(await file.arrayBuffer()), name, imgDir, backupImgDir);
  return `${imgUrl}/${name}`;
}

export async function savePdf(file: File): Promise<string> {
  if (file.type !== 'application/pdf') throw new Error('Only PDF files are allowed');
  if (file.size > MAX_PDF) throw new Error('PDF is larger than 10 MB');
  const { pdfDir, pdfUrl, backupPdfDir } = cfg();
  const name = randomName('pdf');
  await store(Buffer.from(await file.arrayBuffer()), name, pdfDir, backupPdfDir);
  return `${pdfUrl}/${name}`;
}

// Sirf PUBLIC copy delete karta hai. Backup copy ko kabhi nahi chhuta.
// Purane external URL ko bhi chhod deta hai.
export async function removeFile(url: string | null | undefined) {
  if (!url) return;
  const { imgDir, pdfDir, imgUrl, pdfUrl } = cfg();
  let dir: string | null = null;
  if (url.startsWith(imgUrl + '/')) dir = imgDir;
  else if (url.startsWith(pdfUrl + '/')) dir = pdfDir;
  if (!dir) return;
  try {
    await unlink(path.join(dir, path.basename(url)));
  } catch {
    // file pehle se nahi hai, kuch karna nahi
  }
} 