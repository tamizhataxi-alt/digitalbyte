import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'deploy', 'output');
const staging = path.join(outDir, 'digitalbyte');
const zipPath = path.join(outDir, 'digitalbyte-hostinger.zip');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

console.log('Building production assets…');
execSync('npm run build', { cwd: root, stdio: 'inherit' });

const serverDist = path.join(root, 'server', 'dist');
const serverPublic = path.join(root, 'server', 'public');
if (!fs.existsSync(path.join(serverDist, 'index.js'))) {
  console.error('Missing server/dist/index.js — build failed.');
  process.exit(1);
}
if (!fs.existsSync(path.join(serverPublic, 'index.html'))) {
  console.error('Missing server/public — run build:static.');
  process.exit(1);
}

fs.rmSync(staging, { recursive: true, force: true });
fs.mkdirSync(staging, { recursive: true });

copyDir(serverDist, path.join(staging, 'dist'));
copyDir(serverPublic, path.join(staging, 'public'));
fs.copyFileSync(
  path.join(root, 'deploy', 'hostinger.package.json'),
  path.join(staging, 'package.json'),
);

console.log('Generating package-lock for Hostinger install…');
execSync('npm install --package-lock-only', { cwd: staging, stdio: 'inherit' });

fs.mkdirSync(outDir, { recursive: true });
if (fs.existsSync(zipPath)) fs.rmSync(zipPath);

if (process.platform === 'win32') {
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${staging}\\*' -DestinationPath '${zipPath}' -Force"`,
    { stdio: 'inherit' },
  );
} else {
  execSync(`cd "${staging}" && zip -r "${zipPath}" .`, { stdio: 'inherit' });
}

console.log(`\nDeploy zip ready:\n${zipPath}\n`);
console.log('Hostinger settings:');
console.log('  Framework: Express (or Other)');
console.log('  Root directory: /');
console.log('  Build command: None  (or npm run build — no-op install only)');
console.log('  Output directory: public');
console.log('  Entry file: dist/index.js');
console.log('  Start: npm start');
