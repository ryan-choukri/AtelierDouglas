"use client";

import { FormEvent, useState } from "react";

import styles from "@/app/carnet-paysage/carnet-paysage.module.css";

type FormState = "idle" | "sending" | "success" | "error";

export function CarnetContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          activity: "Carnet Paysage — démonstration éditoriale",
          offer: data.get("projectType"),
          message: data.get("message"),
        }),
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
      <div className={styles.contactSuccess} role="status">
        <p className={styles.kicker}>Message reçu</p>
        <h3>Le projet commence ici.</h3>
        <p>Nous revenons vers vous sous 48 heures ouvrées.</p>
        <button type="button" onClick={() => setState("idle")}>Écrire un autre message</button>
      </div>
    );
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label>
        <span>Votre nom *</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Votre e-mail *</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Votre téléphone</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        <span>Votre projet</span>
        <select name="projectType" defaultValue="Jardin complet">
          <option>Jardin complet</option>
          <option>Terrasse & lieux de vie</option>
          <option>Plantations</option>
          <option>Cour ou patio</option>
        </select>
      </label>
      <label className={styles.contactMessage}>
        <span>Parlez-nous de votre terrain *</span>
        <textarea name="message" rows={3} required />
      </label>
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Envoi en cours…" : "Envoyer le carnet"} <span aria-hidden="true">→</span>
      </button>
      {state === "error" && (
        <p className={styles.formError} role="alert">L’envoi n’a pas abouti. Réessayez dans quelques instants.</p>
      )}
    </form>
  );
}
