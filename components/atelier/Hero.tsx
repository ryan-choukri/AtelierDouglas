"use client";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      setTilt({
        x: (e.clientX - r.left - r.width / 2) / r.width,
        y: (e.clientY - r.top - r.height / 2) / r.height,
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="grain relative min-h-[96svh] overflow-hidden border-b border-hairline pt-28 sm:pt-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8 lg:pt-10">
          <p
            className="label rise text-walnut"
            style={{ animationDelay: "60ms" }}
          >
            Studio web indépendant — France
          </p>

          <h1 className="mt-7 text-espresso">
            <span
              className="display rise block text-[clamp(2.9rem,7.6vw,6.9rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Votre site
            </span>
            <span
              className="display rise block text-[clamp(2.9rem,7.6vw,6.9rem)]"
              style={{ animationDelay: "240ms" }}
            >
              compte<span className="text-terracotta">.</span>
            </span>
          </h1>

          <p
            className="rise mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-walnut"
            style={{ animationDelay: "360ms" }}
          >
            Design, développement &amp; refonte de sites web pour les
            entreprises qui veulent une présence en ligne à la hauteur de leur
            activité.
          </p>

          <div
            className="rise mt-11 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "460ms" }}
          >
            <a
              href="#realisations"
              className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-terracotta-deep"
            >
              Voir les réalisations
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-espresso/25 px-6 py-3.5 text-sm font-medium text-espresso transition-colors duration-300 hover:border-terracotta hover:text-terracotta"
            >
              Parler nous de votre projet
            </a>
          </div>
        </div>

        {/* Art-directed composition: a digital object on a designer's table */}
        <div className="relative lg:col-span-4">
          <div
            className="rise relative mx-auto max-w-md lg:max-w-none"
            style={{ animationDelay: "540ms" }}
          >
            {/* paper sheet behind */}
            <div
              className="absolute -left-6 top-10 h-[78%] w-[86%] rotate-[-4deg] border border-hairline bg-paper"
              style={{
                transform: `rotate(-4deg) translate3d(${tilt.x * -10}px, ${tilt.y * -8}px, 0)`,
                transition: "transform 700ms cubic-bezier(.2,.7,.2,1)",
              }}
              aria-hidden
            />
            {/* orange geometry */}
            <div
              className="drift-slower absolute -right-2 -top-4 h-24 w-24 rounded-full bg-terracotta/85"
              aria-hidden
            />
            <div
              className="drift-slow absolute -bottom-6 left-2 h-16 w-16 border border-terracotta"
              aria-hidden
            />

            {/* browser window */}
            <div
              className="relative overflow-hidden rounded-lg border border-espresso/15 bg-paper shadow-[0_40px_80px_-40px_oklch(0.06_0.01_45/0.85)]"
              style={{
                transform: `translate3d(${tilt.x * 14}px, ${tilt.y * 12}px, 0)`,
                transition: "transform 700ms cubic-bezier(.2,.7,.2,1)",
              }}
            >
              <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2.5">
                <span className="h-2 w-2 rounded-full bg-espresso/20" />
                <span className="h-2 w-2 rounded-full bg-espresso/20" />
                <span className="h-2 w-2 rounded-full bg-terracotta/70" />
                <span className="label ml-3 text-[0.5625rem] text-walnut/70">
                  atelierdouglas.fr
                </span>
              </div>
              <div className="space-y-4 p-5">
                <div className="display text-[2.2rem] leading-[0.9] text-espresso">
                  Bonne
                  <br />
                  impression
                </div>
                <div className="space-y-1.5">
                  <div className="h-px w-full bg-hairline" />
                  <div className="h-px w-4/5 bg-hairline" />
                  <div className="h-px w-2/3 bg-hairline" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="aspect-[4/5] bg-terracotta/85" />
                  <div className="aspect-[4/5] border border-hairline" />
                  <div className="aspect-[4/5] bg-walnut/15" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="label text-[0.5rem] text-walnut/80">
                    Design
                  </span>
                  <span className="label text-[0.5rem] text-walnut/80">
                    Development
                  </span>
                </div>
              </div>
            </div>

            {/* annotations */}
            <span
              className="label absolute -left-6 bottom-24 hidden rotate-[-90deg] text-[0.5625rem] text-walnut/70 lg:block"
              aria-hidden
            >
              Web — 2026
            </span>
          </div>
          <p className="label mt-6 text-right text-[0.5625rem] text-walnut/70">
            Made in France
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-hairline px-5 py-4 sm:px-6">
        <span className="label text-walnut/70">Défiler</span>
        <span className="label text-walnut/70">01 — Atelier Douglas</span>
      </div>
    </section>
  );
}
