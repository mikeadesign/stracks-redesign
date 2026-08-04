import sharp from 'sharp';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

// One-off build-time optimization: these images are static and never
// change, so we pre-shrink/convert them instead of relying on Next's
// request-time image optimizer (unavailable under `output: "export"`).
//
// Full-resolution originals live in source-images/, which is gitignored and
// outside public/ so it is never deployed.
const targets = [
  { src: 'source-images/shop-outside.jpg', out: 'public/images/shop-outside.webp', width: 1600, quality: 72 },
  { src: 'public/images/home/1.jpg', out: 'public/images/home/1.webp', width: 800, quality: 78 },
  { src: 'public/images/home/2.jpg', out: 'public/images/home/2.webp', width: 800, quality: 78 },
  { src: 'public/images/home/3.jpg', out: 'public/images/home/3.webp', width: 800, quality: 78 },
  { src: 'public/images/home/4.jpg', out: 'public/images/home/4.webp', width: 800, quality: 78 },
  { src: 'public/images/home/5.jpg', out: 'public/images/home/5.webp', width: 800, quality: 78 },
  { src: 'public/images/home/6.jpg', out: 'public/images/home/6.webp', width: 800, quality: 78 },
  { src: 'public/images/vendor/NWH-2019-BOF-Logo.jpg', out: 'public/images/vendor/NWH-2019-BOF-Logo.webp', width: 240, quality: 82 },
  // stracks-barbershop-sign-2024.gif intentionally excluded: it's a flat-color
  // logo with transparency — GIF's palette compression already beats lossy WebP here.
];

const { statSync, existsSync } = await import('node:fs');

for (const t of targets) {
  const srcPath = path.join(ROOT, t.src);
  const outPath = path.join(ROOT, t.out);

  // Sources are removed once converted, so a re-run only reprocesses the
  // images whose originals are still present.
  if (!existsSync(srcPath)) {
    console.log(`${t.src}: source missing, skipped`);
    continue;
  }

  await sharp(srcPath)
    .resize({ width: t.width, withoutEnlargement: true })
    .webp({ quality: t.quality })
    .toFile(outPath);

  const before = statSync(srcPath).size;
  const after = statSync(outPath).size;
  const pct = Math.round((1 - after / before) * 100);
  console.log(`${t.src} -> ${t.out}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`);
}
