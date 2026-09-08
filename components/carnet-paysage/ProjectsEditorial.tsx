import Image from "next/image";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";
import { HandwrittenNote } from "./HandwrittenNote";

const PROJECTS = [
  { name: "Maison en Provence", tags: "Terrasse · piscine · plantations", image: "project-01.webp", alt: "Maison entourée d’un jardin naturel" },
  { name: "Jardin contemporain", tags: "Minéral · végétal · équilibre", image: "project-02.webp", alt: "Jardin contemporain et terrasse en bois" },
  { name: "Mas restauré", tags: "Prairie · pierres sèches · essences locales", image: "project-03.webp", alt: "Cour plantée contre un mur ancien en pierre" },
  { name: "Patio urbain", tags: "Ombre · matières · intimité", image: "project-04.webp", alt: "Entrée paysagée avec bois, pierre et plantations" },
];

export function ProjectsEditorial() {
  return (
    <section className={styles.projects} id="projets" data-cp-reveal>
      <div className={styles.projectsHeading}>
        <div>
          <p className={styles.kicker}>Projets récents</p>
          <h2>Des lieux uniques,<br />des histoires vraies.</h2>
        </div>
        <HandwrittenNote className={styles.projectsNote}>
          Chaque jardin<br />raconte une histoire.
        </HandwrittenNote>
        <a href="#contact">Voir tous les projets <span>→</span></a>
      </div>

      <div className={styles.projectStrip}>
        {PROJECTS.map((project, index) => (
          <article className={styles.project} key={project.name}>
            <div className={styles.projectImage}>
              <Image
                src={`/carnet-paysage/${project.image}`}
                alt={project.alt}
                fill
                sizes="(max-width: 760px) 84vw, 25vw"
              />
            </div>
            <div className={styles.projectTitle}>
              <h3><span>0{index + 1} — </span>{project.name}</h3>
              <span aria-hidden="true">+</span>
            </div>
            <p>{project.tags}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
