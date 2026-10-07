export const SITE_CONFIG = {
  name: "Healthwise Chiropractic Clinic",
  shortName: "Healthwise",
  legalName: "Healthwise Chiropractic Clinic",
  tagline: "Relieve Pain, Restore Mobility & Take Control of Your Health",
  description:
    "Private chiropractic clinic, remedial massage therapy, and posture rehabilitation in Cranford & Hounslow. Relieve back pain, neck stiffness, and sciatica with GCC-registered chiropractors.",
  url: "https://www.healthwisechiropracticclinic.com",
  locale: "en_GB",
  lang: "en-GB",
  themeColor: "#76A436",
  backgroundColor: "#F8FAF8",
  darkThemeColor: "#1E293B",

  contact: {
    telephoneDisplay: "0208 759 7177",
    telephoneLink: "tel:+442087597177",
    telephoneInternational: "+44 20 8759 7177",
    email: "info@healthwisechiropracticclinic.com",
    whatsappUrl:
      "https://wa.me/442087597177?text=Hi%20Healthwise,%20I%20would%20like%20to%20enquire%20about%20an%20appointment.",
  },

  address: {
    line1: "730 Bath Road",
    area: "Cranford",
    city: "Hounslow",
    county: "Greater London",
    postcode: "TW5 9TW",
    country: "GB",
    countryName: "United Kingdom",
    full: "730 Bath Rd, Cranford, Hounslow TW5 9TW, United Kingdom",
    coordinates: {
      latitude: 51.4791,
      longitude: -0.4132,
    },
    googleMapsUrl:
      "https://maps.google.com/?q=730+Bath+Rd,+Cranford,+Hounslow+TW5+9TW,+UK",
  },

  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      displayDays: "Monday – Saturday",
      opens: "08:00",
      closes: "19:00",
      displayTime: "8:00 AM – 7:00 PM",
      isOpen: true,
    },
    {
      days: ["Sunday"],
      displayDays: "Sunday",
      opens: "00:00",
      closes: "00:00",
      displayTime: "Closed",
      isOpen: false,
    },
  ],

  clinicalLeadership: {
    director: "Gurmeet Tulsi",
    credentials: "MChiro, University of Surrey (2001)",
    role: "Clinic Director & Chiropractor",
    registrationBody: "General Chiropractic Council (GCC)",
    foundedYear: 2002,
  },

  reviews: {
    score: "4.9",
    ratingValue: 4.9,
    reviewCount: 58,
    bestRating: 5,
    worstRating: 1,
    source: "Google Patient Reviews",
  },

  assets: {
    logoSvg: "/assets/logos/healthwise-logo.svg",
    logoPng: "/assets/logos/healthwise-logo.png",
    markSvg: "/assets/logos/healthwise-mark.svg",
    faviconIco: "/favicon.ico",
    favicon16: "/favicon-16x16.png",
    favicon32: "/favicon-32x32.png",
    appleTouchIcon: "/apple-touch-icon.png",
    androidChrome192: "/android-chrome-192x192.png",
    androidChrome512: "/android-chrome-512x512.png",
    maskableIcon512: "/maskable-icon-512.png",
    safariPinnedTab: "/safari-pinned-tab.svg",
    ogImageHome: "/og-image.jpg",
    ogImageBook: "/og-image-book.jpg",
  },

  pages: {
    home: {
      title: "Chiropractic & Remedial Massage | Healthwise Chiropractic, Cranford, Hounslow",
      description:
        "Private chiropractic clinic, remedial massage therapy, and posture rehabilitation in Cranford & Hounslow. Relieve back pain and sciatica with GCC-registered chiropractors.",
      canonical: "https://www.healthwisechiropracticclinic.com/",
      ogImage: "/og-image.jpg",
    },
    bookOnline: {
      title: "Book an Appointment | Healthwise Chiropractic, Cranford, Hounslow",
      description:
        "Schedule your clinical spinal consultation, posture assessment, and treatment with GCC-registered chiropractors at Healthwise in Cranford, Hounslow.",
      canonical: "https://www.healthwisechiropracticclinic.com/book-online",
      ogImage: "/og-image-book.jpg",
    },
    privacyPolicy: {
      title: "Privacy & Patient Data Policy | Healthwise Chiropractic, Cranford, Hounslow",
      description:
        "UK GDPR Privacy and Patient Data Protection Policy for Healthwise Chiropractic Clinic, 730 Bath Road, Cranford, Hounslow. Statutory health record standards.",
      canonical: "https://www.healthwisechiropracticclinic.com/privacy-policy",
      ogImage: "/og-image.jpg",
    },
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
