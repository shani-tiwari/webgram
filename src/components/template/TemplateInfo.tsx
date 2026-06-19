"use client";

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

function TemplateHeroPreview({ name }: { name: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_35%)]" />
      <div className="absolute inset-x-5 top-5 rounded-2xl border border-white/60 bg-white/70 p-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-medium text-slate-500">{name}</span>
        </div>
      </div>
      <div className="absolute inset-x-5 bottom-5 grid gap-3 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-lg shadow-blue-950/5 backdrop-blur-sm sm:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-3">
          <div className="h-3 w-1/3 rounded-full bg-slate-200" />
          <div className="h-10 w-5/6 rounded-2xl bg-slate-200/80" />
          <div className="h-3 w-2/3 rounded-full bg-slate-200" />
          <div className="h-3 w-3/4 rounded-full bg-slate-200" />
        </div>
        <div className="rounded-2xl bg-accent-light p-4">
          <div className="mb-3 h-24 rounded-xl bg-white/80" />
          <div className="h-3 w-4/5 rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  );
}

export default function TemplateInfo({ data }: { data: TemplateData }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex items-center gap-2 pt-24 text-sm text-muted-foreground"
      >
        <Link href="/templates" className="transition-colors hover:text-foreground">
          Templates
        </Link>
        <span>/</span>
        <span className="font-medium text-foreground">{data.name}</span>
      </motion.nav>

      <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <TemplateHeroPreview name={data.name} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 flex flex-col"
        >
          <span className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {data.category}
          </span>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {data.name}
          </h1>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            {data.description}
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <HugeiconsIcon icon={Clock01Icon} size={16} />
              <span>
                {data.deliveryDays} day{data.deliveryDays > 1 ? "s" : ""} delivery
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <HugeiconsIcon icon={CodeIcon} size={16} />
              <span>{data.pages.length} pages</span>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-bold text-foreground">{data.price}</span>
            <span className="ml-2 text-sm text-muted-foreground">one-time</span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            Get This Template
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
          </Link>
        </motion.div>
      </div>

      <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-5 text-xl font-bold text-foreground">Key Features</h2>
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="mb-5 text-xl font-bold text-foreground">Tech Stack</h2>
          <div className="mb-8 flex flex-wrap gap-2">
            {data.techStack.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <h2 className="mb-5 text-xl font-bold text-foreground">Pages Included</h2>
          <div className="flex flex-wrap gap-2">
            {data.pages.map((p) => (
              <span
                key={p}
                className="rounded-lg bg-accent-light px-3 py-1.5 text-xs font-medium text-accent"
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
