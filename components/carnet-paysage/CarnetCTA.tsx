import Image from "next/image";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";
import { HandwrittenNote } from "./HandwrittenNote";
import { CarnetContactForm } from "./CarnetContactForm";

export function CarnetCTA() {
  return (
    <>
      <section className={styles.finalCta} data-cp-reveal>
        <Image
          src="/carnet-paysage/cta.webp"
          alt="Oliveraie au soleil couchant dans un paysage méditerranéen"
          fill
          sizes="100vw"
        />
        <div className={styles.finalShade} aria-hidden="true" />
        <div className={styles.finalContent}>
          <h2>Et si votre jardin<br />commençait ici&nbsp;?</h2>
          <p>Parlez-nous de votre terrain, de vos envies et de votre façon de vivre dehors.</p>
          <a href="#contact">Parler de mon projet <span>→</span></a>
        </div>
        <HandwrittenNote className={styles.finalNote}>
          Ici commencent<br />vos prochains<br />souvenirs.
        </HandwrittenNote>
      </section>

      <section className={styles.contact} id="contact" data-cp-reveal>
        <Image
          className={styles.contactBotanical}
          src="/carnet-paysage/contact-botanical-sketch.webp"
          alt=""
          width={820}
          height={1230}
          sizes="(max-width: 820px) 30rem, 38vw"
          aria-hidden="true"
        />
        <div className={styles.contactIntro}>
          <p className={styles.kicker}>Votre projet</p>
          <h2>Commençons par<br />le terrain.</h2>
          <p>
            Quelques lignes suffisent pour ouvrir la conversation. Nous vous
            répondrons avec des premières pistes, simplement.
          </p>
        </div>
        <CarnetContactForm />
      </section>
    </>
  );
}
