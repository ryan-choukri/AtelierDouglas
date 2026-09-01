"use client";
import Image from "next/image";
import nordalIndustrie from "@/assets/work-nordal-industrie.png";
import barberProject from "@/assets/work-barber-project.png";
import metalforge from "@/assets/metalforge.png";
import heroCamping from "@/assets/camping.png";
import ryandevImg from "@/assets/ryandev.jpg";

import { ContactForm } from "@/components/atelier/ContactForm";
import { VisibilityConversion } from "@/components/atelier/VisibilityConversion";

export function Statement() {
  return <VisibilityConversion />;
}

const services = [
  {
    n: "01",
    title: "Création",
    text: "Sites web conçus sur mesure, de la première idée jusqu'à la mise en ligne.",
  },
  {
    n: "02",
    title: "Refonte",
    text: "On reprend un site vieillissant pour lui donner une nouvelle image, une meilleure expérience et une structure plus efficace.",
  },
  {
    n: "03",
    title: "Entretien",
    text: "Maintenance, évolutions et améliorations pour garder un site rapide, propre et à jour.",
  },
];

export function Services() {
  return (
    <section id="services" className="grain border-b border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32">
        <div className="flex items-baseline justify-between border-b border-hairline pb-6">
          <h2 className="display text-[clamp(3.6rem,9vw,7.5rem)] text-espresso">
            Ce qu&apos;on fabrique
          </h2>
          <span className="label hidden text-walnut/70 sm:block">Services</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.n}
              className="cursor-pointer group relative flex flex-col gap-20 border-b border-hairline px-0 py-10 transition-colors duration-500 hover:bg-paper md:border-b-0 md:border-r md:px-7 md:py-12 md:last:border-r-0 md:first:pl-0"
            >
              <div className="flex items-center gap-3">
                <span className="label text-terracotta">{s.n}</span>
                <span className="h-px flex-1 bg-hairline transition-colors duration-500 group-hover:bg-terracotta/40" />
              </div>
              <div>
                <h3 className="display text-[clamp(1.9rem,4vw,2.6rem)] text-espresso">
                  {s.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-walnut">
                  {s.text}
                </p>
                <span className="label mt-7 inline-block text-espresso opacity-0 transition-all duration-500 group-hover:opacity-100">
                  En savoir plus →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "METALFORGE",
    category: "Chaudronnerie et mécano-soudure",
    text: "Refonte complète du site web d'une entreprise de chaudronnerie industrielle, avec un design moderne et une navigation optimisée.",
    img: metalforge,
    year: "2026",
    url: "/chaudronerie",
  },
  {
    name: "Camping Les Grands Chênes",
    category: "Camping & Hébergement",
    text: "Site de présentation premium pour un camping en Dordogne, avec galerie immersive, informations pratiques et réservation en ligne intégrée.",
    img: heroCamping,
    year: "2026",
    url: "/camping",
  },
  {
    name: "Barber Project",
    category: "Site vitrine pour les Barbershops",
    text: "Un site vitrine moderne et élégant pour les salons de coiffure et barbershops, avec réservation en ligne.",
    img: barberProject,
    year: "2026",
    url: "https://thefrenchebarber.netlify.app/barber-240",
  },
  {
    name: "NORDAL",
    category: "Industrie Lourde / Usinage",
    text: "Un site-portfolio, technique et morderne, pour une entreprise d'usinage de précision.",
    img: nordalIndustrie,
    year: "2026",
    url: "/industrial",
  },
];

function getDomainFromName(name: string): string {
  //remove spaces and special characters from name
  return name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() + ".fr";
}

export function Work() {
  return (
    <section
      id="realisations"
      className="darker-part grain border-b border-hairline"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32">
        <div className="flex items-baseline justify-between border-b border-hairline pb-6">
          <h2 className="display text-[clamp(3.6rem,9vw,7.5rem)] text-espresso">
            Quelques pièces
          </h2>
          <span className="label hidden text-walnut/70 sm:block">
            Réalisations — 03
          </span>
        </div>

        <div className="mt-14 space-y-24 md:space-y-36">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end ${
                i % 2 === 1 ? "md:[&>figure]:order-2" : ""
              }`}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir le projet ${p.name}`}
                className={`max-w-[703px] cursor-pointer group relative overflow-hidden rounded-t-2xl rounded-b-lg border border-hairline bg-paper md:col-span-8 ${
                  i % 2 === 1 ? "md:col-start-5" : ""
                }`}
              >
                <div className="flex flex-col">
                  {/* Browser bar */}
                  <div className="flex items-center gap-3 px-4 py-2.5 md:py-3">
                    {/* Three circles macOS style */}
                    <div className="flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500 md:h-2.5 md:w-2.5" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400 md:h-2.5 md:w-2.5" />
                      <div className="h-2 w-2 rounded-full bg-green-500 md:h-2.5 md:w-2.5" />
                    </div>
                    {/* Domain name */}
                    <span className="text-[0.7rem] text-stone-400 md:text-[0.75rem]">
                      {getDomainFromName(p.name)}
                    </span>
                  </div>
                  {/* Image */}
                  <Image
                    src={p.img}
                    alt={`Aperçu du site ${p.name}`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    // add maximum width for the image 703px
                    className="w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </a>
              <div
                className={`md:col-span-4 ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="label text-terracotta">0{i + 1}</span>
                  <span className="label text-walnut/70">{p.year}</span>
                </div>
                <h3 className="display mt-5 text-[clamp(2.2rem,4vw,2.7rem)] text-espresso">
                  {p.name}
                </h3>
                <p className="label mt-3 text-walnut/80">{p.category}</p>
                <p className="mt-5 text-[0.9375rem] leading-relaxed text-walnut">
                  {p.text}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 border-b border-espresso/30 pb-1 text-sm font-medium text-espresso transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  Voir le projet
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    n: "01",
    title: "Site rapide",
    text: "Score Google PageSpeed 90+, dès la mise en ligne.",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" />,
  },
  {
    n: "02",
    title: "100% mobile",
    text: "Pensé d’abord pour les écrans mobiles, jusqu’au dernier pixel.",
    icon: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M11 18h2" strokeLinecap="round" />
      </>
    ),
  },
  {
    n: "03",
    title: "SEO local optimisé",
    text: "Optimisé pour votre visibilité locale sur Google",
    icon: (
      <>
        <path d="M12 21s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.4" />
      </>
    ),
  },
  {
    n: "04",
    title: "Design sur mesure",
    text: "Aucun site générique. Chaque pixel est pensé pour votre activité.",
    icon: (
      <>
        <path d="M4 20 12 4l8 16H4Z" strokeLinejoin="round" />
        <path d="M8.5 14h7" strokeLinecap="round" />
      </>
    ),
  },
  {
    n: "05",
    title: "Conversion",
    text: "Pensé pour transformer vos visiteurs en clients.",
    icon: (
      <>
        <path
          d="M3 17l6-6 4 4 8-8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    n: "06",
    title: "Hébergement sécurisé",
    text: "Un site rapide, fiable et protégé, sans mauvaise surprise.",
    icon: (
      <>
        <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export function Philosophy() {
  return (
    <section
      id="services"
      className="grain custom-bg-terracotta border-b border-hairline"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-16 mb-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="label text-ink/70">Pourquoi Atelier Douglas</span>
          </div>
          <p className="label max-w-xs text-ink/70 md:text-right">
            Six raisons de choisir un site fabriqué sur mesure
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <article
              key={b.n}
              className="cursor-pointer group relative flex flex-col gap-3 border border-hairline bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-terracotta/50"
            >
              <div className="flex items-center justify-between">
                <span className="label text-terracotta">{b.n}</span>
                <span className="flex h-9 w-9 items-center justify-center border border-hairline text-terracotta transition-all duration-500 group-hover:scale-110 group-hover:border-terracotta/60 group-hover:bg-terracotta/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    {b.icon}
                  </svg>
                </span>
              </div>
              <div>
                <h3 className="display text-[1.75rem] text-espresso">
                  {b.title}
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-walnut">
                  {b.text}
                </p>
              </div>
              <span
                className="mt-auto h-px w-full bg-hairline transition-colors duration-500 group-hover:bg-terracotta/40"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Atelier() {
  const steps = ["Design", "Développement", "Mise en ligne", "Évolution"];
  return (
    <section id="atelier" className="grain border-b border-hairline">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-24 sm:px-6 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <h2 className="display text-[clamp(2rem,5vw,3.6rem)] text-espresso">
            L&apos;atelier
          </h2>
          <span className="label mt-4 block text-walnut/70">
            Studio indépendant
          </span>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-[1.25rem] leading-snug text-espresso">
            Atelier Douglas est un studio web indépendant. On imagine, dessine
            et développe des sites modernes pour les entreprises qui veulent
            faire bonne impression en ligne.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            {steps.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                <span className="label text-walnut">{s}</span>
                {i < steps.length - 1 && (
                  <span className="text-terracotta">→</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const process = [
  {
    n: "01",
    title: "On regarde",
    text: "On comprend votre activité, vos clients et votre site actuel.",
  },
  {
    n: "02",
    title: "On dessine",
    text: "Structure, direction artistique et expérience utilisateur.",
  },
  {
    n: "03",
    title: "On fabrique",
    text: "Développement propre, rapide et responsive.",
  },
  {
    n: "04",
    title: "On fait vivre",
    text: "Maintenance, évolutions et amélioration continue.",
  },
];

export function Process() {
  return (
    <section className="grain border-b border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-32">
        <span className="label text-walnut/70">Méthode</span>
        <ol className="mt-10">
          {process.map((p) => (
            <li
              key={p.n}
              className="cursor-pointer group grid grid-cols-1 gap-3 border-t border-hairline py-8 transition-colors duration-500 hover:bg-paper md:grid-cols-12 md:items-baseline md:py-10"
            >
              <span className="label text-terracotta md:col-span-2">{p.n}</span>
              <h3 className="display text-[clamp(1.7rem,3.6vw,2.5rem)] text-espresso md:col-span-5">
                {p.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-walnut md:col-span-5">
                {p.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const aboutStats = [
  { value: "5+", label: "Ans de métier" },
  { value: "20+", label: "Projets livrés" },
  { value: "100%", label: "Fait main" },
];

export function About() {
  return (
    <section
      id="fondateur"
      className="darker-part grain border-b border-hairline"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 py-24 sm:px-6 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-xs md:max-w-none">
            <span
              className="drift-slow absolute -right-6 -top-8 h-28 w-28 rounded-full bg-terracotta/80"
              aria-hidden
            />
            <div
              className="absolute -left-5 -bottom-5 h-[92%] w-[92%] rotate-[-3deg] border border-hairline bg-paper"
              aria-hidden
            />
            <div className="relative aspect-[2/3] overflow-hidden border border-hairline">
              <Image
                src={ryandevImg}
                alt="Ryan, fondateur d'Atelier Douglas"
                fill
                sizes="(min-width: 768px) 360px, 80vw"
                className="object-cover grayscale-[0.1] contrast-[1.05]"
              />
              <span className="label absolute bottom-4 left-4 bg-terracotta px-3 py-1.5 text-primary-foreground">
                Ryan — Fondateur
              </span>
            </div>
            <span
              className="label absolute -right-8 top-10 hidden rotate-90 text-[0.5625rem] text-walnut/70 md:block"
              aria-hidden
            >
              Développeur — France
            </span>
          </div>
        </div>

        <div className="md:col-span-7 md:pt-4">
          <span className="label text-walnut/70">
            L&apos;humain derrière l&apos;atelier
          </span>
          <h2 className="display mt-6 text-[clamp(3.6rem,9vw,7.5rem)] text-espresso">
            Un développeur,
            <br />
            pas une agence.
          </h2>
          <p className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-walnut">
            Je m&apos;appelle Ryan. Je dessine, développe et mets en ligne
            chaque site moi-même, du premier croquis au dernier pixel sans
            sous-traitance, sans intermédiaire.
          </p>
          <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-walnut/80">
            Un seul interlocuteur, une exigence d&apos;artisan et des sites
            pensés pour durer, pas pour cocher une case.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-hairline pt-8">
            {aboutStats.map((s) => (
              <div key={s.label}>
                <span className="display block text-[clamp(1.8rem,3.4vw,2.6rem)] text-terracotta">
                  {s.value}
                </span>
                <span className="label mt-2 block text-walnut/70">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group mt-12 inline-flex items-center gap-2 border-b border-espresso/30 pb-1 text-sm font-medium text-espresso transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Discutons de votre projet
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="grain bg-terracotta">
      <div className=" grid grid-cols-12 mx-auto max-w-7xl px-2 py-16 sm:px-6 md:py-25">
        <div className="col-span-12 md:col-span-5 px-3 sm:px-5">
          <h2 className="display text-[clamp(3.6rem,9vw,7.5rem)] text-ink">
            On fabrique
            <br />
            quoi pour vous ?
          </h2>
          <p className="mb-12 sm:mb-16 mt-8 max-w-lg sm:text-[1.0625rem] text-[0.9rem] leading-relaxed text-ink/80">
            Un nouveau site, une refonte ou simplement l&apos;envie de faire
            mieux ?<br />
            Envoyez-moi un message par mail ou sur notre formulaire de contact
            dédié. (réponse sous 24h)
            <br />
            <a
              href="mailto:atelierdouglas.web@gmail.com"
              className="border-b border-ink/40 pb-1 text-ink transition-colors hover:border-ink"
            >
              atelierdouglas.web@gmail.com
            </a>
          </p>
        </div>
        {/* split in col heach div container */}
        <div className="col-span-12 md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="grain bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="label text-espresso">Atelier Douglas</p>
          <p className="mt-3 text-sm text-espresso/60">
            Design &amp; développement web.
          </p>
        </div>
        <nav aria-label="Pied de page" className="md:col-span-3">
          <ul className="space-y-2 text-sm text-espresso/60">
            {["Réalisations", "Services", "Atelier", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace("é", "e")}`}
                  className="transition-colors hover:text-terracotta"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <ul className="space-y-2 text-sm text-espresso/60">
            <li>
              <a
                href="https://www.linkedin.com/in/ryan-choukri/"
                className="transition-colors hover:text-terracotta"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ryan-choukri/"
                className="transition-colors hover:text-terracotta"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <p className="label col-span-full mt-6 border-t border-hairline pt-6 text-espresso/45">
          © 2026 Atelier Douglas
        </p>
        <nav
          aria-label="Légal"
          className="label col-span-full flex flex-wrap gap-6 text-espresso/45"
        >
          <a
            href="/mention-legal"
            className="transition-colors hover:text-espresso"
          >
            Mentions légales
          </a>
          <a
            href="/mention-legal"
            className="transition-colors hover:text-espresso"
          >
            Politique de confidentialité
          </a>
          <a
            href="/mention-legal"
            className="transition-colors hover:text-espresso"
          >
            CGV
          </a>
        </nav>
      </div>
    </footer>
  );
}
