import type { ReactNode } from "react";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";

export function HandwrittenNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`${styles.handwritten} ${className}`}>{children}</span>;
}
