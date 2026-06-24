import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";
import TemplateGrid from "@/components/template/TemplateGrid";

export const metadata: Metadata = {
  title: "Templates - WebGram | Browse All Designs",
  description:
    "Explore our collection of code-ready, responsive, SEO-optimized Next.js website templates for restaurants, SaaS, portfolios, and more.",
  openGraph: {
    title: "Templates - WebGram | Browse All Designs",
    description:
      "Explore our collection of code-ready, responsive, SEO-optimized Next.js website templates for restaurants, SaaS, portfolios, and more.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "WebGram Templates Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Templates - WebGram | Browse All Designs",
    description:
      "Explore our collection of code-ready, responsive, SEO-optimized Next.js website templates for restaurants, SaaS, portfolios, and more.",
    images: ["/preview.png"],
  },
};

export default function Templates() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-muted/30 pt-24 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="Browse All"
            title="Website Templates"
            description="Every template is fully coded, responsive, animated, and SEO optimized. Choose the one that fits your business."
          />

          <TemplateGrid flag={false}/> 
        </div>
      </main>

      <Footer />
    </>
  );
}
