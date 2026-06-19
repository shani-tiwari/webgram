"use client";

import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import SectionHeading from "@/components/shared/SectionHeading";
import { homeFeatures } from "./home-content";

export default function HomeFeatures() {
  return (
    <section className="bg-muted/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why WebGram"
          title="Built for Quality"
          description="Every template follows modern web standards and best practices - no shortcuts."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeFeatures.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-white p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light transition-colors duration-300 group-hover:bg-accent">
                <HugeiconsIcon
                  icon={feature.icon}
                  size={20}
                  className="text-accent transition-colors duration-300 group-hover:text-white"
                />
              </span>
              <h3 className="mb-1.5 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
