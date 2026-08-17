import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kept — a private journal that writes you a page",
  description:
    "The journal your therapist asked you to keep. Write freely between sessions, get one page back on the day you chose. Encrypted on your phone, no account, no server.",
  metadataBase: new URL("https://kept.app"),
  alternates: {
    canonical: "https://kept.app/",
  },
  other: {
    "theme-color": "#0A0B0D",
  },
  openGraph: {
    title: "Kept — a private journal that writes you a page",
    description:
      "The journal your therapist asked you to keep. Write freely between sessions, get one page back on the day you chose. Encrypted on your phone, no account, no server.",
    url: "https://kept.app/",
    siteName: "Kept",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kept — a private journal that writes you a page",
    description:
      "The journal your therapist asked you to keep. Write freely between sessions, get one page back on the day you chose. Encrypted on your phone, no account, no server.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Kept",
  "operatingSystem": "iOS",
  "applicationCategory": "LifestyleApplication",
  "offers": [
    {
      "@type": "Offer",
      "name": "Monthly Subscription",
      "price": "9.99",
      "priceCurrency": "USD",
    },
    {
      "@type": "Offer",
      "name": "Yearly Subscription",
      "price": "39.99",
      "priceCurrency": "USD",
    },
    {
      "@type": "Offer",
      "name": "One-Time Purchase",
      "price": "99.99",
      "priceCurrency": "USD",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
