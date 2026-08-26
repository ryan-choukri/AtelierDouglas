import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import heroComponent from "@/assets/tool-vis.png";
import toolMultiple from "@/assets/tool-multiple.png";

import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Flame,
  Layers,
  Ruler,
  Scissors,
  Wrench,
} from "lucide-react";

import Navbar from "@/components/chaudronerie/Navbar";
import SurfaceBlueprint from "@/components/chaudronerie/SurfaceBlueprint";
import { SECTEURS } from "@/components/chaudronerie/data";
import Footer from "@/components/chaudronerie/Footer";
import heroWelder from "@/assets/hero-welder.jpg";
import atelier from "@/assets/atelier2.jpg";
import realStructures from "@/assets/real-structures.jpg";
import realChassis from "@/assets/real-chassis.jpg";
import realCuves from "@/assets/real-cuves.jpg";
import realPieces from "@/assets/real-pieces.jpg";
import realEquipements from "@/assets/real-equipements.jpg";
import realSurMesure from "@/assets/real-surmesure.jpg";
import secteurIndustrie from "@/assets/secteur-industrie.jpg";
import secteurAgroalimentaire from "@/assets/secteur-agroalimentaire.jpg";
import secteurEnergie from "@/assets/secteur-energie.jpg";
import secteurChimie from "@/assets/secteur-chimie.jpg";
import secteurPharmaceutique from "@/assets/secteur-pharmaceutique.jpg";
import secteurEnvironnement from "@/assets/secteur-environnement.jpg";
import secteurBtp from "@/assets/secteur-btp.jpg";
import secteurTransport from "@/assets/secteur-transport.jpg";
import secteurAgriculture from "@/assets/secteur-agriculture.jpg";
import secteurEquipements from "@/assets/secteur-equipements.jpg";
import "./style.css";

const SECTEUR_IMAGES: Record<string, StaticImageData> = {
  Industrie: secteurIndustrie,
  Agroalimentaire: secteurAgroalimentaire,
  Énergie: secteurEnergie,
  Chimie: secteurChimie,
  Pharmaceutique: secteurPharmaceutique,
  Environnement: secteurEnvironnement,
  "BTP & construction": secteurBtp,
  "Transport & ferroviaire": secteurTransport,
  Agriculture: secteurAgriculture,
  "Équipements industriels": secteurEquipements,
};

export const metadata: Metadata = {
  title: "Chaudronnerie industrielle & mécano-soudure | Metalforge",
  description:
    "Conception, fabrication et assemblage de solutions métalliques sur mesure : chaudronnerie industrielle, mécano-soudure, découpe, pliage et maintenance.",
  openGraph: {
    title: "Chaudronnerie industrielle & mécano-soudure | Metalforge",
    description:
      "Conception, fabrication et assemblage de solutions métalliques sur mesure : chaudronnerie industrielle, mécano-soudure, découpe, pliage et maintenance.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const EXPERTISE_CARDS = [
  {
    icon: Flame,
    title: "Chaudronnerie industrielle",
    text: "Mise en forme et assemblage de tôles et profilés pour des ensembles métalliques techniques.",
  },
  {
    icon: Layers,
    title: "Mécano-soudure",
    text: "Réalisation d'ensembles soudés complexes, du châssis à la structure de grande dimension.",
  },
  {
    icon: Scissors,
    title: "Découpe & pliage",
    text: "Préparation et formage des pièces dans le respect des tolérances définies au plan.",
  },
  {
    icon: Boxes,
    title: "Assemblage",
    text: "Montage, ajustage et intégration des sous-ensembles jusqu'à l'équipement complet.",
  },
  {
    icon: Ruler,
    title: "Fabrication sur mesure",
    text: "Étude et fabrication à l'unité ou en petite série, à partir de votre cahier des charges.",
  },
  {
    icon: Wrench,
    title: "Maintenance & réparation",
    text: "Remise en état, modification et renforcement de pièces et équipements existants.",
  },
];

const MOYENS = [
  "Atelier de fabrication",
  "Soudage",
  "Découpe",
  "Pliage",
  "Assemblage",
  "Levage",
  "Contrôle qualité",
];

const REALISATIONS = [
  { title: "Structures métalliques", img: realStructures },
  { title: "Châssis", img: realChassis },
  { title: "Cuves & réservoirs", img: realCuves },
  { title: "Pièces mécano-soudées", img: realPieces },
  { title: "Équipements industriels", img: realEquipements },
  { title: "Fabrication sur mesure", img: realSurMesure },
];

const PROCESS = [
  {
    n: "01",
    t: "Étude",
    d: "Analyse du besoin, des plans et des contraintes d'intégration.",
  },
  {
    n: "02",
    t: "Conception",
    d: "Définition technique, choix des matériaux et des assemblages.",
  },
  {
    n: "03",
    t: "Fabrication",
    d: "Découpe, formage, soudage et assemblage en atelier.",
  },
  {
    n: "04",
    t: "Contrôle",
    d: "Vérification dimensionnelle et contrôle des soudures.",
  },
  {
    n: "05",
    t: "Livraison",
    d: "Conditionnement, expédition et accompagnement au montage.",
  },
];

function Index() {
  return (
    <div id="top" className="bg-background">
      <Navbar />
      <main className="pt-[74px]">
        {/* HERO */}
        <SurfaceBlueprint className="border-b border-border">
          <div className="mx-auto grid max-w-[1320px] items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div className=" absolute -top-20 left-30 ">
              <Image
                src={heroComponent}
                alt="Composant mécanique de précision usiné, détail macro"
                // width={1280}
                // height={1600}
                className="scale-60 object-cover"
              />
            </div>
            <div className="reveal">
              <p className="label-tech text-accent-chaud">
                Chaudronnerie · Mécano-soudure · France
              </p>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[0.94] uppercase text-navy">
                Chaudronnerie
                <br />
                industrielle
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foregroundalt">
                Conception, fabrication et assemblage de solutions métalliques
                sur mesure.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#devis"
                  className="label-tech inline-flex items-center gap-2 bg-navy px-7 py-4 text-primary-foregroundalt transition-colors hover:bg-accent bg-navy"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#expertises"
                  className="label-tech inline-flex items-center border border-navy/25 px-7 py-4 text-navy transition-colors hover:border-navy hover:bg-white"
                >
                  Découvrir nos expertises
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l-2 border-t-2 border-accent lg:block" />
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={heroWelder}
                  alt="Soudeur assemblant une pièce métallique en atelier de chaudronnerie"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="border-t border-border/70">
            <div className="mx-auto grid max-w-[1320px] divide-y divide-border px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
              {["Sur mesure", "Mécano-soudure", "Fabrication industrielle"].map(
                (item) => (
                  <p
                    key={item}
                    className="label-tech py-6 text-navy md:px-8 md:first:pl-0"
                  >
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>
        </SurfaceBlueprint>

        {/* EXPERTISES */}
        <section id="expertises" className="surface-light py-24 lg:py-32">
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="absolute -top-20 right-30 ">
              <Image
                src={toolMultiple}
                alt="Composant mécanique de précision usiné, détail macro"
                // width={1280}
                // height={1600}
                className="scale-60 object-cover"
              />
            </div>
            <div className="max-w-2xl rule-accent">
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold uppercase leading-tight text-navy">
                Notre savoir-faire
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foregroundalt">
                De l&apos;étude à la livraison, nous maîtrisons l&apos;ensemble
                des étapes de la transformation du métal pour répondre aux
                exigences des projets industriels.
              </p>
            </div>

            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {EXPERTISE_CARDS.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group bg-cardalt p-8 transition-colors hover:bg-blueprint lg:p-10"
                >
                  <Icon
                    className="h-6 w-6 text-accent-chaud"
                    strokeWidth={1.4}
                  />
                  <h3 className="mt-8 font-display text-lg font-bold uppercase tracking-wide text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foregroundalt">
                    {text}
                  </p>
                  <span className="mt-8 block h-px w-10 bg-accent transition-all duration-300 group-hover:w-20" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTEURS */}
        <section
          id="secteurs"
          className="surface-navy py-24 text-primary-foregroundalt lg:py-32"
        >
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold uppercase leading-tight">
                Des solutions pour l&apos;industrie
              </h2>
              <p className="text-base leading-relaxed text-primary-foregroundalt/60">
                Chaque filière impose ses propres contraintes : matériaux,
                environnement de travail, exigences d&apos;hygiène ou de
                résistance mécanique. Nos fabrications sont définies et
                réalisées en fonction de ces contraintes spécifiques.
              </p>
            </div>

            <div className="mt-16 grid gap-px border border-primary-foregroundalt/12 bg-primary-foregroundalt/12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {SECTEURS.map((secteur, i) => (
                <figure
                  key={secteur}
                  className="group relative aspect-[4/5] overflow-hidden bg-navy"
                >
                  <Image
                    src={SECTEUR_IMAGES[secteur]}
                    alt={secteur}
                    fill
                    loading="lazy"
                    className="absolute inset-0 object-cover opacity-55 transition-all duration-700 group-hover:scale-[1.06] group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/15" />
                  <figcaption className="relative flex h-full flex-col justify-between p-6">
                    <span className="label-tech text-primary-foregroundalt/45">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-semibold leading-tight tracking-wide">
                      {secteur}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* MOYENS INDUSTRIELS */}
        <section id="moyens" className="surface-light py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1320px] items-center gap-16 px-6 lg:grid-cols-2">
            <Image
              src={atelier}
              alt="Atelier de fabrication métallique avec postes de soudage et structures acier"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div>
              <div className="rule-accent">
                <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold uppercase leading-tight text-navy">
                  Des moyens à la hauteur de vos projets
                </h2>
              </div>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foregroundalt">
                Notre atelier réunit les postes nécessaires à la réalisation
                complète de vos ensembles métalliques, de la préparation matière
                au contrôle final.
              </p>
              <ul className="mt-10 border-t border-border">
                {MOYENS.map((m, i) => (
                  <li
                    key={m}
                    className="flex items-baseline gap-6 border-b border-border py-4 text-navy"
                  >
                    <span className="label-tech text-accent-chaud">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-semibold tracking-wide">
                      {m}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* REALISATIONS */}
        <SurfaceBlueprint id="realisations" className="py-24 lg:py-32">
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="max-w-2xl rule-accent">
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold uppercase leading-tight text-navy">
                Réalisations
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foregroundalt">
                Un aperçu des typologies de pièces et d&apos;ensembles que nous
                fabriquons pour nos clients industriels.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REALISATIONS.map(({ title, img }) => (
                <figure key={title} className="group bg-cardalt">
                  <div className="overflow-hidden">
                    <Image
                      src={img}
                      alt={title}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between border-x border-b border-border px-5 py-4">
                    <span className="font-display text-sm font-semibold uppercase tracking-wide text-navy">
                      {title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-accent-chaud opacity-0 transition-opacity group-hover:opacity-100" />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </SurfaceBlueprint>

        {/* PROCESSUS */}
        <section className="surface-light py-24 lg:py-32">
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="max-w-2xl rule-accent">
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold uppercase leading-tight text-navy">
                Notre processus
              </h2>
            </div>

            <ol className="mt-14 grid border-t border-border lg:grid-cols-5">
              {PROCESS.map((step) => (
                <li
                  key={step.n}
                  className="group relative border-b border-border px-0 py-8 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"
                >
                  <span className="absolute -top-px left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full lg:left-0" />
                  <span className="font-display text-3xl font-bold text-accent-chaud">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-navy">
                    {step.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foregroundalt">
                    {step.d}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ENTREPRISE */}
        <SurfaceBlueprint
          id="entreprise"
          className="border-y border-border py-24 lg:py-32"
        >
          <div className="mx-auto grid max-w-[1320px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rule-accent">
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold uppercase leading-tight text-navy">
                Un savoir-faire industriel
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foregroundalt">
              <p>
                Notre entreprise accompagne les industriels dans la conception
                et la fabrication d&apos;ensembles métalliques adaptés à leurs
                process. Chaque projet est traité comme une pièce technique :
                compréhension du besoin, dialogue avec les équipes de
                maintenance ou de bureau d&apos;études, puis fabrication en
                atelier.
              </p>
              <p>
                Notre approche repose sur la maîtrise du métier de chaudronnier
                et sur la rigueur d&apos;exécution. Nous privilégions les
                relations de travail durables, la transparence sur les délais et
                la qualité constante des assemblages soudés.
              </p>
              <dl className="grid gap-px border border-border bg-border sm:grid-cols-3">
                {[
                  ["Exigence", "Contrôle à chaque étape de fabrication."],
                  ["Réactivité", "Un interlocuteur unique pour votre projet."],
                  ["Proximité", "Un accompagnement technique de bout en bout."],
                ].map(([t, d]) => (
                  <div key={t} className="bg-cardalt p-6">
                    <dt className="label-tech text-accent-chaud">{t}</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-muted-foregroundalt">
                      {d}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </SurfaceBlueprint>

        {/* ACTUALITES */}
        <section id="actualites" className="surface-light py-24 lg:py-32">
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="max-w-2xl rule-accent">
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold uppercase leading-tight text-navy">
                Actualités
              </h2>
            </div>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              {[
                [
                  "Atelier",
                  "Organisation de l'atelier et postes de fabrication",
                ],
                [
                  "Métier",
                  "Chaudronnerie : de la lecture de plan à l'ensemble soudé",
                ],
                [
                  "Projets",
                  "Fabrication sur mesure : les étapes d'un projet industriel",
                ],
              ].map(([tag, title]) => (
                <article key={title} className="bg-cardalt p-8">
                  <p className="label-tech text-accent-chaud">{tag}</p>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug tracking-wide text-navy">
                    {title}
                  </h3>
                  <a
                    href="#actualites"
                    className="label-tech mt-8 inline-flex items-center gap-2 text-navy transition-colors hover:text-accent-chaud"
                  >
                    Lire l&apos;article <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="devis"
          className="surface-navy-deep py-24 text-primary-foregroundalt lg:py-32"
        >
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <ClipboardCheck
                  className="h-7 w-7 text-accent-chaud"
                  strokeWidth={1.4}
                />
                <h2 className="mt-8 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold uppercase leading-[1.02]">
                  Un projet industriel ?
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foregroundalt/60">
                  Échangeons sur votre besoin et construisons ensemble la
                  solution adaptée.
                </p>
              </div>
              <div className="lg:text-right">
                <a
                  href="mailto:contact@metalforge.fr"
                  className="label-tech inline-flex items-center gap-2 bg-accent px-8 py-5 text-accent-chaud-foregroundalt transition-colors hover:bg-primary-foregroundalt hover:text-navy"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default Index;
