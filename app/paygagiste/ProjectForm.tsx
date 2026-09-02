"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";

import styles from "./paygagiste.module.css";

type FormState = "idle" | "sending" | "success" | "error";

export function ProjectForm() {
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
      activity: `Carnet Paysage — ${data.get("projectType")} — ${data.get("postalCode")}`,
      offer: data.get("budget"),
      message: data.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className={styles.formSuccess} role="status">
        <Check size={32} strokeWidth={1.4} />
        <h3>Votre projet est bien arrivé.</h3>
        <p>Nous vous rappelons sous 48 h ouvrées pour en parler simplement.</p>
        <button type="button" onClick={() => setState("idle")}>
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.projectForm} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label>
          Votre nom *
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Votre téléphone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <div className={styles.formRow}>
        <label>
          Votre e-mail *
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Code postal
          <input name="postalCode" type="text" inputMode="numeric" />
        </label>
      </div>
      <div className={styles.formRow}>
        <label>
          Type de projet
          <select name="projectType" defaultValue="Jardin complet">
            <option>Jardin complet</option>
            <option>Terrasse & allées</option>
            <option>Plantations</option>
            <option>Clôture & intimité</option>
            <option>Entretien</option>
          </select>
        </label>
        <label>
          Budget envisagé
          <select name="budget" defaultValue="À définir ensemble">
            <option>À définir ensemble</option>
            <option>Moins de 10 000 €</option>
            <option>10 000 à 25 000 €</option>
            <option>25 000 à 50 000 €</option>
            <option>Plus de 50 000 €</option>
          </select>
        </label>
      </div>
      <label>
        Parlez-nous de votre extérieur *
        <textarea
          name="message"
          rows={4}
          placeholder="Ce que vous aimeriez changer, vos usages, vos contraintes…"
          required
        />
      </label>

      <div className={styles.formSubmit}>
        <p>En envoyant ce formulaire, vous acceptez d’être recontacté au sujet de votre projet.</p>
        <button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
          <ArrowUpRight size={18} aria-hidden="true" />
        </button>
      </div>

      {state === "error" && (
        <p className={styles.formError} role="alert">
          L’envoi n’a pas abouti. Vous pouvez réessayer ou nous appeler directement.
        </p>
      )}
    </form>
  );
}
