# Healthwise Chiropractic Clinic — Web Application & Practice Operations Portal

Internal handover and technical operations documentation for **Healthwise Chiropractic Clinic** (730 Bath Road, Cranford, Hounslow TW5 9TW, United Kingdom).

---

## 1. Application Architecture & Key Routes

| Route | Purpose & Key Interfaces | Access Level |
|---|---|---|
| `/` | **Patient Landing Hub:** High-trust medical hero, GCC statutory regulation markers, comprehensive service breakdowns, first-visit patient journey guide, verified practitioner profiles, verbatim patient reviews, clinical FAQ accordion, and interactive appointment enquiry engine. | Public / Indexed |
| `/book-online` | **Clinical Assessment Booking:** Standalone appointment request route with condition routing, practitioner selection, direct phone link, and WhatsApp communication channels. | Public / Indexed |
| `/privacy-policy` | **Patient Data Protection Notice:** UK Data Protection Act 2018 and UK GDPR compliance documentation covering medical health record retention per General Chiropractic Council (GCC) standards. | Public / Indexed |
| `/admin/outreach` | **Practice Growth Portal:** Internal partner referral pipeline, communication volume trend analytics, and active leads triage queue. | Internal / Non-Indexed (`noindex, nofollow`) |
| `/sitemap.xml` | XML sitemap containing public patient routes only. | Public |
| `/robots.txt` | Crawler policy enforcing disallow rules for internal operations and API paths. | Public |

---

## 2. Environment Setup & Operations

### Prerequisites
- Node.js (v20+ LTS or v22+)
- pnpm package manager

### Installation
```bash
pnpm install
```

### Development Server
```bash
pnpm dev
```
Access the application locally at `http://localhost:3000`.

### Production Build & Verification
```bash
pnpm build
```
Creates an optimized production bundle with full static pre-rendering, custom defense headers, and verified asset references.

### Production Execution
```bash
pnpm start
```

---

## 3. Content & Configuration Management

All clinic data is centralized to prevent configuration drift:

- **Clinic Contact & Metadata:** Update `src/config/site.config.ts` (manages telephone numbers, clinic hours, address, canonical URLs, and schema metadata across all pages).
- **Practitioner Profiles & Credentials:** Maintained in `src/lib/mock-data.ts` (`PRACTITIONERS` array).
- **Patient Testimonials & Reviews:** Maintained in `src/lib/mock-data.ts` (`TESTIMONIALS` array).
- **Services & Musculoskeletal Conditions:** Maintained in `src/lib/mock-data.ts` (`SERVICES` and `CONDITIONS` arrays).
- **Brand Tokens & Styles:** Configured in `src/app/globals.css` and `tailwind.config.js`.

---

## 4. Legal & Licensing Notices

Attribution for bundled open-source components is documented in `THIRD_PARTY_NOTICES.md` at the repository root.
