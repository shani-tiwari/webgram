import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";
import TemplateGrid from "@/components/template/TemplateGrid";

export const metadata: Metadata = {
  title: "Templates — WebGram | Browse All Designs",
  description:
    "Explore our collection of code-ready, responsive, SEO-optimized Next.js website templates for restaurants, SaaS, portfolios, and more.",
};

export default function Templates() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Browse All"
            title="Website Templates"
            description="Every template is fully coded, responsive, animated, and SEO optimized. Choose the one that fits your business."
          />

          <TemplateGrid />
        </div>
      </main>

      <Footer />
    </>
  );
}
