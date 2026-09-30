import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const from = path.join(root, 'client', 'dist');
const to = path.join(root, 'server', 'public');

if (!fs.existsSync(from)) {
  console.error('Missing client build. Run: npm run build:client');
  process.exit(1);
}

fs.rmSync(to, { recursive: true, force: true });
fs.cpSync(from, to, { recursive: true });
console.log('Copied client/dist → server/public');
