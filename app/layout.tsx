import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "online earning",
    "freelancing",
    "remote work",
    "digital skills",
    "paid research",
    "microtasks",
    "website testing",
    "side hustle",
    "online jobs",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/og-default.png"],
    ...(siteConfig.twitterHandle && { creator: siteConfig.twitterHandle }),
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  // ⚠️ Replace with your real Google Search Console verification code
  ...(siteConfig.googleSiteVerification && {
    verification: { google: siteConfig.googleSiteVerification },
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0284c7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />

        {/* ⚠️ Google Analytics – replace GA_ID with your real ID in .env.local */}
        {siteConfig.googleAnalyticsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.googleAnalyticsId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}

        {/* ⚠️ AdSense – replace publisher ID in .env.local. Only add after approval. */}
        {siteConfig.adsense?.publisherId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsense.publisherId}`}
            crossOrigin="anonymous"
          />
        )}

        {/* Adsterra Social Bar / In-page Push */}
        <script
          type="text/javascript"
          src="https://bicea.org/14/432099dc5cf0707c59ef5f563d358236"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-600 text-white px-4 py-2 rounded-lg z-[100] font-medium"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
