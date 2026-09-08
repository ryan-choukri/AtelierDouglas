import type { Metadata } from "next";

import { CarnetPage } from "@/components/carnet-paysage/CarnetPage";

export const metadata: Metadata = {
  title: "Carnet Paysage — Paysagiste & conception de jardins",
  description:
    "Conception et réalisation de jardins, terrasses et aménagements paysagers. Découvrez l’univers Carnet Paysage.",
  alternates: { canonical: "/carnet-paysage" },
};

export default function CarnetPaysagePage() {
  return <CarnetPage />;
}
