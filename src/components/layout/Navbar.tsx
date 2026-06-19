"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "Templates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-white/20 backdrop-blur-lg ">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between pl-6 pr-6 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-sm shadow-accent/20 transition-transform duration-200 group-hover:scale-105">
            <span className="text-sm font-bold text-white">W</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground text-shadow-sm">
            Web<span className="text-accent">Gram</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-1 font-medium  transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-accent animate-pulse "
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-xl bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-accent/20 border-2 border-border/40 text-shadow-sm transition-colors duration-200 hover:bg-accent-hover md:inline-flex"
        >
          Get Started
        </Link>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <HugeiconsIcon
            icon={mobileOpen ? Cancel01Icon : Menu01Icon}
            size={22}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border/70 bg-white/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white border-2 border-border/40 text-shadow-sm transition-colors hover:bg-accent-hover"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
