import type { Metadata, Viewport } from "next";
import { Encode_Sans_Semi_Condensed, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { CLINIC_CONFIG } from "@/lib/constants";

const encodeSans = Encode_Sans_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-encode-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#76A436",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.healthwisechiropracticclinic.com"),
  title: {
    default: "Healthwise Chiropractic Clinic | Cranford & Hounslow",
    template: "%s | Healthwise Chiropractic Clinic",
  },
  description:
    "Private chiropractic clinic, remedial massage therapy, and posture rehabilitation in Hounslow & Cranford. Relieve back pain, neck stiffness, and sciatica with GCC-registered chiropractors.",
  keywords: [
    "Chiropractor Hounslow",
    "Chiropractor Cranford",
    "Back pain treatment Hounslow",
    "Remedial massage Hounslow",
    "Sciatica relief London",
    "Healthwise Chiropractic Clinic",
    "Gurmeet Tulsi chiropractor",
    "GCC registered chiropractor West London",
  ],
  authors: [{ name: "Gurmeet Tulsi (MChiro, University of Surrey)" }],
  creator: "Healthwise Chiropractic Clinic",
  publisher: "Healthwise Chiropractic Clinic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.healthwisechiropracticclinic.com",
    title: "Healthwise Chiropractic Clinic | Cranford & Hounslow",
    description:
      "Trusted, GCC-registered chiropractic care, remedial massage therapy, and spinal rehabilitation in Hounslow since 2002.",
    siteName: "Healthwise Chiropractic Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthwise Chiropractic Clinic Hounslow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthwise Chiropractic Clinic | Hounslow",
    description:
      "Trusted chiropractic care, remedial massage & spinal rehabilitation in Cranford, Hounslow.",
  },
  alternates: {
    canonical: "https://www.healthwisechiropracticclinic.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness & MedicalBusiness (Chiropractor)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": ["Chiropractor", "MedicalBusiness", "LocalBusiness"],
    name: CLINIC_CONFIG.name,
    image: "https://www.healthwisechiropracticclinic.com/og-image.jpg",
    "@id": "https://www.healthwisechiropracticclinic.com/#clinic",
    url: "https://www.healthwisechiropracticclinic.com",
    telephone: CLINIC_CONFIG.phoneUrl.replace("tel:", ""),
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_CONFIG.address.line1,
      addressLocality: CLINIC_CONFIG.address.area,
      addressRegion: CLINIC_CONFIG.address.city,
      postalCode: CLINIC_CONFIG.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4791,
      longitude: -0.4132,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: "Chiropractic",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "58",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <html lang="en-GB" className={`${encodeSans.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans text-slate-800 antialiased selection:bg-primary/20 selection:text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
