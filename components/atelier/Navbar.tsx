"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Sur la home, utilise les ancres; sur les autres pages, utilise les vraies routes
  const links =
    pathname === "/"
      ? [
          { label: "Réalisations", href: "#realisations" },
          { label: "Services", href: "#services" },
          { label: "À propos", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]
      : [
          { label: "Services", href: "/services" },
          { label: "Réalisations", href: "/realisations" },
          { label: "À propos", href: "/a-propos" },
          { label: "Contact", href: "/contact" },
        ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <nav
        aria-label="Navigation principale"
        className={`font-sans text-xl mx-auto flex max-w-7xl items-center gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass glass-scrolled" : "glass"
        }`}
      >
        {/* Logo */}
        <a
          href={pathname === "/" ? "#top" : "/"}
          className="pt-[5px] pl-1 display text-[1.8rem] shrink-0 text-espresso transition-opacity"
        >
          <span className="hidden sm:inline">Atelier Douglas</span>
          <span className="sm:hidden">A. Douglas</span>
        </a>

        {/* Desktop navigation */}
        <div className="mx-auto hidden items-center md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                group relative
                whitespace-nowrap
                px-5 py-2
                text-[0.83rem]
                font-medium
                text-walnut

                transition-colors
                duration-300

                hover:text-espresso
                focus-visible:text-espresso
                focus-visible:outline-none
              "
            >
              {/* Texte */}
              <span
                className="
                  relative z-10 block

                  transition-transform
                  duration-500
                  ease-[cubic-bezier(.16,1,.3,1)]

                  group-hover:-translate-y-[2px]
                  group-focus-visible:-translate-y-[2px]
                "
              >
                {link.label}
              </span>

              {/* Underline */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-[3px]
                  left-[22%]
                  right-[22%]

                  h-[2px]
                  origin-left
                  scale-x-0
                  rounded-full
                  bg-terracotta

                  transition-transform
                  duration-500
                  ease-[cubic-bezier(.16,1,.3,1)]

                  group-hover:scale-x-100
                  group-focus-visible:scale-x-100
                "
              />
            </a>
          ))}
        </div>

        {/* CTA + mobile menu */}
        <div className="relative left-[8px] ml-auto flex items-center gap-2 md:ml-0">
          <a
            href={pathname === "/" ? "#contact" : "/contact"}
            className="
              group
              inline-flex items-center gap-1.5
              rounded-full
              bg-terracotta
              px-3.5 py-2
              text-[0.75rem]
              font-medium
              text-primary-foreground

              transition-all
              duration-300

              hover:bg-terracotta-deep
              sm:px-4
            "
          >
            <span className="hidden font-bold sm:inline">
              Parler de mon projet
            </span>

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
            className="
              flex h-9 w-9
              flex-col items-center justify-center
              gap-[5px]
              rounded-full
              border border-hairline
              md:hidden
            "
          >
            <span
              className={`h-px w-4 bg-espresso transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-4 bg-espresso transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass mx-auto mt-2 max-w-7xl rounded-3xl p-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display text-2xl text-terracotta"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
