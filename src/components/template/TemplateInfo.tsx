"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
  Clock01Icon,
  CodeIcon,
  Eye,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import TemplateGrid from "./TemplateGrid";
import ContactForm from "@/components/contact/ContactForm";

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
    <motion.div 
     initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
     className="relative h-full flex flex-col md:flex-row gap-0.5 justify-end overflow-hidden rounded-2xl outline-2 outline-offset-1 outline-black/20  shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_35%)]" />

      <div className="h-full w-full bg-white/70  rounded-xl relative overflow-hidden ">
        <Image src={data.images[0]} alt={data.name} fill className="object-fill hover:scale-103 transition-all duration-500" />
      </div>

      <div className="flex flex-col gap-0.5 h-full w-full max-w-sm rounded-2xl backdrop-blur-sm ">
        <div className="bg-black/20 rounded-xl h-full w-full relative overflow-hidden">
          <Image src={data.images[1]} alt={data.name} fill className="object-fill hover:scale-103 transition-all duration-500" />
        </div>
        <div className="bg-black/20 rounded-xl h-full w-full relative overflow-hidden">
          <Image src={data.images[2]} alt={data.name} fill className="object-fill hover:scale-103 transition-all duration-500" />
        </div>
      </div>

    </motion.div>
  );
};

export default function TemplateInfo({ data }: { data: TemplateData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="mx-auto max-w-6xl px-1 sm:px-2">
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
            <p className="text-[11px] mb-4 font-semibold uppercase tracking-[0.17em] text-accent bg-accent-light px-6 py-2 rounded-xl rounded-tr-4xl w-fit outline-2 outline-offset-1 outline-blue-500/30">
                {data.category.join(" / ")}
              </p>
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl rounded-t-4xl bg-accent-light px-6 py-3 mb-4 outline-2 outline-offset-1 outline-blue-500/20 font-semibold text-black/80 transition-colors duration-200 hover:bg-accent-light/80"
            >
              Live Preview
              <HugeiconsIcon icon={Eye} size={18} />
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl rounded-t-4xl outline-2 outline-offset-1 outline-black/20 bg-accent px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-accent-hover cursor-pointer"
            >
              Get This Template
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
            </button>

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
                className="rounded-lg rounded-t-3xl outline-2 outline-offset-1 outline-black/20 bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
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
                className="rounded-lg rounded-t-3xl outline-2 outline-offset-1 outline-blue-500/30 bg-accent-light px-3 py-1.5 text-xs font-medium text-accent"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="py-10">
        <h1 className="text-2xl font-thin text-foreground mb-6">More Templates</h1>
        <TemplateGrid flag={true}/>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center ">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 w-full max-w-lg rounded-3xl border border-border bg-white p-4 shadow-2xl sm:p-6 overflow-y-auto max-h-[90vh] scrollbar-none"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-3 top-3 rounded-xl p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={20} />
              </button>

              <div className="mb-6 flex flex-col gap-1.5 pr-8">
                <span className="text-[8px] font-bold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-md w-fit">
                  Template Request
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Get {data.name}
                </h2>
                {/* <p className="text-xs leading-relaxed text-muted-foreground">
                  Provide your details and we will help you get started with the {data.name} template (Price: {data.price}).
                </p> */}
              </div>

              <ContactForm
                initialMessage={`I'm interested in getting the "${data.name}" template (Price: ${data.price}). Please let me know how to proceed.`}
                onSuccess={() => setIsModalOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
