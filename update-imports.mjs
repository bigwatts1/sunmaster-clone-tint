import fs from 'node:fs';
import path from 'node:path';

function findTsFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      files.push(...findTsFiles(full));
    } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const tsFiles = findTsFiles('./src');
let totalChanges = 0;

for (const file of tsFiles) {
  let content = fs.readFileSync(file, 'utf-8');
  const original = content;

  // Replace .jpeg/.jpg/.png with .webp in asset imports
  content = content.replace(/(["']@\/assets\/[^"']+)\.(jpeg|jpg|png)(["'])/g, '$1.webp$3');

  if (content !== original) {
    fs.writeFileSync(file, content);
    const lines = content.split('\n').filter(l => l.includes('.webp')).length;
    console.log(`${path.basename(file)}: updated`);
    totalChanges++;
  }
}

console.log(`\n${totalChanges} files updated to use .webp imports`);
