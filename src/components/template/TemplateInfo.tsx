"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
  Clock01Icon,
  CodeIcon,
} from "@hugeicons/core-free-icons";

interface TemplateData {
  id: number;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  price: string;
  deliveryDays: number;
  pages: string[];
}

export default function TemplateInfo({ data }: { data: TemplateData }) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pt-24"
      >
        <Link href="/templates" className="hover:text-foreground transition-colors">
          Templates
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{data.name}</span>
      </motion.nav>

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
        {/* Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 relative aspect-16/10 bg-muted rounded-2xl overflow-hidden border border-border"
        >
          <Image
            src="#"
            alt={`${data.name} template preview`}
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 flex flex-col"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            {data.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
            {data.name}
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {data.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <HugeiconsIcon icon={Clock01Icon} size={16} />
              <span>{data.deliveryDays} day{data.deliveryDays > 1 ? "s" : ""} delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <HugeiconsIcon icon={CodeIcon} size={16} />
              <span>{data.pages.length} pages</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-foreground">{data.price}</span>
            <span className="text-sm text-muted-foreground ml-2">one-time</span>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors duration-200"
          >
            Get This Template
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-foreground mb-5">Key Features</h2>
          <ul className="space-y-3">
            {data.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 text-accent">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />
                </span>
                <span className="text-sm text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech + Pages */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-bold text-foreground mb-5">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {data.techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-muted text-xs font-medium text-foreground rounded-lg border border-border"
              >
                {t}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-bold text-foreground mb-5">Pages Included</h2>
          <div className="flex flex-wrap gap-2">
            {data.pages.map((p) => (
              <span
                key={p}
                className="px-3 py-1.5 bg-accent-light text-xs font-medium text-accent rounded-lg"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
