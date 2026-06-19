import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full w-full antialiased">
      <body className="min-h-screen w-full flex flex-col bg-background font-sans text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
