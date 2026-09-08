import Image from "next/image";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";

export function HeroLandscapeSketch() {
  return (
    <div className={styles.heroSketch} aria-hidden="true">
      <Image
        src="/carnet-paysage/plan-jardin-detaille.webp"
        alt=""
        fill
        priority
        sizes="(max-width: 820px) 72vw, 36vw"
        className={styles.heroSketchImage}
      />
    </div>
  );
}
