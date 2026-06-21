"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";

interface TemplateCardProps {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  deliveryDays: number;
  index?: number;
  images: string[]
}

// function TemplatePreview({ category, name }: { category: string; name: string }) {
//   return (
//     <div className="relative aspect-16/10 overflow-hidden bg-linear-to-br from-slate-100 via-white to-blue-50">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_38%)]" />
//       <div className="absolute inset-x-4 top-4 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/70 px-3 py-2 backdrop-blur">
//         <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
//         <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
//         <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
//         <span className="ml-2 text-xs font-medium text-slate-500">{name}</span>
//       </div>
//       <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-lg shadow-blue-950/5 backdrop-blur-sm">
//         <div className="mb-3 flex items-center justify-between">
//           <div>
//             <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
//               {category}
//             </p>
//             <p className="text-sm font-semibold text-foreground">{name}</p>
//           </div>
//           <div className="h-10 w-10 rounded-full bg-accent-light" />
//         </div>
//         <div className="space-y-2">
//           <div className="h-2 w-3/4 rounded-full bg-slate-200" />
//           <div className="h-2 w-5/6 rounded-full bg-slate-200" />
//           <div className="h-2 w-2/3 rounded-full bg-slate-200" />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function TemplateCard({
  slug,
  name,
  category,
  tagline,
  // price,
  // deliveryDays,
  index = 0,
  images
}: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={`/templates/${slug}`}
        className="group p-1 block overflow-hidden rounded-2xl border border-border bg-linear-to-br from-slate-100 via-white to-blue-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
      >
        {/* template preview */}
        <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-accent-light">
          <Image src={images[0]} alt={name} fill className="object-fill hover:scale-101 transition-all duration-500" />
        </div>

        <div className="py-2 px-6 flex justify-between items-center ">
          <div className=" ">

              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                {category}
              </p>
              <h3 className=" text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                {name}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {tagline}
              </p>
          </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted border-2 border-accent-light transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
              <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
            </span>

        </div>

      </Link>
    </motion.div>
  );
}
