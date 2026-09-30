# Digital Byte

Marketing site and contact enquiry API for [Digital Byte](https://digitalbyte.in).

- **Frontend:** React 19, TypeScript, Vite, Tailwind (`client/`)
- **Backend:** Express enquiry API (`server/`) — emails via [Resend](https://resend.com)

## Local development

```bash
# Terminal 1 — API (from repo root, uses .env)
cd server && npm install && npm run dev

# Terminal 2 — site
cd client && npm install && npm run dev
```

Open `http://localhost:5173` (Vite proxies `/api` to port 3001).

Copy `.env.example` to `.env` in the **repo root** and set `RESEND_API_KEY` and `CONTACT_EMAIL`.

## Production build

```bash
npm run build
npm start
```

Serves the built site from `server/public` and API on `PORT` (default 3001).

## Deploy on Render

1. Push this repo to GitHub.
2. [Render](https://render.com) → **New** → **Web Service** → connect `tamizhataxi-alt/digitalbyte`.
3. Settings:
   - **Root directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Start command:** `npm start`
   - **Health check path:** `/api/health`
4. **Environment variables:**

   | Key | Example |
   |-----|---------|
   | `NODE_ENV` | `production` |
   | `CLIENT_ORIGIN` | `https://your-service.onrender.com` (update after first deploy; add custom domain later) |
   | `CONTACT_EMAIL` | `hello@digitalbyte.in` |
   | `RESEND_API_KEY` | your Resend API key |
   | `RESEND_FROM_EMAIL` | optional, after domain verified in Resend |

5. Deploy. Share the `*.onrender.com` URL with your client for review.

Or import `render.yaml` as a **Blueprint** and fill in secret env vars in the dashboard.

## Deploy on Hostinger

See [deploy/HOSTINGER.md](deploy/HOSTINGER.md) and `npm run package:hostinger` for the upload zip.

## License

Private — Digital Byte.
