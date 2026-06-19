"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/shared/SectionHeading";
import { homeSteps } from "./home-content";

export default function HomeProcess() {
  return (
    <section className="bg-muted/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Process"
          title="How It Works"
          description="Three simple steps from browsing to a live website. No complexity, no delays."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {homeSteps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-4 block text-3xl font-bold text-accent/20">
                {step.num}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
