"use client";
import { useEffect, useRef, useState } from "react";

type Message = {
  role: "bot" | "user";
  text: string;
};

const SUGGESTIONS = [
  "Combien coûte un site ?",
  "Délai de livraison ?",
  "Tu fais aussi le SEO ?",
];

const GREETING =
  "Bonjour 👋 Je suis Tomy, l'assistant de l'Atelier Douglas. Je peux vous renseigner sur nos offres, délais, tarifs. Une question ?";

// Simple keyword-based responses — no real AI, just trigger words.
const RULES: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["prix", "coûte", "coute", "tarif", "budget"],
    answer:
      "Nos sites démarrent à partir de 490€, selon la complexité du projet. Laissez-moi votre mail pour obtenir un devis plus précis.",
  },
  {
    keywords: ["code promo", "promo", "réduction", "reduction"],
    answer:
      "Le code promo de bienvenue est WEB10, il offre 10% de réduction sur votre première commande.",
  },
  {
    keywords: ["délai", "delai", "livraison", "combien de temps"],
    answer:
      "Comptez généralement entre 1 et 3 semaines selon la taille du site et les allers-retours de validation.",
  },
  {
    keywords: ["seo", "référencement", "referencement"],
    answer:
      "Oui, nous proposons du SEO on-page (structure, performance, contenu) en option sur chaque projet.",
  },
  {
    keywords: ["bonjour", "salut", "hello", "coucou"],
    answer: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
  },
  {
    keywords: ["merci"],
    answer: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions.",
  },
  {
    keywords: ["contact", "email", "téléphone", "telephone"],
    answer:
      "Vous pouvez nous contacter directement via le formulaire en bas de page, on vous répond sous 24h.",
  },
];

const FALLBACK =
  "Je ne suis pas sûr de comprendre. Vous pouvez me demander nos tarifs, délais ou le SEO !";

const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;

const EMAIL_CAPTURED_ANSWER =
  "Merci, j'ai bien noté votre email 📩 Un membre de l'équipe revient vers vous très vite !";

function SparkleIcon({
  className,
  stroke,
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke ?? "#f16c13"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4" />
      <path d="M22 4h-4" />
      <circle cx="4" cy="20" r="2" />
    </svg>
  );
}

function getAnswer(question: string) {
  if (EMAIL_REGEX.test(question)) return EMAIL_CAPTURED_ANSWER;
  const q = question.toLowerCase();
  const match = RULES.find((rule) =>
    rule.keywords.some((keyword) => q.includes(keyword)),
  );
  return match?.answer ?? FALLBACK;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  function toggle() {
    setOpen((v) => {
      const next = !v;
      if (next) setMounted(true);
      return next;
    });
  }

  function ask(question: string) {
    if (!question.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "bot", text: getAnswer(question) },
    ]);
    setInput("");
    setShowSuggestions(false);
  }

  return (
    <>
      {mounted && (
        <div
          onTransitionEnd={() => {
            if (!open) setMounted(false);
          }}
          className={`chat-glow fixed bottom-24 right-5 z-50 flex h-[min(640px,calc(100svh-7rem))] w-[min(400px,calc(100vw-2.5rem))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-hairline bg-paper transition-all duration-300 ease-out ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-3 scale-95 opacity-0"
          }`}
        >
          {/* header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-terracotta to-terracotta-deep px-5 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-espresso/15">
              <SparkleIcon
                stroke="currentColor"
                className="text-primary-foreground"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-primary-foreground">
                Tomy — Assistant IA
              </p>
              <p className="flex items-center gap-1.5 text-xs text-primary-foreground/85">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                En ligne · Réponse instantanée
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le chat"
              className="shrink-0 rounded-full p-1 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              ✕
            </button>
          </div>

          {/* messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "bot"
                    ? "max-w-[90%] rounded-2xl rounded-tl-sm border border-hairline px-4 py-3 text-sm leading-relaxed text-ink"
                    : "ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-terracotta px-4 py-3 text-sm leading-relaxed text-primary-foreground"
                }
              >
                {m.text}
              </div>
            ))}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => ask(s)}
                    className="rounded-full border border-terracotta/60 px-4 py-2 text-xs text-ink transition-colors hover:bg-terracotta/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="flex items-center gap-2 border-t border-hairline px-4 py-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 rounded-full border border-hairline bg-transparent px-4 py-3 text-sm text-ink placeholder:text-walnut/60 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Envoyer"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta text-primary-foreground transition-colors hover:bg-terracotta-deep"
            >
              ➤
            </button>
          </form>
        </div>
      )}

      {/* toggle button */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
        className={`text-terracotta cursor-pointer chatbot-button fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-terracotta  text-xl text-primary-foreground  transition-transform hover:scale-105`}
      >
        {open ? (
          "✕"
        ) : (
          <>
            <SparkleIcon />
            <span className="blink-subtle absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full  bg-orange-400" />
          </>
        )}
      </button>
    </>
  );
}
