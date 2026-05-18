const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assets = [
  'src/assets/hero.png',
];

// include public placeholders
const publicImgs = [
  'public/project-placeholder-1.svg',
  'public/project-placeholder-2.svg',
  'public/project-placeholder-3.svg',
  'public/avatar.svg'
];

async function convert(file) {
  const ext = path.extname(file).toLowerCase();
  const base = file.replace(ext, '');
  try {
    if (ext === '.svg') return; // skip svg
    await sharp(file)
      .webp({ quality: 80 })
      .toFile(base + '.webp');
    await sharp(file)
      .avif({ quality: 60 })
      .toFile(base + '.avif');
    console.log('Converted', file);
  } catch (e) {
    console.error('Failed', file, e.message);
  }
}

(async () => {
  const list = assets.concat(publicImgs);
  for (const f of list) {
    if (fs.existsSync(f)) await convert(f);
    else console.warn('Not found:', f);
  }
})();
