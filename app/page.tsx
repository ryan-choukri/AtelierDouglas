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
  About,
  FinalCta,
  Footer,
} from "@/components/atelier/Sections";

const title = "Création & refonte de sites web | Atelier Douglas";
const description =
  "Atelier Douglas crée et modernise les sites web d'entreprises : design sur mesure, performance, mobile et référencement local.";
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
          {/* <Services /> */}
          <Work />
          <Philosophy />
          {/* <Atelier /> */}
          <Process />
          <About />
          <FinalCta />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}
