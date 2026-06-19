"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import SectionHeading from "@/components/shared/SectionHeading";
import TemplateGrid from "@/components/template/TemplateGrid";

export default function HomeTemplates() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Templates"
          title="Ready-to-Launch Designs"
          description="Each template is fully coded, responsive, animated, and optimized for search engines."
        />

        <TemplateGrid />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            View all templates
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
