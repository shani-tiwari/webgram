import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = 'https://webgram.shaniweb.com' ;

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "WebGram — Code-Ready Website Templates | Go Live in 1 - 2 Days",
  description:
    "Browse premium, responsive, SEO-optimized Next.js + Tailwind CSS website templates. Pick a design, personalize it for your brand, and launch in 1–2 days.",
  keywords: [
    "website templates",
    "Next.js templates",
    "Tailwind CSS",
    "responsive websites",
    "SEO optimized",
    "web development",
  ],
  authors: [{ name: "WebGram Team" }],
  creator: "WebGram Team",
  publisher: "WebGram",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "WebGram — Code-Ready Website Templates | Go Live in 1 - 2 Days",
    description:
      "Browse premium, responsive, SEO-optimized Next.js + Tailwind CSS website templates. Pick a design, personalize it for your brand, and launch in 1–2 days.",
    siteName: "WebGram",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "WebGram — Premium Next.js & Tailwind CSS Website Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebGram — Code-Ready Website Templates | Go Live in 1 - 2 Days",
    description:
      "Browse premium, responsive, SEO-optimized Next.js + Tailwind CSS website templates. Pick a design, personalize it for your brand, and launch in 1–2 days.",
    images: ["/preview.png"],
    creator: "@webgram",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full antialiased">
      <body className="min-h-screen w-full flex flex-col bg-background font-sans text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
