"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="mb-3 inline-flex rounded-full bg-accent-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}
