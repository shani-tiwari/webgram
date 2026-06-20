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
        {/* custom svg path */}
          {/* <svg className="absolute top-1/2 right-0 left-0 -translate-y-1/2 h-[250px] fill-none overflow-visible pointer-events-none" viewBox="0 0 846 254" xmlns="http://www.w3.org/2000/svg" 
             fill="transparent" stroke-width="3" stroke="rgb(43, 43, 43, 0.5)">
             <path d="M 11.162 157.404 C -33.544 89.294 66.264 18.667 129.953 27.789 C 193.643 36.911 200.62 266.823 300.401 253.438 C 400.182 240.053 395.905 166.407 395.905 166.407 C 395.905 166.407 396.396 69.308 435.743 32.86 C 475.09 -3.588 524.628 -17.75 564.536 32.86 C 604.445 83.469 582.687 173.894 643.668 199.919 C 704.649 225.943 696.874 244.434 734.805 244.434 C 772.736 244.434 792.107 211.923 792.107 211.923 C 792.107 211.923 821.967 201.021 842.315 149.901 C 862.663 98.781 792.107 138.397 792.107 138.397" />
          </svg>
          <div className="absolute top-1/2 right-0 left-0 -translate-y-1/2 h-[250px] fill-none overflow-visible pointer-events-none">
            <div className="w-full h-full inline-block z-50"></div>
          </div> */}
          {/* <svg
            className="absolute top-1/2 left-0 right-0 h-[350px] -translate-y-1/2 -z-10 w-full fill-none overflow-visible pointer-events-none hidden md:block"
            viewBox="0 0 1200 350"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pill-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>

              <filter id="pill-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <path
              id="wavy-path"
              d="M 0 220 C 80 220, 120 100, 200 100 C 280 100, 320 280, 400 280 C 480 280, 540 140, 620 140 C 700 140, 720 200, 780 200 C 840 200, 900 70, 980 70 C 1060 70, 1120 50, 1200 50"
              stroke="rgb(43, 43, 43, 0.75)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <g>
              <rect x="-16" y="-6" width="32" height="12" rx="6" fill="url(#pill-grad)" filter="url(#pill-glow)" />
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="0s">
                <mpath href="#wavy-path" />
              </animateMotion>
            </g>

            <g>
              <rect x="-16" y="-6" width="32" height="12" rx="6" fill="url(#pill-grad)" filter="url(#pill-glow)" />
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="2s">
                <mpath href="#wavy-path" />
              </animateMotion>
            </g>

            <g>
              <rect x="-16" y="-6" width="32" height="12" rx="6" fill="url(#pill-grad)" filter="url(#pill-glow)" />
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="4s">
                <mpath href="#wavy-path" />
              </animateMotion>
            </g>
          </svg> */}

          {homeSteps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-border bg-white/10 backdrop-blur-xs p-4 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
