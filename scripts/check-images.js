import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else if (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.json')) files.push(full);
  });
  return files;
}

const publicDir = path.join(process.cwd(), 'public');
const srcDir = path.join(process.cwd(), 'src');
const allCodeFiles = walk(srcDir);
const regex = /['"](\/images\/[^'"]+)['"]/g;
const referencedImages = new Set();

allCodeFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    referencedImages.add(match[1]);
  }
});

console.log('Total unique image paths referenced in code:', referencedImages.size);
const missing = [];
const smallOrEmpty = [];

referencedImages.forEach(imgRel => {
  const diskPath = path.join(publicDir, imgRel);
  if (!fs.existsSync(diskPath)) {
    missing.push(imgRel);
  } else {
    const stat = fs.statSync(diskPath);
    if (stat.size < 1000) {
      smallOrEmpty.push({ path: imgRel, size: stat.size });
    }
  }
});

console.log('Missing images:', missing);
console.log('Small or empty images:', smallOrEmpty);

// Check all files in public/images
function checkPublic(dir) {
  let items = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) items = items.concat(checkPublic(full));
    else items.push({ file: full.replace(publicDir, ''), size: fs.statSync(full).size });
  });
  return items;
}

const allPublicImages = checkPublic(path.join(publicDir, 'images'));
console.log('Total files in public/images:', allPublicImages.length);
allPublicImages.filter(x => x.size < 1000).forEach(x => console.log('Suspicious small file:', x));
