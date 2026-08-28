import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Atelier Douglas",
  description:
    "Mentions légales et informations relatives au site Atelier Douglas.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-600 transition-colors hover:text-blue-700"
          >
            ← Retour
          </Link>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Mentions légales
          </h1>

          <p className="mt-4 text-gray-500">
            Informations légales relatives au site atelierdouglas.fr
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          {/* Éditeur */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Éditeur du site
            </h2>

            <div className="mt-4 space-y-2">
              <p>
                Le site{" "}
                <strong className="font-semibold text-gray-900">
                  atelierdouglas.fr
                </strong>{" "}
                est édité par :
              </p>

              <p>
                <strong>Nom commercial :</strong> Atelier Douglas
              </p>

              <p>
                <strong>Entrepreneur :</strong> Ryan Rouag
              </p>

              <p>
                <strong>Statut juridique :</strong> Entrepreneur individuel —
                Micro-entrepreneur
              </p>

              <p>
                <strong>Immatriculation :</strong> Registre national des
                entreprises (RNE) — sur demande
              </p>

              <p>
                <strong>Adresse :</strong> 123 Rue des Fleurs, 75000 Paris,
                France
              </p>

              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:atelierdouglas.web@gmail.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  atelierdouglas.web@gmail.com
                </a>
              </p>

              {/*
                Si tu as un numéro de TVA intracommunautaire :
                
                <p>
                  <strong>TVA intracommunautaire :</strong> FRXXXXXXXXXXX
                </p>

                Si tu n'es pas redevable de la TVA, ne mets pas de faux numéro ici.
              */}
            </div>
          </section>

          {/* Directeur publication */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Directeur de la publication
            </h2>

            <p className="mt-4">
              Le directeur de la publication est <strong>Ryan Rouag</strong>, en
              qualité d&apos;entrepreneur individuel exploitant Atelier Douglas.
            </p>
          </section>

          {/* Hébergeur */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Hébergement
            </h2>

            <p className="mt-4">Le site est hébergé par :</p>

            <div className="mt-3 space-y-1">
              <p>
                <strong>Netlify, Inc.</strong>
              </p>

              <p>
                101 2nd Street
                <br />
                San Francisco, CA 94105
                <br />
                États-Unis
              </p>

              <p>
                Email :{" "}
                <a
                  href="mailto:support@netlify.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  support@netlify.com
                </a>
              </p>

              <a
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700"
              >
                www.netlify.com
                <ArrowUpRight size={15} />
              </a>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Propriété intellectuelle
            </h2>

            <p className="mt-4">
              Sauf mention contraire, l&apos;ensemble des éléments présents sur
              ce site, notamment les textes, créations graphiques, interfaces,
              éléments visuels, logos, illustrations, photographies, vidéos,
              animations et code, est la propriété d&apos;Atelier Douglas ou est
              utilisé avec l&apos;autorisation de ses titulaires respectifs.
            </p>

            <p className="mt-3">
              Toute reproduction, représentation, adaptation, modification ou
              exploitation, totale ou partielle, de ces éléments sans
              autorisation préalable écrite est interdite, sauf dans les cas
              prévus par la législation applicable.
            </p>

            <p className="mt-3">
              Les marques, logos, photographies et autres éléments appartenant à
              des clients, partenaires ou tiers demeurent la propriété de leurs
              titulaires respectifs.
            </p>
          </section>

          {/* Responsabilité */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Responsabilité
            </h2>

            <p className="mt-4">
              Atelier Douglas s&apos;efforce de fournir sur ce site des
              informations aussi exactes et à jour que possible. Toutefois,
              aucune garantie ne peut être donnée quant à l&apos;exactitude,
              l&apos;exhaustivité ou l&apos;actualité permanente des
              informations publiées.
            </p>

            <p className="mt-3">
              Atelier Douglas ne pourra être tenu responsable des conséquences
              résultant de l&apos;utilisation des informations présentes sur le
              site ou de l&apos;indisponibilité temporaire de celui-ci, sous
              réserve des dispositions légales impératives applicables.
            </p>
          </section>

          {/* Liens externes */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Liens externes
            </h2>

            <p className="mt-4">
              Le site peut contenir des liens vers des sites ou services édités
              par des tiers. Atelier Douglas n&apos;exerce aucun contrôle sur
              leur contenu et ne peut être tenu responsable de leur
              disponibilité, de leur contenu ou de leurs pratiques.
            </p>
          </section>

          {/* Données personnelles */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Données personnelles
            </h2>

            <p className="mt-4">
              Atelier Douglas peut être amené à traiter des données
              personnelles, notamment lorsque vous utilisez un formulaire de
              contact ou contactez directement l&apos;entreprise.
            </p>

            <p className="mt-3">
              Ces données sont utilisées uniquement pour répondre aux demandes,
              assurer les échanges commerciaux et, le cas échéant, exécuter les
              prestations demandées.
            </p>

            <p className="mt-3">
              Conformément au règlement général sur la protection des données
              (RGPD) et à la loi Informatique et Libertés, vous disposez
              notamment de droits d&apos;accès, de rectification,
              d&apos;effacement, de limitation et d&apos;opposition concernant
              vos données personnelles.
            </p>

            <p className="mt-3">
              Vous pouvez exercer vos droits en écrivant à{" "}
              <a
                href="mailto:atelierdouglas.web@gmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                atelierdouglas.web@gmail.com
              </a>
              .
            </p>

            <p className="mt-3">
              Vous disposez également du droit d&apos;introduire une réclamation
              auprès de la Commission nationale de l&apos;informatique et des
              libertés (CNIL).
            </p>

            <p className="mt-3">
              Pour connaître précisément les traitements réalisés, leurs
              finalités, bases juridiques et durées de conservation, consultez
              notre{" "}
              <Link
                href="/politique-confidentialite"
                className="text-blue-600 hover:text-blue-700"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">Cookies</h2>

            <p className="mt-4">
              Le site peut utiliser des cookies ou technologies similaires
              strictement nécessaires à son fonctionnement.
            </p>

            <p className="mt-3">
              Si des outils de mesure d&apos;audience, publicitaires ou autres
              traceurs nécessitant un consentement sont utilisés, ils ne doivent
              être déposés qu&apos;après avoir recueilli le consentement de
              l&apos;utilisateur lorsque celui-ci est requis par la
              réglementation applicable.
            </p>
          </section>

          {/* Droit applicable */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Droit applicable
            </h2>

            <p className="mt-4">
              Le présent site et ses mentions légales sont soumis au droit
              français, sous réserve des règles impératives éventuellement
              applicables.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>

            <p className="mt-4">
              Pour toute question concernant le site ou les présentes mentions
              légales :
            </p>

            <p className="mt-3">
              <a
                href="mailto:atelierdouglas.web@gmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                atelierdouglas.web@gmail.com
              </a>
            </p>
          </section>

          {/* Update */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : 28 août 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
