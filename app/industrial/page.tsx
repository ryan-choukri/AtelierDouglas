import heroComponent from "@/assets/hero-component.jpg";
import project01 from "@/assets/project-01.jpg";
import project02 from "@/assets/project-02.jpg";
import project03 from "@/assets/project-03.jpg";
import atelier from "@/assets/atelier.jpg";
import Image from "next/image";
import { Nav } from "@/components/nordal/Nav";
import { Reveal } from "@/components/nordal/Reveal";
import { TechnicalDrawing } from "@/components/nordal/TechnicalDrawing";
import { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "NORDAL — Ingénierie & fabrication industrielle",
  description:
    "NORDAL conçoit et fabrique des composants et sous-ensembles mécaniques de précision pour des applications industrielles exigeantes. Usinage, assemblage, prototypage.",
  openGraph: {
    title: "NORDAL — Ingénierie & fabrication industrielle",
    description:
      "NORDAL conçoit et fabrique des composants et sous-ensembles mécaniques de précision pour des applications industrielles exigeantes. Usinage, assemblage, prototypage.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const stats = [
  { value: "25+", label: "Années d'expérience" },
  { value: "120+", label: "Clients industriels" },
  { value: "98%", label: "De commandes livrées dans les délais" },
  { value: "3", label: "Ateliers de production" },
];

const expertise = [
  {
    n: "01",
    title: "Conception",
    text: "Analyse fonctionnelle, choix matière et revue de fabricabilité avant le lancement en production.",
  },
  {
    n: "02",
    title: "Usinage",
    text: "Tournage et fraisage 3 à 5 axes sur aciers, inox, aluminium et alliages techniques.",
  },
  {
    n: "03",
    title: "Prototypage",
    text: "Pièces unitaires et préséries pour valider une géométrie avant l'industrialisation.",
  },
  {
    n: "04",
    title: "Assemblage",
    text: "Montage de sous-ensembles mécaniques, réglages et essais fonctionnels en atelier.",
  },
  {
    n: "05",
    title: "Contrôle",
    text: "Métrologie tridimensionnelle, rapport dimensionnel et traçabilité par lot.",
  },
];

const capability = [
  { k: "Tolérance", v: "±0,01 mm" },
  { k: "Séries", v: "1 → 10 000+" },
  { k: "Matières", v: "Acier · Inox · Aluminium · Titane" },
  { k: "Délais", v: "À partir de 5 jours" },
];

const projects = [
  {
    n: "01",
    img: project01,
    title: "Module hydraulique",
    sector: "Industrie énergétique",
    text: "Bloc foré et taraudé en acier traité, étanchéité contrôlée, série de 40 pièces avec rapport dimensionnel unitaire.",
  },
  {
    n: "02",
    img: project02,
    title: "Boîtier technique",
    sector: "Électronique industrielle",
    text: "Boîtier usiné dans la masse en aluminium, plan de joint rectifié et inserts filetés pour intégration embarquée.",
  },
  {
    n: "03",
    img: project03,
    title: "Sous-ensemble mécanique",
    sector: "Mobilité industrielle",
    text: "Assemblage arbres, paliers et supports usinés, monté et contrôlé en atelier avant expédition.",
  },
];

const reasons = [
  {
    n: "01",
    title: "Réactivité",
    text: "Un interlocuteur technique capable de répondre rapidement.",
  },
  {
    n: "02",
    title: "Précision",
    text: "Des process maîtrisés et un contrôle qualité intégré.",
  },
  {
    n: "03",
    title: "Flexibilité",
    text: "Du prototype à la petite et moyenne série.",
  },
  {
    n: "04",
    title: "Traçabilité",
    text: "Chaque fabrication est suivie et documentée.",
  },
];

export default function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      <main>
        {/* ---------------- HERO ---------------- */}
        <section className="pt-16 md:pt-[72px]">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="grid gap-10 border-b border-border py-12 md:py-16 lg:grid-cols-12 lg:gap-8">
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <p className="label-tech text-muted-foreground">
                    Ingénierie mécanique · Usinage · Assemblage
                  </p>
                  <h1 className="display-tight mt-8 text-[2.6rem] leading-[0.92] sm:text-[3.6rem] md:text-[4.6rem] xl:text-[5.4rem]">
                    Nous fabriquons
                    <br />
                    ce que l&apos;industrie
                    <br />
                    ne peut pas
                    <br />
                    se permettre
                    <br />
                    <span className="text-graphite-soft">
                      d&apos;approximer.
                    </span>
                  </h1>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:items-end">
                  <p className="max-w-md text-[0.98rem] leading-relaxed text-graphite-soft">
                    De la pièce unitaire aux petites séries, NORDAL accompagne
                    les industriels dans la conception et la fabrication de
                    composants mécaniques exigeants.
                  </p>
                  <div className="flex flex-col gap-3 sm:items-start">
                    <a
                      href="#contact"
                      className="label-tech inline-flex items-center justify-between gap-6 bg-graphite px-6 py-4 text-primary-foreground transition-colors duration-300 hover:bg-signal"
                    >
                      Demander un devis <span aria-hidden>→</span>
                    </a>
                    <a
                      href="#expertise"
                      className="label-tech link-underline inline-flex items-center gap-2 px-1 py-2 text-graphite-soft"
                    >
                      Découvrir notre savoir-faire <span aria-hidden>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="grain relative overflow-hidden bg-secondary">
                  <Image
                    src={heroComponent}
                    alt="Composant mécanique de précision usiné, détail macro"
                    width={1280}
                    height={1600}
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="pointer-events-none absolute inset-0">
                    <span className="label-tech absolute top-5 left-5 bg-background/85 px-2 py-1.5">
                      NRD-04127 / A
                    </span>
                    <span className="label-tech absolute right-5 bottom-5 text-right text-primary-foreground">
                      Ø 42 H7
                      <br />
                      <span style={{ color: "var(--signal)" }}>±0,01 mm</span>
                    </span>
                    <svg className="absolute inset-0 h-full w-full" aria-hidden>
                      <line
                        x1="0"
                        y1="18%"
                        x2="100%"
                        y2="18%"
                        stroke="var(--signal)"
                        strokeWidth="1"
                        strokeDasharray="4 6"
                        opacity="0.7"
                      />
                      <line
                        x1="26%"
                        y1="0"
                        x2="26%"
                        y2="100%"
                        stroke="var(--background)"
                        strokeWidth="1"
                        strokeDasharray="4 6"
                        opacity="0.45"
                      />
                    </svg>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- TRUST BAR ---------------- */}
        <section aria-label="Chiffres clés" className="border-b border-border">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal
                  key={s.value}
                  delay={i * 70}
                  className={`border-border py-10 md:py-14 ${i % 2 === 1 ? "border-l pl-6" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""} ${i === 3 ? "lg:border-l lg:pl-6" : ""}`}
                >
                  <dt className="display-tight text-[2.8rem] md:text-[4rem]">
                    {s.value}
                  </dt>
                  <dd className="label-tech mt-4 max-w-[16ch] text-muted-foreground">
                    {s.label}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------------- EXPERTISE ---------------- */}
        <section id="expertise" className="border-b border-border">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="grid gap-10 py-20 md:py-28 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <p className="label-tech text-signal">01 / Expertise</p>
                <h2 className="display-tight mt-6 text-[2.2rem] sm:text-[3rem] xl:text-[3.8rem]">
                  Un savoir-faire
                  <br />
                  qui commence
                  <br />
                  bien avant
                  <br />
                  la machine.
                </h2>
              </Reveal>
              <Reveal delay={120} className="flex items-end lg:col-span-5">
                <p className="max-w-md text-[0.98rem] leading-relaxed text-graphite-soft">
                  Nous intervenons dès les premières étapes du projet pour
                  sécuriser la fabrication, optimiser les choix techniques et
                  garantir une production fiable.
                </p>
              </Reveal>
            </div>

            <ul className="pb-8">
              {expertise.map((e, i) => (
                <Reveal as="li" key={e.n} delay={i * 60}>
                  <a
                    href="#contact"
                    className="group grid grid-cols-12 items-baseline gap-4 border-t border-border py-8 transition-colors duration-500 hover:bg-secondary/60 md:py-10"
                  >
                    <span className="label-tech col-span-2 text-signal md:col-span-1">
                      {e.n}
                    </span>
                    <span className="display-tight col-span-10 text-[1.8rem] transition-transform duration-500 group-hover:translate-x-2 md:col-span-4 md:text-[2.6rem]">
                      {e.title}
                    </span>
                    <span className="col-span-12 text-[0.95rem] leading-relaxed text-graphite-soft md:col-span-5 md:col-start-6">
                      {e.text}
                    </span>
                    <span className="col-span-12 hidden justify-end md:col-span-2 md:flex">
                      <svg
                        width="90"
                        height="28"
                        viewBox="0 0 90 28"
                        aria-hidden
                        className="text-line-strong transition-colors duration-500 group-hover:text-signal"
                      >
                        <line
                          x1="0"
                          y1="14"
                          x2="82"
                          y2="14"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                        <line
                          x1="70"
                          y1="6"
                          x2="82"
                          y2="14"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                        <line
                          x1="70"
                          y1="22"
                          x2="82"
                          y2="14"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                        <line
                          x1="0"
                          y1="6"
                          x2="0"
                          y2="22"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- CAPABILITY (dark) ---------------- */}
        <section
          id="savoir-faire"
          className="grain-dark relative bg-graphite text-primary-foreground"
        >
          <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="label-tech text-signal">
                  02 / Capacité industrielle
                </p>
                <h2 className="display-tight mt-6 text-[2.4rem] sm:text-[3.2rem]">
                  Petites séries.
                  <br />
                  Grande précision.
                </h2>
                <p className="mt-8 max-w-md text-[0.98rem] leading-relaxed opacity-70">
                  Du prototype à la série, nous adaptons nos moyens de
                  production aux contraintes réelles de chaque projet.
                </p>

                <dl className="mt-12">
                  {capability.map((c) => (
                    <div
                      key={c.k}
                      className="flex items-baseline justify-between gap-6 border-t border-white/15 py-5"
                    >
                      <dt className="label-tech opacity-60">{c.k}</dt>
                      <dd className="text-right font-mono text-[1.05rem] tracking-tight md:text-[1.25rem]">
                        {c.v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="label-tech mt-8 opacity-40">
                  Données de démonstration — fichier classifié
                </p>
              </div>

              <div className="text-primary-foreground/85 lg:col-span-7">
                <TechnicalDrawing />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- PROJECTS ---------------- */}
        <section id="realisations" className="border-b border-border">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6 py-20 md:py-28">
              <h2 className="display-tight text-[2.4rem] sm:text-[3.4rem] xl:text-[4.2rem]">
                Quelques
                <br />
                pièces.
              </h2>
              <p className="label-tech max-w-[26ch] text-muted-foreground">
                Réalisations fictives créées pour ce concept de site
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-16 pb-24 md:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.n} delay={i * 90} className="group">
                  <div className="grain relative overflow-hidden bg-secondary">
                    <Image
                      src={p.img}
                      alt={`${p.title} — ${p.sector}`}
                      loading="lazy"
                      width={1200}
                      height={1504}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                    <span className="label-tech absolute top-4 left-4 bg-background/85 px-2 py-1.5">
                      Projet {p.n}
                    </span>
                  </div>
                  <div className="mt-6 border-t border-border pt-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="display-tight text-[1.5rem]">{p.title}</h3>
                      <span className="label-tech text-signal">{p.n}</span>
                    </div>
                    <p className="label-tech mt-3 text-muted-foreground">
                      {p.sector}
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-graphite-soft">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- WHY NORDAL ---------------- */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="grid gap-10 py-20 md:py-28 lg:grid-cols-12">
              <Reveal className="lg:col-span-6">
                <p className="label-tech text-signal">03 / Pourquoi Nordal</p>
                <h2 className="display-tight mt-6 text-[2.2rem] sm:text-[3rem] xl:text-[3.6rem]">
                  Un fournisseur
                  <br />
                  qui comprend
                  <br />
                  les contraintes
                  <br />
                  de l&apos;industrie.
                </h2>
              </Reveal>

              <div className="lg:col-span-6 lg:pt-4">
                {reasons.map((r, i) => (
                  <Reveal key={r.n} delay={i * 70}>
                    <div className="grid grid-cols-12 gap-4 border-t border-border py-7">
                      <span className="label-tech col-span-2 text-muted-foreground">
                        {r.n}
                      </span>
                      <div className="col-span-10">
                        <h3 className="display-tight text-[1.35rem]">
                          {r.title}
                        </h3>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-graphite-soft">
                          {r.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section id="a-propos" className="border-b border-border">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <p className="label-tech text-signal">04 / À propos</p>
                <h2 className="display-tight mt-6 text-[1.9rem] sm:text-[2.6rem]">
                  Une PME industrielle.
                  <br />
                  Une exigence de
                  <br />
                  grande entreprise.
                </h2>
                <p className="mt-8 max-w-md text-[0.98rem] leading-relaxed text-graphite-soft">
                  NORDAL est une entreprise industrielle indépendante qui
                  accompagne depuis plus de 25 ans des acteurs exigeants dans la
                  conception et la fabrication de composants mécaniques.
                </p>
                <p className="label-tech mt-10 text-muted-foreground">
                  Concept de démonstration — Atelier Douglas
                </p>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-7">
                <figure className="grain relative overflow-hidden">
                  <Image
                    src={atelier}
                    alt="Atelier d'usinage NORDAL, machines-outils à commande numérique"
                    loading="lazy"
                    width={1600}
                    height={1008}
                    className="w-full object-cover"
                  />
                  <figcaption className="label-tech absolute bottom-4 left-4 bg-background/85 px-2 py-1.5">
                    Atelier 02 · Tournage-fraisage
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section
          id="contact"
          className="grain-dark relative bg-graphite text-primary-foreground"
        >
          <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="display-tight text-[2.6rem] sm:text-[4rem] xl:text-[5rem]">
                  Votre projet
                  <br />
                  commence
                  <br />
                  <span style={{ color: "var(--signal)" }}>par un plan.</span>
                </h2>
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="text-[0.98rem] leading-relaxed opacity-70">
                  Parlez-nous de votre besoin.
                  <br />
                  Notre équipe vous répond sous 24h.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:contact@nordal-industrie.fr"
                    className="label-tech inline-flex items-center gap-6 bg-signal px-6 py-4 text-primary-foreground transition-opacity duration-300 hover:opacity-85"
                  >
                    Demander un devis <span aria-hidden>→</span>
                  </a>
                  <a
                    href="mailto:contact@nordal-industrie.fr"
                    className="label-tech inline-flex items-center border border-white/25 px-6 py-4 transition-colors duration-300 hover:bg-white/10"
                  >
                    Nous contacter
                  </a>
                </div>
                <div className="mt-10 space-y-2 border-t border-white/15 pt-6 font-mono text-[0.95rem]">
                  <p>contact@nordal-industrie.fr</p>
                  <p className="opacity-70">+33 (0)4 00 00 00 00</p>
                </div>
                <p className="label-tech mt-6 opacity-40">
                  Coordonnées fictives
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-10 py-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="display-tight text-[1.5rem]">Nordal</p>
              <p className="label-tech mt-3 text-muted-foreground">
                Ingénierie & fabrication industrielle
              </p>
            </div>
            <nav className="md:col-span-4" aria-label="Pied de page">
              <ul className="space-y-2">
                {[
                  "Expertise",
                  "Savoir-faire",
                  "Réalisations",
                  "À propos",
                  "Contact",
                ].map((l, i) => (
                  <li key={l}>
                    <a
                      href={
                        [
                          "#expertise",
                          "#savoir-faire",
                          "#realisations",
                          "#a-propos",
                          "#contact",
                        ][i]
                      }
                      className="label-tech link-underline text-graphite-soft transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:col-span-3">
              <p className="label-tech text-muted-foreground">
                Concept fictif réalisé par
                <br />
                Atelier Douglas
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-6">
            <p className="label-tech text-muted-foreground">
              © 2026 Nordal — Démonstration
            </p>
            <div className="flex gap-6">
              <a
                href="#top"
                className="label-tech link-underline text-muted-foreground"
              >
                Mentions légales
              </a>
              <a
                href="#top"
                className="label-tech link-underline text-muted-foreground"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
