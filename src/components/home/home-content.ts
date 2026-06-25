import type { HugeiconsIconProps } from "@hugeicons/react";
import {
  CodeIcon,
  PaintBrush01Icon,
  Rocket01Icon,
  Shield01FreeIcons,
  SmartPhone01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

export type HomeStep = {
  num: string;
  title: string;
  desc: string;
};

export type HomeFeature = {
  icon: NonNullable<HugeiconsIconProps["icon"]>;
  title: string;
  desc: string;
};

export const homeSteps: HomeStep[] = [
  {
    num: "01",
    title: "Browse Templates",
    desc: "Explore our collection of professionally designed, code-ready templates built for different industries.",
  },
  {
    num: "02",
    title: "Choose and Contact",
    desc: "Pick the template that fits your business. We personalize colors, content, images, and branding.",
  },
  {
    num: "03",
    title: "Website Live",
    desc: "Your fully responsive, SEO-optimized website goes live within 1-2 days. It's that simple.",
  },
];

export const homeFeatures: HomeFeature[] = [
  {
    icon: CodeIcon,
    title: "Clean Code",
    desc: "Built with Next.js and Tailwind CSS. Scalable, maintainable, and developer-friendly.",
  },
  {
    icon: SmartPhone01Icon,
    title: "Fully Responsive",
    desc: "Pixel-perfect on every device - mobile, tablet, and desktop. No compromise.",
  },
  {
    icon: Rocket01Icon,
    title: "Fast Performance",
    desc: "Optimized for Core Web Vitals. Lightning-fast load times out of the box.",
  },
  {
    icon: SparklesIcon,
    title: "Smooth Animations",
    desc: "Subtle, purposeful animations powered by Motion for a polished feel.",
  },
  {
    icon: Shield01FreeIcons,
    title: "SEO Optimized",
    desc: "Semantic HTML, meta tags, schema markup - built to rank from day one.",
  },
  {
    icon: PaintBrush01Icon,
    title: "Easy to Customize",
    desc: "Modular components and design tokens make branding changes effortless.",
  },
];
