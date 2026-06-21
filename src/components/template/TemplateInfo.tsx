"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
  Clock01Icon,
  CodeIcon,
  Eye,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import TemplateGrid from "./TemplateGrid";

interface TemplateData {
  id: number;
  slug: string;
  name: string;
  category: string[];
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  price: string;
  deliveryDays: number;
  pages: string[];
  images: string[];
  link: string;
}

function TemplateHeroPreview({data}: {data: TemplateData}) {
  return (
    <div className="relative h-full flex flex-col md:flex-row gap-1 justify-end overflow-hidden p-1 rounded-2xl border border-border bg-white shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_35%)]" />

      <div className="h-full w-full bg-white/70  rounded-xl relative overflow-hidden ">
        <Image src={data.images[0]} alt={data.name} fill className="object-fill hover:scale-103 transition-all duration-500" />
      </div>

      <div className="flex flex-col gap-1 h-full w-full max-w-sm rounded-2xl shadow-lg shadow-blue-950/5 backdrop-blur-sm ">
        <div className="bg-black/20 rounded-xl h-full w-full relative overflow-hidden">
          <Image src={data.images[1]} alt={data.name} fill className="object-fill hover:scale-103 transition-all duration-500" />
        </div>
        <div className="bg-black/20 rounded-xl h-full w-full relative overflow-hidden">
          <Image src={data.images[2]} alt={data.name} fill className="object-fill hover:scale-103 transition-all duration-500" />
        </div>
      </div>

    </div>
  );
};

export default function TemplateInfo({ data }: { data: TemplateData }) {
  return (
    <div className="mx-auto max-w-6xl px-1 sm:px-6">
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[90vh] md:h-[70vh]"
      >
        <TemplateHeroPreview data={data} />
      </motion.div>


      <div className="mb-20 mt-10 px-1 flex">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" flex flex-col md:flex-row w-full md:gap-20"
        >
          <div className="flex flex-col gap-2  w-full max-w-lg">
            <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-accent bg-accent-light px-6 py-2 rounded-xl rounded-tr-4xl w-fit border border-accent/50">
                {data.category.join(" / ")}
              </p>
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {data.name}
            </h1>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {data.description}
            </p>
          </div>

          <div className="pb-10 border-b border-border w-full flex flex-col md:items-start justify-center">

          
            <div className="mb-6">
              <span className="text-3xl font-bold text-foreground">{data.price}</span>
              <span className="ml-2 text-sm text-muted-foreground">one-time</span>
            </div>

            <Link
              href={data.link}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl rounded-t-4xl bg-accent-light px-6 py-3 mb-4 border border-accent/60 font-semibold text-black/80 transition-colors duration-200 hover:bg-accent-light/80"
            >
              Live Preview
              <HugeiconsIcon icon={Eye} size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl rounded-t-4xl bg-accent px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
            >
              Get This Template
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
            </Link>

            <div className="mt-6 mb-2 flex flex-wrap items-center gap-6">
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
          </div>

        </motion.div>

      </div>

      <div className="mb-20 px-2 grid grid-cols-1 gap-10 md:grid-cols-2">
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
                className="rounded-lg rounded-t-3xl border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
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
                className="rounded-lg rounded-t-3xl bg-accent-light px-3 py-1.5 text-xs font-medium text-accent"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="py-10">
        <h1 className="text-2xl font-thin text-foreground mb-6">More Templates</h1>
        <TemplateGrid/>
      </div>
    </div>
  );
}
