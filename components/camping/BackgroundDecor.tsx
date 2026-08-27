"use client";

import { ReactNode } from "react";

export function BackgroundDecor(): ReactNode {
  return (
    <>
      {/* Top left decorative branch */}
      <svg
        className="absolute -top-20 -left-32 w-96 h-96 pointer-events-none opacity-[0.08] text-foreground"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M200 400 Q150 300 120 200 Q100 120 80 40" />
          <path d="M200 400 Q250 300 280 200 Q300 120 320 40" />
          <path d="M120 200 Q80 180 40 160" />
          <path d="M120 200 Q100 240 80 280" />
          <path d="M280 200 Q320 180 360 160" />
          <path d="M280 200 Q300 240 320 280" />
          <path d="M150 280 Q120 270 90 280" />
          <path d="M250 280 Q280 270 310 280" />
        </g>
      </svg>

      {/* Top right decorative element */}
      <svg
        className="absolute -top-40 -right-48 w-[600px] h-[600px] pointer-events-none opacity-[0.06] text-foreground"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        <g stroke="currentColor" strokeWidth="1.5" filter="url(#blur1)">
          <path d="M400 0 Q450 100 420 200 Q380 300 300 350 Q200 400 100 380" />
          <path d="M500 100 Q480 150 450 180" />
          <path d="M350 150 Q320 180 290 200" />
          <path d="M550 200 Q500 220 450 230" />
        </g>
      </svg>

      {/* Bottom left organic shape */}
      <svg
        className="absolute -bottom-32 -left-48 w-[500px] h-[500px] pointer-events-none opacity-[0.07] text-foreground"
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M100 500 Q150 400 180 300 Q200 200 220 100" />
          <path d="M100 500 Q80 400 60 300 Q40 200 30 100" />
          <path d="M180 300 Q220 280 260 270" />
          <path d="M180 300 Q150 330 120 360" />
          <path d="M60 300 Q30 290 0 280" />
          <path d="M60 300 Q80 330 100 360" />
          <path d="M150 200 Q120 210 90 200" />
          <path d="M200 200 Q230 210 260 200" />
        </g>
      </svg>

      {/* Bottom right curved elements */}
      <svg
        className="absolute -bottom-40 -right-40 w-96 h-96 pointer-events-none opacity-[0.08] text-foreground"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M0 200 Q100 150 200 180 Q300 210 400 180" />
          <path d="M0 250 Q100 200 200 240 Q300 280 400 250" />
          <path d="M50 100 Q150 120 250 110 Q350 100 400 150" />
          <path d="M100 50 L100 200" />
          <path d="M250 50 L250 200" />
        </g>
      </svg>

      {/* Middle section accent - subtle flowing shapes */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-[0.04] text-foreground"
        viewBox="0 0 800 400"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="blur2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>
        <g stroke="currentColor" strokeWidth="1" filter="url(#blur2)">
          <path d="M0 200 Q200 100 400 200 Q600 300 800 200" />
          <path d="M0 250 Q200 150 400 250 Q600 350 800 250" />
          <path d="M100 50 Q300 100 500 80 Q700 60 800 100" />
        </g>
      </svg>

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />
    </>
  );
}
