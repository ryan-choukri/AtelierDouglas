import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — Atelier Douglas",
  description:
    "Mentions légales et informations légales d'Atelier Douglas, studio web indépendant.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-24">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
          >
            ← Retour
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Mentions Légales
          </h1>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Informations légales
            </h2>
            <p className="mt-4">
              <strong>Nom de l&apos;entreprise :</strong> Atelier Douglas
            </p>
            <p>
              <strong>Statut :</strong> Entrepreneur individuel /
              Microentrepreneur
            </p>
            <p>
              <strong>Adresse :</strong> France
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
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Responsabilité
            </h2>
            <p className="mt-4">
              Le propriétaire du site s&apos;efforce de fournir des informations
              précises et à jour sur ce site. Cependant, il ne peut pas garantir
              l&apos;exactitude ou l&apos;exhaustivité du contenu et ne sera pas
              responsable des erreurs, omissions ou inexactitudes.
            </p>
            <p className="mt-3">
              Les services et informations fournis sur ce site sont fournis à
              titre informatif uniquement. Aucune information sur ce site ne
              constitue un conseil professionnel.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Propriété intellectuelle
            </h2>
            <p className="mt-4">
              Tout le contenu de ce site, y compris les textes, graphiques,
              logos, images et logiciels, est la propriété d&apos;Atelier
              Douglas ou de ses fournisseurs de contenu et est protégé par les
              lois internationales sur les droits d&apos;auteur.
            </p>
            <p className="mt-3">
              Aucune partie de ce site ne peut être reproduite, distribuée ou
              transmise sous quelque forme ou par quelque moyen que ce soit,
              sans la permission écrite préalable d&apos;Atelier Douglas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Limitation de responsabilité
            </h2>
            <p className="mt-4">
              Atelier Douglas ne sera pas responsable de tout dommage direct,
              indirect, accidentel, spécial ou consécutif découlant de
              l&apos;utilisation de ce site ou du contenu, y compris, mais sans
              s&apos;y limiter, la perte de profits, les interruptions
              d&apos;activité ou la perte de données.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Liens externes
            </h2>
            <p className="mt-4">
              Ce site peut contenir des liens vers des sites externes. Atelier
              Douglas n&apos;est pas responsable du contenu, de
              l&apos;exactitude ou des pratiques de ces sites externes.
              L&apos;utilisation de liens vers des sites externes se fait aux
              risques et périls de l&apos;utilisateur.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Données personnelles
            </h2>
            <p className="mt-4">
              Atelier Douglas respecte la confidentialité de ses visiteurs. Les
              données personnelles collectées sont utilisées uniquement à des
              fins légitimes et ne seront pas partagées avec des tiers sans
              consentement.
            </p>
            <p className="mt-3">
              Pour plus d&apos;informations, veuillez consulter notre politique
              de confidentialité.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Modification des conditions
            </h2>
            <p className="mt-4">
              Atelier Douglas se réserve le droit de modifier ces mentions
              légales à tout moment. Les modifications seront publiées sur cette
              page, et l&apos;utilisation continue du site après les
              modifications constitue une acceptation des nouvelles conditions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
            <p className="mt-4">
              Pour toute question concernant ces mentions légales, veuillez nous
              contacter à :
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

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
