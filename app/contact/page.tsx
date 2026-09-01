import type { Metadata } from "next";
import { Backdrop } from "@/components/atelier/Backdrop";
import { Navbar } from "@/components/atelier/Navbar";
import { Chatbot } from "@/components/atelier/Chatbot";
import { ContactForm } from "@/components/atelier/ContactForm";
import { Footer } from "@/components/atelier/Sections";

const title = "Contact | Atelier Douglas";
const description =
  "Parlez de votre projet web avec Atelier Douglas. Création, refonte ou amélioration de site internet avec une approche simple, moderne et sur mesure.";

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

export default function ContactPage() {
  return (
    <>
      <Backdrop />
      <div className="grain-fixed" aria-hidden />
      <div className="relative z-10">
        <Navbar />
        <main>
          <section className="grain bg-terracotta">
            <div className="grid grid-cols-12 mx-auto max-w-7xl px-2 py-24 sm:px-6 md:py-32">
              <div className="col-span-12 md:col-span-5 px-3 sm:px-5 pt-8 sm:pt-12">
                <h1 className="display text-[clamp(3.6rem,9vw,7.5rem)] text-ink">
                  Parlons de votre projet
                </h1>
                <p className="mb-12 sm:mb-16 mt-8 max-w-lg sm:text-[1.0625rem] text-[0.9rem] leading-relaxed text-ink/80">
                  Vous avez une idée de site, une refonte en tête ou simplement
                  envie d'améliorer votre présence web ?
                  <br />
                  Envoyez-moi un message par mail ou remplissez le formulaire
                  ci-dessous. Je vous répondrai sous 24h.
                  <br />
                  <a
                    href="mailto:atelierdouglas.web@gmail.com"
                    className="border-b border-ink/40 pb-1 text-ink transition-colors hover:border-ink"
                  >
                    atelierdouglas.web@gmail.com
                  </a>
                </p>
              </div>

              <div className="col-span-12 md:col-span-7">
                <ContactForm />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}
