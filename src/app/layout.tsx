import type { Metadata, Viewport } from "next";
import { Encode_Sans_Semi_Condensed, Roboto } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site.config";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#76A436" },
    { media: "(prefers-color-scheme: dark)", color: "#1E293B" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.pages.home.title,
    template: `%s | ${SITE_CONFIG.name}, Cranford, Hounslow`,
  },
  description: SITE_CONFIG.pages.home.description,
  applicationName: SITE_CONFIG.name,
  authors: [
    {
      name: `${SITE_CONFIG.clinicalLeadership.director} (${SITE_CONFIG.clinicalLeadership.credentials})`,
    },
  ],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
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
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#76A436",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_CONFIG.shortName,
  },
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
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.pages.home.canonical,
    title: SITE_CONFIG.pages.home.title,
    description: SITE_CONFIG.pages.home.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.pages.home.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Cranford Hounslow`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.pages.home.title,
    description: SITE_CONFIG.pages.home.description,
    images: [SITE_CONFIG.pages.home.ogImage],
  },
  alternates: {
    canonical: SITE_CONFIG.pages.home.canonical,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${encodeSans.variable} ${roboto.variable}`}>
      <head>
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#76A436" />
      </head>
      <body className="flex min-h-screen flex-col font-sans text-slate-800 antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
