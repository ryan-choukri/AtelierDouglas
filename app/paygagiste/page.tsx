import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Ruler,
  Sprout,
} from "lucide-react";

import { BeforeAfter } from "./BeforeAfter";
import { ProjectForm } from "./ProjectForm";
import styles from "./paygagiste.module.css";

export const metadata: Metadata = {
  title: "Carnet Paysage | Paysagiste à Angers & alentours",
  description:
    "Conception, création et transformation de jardins à Angers et dans le Maine-et-Loire. Terrasses, plantations, allées et clôtures.",
  alternates: { canonical: "/paygagiste" },
};

const SERVICES = [
  {
    number: "01",
    title: "Conception de jardin",
    text: "Plans, ambiances, choix des végétaux et des matières : une vision claire avant de commencer.",
  },
  {
    number: "02",
    title: "Terrasses & lieux de vie",
    text: "Bois, pierre ou pavés pour créer un prolongement naturel et confortable de la maison.",
  },
  {
    number: "03",
    title: "Plantations",
    text: "Des compositions adaptées au sol, à l’exposition et au temps que vous voulez y consacrer.",
  },
  {
    number: "04",
    title: "Allées & accès",
    text: "Des circulations pratiques, perméables et soignées jusque dans les détails de finition.",
  },
  {
    number: "05",
    title: "Clôtures & intimité",
    text: "Des limites qui protègent sans enfermer, pensées avec le végétal et l’architecture existante.",
  },
];

const MATERIALS = [
  {
    number: "M.01",
    title: "Chêne",
    origin: "Scieries du Grand Ouest",
    text: "Chaleureux, réparable et naturellement à sa place dans le jardin.",
    className: styles.materialOak,
  },
  {
    number: "M.02",
    title: "Tuffeau",
    origin: "Pierre de pays",
    text: "Une pierre claire qui dialogue immédiatement avec l’architecture angevine.",
    className: styles.materialStone,
  },
  {
    number: "M.03",
    title: "Gravier de Loire",
    origin: "Granulats locaux",
    text: "Perméable, vivant sous le pas et idéal pour dessiner des circulations souples.",
    className: styles.materialGravel,
  },
  {
    number: "M.04",
    title: "Acier patiné",
    origin: "Façonnage sur mesure",
    text: "Une ligne fine et durable pour tenir les niveaux sans alourdir le dessin.",
    className: styles.materialSteel,
  },
];

const PROJECTS = [
  {
    number: "Projet 014",
    place: "Angers · 420 m²",
    title: "Un jardin à parcourir",
    image: "/paygagiste/hero.png",
    alt: "Jardin avec terrasse bois, allée de gravier et plantations à Angers",
    className: styles.projectLarge,
  },
  {
    number: "Projet 011",
    place: "Avrillé · 185 m²",
    title: "L’entrée devient un jardin",
    image: "/paygagiste/realisation-allee.png",
    alt: "Allée carrossable paysagée avec pavés et clôture en bois",
    className: styles.projectSmall,
  },
  {
    number: "Projet 006",
    place: "Angers centre · 68 m²",
    title: "Une cour à l’ombre du tuffeau",
    image: "/paygagiste/realisation-cour.png",
    alt: "Cour jardinée avec mur en pierre, pavés de terre cuite et fougères",
    className: styles.projectTall,
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Premier échange",
    text: "Vous nous racontez vos usages, vos envies, les contraintes et le budget du projet.",
    meta: "20 à 30 min · sans engagement",
  },
  {
    number: "02",
    title: "Visite & esquisse",
    text: "Nous observons le terrain, prenons les mesures et posons une première direction concrète.",
    meta: "Sur place · 1 à 2 h",
  },
  {
    number: "03",
    title: "Projet & devis",
    text: "Vous recevez un plan lisible, une palette de matières et un chiffrage poste par poste.",
    meta: "Délai moyen · 2 semaines",
  },
  {
    number: "04",
    title: "Réalisation",
    text: "La même équipe coordonne le chantier, les plantations et la remise en état finale.",
    meta: "Suivi jusqu’à la réception",
  },
];

export default function PaysagistePage() {
  return (
    <div className={styles.site}>
      <header className={styles.navbar}>
        <a className={styles.brand} href="#accueil" aria-label="Carnet Paysage, accueil">
          <span className={styles.brandMark} aria-hidden="true">
            <Sprout size={18} strokeWidth={1.6} />
          </span>
          <span>
            <strong>Carnet</strong>
            <strong>Paysage</strong>
          </span>
        </a>

        <nav className={styles.navLinks} aria-label="Navigation principale">
          <a href="#transformation">Avant / après</a>
          <a href="#savoir-faire">Savoir-faire</a>
          <a href="#realisations">Réalisations</a>
        </nav>

        <a className={styles.navCta} href="#contact">
          <span>Demander un devis</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className={styles.hero} id="accueil">
          <Image
            className={styles.heroImage}
            src="/paygagiste/hero.png"
            alt="Jardin paysager avec terrasse bois et allée en gravier près d’Angers"
            width={1536}
            height={1024}
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.heroGrid} aria-hidden="true" />

          <div className={styles.projectTag}>
            <span>Projet 014</span>
            <span>Angers</span>
            <span>420 m²</span>
          </div>

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Paysagiste à Angers & alentours</p>
            <h1>Des extérieurs pensés pour être vécus.</h1>
            <p className={styles.heroIntro}>
              Nous dessinons et réalisons des jardins simples à vivre, durables et
              profondément liés à votre maison.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                Parler de mon projet
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className={styles.secondaryButton} href="#realisations">
                Découvrir nos réalisations
              </a>
            </div>
          </div>

          <a className={styles.scrollCue} href="#transformation">
            Voir la transformation
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </section>

        <section className={styles.reassurance} aria-label="Nos engagements">
          <p><span>01</span>Un interlocuteur unique</p>
          <p><span>02</span>De la conception au chantier</p>
          <p><span>03</span>Entreprise locale</p>
          <p><span>04</span>Devis clair et détaillé</p>
        </section>

        <section className={styles.transformation} id="transformation">
          <div className={styles.transformationIntro}>
            <div>
              <p className={styles.sectionIndex}>01 — Transformer</p>
              <h2>Le même jardin.<br />Une nouvelle façon d’y vivre.</h2>
            </div>
            <p>
              Une transformation complète à Beaucouzé : retrouver de l’intimité,
              créer une vraie terrasse et faire entrer le jardin dans la maison.
            </p>
          </div>

          <div className={styles.caseStudy}>
            <BeforeAfter />
            <aside className={styles.caseStudyPanel}>
              <div className={styles.caseHeading}>
                <span>Projet 008</span>
                <h3>Jardin des Alouettes</h3>
                <p>Beaucouzé · Maine-et-Loire</p>
              </div>

              <dl className={styles.caseMetrics}>
                <div><Ruler size={17} aria-hidden="true" /><dt>Surface</dt><dd>260 m²</dd></div>
                <div><CalendarDays size={17} aria-hidden="true" /><dt>Durée</dt><dd>5 semaines</dd></div>
                <div><MapPin size={17} aria-hidden="true" /><dt>Lieu</dt><dd>Beaucouzé</dd></div>
              </dl>

              <div className={styles.caseNotes}>
                <div>
                  <span>Le besoin</span>
                  <p>Une terrasse réellement utilisable et un jardin moins exposé au voisinage.</p>
                </div>
                <div>
                  <span>La contrainte</span>
                  <p>Un terrain étroit, un sol lourd et des niveaux à rattraper depuis la maison.</p>
                </div>
                <div>
                  <span>Notre réponse</span>
                  <p>Une terrasse en chêne, une circulation perméable et des plantations en strates.</p>
                </div>
              </div>

              <p className={styles.caseWorks}>Terrasse · terrassement · plantations · éclairage · clôture</p>
            </aside>
          </div>
        </section>

        <section className={styles.philosophy} id="approche">
          <figure className={styles.craftImage}>
            <Image
              src="/paygagiste/savoir-faire.png"
              alt="Pose soignée d’une bordure en acier entre un massif et une allée en gravier"
              width={1536}
              height={1024}
              sizes="(max-width: 800px) 100vw, 48vw"
            />
            <figcaption><span>Détail chantier 023</span>Bordure acier · nivellement manuel</figcaption>
          </figure>

          <div className={styles.philosophyCopy}>
            <p className={styles.sectionIndex}>02 — Notre approche</p>
            <h2>Un beau jardin, c’est d’abord un jardin juste.</h2>
            <p className={styles.lead}>
              Juste pour le lieu, pour votre quotidien et pour le temps que vous
              souhaitez y consacrer.
            </p>
            <p>
              Carnet Paysage imagine des extérieurs qui vieillissent bien. Nous partons
              de ce qui existe — la maison, un arbre, une vue, un usage — puis nous
              dessinons avec des matériaux sobres et des végétaux adaptés à notre région.
            </p>
            <blockquote>
              « Nous préférons un jardin vivant et bien construit à un décor figé dès le
              premier jour. »
              <cite>— L’équipe Carnet Paysage</cite>
            </blockquote>
            <div className={styles.approachPoints}>
              <p><span>01</span>Observer avant de dessiner</p>
              <p><span>02</span>Faire simple, mais précis</p>
              <p><span>03</span>Penser l’entretien dès le plan</p>
            </div>
          </div>
        </section>

        <section className={styles.services} id="savoir-faire">
          <div className={styles.servicesHeader}>
            <div>
              <p className={styles.sectionIndex}>03 — Savoir-faire</p>
              <h2>Du premier trait au dernier végétal.</h2>
            </div>
            <p>
              Une seule équipe pour garder le fil du projet, coordonner les détails et
              livrer un extérieur cohérent.
            </p>
          </div>

          <div className={styles.serviceList}>
            {SERVICES.map((service) => (
              <article key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ArrowUpRight size={22} strokeWidth={1.3} aria-hidden="true" />
              </article>
            ))}
          </div>

          <a className={styles.inlineCta} href="#contact">
            Parler de votre besoin
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </section>

        <section className={styles.materials}>
          <div className={styles.materialsHeader}>
            <p className={styles.sectionIndex}>04 — Matières</p>
            <h2>Des matériaux qui se patinent, pas qui se démodent.</h2>
            <p>
              Nous privilégions les filières proches, les surfaces perméables et les
              matières capables de traverser les saisons.
            </p>
          </div>

          <div className={styles.materialGrid}>
            {MATERIALS.map((material) => (
              <article key={material.number}>
                <div className={`${styles.materialSample} ${material.className}`} aria-hidden="true" />
                <span>{material.number}</span>
                <h3>{material.title}</h3>
                <p className={styles.materialOrigin}>{material.origin}</p>
                <p>{material.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.projects} id="realisations">
          <div className={styles.projectsHeader}>
            <div>
              <p className={styles.sectionIndex}>05 — Réalisations</p>
              <h2>Quelques jardins récemment sortis du carnet.</h2>
            </div>
            <a href="#contact">Vous avez un terrain en tête ?<ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>

          <div className={styles.projectGrid}>
            {PROJECTS.map((project) => (
              <article className={project.className} key={project.number}>
                <div className={styles.projectImageWrap}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1536}
                    height={1024}
                    sizes="(max-width: 800px) 100vw, 65vw"
                  />
                  <span className={styles.projectNumber}>{project.number}</span>
                </div>
                <div className={styles.projectCaption}>
                  <div><p>{project.place}</p><h3>{project.title}</h3></div>
                  <ArrowUpRight size={21} strokeWidth={1.4} aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.process}>
          <div className={styles.processHeader}>
            <p className={styles.sectionIndex}>06 — Le projet</p>
            <h2>Avancer avec une vision claire.</h2>
            <p>Vous savez où l’on va, ce que l’on fait et combien cela coûte à chaque étape.</p>
          </div>

          <div className={styles.processList}>
            {PROCESS.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
                <small>{step.meta}</small>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.contactIntro}>
            <p className={styles.sectionIndex}>07 — Votre projet</p>
            <h2>Et si votre jardin commençait ici&nbsp;?</h2>
            <p>
              Quelques lignes suffisent pour démarrer. Nous vous rappelons pour
              comprendre le lieu, vos envies et vérifier que nous sommes la bonne équipe.
            </p>

            <div className={styles.contactFacts}>
              <p><MapPin size={19} strokeWidth={1.5} aria-hidden="true" />Angers et jusqu’à 35 km autour</p>
              <p><Clock3 size={19} strokeWidth={1.5} aria-hidden="true" />Réponse sous 48 h ouvrées</p>
            </div>
          </div>

          <ProjectForm />
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <a className={styles.brand} href="#accueil">
            <span className={styles.brandMark} aria-hidden="true"><Sprout size={18} strokeWidth={1.6} /></span>
            <span><strong>Carnet</strong><strong>Paysage</strong></span>
          </a>
          <p>Paysagiste concepteur & réalisateur à Angers.</p>
        </div>

        <div className={styles.footerNav}>
          <p>Explorer</p>
          <a href="#transformation">Avant / après</a>
          <a href="#savoir-faire">Savoir-faire</a>
          <a href="#realisations">Réalisations</a>
          <a href="#contact">Demander un devis</a>
        </div>

        <div className={styles.footerArea}>
          <p>Secteur</p>
          <span>Angers · Avrillé · Beaucouzé</span>
          <span>Bouchemaine · Trélazé · Loire-Authion</span>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Carnet Paysage</span>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
    </div>
  );
}
