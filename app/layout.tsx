import { AdsterraPopunderGate, AdsterraSocialBarGate, AdsterraStickyRail, AdsterraGlobalFallback } from "@/components/ads";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./_content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anomaly Clinic: SANDBOXX Beginner Guide",
    template: "%s | Anomaly Clinic Guide",
  },
  description: "Start here for a fact-checked Anomaly Clinic: SANDBOXX beginner route, core loop, progression advice, common mistakes, and FAQ.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Anomaly Clinic: SANDBOXX Guide",
    title: "Anomaly Clinic: SANDBOXX Beginner Guide",
    description: "A no-guesswork first-session guide for Roblox place 89294506890787.",
  },
  twitter: {
    card: "summary",
    title: "Anomaly Clinic: SANDBOXX Beginner Guide",
    description: "A no-guesswork first-session guide for Roblox place 89294506890787.",
  },
};

export const viewport: Viewport = {
  themeColor: "#14201d",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Anomaly Clinic: SANDBOXX Guide",
    url: SITE_URL,
    description: "Independent beginner guide for Anomaly Clinic: SANDBOXX on Roblox.",
    inLanguage: "en",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AdsterraPopunderGate />
        <AdsterraSocialBarGate />
        <AdsterraStickyRail />
        <AdsterraGlobalFallback />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
