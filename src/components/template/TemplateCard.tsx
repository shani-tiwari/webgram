"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";

interface TemplateCardProps {
  slug: string;
  name: string;
  category: string[];
  tagline: string;
  price: string;
  deliveryDays: number;
  index?: number;
  images: string[]
}


export default function TemplateCard({
  slug,
  name,
  category,
  tagline,
  // price,
  // deliveryDays,
  index = 0,
  images
}: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={`/templates/${slug}`}
        className="group p-1 block overflow-hidden rounded-3xl  border border-border bg-linear-to-br from-slate-100 via-white to-blue-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
      >
        {/* template preview */}
        <div className="relative aspect-16/10 overflow-hidden rounded-3xl rounded-br-[6rem] border border-accent-light">
          <Image src={images[0]} alt={name} fill className="object-fill hover:scale-101 transition-all duration-500" />
        </div>

        <div className="py-2 px-6 flex justify-between items-center ">
          <div className=" ">
              <h3 className=" text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                {name}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {tagline}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-accent bg-accent-light px-6 py-2 rounded-xl rounded-tr-4xl w-fit border border-accent/50">
                {category.join(" / ")}
              </p>
          </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted border-2 border-accent-light transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
              <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
            </span>

        </div>

      </Link>
    </motion.div>
  );
}
