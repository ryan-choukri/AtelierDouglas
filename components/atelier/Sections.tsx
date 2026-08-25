"use client";
import Image from "next/image";
import nordalIndustrie from "@/assets/work-nordal-industrie.png";
import barberProject from "@/assets/work-barber-project.png";
import nordPierre from "@/assets/work-nord-pierre.jpg";
import { VisibilityConversion } from "@/components/atelier/VisibilityConversion";

export function Statement() {
  return <VisibilityConversion />;
}

const services = [
  {
    n: "01",
    title: "Création",
    text: "Sites web conçus de zéro, de la première idée jusqu'à la mise en ligne.",
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
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-32">
        <div className="flex items-baseline justify-between border-b border-hairline pb-6">
          <h2 className="display text-[clamp(2rem,5vw,3.75rem)] text-espresso">
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
    name: "NORDAL",
    category: "Industrie Lourd / Usinage",
    text: "Un site-portfolio, technique et morderne, pour une entreprise d'usinage de précision.",
    img: nordalIndustrie,
    year: "2026",
    url: "/industrial",
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
    name: "Nord & Pierre",
    category: "Entreprise B2B spécialisée",
    text: "Refonte complète : documentation technique claire, demandes de devis structurées.",
    img: nordPierre,
    year: "2025",
    url: "#contact",
  },
];

export function Work() {
  return (
    <section
      id="realisations"
      className="darker-part grain border-b border-hairline"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-32">
        <div className="flex items-baseline justify-between border-b border-hairline pb-6">
          <h2 className="display text-[clamp(2rem,5vw,3.75rem)] text-espresso">
            Quelques pièces
          </h2>
          <span className="label hidden text-walnut/70 sm:block">
            Sélection — 03
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
                className={`cursor-pointer group relative overflow-hidden border border-hairline bg-paper md:col-span-8 ${
                  i % 2 === 1 ? "md:col-start-5" : ""
                }`}
              >
                <Image
                  src={p.img}
                  alt={`Aperçu du site ${p.name}`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </a>
              <div
                className={`md:col-span-4 ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="label text-terracotta">0{i + 1}</span>
                  <span className="label text-walnut/70">{p.year}</span>
                </div>
                <h3 className="display mt-5 text-[clamp(1.8rem,4vw,2.7rem)] text-espresso">
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

export function Philosophy() {
  return (
    <section className="grain custom-bg-terracotta">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-28 sm:px-6 md:grid-cols-12 md:py-40">
        <h2 className="display col-span-full text-[clamp(2.1rem,5.6vw,4.8rem)] text-ink md:col-span-8">
          Pas de template.
          <br />
          Pas de site qui ressemble
          <br />à celui du voisin.
        </h2>
        <p className="col-span-full self-end text-[1rem] leading-relaxed text-ink/80 md:col-span-4">
          Chaque projet commence par comprendre l&apos;entreprise, ses clients
          et ce qu&apos;elle doit transmettre. Ensuite seulement viennent le
          design et le code.
        </p>
      </div>
    </section>
  );
}

export function Atelier() {
  const steps = ["Design", "Développement", "Mise en ligne", "Évolution"];
  return (
    <section id="atelier" className="grain border-b border-hairline">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-24 sm:px-6 md:grid-cols-12 md:py-32">
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
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-32">
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

export function FinalCta() {
  return (
    <section id="contact" className="grain bg-terracotta">
      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-6 md:py-40">
        <h2 className="display text-[clamp(2.6rem,9vw,7.5rem)] text-ink">
          On fabrique
          <br />
          quoi pour vous ?
        </h2>
        <p className="mt-8 max-w-lg text-[1.0625rem] leading-relaxed text-ink/80">
          Un nouveau site, une refonte ou simplement l&apos;envie de faire mieux
          ?
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="mailto:hello@atelierdouglas.fr"
            className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-4 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Parler de votre projet
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="mailto:hello@atelierdouglas.fr"
            className="border-b border-ink/40 pb-1 text-sm text-ink transition-colors hover:border-ink"
          >
            hello@atelierdouglas.fr
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="grain bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 sm:px-6 md:grid-cols-12">
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
                href="#contact"
                className="transition-colors hover:text-terracotta"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#contact"
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
      </div>
    </footer>
  );
}
