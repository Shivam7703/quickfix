import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://wembleysquickfix.com";
const SITE_NAME = "Wembley's Quickfix";
const DESCRIPTION =
  "Quickfix, the flagship brand of Wembley Laboratories Ltd., offers a comprehensive range of adhesives developed for repair, maintenance, DIY, plumbing, construction, manufacturing, and industrial applications.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wembley's Quickfix – Adhesives, Sealants & Solvent Cements India",
    template: "%s | Wembley's Quickfix",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Quickfix adhesive",
    "Wembley Laboratories",
    "super glue India",
    "PVC solvent cement",
    "CPVC solvent cement",
    "UPVC solvent cement",
    "epoxy putty",
    "PTFE tape",
    "rubber based adhesive",
    "adhesive manufacturer India",
  ],
  authors: [{ name: "Wembley Laboratories Ltd.", url: SITE_URL }],
  creator: "Wembley Laboratories Ltd.",
  publisher: "Wembley Laboratories Ltd.",
  category: "Adhesives & Sealants",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: "Wembley's Quickfix – India's Trusted Adhesive Brand",
    description:
      "Adhesives, sealants, solvent cements and tapes for DIY, plumbing, construction and industrial use. 70+ years of manufacturing experience.",
    images: [
      {
        url: "/og-image.png", // public/og-image.png (1200x630) rakhein
        width: 1200,
        height: 630,
        alt: "Wembley's Quickfix adhesive range",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wembley's Quickfix – India's Trusted Adhesive Brand",
    description:
      "Adhesives, sealants, solvent cements and tapes for DIY, plumbing, construction and industrial use.",
    images: ["/og-image.png"],
  },
  // Bots / crawlers: search engines ko index + follow allow
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: false },
  // Baaki bots ke liye alag meta tags (Google/Bing ko allow, inko mana)
  other: {
    GPTBot: "noindex, nofollow, noarchive",
    ClaudeBot: "noindex, nofollow, noarchive",
    CCBot: "noindex, nofollow, noarchive",
    PerplexityBot: "noindex, nofollow, noarchive",
    Bytespider: "noindex, nofollow, noarchive",
    Amazonbot: "noindex, nofollow, noarchive",
    "meta-externalagent": "noindex, nofollow, noarchive",
    "Applebot-Extended": "noindex, nofollow, noarchive",
    yandex: "noindex, nofollow",
    baiduspider: "noindex, nofollow",
  },
  // Google Search Console verification code mile to uncomment karein:
  // verification: { google: "YOUR_CODE" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Wembley Laboratories Ltd.",
      alternateName: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.png`,
      foundingDate: "1952",
      description: DESCRIPTION,
      email: "info@wembleysquickfix.com",
      telephone: "+91-9805403302",
      areaServed: "IN",
      sameAs: [
        "https://www.facebook.com/wembleyadhesives",
        "https://www.instagram.com/wembleyadhesives",
        "https://x.com/wembleyadhesive",
        "https://www.linkedin.com/company/wembley-s-quickfix",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9805403302",
          email: "info@wembleysquickfix.com",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* <head>
        
      </head> */}
      <body className="min-h-full flex flex-col">
        {/* <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="beforeInteractive"
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}