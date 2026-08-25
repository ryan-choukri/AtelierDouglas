"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Réalisations", href: "#realisations" },
  { label: "Services", href: "#services" },
  { label: "Atelier", href: "#atelier" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <svg className="absolute size-0" aria-hidden="true">
        <defs>
          <filter id="nav-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <nav
        aria-label="Navigation principale"
        className={` text-xl mx-auto flex max-w-6xl items-center gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass glass-scrolled" : "glass"
        }`}
      >
        <a
          href="#top"
          className="display text-[1.6rem] shrink-0 text-espresso transition-opacity hover:opacity-60"
        >
          <span className="hidden sm:inline">Atelier Douglas</span>
          <span className="sm:hidden">A. Douglas</span>
        </a>

        <div className="mx-auto hidden items-center md:flex">
          <div className="relative">
            {/* Connected pill backgrounds — gooey filter merges them into one liquid shape */}
            <div
              className="absolute inset-0 flex items-center"
              style={{ filter: "url(#nav-goo)" }}
              aria-hidden="true"
            >
              {links.map((l, i) => (
                <div
                  key={l.href}
                  className="relative -mx-1 first:-ml-1 last:-mr-1"
                >
                  <span className="invisible block whitespace-nowrap px-5 py-2 text-[0.8125rem]">
                    {l.label}
                  </span>
                  <span
                    className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                      hovered === i ? "bg-terracotta" : "bg-ivory/25"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Text links on top */}
            <div className="relative z-10 flex items-center">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className={`block whitespace-nowrap px-5 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ${
                    hovered === i ? "text-espresso" : "text-terracotta"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-terracotta px-3.5 py-2 text-[0.75rem] font-medium text-primary-foreground transition-all duration-300 hover:bg-terracotta-deep sm:px-4"
          >
            <span className="hidden sm:inline">Parler de votre projet</span>
            <span className="sm:hidden">Projet</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-hairline md:hidden"
          >
            <span
              className={`h-px w-4 bg-espresso transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-espresso transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display text-2xl text-terracotta"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
