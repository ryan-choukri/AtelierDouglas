"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Expertise", href: "#expertise" },
  { label: "Savoir-faire", href: "#savoir-faire" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      className={`fixed inset-x-0 top-0 z-50 border-b-4 transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
      style={{
        borderBottomColor: "var(--signal) !important",
        boxShadow: "0px 8px 27px rgb(214 90 50 / 53%)",
      }} // box-shadow: rgb(214 90 50 / 73%) 0px 8px 27px 2px;
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-[72px] md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-[1.15rem] font-semibold tracking-[-0.04em] uppercase">
            Nordal
          </span>
          <span className="hidden h-2 w-2 bg-signal sm:block" aria-hidden />
        </a>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Principale"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline label-tech text-graphite-soft transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="label-tech hidden items-center gap-2 border border-graphite px-4 py-3 text-foreground transition-colors duration-300 hover:bg-graphite hover:text-primary-foreground sm:inline-flex"
          >
            Demander un devis <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-border lg:hidden"
          >
            <span
              className={`block h-px w-4 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-background transition-[opacity,transform] duration-400 lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-between px-5 pt-8 pb-10">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.href} className="rule-top">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="display-tight text-[2rem]">{l.label}</span>
                  <span className="label-tech text-muted-foreground">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="label-tech flex items-center justify-between bg-graphite px-5 py-5 text-primary-foreground"
          >
            Demander un devis <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
