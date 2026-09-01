import type { Metadata } from "next";
import { Backdrop } from "@/components/atelier/Backdrop";
import { Navbar } from "@/components/atelier/Navbar";
import { Chatbot } from "@/components/atelier/Chatbot";
import {
  About,
  Process,
  FinalCta,
  Footer,
} from "@/components/atelier/Sections";

const title = "À propos | Atelier Douglas";
const description =
  "Découvrez Atelier Douglas, studio web indépendant spécialisé dans la création de sites modernes, rapides et pensés pour mettre en valeur les entreprises.";

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

export default function AboutPage() {
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
                À propos
              </h1>
              <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-walnut">
                Découvrez qui se cache derrière Atelier Douglas, mon approche du
                web et pourquoi je fais ce métier différemment.
              </p>
            </div>
          </section>

          <About />
          <Process />
          <FinalCta />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}
