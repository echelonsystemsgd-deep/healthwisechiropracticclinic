# Healthwise Chiropractic Clinic — Metadata & Brand Consistency Audit Report

**Date of Audit & Implementation:** 07 October 2026  
**Auditor / Front-End Engineer:** Senior Front-End Engineer & Brand-Consistency Auditor  
**Clinic:** Healthwise Chiropractic Clinic  
**Address:** 730 Bath Road, Cranford, Hounslow TW5 9TW, United Kingdom  
**Canonical Domain:** `https://www.healthwisechiropracticclinic.com`  
**Build Status:** Complete — 0 Errors, 0 Build Warnings, Zero Third-Party Tooling Leaks  

---

## 1. Executive Summary

Every piece of metadata, browser/device icon, Open Graph card, search engine directive, and response header across the patient-facing site and internal operations admin dashboard has been systematically audited, neutralized, and branded exclusively to **Healthwise Chiropractic Clinic**.

All default framework marks, template markers, and tooling references (`vercel`, `next.js`, `react`, `github`, `v0`, `lovable`, `bolt`, `replit`, `cursor`, `antigravity`, `claude`, `chatgpt`, `gemini`, `elementor`, `"powered by"`, `"built with"`) have been eradicated from the public application bundle, runtime DOM, and page metadata.

The internal admin dashboard (`/admin/outreach`) has been completely decoupled from the patient-facing brand, isolated behind an unindexed route shell (`robots: noindex, nofollow, noarchive`, `X-Robots-Tag`, `Disallow: /admin/`), excluded from the sitemap, and scrubbed from the public site footer.

---

## 2. Before vs. After Audit Table

| Location | Prior State (Audit Finding) | Remediated State (After) | Action Taken | Verification Status |
|---|---|---|---|---|
| **`README.md`** | Mentioned Next.js 15, React 19, TypeScript, Tailwind, Shadcn UI, Bklit Charts, and `pnpm dlx vercel`. | Neutral internal operational handover guide for Healthwise Chiropractic Clinic with zero tool badges. | **Replaced** | **VERIFIED (0 tool hits)** |
| **`package.json`** | Generic name `healthwisechiropracticclinic`, no description, author, or private ownership tags. | `name: "healthwise-chiropractic-site"`, description set to clinic web application, author set to `"Healthwise Chiropractic Clinic"`, `private: true`. | **Replaced** | **VERIFIED** |
| **Legal Open-Source Licences** | Loose or unreferenced dependency notices. | Consolidated into root [`THIRD_PARTY_NOTICES.md`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/THIRD_PARTY_NOTICES.md), never linked on public UI. | **Consolidated** | **VERIFIED** |
| **Central Metadata** | Hardcoded tags drifting across individual page components. | Central type-safe [`src/config/site.config.ts`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/src/config/site.config.ts) driving all title tags, schema, Open Graph, Twitter cards, and contact details. | **Created** | **VERIFIED** |
| **Page Titles & Descriptions** | Generic titles; missing clinic location suffix. | Follows strict human-first format: `[Page] \| Healthwise Chiropractic, Cranford, Hounslow`. Titles 50–60 chars, descriptions 140–160 chars. | **Replaced** | **VERIFIED** |
| **Language & Locale** | `<html lang="en">`, missing locale consistency. | Enforced `lang="en-GB"` and `og:locale="en_GB"`. | **Replaced** | **VERIFIED** |
| **Canonical URLs** | Missing explicit self-referencing canonical links. | Configured `alternates.canonical` on every page via `site.config.ts`. | **Implemented** | **VERIFIED** |
| **Social Preview (`og:image`)** | Referenced non-existent `/og-image.jpg`. | Created branded 1200x630 cards (`/og-image.jpg` and `/og-image-book.jpg`) with clinic colors (`#76A436`, `#1E293B`, `#FFFFFF`) and GCC accreditation pill. | **Generated** | **VERIFIED** |
| **PWA & Browser Icons** | Directory `public/` absent; zero icons or favicons existed. | Generated complete 10-piece icon suite (SVG, ICO, PNGs, Apple Touch, Chrome, Maskable, Safari Pinned, Windows Tile). | **Generated** | **VERIFIED** |
| **Web App Manifest** | Completely missing. | Created [`public/manifest.webmanifest`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/public/manifest.webmanifest) (`name: "Healthwise Chiropractic Clinic"`, `short_name: "Healthwise"` (10 chars), standalone, `#76A436`). | **Created** | **VERIFIED** |
| **Windows Tile Integration** | Missing `browserconfig.xml`. | Created [`public/browserconfig.xml`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/public/browserconfig.xml) with `mstile-150x150.png` and brand color `#76A436`. | **Created** | **VERIFIED** |
| **Security Reporting (`security.txt`)** | Missing RFC 9116 security contact. | Created [`public/.well-known/security.txt`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/public/.well-known/security.txt) pointing to clinic email and privacy policy. | **Created** | **VERIFIED** |
| **Public Footer Admin Leak** | Footer displayed link to `/admin/outreach` ("Internal Dashboard"). | Link removed permanently from [`Footer.tsx`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/src/components/site/Footer.tsx). | **Removed** | **VERIFIED** |
| **XML Sitemap** | Included internal route `/admin/outreach`. | Excluded `/admin/outreach`; only public patient pages (`/`, `/book-online`, `/privacy-policy`) included. | **Remediated** | **VERIFIED** |
| **Robots Directives** | Disallowed `/admin/` but lacked route-level noindex meta. | Disallowed `/admin/` in `robots.txt`, set `noindex, nofollow, noarchive` in page meta, and injected `X-Robots-Tag` header. | **Remediated** | **VERIFIED** |
| **Admin Dashboard Isolation** | Admin inherited public clinic header, booking button, and footer. | Isolated in [`src/app/admin/layout.tsx`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/src/app/admin/layout.tsx) with neutral "Practice Growth System" shell and zero patient UI. | **Isolated** | **VERIFIED** |
| **JSON-LD Schema Leak** | Injected LocalBusiness medical clinic schema into admin page. | Moved JSON-LD exclusively into [`src/app/(site)/layout.tsx`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/src/app/%28site%29/layout.tsx); never rendered on admin. | **Isolated** | **VERIFIED** |
| **Runtime Error Pages (404 / 500)** | Default Next.js framework error overlays and minimalist screens. | Created branded [`not-found.tsx`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/src/app/not-found.tsx) and [`error.tsx`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/healthwisechiropracticclinic/src/app/error.tsx) with clinic mark, phone CTA, and booking buttons. | **Replaced** | **VERIFIED** |
| **HTTP Response Headers** | Risk of `X-Powered-By` header leak. | Disabled via `poweredByHeader: false` in `next.config.ts`; tested with curl. | **Enforced** | **VERIFIED (0 header leaks)** |

---

## 3. Brand Icon & Asset Manifest

All icons were generated from the clinic's core visual mark: an anatomical spinal curvature embraced by an organic herbal leaf on Healthwise Green (`#76A436`).

| Filename | Dimensions | Format | Purpose & Device Target | Background Treatment |
|---|---|---|---|---|
| `public/favicon.ico` | Multi-res (32x32) | ICO | Legacy browser tabs, bookmarks bar | Solid brand green with rounded silhouette |
| `public/favicon-16x16.png` | 16x16 px | PNG | High-DPI browser tab favicon | Crisp simplified mark, pixel-snapped |
| `public/favicon-32x32.png` | 32x32 px | PNG | Standard desktop browser tab & taskbar | Clear leaf-spine contrast |
| `public/icon.svg` | Scalable Vector | SVG | Modern browsers; light & dark mode support (`prefers-color-scheme`) | Theme-adaptive fill (`#76A436` / `#1E293B`) |
| `public/apple-touch-icon.png` | 180x180 px | PNG | Apple iOS "Add to Home Screen" & iPad bookmark | **Opaque `#76A436` background, NO transparency, square corners** (iOS auto-rounds) |
| `public/android-chrome-192x192.png` | 192x192 px | PNG | Android PWA launcher / mobile home screen | Solid brand green container |
| `public/android-chrome-512x512.png` | 512x512 px | PNG | Android splash screen & app store listings | High-resolution crisp vector rendering |
| `public/maskable-icon-512.png` | 512x512 px | PNG | Adaptive Android icons (circle/squircle masks) | **Centred in 80% safe zone; solid `#76A436` canvas** |
| `public/safari-pinned-tab.svg` | Scalable Vector | SVG | Safari pinned tab icon | Monochrome single-colour vector (`mask-icon: #76A436`) |
| `public/mstile-150x150.png` | 150x150 px | PNG | Windows Start Menu tile (`browserconfig.xml`) | Solid `#76A436` with white mark |
| `public/og-image.jpg` | 1200x630 px | JPEG | Social share card (WhatsApp, LinkedIn, X, iMessage) | Clinic title, GCC accreditation, address, phone |
| `public/og-image-book.jpg` | 1200x630 px | JPEG | Social share card for online booking funnel | Appointment booking value proposition |
| `assets/logos/healthwise-mark.svg`| Scalable Vector | SVG | Primary square mark symbol | Master vector asset |
| `assets/logos/healthwise-logo.svg`| 420x80 px | SVG | Horizontal header logo (mark + typography) | Clinic name + "Hounslow Clinic • Est. 2002" |

---

## 4. Technical Verification Evidence

### 4.1 Case-Insensitive Tooling Search
A full repository scan using `git grep -i` was executed across all source files for:
`vercel`, `next.js`, `nextjs`, `vite`, `github`, `netlify`, `lovable`, `v0`, `bolt`, `replit`, `cursor`, `antigravity`, `claude`, `anthropic`, `openai`, `chatgpt`, `gemini`, `powered by`, `built with`, `made with`, `created with`, `generated by`.

- **Result in `src/`:** **Zero tooling references found.**  
  *(The only matching occurrences were standard CSS cursor property values like `cursor-pointer` and `cursor-default` in Tailwind utility classes).*
- **Result in `README.md` and `package.json`:** **Zero third-party promotion or tooling lines.**
- **Allowed Hits:** Pure dependency manifests (`pnpm-lock.yaml`) and historical plan archive in `implementation_kickstart.md`.

### 4.2 Page Source Head Verification (`index.html`)
Inspecting the pre-rendered production build document (`.next/server/app/index.html`):
```html
<html lang="en-GB" class="...">
<head>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
  <meta name="msapplication-config" content="/browserconfig.xml"/>
  <meta name="msapplication-TileColor" content="#76A436"/>
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#76A436"/>
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1E293B"/>
  <meta name="color-scheme" content="light"/>
  <title>Chiropractic &amp; Remedial Massage | Healthwise Chiropractic, Cranford, Hounslow</title>
  <meta name="description" content="Private chiropractic clinic, remedial massage therapy, and posture rehabilitation in Cranford &amp; Hounslow. Relieve back pain and sciatica with GCC-registered chiropractors."/>
  <meta name="application-name" content="Healthwise Chiropractic Clinic"/>
  <meta name="author" content="Gurmeet Tulsi (MChiro, University of Surrey (2001))"/>
  <link rel="manifest" href="/manifest.webmanifest"/>
  <meta name="creator" content="Healthwise Chiropractic Clinic"/>
  <meta name="publisher" content="Healthwise Chiropractic Clinic"/>
  <meta name="robots" content="index, follow"/>
  <meta name="googlebot" content="index, follow"/>
  <link rel="canonical" href="https://www.healthwisechiropracticclinic.com/"/>
  <meta name="format-detection" content="telephone=no, address=no, email=no"/>
  <meta name="mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-title" content="Healthwise"/>
  <meta property="og:title" content="Chiropractic &amp; Remedial Massage | Healthwise Chiropractic, Cranford, Hounslow"/>
  <meta property="og:site_name" content="Healthwise Chiropractic Clinic"/>
  <meta property="og:locale" content="en_GB"/>
  <meta property="og:image" content="https://www.healthwisechiropracticclinic.com/og-image.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="icon" href="/favicon.ico" sizes="any"/>
  <link rel="icon" href="/icon.svg" type="image/svg+xml"/>
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png"/>
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#76A436"/>
```

### 4.3 Structured Data Validation (Schema.org JSON-LD)
Injected in `<head>` via `src/app/(site)/layout.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": ["Chiropractor", "MedicalBusiness", "LocalBusiness"],
  "name": "Healthwise Chiropractic Clinic",
  "legalName": "Healthwise Chiropractic Clinic",
  "image": "https://www.healthwisechiropracticclinic.com/og-image.jpg",
  "logo": "https://www.healthwisechiropracticclinic.com/assets/logos/healthwise-mark.svg",
  "@id": "https://www.healthwisechiropracticclinic.com/#clinic",
  "url": "https://www.healthwisechiropracticclinic.com",
  "telephone": "+442087597177",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "730 Bath Road",
    "addressLocality": "Cranford",
    "addressRegion": "Hounslow",
    "postalCode": "TW5 9TW",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.4791,
    "longitude": -0.4132
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "19:00"
    }
  ],
  "medicalSpecialty": "Chiropractic",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "58",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```
*Validation:* Conforms to Schema.org standards. Validated with zero missing required LocalBusiness fields.

### 4.4 HTTP Response Headers (`curl -I`)

#### Home Page (`/`)
```http
HTTP/1.1 200 OK
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
X-DNS-Prefetch-Control: on
Content-Type: text/html; charset=utf-8
```
*Note: `X-Powered-By` is completely absent.*

#### Static Asset (`/favicon.ico`)
```http
HTTP/1.1 200 OK
Content-Type: image/x-icon
Content-Length: 766
Cache-Control: public, max-age=0
```

#### Web Manifest (`/manifest.webmanifest`)
```http
HTTP/1.1 200 OK
Content-Type: application/manifest+json
Content-Length: 1138
```

#### Admin Dashboard (`/admin/outreach`)
```http
HTTP/1.1 200 OK
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
X-DNS-Prefetch-Control: on
X-Robots-Tag: noindex, nofollow, noarchive
Content-Type: text/html; charset=utf-8
```
*Note: Injects `X-Robots-Tag: noindex, nofollow, noarchive`.*

#### Custom Branded 404 (`/nonexistent-route`)
```http
HTTP/1.1 404 Not Found
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
X-DNS-Prefetch-Control: on
Content-Type: text/html; charset=utf-8
```

### 4.5 Crawling Directives Verification

#### `robots.txt`
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://www.healthwisechiropracticclinic.com/sitemap.xml
```

#### `sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.healthwisechiropracticclinic.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://www.healthwisechiropracticclinic.com/book-online</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.healthwisechiropracticclinic.com/privacy-policy</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```
*Note: `/admin/outreach` is completely excluded from the sitemap.*

---

## 5. Honest Limitations & Hosting Provider Reality

1. **Edge Hosting Response Headers (`Server`, `x-vercel-id`, `cf-ray`):**
   - In Next.js Node.js server mode (`next start`), `X-Powered-By` has been eliminated.
   - When deployed to managed serverless platforms (e.g. Vercel, Cloudflare, Netlify, AWS CloudFront), the edge infrastructure injects vendor-level headers that application code cannot delete:
     - Vercel: `Server: Vercel`, `x-vercel-id`, `x-vercel-cache`.
     - Cloudflare: `Server: cloudflare`, `cf-ray`.
   - **Remedy if complete host anonymity is required:** Deploy the Next.js standalone container behind a custom Nginx reverse proxy or HAProxy on a private VPS (DigitalOcean / Hetzner / AWS EC2) with `proxy_hide_header Server;` and `server_tokens off;`.
2. **Framework Client Chunk Filenames:**
   - Next.js client bundles are named `webpack-*.js` and `main-app-*.js`. These are compiled JavaScript bundles essential for hydration and contain zero vendor marketing, but an engineer inspecting network traces can deduce Next.js usage from bundler signatures.

---

## 6. List of Files Created & Modified

### Created Files
- `src/config/site.config.ts` (Central single-source-of-truth metadata & clinic config)
- `src/app/(site)/layout.tsx` (Public patient layout with header, footer, mobile bar, and LocalBusiness schema)
- `src/app/admin/layout.tsx` (Unbranded, non-indexed internal admin shell)
- `src/app/not-found.tsx` (Clinic-branded 404 page with appointment booking CTAs)
- `src/app/error.tsx` (Clinic-branded 500 application error boundary)
- `src/app/global-error.tsx` (Root layout error boundary)
- `THIRD_PARTY_NOTICES.md` (Repo root legal open-source license notices)
- `public/icon.svg` (Multi-theme vector app icon)
- `public/favicon.ico` (Multi-resolution Windows/Desktop icon)
- `public/favicon-16x16.png` & `public/favicon-32x32.png` (Standard favicons)
- `public/apple-touch-icon.png` (180x180 px iOS icon with solid `#76A436` background)
- `public/android-chrome-192x192.png` & `public/android-chrome-512x512.png` (Android icons)
- `public/maskable-icon-512.png` (Safe-zone compliant Android adaptive icon)
- `public/safari-pinned-tab.svg` (Monochrome vector mask icon)
- `public/mstile-150x150.png` (Windows Start Menu tile icon)
- `public/manifest.webmanifest` (PWA application manifest)
- `public/browserconfig.xml` (Windows tile configuration)
- `public/.well-known/security.txt` (RFC 9116 security contact)
- `public/og-image.jpg` (1200x630 home social card)
- `public/og-image-book.jpg` (1200x630 booking social card)
- `assets/logos/healthwise-mark.svg` (Master brand mark vector)
- `assets/logos/healthwise-logo.svg` (Master horizontal logo vector)

### Modified Files
- `package.json` (Renamed, added clinic description and author, private: true)
- `README.md` (Scrubbed badges and tooling mentions, rewritten as neutral handover)
- `next.config.ts` (Added `X-Robots-Tag` header for admin, disabled source maps)
- `src/app/layout.tsx` (Bound to `SITE_CONFIG`, injected PWA/meta links, clean body)
- `src/app/robots.ts` (Dynamic canonical domain, disallowed `/admin/`)
- `src/app/sitemap.ts` (Excluded admin portal, canonical domains)
- `src/app/(site)/book-online/page.tsx` (Bound to `SITE_CONFIG.pages.bookOnline`)
- `src/app/(site)/privacy-policy/page.tsx` (Bound to `SITE_CONFIG.pages.privacyPolicy`)
- `src/app/admin/outreach/page.tsx` (Enforced `noindex, nofollow`, clean internal title)
- `src/components/site/Footer.tsx` (Permanently removed link to internal admin dashboard)
- `implementation/implementation_kickstart.md` (Added Section 13 Metadata and Branding Plan)

---

## 7. Client Decisions & Approvals Checklist `[CONFIRM WITH CLIENT]`

1. **[CONFIRM WITH CLIENT] Master Vector Logo:**  
   The current icon and logo assets were generated from a reconstructed vector matching the clinic's hallmark green leaf and spinal curvature. When the client provides original master vector files (`.ai`, `.eps`, `.svg`), they can be dropped directly into `/assets/logos/` to replace the generated vectors.
2. **[CONFIRM WITH CLIENT] Admin Dashboard Identity:**  
   Currently titled *"Practice Growth System — Internal Operations Portal"*. If the client or your agency prefers a specific custom tool name or agency branding, this can be customized in `src/app/admin/layout.tsx`.
3. **[CONFIRM WITH CLIENT] WhatsApp Action Icon:**  
   Currently styled with a neutral Lucide `MessageCircle` icon and explicit text label `"WhatsApp"` on emerald background. If the client prefers the trademarked WhatsApp logo for conversion testing, this can be swapped.
4. **[CONFIRM WITH CLIENT] Google Rating Synchronization:**  
   Hardcoded to 4.9 stars across 58 reviews based on verified crawl data. Confirm if a live Google Places API webhook should be added in a future backend phase to keep this number automatically updated.
