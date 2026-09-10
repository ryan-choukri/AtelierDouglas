"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Leaf,
  MapPin,
  Menu,
  MoveHorizontal,
  MoveVertical,
  Paintbrush,
  Palette,
  Phone,
  Ruler,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import styles from "./pergolas.module.css";

const navLinks = [
  ["Clôtures", "#solutions"],
  ["Portails", "#solutions"],
  ["Pergolas", "#solutions"],
  ["Réalisations", "#realisations"],
  ["L’entreprise", "#entreprise"],
] as const;

const trustItems = [
  { icon: Ruler, strong: "+ 1 200", label: "projets réalisés" },
  { icon: Users, strong: "98 %", label: "clients satisfaits" },
  { icon: ShieldCheck, strong: "Garantie", label: "décennale" },
  { icon: MapPin, strong: "Intervention", label: "régionale" },
  { icon: Leaf, strong: "Matériaux", label: "premium" },
] as const;

const gateOpenings = {
  battant: {
    label: "Battant",
    image: "/pergolas/gate-battant.webp",
    alt: "Portail battant en aluminium anthracite à deux vantaux entre des piliers en pierre",
    note: "Deux vantaux pour une ouverture classique, équilibrée et élégante.",
  },
  coulissant: {
    label: "Coulissant",
    image: "/pergolas/gate.webp",
    alt: "Portail coulissant en aluminium anthracite sur son rail entre des piliers en pierre",
    note: "Un vantail latéral pour libérer le recul et optimiser les entrées contraintes.",
  },
} as const;

type GateOpening = keyof typeof gateOpenings;

const gateSpecs = [
  { icon: MoveHorizontal, label: "Largeur", value: "jusqu’à 5 m sur mesure" },
  { icon: MoveVertical, label: "Hauteur", value: "1 m à 2 m" },
  { icon: Paintbrush, label: "Finition", value: "aluminium thermolaqué" },
  { icon: Palette, label: "Couleurs", value: "plus de 200 teintes RAL" },
  { icon: Zap, label: "Motorisation", value: "Somfy, Nice ou équivalent" },
] as const;

const projects = [
  {
    title: "Portail coulissant",
    location: "Saint-Cyr-en-Val",
    specification: "4,20 m · RAL 7016 · Motorisation",
    image: "/pergolas/gate.webp",
    alt: "Portail coulissant anthracite installé entre deux piliers en pierre à Saint-Cyr-en-Val",
  },
  {
    title: "Pergola bioclimatique",
    location: "Olivet",
    specification: "4 × 3,5 m · Lames orientables · LED",
    image: "/pergolas/pergola.webp",
    alt: "Pergola bioclimatique anthracite avec lames orientables et éclairage à Olivet",
  },
  {
    title: "Clôture aluminium",
    location: "Orléans",
    specification: "25 ml · RAL 7016",
    image: "/pergolas/realisation-cloture-aluminium.webp",
    alt: "Longue clôture en aluminium anthracite installée dans un jardin à Orléans",
  },
  {
    title: "Portail battant",
    location: "Fleury-les-Aubrais",
    specification: "3,50 m · Décor laser · Motorisation",
    image: "/pergolas/realisation-portail-laser.webp",
    alt: "Portail battant anthracite avec décor laser végétal à Fleury-les-Aubrais",
  },
  {
    title: "Carport aluminium",
    location: "Ingré",
    specification: "2 places · Toiture plate",
    image: "/pergolas/carport.webp",
    alt: "Carport double en aluminium anthracite à toiture plate installé à Ingré",
  },
  {
    title: "Clôture composite",
    location: "Saint-Jean-de-Braye",
    specification: "30 ml · Aspect bois",
    image: "/pergolas/realisation-cloture-composite.webp",
    alt: "Clôture composite aspect bois avec poteaux anthracite à Saint-Jean-de-Braye",
  },
] as const;

function Brand() {
  return (
    <span className={styles.brandInner}>
      <span className={styles.brandMark} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className={styles.brandName}>
        <strong>Altaïr</strong>
        <small>Extérieurs</small>
      </span>
    </span>
  );
}

export function PergolasExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [reveal, setReveal] = useState(54);
  const [gateOpening, setGateOpening] = useState<GateOpening>("battant");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setActiveProject(null);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (activeProject === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  const beforeAfterStyle = { "--reveal": `${reveal}%` } as CSSProperties;
  const selectedGate = gateOpenings[gateOpening];
  const activeProjectData =
    activeProject === null ? null : projects[activeProject];

  return (
    <main className={styles.page}>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      >
        <a
          className={styles.brand}
          href="#accueil"
          aria-label="Altaïr Extérieurs, accueil"
          onClick={() => setMenuOpen(false)}
        >
          <Brand />
        </a>

        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <a className={styles.phoneLink} href="tel:+33238000000">
            Nous appeler
          </a>
          <a className={styles.primaryButton} href="#contact">
            Obtenir mon devis <ArrowRight aria-hidden="true" />
          </a>
          <button
            className={styles.menuButton}
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="pergolas-mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
          id="pergolas-mobile-menu"
        >
          <nav aria-label="Navigation mobile">
            {navLinks.map(([label, href], index) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>
                {label}
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className={styles.mobileMenuActions}>
            <a href="tel:+33238000000">
              <Phone aria-hidden="true" /> 02 38 00 00 00
            </a>
            <a
              className={styles.primaryButton}
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Obtenir mon devis <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section className={styles.hero} id="accueil">
        <Image
          className={styles.heroImage}
          src="/pergolas/hero.webp"
          alt="Maison contemporaine avec portail en aluminium anthracite et pergola, dans une lumière de fin de journée"
          fill
          sizes="100vw"
          preload
        />
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Clôtures · Portails · Pergolas</p>
          <h1>
            Des extérieurs
            <br />
            plus beaux pour
            <br />
            demain.
          </h1>
          <p className={styles.heroText}>
            Des solutions sur mesure, durables et élégantes, pensées pour
            valoriser votre maison et votre quotidien.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contact">
              Obtenir mon devis <ArrowRight aria-hidden="true" />
            </a>
            <a className={styles.secondaryButton} href="#realisations">
              Voir nos réalisations <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className={styles.heroNote}>
          Durable. <br /> Esthétique. <br /> À votre image.
        </p>
        <p className={styles.conceptLabel}>
          Concept de site vitrine &amp; direction artistique
        </p>
      </section>

      <section className={styles.trustBar} aria-label="Nos engagements">
        {trustItems.map(({ icon: Icon, strong, label }) => (
          <div key={label}>
            <Icon aria-hidden="true" />
            <span>
              <strong>{strong}</strong>
              <small>{label}</small>
            </span>
          </div>
        ))}
      </section>

      <section
        className={styles.projectNav}
        aria-labelledby="project-nav-title"
      >
        <div className={styles.projectHeading}>
          <span className={styles.projectIndex}>01</span>
          <div>
            <p className={styles.kicker}>Nos univers</p>
            <h2 id="project-nav-title">Quel est votre projet&nbsp;?</h2>
          </div>
          <p className={styles.projectIntro}>
            Découvrez nos solutions et trouvez l’aménagement extérieur qui
            correspond à votre maison.
          </p>
        </div>

        <nav
          className={styles.projectMosaic}
          aria-label="Nos catégories de produits"
        >
          <a
            className={`${styles.projectEntry} ${styles.projectPortails}`}
            href="#contact"
            aria-label="Découvrir nos portails"
          >
            <Image
              src="/pergolas/gate.webp"
              alt="Portail battant en aluminium anthracite entre des piliers en pierre"
              fill
              sizes="(max-width: 760px) 100vw, 58vw"
            />
            <span className={styles.projectShade} aria-hidden="true" />
            <span className={styles.projectCaption}>
              <small>01</small>
              <span>
                <strong>Portails</strong>
                <span>
                  Battants, coulissants, motorisés, aluminium sur mesure.
                </span>
              </span>
              <ArrowRight aria-hidden="true" />
            </span>
          </a>

          <a
            className={`${styles.projectEntry} ${styles.projectClotures}`}
            href="#contact"
            aria-label="Découvrir nos clôtures"
          >
            <Image
              src="/pergolas/fence.webp"
              alt="Clôture contemporaine en aluminium anthracite dans un jardin paysager"
              fill
              sizes="(max-width: 760px) 100vw, 40vw"
            />
            <span className={styles.projectShade} aria-hidden="true" />
            <span className={styles.projectCaption}>
              <small>02</small>
              <span>
                <strong>Clôtures</strong>
                <span>
                  Aluminium, composite, panneaux et portillons assortis.
                </span>
              </span>
              <ArrowRight aria-hidden="true" />
            </span>
          </a>

          <a
            className={`${styles.projectEntry} ${styles.projectPergolas}`}
            href="#contact"
            aria-label="Découvrir nos pergolas"
          >
            <Image
              src="/pergolas/pergola.webp"
              alt="Pergola bioclimatique anthracite aménagée en salon extérieur"
              fill
              sizes="(max-width: 760px) 100vw, 40vw"
            />
            <span className={styles.projectShade} aria-hidden="true" />
            <span className={styles.projectCaption}>
              <small>03</small>
              <span>
                <strong>Pergolas</strong>
                <span>
                  Bioclimatiques, lames orientables, stores et éclairage.
                </span>
              </span>
              <ArrowRight aria-hidden="true" />
            </span>
          </a>

          <a
            className={`${styles.projectEntry} ${styles.projectCarports}`}
            href="#contact"
            aria-label="Découvrir nos carports"
          >
            <Image
              src="/pergolas/carport.webp"
              alt="Carport double en aluminium anthracite devant une maison contemporaine"
              fill
              sizes="(max-width: 760px) 100vw, 58vw"
            />
            <span className={styles.projectShade} aria-hidden="true" />
            <span className={styles.projectCaption}>
              <small>04</small>
              <span>
                <strong>Carports</strong>
                <span>Protection automobile sur mesure, simple ou double.</span>
              </span>
              <ArrowRight aria-hidden="true" />
            </span>
          </a>
        </nav>
      </section>

      <section
        className={styles.gateProduct}
        id="solutions"
        aria-labelledby="gate-product-title"
      >
        <div className={styles.gateProductIntro}>
          <p className={styles.kicker}>Portails — 02</p>
          <h2 id="gate-product-title">Portail aluminium</h2>
          <p className={styles.gateSubtitle}>
            Choisissez l’ouverture adaptée à votre entrée.
          </p>

          <div
            className={styles.gateSelector}
            role="tablist"
            aria-label="Type d’ouverture du portail"
          >
            {(Object.keys(gateOpenings) as GateOpening[]).map((opening) => (
              <button
                className={`${styles.gateTab} ${gateOpening === opening ? styles.gateTabActive : ""}`}
                id={`gate-tab-${opening}`}
                key={opening}
                type="button"
                role="tab"
                aria-controls="gate-product-visual"
                aria-selected={gateOpening === opening}
                onClick={() => setGateOpening(opening)}
              >
                {gateOpenings[opening].label}
              </button>
            ))}
          </div>

          <p className={styles.gateOpeningNote} aria-live="polite">
            {selectedGate.note}
          </p>

          <div className={styles.gateConfigurations}>
            <p>Configurations disponibles</p>
            <ul>
              <li>
                <span>01</span>Plein
              </li>
              <li>
                <span>02</span>Ajouré
              </li>
              <li>
                <span>03</span>Semi-ajouré
              </li>
              <li>
                <span>04</span>Décor laser
              </li>
            </ul>
          </div>
        </div>

        <div
          className={styles.gateVisual}
          id="gate-product-visual"
          role="tabpanel"
          aria-labelledby={`gate-tab-${gateOpening}`}
        >
          <Image
            className={styles.gateVisualImage}
            key={gateOpening}
            src={selectedGate.image}
            alt={selectedGate.alt}
            fill
            sizes="(max-width: 760px) 100vw, (max-width: 1040px) 90vw, 48vw"
          />
          <div className={styles.gateVisualLabel}>
            <span>Ouverture sélectionnée</span>
            <strong>{selectedGate.label}</strong>
          </div>
        </div>

        <aside
          className={styles.gateDetails}
          aria-label="Caractéristiques du portail aluminium"
        >
          <p className={styles.gateDetailsTitle}>Caractéristiques</p>
          <dl className={styles.gateSpecs}>
            {gateSpecs.map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <Icon aria-hidden="true" />
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <a className={styles.gateCta} href="#contact">
            Demander un devis pour mon portail
            <ArrowRight aria-hidden="true" />
          </a>
        </aside>
      </section>

      <section
        className={styles.realisations}
        id="realisations"
        aria-labelledby="realisations-title"
      >
        <div className={styles.projectsHeading}>
          <div>
            <p className={styles.projectsKicker}>
              <span>Réalisations</span>
              <i aria-hidden="true" />
            </p>
            <h2 id="realisations-title">Nos dernières réalisations</h2>
            <p className={styles.projectsSubtitle}>
              Des projets réalisés près de chez vous.
            </p>
          </div>
          <Link className={styles.projectsAllLink} href="/realisations">
            Voir toutes nos réalisations <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article
              className={styles.projectWork}
              key={`${project.title}-${project.location}`}
            >
              <button
                className={styles.projectWorkButton}
                type="button"
                aria-label={`Voir le chantier ${project.title} à ${project.location}`}
                onClick={() => setActiveProject(index)}
              >
                <span className={styles.projectWorkImage}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 760px) 88vw, (max-width: 1040px) 50vw, 33vw"
                  />
                </span>
                <span className={styles.projectWorkCaption}>
                  <span>
                    <strong>{project.title}</strong>
                    <span>{project.location}</span>
                    <small>{project.specification}</small>
                  </span>
                  <span className={styles.projectWorkArrow} aria-hidden="true">
                    <ArrowRight />
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {activeProjectData && (
        <div
          className={styles.projectModal}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <div
            className={styles.projectModalDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              className={styles.projectModalClose}
              type="button"
              aria-label="Fermer la réalisation"
              autoFocus
              onClick={() => setActiveProject(null)}
            >
              <X aria-hidden="true" />
            </button>
            <div className={styles.projectModalImage}>
              <Image
                src={activeProjectData.image}
                alt={activeProjectData.alt}
                fill
                sizes="(max-width: 760px) 100vw, 68vw"
              />
            </div>
            <div className={styles.projectModalDetails}>
              <p>
                Réalisation {String((activeProject ?? 0) + 1).padStart(2, "0")}
              </p>
              <h3 id="project-modal-title">{activeProjectData.title}</h3>
              <span>
                <MapPin aria-hidden="true" />
                {activeProjectData.location}
              </span>
              <ul>
                {activeProjectData.specification.split(" · ").map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <section
        className={styles.beforeAfterSection}
        aria-labelledby="before-after-title"
      >
        <div className={styles.beforeAfterCopy}>
          <p className={styles.kicker}>Avant / Après — 04</p>
          <h2 id="before-after-title">
            Des transformations qui parlent d’elles-mêmes.
          </h2>
          <p>
            Faites glisser le curseur pour voir une entrée datée devenir un
            portail contemporain, durable et parfaitement intégré à la maison.
          </p>
          <div className={styles.beforeAfterLegend}>
            <span>
              <i className={styles.beforeSwatch} /> Avant
            </span>
            <span>
              <i className={styles.afterSwatch} /> Après
            </span>
          </div>
        </div>

        <div className={styles.comparison} style={beforeAfterStyle}>
          <Image
            className={styles.afterImage}
            src="/pergolas/gate-after.webp"
            alt="Après : portail coulissant contemporain en aluminium anthracite"
            fill
            sizes="(max-width: 900px) 100vw, 66vw"
          />
          <div className={styles.beforeLayer}>
            <Image
              className={styles.beforeImage}
              src="/pergolas/gate-before.webp"
              alt="Avant : ancien portail battant en métal brun et entrée à rénover"
              fill
              sizes="(max-width: 900px) 100vw, 66vw"
            />
          </div>
          <span className={`${styles.compareLabel} ${styles.labelBefore}`}>
            Avant
          </span>
          <span className={`${styles.compareLabel} ${styles.labelAfter}`}>
            Après
          </span>
          <div className={styles.compareHandle} aria-hidden="true">
            <span>←</span>
            <span>→</span>
          </div>
          <label className={styles.rangeLabel} htmlFor="before-after-range">
            Comparer l’image avant et après
          </label>
          <input
            id="before-after-range"
            className={styles.comparisonRange}
            type="range"
            min="0"
            max="100"
            value={reveal}
            onChange={(event) => setReveal(Number(event.target.value))}
            aria-valuetext={`${reveal} % de l’image avant visible`}
          />
        </div>
      </section>

      <section
        className={styles.craft}
        id="entreprise"
        aria-labelledby="craft-title"
      >
        <div className={styles.craftImage}>
          <Image
            src="/pergolas/artisan.webp"
            alt="Artisan ajustant avec précision un ouvrage en aluminium"
            fill
            sizes="(max-width: 850px) 100vw, 51vw"
          />
          <div className={styles.craftStamp}>
            <Award aria-hidden="true" />
            <span>Depuis</span>
            <strong>1998</strong>
          </div>
        </div>
        <div className={styles.craftContent}>
          <p className={styles.kicker}>Notre engagement — 05</p>
          <h2 id="craft-title">
            Un savoir-faire familial, <em>depuis 1998.</em>
          </h2>
          <p className={styles.craftLead}>
            Une équipe à taille humaine, des matériaux sélectionnés avec
            exigence, une pose soignée et un accompagnement de proximité.
          </p>
          <ul className={styles.craftList}>
            <li>
              <span>01</span> Fabrication française
            </li>
            <li>
              <span>02</span> Pose par nos équipes
            </li>
            <li>
              <span>03</span> Conception sur mesure
            </li>
            <li>
              <span>04</span> Garantie décennale
            </li>
          </ul>
          <a className={styles.textLink} href="#contact">
            Rencontrer notre équipe <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className={styles.materials} aria-labelledby="materials-title">
        <div className={styles.materialsTitle}>
          <p className={styles.kicker}>Matières — 06</p>
          <h2 id="materials-title">La matière fait la différence.</h2>
          <p>
            Des textures choisies pour leur beauté, leur justesse et leur
            capacité à traverser le temps.
          </p>
        </div>
        <div className={styles.materialBoard}>
          {[
            [
              "Aluminium",
              "Résistant & précis",
              "aluminium",
              "/pergolas/material-aluminium.webp",
              "Lames d’aluminium anthracite thermolaqué",
            ],
            [
              "Pierre",
              "Naturelle & minérale",
              "stone",
              "/pergolas/material-stone.webp",
              "Pierre calcaire naturelle aux nuances crème",
            ],
            [
              "Bois",
              "Chaleureux & vivant",
              "wood",
              "/pergolas/material-wood.webp",
              "Bois architectural chaleureux au veinage naturel",
            ],
            [
              "Végétal",
              "Libre & méditerranéen",
              "green",
              "/pergolas/material-green.webp",
              "Feuillage d’olivier et graminées méditerranéennes",
            ],
          ].map(([name, detail, modifier, src, alt]) => (
            <article
              className={`${styles.materialItem} ${styles[modifier]}`}
              key={name}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 700px) 50vw, 25vw"
              />
              <div>
                <strong>{name}</strong>
                <span>{detail}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.figures} aria-label="Altaïr en chiffres">
        <div className={styles.figureIntro}>
          <p className={styles.kicker}>La confiance, en chiffres</p>
          <p>La précision d’un atelier. La proximité d’une maison familiale.</p>
        </div>
        <div>
          <strong>26</strong>
          <span>années d’expérience</span>
        </div>
        <div>
          <strong>14 j</strong>
          <span>délai moyen de pose</span>
        </div>
        <div>
          <strong>100 %</strong>
          <span>conçu sur mesure</span>
        </div>
      </section>

      <section className={styles.testimonial} aria-label="Témoignage client">
        <Image src="/pergolas/hero.webp" alt="" fill sizes="100vw" />
        <div className={styles.testimonialShade} aria-hidden="true" />
        <div className={styles.quoteMark} aria-hidden="true">
          “
        </div>
        <blockquote>
          <p>
            Une équipe à l’écoute, un chantier impeccable et un résultat qui
            transforme complètement la maison.
          </p>
          <footer>
            <span className={styles.stars} aria-label="5 étoiles sur 5">
              ★★★★★
            </span>
            <cite>Famille L. — Orléans</cite>
          </footer>
        </blockquote>
      </section>

      <section
        className={styles.finalCta}
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className={styles.ctaIndex}>07</div>
        <div className={styles.ctaCopy}>
          <p className={styles.kicker}>Parlons de votre projet</p>
          <h2 id="contact-title">Et si c’était le bon moment&nbsp;?</h2>
          <p>Donnons vie à vos idées, simplement et durablement.</p>
        </div>
        <div className={styles.ctaActions}>
          <a
            className={styles.primaryButton}
            href="mailto:bonjour@altair-exterieurs.fr"
          >
            Demander un devis <ArrowRight aria-hidden="true" />
          </a>
          <a className={styles.secondaryButton} href="tel:+33238000000">
            <Phone aria-hidden="true" /> Être rappelé
          </a>
          <p>
            Simple <span /> Rapide <span /> Sans engagement
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <a
            className={styles.footerBrand}
            href="#accueil"
            aria-label="Altaïr Extérieurs, retour en haut"
          >
            <Brand />
            <small>Des espaces qui comptent.</small>
          </a>
          <nav aria-label="Navigation de pied de page">
            {navLinks.slice(0, 4).map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <address>
            <strong>Atelier & showroom</strong>
            <span>18, rue des Compagnons</span>
            <span>45000 Orléans</span>
            <a href="tel:+33238000000">02 38 00 00 00</a>
          </address>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Altaïr Extérieurs</span>
          <span>Conception · Fabrication · Pose</span>
          <span>Concept fictif réalisé pour le portfolio Atelier Douglas</span>
        </div>
      </footer>

      <section className={styles.caseStudy} aria-labelledby="case-study-title">
        <div className={styles.caseStudyLabel}>
          <span>Projet de démonstration</span>
          <small>2026 — Portfolio</small>
        </div>
        <div className={styles.caseStudyCopy}>
          <p className={styles.kicker}>À propos du projet</p>
          <h2 id="case-study-title">
            Donner à un savoir-faire artisanal une présence à sa hauteur.
          </h2>
          <p>
            Concept de site vitrine imaginé pour une entreprise spécialisée dans
            les clôtures, portails et pergolas. L’objectif : moderniser une
            identité artisanale tout en renforçant la confiance, la lisibilité
            des prestations et la conversion vers la demande de devis.
          </p>
        </div>
        <ul className={styles.caseStudySkills}>
          <li>Direction artistique</li>
          <li>UI Design</li>
          <li>UX & conversion</li>
          <li>Responsive</li>
          <li>Développement Next.js</li>
        </ul>
        <Link className={styles.portfolioReturn} href="/">
          Retour à Atelier Douglas <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
