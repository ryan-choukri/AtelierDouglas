"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

function RevealRow({
  delay = 0,
  children,
}: {
  delay?: number;
  children: ReactNode;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`mt-3 relative flex gap-5 transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Hand-drawn-style connector: one smooth curved stroke ending in a soft arrowhead.
function StepConnector() {
  return (
    <div className="flex gap-5">
      <div className="w-8 shrink-0" aria-hidden />
      <div className="flex max-w-sm justify-center py-2">
        <svg
          viewBox="0 0 18 26"
          width="18"
          height="26"
          fill="none"
          className="text-terracotta/50"
        >
          <path
            d="M9 1c6 5 6 12 0 17"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M4 15q2.2 3.4 5 5.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M14 15q-2.2 3.4 -5 5.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

const stops = [
  { step: "01", label: "Recherche Google" },
  { step: "02", label: "Votre site" },
  { step: "03", label: "Réservation" },
];

const benefits = [
  {
    n: "01",
    title: "SEO local",
    text: "Être visible lorsque vos clients recherchent vos services.",
  },
  {
    n: "02",
    title: "Performance",
    text: "Un site rapide et parfaitement optimisé sur mobile.",
  },
  {
    n: "03",
    title: "Conversion",
    text: "Des parcours pensés pour pousser naturellement vers l'appel ou la réservation.",
  },
];

export function VisibilityConversion() {
  return (
    <section
      id="visibilite"
      className="darker-part grain border-b border-hairline"
    >
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <span className="label text-terracotta">
              Visibilité &amp; conversion
            </span>
            <h2 className="display mt-4 text-[clamp(2rem,5vw,3.2rem)] text-espresso">
              Un site pensé pour être trouvé. Et surtout, pour convertir
              <span className="text-terracotta">.</span>
            </h2>
            <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-walnut">
              Votre site ne doit pas simplement présenter votre activité. Il
              doit vous aider à être visible sur Google, rassurer vos visiteurs
              et les transformer en clients.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-5">
              {benefits.map((b) => (
                <div key={b.n}>
                  <span className="label text-terracotta">{b.n}</span>
                  <h3 className="mt-2 text-sm font-medium text-espresso">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-snug text-walnut">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative parcours illustration — supporting visual only */}
          <div className="md:col-span-6 md:col-start-7" aria-hidden="true">
            <div className="relative">
              <RevealRow delay={0}>
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-paper">
                  <span className="label text-terracotta">1</span>
                </span>
                <div className="flex-1">
                  <span className="label text-walnut/70">{stops[0].label}</span>
                  <div className="mt-2 max-w-sm rounded-lg border border-hairline bg-paper p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-md">
                    <div className="flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 shrink-0 text-walnut/60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <span className="text-[0.8125rem] text-espresso/80">
                        barber à Paris
                      </span>
                    </div>
                    <div className="mt-3 space-y-1 border-t border-hairline pt-3">
                      <p className="text-[0.9375rem] font-medium text-espresso">
                        The Barber Project
                      </p>
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="tracking-tight text-terracotta">
                          ★★★★★
                        </span>
                        <span className="text-espresso/70">4.9</span>
                        <span className="text-walnut/60">· 182 avis</span>
                      </div>
                      <p className="text-xs text-walnut/60">
                        Salon de coiffure · Paris 11e
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {["Site web", "Itinéraire", "Appeler"].map((l) => (
                          <span
                            key={l}
                            className="label rounded-full border border-hairline px-2.5 py-1 text-[0.5625rem] text-walnut/80"
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealRow>

              {/* <StepConnector /> */}

              <RevealRow delay={140}>
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-paper">
                  <span className="label text-terracotta">2</span>
                </span>
                <div className="flex-1">
                  <span className="label text-walnut/70">{stops[1].label}</span>
                  <div className="mt-2 max-w-sm overflow-hidden rounded-lg border border-hairline bg-paper transition-all duration-500 hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-md">
                    <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-espresso/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-espresso/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-terracotta/70" />
                      <span className="label ml-2 text-[0.5625rem] text-walnut/70">
                        thebarberproject.fr
                      </span>
                    </div>
                    <div className="space-y-2 p-3.5">
                      <div className="h-1.5 w-2/3 rounded-full bg-hairline" />
                      <div className="h-1.5 w-1/2 rounded-full bg-hairline" />
                      <span className="mt-1.5 inline-flex items-center rounded-full bg-terracotta px-3 py-1.5 text-[0.6875rem] font-medium text-primary-foreground">
                        Réserver un rendez-vous
                      </span>
                    </div>
                  </div>
                </div>
              </RevealRow>

              {/* <StepConnector /> */}

              <RevealRow delay={280}>
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-paper">
                  <span className="label text-terracotta">3</span>
                </span>
                <div className="flex-1">
                  <span className="label text-walnut/70">{stops[2].label}</span>
                  <div className="mt-2 max-w-sm rounded-lg border border-hairline bg-paper p-3.5 transition-all duration-500 hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-md">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta text-[0.6875rem] text-primary-foreground">
                        ✓
                      </span>
                      <span className="text-[0.9375rem] font-medium text-espresso">
                        Réservation confirmée
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-walnut/70">
                      Jeudi 14h30 — Coupe &amp; barbe
                    </p>
                  </div>
                </div>
              </RevealRow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
