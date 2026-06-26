"use client";

import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

// Custom Info/Alert icon matching hugeicons style
const AlertCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    className={props.className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 8V13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.992 17H12.001"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const howItWorksSteps = [
  {
    number: "01",
    title: "Explore & Contact",
    description:
      "Browse live demos and choose the template that best fits your business. Reach out with your preferred template and business requirements.",
  },
  {
    number: "02",
    title: "Share Your Content",
    description:
      "Send your business details, text, images, logo, contact information, and any specific content you'd like displayed on the website.",
  },
  {
    number: "03",
    title: "Personalization & Setup",
    description:
      "I'll replace all template content with your business content, perform basic SEO setup, and prepare the website for launch.",
  },
  {
    number: "04",
    title: "Go Live",
    description:
      "Your website will be deployed and delivered with a live URL. You can start sharing it with your customers immediately.",
  },
];

const whatsIncluded = [
  "Fully responsive website",
  "Modern animations and interactions",
  "Multi-page website setup",
  "Content replacement with your business details",
  "Image and logo replacement",
  "Basic SEO setup",
  "Deployment and live website link",
  "15 days of support",
  "Optional source code access on request",
  "Fast delivery",
];

const importantInfo = [
  "Templates may be sold to multiple clients.",
  "Exclusive ownership requires additional customization and pricing.",
  "Major layout changes, new features, and extra pages are not included in the base package.",
  "Additional pages or custom features can be requested separately.",
  "No hosting management is included.",
  "No refunds once work has started.",
  "Support covers content updates, guidance, and minor fixes during the support period.",
];

export default function TemplateDetailsSections() {
  return (
    <div className="my-16 flex flex-col gap-10">
      {/* SECTION 1: HOW IT WORKS (Full Width Top) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-3xl outline-2 outline-offset-1 outline-black/15 bg-white p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="mb-8 flex flex-col gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent bg-accent-light px-3 py-1 rounded-md w-fit">
            Process
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col rounded-2xl outline-2 outline-offset-1 outline-black/10 bg-linear-to-b from-white to-slate-50/50 p-5 pt-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >

              <span className="absolute top-3 right-3 text-2xl font-bold text-accent group-hover:text-accent transition-colors duration-300 select-none animate-pulse">
                {step.number}
              </span>

              <h3 className="mb-2 text-base font-semibold text-foreground pr-8">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* SECTIONS 2 & 3: WHAT'S INCLUDED & IMPORTANT INFO (Side-by-side) */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* WHAT'S INCLUDED */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl rounded-tr-[4rem] outline-2 outline-offset-1 outline-black/15 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="mb-6 flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent bg-accent-light px-3 py-1 rounded-md w-fit">
                Package
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                What&apos;s Included
              </h2>
            </div>

            <ul className="space-y-3.5">
              {whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 group">
                  <span className="mt-0.5 text-accent transition-transform duration-300 group-hover:scale-110">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* IMPORTANT INFORMATION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl rounded-tr-[4rem] outline-2 outline-offset-1 outline-black/15 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="mb-6 flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent bg-accent-light px-3 py-1 rounded-md w-fit">
                Guidelines
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Important Information
              </h2>
            </div>

            <ul className="space-y-3.5">
              {importantInfo.map((item) => (
                <li key={item} className="flex items-start gap-3 group">
                  <span className="mt-0.5 text-accent/80 transition-transform duration-300 group-hover:scale-110">
                    <AlertCircleIcon className="text-accent/80" />
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
