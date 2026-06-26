import Link from "next/link";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import {
  InstagramIcon,
  NewTwitterIcon,
  Linkedin01Icon,
  // Github01Icon,
  Email,
  // Dribbble,
} from "@hugeicons/core-free-icons";

const footerLinks = {
  Templates: [
    { label: "Restaurant", href: "/templates/elixir-cafe" },
    { label: "Agency", href: "/templates/agency" },
    { label: "Portfolio", href: "/templates/yoga" },
    { label: "Hotel", href: "/templates/hotel" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Terms", href: "/terms" },
  ],
};

const socials = [
  { icon: InstagramIcon, href: "https://instagram.com/shani.develops", label: "Instagram" },
  { icon: NewTwitterIcon, href: "https://x.com/shanidevelops", label: "X (Twitter)" },
  { icon: Linkedin01Icon, href: "https://linkedin.com/in/shani-tiwarii", label: "LinkedIn" },
  // { icon: Github01Icon, href: "https://github.com/shani-tiwari", label: "GitHub" },
  { icon: Email, href: "mailto:shanitiwari2021@gmail.com", label: "Email" },
  // { icon: Dribbble, href: "https://dribbble.com/shani-tiwari", label: "Dribbble" },
  
];


export default function Footer() {
  return (
    <footer className=" border-t border-border/70 bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
                <span className="text-sm font-bold text-white">W</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                Web<span className="text-accent">Gram</span>
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Code-ready, responsive website templates. Pick a design,
              customize it, and go live in 1-2 days.
            </p>



          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-sm font-semibold text-white">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Stay Updated
            </h4>
            <p className="mb-4 text-sm text-white/70">
              Get notified on new templates launch.
            </p>
            <form className="flex gap-2 mb-4" action="/contact">
              <input
                type="email"
                name="email"
                disabled
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-lg rounded-t-xl outline-2 outline-offset-1 outline-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                disabled
                className="rounded-lg rounded-t-4xl bg-accent px-4 py-2 text-sm font-semibold outline-2 outline-offset-1 outline-white/40 text-white transition-colors hover:bg-accent-hover"
              >
                Join
              </button>
            </form>
            {/* social icons */}
            <div className="flex items-center justify-between rounded-xl pb-3 p-1 w-full">
              {socials.map((social) => (
                <SocialIcon key={social.label} icon={social.icon} href={social.href} label={social.label} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            Copyright (c) {new Date().getFullYear()} WebGram. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


export function SocialIcon({icon, href, label}: {icon: IconSvgElement, href: string, label: string}) {
  return (
    <a
      key={label}
      href={href}
      aria-label={label}
      target="_blank"
      className="flex h-10 w-10 items-center justify-center rounded-lg rounded-t-2xl outline-2 outline-offset-1 outline-white/20 shadow-md bg-white/10 transition-colors duration-200 hover:bg-accent"
    >
      <HugeiconsIcon icon={icon} size={22} color="white" className="text-shadow-sm" />
    </a>
  );
}