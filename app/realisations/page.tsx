import type { Metadata } from "next";
import { Backdrop } from "@/components/atelier/Backdrop";
import { Navbar } from "@/components/atelier/Navbar";
import { Chatbot } from "@/components/atelier/Chatbot";
import { Work, Process, FinalCta, Footer } from "@/components/atelier/Sections";
import { SplitTitle } from "@/components/atelier/SplitTitle";

const title = "Réalisations web | Atelier Douglas";
const description =
  "Découvrez les sites et projets réalisés par Atelier Douglas : design sur mesure, développement web, refonte et expériences digitales modernes.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <Backdrop />
      <div className="grain-fixed" aria-hidden />
      <div className="relative z-10">
        <Navbar />
        <main>
          <section className="grain border-b border-hairline pt-32 sm:pt-40">
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
              <h1 className="display text-[clamp(3.6rem,9vw,7.5rem)] text-espresso">
                <SplitTitle>Réalisations</SplitTitle>
              </h1>
              <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-walnut">
                Voici une sélection de projets web réalisés pour des entreprises
                et des créateurs. Chacun est conçu sur mesure, pensé pour
                performer et générer des résultats.
              </p>
            </div>
          </section>

          <Work />
          <Process />
          <FinalCta />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}
