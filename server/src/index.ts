import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { enquiryRouter } from './routes/enquiry.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envCandidates = [
  path.resolve(__dirname, '../.env'),
  path.resolve(__dirname, '../../.env'),
  path.resolve(process.cwd(), '.env'),
];
for (const envPath of envCandidates) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    break;
  }
}

const app = express();
const port = Number(process.env.PORT) || 3001;
const isProduction = process.env.NODE_ENV === 'production';
const staticDir = path.resolve(__dirname, '../public');
const hasStatic = fs.existsSync(path.join(staticDir, 'index.html'));

app.set('trust proxy', 1);

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN?.split(',').map((o) => o.trim()) ?? [
      'http://localhost:5173',
    ],
  }),
);
app.use(express.json({ limit: '32kb' }));

app.use(
  '/api/enquiry',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please try again later.' },
  }),
  enquiryRouter,
);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

if (hasStatic) {
  app.use(express.static(staticDir, { index: false, maxAge: isProduction ? '7d' : 0 }));

  app.get(/^(?!\/api\/).*/, (req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next();
      return;
    }
    res.sendFile(path.join(staticDir, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', () => {
  const mode = hasStatic ? 'site + API' : 'API only';
  console.log(`Digital Byte (${mode}) listening on port ${port}`);
});
