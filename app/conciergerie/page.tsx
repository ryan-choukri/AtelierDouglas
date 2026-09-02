import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  ShieldCheck,
  X,
} from "lucide-react";

import { EstimateForm } from "./EstimateForm";
import { RevenueSimulator } from "./RevenueSimulator";
import styles from "./conciergerie.module.css";

export const metadata: Metadata = {
  title: "Maison Hôte | Conciergerie Airbnb à Paris",
  description:
    "Conciergerie locale à Paris et en proche couronne : annonce, tarification, voyageurs, ménage, maintenance et suivi de votre location courte durée.",
  keywords: [
    "conciergerie Airbnb Paris",
    "gestion location courte durée Paris",
    "conciergerie location saisonnière Île-de-France",
  ],
  alternates: { canonical: "/conciergerie" },
};

const OPERATIONS = [
  {
    time: "10:03",
    label: "Départ",
    title: "Le logement repasse entre nos mains.",
    text: "Départ confirmé, clés récupérées et premier contrôle rapide avant l’arrivée de l’équipe ménage.",
  },
  {
    time: "10:26",
    label: "Contrôle",
    title: "Chaque pièce suit sa fiche.",
    text: "Linge, consommables, cuisine, salle d’eau et points sensibles sont vérifiés dans le même ordre.",
  },
  {
    time: "13:42",
    label: "Imprévu",
    title: "Un détail est signalé, puis réglé.",
    text: "Un robinet desserré est photographié. Le propriétaire est informé avant toute intervention payante.",
  },
  {
    time: "15:48",
    label: "Prêt",
    title: "Le prochain séjour peut commencer.",
    text: "Photos de fin de passage, accès vérifié et message d’arrivée envoyé avec les consignes du logement.",
  },
];

const PROPERTIES = [
  {
    number: "Bien démo 01",
    place: "Le Marais · Paris 4e",
    title: "Studio sous les toits",
    description: "28 m² · 2 voyageurs · exemple fictif",
    image: "/conciergerie/studio-doutre.png",
    alt: "Studio parisien lumineux avec kitchenette",
    className: styles.propertyLarge,
  },
  {
    number: "Bien démo 02",
    place: "Montparnasse · Paris 14e",
    title: "Appartement familial",
    description: "67 m² · 4 voyageurs · exemple fictif",
    image: "/conciergerie/appartement-gare.png",
    alt: "Appartement familial lumineux avec salon et salle à manger",
    className: styles.propertySmall,
  },
  {
    number: "Bien démo 03",
    place: "Boulogne-Billancourt",
    title: "Maison côté jardin",
    description: "82 m² · 5 voyageurs · exemple fictif",
    image: "/conciergerie/maison-bouchemaine.png",
    alt: "Maison de caractère ouverte sur un petit jardin à Boulogne-Billancourt",
    className: styles.propertyTall,
  },
];

const REPORT_EVENTS = [
  {
    date: "12 juin · 10:07",
    title: "Départ confirmé",
    detail: "Clés en place, aucune dégradation visible.",
  },
  {
    date: "12 juin · 13:42",
    title: "Petite maintenance",
    detail: "Robinet de cuisine resserré après votre accord.",
  },
  {
    date: "12 juin · 15:48",
    title: "Logement prêt",
    detail: "Contrôle final effectué, photos ajoutées au suivi.",
  },
];

const FAQ = [
  {
    question: "Est-ce que je reste propriétaire de mon annonce Airbnb ?",
    answer:
      "Oui. Votre annonce, votre logement et vos accès restent les vôtres. Nous intervenons comme gestionnaire opérationnel selon les droits que vous choisissez de nous confier.",
  },
  {
    question: "Puis-je continuer à bloquer des dates pour moi ?",
    answer:
      "Oui. Vous conservez la possibilité de réserver des périodes personnelles. Nous définissons simplement ensemble un mode de fonctionnement clair pour éviter les conflits de calendrier.",
  },
  {
    question: "Travaillez-vous avec Airbnb et Booking.com ?",
    answer:
      "La méthode est prévue pour rester compatible avec Airbnb, Booking.com et les principaux outils de calendrier existants. Le montage exact dépend de votre situation actuelle.",
  },
  {
    question: "Comment est calculée l’estimation affichée ?",
    answer:
      "Le simulateur de cette page utilise une formule de démonstration basée sur les critères saisis. Il ne reflète pas des données de marché réelles. Une estimation sérieuse demande une visite et l’étude du logement.",
  },
  {
    question: "Qui intervient en cas de problème dans le logement ?",
    answer:
      "Nous sommes le premier point de contact. Pour une petite intervention, nous coordonnons un prestataire local après vous avoir informé. Les travaux importants restent toujours soumis à votre accord.",
  },
  {
    question: "Êtes-vous disponibles hors de Paris ?",
    answer:
      "Nous intervenons à Paris et dans une partie de la proche couronne : Boulogne-Billancourt, Neuilly-sur-Seine, Levallois-Perret, Vincennes et communes voisines selon l’accessibilité du bien.",
  },
];

function BrandMark() {
  return (
    <span className={styles.brandIcon} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M7.5 42V19.5C7.5 12.6 13.1 7 20 7h8c6.9 0 12.5 5.6 12.5 12.5V42" />
        <path d="M14 37V19l10 10 10-10v18" />
        <path d="M6 42h36" />
        <circle cx="24" cy="14" r="1.8" />
      </svg>
    </span>
  );
}

export default function ConciergeriePage() {
  return (
    <div className={styles.site}>
      <header className={styles.navbar}>
        <a className={styles.brand} href="#accueil" aria-label="Maison Hôte, accueil">
          <BrandMark />
          <span><strong>Maison Hôte</strong><small>Conciergerie parisienne</small></span>
        </a>

        <nav className={styles.navLinks} aria-label="Navigation principale">
          <a href="#gestion">La gestion</a>
          <a href="#methode">Notre méthode</a>
          <a href="#logements">Nos logements</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className={styles.navCta} href="#estimation">
          Obtenir mon estimation <ArrowRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className={styles.hero} id="accueil">
          <Image
            className={styles.heroImage}
            src="/conciergerie/hero.png"
            alt="Appartement lumineux préparé pour la location courte durée à Paris"
            width={1536}
            height={1024}
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />

          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Maison Hôte / Paris / Île-de-France</p>
              <h1>Votre logement reste à vous. <span>Pas sa gestion.</span></h1>
              <p className={styles.heroLead}>
                Prix, messages, ménage, linge et imprévus&nbsp;: nous tenons le quotidien
                de votre location courte durée. Vous gardez les décisions et la visibilité.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#estimation">
                  Estimer mon bien <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className={styles.textButton} href="#gestion">Découvrir la gestion complète</a>
              </div>
              <div className={styles.heroTrust}>
                <ShieldCheck size={19} strokeWidth={1.5} aria-hidden="true" />
                <span>Annonces à votre nom · calendrier accessible · aucune dépense importante sans votre accord</span>
              </div>
            </div>

            <RevenueSimulator />
          </div>

          <a className={styles.scrollCue} href="#reassurance">
            Notre accompagnement <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </section>

        <section className={styles.reassurance} id="reassurance" aria-label="Points de réassurance">
          <p><span>01</span><strong>Vous décidez des dates</strong><small>Le calendrier reste accessible.</small></p>
          <p><span>02</span><strong>Nous connaissons le bien</strong><small>Accès, consignes et points sensibles.</small></p>
          <p><span>03</span><strong>Chaque passage est tracé</strong><small>Ménage, linge, contrôle et incident.</small></p>
          <p><span>04</span><strong>Un doute&nbsp;? On vous appelle.</strong><small>Pas de décision importante dans votre dos.</small></p>
        </section>

        <section className={styles.comparison} id="gestion">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>01 — Retrouver du temps</p>
            <h2>Vous gardez le bien.<br />Nous prenons le quotidien.</h2>
            <p>
              La frontière est claire dès le départ&nbsp;: vos décisions d’un côté, les
              opérations de l’autre. Ce qui doit être validé l’est. Ce qui doit avancer
              avance.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            <article className={styles.selfManaged}>
              <span>Quand vous gérez seul</span>
              <h3>Votre temps se fragmente.</h3>
              <ul>
                <li><X size={15} /> Messages à toute heure</li>
                <li><X size={15} /> Ménages à coordonner</li>
                <li><X size={15} /> Prix à réajuster</li>
                <li><X size={15} /> Petits imprévus à distance</li>
                <li><X size={15} /> Calendriers à synchroniser</li>
              </ul>
            </article>

            <figure className={styles.serviceImage}>
              <Image
                src="/conciergerie/service-linge.png"
                alt="Préparation attentive du linge dans une chambre d’appartement"
                width={1536}
                height={1024}
                sizes="(max-width: 800px) 100vw, 34vw"
              />
              <figcaption><span>Contrôle séjour 014</span>Préparation · linge · vérification</figcaption>
            </figure>

            <article className={styles.managed}>
              <span>Avec Maison Hôte</span>
              <h3>Vous gardez l’essentiel.</h3>
              <ul>
                <li><Check size={15} /> Une équipe locale joignable</li>
                <li><Check size={15} /> Un logement suivi entre les séjours</li>
                <li><Check size={15} /> Des voyageurs accompagnés</li>
                <li><Check size={15} /> Une visibilité sur l’activité</li>
                <li><Check size={15} /> Vos périodes personnelles préservées</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.services} aria-labelledby="operations-title">
          <div className={styles.servicesIntro}>
            <p className={styles.sectionLabel}>02 — Dans les coulisses</p>
            <h2 id="operations-title">Entre deux séjours, rien n’est laissé au hasard.</h2>
            <p>
              Voici à quoi ressemble une rotation classique. Ce scénario est un exemple
              de fonctionnement, pas une promesse de délai universelle.
            </p>
          </div>

          <div className={styles.operationBoard}>
            <div className={styles.operationTopline}>
              <span>Journal de passage / Exemple</span>
              <span>T2 · Paris 11e · arrivée prévue à 16 h</span>
            </div>

            <div className={styles.operationTimeline}>
              {OPERATIONS.map((operation, index) => (
                <article key={operation.time}>
                  <div className={styles.operationTime}>
                    <span>{operation.time}</span>
                    <small>0{index + 1}</small>
                  </div>
                  <div>
                    <small>{operation.label}</small>
                    <h3>{operation.title}</h3>
                    <p>{operation.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className={styles.operationChecklist} aria-label="Exemple de contrôle final">
              <div>
                <span>Fiche de contrôle</span>
                <strong>MH / ROT-014</strong>
              </div>
              <p><Check size={15} /> Linge compté</p>
              <p><Check size={15} /> Consommables ajustés</p>
              <p><Check size={15} /> Accès testé</p>
              <p><Check size={15} /> Photos de fin ajoutées</p>
              <em>15:48 — prêt pour l’arrivée</em>
            </aside>
          </div>

          <div className={styles.compatibilityNote}>
            <span className={styles.compatibilityIndex}>↳</span>
            <p>
              <strong>Nous nous adaptons à votre organisation.</strong>
              Airbnb, Booking.com et vos calendriers existants peuvent continuer à faire
              partie de votre organisation.
            </p>
            <a href="#estimation">Parler de mon organisation <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className={styles.method} id="methode">
          <div className={styles.methodHeading}>
            <p className={styles.sectionLabel}>03 — Les premières semaines</p>
            <h2>Le bien est cadré avant d’être confié.</h2>
          </div>

          <div className={styles.methodSteps}>
            <article>
              <span>J–21</span>
              <div><small>Sur place</small><h3>Visite technique</h3></div>
              <p>Accès, couchages, rangement du linge, règlement de copropriété et points de vigilance.</p>
              <em>Une fiche propre au logement</em>
            </article>
            <article>
              <span>J–10</span>
              <div><small>En préparation</small><h3>Mise en place</h3></div>
              <p>Annonce, photographie, prix de départ, livret d’accueil et organisation du premier passage.</p>
              <em>Vous validez avant publication</em>
            </article>
            <article>
              <span>J+1</span>
              <div><small>En exploitation</small><h3>Premier séjour suivi</h3></div>
              <p>Messages, arrivée, départ, ménage et premier retour opérationnel sur le logement.</p>
              <em>Le calendrier est indicatif</em>
            </article>
          </div>
        </section>

        <section className={styles.properties} id="logements">
          <div className={styles.propertiesHeading}>
            <div>
              <p className={styles.sectionLabel}>04 — Logements</p>
              <h2>Des logements ordinaires, présentés avec justesse.</h2>
            </div>
            <p>
              Ces logements et caractéristiques sont des exemples fictifs créés pour la
              démonstration de cette page. Ils illustrent notre direction de présentation.
            </p>
          </div>

          <div className={styles.propertyGrid}>
            {PROPERTIES.map((property) => (
              <article className={property.className} key={property.number}>
                <div className={styles.propertyImage}>
                  <Image
                    src={property.image}
                    alt={property.alt}
                    width={1536}
                    height={1024}
                    sizes="(max-width: 800px) 100vw, 65vw"
                  />
                  <span>{property.number}</span>
                </div>
                <div className={styles.propertyCaption}>
                  <div><p>{property.place}</p><h3>{property.title}</h3><small>{property.description}</small></div>
                  <ArrowDownRight size={22} strokeWidth={1.3} aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.testimonials} aria-labelledby="report-title">
          <div className={styles.testimonialsHeading}>
            <p className={styles.sectionLabel}>05 — Côté propriétaire</p>
            <h2 id="report-title">Voir ce qui s’est passé, sans avoir à le demander.</h2>
            <p>
              Le rapport ci-dessous est un scénario de démonstration. Les événements et
              valeurs servent uniquement à montrer le niveau d’information attendu.
            </p>
          </div>

          <div className={styles.ownerReport}>
            <article className={styles.reportSheet}>
              <header>
                <div><span>Rapport propriétaire</span><strong>JUIN / DÉMO</strong></div>
                <p>Bien 014 · Paris 11e</p>
              </header>

              <div className={styles.reportMetrics}>
                <p><span>Séjours</span><strong>6</strong><small>valeur fictive</small></p>
                <p><span>Nuits occupées</span><strong>19</strong><small>valeur fictive</small></p>
                <p><span>Incidents ouverts</span><strong>0</strong><small>exemple clôturé</small></p>
              </div>

              <div className={styles.reportNote}>
                <span>Note du mois</span>
                <p>
                  Le jeu de clés secondaire a été remplacé après validation. Une photo et
                  le justificatif sont joints au suivi d’exemple.
                </p>
              </div>
              <footer>Document d’interface fictif — aucun résultat réel n’est présenté.</footer>
            </article>

            <article className={styles.activityLog}>
              <header><span>Dernières opérations</span><small>Exemple de journal</small></header>
              <div>
                {REPORT_EVENTS.map((event, index) => (
                  <section key={event.date}>
                    <span>0{index + 1}</span>
                    <time>{event.date}</time>
                    <div><strong>{event.title}</strong><p>{event.detail}</p></div>
                    <em>Clos</em>
                  </section>
                ))}
              </div>
              <blockquote>
                “Vous n’avez pas besoin d’être dans la boucle de chaque message. Vous
                devez pouvoir retrouver l’information quand elle compte.”
              </blockquote>
            </article>
          </div>
        </section>

        <section className={styles.area}>
          <div className={styles.areaCopy}>
            <p className={styles.sectionLabel}>06 — Proches de votre bien</p>
            <h2>Une conciergerie volontairement locale.</h2>
            <p>
              La proximité nous permet de connaître les logements, d’intervenir avec bon
              sens et de construire un réseau de prestataires réellement mobilisables.
            </p>
            <div className={styles.localDetails}>
              <p><span>Accès</span>Boîtes à clés, digicodes et remises en main propre selon l’adresse.</p>
              <p><span>Terrain</span>Stationnement, étages sans ascenseur et immeubles anciens anticipés dès la visite.</p>
            </div>
            <ul>
              <li>Paris</li><li>Boulogne-Billancourt</li><li>Neuilly-sur-Seine</li>
              <li>Levallois-Perret</li><li>Vincennes</li><li>Versailles</li>
            </ul>
            <small>Zone indicative de démonstration — l’éligibilité dépend de l’adresse du logement.</small>
          </div>

          <div className={styles.areaMap} aria-label="Schéma de zone d’intervention autour de Paris">
            <div className={styles.mapRingOne} />
            <div className={styles.mapRingTwo} />
            <span className={styles.mapCenter}><MapPin size={20} />Paris</span>
            <span className={styles.mapPlaceOne}>Neuilly</span>
            <span className={styles.mapPlaceTwo}>Boulogne</span>
            <span className={styles.mapPlaceThree}>Versailles</span>
            <span className={styles.mapPlaceFour}>Vincennes</span>
          </div>
        </section>

        <section className={styles.faq} id="faq">
          <div className={styles.faqHeading}>
            <p className={styles.sectionLabel}>07 — Questions fréquentes</p>
            <h2>Avant de nous confier vos clés.</h2>
            <p>
              Une question particulière sur votre logement ? Le premier échange sert
              justement à vérifier que notre fonctionnement vous convient.
            </p>
            <a href="#estimation">Poser ma question <ArrowRight size={17} /></a>
          </div>

          <div className={styles.faqList}>
            {FAQ.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>0{index + 1}</span>{item.question}<ChevronDown size={18} /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.finalEstimate} id="estimation">
          <div className={styles.finalEstimateIntro}>
            <p className={styles.sectionLabel}>08 — Votre estimation</p>
            <h2>Parlons de votre logement, pas d’une moyenne.</h2>
            <p>
              Le simulateur donne un premier ordre de grandeur fictif. Pour aller plus
              loin, partagez-nous les vraies caractéristiques du bien. Nous vous
              recontactons pour une estimation contextualisée.
            </p>
            <div className={styles.finalBenefits}>
              <p><Check size={16} /> Estimation sans engagement</p>
              <p><Check size={16} /> Échange avec un interlocuteur local</p>
              <p><Check size={16} /> Recommandations adaptées au logement</p>
            </div>
          </div>

          <EstimateForm />
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <a className={styles.brand} href="#accueil">
            <BrandMark />
            <span><strong>Maison Hôte</strong><small>Conciergerie parisienne</small></span>
          </a>
          <p>Gestion locale de locations courte durée à Paris et en proche couronne.</p>
        </div>

        <div className={styles.footerLinks}>
          <p>Explorer</p>
          <a href="#gestion">La gestion</a><a href="#methode">La méthode</a>
          <a href="#logements">Les logements</a><a href="#faq">FAQ</a>
        </div>

        <div className={styles.footerLinks}>
          <p>Propriétaires</p>
          <a href="#estimation">Estimer mon bien</a>
          <span>Paris · Île-de-France</span>
          <span>Réponse sous 48 h ouvrées</span>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Maison Hôte · Démonstration</span>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
    </div>
  );
}
