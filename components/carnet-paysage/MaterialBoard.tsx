import Image from "next/image";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";
import { HandwrittenNote } from "./HandwrittenNote";

export function MaterialBoard() {
  return (
    <section className={styles.materials} id="atelier" data-cp-reveal>
      <div className={styles.materialCopy}>
        <p className={styles.kicker}>Matières & végétaux</p>
        <h2>Des matériaux<br />qui traversent<br />le temps.</h2>
        <p>
          Pierre, bois, acier, végétaux… Nous sélectionnons des matières nobles
          et durables, en cohérence avec votre environnement.
        </p>
        <a className={styles.outlineLink} href="#contact">Nos engagements <span>→</span></a>
      </div>

      <div className={styles.sampleBoard}>
        <Image
          src="/carnet-paysage/materials.webp"
          alt="Échantillons de bois, pierre locale, acier patiné et branche d’olivier"
          fill
          sizes="(max-width: 760px) 100vw, 42vw"
        />
        <HandwrittenNote className={styles.noteWood}>Bois massif</HandwrittenNote>
        <HandwrittenNote className={styles.noteStone}>Pierre locale</HandwrittenNote>
        <HandwrittenNote className={styles.noteSteel}>Acier patiné</HandwrittenNote>
        <HandwrittenNote className={styles.notePlant}>Végétaux adaptés<br />au climat</HandwrittenNote>
        <HandwrittenNote className={styles.noteDurable}>Le beau dure plus longtemps.</HandwrittenNote>
      </div>

      <aside className={styles.artOfLiving}>
        <div>
          <p className={styles.kicker}>Plus qu’un jardin</p>
          <h2>Un art de vivre.</h2>
          <p>
            Des extérieurs qui s’intègrent naturellement à leur environnement,
            pour aujourd’hui et pour demain.
          </p>
          <a href="#contact">Dessinons votre projet <span>→</span></a>
        </div>
        <Image
          src="/carnet-paysage/tree-sketch-detaille.webp"
          alt=""
          width={1145}
          height={1374}
          sizes="(max-width: 820px) 68vw, 24vw"
          aria-hidden="true"
        />
      </aside>
    </section>
  );
}
