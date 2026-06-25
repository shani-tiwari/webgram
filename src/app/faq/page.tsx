"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  // {
  //   question: "What is WebGram?",
  //   answer: "WebGram is a website marketplace offering modern, code-ready business websites. Choose a template, share your business details, and get a personalized website delivered and deployed with a live link."
  // },
  {
    question: "1. How does the process work?",
    answer: "Simply choose a template and contact us. We'll collect your business details, logo, text, images, and branding preferences. After replacing the content and performing basic setup, we'll deploy the website and share the live URL with you."
  },
  {
    question: "2. What is included with every website?",
    answer: "Every website includes responsive design, content replacement, image and logo updates, basic SEO setup, deployment to Vercel, a live website link, and 15 days of support after delivery."
  },
  {
    question: "3. What content do I need to provide?",
    answer: "You'll need to provide your business information, logo, images, contact details, social links, and any text you'd like displayed on the website. If you already have a website, you can simply share it as a reference."
  },
  {
    question: "4. Are the websites mobile-responsive and SEO-friendly?",
    answer: "Yes. Every website is designed to work seamlessly across desktop, tablet, and mobile devices. We also implement basic SEO best practices to help your website perform better in search engines."
  },
  {
    question: "5. Will I get the source code?",
    answer: "Yes, source code can be provided upon request. Most clients only need the live website, but developers or businesses wanting full ownership can request the code during the delivery process."
  },
  {
    question: "6. Can I request changes after purchase?",
    answer: "Yes. Minor content-related updates are covered during the support period. Additional pages, layout modifications, or new features can be requested separately for an additional fee."
  },
  {
    question: "7. Are these templates sold exclusively?",
    answer: "No. Templates can be sold to multiple clients. If you require exclusive ownership, a custom pricing and customization package can be discussed."
  },
  {
    question: "8. Do you provide hosting and deployment?",
    answer: "Yes. Your website will be deployed and delivered with a live URL. Hosting management and long-term maintenance are not included, but you'll receive a ready-to-use live website."
  },
  {
    question: "9. What kind of support do you provide?",
    answer: "Every purchase includes 15 days of support. Support is available through Instagram, WhatsApp, or email and covers guidance, minor fixes, and content-related assistance."
  },
  {
    question: "10. Do you offer custom website development?",
    answer: "The base package focuses on template personalization rather than full custom development. Major feature development, custom layouts, or additional pages can be discussed as separate projects."
  },
  {
    question: "11. Do you offer refunds?",
    answer: "No. Due to the digital nature of the product and the time spent personalizing each website, all sales are final and non-refundable."
  }

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
          <div className=" flex justify-center">
            <p className="text-center text-md text-muted-foreground mt-14 leading-6">Still need help? Contact us on <Link href="https://instagram.com/shani.develops" target="_blank" className="text-primary underline">Instagram</Link>, or <Link href="/contact" className="text-primary underline">Email</Link>.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
