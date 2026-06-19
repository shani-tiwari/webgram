"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

function HeroPreview() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute -inset-4 -z-10 rounded-4xl bg-accent/10 blur-3xl" />
      <div className="overflow-hidden rounded-4xl border border-border bg-white shadow-2xl shadow-black/5">
        <div className="flex items-center gap-2 border-b border-border/60 bg-muted/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-medium text-muted-foreground">
            WebGram preview
          </span>
        </div>
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[280px] bg-linear-to-br from-slate-50 via-white to-blue-50 p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.1),transparent_32%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Launch faster
                </p>
                <h3 className="mt-3 max-w-sm text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Premium templates that feel custom from day one.
                </h3>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                  Responsive
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                  SEO ready
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                  Motion polished
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-4 bg-white p-6 sm:p-8">
            <div className="rounded-2xl border border-border bg-muted p-4">
              <div className="mb-3 h-3 w-20 rounded-full bg-slate-200" />
              <div className="space-y-2">
                <div className="h-2 w-5/6 rounded-full bg-slate-200" />
                <div className="h-2 w-4/6 rounded-full bg-slate-200" />
                <div className="h-2 w-3/4 rounded-full bg-slate-200" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-accent-light p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Speed
                </p>
                <p className="mt-2 text-2xl font-bold text-foreground">1-2d</p>
              </div>
              <div className="rounded-2xl bg-foreground p-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Quality
                </p>
                <p className="mt-2 text-2xl font-bold">100%</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">Built for</span>
                <span className="text-xs font-medium text-muted-foreground">
                  modern teams
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full rounded-full bg-slate-200" />
                <div className="h-2 w-5/6 rounded-full bg-slate-200" />
                <div className="h-2 w-2/3 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_34%),linear-gradient(to_bottom,rgba(245,247,255,0.9),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Next.js + Tailwind CSS + Motion templates
            </span>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Your website,
              <span className="block text-accent">ready in days</span>
              not months
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Browse code-ready, responsive, animated templates. Choose one,
              personalize it for your brand, and go live in 1-2 days.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Link
                href="/templates"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition-colors duration-200 hover:bg-accent-hover"
              >
                Explore Templates
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-muted"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-14 sm:mt-16"
          >
            <HeroPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
