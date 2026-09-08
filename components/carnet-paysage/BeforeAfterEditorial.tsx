"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";
import { HandwrittenNote } from "./HandwrittenNote";

export function BeforeAfterEditorial() {
  const [beforePosition, setBeforePosition] = useState(48);
  const compareStyle = {
    "--cp-before-position": `${beforePosition}%`,
  } as CSSProperties;

  return (
    <section
      className={styles.beforeAfter}
      id="transformation"
      aria-labelledby="transformation-title"
      data-cp-reveal
    >
      <div className={styles.beforeAfterHeading}>
        <p className={styles.beforeAfterIndex} aria-hidden="true">
          Étude 01 <span /> Transformation
        </p>

        <div>
          <p className={styles.kicker}>Avant / Après</p>
          <h2 id="transformation-title">
            Faire apparaître<br />le jardin.
          </h2>
        </div>

        <div className={styles.beforeAfterIntro}>
          <p>
            Le geste n’efface pas le terrain. Il révèle les usages, cadre les
            vues et installe le vivant autour de la maison.
          </p>
          <HandwrittenNote className={styles.beforeAfterNote}>
            même maison,<br />un quotidien dehors.
          </HandwrittenNote>
        </div>
      </div>

      <div className={styles.compareBoard}>
        <figure className={styles.compareFigure}>
          <div className={styles.compareViewport} style={compareStyle}>
            <Image
              className={styles.compareAfterImage}
              src="/carnet-paysage/resultat.webp"
              alt="Après l’aménagement : terrasse en bois, cheminement minéral et jardin planté"
              fill
              sizes="(max-width: 820px) 92vw, 70vw"
            />

            <div className={styles.compareBeforeLayer} aria-hidden="true">
              <Image
                className={styles.compareBeforeImage}
                src="/carnet-paysage/terrain.webp"
                alt=""
                fill
                sizes="(max-width: 820px) 92vw, 70vw"
              />
            </div>

            <span className={`${styles.compareStamp} ${styles.compareStampBefore}`}>
              01 — L’existant
            </span>
            <span className={`${styles.compareStamp} ${styles.compareStampAfter}`}>
              02 — Le jardin
            </span>

            <div className={styles.compareDivider} aria-hidden="true">
              <span>↔</span>
              <i>Faire glisser</i>
            </div>

            <input
              className={styles.compareRange}
              type="range"
              min="0"
              max="100"
              value={beforePosition}
              onChange={(event) => setBeforePosition(Number(event.target.value))}
              aria-label="Comparer le terrain avant et le jardin après l’aménagement"
              aria-valuetext={`${beforePosition} % de la photographie avant visible`}
            />
          </div>

          <figcaption className={styles.compareCaption}>
            <span>Maison particulière — étude d’un jardin à vivre</span>
            <span>Glissez le calque pour comparer</span>
          </figcaption>
        </figure>

        <aside className={styles.transformationNotes} aria-label="Intentions du projet">
          <p className={styles.kicker}>Gestes du projet</p>
          <ol>
            <li>
              <span>01</span>
              <div><strong>Conserver</strong><p>La maison, les limites et la respiration du terrain.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><strong>Ouvrir</strong><p>Une terrasse au niveau du séjour, tournée vers le jardin.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><strong>Planter</strong><p>Des strates souples pour dessiner l’intimité et les saisons.</p></div>
            </li>
          </ol>
          <HandwrittenNote className={styles.transformationSideNote}>
            laisser le temps<br />finir le dessin.
          </HandwrittenNote>
        </aside>
      </div>
    </section>
  );
}
