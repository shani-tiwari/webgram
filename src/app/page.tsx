"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CodeIcon,
  SmartPhone01Icon,
  Rocket01Icon,
  PaintBrush01Icon,
  SparklesIcon,
  Shield01FreeIcons,
} from "@hugeicons/core-free-icons";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";
import TemplateGrid from "@/components/template/TemplateGrid";

const steps = [
  {
    num: "01",
    title: "Browse Templates",
    desc: "Explore our collection of professionally designed, code-ready templates built for different industries.",
  },
  {
    num: "02",
    title: "Choose & Customize",
    desc: "Pick the template that fits your business. We personalize colors, content, images, and branding.",
  },
  {
    num: "03",
    title: "Go Live",
    desc: "Your fully responsive, SEO-optimized website goes live within 1–2 days. It's that simple.",
  },
];

const features = [
  {
    icon: CodeIcon,
    title: "Clean Code",
    desc: "Built with Next.js and Tailwind CSS. Scalable, maintainable, and developer-friendly.",
  },
  {
    icon: SmartPhone01Icon,
    title: "Fully Responsive",
    desc: "Pixel-perfect on every device — mobile, tablet, and desktop. No compromise.",
  },
  {
    icon: Rocket01Icon,
    title: "Fast Performance",
    desc: "Optimized for Core Web Vitals. Lightning-fast load times out of the box.",
  },
  {
    icon: SparklesIcon,
    title: "Smooth Animations",
    desc: "Subtle, purposeful animations powered by Framer Motion for a polished feel.",
  },
  {
    icon: Shield01FreeIcons,
    title: "SEO Optimized",
    desc: "Semantic HTML, meta tags, schema markup — built to rank from day one.",
  },
  {
    icon: PaintBrush01Icon,
    title: "Easy to Customize",
    desc: "Modular components and design tokens make branding changes effortless.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ─── Hero ─── */}
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(37,99,235,0.04)_0%,transparent_60%)]" />

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-light text-accent text-xs font-semibold rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                Next.js + Tailwind CSS Templates
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] max-w-4xl mx-auto">
                Your website, <br className="hidden sm:block" />
                <span className="text-accent">ready in days</span>
                {" "}not months
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Browse code-ready, responsive, animated templates. Choose one, personalize
                it for your brand, and go live in 1,2 days.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/templates"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors duration-200 text-sm"
                >
                  Explore Templates
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-foreground font-semibold rounded-xl border border-border hover:bg-muted transition-colors duration-200 text-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            {/* Hero Preview */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-16 relative mx-auto max-w-4xl"
            >
              <div className="relative aspect-video bg-muted rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/5">
                <Image
                  src="#"
                  alt="WebGram template preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl -z-10 blur-2xl" />
            </motion.div>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="py-24 bg-muted">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              label="Process"
              title="How It Works"
              description="Three simple steps from browsing to a live website. No complexity, no delays."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-white rounded-2xl p-8 border border-border hover:shadow-md hover:shadow-black/5 transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-accent/20 mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Templates Preview ─── */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              label="Templates"
              title="Ready-to-Launch Designs"
              description="Each template is fully coded, responsive, animated, and optimized for search engines."
            />
            <TemplateGrid />

            <div className="mt-12 text-center">
              <Link
                href="/templates"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                View all templates
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Features ─── */}
        <section className="py-24 bg-muted">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              label="Why WebGram"
              title="Built for Quality"
              description="Every template follows modern web standards and best practices — no shortcuts."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border group hover:shadow-md hover:shadow-black/5 transition-all duration-300"
                >
                  <span className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                    <HugeiconsIcon
                      icon={f.icon}
                      size={20}
                      className="text-accent group-hover:text-white transition-colors duration-300"
                    />
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-foreground text-white rounded-3xl p-10 md:p-16 text-center overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <h2 className="relative text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Ready to launch your website?
              </h2>
              <p className="relative text-gray-400 max-w-lg mx-auto mb-8">
                Pick a template, tell us about your brand, and we&apos;ll deliver a
                production-ready website in 1 - 2 days.
              </p>
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors text-sm"
              >
                Start Your Project
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
