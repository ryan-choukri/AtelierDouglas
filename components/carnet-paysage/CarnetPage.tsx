"use client";

import { useEffect, useRef } from "react";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";
import { BeforeAfterEditorial } from "./BeforeAfterEditorial";
import { CarnetCTA } from "./CarnetCTA";
import { CarnetFooter } from "./CarnetFooter";
import { CarnetHero } from "./CarnetHero";
import { GardenJourney } from "./GardenJourney";
import { MaterialBoard } from "./MaterialBoard";
import { ProjectsEditorial } from "./ProjectsEditorial";
import { ProspectCTA } from "@/components/atelier/ProspectCTA";

export function CarnetPage() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealTargets =
      root.querySelectorAll<HTMLElement>("[data-cp-reveal]");

    if (reducedMotion) {
      revealTargets.forEach((target) =>
        target.setAttribute("data-visible", "true"),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    revealTargets.forEach((target) => observer.observe(target));

    let scheduled = false;
    const updateParallax = () => {
      const progress = Math.min(window.scrollY, 900);
      root.style.setProperty("--cp-photo-drift", `${progress * 0.012}px`);
      root.style.setProperty("--cp-plan-drift", `${progress * 0.025}px`);
      root.style.setProperty("--cp-note-drift", `${progress * 0.036}px`);
      scheduled = false;
    };
    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <main className={styles.site} ref={rootRef}>
        <CarnetHero />
        <BeforeAfterEditorial />
        <GardenJourney />
        <ProjectsEditorial />
        <MaterialBoard />
        <CarnetCTA />
        <CarnetFooter />
      </main>
      <ProspectCTA
        pageName="carnet-paysage"
        pageUrl="https://atelierdouglas.fr/carnet-paysage"
      />
    </>
  );
}
