# Deploy Digital Byte on Hostinger (`digitalbyte.in`)

The upload zip is a **flat Express app** (not the full monorepo):

```
package.json
dist/index.js      ← API + serves React
public/            ← built website
```

## 1. Create the zip (on your PC)

```powershell
cd D:\Digitalbyte
npm run package:hostinger
```

Upload: `deploy\output\digitalbyte-hostinger.zip`

## 2. Hostinger — upload & settings

| Setting | Value |
|---------|--------|
| **Framework preset** | **Express** (if available), else **Other** |
| **Node version** | **20.x** |
| **Root directory** | `/` |
| **Build command** | **None** (recommended) — app is pre-built. If you must pick a command, use `npm run build` (it only prints a message). |
| **Package manager** | `npm` |
| **Output directory** | `public` |
| **Entry file** | `dist/index.js` |

Hostinger will run `npm install` for root `dependencies`, then start via **Entry file** / `npm start`.

### If you see “Unsupported framework or invalid project structure”

- Re-upload the **new** zip from `package:hostinger` (flat layout with root `package.json` + `dist/` + `public/`).
- Do **not** use `server/dist` or `server/public` in the panel — use **`dist`** and **`public`** at the zip root.
- Do **not** include `node_modules` in the zip.

## 3. Environment variables (hPanel)

| Variable | Value |
|----------|--------|
| `NODE_ENV` | `production` |
| `CLIENT_ORIGIN` | `https://digitalbyte.in,https://www.digitalbyte.in` |
| `CONTACT_EMAIL` | `hello@digitalbyte.in` |
| `RESEND_API_KEY` | your Resend key |
| `RESEND_FROM_EMAIL` | `Digital Byte <noreply@digitalbyte.in>` (after domain verified) |

`PORT` is set by Hostinger — leave it unset in the panel.

## 4. Domain & SSL

Attach **digitalbyte.in**, enable SSL, redeploy if needed.

## 5. Verify

- `https://digitalbyte.in`
- `https://digitalbyte.in/api/health` → `{"ok":true}`
- Contact form test

## Local dev (unchanged)

From repo root: `npm run build` then `npm start` (uses `server/dist` + `server/public`).
