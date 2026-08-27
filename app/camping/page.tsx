import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Car,
  CreditCard,
  Clock,
  Dog,
  Mail,
  MapPin,
  Phone,
  Star,
  Sun,
  TreePine,
  Waves,
  Wifi,
  Accessibility,
  CalendarDays,
} from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";

import { Gallery, type GalleryPhoto } from "@/components/camping/Gallery";
import { Navbar } from "@/components/camping/Navbar";
import { Reveal } from "@/components/camping/Reveal";
import { NatureTexture } from "@/components/camping/NatureTexture";
import { BackgroundDecor } from "@/components/camping/BackgroundDecor";
import { BOOKING_URL, CAMPING } from "@/lib/camping";

import heroImg from "@/assets/hero-camping.jpg";
import mobilHomeImg from "@/assets/mobil-home.jpg";
import emplacementImg from "@/assets/emplacement.jpg";
import insoliteImg from "@/assets/insolite.jpg";
import piscineImg from "@/assets/piscine.jpg";
import enfantsImg from "@/assets/enfants.jpg";
import partagerImg from "@/assets/partager.jpg";
import natureImg from "@/assets/nature.jpg";
import sunsetImg from "@/assets/sunset.jpg";
import villageImg from "@/assets/village.jpg";
import lacImg from "@/assets/lac.jpg";
import randonneeImg from "@/assets/randonnee.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import villeImg from "@/assets/ville.jpg";

import "./style.css";

const TITLE =
  "Camping Les Grands Chênes — Camping familial avec piscine en Dordogne";
const DESCRIPTION =
  "Camping familial avec piscine à Vitrac, à 8 min de Sarlat, au cœur de la Dordogne. Mobil-homes, emplacements ombragés et hébergements insolites au bord de la nature.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: "/",
  },
};

const REASSURANCE = [
  { icon: Waves, label: "Piscine chauffée" },
  { icon: TreePine, label: "Pleine nature" },
  { icon: Baby, label: "Familial" },
  { icon: Dog, label: "Animaux acceptés" },
];

const STATS = [
  { value: "120", label: "emplacements ombragés" },
  { value: "45", label: "hébergements locatifs" },
  { value: "8 min", label: "de Sarlat-la-Canéda" },
  { value: "4,6/5", label: "avis voyageurs" },
];

const LODGINGS = [
  {
    title: "Mobil-homes",
    image: mobilHomeImg,
    alt: "Mobil-home en bois avec terrasse au camping en Dordogne",
    text: "Tout le confort pour profiter pleinement de vos vacances.",
  },
  {
    title: "Emplacements",
    image: emplacementImg,
    alt: "Emplacement de camping ombragé avec tente et caravane",
    text: "De grands emplacements pour retrouver le plaisir du camping traditionnel.",
  },
  {
    title: "Hébergements insolites",
    image: insoliteImg,
    alt: "Cabane en bois et tente lodge éclairées à la tombée du jour",
    text: "Une autre façon de dormir au plus près de la nature.",
  },
];

const EXPERIENCES = [
  {
    title: "Se rafraîchir",
    text: "Profitez de la piscine chauffée et de sa terrasse plein sud, du matin au coucher du soleil.",
    image: piscineImg,
    alt: "Piscine extérieure chauffée du camping entourée d'arbres",
    span: "lg:col-span-7",
    ratio: "aspect-[16/11]",
  },
  {
    title: "Pour les enfants",
    text: "Des espaces pour jouer, courir et se faire de nouveaux copains en toute liberté.",
    image: enfantsImg,
    alt: "Enfants qui courent sur la pelouse du camping en été",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5] lg:aspect-[4/5]",
  },
  {
    title: "Partager",
    text: "Des moments simples autour d'un repas, d'une soirée ou d'un apéritif entre voisins de camp.",
    image: partagerImg,
    alt: "Grande tablée conviviale sous des guirlandes lumineuses au camping",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5] lg:aspect-[4/5]",
  },
  {
    title: "Respirer",
    text: "Chênes centenaires, sentiers et rivière : un environnement naturel pour ralentir vraiment.",
    image: natureImg,
    alt: "Chemin forestier au lever du soleil près du camping",
    span: "lg:col-span-7",
    ratio: "aspect-[16/11]",
  },
];

const AROUND = [
  {
    title: "Sarlat-la-Canéda",
    time: "À 8 minutes",
    text: "Ville médiévale, marchés de producteurs et ruelles de pierre dorée.",
    image: villeImg,
    alt: "Ville médiévale du Périgord vue du ciel",
  },
  {
    title: "La Dordogne & ses plages",
    time: "À 5 minutes",
    text: "Baignade, canoë et paresse au bord de l'eau sur les plages de la rivière.",
    image: lacImg,
    alt: "Plage de sable au bord d'une rivière avec canoës",
  },
  {
    title: "Vallée de la Vézère",
    time: "À 25 minutes",
    text: "Sentiers balisés, grottes préhistoriques et panoramas sur la vallée.",
    image: randonneeImg,
    alt: "Sentier de randonnée balisé dans la campagne périgourdine",
  },
  {
    title: "Villages de caractère",
    time: "À 15 minutes",
    text: "La Roque-Gageac, Domme, Beynac : les incontournables du Périgord Noir.",
    image: villageImg,
    alt: "Ruelle fleurie d'un village de caractère du Périgord",
  },
];

const GALLERY: GalleryPhoto[] = [
  {
    src: piscineImg,
    alt: "Piscine du camping en Dordogne",
    className: "col-span-2 aspect-[16/10]",
  },
  {
    src: mobilHomeImg,
    alt: "Mobil-home avec terrasse",
    className: "aspect-[3/4]",
  },
  {
    src: emplacementImg,
    alt: "Emplacement ombragé pour tente",
    className: "aspect-[3/4]",
  },
  {
    src: enfantsImg,
    alt: "Enfants jouant au camping",
    className: "aspect-square",
  },
  {
    src: natureImg,
    alt: "Forêt aux abords du camping",
    className: "aspect-square",
  },
  {
    src: restaurantImg,
    alt: "Terrasse du restaurant du camping le soir",
    className: "col-span-2 aspect-[16/10]",
  },
  {
    src: sunsetImg,
    alt: "Coucher de soleil sur la vallée",
    className: "col-span-2 aspect-[16/10]",
  },
  {
    src: insoliteImg,
    alt: "Hébergement insolite en forêt",
    className: "aspect-square",
  },
  {
    src: partagerImg,
    alt: "Soirée conviviale au camping",
    className: "aspect-square",
  },
];

const REVIEWS = [
  {
    text: "Un camping calme, familial et très agréable. Les enfants ont adoré la piscine et nous avons passé une excellente semaine.",
    author: "Sophie M.",
    origin: "Séjour en famille, juillet",
  },
  {
    text: "Emplacements immenses et vraiment ombragés, accueil aux petits soins. On se sent tout de suite en vacances.",
    author: "Julien & Claire",
    origin: "Séjour en couple, juin",
  },
  {
    text: "Idéalement situé pour visiter Sarlat et la vallée. Nous reviendrons sans hésiter l'an prochain.",
    author: "Famille Lemoine",
    origin: "Séjour en famille, août",
  },
];

const PRACTICAL = [
  {
    icon: CalendarDays,
    title: "Ouverture",
    text: "Du 4 avril au 27 septembre 2026",
  },
  { icon: Clock, title: "Réception", text: "9h – 12h30 et 14h – 19h, 7j/7" },
  { icon: Wifi, title: "Wi-Fi", text: "Gratuit à la réception et au bar" },
  { icon: Dog, title: "Animaux", text: "Acceptés, tenus en laisse (3 €/nuit)" },
  { icon: Car, title: "Parking", text: "Gratuit, 1 véhicule par emplacement" },
  {
    icon: Accessibility,
    title: "Accessibilité",
    text: "Sanitaires et locatifs PMR",
  },
  {
    icon: CreditCard,
    title: "Paiements",
    text: "CB, espèces, chèques vacances ANCV",
  },
  {
    icon: Sun,
    title: "Arrivées / départs",
    text: "Arrivée dès 15h · départ avant 10h",
  },
];

const DISTANCES = [
  { place: "Sarlat-la-Canéda", time: "8 min" },
  { place: "La Roque-Gageac", time: "12 min" },
  { place: "A89, sortie Périgueux", time: "45 min" },
  { place: "Gare de Sarlat", time: "10 min" },
];

function Page() {
  return (
    <div
      id="top"
      className="bg-background camping-site relative overflow-hidden"
    >
      <BackgroundDecor />
      <Script
        id="campground-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Campground",
            name: CAMPING.name,
            description: DESCRIPTION,
            address: {
              "@type": "PostalAddress",
              streetAddress: "1240 route des Chênes",
              addressLocality: "Vitrac",
              postalCode: "24200",
              addressRegion: "Dordogne",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 44.8402,
              longitude: 1.2337,
            },
            telephone: CAMPING.phone,
            email: CAMPING.email,
            priceRange: "€€",
            petsAllowed: true,
            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Piscine chauffée",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Wi-Fi gratuit",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Animaux acceptés",
                value: true,
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: CAMPING.rating,
              reviewCount: CAMPING.reviews,
              bestRating: 5,
            },
          }),
        }}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden">
          <Image
            src={heroImg}
            alt="Vue aérienne du Camping Les Grands Chênes au coucher du soleil en Dordogne"
            className="absolute inset-0 h-full w-full object-cover"
            priority
            quality={85}
            fill
          />
          <div className="overlay-scrim absolute inset-0" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8 sm:pb-20">
            <Reveal className="max-w-3xl text-primary-foreground">
              <p className="eyebrow text-primary-foreground/80">
                Bienvenue au cœur de {CAMPING.region}
              </p>
              <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
                Des vacances au grand air, simplement.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Un camping familial au cœur de la nature, entre détente,
                découvertes et moments à partager.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#hebergements"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Découvrir les hébergements
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={BOOKING_URL}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/50 px-7 py-4 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-primary-foreground/10"
                >
                  Réserver mon séjour
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-primary-foreground/85">
                {REASSURANCE.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon className="size-4" strokeWidth={1.5} />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <a
              href="#le-camping"
              className="mt-14 inline-flex items-center gap-2 text-xs tracking-[0.24em] text-primary-foreground/70 uppercase transition-colors hover:text-primary-foreground"
            >
              Découvrez le camping <span aria-hidden>↓</span>
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section
          id="le-camping"
          className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
        >
          <NatureTexture variant={1} />
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Le camping</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
                Ici, les vacances prennent leur temps.
              </h2>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  À quelques kilomètres de {CAMPING.city}, le {CAMPING.name}{" "}
                  vous accueille dans un cadre naturel et convivial, sous les
                  chênes centenaires du Périgord Noir.
                </p>
                <p>
                  Que vous veniez en famille, en couple ou entre amis, profitez
                  d&apos;un séjour où se mélangent nature, détente et
                  découvertes.
                </p>
              </div>
              <a
                href="#experience"
                className="group mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-semibold transition-colors hover:border-foreground"
              >
                Découvrir l&apos;expérience
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={emplacementImg}
                    alt="Emplacement de camping ombragé sous les grands chênes"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] hover:scale-105"
                  />
                </div>
                <div className="col-span-2 mt-12 space-y-4">
                  <div className="overflow-hidden rounded-3xl shadow-soft">
                    <Image
                      src={piscineImg}
                      alt="Piscine chauffée du camping familial en Dordogne"
                      className="aspect-square w-full object-cover transition-transform duration-[900ms] hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl shadow-soft">
                    <Image
                      src={restaurantImg}
                      alt="Terrasse conviviale du restaurant du camping"
                      className="aspect-square w-full object-cover transition-transform duration-[900ms] hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-12 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-primary sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* HEBERGEMENTS */}
        <section id="hebergements" className="relative bg-cream py-24 sm:py-32">
          <NatureTexture variant={3} />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-muted-foreground">Hébergements</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
                À chacun sa façon de camper
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choisissez l&apos;hébergement qui vous ressemble.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {LODGINGS.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                      />
                    </div>
                    <div className="p-7">
                      <h3 className="font-display text-2xl">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                      <a
                        href={BOOKING_URL}
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                      >
                        Découvrir
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
        >
          <NatureTexture variant={2} />
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">L&apos;expérience</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
              Tout est là pour profiter.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {EXPERIENCES.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 100}
                className={item.span}
              >
                <article className="group relative h-full overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className={`w-full object-cover ${item.ratio} transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground sm:p-9">
                    <h3 className="font-display text-2xl sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/85">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* STORYTELLING */}
        <section className="relative overflow-hidden">
          <Image
            src={sunsetImg}
            alt="Coucher de soleil sur la vallée de la Dordogne"
            className="h-[70vh] min-h-[460px] w-full object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-forest-deep/55" />
          <div className="absolute inset-0 flex items-center">
            <Reveal className="mx-auto w-full max-w-4xl px-5 text-center text-primary-foreground sm:px-8">
              <h2 className="font-display text-3xl leading-[1.15] sm:text-5xl">
                Plus qu&apos;un camping, votre point de départ pour découvrir le
                Périgord.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
                Villages, randonnées, marchés, patrimoine et paysages : partez à
                la découverte des incontournables autour du camping.
              </p>
              <a
                href="#alentours"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-semibold text-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Découvrir les alentours
                <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ALENTOURS */}
        <section
          id="alentours"
          className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
        >
          <NatureTexture variant={3} />
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Aux alentours</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
              Que faire autour du camping ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Le Périgord Noir à portée de vélo, de canoë ou de voiture.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {AROUND.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 100}>
                <article className="group">
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="aspect-[5/4] w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl">{item.title}</h3>
                    <span className="text-sm whitespace-nowrap text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* GALERIE */}
        <section id="galerie" className="relative bg-cream py-24 sm:py-32">
          <NatureTexture variant={1} />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow text-muted-foreground">Galerie</p>
                <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
                  Un aperçu de vos prochaines vacances
                </h2>
              </div>
              <a
                href="#galerie"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Voir toute la galerie
                <ArrowUpRight className="size-4" />
              </a>
            </Reveal>

            <Reveal delay={100} className="mt-12">
              <Gallery photos={GALLERY} />
            </Reveal>
          </div>
        </section>

        {/* AVIS */}
        <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <NatureTexture variant={2} />
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Avis clients</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
              Ils sont venus. Ils racontent.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <Reveal key={review.author} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-shadow duration-500 hover:shadow-soft">
                  <div
                    className="flex gap-1 text-accent"
                    aria-label="Note 5 sur 5"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-current"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed">
                    « {review.text} »
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      — {review.author}
                    </span>
                    <span className="block">{review.origin}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-wrap items-center gap-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-display text-2xl text-foreground">
                4,6/5
              </span>{" "}
              sur Google · {CAMPING.reviews} avis
            </p>
            <a
              href="https://www.google.com/maps"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Voir tous les avis
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </section>

        {/* INFOS PRATIQUES */}
        <section
          id="infos-pratiques"
          className="relative bg-cream py-24 sm:py-32"
        >
          <NatureTexture variant={3} />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-muted-foreground">Préparer sa venue</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
                Informations pratiques
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <Reveal className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {PRACTICAL.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-soft">
                  <h3 className="font-display text-2xl">{CAMPING.name}</h3>
                  <ul className="mt-6 space-y-4 text-sm text-primary-foreground/85">
                    <li className="flex gap-3">
                      <MapPin
                        className="mt-0.5 size-4 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span>{CAMPING.address}</span>
                    </li>
                    <li className="flex gap-3">
                      <Phone
                        className="mt-0.5 size-4 shrink-0"
                        strokeWidth={1.5}
                      />
                      <a
                        href={`tel:${CAMPING.phone}`}
                        className="hover:underline"
                      >
                        {CAMPING.phoneDisplay}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Mail
                        className="mt-0.5 size-4 shrink-0"
                        strokeWidth={1.5}
                      />
                      <a
                        href={`mailto:${CAMPING.email}`}
                        className="break-all hover:underline"
                      >
                        {CAMPING.email}
                      </a>
                    </li>
                  </ul>
                  <a
                    href={`mailto:${CAMPING.email}`}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Nous contacter
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CARTE */}
        <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <NatureTexture variant={1} />
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Localisation</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
                Au cœur du Périgord Noir
              </h2>
              <p className="mt-4 text-muted-foreground">
                Entre Sarlat et la rivière Dordogne, à l&apos;écart des routes
                passantes.
              </p>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {DISTANCES.map((d) => (
                  <li
                    key={d.place}
                    className="flex items-center justify-between py-4 text-sm"
                  >
                    <span>{d.place}</span>
                    <span className="text-muted-foreground">{d.time}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={120}
              className="overflow-hidden rounded-3xl shadow-soft"
            >
              <iframe
                title="Carte de localisation du Camping Les Grands Chênes"
                src="https://www.openstreetmap.org/export/embed.html?bbox=1.1737%2C44.8002%2C1.2937%2C44.8802&layer=mapnik&marker=44.8402%2C1.2337"
                loading="lazy"
                className="h-[380px] w-full border-0 sm:h-[460px]"
              />
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden">
          <Image
            src={sunsetImg}
            alt="Soirée d'été au camping en Dordogne"
            className="h-[80vh] min-h-[520px] w-full object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-forest-deep/60" />
          <div className="absolute inset-0 flex items-center">
            <Reveal className="mx-auto w-full max-w-3xl px-5 text-center text-primary-foreground sm:px-8">
              <h2 className="font-display text-3xl leading-[1.15] sm:text-5xl">
                Et si vos prochaines vacances commençaient ici ?
              </h2>
              <p className="mt-6 text-base text-primary-foreground/85 sm:text-lg">
                Découvrez nos disponibilités et préparez votre séjour au{" "}
                {CAMPING.name}.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={BOOKING_URL}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Voir les disponibilités
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={`mailto:${CAMPING.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/50 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Nous contacter
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Page;

function Footer() {
  const columns = [
    {
      title: "Camping",
      links: [
        { label: "Le camping", href: "#le-camping" },
        { label: "Hébergements", href: "#hebergements" },
        { label: "Activités", href: "#experience" },
        { label: "Galerie", href: "#galerie" },
      ],
    },
    {
      title: "Votre séjour",
      links: [
        { label: "Tarifs", href: BOOKING_URL },
        { label: "Disponibilités", href: BOOKING_URL },
        { label: "Infos pratiques", href: "#infos-pratiques" },
        { label: "FAQ", href: "#infos-pratiques" },
      ],
    },
    {
      title: "Découvrir",
      links: [
        { label: "Que faire autour", href: "#alentours" },
        { label: "Le Périgord Noir", href: "#alentours" },
        { label: "Activités nature", href: "#experience" },
      ],
    },
  ];

  return (
    <footer className="bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)_1.2fr]">
          <div>
            <p className="font-display text-2xl text-gray-900">
              {CAMPING.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">
              Camping familial avec piscine en Dordogne, à 8 minutes de Sarlat,
              au cœur du Périgord Noir.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-gray-700">{col.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-600">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="eyebrow text-gray-700">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href={`tel:${CAMPING.phone}`}
                  className="hover:text-gray-900"
                >
                  {CAMPING.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CAMPING.email}`}
                  className="break-all hover:text-gray-900"
                >
                  {CAMPING.email}
                </a>
              </li>
              <li className="text-gray-600">{CAMPING.address}</li>
            </ul>
            <div className="mt-5 flex gap-4 text-sm text-gray-600">
              <a href="https://instagram.com" className="hover:text-gray-900">
                Instagram
              </a>
              <a href="https://facebook.com" className="hover:text-gray-900">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 pt-8 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {CAMPING.name}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="/mention-legal" className="hover:text-gray-900">
              Mentions légales
            </a>
            <a href="/mention-legal" className="hover:text-gray-900">
              Politique de confidentialité
            </a>
            <a href="/mention-legal" className="hover:text-gray-900">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
