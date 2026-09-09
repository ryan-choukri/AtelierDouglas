"use client";

import { useEffect, useState } from "react";
import { Check, Clock, Leaf, X } from "lucide-react";
import { Button, inputClassCta } from "./primitives";
import { cn } from "@/lib/utils";
import styles from "./ProspectCTA.module.css";

type ProspectCTAState = "hidden" | "visible" | "loading" | "success" | "error";

interface ProspectCTAProps {
  /** Page name for tracking (e.g., "camping", "carnet-paysage") */
  pageName: string;
  /** Page URL for the email */
  pageUrl?: string;
}

export function ProspectCTA({ pageName, pageUrl }: ProspectCTAProps) {
  const [state, setState] = useState<ProspectCTAState>("hidden");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [hasShown, setHasShown] = useState(false);

  // Initialize: check session storage and get leadId from URL
  useEffect(() => {
    const sessionKey = `prospect-cta-shown-${pageName}`;
    // const alreadyShown = sessionStorage.getItem(sessionKey);
    // if (alreadyShown) {
    //   setHasShown(true);
    //   return;
    // }

    // Extract leadId from URL params
    const params = new URLSearchParams(window.location.search);
    const leadIdParam = params.get("leadId");
    setLeadId(leadIdParam);

    // Show CTA after 10 seconds
    const timer = setTimeout(() => {
      setState("visible");
      sessionStorage.setItem(sessionKey, "true");
    }, 7000);

    return () => clearTimeout(timer);
  }, [pageName]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // If leadId exists, we just submit without email validation
    if (leadId) {
      await submitProspect(null);
      return;
    }

    // Otherwise, validate email
    const emailToValidate = email.trim();
    if (!emailToValidate) {
      setEmailError("Veuillez entrer une adresse email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailToValidate)) {
      setEmailError("Adresse email invalide.");
      return;
    }

    setEmailError(null);
    await submitProspect(emailToValidate);
  }

  async function submitProspect(emailValue: string | null) {
    setState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: leadId ? `Prospect (leadId: ${leadId})` : "Prospect",
          email: emailValue || leadId,
          message: `Demande de recontact depuis la page: ${pageUrl || window.location.href}`,
          leadId: leadId || undefined,
          activity: `Prospect - ${pageName}`,
        }),
      });

      if (response.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch (error) {
      console.error("Error sending prospect request:", error);
      setState("error");
    }
  }

  function handleClose() {
    setState("hidden");
  }

  if (hasShown || state === "hidden") {
    return null;
  }

  const renderContent = () => {
    // Success state
    if (state === "success") {
      return (
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/20">
              <Check className="h-6 w-6 text-terracotta" />
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-ivory/80">
              {leadId
                ? "C'est noté, je vous recontacte sur le mail que je vous ai envoyé."
                : " C'est noté, je vous recontacte rapidement."}
            </h3>
          </div>
        </div>
      );
    }

    // Error state
    if (state === "error") {
      return (
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-destructive/20">
              <X className="h-6 w-6 text-destructive" />
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-ivory/80">
              Une erreur est survenue. Veuillez réessayer.
            </h3>
          </div>
        </div>
      );
    }

    // Visible/Loading state
    return (
      <>
        <h3
          className="text-ivory/80 text-2xl font-serif  mb-2"
          style={{ fontWeight: "500 !important" }}
        >
          Votre site pourrait ressembler à ça.
        </h3>
        <p className="text-sm text-ivory/60 mb-3">
          Vous souhaitez que je regarde ce qu&apos;on pourrait améliorer sur
          votre site actuel ?
        </p>

        {/* Form or button */}
        <form onSubmit={handleSubmit} className=" mt-2 space-y-3">
          {!leadId && (
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(null);
                }}
                placeholder="votre@email.com"
                className={cn(inputClassCta, "text-sm")}
                disabled={state === "loading"}
                required
              />
              {emailError && (
                <p className="mt-1.5 text-xs text-destructive">{emailError}</p>
              )}
            </div>
          )}

          <Button
            type="submit"
            disabled={state === "loading"}
            className="w-full"
            variant="primary"
          >
            {state === "loading"
              ? "Envoi en cours..."
              : leadId
                ? "Oui, ça m'intéresse"
                : "Être recontacté"}
          </Button>
        </form>
      </>
    );
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4",
        styles.tooltip,
      )}
    >
      <div
        className={cn(
          "text-ivory relative mx-auto w-full max-w-md rounded-2xl bg-espresso/95 backdrop-blur-xl p-6 shadow-lg/80 ",

          "before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-br before:from-walnut/20 before:to-transparent before:blur-3xl before:opacity-80 before:scale-110",
        )}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-black/5 rounded-full"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="pt-2">{renderContent()}</div>
        {/* reduce size text */}
        <div className="flex items-center justify-center text-ivory/60 mt-4 text-[0.75rem]">
          <span>
            <Leaf className="h-3 w-3" strokeWidth={1.4} />
          </span>
          <span className="ml-2 mr-5">Sans engagement</span>
          <span>
            <Clock className="h-3 w-3" strokeWidth={1.4} />
          </span>
          <span className="ml-2">Réponse sous 24h</span>
        </div>
      </div>
    </div>
  );
}
