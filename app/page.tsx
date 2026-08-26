import type { Metadata } from "next";
import { Backdrop } from "@/components/atelier/Backdrop";
import { Navbar } from "@/components/atelier/Navbar";
import { Hero } from "@/components/atelier/Hero";
import { Chatbot } from "@/components/atelier/Chatbot";
import {
  Statement,
  Services,
  Work,
  Philosophy,
  Atelier,
  Process,
  FinalCta,
  Footer,
} from "@/components/atelier/Sections";

const title = "Atelier Douglas — Studio web indépendant";
const description =
  "Design, développement et refonte de sites web pour les entreprises. Atelier Douglas est un studio web indépendant français.";

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

export default function Index() {
  return (
    <>
      <Backdrop />
      <div className="grain-fixed" aria-hidden />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Statement />
          <Services />
          <Work />
          <Philosophy />
          {/* <Atelier /> */}
          <Process />
          <FinalCta />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}
