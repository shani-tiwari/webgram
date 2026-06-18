import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WebGram — Code-Ready Website Templates | Go Live in 1–2 Days",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
