"use client";
import { useCallback, useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { SECTEURS, EXPERTISES, ENTREPRISE } from "./data";

// ENTREPRISE is imported from ./data

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center border border-primary-foregroundalt/25">
        <span className="font-display text-sm font-bold tracking-wide">MF</span>
      </span>
      <span className="leading-none">
        <span className="block font-display text-base font-bold tracking-wide">
          METALFORGE
        </span>
        <span className="label-tech block text-[0.5625rem] text-current/60">
          Chaudronnerie industrielle
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuOpen = useCallback((menu: string | null) => {
    console.log("🔍 Menu opened:", menu);
    setOpen(menu);
    setMobile(false);
  }, []);

  const handleLinkClick = useCallback(() => {
    console.log("🔍 Link clicked - closing menu");
    setOpen(null);
    setMobile(false);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-navy-deep text-primary-foregroundalt transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_0_oklch(1_0_0/0.14),0_18px_40px_-30px_oklch(0_0_0/0.7)]"
          : ""
      }`}
      onMouseLeave={() => handleMenuOpen(null)}
    >
      <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between gap-8 px-6">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex">
          <NavTrigger
            label="Expertises"
            hasMenu
            active={open === "exp"}
            onEnter={() => handleMenuOpen("exp")}
          />
          <NavTrigger
            label="Secteurs"
            hasMenu
            active={open === "sec"}
            onEnter={() => handleMenuOpen("sec")}
          />
          <NavLink
            label="Réalisations"
            href="#realisations"
            onEnter={handleLinkClick}
          />
          <NavLink
            label="Moyens industriels"
            href="#moyens"
            onEnter={handleLinkClick}
          />
          <NavTrigger
            label="Entreprise"
            hasMenu
            active={open === "ent"}
            onEnter={() => handleMenuOpen("ent")}
          />
          <NavLink
            label="Actualités"
            href="#actualites"
            onEnter={handleLinkClick}
          />
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#devis"
            className="label-tech hidden items-center border border-primary-foregroundalt/25 px-5 py-3 transition-colors hover:border-accent hover:bg-accent md:inline-flex"
          >
            Demander un devis
          </a>
          <button
            aria-label="Menu"
            className="p-2 xl:hidden"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mega menus */}
      <div
        className={`hidden overflow-hidden border-t border-primary-foregroundalt/10 bg-navy-deep transition-[max-height,opacity] duration-300 xl:block ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-6 py-10">
          {open === "exp" && (
            <MenuGrid
              title="Nos expertises"
              items={EXPERTISES}
              columns={2}
              href="#expertises"
            />
          )}
          {open === "sec" && (
            <MenuGrid
              title="Secteurs d'activité"
              items={SECTEURS}
              columns={3}
              href="#secteurs"
              note="Des solutions adaptées aux contraintes techniques et réglementaires de chaque filière."
            />
          )}
          {open === "ent" && (
            <MenuGrid
              title="L'entreprise"
              items={ENTREPRISE}
              columns={2}
              href="#entreprise"
            />
          )}
        </div>
      </div>

      {/* Mobile */}
      {mobile && (
        <div className="max-h-[calc(100vh-74px)] overflow-y-auto border-t border-primary-foregroundalt/10 bg-navy-deep px-6 pb-10 pt-6 xl:hidden">
          <MobileGroup
            title="Expertises"
            items={EXPERTISES}
            href="#expertises"
            onItemClick={handleLinkClick}
          />
          <MobileGroup
            title="Secteurs"
            items={SECTEURS}
            href="#secteurs"
            onItemClick={handleLinkClick}
          />
          <MobileGroup
            title="Entreprise"
            items={ENTREPRISE}
            href="#entreprise"
            onItemClick={handleLinkClick}
          />
          <div className="mt-6 grid gap-2">
            <a
              href="#realisations"
              onClick={handleLinkClick}
              className="py-2 text-sm"
            >
              Réalisations
            </a>
            <a
              href="#moyens"
              onClick={handleLinkClick}
              className="py-2 text-sm"
            >
              Moyens industriels
            </a>
            <a
              href="#actualites"
              onClick={handleLinkClick}
              className="py-2 text-sm"
            >
              Actualités
            </a>
            <a
              href="#devis"
              onClick={handleLinkClick}
              className="label-tech mt-3 inline-flex justify-center bg-accent px-5 py-3"
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavTrigger({
  label,
  active,
  onEnter,
}: {
  label: string;
  hasMenu?: boolean;
  active: boolean;
  onEnter: () => void;
}) {
  return (
    <button
      onMouseEnter={onEnter}
      className={`label-tech flex items-center gap-1.5 px-3.5 py-3 transition-colors ${
        active
          ? "text-primary-foregroundalt"
          : "text-primary-foregroundalt/70 hover:text-primary-foregroundalt"
      }`}
    >
      {label}
      <ChevronDown
        className={`h-3 w-3 transition-transform ${active ? "rotate-180" : ""}`}
      />
    </button>
  );
}

function NavLink({
  label,
  href,
  onEnter,
}: {
  label: string;
  href: string;
  onEnter: () => void;
}) {
  return (
    <a
      href={href}
      onMouseEnter={onEnter}
      className="label-tech px-3.5 py-3 text-primary-foregroundalt/70 transition-colors hover:text-primary-foregroundalt"
    >
      {label}
    </a>
  );
}

function MenuGrid({
  title,
  items,
  columns,
  href,
  note,
}: {
  title: string;
  items: string[];
  columns: number;
  href: string;
  note?: string;
}) {
  return (
    <div className="grid gap-10 md:grid-cols-[220px_1fr]">
      <div>
        <p className="label-tech text-accent">{title}</p>
        {note && (
          <p className="mt-4 max-w-[200px] text-sm text-primary-foregroundalt/55">
            {note}
          </p>
        )}
      </div>
      <ul
        className="grid gap-x-10 gap-y-0"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))` }}
      >
        {items.map((item) => (
          <li key={item} className="border-t border-primary-foregroundalt/10">
            <a
              href={href}
              className="block py-3 text-sm text-primary-foregroundalt/75 transition-colors hover:text-accent-foregroundalt hover:text-primary-foregroundalt"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileGroup({
  title,
  items,
  href,
  onItemClick,
}: {
  title: string;
  items: string[];
  href: string;
  onItemClick?: () => void;
}) {
  return (
    <div className="border-t border-primary-foregroundalt/10 py-4">
      <p className="label-tech text-accent">{title}</p>
      <ul className="mt-2 grid grid-cols-2 gap-x-6">
        {items.map((i) => (
          <li key={i}>
            <a
              href={href}
              onClick={onItemClick}
              className="block py-1.5 text-sm text-primary-foregroundalt/70"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
