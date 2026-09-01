import type { Metadata } from "next";
import { Backdrop } from "@/components/atelier/Backdrop";
import { Navbar } from "@/components/atelier/Navbar";
import { Chatbot } from "@/components/atelier/Chatbot";
import {
  Services,
  FinalCta,
  Footer,
  Philosophy,
} from "@/components/atelier/Sections";
import { SplitTitle } from "@/components/atelier/SplitTitle";

const title = "Services de création de site web | Atelier Douglas";
const description =
  "Création et refonte de sites vitrines, design sur mesure, responsive, optimisation des performances et référencement local avec Atelier Douglas.";

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

export default function ServicesPage() {
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
                <SplitTitle>Services web</SplitTitle>
              </h1>
              <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-walnut">
                Je crée, rénove et maintiens des sites web modernes. Chaque
                projet est pensé pour améliorer votre visibilité, votre
                conversion et l&apos;expérience de vos clients.
              </p>
            </div>
          </section>

          <Philosophy />
          <Services />
          <FinalCta />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}
