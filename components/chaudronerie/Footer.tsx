"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { EXPERTISES, SECTEURS } from "./data";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foregroundalt">
      <div className="mx-auto max-w-[1320px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-primary-foregroundalt/25 font-display text-sm font-bold">
                MF
              </span>
              <span className="font-display text-lg font-bold tracking-wide">
                METALFORGE
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foregroundalt/55">
              Chaudronnerie industrielle, mécano-soudure et fabrication
              métallique sur mesure pour les industriels français.
            </p>
          </div>

          <FooterCol
            title="Expertises"
            items={EXPERTISES.slice(0, 6)}
            href="#expertises"
          />
          <FooterCol
            title="Secteurs"
            items={SECTEURS.slice(0, 6)}
            href="#secteurs"
          />

          <div>
            <p className="label-tech text-accent">Coordonnées</p>
            <ul className="mt-5 space-y-4 text-sm text-primary-foregroundalt/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foregroundalt/40" />
                Zone industrielle
                <br />
                France
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-foregroundalt/40" />
                <a
                  href="tel:+33000000000"
                  className="hover:text-primary-foregroundalt"
                >
                  +33 (0)0 00 00 00 00
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-foregroundalt/40" />
                <a
                  href="mailto:contact@metalforge.fr"
                  className="hover:text-primary-foregroundalt"
                >
                  contact@metalforge.fr
                </a>
              </li>
            </ul>
            <nav className="mt-8 grid gap-2 text-sm text-primary-foregroundalt/65">
              <a
                href="#realisations"
                className="hover:text-primary-foregroundalt"
              >
                Réalisations
              </a>
              <a href="#moyens" className="hover:text-primary-foregroundalt">
                Moyens industriels
              </a>
              <a
                href="#actualites"
                className="hover:text-primary-foregroundalt"
              >
                Actualités
              </a>
              <a href="#devis" className="hover:text-primary-foregroundalt">
                Demander un devis
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foregroundalt/10 pt-8 text-xs text-primary-foregroundalt/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Metalforge — Tous droits réservés.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-primary-foregroundalt">
              Mentions légales
            </a>
            <a href="#" className="hover:text-primary-foregroundalt">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-primary-foregroundalt">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  href,
}: {
  title: string;
  items: string[];
  href: string;
}) {
  return (
    <div>
      <p className="label-tech text-accent">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-primary-foregroundalt/65">
        {items.map((i) => (
          <li key={i}>
            <a
              href={href}
              className="transition-colors hover:text-primary-foregroundalt"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
