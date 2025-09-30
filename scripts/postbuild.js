// scripts/postbuild.js
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../backend/assets');
const destDir = path.join(__dirname, '../dist/assets');

fs.mkdirSync(destDir, { recursive: true });

fs.readdirSync(srcDir).forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
});
console.log('Copied widget files to dist/assets');
