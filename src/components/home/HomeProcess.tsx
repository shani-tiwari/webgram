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

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 overflow-visible">

          {homeSteps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{top: `calc(${i + 0.3} * 35%)`}}
              className="sticky text-black/80 rounded-2xl border-2 border-slate-400/50 p-4 shadow-sm shadow-black/5 bg-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
                <span className={`inline-flex hover:bg-accent-light items-center text-2xl font-bold  px-2.5 py-1 border-2 border-black/20 rounded-md mb-5`}>
                  {step.num}
                </span>
              <h3 className="mb-1 text-lg font-semibold ">
                {step.title}
              </h3>
              <p className="text-sm leading-5 tracking-wide ">
                {step.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
