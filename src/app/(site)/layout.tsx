import React from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { SITE_CONFIG } from "@/config/site.config";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": ["Chiropractor", "MedicalBusiness", "LocalBusiness"],
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    logo: `${SITE_CONFIG.url}/assets/logos/healthwise-mark.svg`,
    "@id": `${SITE_CONFIG.url}/#clinic`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.telephoneLink.replace("tel:", ""),
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.line1,
      addressLocality: SITE_CONFIG.address.area,
      addressRegion: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postcode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.address.coordinates.latitude,
      longitude: SITE_CONFIG.address.coordinates.longitude,
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
      ratingValue: SITE_CONFIG.reviews.score,
      reviewCount: SITE_CONFIG.reviews.reviewCount.toString(),
      bestRating: SITE_CONFIG.reviews.bestRating.toString(),
      worstRating: SITE_CONFIG.reviews.worstRating.toString(),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
