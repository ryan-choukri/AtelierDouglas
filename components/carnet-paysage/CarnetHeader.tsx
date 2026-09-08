import styles from "@/app/carnet-paysage/carnet-paysage.module.css";
import { HandwrittenNote } from "./HandwrittenNote";

export function CarnetHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="Carnet Paysage, accueil">
        <span>Carnet</span>
        <span>Paysage</span>
      </a>

      <HandwrittenNote className={styles.brandNote}>
        des jardins<br />qui ont du sens
      </HandwrittenNote>

      <nav className={styles.nav} aria-label="Navigation Carnet Paysage">
        <a href="#projets">Projets</a>
        <a href="#approche">Approche</a>
        <a href="#atelier">L’atelier</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className={styles.headerCta} href="#contact">
        Dessinons votre extérieur <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}
