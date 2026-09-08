import Image from "next/image";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";
import { CarnetHeader } from "./CarnetHeader";
import { HandwrittenNote } from "./HandwrittenNote";
import { HeroLandscapeSketch } from "./HeroLandscapeSketch";

export function CarnetHero() {
  return (
    <section className={styles.hero} id="top">
      <CarnetHeader />

      <div className={styles.heroComposition}>
        <div className={styles.heroCopy}>
          <div className={styles.heroIndex}><span>01</span><i /></div>
          <h1>Des extérieurs<br />pensés pour<br />être vécus.</h1>
          <p className={styles.heroVerbs}>Concevoir <span>·</span> Aménager <span>·</span> Faire grandir</p>
          <p className={styles.heroIntro}>
            Nous imaginons des jardins durables, esthétiques et fonctionnels,
            en harmonie avec votre lieu de vie.
          </p>
          <a className={styles.primaryCta} href="#projets">
            Découvrir nos projets <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={styles.heroPhoto}>
          <Image
            src="/carnet-paysage/hero.webp"
            alt="Jardin méditerranéen avec olivier, bassin et maison en pierre"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 68vw"
          />
          <div className={styles.heroPhotoWash} aria-hidden="true" />
        </div>

        <HeroLandscapeSketch />

        <HandwrittenNote className={styles.noteOlive}>
          Olivier existant<br />conservé
        </HandwrittenNote>
        <HandwrittenNote className={styles.noteDeck}>Terrasse en bois</HandwrittenNote>
        <HandwrittenNote className={styles.noteMassif}>Massif méditerranéen</HandwrittenNote>
        <HandwrittenNote className={styles.noteAccess}>Accès naturel</HandwrittenNote>
        <HandwrittenNote className={styles.noteImage}>
          Un jardin qui s’intègre<br />à son environnement.
        </HandwrittenNote>
        <HandwrittenNote className={styles.notePromise}>Un lieu à votre image.</HandwrittenNote>
      </div>

      <a className={styles.scrollCue} href="#approche">
        Scroll <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
