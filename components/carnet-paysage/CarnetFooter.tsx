import styles from "@/app/carnet-paysage/carnet-paysage.module.css";
import { HandwrittenNote } from "./HandwrittenNote";

export function CarnetFooter() {
  return (
    <footer className={styles.footer}>
      <a className={styles.footerBrand} href="#top"><span>Carnet</span><span>Paysage</span></a>
      <nav aria-label="Navigation de pied de page">
        <a href="#projets">Projets</a>
        <a href="#approche">Approche</a>
        <a href="#atelier">L’atelier</a>
        <a href="#contact">Contact</a>
      </nav>
      <HandwrittenNote className={styles.footerNote}>Des jardins qui ont du sens.</HandwrittenNote>
      <div className={styles.footerSocials}>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.pinterest.fr" target="_blank" rel="noreferrer">Pinterest</a>
      </div>
      <a href="/mention-legal">Mentions légales</a>
    </footer>
  );
}
