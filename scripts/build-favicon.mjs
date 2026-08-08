import sharp from 'sharp';
import path from 'node:path';
import { readFileSync, writeFileSync } from 'node:fs';

// Rebuilds app/favicon.ico from scripts/favicon-source.svg. Run whenever the
// source art changes; nothing else consumes this at build time.
//
// Embeds PNG-compressed frames in a hand-assembled ICONDIR rather than
// pulling in an ico-writing dependency for one file — valid per the ICO spec
// since Vista, and how most modern favicon generators produce their output.
const ROOT = path.resolve(import.meta.dirname, '..');
const SVG_PATH = path.join(ROOT, 'scripts/favicon-source.svg');
const OUT_PATH = path.join(ROOT, 'app/favicon.ico');
const SIZES = [16, 32, 48];

const svg = readFileSync(SVG_PATH);

const pngs = await Promise.all(
  SIZES.map((size) =>
    sharp(svg, { density: 384 }).resize(size, size).png().toBuffer()
  )
);

// ICONDIR (6 bytes) + one ICONDIRENTRY (16 bytes) per image, then the image
// data back to back in the same order as the directory entries.
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: 1 = icon
header.writeUInt16LE(SIZES.length, 4);

let offset = 6 + SIZES.length * 16;
const entries = [];
for (let i = 0; i < SIZES.length; i++) {
  const size = SIZES[i];
  const png = pngs[i];
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width, 0 means 256
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // color palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // image data size
  entry.writeUInt32LE(offset, 12); // offset from start of file
  entries.push(entry);
  offset += png.length;
}

writeFileSync(OUT_PATH, Buffer.concat([header, ...entries, ...pngs]));
console.log(`wrote ${path.relative(ROOT, OUT_PATH)}: ${SIZES.join('/')}px`);
