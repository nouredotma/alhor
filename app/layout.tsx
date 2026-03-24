import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { LanguageProvider } from "@/components/language-provider";
import { CartProvider } from "@/components/cart-provider";
import CartModal from "@/components/cart-modal";
import CookieBanner from "@/components/cookie-banner";
import SplashScreen from "@/components/splash-screen";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alhorparfum.com"),
  title: {
    default: "متجر الحر للعطور الشرقية | Alhor Parfum — Finest Oriental Scents in Casablanca",
    template: "%s | متجر الحر للعطور الشرقية",
  },
  description:
    "متجر الحر للعطور الشرقية (Alhor Parfum) — متخصص في أرقى العطور الشرقية، العود، والروائح الفاخرة في الدار البيضاء، المغرب. نتميز بالجودة العالية والروائح الراقية.",
  keywords: [
    "متجر الحر للعطور الشرقية",
    "Alhor Parfum",
    "oriental perfumes Casablanca",
    "oriental scents Morocco",
    "oud Casablanca",
    "luxury perfumes Morocco",
    "عطور شرقية الدار البيضاء",
    "متجر عود المغرب",
    "روائح فاخرة",
    "Alhor fragrances",
  ],
  authors: [
    {
      name: "متجر الحر للعطور الشرقية",
      url: "https://alhorparfum.com",
    },
  ],
  creator: "متجر الحر للعطور الشرقية",
  publisher: "متجر الحر للعطور الشرقية",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Perfume Store",
  classification: "Oriental Perfumes & Fragrances Store",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "متجر الحر للعطور الشرقية | Alhor Parfum",
    description:
      "متجر الحر للعطور الشرقية متخصص في أرقى العطور الشرقية، العود، والروائح الفاخرة في الدار البيضاء، المغرب.",
    url: "https://alhorparfum.com",
    siteName: "متجر الحر للعطور الشرقية",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "متجر الحر للعطور الشرقية — Finest Oriental Scents",
        type: "image/jpeg",
      },
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Alhor Parfum Logo",
      },
    ],
    locale: "ar_MA",
    alternateLocale: ["fr_FR", "es_ES"],
    type: "website",
    countryName: "Morocco",
  },
  twitter: {
    card: "summary_large_image",
    title: "متجر الحر للعطور الشرقية | Alhor Parfum",
    description:
      "أرقى العطور الشرقية والعود في الدار البيضاء، المغرب.",
    images: ["/og-image.jpg"],
    creator: "@alhorparfum",
    site: "@alhorparfum",
  },
  alternates: {
    canonical: "https://alhorparfum.com",
    languages: {
      "ar-MA": "https://alhorparfum.com/ar",
      "fr-FR": "https://alhorparfum.com/fr",
      "es-ES": "https://alhorparfum.com/es",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "MA-CAS",
    "geo.placename": "Casablanca",
    "geo.position": "33.5731;-7.5898",
    ICBM: "33.5731, -7.5898",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Store"],
      "@id": "https://alhorparfum.com/#organization",
      name: "متجر الحر للعطور الشرقية | Alhor Parfum",
      url: "https://alhorparfum.com",
      logo: {
        "@type": "ImageObject",
        url: "https://alhorparfum.com/favicon.png",
        width: 512,
        height: 512,
      },
      image: "https://alhorparfum.com/og-image.jpg",
      description:
        "متجر الحر للعطور الشرقية متخصص في أرقى العطور الشرقية، العود، والروائح الفاخرة في الدار البيضاء، المغرب.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22 Rue 8",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        postalCode: "20220",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.5731,
        longitude: -7.5898,
      },
      telephone: "+212669034206",
      email: "alhorparfum@gmail.com",
      priceRange: "$$",
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
            "Sunday",
          ],
          opens: "10:00",
          closes: "22:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/Mohamedaminefakih/",
        "https://www.instagram.com/alhor_oud_parfums_orientales/",
        "https://www.tiktok.com/@matjar.elhor/",
      ],
      areaServed: {
        "@type": "Country",
        name: "Morocco",
      },
      knowsLanguage: ["ar", "fr", "es"],
    },
    {
      "@type": "WebSite",
      "@id": "https://alhorparfum.com/#website",
      url: "https://alhorparfum.com",
      name: "متجر الحر للعطور الشرقية",
      description: "أرقى العطور الشرقية والروائح الفاخرة في المغرب",
      publisher: {
        "@id": "https://alhorparfum.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://alhorparfum.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: ["ar-MA", "fr-FR", "es-ES"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://alhorparfum.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://alhorparfum.com",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="loading-lock" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources for performance */}
        <link
          rel="preconnect"
          href="https://fonts.cdnfonts.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#FFCC00" />
        <meta name="msapplication-TileColor" content="#FFCC00" />

        {/* Additional SEO meta tags */}
        <meta name="application-name" content="متجر الحر للعطور الشرقية" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Alhor Parfum" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <SplashScreen />
        <LanguageProvider>
          <CartProvider>
            {children}
            <CartModal />
            <CookieBanner />
          </CartProvider>
        </LanguageProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
