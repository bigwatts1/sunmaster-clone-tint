import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const assetsDir = './src/assets';
let totalBefore = 0;
let totalAfter = 0;
let count = 0;

function findImages(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findImages(full));
    } else if (/\.(jpeg|jpg|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const images = findImages(assetsDir);
console.log(`Found ${images.length} images to compress\n`);

for (const img of images) {
  const ext = path.extname(img);
  const webpPath = img.replace(/\.(jpeg|jpg|png)$/i, '.webp');
  const beforeSize = fs.statSync(img).size;

  const isLogo = img.includes('logo');
  const maxWidth = isLogo ? 400 : 1920;
  const quality = isLogo ? 85 : 80;

  try {
    const metadata = await sharp(img).metadata();
    let pipeline = sharp(img);

    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    await pipeline.webp({ quality }).toFile(webpPath);

    const afterSize = fs.statSync(webpPath).size;
    const savings = ((1 - afterSize / beforeSize) * 100).toFixed(1);

    totalBefore += beforeSize;
    totalAfter += afterSize;
    count++;

    console.log(`${path.basename(img)}: ${(beforeSize/1024).toFixed(0)}KB → ${(afterSize/1024).toFixed(0)}KB (${savings}% smaller)`);
  } catch (e) {
    console.log(`SKIP ${path.basename(img)}: ${e.message}`);
  }
}

console.log(`\n--- TOTAL ---`);
console.log(`${count} images compressed`);
console.log(`Before: ${(totalBefore/1024/1024).toFixed(1)}MB`);
console.log(`After: ${(totalAfter/1024/1024).toFixed(1)}MB`);
console.log(`Saved: ${((totalBefore-totalAfter)/1024/1024).toFixed(1)}MB (${((1-totalAfter/totalBefore)*100).toFixed(1)}%)`);
