"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

export type GalleryPhoto = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
};

export function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              "group relative overflow-hidden rounded-2xl bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
              photo.className,
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
            />
            <span className="absolute inset-0 bg-forest-deep/0 transition-colors duration-500 group-hover:bg-forest-deep/15" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-deep/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full border border-white/25 text-primary-foreground"
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Photo précédente"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 flex size-11 items-center justify-center rounded-full border border-white/25 text-primary-foreground sm:left-8"
          >
            <ChevronLeft className="size-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Photo suivante"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 flex size-11 items-center justify-center rounded-full border border-white/25 text-primary-foreground sm:right-8"
          >
            <ChevronRight className="size-5" strokeWidth={1.5} />
          </button>
          <figure
            className="max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {photos[index] && (
              <Image
                src={photos[index]!.src}
                alt={photos[index]!.alt}
                className="max-h-[78vh] w-full rounded-2xl object-contain"
                width={1280}
                height={960}
              />
            )}
            <figcaption className="mt-4 text-center text-sm text-primary-foreground/80">
              {photos[index]?.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
