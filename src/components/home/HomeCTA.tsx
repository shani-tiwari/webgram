"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function HomeCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[4rem] bg-foreground/90 px-6 py-12 text-center outline-2 outline-offset-1 outline-black/40 text-white sm:px-10 sm:py-16 md:px-16"
        >
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

          <h2 className="relative text-2xl font-bold  w-fit mx-auto mb-2 bg-white/20 px-4 py-2 rounded-xl outline-2 outline-offset-2 outline-white/40 tracking-tight md:text-4xl">
            Ready to launch your website?
          </h2>
          <p className="relative text-sm md:text-base mx-auto mb-8 mt-4 max-w-xl text-white/70">
            Pick a template, tell us about your brand, and we&apos;ll deliver a
            production-ready website in 1-2 days.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 rounded-xl rounded-t-4xl  bg-accent px-7 py-3.5 text-sm font-semibold text-white outline-2 outline-offset-1 outline-white/20 transition-colors hover:bg-accent-hover"
          >
            Start Your Project
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
