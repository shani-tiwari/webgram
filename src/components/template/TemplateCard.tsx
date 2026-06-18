"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface TemplateCardProps {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  deliveryDays: number;
  index?: number;
}

export default function TemplateCard({
  slug,
  name,
  category,
  tagline,
  price,
  deliveryDays,
  index = 0,
}: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={`/templates/${slug}`}
        className="group block bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-16/10 bg-muted overflow-hidden">
          <Image
            src="#"
            alt={`${name} template preview`}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-md">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-200">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {tagline}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-foreground">{price}</span>
              <span className="text-xs text-muted-foreground">
                · {deliveryDays} day{deliveryDays > 1 ? "s" : ""} delivery
              </span>
            </div>
            <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-200">
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
