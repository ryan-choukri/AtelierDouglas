"use client";
import { Menu, Tent, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BOOKING_URL, CAMPING } from "@/lib/camping";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Le camping", href: "#le-camping" },
  { label: "Hébergements", href: "#hebergements" },
  { label: "Activités", href: "#experience" },
  { label: "Aux alentours", href: "#alentours" },
  { label: "Galerie", href: "#galerie" },
  { label: "Infos pratiques", href: "#infos-pratiques" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/90 py-2 backdrop-blur-xl"
          : "border-b border-transparent py-4",
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8"
      >
        <a
          href="#top"
          className={cn(
            "group flex items-center gap-3 transition-colors",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          <span
            className={cn(
              "flex size-10 items-center justify-center rounded-full border transition-colors",
              scrolled
                ? "border-border bg-secondary"
                : "border-primary-foreground/40 bg-white/10",
            )}
          >
            <Tent className="size-5" strokeWidth={1.5} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base tracking-tight sm:text-lg">
              Les Grands Chênes
            </span>
            <span className="block text-[0.62rem] tracking-[0.24em] uppercase opacity-70">
              Camping · Dordogne
            </span>
          </span>
        </a>

        <ul
          className={cn(
            "hidden items-center gap-7 text-sm font-medium lg:flex",
            scrolled ? "text-foreground/80" : "text-primary-foreground/90",
          )}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-opacity after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={BOOKING_URL}
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep sm:inline-flex"
          >
            Réserver mon séjour
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className={cn(
              "flex size-10 items-center justify-center rounded-full border transition-colors lg:hidden",
              scrolled
                ? "border-border text-foreground"
                : "border-primary-foreground/40 text-primary-foreground",
            )}
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            <span className="font-display text-lg">Les Grands Chênes</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="flex size-10 items-center justify-center rounded-full border border-border"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>
          <ul className="flex flex-1 flex-col gap-1 px-5 pt-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-4 font-display text-2xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-5">
            <a
              href={BOOKING_URL}
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground"
            >
              Réserver mon séjour
            </a>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              {CAMPING.phoneDisplay}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
