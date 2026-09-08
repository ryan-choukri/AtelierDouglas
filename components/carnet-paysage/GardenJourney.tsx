import Image from "next/image";
import { Fragment } from "react";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";
import { HandwrittenNote } from "./HandwrittenNote";

const STEPS = [
  {
    number: "01",
    title: "Le terrain",
    image: "/carnet-paysage/terrain.webp",
    alt: "Terrain avant sa transformation paysagère",
    text: "Comprendre le lieu, ses contraintes et son potentiel.",
  },
  {
    number: "02",
    title: "L’esquisse",
    image: "/carnet-paysage/plan-jardin-detaille.webp",
    alt: "Plan paysager détaillé avec maison, piscine, cheminements et plantations",
    text: "Imaginer les lignes, les volumes et les ambiances.",
    sketch: true,
  },
  {
    number: "03",
    title: "Le chantier",
    image: "/carnet-paysage/chantier.webp",
    alt: "Mise en place des bordures et des plantations",
    text: "Donner vie au projet avec des artisans de confiance.",
  },
  {
    number: "04",
    title: "Le résultat",
    image: "/carnet-paysage/resultat.webp",
    alt: "Jardin achevé avec terrasse en bois et plantations",
    text: "Un extérieur à vivre, au fil des saisons.",
  },
];

const STEP_CLASSES = [
  styles.journeyStepOne,
  styles.journeyStepTwo,
  styles.journeyStepThree,
  styles.journeyStepFour,
];

const CONNECTOR_CLASSES = [
  styles.stepConnectorDown,
  styles.stepConnectorUp,
  styles.stepConnectorDown,
];

const CONNECTOR_NOTES = ["observer", "composer", "laisser vivre"];

export function GardenJourney() {
  return (
    <section className={styles.journey} id="approche" data-cp-reveal>
      <div className={styles.journeyHeader}>
        <div className={styles.journeyIntro}>
          <p className={styles.kicker}>Notre méthode</p>
          <h2>Du terrain<br />au jardin.</h2>
        </div>

        <p className={styles.journeyLead}>
          Un accompagnement clair et créatif, de la première esquisse à la
          dernière plantation.
        </p>

        <div className={styles.journeyAside}>
          <HandwrittenNote className={styles.journeyNote}>
            regarder d’abord,<br />dessiner ensuite.
          </HandwrittenNote>
          <a className={styles.outlineLink} href="#atelier">Notre approche <span>→</span></a>
        </div>
      </div>

      <div className={styles.journeySteps} aria-label="Les quatre étapes de notre méthode">
        {STEPS.map((step, index) => (
          <Fragment key={step.number}>
            <article className={`${styles.journeyStep} ${STEP_CLASSES[index]}`}>
              <div className={styles.stepHeading}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
              </div>
              <div className={styles.stepMount}>
                <div className={`${styles.stepImage} ${step.sketch ? styles.stepSketch : ""}`}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 820px) 78vw, 21vw"
                  />
                </div>
              </div>
              <p>{step.text}</p>
            </article>

            {index < STEPS.length - 1 && (
              <div
                className={`${styles.stepConnector} ${CONNECTOR_CLASSES[index]}`}
                aria-hidden="true"
              >
                <span>{CONNECTOR_NOTES[index]}</span>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
