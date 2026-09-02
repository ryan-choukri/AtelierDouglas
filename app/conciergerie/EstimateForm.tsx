"use client";

import { ArrowRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";

import styles from "./conciergerie.module.css";

type FormState = "idle" | "sending" | "success" | "error";

export function EstimateForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      activity: `Maison Hôte — ${data.get("propertyType")} — ${data.get("postalCode")}`,
      offer: data.get("platform"),
      message: `Adresse ou secteur : ${data.get("area")}\nSurface : ${data.get("surface")} m²\nCouchages : ${data.get("sleeping")}\n\n${data.get("message")}`,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className={styles.estimateSuccess} role="status">
        <span><Check size={24} strokeWidth={1.6} /></span>
        <h3>Votre demande est bien partie.</h3>
        <p>
          Nous revenons vers vous sous 48 h ouvrées pour affiner cette première
          estimation avec les caractéristiques réelles du logement.
        </p>
        <button type="button" onClick={() => setState("idle")}>Nouvelle demande</button>
      </div>
    );
  }

  return (
    <form className={styles.estimateForm} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label>
          Nom et prénom *
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Téléphone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          E-mail *
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Code postal
          <input name="postalCode" type="text" inputMode="numeric" />
        </label>
        <label>
          Type de bien
          <select name="propertyType" defaultValue="Appartement">
            <option>Appartement</option>
            <option>Maison</option>
            <option>Studio</option>
            <option>Logement atypique</option>
          </select>
        </label>
        <label>
          Plateforme actuelle
          <select name="platform" defaultValue="Pas encore en ligne">
            <option>Pas encore en ligne</option>
            <option>Airbnb</option>
            <option>Booking.com</option>
            <option>Plusieurs plateformes</option>
          </select>
        </label>
        <label>
          Surface
          <input name="surface" type="number" min="10" max="500" placeholder="m²" />
        </label>
        <label>
          Couchages
          <input name="sleeping" type="number" min="1" max="20" />
        </label>
      </div>

      <label>
        Adresse ou secteur du logement
        <input name="area" type="text" autoComplete="street-address" />
      </label>

      <label>
        Votre projet *
        <textarea
          name="message"
          rows={4}
          placeholder="Décrivez-nous le bien, sa disponibilité et ce que vous souhaitez déléguer…"
          required
        />
      </label>

      <div className={styles.formFooter}>
        <p>Vos informations servent uniquement à vous recontacter au sujet de cette demande.</p>
        <button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Envoi en cours…" : "Recevoir mon estimation"}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      {state === "error" && (
        <p className={styles.formError} role="alert">
          L’envoi n’a pas abouti. Vous pouvez réessayer dans un instant.
        </p>
      )}
    </form>
  );
}
