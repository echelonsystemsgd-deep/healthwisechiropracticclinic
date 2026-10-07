import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/lib/constants";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import { SITE_CONFIG } from "@/config/site.config";

export const metadata: Metadata = {
  title: SITE_CONFIG.pages.privacyPolicy.title,
  description: SITE_CONFIG.pages.privacyPolicy.description,
  alternates: {
    canonical: SITE_CONFIG.pages.privacyPolicy.canonical,
  },
  openGraph: {
    title: SITE_CONFIG.pages.privacyPolicy.title,
    description: SITE_CONFIG.pages.privacyPolicy.description,
    url: SITE_CONFIG.pages.privacyPolicy.canonical,
    type: "website",
    locale: SITE_CONFIG.locale,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.pages.privacyPolicy.ogImage,
        width: 1200,
        height: 630,
        alt: "Privacy & Patient Data Protection Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.pages.privacyPolicy.title,
    description: SITE_CONFIG.pages.privacyPolicy.description,
    images: [SITE_CONFIG.pages.privacyPolicy.ogImage],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 text-slate-600">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to Home
          </Link>
        </Button>

        <div className="border-b border-slate-200 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Legal &amp; Compliance
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
            Privacy &amp; Patient Data Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last updated: October 2026 • In compliance with the UK Data Protection Act 2018 &amp; UK GDPR
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-slate-900">
              1. Data Controller Information
            </h2>
            <p>
              Healthwise Chiropractic Clinic, located at 730 Bath Road, Cranford, Hounslow, Greater London, TW5 9TW, United Kingdom, is the designated Data Controller under the UK General Data Protection Regulation (UK GDPR).
            </p>
            <p>
              If you have any questions regarding your health records or personal information, please contact our Data Protection Officer at: <span className="font-medium">{CLINIC_CONFIG.email}</span> or by telephone at <span className="font-medium">{CLINIC_CONFIG.phoneDisplay}</span>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-slate-900">
              2. What Personal Data We Collect
            </h2>
            <p>When you contact us, book an appointment, or undergo clinical care, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Contact Details:</strong> Full name, telephone number, email address, home address, and emergency contact.</li>
              <li><strong>Appointment Requests:</strong> Preferred consultation dates, main symptoms, and reason for inquiry.</li>
              <li><strong>Clinical Special Category Data:</strong> Medical case history, medication lists, past injuries, imaging reports (X-rays/MRIs), and clinical examination findings required by the General Chiropractic Council (GCC) for safe diagnosis and treatment.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-slate-900">
              3. Legal Basis for Processing
            </h2>
            <p>We process your personal information under the following legal bases:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Healthcare Provision (Article 9(2)(h)):</strong> Necessary for medical diagnosis and the provision of healthcare treatment by registered healthcare professionals bound by legal confidentiality.</li>
              <li><strong>Consent (Article 6(1)(a)):</strong> For appointment scheduling notifications, telephone confirmations, and optional health guidance updates.</li>
              <li><strong>Legal Obligation (Article 6(1)(c)):</strong> To maintain clinical health records in accordance with General Chiropractic Council (GCC) statutory retention standards.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-slate-900">
              4. Data Retention &amp; Security
            </h2>
            <p>
              Under UK medical standards, adult clinical health records must be retained for a minimum of 8 years from the date of the last treatment (or up to age 25 for paediatric patients). All records are encrypted, stored in secure clinical management environments, and protected from unauthorized access.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-slate-900">
              5. Your Legal Rights
            </h2>
            <p>
              Under UK GDPR, you have the right to request access to your records (Subject Access Request), request rectification of inaccurate information, and lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
