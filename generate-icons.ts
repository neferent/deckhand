import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import archiver from 'archiver';

// ESM-compatible __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const iconsDir = path.resolve(__dirname, './public/assets/icons'); // ✅ Moved icons folder
const outputFile = path.resolve(__dirname, './src/icons.ts'); // Output to /src/icons.ts
const zipOutput = path.resolve(__dirname, './public/assets/icons.zip'); // Zip file in public/assets/

// Ensure the public/assets directory exists
const publicAssetsDir = path.resolve(__dirname, './public/assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

// Check if icons directory exists
if (!fs.existsSync(iconsDir)) {
  console.error(`Icons directory not found at: ${iconsDir}`);
  process.exit(1);
}

// Get all files from icons directory
const files = fs.readdirSync(iconsDir);

// Filter images, ignoring those starting with "Artboard"
const icons = files
  .filter((file) => !file.startsWith('Artboard') && /\.(png|jpe?g|svg|gif|webp)$/i.test(file))
  .map((file) => path.parse(file).name);

// Generate TypeScript content for icons.ts
const content = `const ICONS = [${icons.map((icon) => `'${icon}'`).join(', ')}];\nexport default ICONS;\n`;

// Write to src/icons.ts, overwriting existing file
fs.writeFileSync(outputFile, content);
console.log(`Generated src/icons.ts with ${icons.length} icons.`);

// Create a zip file in public/assets/ excluding "Artboard" prefixed files
const output = fs.createWriteStream(zipOutput);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Created ${zipOutput} with ${archive.pointer()} total bytes.`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Append filtered files to the zip
files.forEach((file) => {
  if (!file.startsWith('Artboard')) {
    const filePath = path.join(iconsDir, file);
    archive.file(filePath, { name: file });
  }
});

archive.finalize();
