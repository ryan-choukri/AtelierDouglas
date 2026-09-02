"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useState } from "react";

import styles from "./paygagiste.module.css";

export function BeforeAfter() {
  const [position, setPosition] = useState(47);

  return (
    <div className={styles.compare}>
      <Image
        className={styles.compareImage}
        src="/paygagiste/apres.png"
        alt="Après travaux : terrasse en bois, allée en gravier et plantations structurées"
        width={1456}
        height={1092}
        sizes="(max-width: 900px) 100vw, 72vw"
      />
      <Image
        className={styles.compareImage}
        src="/paygagiste/avant.png"
        alt="Avant travaux : pelouse usée et petite dalle en béton"
        width={1456}
        height={1092}
        sizes="(max-width: 900px) 100vw, 72vw"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <span className={`${styles.compareLabel} ${styles.beforeLabel}`}>Avant</span>
      <span className={`${styles.compareLabel} ${styles.afterLabel}`}>Après</span>

      <div
        className={styles.compareLine}
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span className={styles.compareHandle}>
          <MoveHorizontal size={22} strokeWidth={1.5} />
        </span>
      </div>

      <input
        className={styles.compareRange}
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Comparer la photo avant et la photo après"
      />
    </div>
  );
}
