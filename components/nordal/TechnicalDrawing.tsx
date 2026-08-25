"use client";
import { useState } from "react";

type Hot = { id: string; x: number; y: number; label: string; value: string };

const hotspots: Hot[] = [
  {
    id: "a",
    x: 300,
    y: 96,
    label: "Alésage principal",
    value: "Ø 42 H7 · ±0,01",
  },
  {
    id: "b",
    x: 168,
    y: 250,
    label: "Portée de roulement",
    value: "Ø 62 · Ra 0,8",
  },
  { id: "c", x: 432, y: 250, label: "Taraudage", value: "M8 × 1,25 — 6×" },
  { id: "d", x: 300, y: 396, label: "Épaulement", value: "12,5 mm ±0,02" },
];

export function TechnicalDrawing() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 600 480"
        className="w-full"
        role="img"
        aria-label="Plan technique d'un composant mécanique fictif avec cotes et annotations"
      >
        <defs>
          <pattern
            id="hatch"
            width="6"
            height="6"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="6"
              stroke="currentColor"
              strokeWidth="0.6"
              opacity="0.35"
            />
          </pattern>
        </defs>

        {/* frame */}
        <rect
          x="16"
          y="16"
          width="568"
          height="448"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.35"
        />
        <text
          x="28"
          y="452"
          className="label-tech"
          fontSize="9"
          fill="currentColor"
          opacity="0.6"
        >
          NRD-04127 · ÉCH. 1:2 · TOLÉRANCES GÉNÉRALES ISO 2768-M
        </text>

        {/* centre lines */}
        <line
          x1="300"
          y1="40"
          x2="300"
          y2="440"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="14 4 2 4"
          opacity="0.5"
        />
        <line
          x1="60"
          y1="250"
          x2="540"
          y2="250"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="14 4 2 4"
          opacity="0.5"
        />

        {/* body */}
        <g stroke="currentColor" fill="none" strokeWidth="1.4">
          <circle cx="300" cy="250" r="150" />
          <circle cx="300" cy="250" r="112" strokeWidth="0.9" />
          <circle cx="300" cy="250" r="62" />
          <circle cx="300" cy="250" r="42" strokeWidth="0.9" />
        </g>
        <circle
          cx="300"
          cy="250"
          r="150"
          fill="url(#hatch)"
          opacity="0.25"
          stroke="none"
        />
        <circle
          cx="300"
          cy="250"
          r="62"
          fill="var(--background)"
          stroke="none"
        />
        <circle
          cx="300"
          cy="250"
          r="62"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* bolt circle */}
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * Math.PI) / 3 - Math.PI / 2;
          return (
            <g key={i}>
              <circle
                cx={300 + 112 * Math.cos(a)}
                cy={250 + 112 * Math.sin(a)}
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <line
                x1={300 + 112 * Math.cos(a) - 13}
                y1={250 + 112 * Math.sin(a)}
                x2={300 + 112 * Math.cos(a) + 13}
                y2={250 + 112 * Math.sin(a)}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.6"
              />
              <line
                x1={300 + 112 * Math.cos(a)}
                y1={250 + 112 * Math.sin(a) - 13}
                x2={300 + 112 * Math.cos(a)}
                y2={250 + 112 * Math.sin(a) + 13}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.6"
              />
            </g>
          );
        })}

        {/* dimension line */}
        <g stroke="var(--signal)" strokeWidth="0.9">
          <line x1="150" y1="440" x2="450" y2="440" />
          <line x1="150" y1="430" x2="150" y2="450" />
          <line x1="450" y1="430" x2="450" y2="450" />
        </g>
        <text
          x="300"
          y="432"
          textAnchor="middle"
          fontSize="10"
          fill="var(--signal)"
          className="label-tech"
        >
          Ø 300,00
        </text>

        <g stroke="var(--signal)" strokeWidth="0.9">
          <line x1="40" y1="100" x2="40" y2="400" />
          <line x1="30" y1="100" x2="50" y2="100" />
          <line x1="30" y1="400" x2="50" y2="400" />
        </g>
        <text
          x="46"
          y="96"
          fontSize="10"
          fill="var(--signal)"
          className="label-tech"
        >
          150,00
        </text>

        {/* hotspots */}
        {hotspots.map((h) => (
          <g
            key={h.id}
            onMouseEnter={() => setActive(h.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(h.id)}
            onBlur={() => setActive(null)}
            tabIndex={0}
            role="button"
            aria-label={`${h.label} ${h.value}`}
            className="cursor-crosshair outline-none"
          >
            <circle cx={h.x} cy={h.y} r="22" fill="transparent" />
            <circle
              cx={h.x}
              cy={h.y}
              r={active === h.id ? 7 : 4}
              fill="var(--signal)"
              className="transition-all duration-300"
            />
            <circle
              cx={h.x}
              cy={h.y}
              r="14"
              fill="none"
              stroke="var(--signal)"
              strokeWidth="0.8"
              opacity={active === h.id ? 1 : 0.35}
              className="transition-opacity duration-300"
            />
            <g
              className="transition-opacity duration-300"
              opacity={active === h.id ? 1 : 0}
              pointerEvents="none"
            >
              <line
                x1={h.x}
                y1={h.y}
                x2={h.x + 34}
                y2={h.y - 34}
                stroke="var(--signal)"
                strokeWidth="0.8"
              />
              <line
                x1={h.x + 34}
                y1={h.y - 34}
                x2={h.x + 150}
                y2={h.y - 34}
                stroke="var(--signal)"
                strokeWidth="0.8"
              />
              <text
                x={h.x + 38}
                y={h.y - 40}
                fontSize="10"
                fill="currentColor"
                className="label-tech"
              >
                {h.label}
              </text>
              <text
                x={h.x + 38}
                y={h.y - 22}
                fontSize="12"
                fill="var(--signal)"
                fontFamily="var(--font-mono)"
              >
                {h.value}
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
