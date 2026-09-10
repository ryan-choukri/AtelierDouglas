import type { Metadata } from "next";
import { PergolasExperience } from "./PergolasExperience";
import { ProspectCTA } from "@/components/atelier/ProspectCTA";

export const metadata: Metadata = {
  title: "Altaïr Extérieurs | Concept de site vitrine",
  description:
    "Concept de site vitrine premium pour une maison spécialisée dans les clôtures, portails et pergolas sur mesure.",
  openGraph: {
    title: "Altaïr Extérieurs — Des extérieurs plus beaux pour demain",
    description:
      "Projet de démonstration : identité, UI et expérience digitale pour une maison d’aménagement extérieur.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altaïr Extérieurs",
    description: "Concept de site vitrine & direction artistique.",
  },
};

export default function PergolasPage() {
  return (
    <>
      <ProspectCTA
        pageName="pergolas"
        pageUrl="https://atelierdouglas.fr/pergolas"
      />
      <PergolasExperience />
    </>
  );
}
