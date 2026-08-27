"use client";
/**
 * Éléments graphiques 2D monochromes, fins et légers, placés en arrière-plan
 * des sections pour apporter de la texture visuelle sans nuire à la lisibilité.
 * Illustrations inspirées de la nature : branchages, feuillages, chêne, soleil.
 */

import { cn } from "@/lib/utils";

const STROKE = "text-foreground";

function Branch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none absolute select-none", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className={STROKE}
      >
        <path d="M100 215 C 96 160, 90 120, 60 90 C 45 75, 40 55, 45 30" />
        <path d="M92 150 C 115 130, 130 110, 132 82" />
        <path d="M132 82 C 133 60, 140 45, 155 35" />
        <path d="M75 112 C 60 105, 45 105, 30 115" />
        {/* feuilles */}
        <path d="M60 90 q -14 -18 2 -34 q 14 16 -2 34 Z" />
        <path d="M45 30 q -12 -18 4 -32 q 12 16 -4 32 Z" />
        <path d="M132 82 q -16 -14 -6 -36 q 18 12 6 36 Z" />
        <path d="M155 35 q -10 -18 8 -30 q 10 16 -8 30 Z" />
        <path d="M30 115 q -20 -6 -28 -24 q 22 -2 28 24 Z" />
        <path d="M92 150 q -18 2 -30 -14 q 18 -8 30 14 Z" />
      </g>
    </svg>
  );
}

function Foliage({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 180"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none absolute select-none", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className={STROKE}
      >
        <path d="M110 175 C 108 130, 112 90, 110 40" />
        <path d="M110 150 C 85 140, 65 125, 58 100" />
        <path d="M110 120 C 135 112, 155 95, 162 70" />
        <path d="M110 85 C 90 76, 78 62, 76 42" />
        <ellipse cx="58" cy="95" rx="16" ry="7" transform="rotate(35 58 95)" />
        <ellipse
          cx="162"
          cy="65"
          rx="16"
          ry="7"
          transform="rotate(-35 162 65)"
        />
        <ellipse cx="76" cy="36" rx="14" ry="6" transform="rotate(50 76 36)" />
        <ellipse
          cx="110"
          cy="30"
          rx="14"
          ry="6"
          transform="rotate(85 110 30)"
        />
        <ellipse
          cx="100"
          cy="158"
          rx="15"
          ry="6"
          transform="rotate(30 100 158)"
        />
        <ellipse
          cx="122"
          cy="128"
          rx="15"
          ry="6"
          transform="rotate(-25 122 128)"
        />
      </g>
    </svg>
  );
}

function OakTree({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 200"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none absolute select-none", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className={STROKE}
      >
        <path d="M90 195 C 88 165, 86 150, 90 125" />
        <path d="M90 160 C 78 150, 70 142, 66 130" />
        <path d="M90 150 C 102 142, 110 134, 114 122" />
        <circle cx="90" cy="80" r="52" strokeDasharray="1.5 5" />
        <circle cx="52" cy="98" r="22" strokeDasharray="1.5 5" />
        <circle cx="128" cy="96" r="24" strokeDasharray="1.5 5" />
        <path d="M60 55 q 6 8 12 4 M118 50 q 8 6 13 1 M78 108 q 7 6 13 1" />
      </g>
    </svg>
  );
}

function SunArc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 100"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none absolute select-none", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="text-accent"
      >
        <path d="M25 90 A 55 55 0 0 1 135 90" />
        <path d="M80 14 v -8 M45 28 l -6 -6 M115 28 l 6 -6 M28 62 l -9 -3 M132 62 l 9 -3" />
      </g>
    </svg>
  );
}

function GrassTuft({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 70"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none absolute select-none", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className={STROKE}
      >
        <path d="M30 66 C 28 48, 24 38, 14 28" />
        <path d="M42 66 C 42 44, 46 32, 56 22" />
        <path d="M60 66 C 58 50, 54 40, 46 32" />
        <path d="M120 66 C 118 46, 122 34, 134 24" />
        <path d="M140 66 C 140 50, 146 38, 158 30" />
        <path d="M105 66 C 106 52, 102 42, 92 34" />
        <path d="M180 66 C 178 52, 174 44, 166 36" />
      </g>
    </svg>
  );
}

/** Ensemble de textures de fond pour une section blanche ou crème. */
export function NatureTexture({ variant = 1 }: { variant?: 1 | 2 | 3 }) {
  if (variant === 2) {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Foliage className="-left-10 top-10 h-44 w-56 opacity-[0.05] -rotate-6 sm:h-56 sm:w-72" />
        <Branch className="-right-8 bottom-8 h-52 w-44 opacity-[0.05] rotate-6 sm:h-64 sm:w-56" />
        <SunArc className="right-[12%] top-8 h-16 w-28 opacity-[0.08] hidden md:block" />
      </div>
    );
  }
  if (variant === 3) {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <OakTree className="-right-6 top-1/2 h-56 w-48 -translate-y-1/2 opacity-[0.05] sm:h-72 sm:w-60" />
        <GrassTuft className="-left-4 bottom-0 h-14 w-48 opacity-[0.06] sm:h-16 sm:w-64" />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <Branch className="-left-10 bottom-6 h-56 w-48 opacity-[0.05] -rotate-3 sm:h-72 sm:w-60" />
      <OakTree className="-right-8 top-8 h-48 w-40 opacity-[0.05] rotate-3 sm:h-60 sm:w-52" />
      <SunArc className="left-[10%] top-6 h-14 w-24 opacity-[0.08] hidden md:block" />
    </div>
  );
}
