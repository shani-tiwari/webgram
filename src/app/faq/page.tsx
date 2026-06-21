"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is WebGram?",
    answer: "WebGram is a premium website template marketplace. We provide code-ready, fully responsive, and SEO-optimized website templates designed to help businesses, developers, and creators launch high-quality sites in just 1-2 days.",
  },
  {
    question: "How does the customization process work?",
    answer: "After selecting a template, you can contact us with your business details, logo, branding colors, copy, and images. We will customize the template to match your brand identity and handle the initial setup so it is fully ready to deploy.",
  },
  {
    question: "Are the templates mobile-responsive and SEO-optimized?",
    answer: "Yes, absolutely! Every template on WebGram is crafted with a mobile-first approach, ensuring seamless responsiveness across all screen sizes. We also follow semantic HTML structures and optimize asset delivery to make sure your site is lightning fast and search-engine friendly.",
  },
  {
    question: "Can I customize the code myself?",
    answer: "Yes. All our templates are built using modern frameworks like Next.js and Tailwind CSS with clean, modular, and developer-friendly code structures. Once you purchase a template, you have full ownership of the codebase and can extend the logic or design as you see fit.",
  },
  {
    question: "Do you offer hosting and domain setup support?",
    answer: "While hosting fees are not included in the template price, we assist you in deploying the website to hosting platforms like Vercel, Netlify, or your own server, and configure your custom domain name so that going live is completely stress-free.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="px-4 pb-20 pt-28 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions"
              description="Got questions? We've got answers. Explore how our website marketplace works and how we help you launch quickly."
            />

            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      id={`faq-toggle-${index}`}
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-foreground transition-colors hover:text-accent md:p-6 focus:outline-none"
                      aria-expanded={isOpen}
                      aria-controls={`faq-content-${index}`}
                    >
                      <span>{item.question}</span>
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted transition-all duration-300 ${
                          isOpen ? "rotate-90 bg-accent-light text-accent" : "text-muted-foreground"
                        }`}
                      >
                        <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-content-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="border-t border-border/50 px-5 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground md:px-6 md:pb-6">
                            <p>{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
