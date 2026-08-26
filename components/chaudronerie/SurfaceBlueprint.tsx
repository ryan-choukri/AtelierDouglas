"use client";

import { useRef, useEffect, ReactNode } from "react";

interface SurfaceBlueprintProps {
  children: ReactNode;
  className?: string;
  id?: string;
  [key: string]: any;
}

export default function SurfaceBlueprint({
  children,
  className = "",
  id,
  ...props
}: SurfaceBlueprintProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate parallax offset (subtle movement - 5% of displacement)
      const offsetX = (x - rect.width / 2) * 0.05;
      const offsetY = (y - rect.height / 2) * 0.05;

      // Apply transform to the ::before pseudo-element via CSS variable
      container.style.setProperty("--parallax-x", `${offsetX}px`);
      container.style.setProperty("--parallax-y", `${offsetY}px`);
    };

    const handleMouseLeave = () => {
      // Reset parallax on mouse leave
      container.style.setProperty("--parallax-x", "0px");
      container.style.setProperty("--parallax-y", "0px");
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`surface-blueprint ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
