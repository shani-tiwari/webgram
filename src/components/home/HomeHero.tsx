"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SearchSquareIcon } from "@hugeicons/core-free-icons";

function HeroPreview() {
  return (
    <div className="relative mx-auto max-w-fit">
      <div className="absolute -inset-4 -z-10 rounded-4xl bg-accent/10 blur-3xl" />

        <div className="relative">
          {/* Blur Glow */}
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-radial from-white/60 via-white/20 to-transparent blur-3xl scale-110" />

        <div className="h-full min-h-[300px] min-w-[320px] md:min-w-[400px] w-full bg-white/50 p-2 rounded-2xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full -mb-2 max-w-xl mx-auto rounded-2xl object-cover border-2 border-border shadow-[8px_8px_24px_#00000040]"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_34%),linear-gradient(to_bottom,rgba(245,247,255,0.9),transparent_55%)]" />
      <div className="relative flex flex-col border border-green-100 rounded-xl rounded-t-4xl items-center mx-auto max-w-fit px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">

         <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-3 rounded-xl rounded-t-4xl bg-white/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-blue-800 outline-2 outline-offset-1 outline-blue-500/40 ">
            <span className="h-1.5 w-1.5  animate-pulse rounded-full  bg-blue-500" />
              People search on Google not Instagram. 
          </span>

        <div className="flex flex-col items-center py-6 gap-6 text-center md:flex-row ">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
           

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Your website,
              <span className="block text-accent">ready in days
                <svg className="mx-auto w-3/5 md:w-full" width="460" height="15" viewBox="0 0 460 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_4)">
                    <path d="M5 11C18.0316 11 31.0633 11 77.1745 9.73077C123.286 8.46154 202.082 5.92307 245.704 4.23461C289.327 2.54615 295.388 1.78461 323.816 1.39231C352.244 1 402.855 1 455 1" stroke="#2563EB" strokeWidth="4" strokeLinecap="round"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_1_4" x="0" y="0" width="460" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feOffset dy="4"/> 
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4" result="shape"/>
                  </filter>
                  </defs>
                </svg>


              </span>
              not months.
            </h1>

            <p className="mx-auto mt-6 max-w-xl leading-6 text-foreground "> 
              Browse responsive, animated, modern templates. Choose one,
              connect with us and go live in 1-2 days.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Link
                href="/templates"
                className="group w-fit mx-auto inline-flex items-center justify-center gap-2 rounded-xl rounded-t-4xl bg-accent px-7 py-3.5 font-semibold text-white shadow-sm outline-2 outline-offset-0.5 outline-black/20 shadow-accent/20 transition-colors duration-200 hover:bg-accent-hover"
              >
                Explore Templates
                <HugeiconsIcon className="mt-1 group-hover:scale-103 transition-all duration-200" icon={SearchSquareIcon} size={20} />
              </Link>
              <Link
                href="/contact"
                className="group w-fit mx-auto inline-flex items-center justify-center gap-2 rounded-xl rounded-t-4xl outline-2 outline-offset-0.5 outline-black/20 bg-white px-7 py-3.5 font-semibold text-foreground transition-colors duration-200 hover:bg-muted"
              >
                Get in Touch 🫱🏼‍🫲🏻
                {/* <HugeiconsIcon className="mt-1 group-hover:scale-103 transition-all duration-200" icon={TouchInteraction04Icon} size={20} /> */}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className=""
          >
            <HeroPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
