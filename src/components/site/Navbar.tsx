"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Assuming cn is available, if not I'll just use string concat or clsx if imported

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/collections/rings", label: "Rings" },
  { href: "/collections/earrings", label: "Earrings" },
  { href: "/collections/necklaces", label: "Necklaces" },
  { href: "/collections/custom", label: "Custom" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-gold-soft/40 bg-[oklch(0.18_0.07_265/0.85)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l, i) => {
            const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={`${l.href}-${i}`}
                href={l.href}
                className={`text-[13px] uppercase tracking-[0.2em] transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/appointment">
              <Calendar className="mr-1.5 h-4 w-4" />
              Book Visit
            </Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold-soft/30 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l, i) => {
              const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={`${l.href}-${i}`}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded px-3 py-3 text-sm uppercase tracking-[0.2em] hover:bg-secondary hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/appointment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded bg-gradient-gold px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Visit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
