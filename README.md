# Healthwise Chiropractic Clinic Rebuild & Internal Outreach Dashboard

Modern high-conversion website rebuild and internal practice outreach dashboard for **Healthwise Chiropractic Clinic** (730 Bath Rd, Cranford, Hounslow TW5 9TW, UK).

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **Shadcn UI (Radix Primitives)**, and **Bklit Charts**.

---

## 🚀 Live Demo & Key Pages

| Route | Purpose & Key Features |
|---|---|
| `/` | **Master Landing Page:** Single semantic `<h1>`, high-trust medical hero, GCC accreditation badges, comprehensive services breakdown, step-by-step first-visit journey walkthrough, verified practitioner profiles, 10 verbatim Google patient reviews, clinical FAQ accordion, and interactive appointment enquiry engine. |
| `/book-online` | **Dedicated Appointment Engine:** Solves the circular loop bug. Standalone booking page with condition routing, practitioner selection, click-to-call, and WhatsApp actions. |
| `/admin/outreach` | **Internal Sales & Outreach Dashboard:** Designed with identical brand tokens. Features 5 KPI metric cards with Lucide icons and delta indicators, Bklit Conversion Funnel chart, 12-week Volume & Replies trend area chart, and active leads queue table. All sample data visibly marked. |
| `/privacy-policy` | **UK GDPR & Data Protection Policy:** Patient health record compliance notice per GCC retention standards. |
| `/sitemap.xml` | Dynamically generated Next.js XML sitemap. |
| `/robots.txt` | Standard search crawler indexing directives. |

---

## 📱 Mobile-First Optimisation

- **Thumb-Zone Sticky Action Bar:** Fixed persistent bottom navigation on mobile viewports (`< 768px`) with direct **Call Clinic** (`tel:+442087597177`), **WhatsApp** chat, and **Book Online** actions with iPhone safe-area inset support (`env(safe-area-inset-bottom)`).
- **Responsive Drawer:** Slide-down navigation drawer on mobile with large touch targets.
- **Zero Horizontal Overflow:** Strict layout grid responsive from 360px up to 4K displays.
- **Single Canonical Phone Link:** Standardized international E.164 phone number (`+442087597177`) used consistently across all header, body, footer, and mobile bar triggers, fixing the dialer bug.

---

## 🛠️ Audit Fixes Verified

- **Fix #1 (P0):** `/book-online` circular loop resolved; replaced with working interactive appointment engine and zero self-referencing links.
- **Fix #2 (P0):** Form dropdown options now have valid string values (`value="initial_consultation"`, etc.); replaced raw textareas with an accessible Radix checkbox for GDPR consent.
- **Fix #3 (P1):** Removed stale £60 summer popup modal.
- **Fix #4 (P1):** Added sticky mobile CTA bar with one-touch Call and WhatsApp channels.
- **Fix #5 (P1):** Enforced single canonical phone link `tel:+442087597177` across all pages.
- **Fix #6 (P1):** Next.js Server Components with static generation, zero heavy Elementor assets, explicit image dimensions, and sub-160KB initial JS payload.
- **Fix #7 (P2):** All 6 HTTP defense security headers (`HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-DNS-Prefetch-Control`) configured in `next.config.ts`.

---

## 💻 Running Locally & Building

### Prerequisites
- Node.js `v20+` or `v24+`
- `pnpm` (or `npm`)

### Install Dependencies
```bash
pnpm install
```

### Start Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Create Production Build
```bash
pnpm build
```

### Start Production Server
```bash
pnpm start
```

---

## 📝 How to Edit Content

- **Clinic Constants & Phone Numbers:** Edit `src/lib/constants.ts` (updates phone, address, hours, and clinic info everywhere automatically).
- **Practitioners & Bios:** Edit `PRACTITIONERS` array in `src/lib/mock-data.ts`.
- **Verbatim Patient Testimonials:** Edit `TESTIMONIALS` array in `src/lib/mock-data.ts`.
- **Services & Conditions:** Edit `SERVICES` and `CONDITIONS` arrays in `src/lib/mock-data.ts`.
- **Dashboard Outreach Data:** Edit `DASHBOARD_KPIS`, `FUNNEL_STAGES`, and `RECENT_LEADS` in `src/lib/mock-data.ts`.
- **Design Tokens & Theme Colors:** Edit `src/app/globals.css` and `tailwind.config.js`.

---

## 🚢 Deployment

Ready for one-click deployment to **Vercel**, **Cloudflare Pages**, or any Node.js hosting platform:
```bash
# Deploy to Vercel
pnpm dlx vercel
```
Or export static HTML by setting `output: 'export'` in `next.config.ts` if static S3/Netlify hosting is preferred.
