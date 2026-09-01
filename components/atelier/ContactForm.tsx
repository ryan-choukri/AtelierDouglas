"use client";

import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { Button, Field, inputClass } from "./primitives";

import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

type Offer = {
  id: "essentiel" | "pro" | "premium";
  name: string;
  description: string;
  price: number;
};

export const OFFERS: Offer[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    description:
      "Un site vitrine complet avec toutes les fonctionnalités essentielles pour présenter votre activité.",
    price: 490,
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "Un site professionnel avec des fonctionnalités avancées pour booster votre activité.",
    price: 690,
  },
  {
    id: "premium",
    name: "Sur mesure",
    description:
      "Un projet sur mesure pour répondre à vos besoins spécifiques et complexes.",
    price: 1280,
  },
];

const DEFAULT_OFFER_ID: Offer["id"] = "pro";

const PROMO_CODES: Record<string, number> = {
  BIENVENUE10: 0.1,
};

const getOffer = function (id: Offer["id"]): Offer {
  return OFFERS.find((o) => o.id === id) ?? OFFERS[1]!;
};

const computeQuote = function (offerId: Offer["id"], discountRate: number) {
  const offer = getOffer(offerId);
  const discount = Math.round(offer.price * discountRate);
  return { offer, discount, total: offer.price - discount };
};

const GROWTH_RATE = 0.2;

type EstimatorInput = {
  clientsPerWeek: number;
  averageBasket: number;
};

type EstimatorResult = {
  newClientsPerWeek: number;
  monthlyGain: number;
  yearlyGain: number;
};

const estimate = function ({
  clientsPerWeek,
  averageBasket,
}: EstimatorInput): EstimatorResult {
  const newClientsPerWeek = Math.round(clientsPerWeek * GROWTH_RATE);
  const monthlyGain = newClientsPerWeek * averageBasket * 4;
  return {
    newClientsPerWeek,
    monthlyGain,
    yearlyGain: monthlyGain * 12,
  };
};

const formatEuro = function (value: number): string {
  return `${new Intl.NumberFormat("fr-FR").format(Math.round(value))}€`;
};

export function ContactForm() {
  const [offerId, setOfferId] = useState<Offer["id"]>(DEFAULT_OFFER_ID);
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string;
    rate: number;
  } | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const quote = computeQuote(offerId, appliedPromo?.rate ?? 0);

  function applyPromo() {
    const code = promoInput.trim().toUpperCase();
    const rate = PROMO_CODES[code];
    if (rate) {
      setAppliedPromo({ code, rate });
      setPromoError(null);
    } else {
      setAppliedPromo(null);
      setPromoError("Code promo invalide.");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Form data:", Object.fromEntries(data.entries()));
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const activity = String(data.get("activity") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const offer = (id: Offer["id"]) =>
      OFFERS.find((offer) => offer.id === id)?.name;

    const next: Errors = {};
    if (!name) next.name = "Merci d'indiquer votre nom.";
    if (!email) next.email = "Merci d'indiquer votre email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "Adresse email invalide.";
    if (!message) next.message = "Dites-nous quelques mots sur votre projet.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");

    try {
      console.log("Form data to be sent:", {
        name,
        email,
        message,
        activity,
        phone,
        offer,
      });
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, activity, phone, offer }),
      });

      if (response.ok) {
        setStatus("success");
        setPromoInput("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="surface-card flex min-h-[420px] flex-col items-center justify-center rounded-[2rem] p-8 text-center">
        <span className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-terracotta shadow-[var(--shadow-glow)]">
          <Check className="h-6 w-6 text-primary-foreground" />
        </span>
        <h3 className="display text-6xl">Merci pour votre demande !</h3>
        <p className="mt-3 max-w-sm text-sm text-muted-foreground">
          Nous revenons vers vous sous 24h ouvrées.
        </p>
        <Button
          variant="ghost"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }
  console.log("Current status:", status);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="surface-card rounded-xl p-5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Votre nom" required htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            className={inputClass}
            placeholder="Jean Dupont"
          />
        </Field>
        <Field label="Email" required htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            className={inputClass}
            placeholder="vous@exemple.fr"
          />
        </Field>
        <Field label="Téléphone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="06 12 34 56 78"
          />
        </Field>
        <Field label="Activité" htmlFor="activity">
          <input
            id="activity"
            name="activity"
            className={inputClass}
            placeholder="Boulangerie, salon, restaurant..."
          />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-2 text-sm font-medium text-foreground">
          Votre Besoin
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {OFFERS.map((offer) => {
            const active = offer.id === offerId;
            return (
              <button
                type="button"
                key={offer.id}
                aria-pressed={active}
                onClick={() => setOfferId(offer.id)}
                className={cn(
                  "flex min-h-[140px] flex-col justify-between cursor-pointer rounded-xl border px-4 py-3 text-center transition-all duration-300",
                  active
                    ? "border-transparent bg-terracotta text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "border-border bg-background/50 text-foreground hover:border-primary/50",
                )}
              >
                <span className="block text-md font-semibold">
                  {offer.name}
                </span>
                <span className="font-serif italic block text-xs opacity-80">
                  {offer.description}
                </span>
                <p
                  className={cn(
                    "text-bottom block text-xs border-t border-hairline",
                    active
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground",
                  )}
                >
                  {offer.id === "premium" ? (
                    <span
                      className={` ${!active ? "text-terracotta" : ""} font-serif  text-sm font-semibold`}
                    >
                      Sur mesure
                    </span>
                  ) : (
                    <>
                      à partir de{" "}
                      <span
                        className={` ${!active ? "text-terracotta" : ""} font-serif text-sm font-semibold`}
                      >
                        {offer.price}€
                      </span>
                    </>
                  )}
                </p>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* <div className="mt-6">
        <label
          htmlFor="promo"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Code promo (facultatif)
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative min-w-0 flex-1">
            <Tag className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="promo"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
              placeholder="BIENVENUE10"
              className={cn(inputClass, "pl-11 uppercase")}
            />
          </div>
          <Button
            type="button"
            variant="ghost"
            onClick={applyPromo}
            className="shrink-0"
          >
            Appliquer
          </Button>
        </div>
        {appliedPromo ? (
          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-primary">
            <Check className="h-3.5 w-3.5" /> Code {appliedPromo.code} appliqué
            — -{Math.round(appliedPromo.rate * 100)}%
          </p>
        ) : promoError ? (
          <p className="mt-2 text-xs text-destructive">{promoError}</p>
        ) : (
          <p className="mt-2 text-xs text-muted-foreground">
            💡 Astuce : essayez{" "}
            <span className="font-mono text-primary">BIENVENUE10</span> pour
            -10%
          </p>
        )}
      </div> */}

      <div className="mt-6 rounded-xl border border-border bg-background/50 p-4">
        {/* <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">
            Formule {quote.offer.name}
          </span>
          <span className="font-medium">{formatEuro(quote.offer.price)}</span>
        </div> */}
        {/* {quote.discount > 0 && (
          <div className="mt-2 flex items-center justify-between gap-4 text-sm text-primary">
            <span>
              Réduction -{Math.round((appliedPromo?.rate ?? 0) * 100)}%
            </span>
            <span>-{formatEuro(quote.discount)}</span>
          </div>
        )} */}
        <div className=" flex items-center justify-between gap-4">
          <span className="text-sm font-semibold">Total estimé</span>
          <span className="font-serif text-2xl text-primary">
            {formatEuro(quote.total)}
          </span>
        </div>
        <div className="italic font-serif mt-3 pt-3 border-t border-border text-sm text-muted-foreground">
          Estimation indicative, devis final après échange.
        </div>
      </div>

      <div className="mt-6">
        <Field
          label="Parlez-nous de votre projet"
          required
          htmlFor="message"
          error={errors.message}
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            className={cn(inputClass, "resize-y")}
            placeholder="Quelques mots sur votre activité, vos objectifs, votre délai..."
          />
        </Field>
      </div>

      <Button
        type="submit"
        size="lg"
        fullWidth
        className="mt-6"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours...
          </>
        ) : status === "error" ? (
          <span>
            Erreur lors de l&apos;envoi, envoyez moi un mail directement !
          </span>
        ) : (
          <>
            Envoyer ma demande <Send className="h-4 w-4" />
          </>
        )}
      </Button>
      {status === "error" && (
        <p className="mt-4 text-center text-sm">
          Mon mail :{" "}
          <a
            href="mailto:contact@atelier-douglas.com"
            className="text-primary underline"
          >
            contact@atelier-douglas.com
          </a>
        </p>
      )}
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Vos infos restent chez nous. Pas de spam, jamais.
      </p>
    </form>
  );
}
