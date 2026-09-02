"use client";

import { ArrowRight, BedDouble, Home, MapPin, Maximize2 } from "lucide-react";
import { CSSProperties, useMemo, useState } from "react";

import styles from "./conciergerie.module.css";

const LOCATION_FACTORS: Record<string, number> = {
  Paris: 1.12,
  "Boulogne-Billancourt": 1.06,
  "Neuilly-sur-Seine": 1.08,
  Versailles: 1.01,
  Vincennes: 1.03,
};

const TYPE_FACTORS: Record<string, number> = {
  Appartement: 1,
  Maison: 1.08,
  Studio: 0.92,
  "Logement atypique": 1.12,
};

function rangeStyle(value: number, min: number, max: number) {
  return {
    "--sim-progress": `${((value - min) / (max - min)) * 100}%`,
  } as CSSProperties;
}

export function RevenueSimulator() {
  const [location, setLocation] = useState("Paris");
  const [propertyType, setPropertyType] = useState("Appartement");
  const [surface, setSurface] = useState(52);
  const [sleeping, setSleeping] = useState(4);

  const estimate = useMemo(() => {
    const base = 430 + surface * 26 + sleeping * 105;
    const value = base * LOCATION_FACTORS[location] * TYPE_FACTORS[propertyType];
    return Math.round(value / 50) * 50;
  }, [location, propertyType, surface, sleeping]);

  const lowerEstimate = Math.round((estimate * 0.88) / 50) * 50;
  const upperEstimate = Math.round((estimate * 1.12) / 50) * 50;

  return (
    <div className={styles.simulator}>
      <div className={styles.simulatorDossier} aria-hidden="true">
        <span>Fiche d’estimation</span>
        <span>MH / EST-004</span>
      </div>
      <div className={styles.simulatorHeading}>
        <div>
          <span>Premier ordre de grandeur</span>
          <h2>Ouvrir une fiche pour votre bien.</h2>
        </div>
        <span className={styles.simulatorStep}>PAR / 75</span>
      </div>

      <div className={styles.simulatorFields}>
        <label className={styles.selectField}>
          <span><MapPin size={15} aria-hidden="true" /> Localisation</span>
          <select value={location} onChange={(event) => setLocation(event.target.value)}>
            {Object.keys(LOCATION_FACTORS).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className={styles.selectField}>
          <span><Home size={15} aria-hidden="true" /> Type de logement</span>
          <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)}>
            {Object.keys(TYPE_FACTORS).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className={styles.rangeField}>
          <span className={styles.rangeLabel}>
            <span><Maximize2 size={15} aria-hidden="true" /> Surface</span>
            <strong>{surface} m²</strong>
          </span>
          <input
            type="range"
            min="18"
            max="160"
            value={surface}
            style={rangeStyle(surface, 18, 160)}
            onChange={(event) => setSurface(Number(event.target.value))}
            aria-label="Surface du logement en mètres carrés"
          />
          <span className={styles.rangeBounds}><span>18 m²</span><span>160 m²</span></span>
        </label>

        <label className={styles.rangeField}>
          <span className={styles.rangeLabel}>
            <span><BedDouble size={15} aria-hidden="true" /> Couchages</span>
            <strong>{sleeping} personnes</strong>
          </span>
          <input
            type="range"
            min="1"
            max="10"
            value={sleeping}
            style={rangeStyle(sleeping, 1, 10)}
            onChange={(event) => setSleeping(Number(event.target.value))}
            aria-label="Nombre de couchages"
          />
          <span className={styles.rangeBounds}><span>1</span><span>10</span></span>
        </label>
      </div>

      <div className={styles.estimateBox} aria-live="polite">
        <div>
          <span>Estimation mensuelle indicative</span>
          <strong>{lowerEstimate.toLocaleString("fr-FR")} – {upperEstimate.toLocaleString("fr-FR")} €</strong>
          <small>brut / mois</small>
        </div>
        <p>
          Projection de démonstration selon vos critères. Ce montant n’est ni une
          promesse de revenus ni une donnée de marché réelle.
        </p>
      </div>

      <a className={styles.simulatorCta} href="#estimation">
        Recevoir mon estimation détaillée
        <ArrowRight size={18} aria-hidden="true" />
      </a>
      <p className={styles.simulatorFootnote}>Sans engagement · réponse sous 48 h ouvrées</p>
    </div>
  );
}
