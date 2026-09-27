import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { hoursDisplay, navLinks, phoneDisplay, telHref, waHref, whatsappDisplay } from "@/data/site";
import { IconArrow, IconClose, IconMenu, IconPhone, IconPin, IconWhatsApp } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#accueil");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);

      const sectionIds = ["accueil", "services", "apropos", "processus", "galerie", "avis", "contact"];
      const scrollPos = y + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${sectionIds[i]}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-lg focus:bg-flame-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Aller au contenu
      </a>

      {/* Floating navigation capsule */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8",
          scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4.5",
        )}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={cn(
              "relative flex h-[62px] sm:h-[68px] items-center justify-between gap-3 rounded-2xl sm:rounded-full px-3.5 sm:px-6 transition-all duration-300",
              scrolled
                ? "border border-white/12 bg-ink-950/85 backdrop-blur-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.95)]"
                : "border border-white/8 bg-ink-950/70 backdrop-blur-xl shadow-lg",
            )}
          >
            {/* Logo */}
            <a href="#accueil" className="group flex items-center gap-3 shrink-0" aria-label="Accueil">
              <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-linear-to-br from-flame-500 to-flame-700 shadow-[0_6px_20px_-6px_rgba(255,75,22,0.9)] transition-transform duration-300 group-hover:scale-105">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_60%)]" />
                <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.2 2.5 5 13.2h5.4l-.9 8.3L18 10.6h-5.3l.5-8.1Z" />
                </svg>
              </span>
              <div className="leading-tight">
                <span className="block font-display text-[12px] sm:text-[13px] font-extrabold tracking-[0.08em] text-bone transition-colors group-hover:text-white">
                  GARAGE ÉLECTROMÉCANIQUE
                </span>
                <span className="block font-mono text-[9px] sm:text-[9.5px] tracking-[0.22em] text-flame-400 uppercase">
                  Djelibougou · Bamako
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links Capsule */}
            <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-0.5 rounded-full border border-white/8 bg-white/3 p-1.5 backdrop-blur-sm">
              {navLinks.map((l) => {
                const isActive = activeSection === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "relative rounded-full px-2.5 xl:px-3.5 py-1.5 text-[12px] xl:text-[12.5px] font-medium tracking-normal transition-all duration-200 whitespace-nowrap",
                      isActive
                        ? "bg-white/12 text-white shadow-sm font-semibold"
                        : "text-mist hover:bg-white/[0.07] hover:text-white",
                    )}
                  >
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2.5px] w-3.5 rounded-full bg-flame-500 shadow-[0_0_8px_rgba(255,75,22,1)]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Phone Pill */}
              <a
                href={telHref}
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 xl:px-3.5 py-2 text-[12px] font-medium text-bone transition-all duration-300 hover:border-flame-500/50 hover:bg-white/6 hover:text-white"
                title="Appeler le garage"
              >
                <IconPhone className="h-3.5 w-3.5 text-flame-400 transition-transform group-hover:rotate-12" />
                <span className="hidden xl:inline font-mono text-[11px] tracking-wide text-mist group-hover:text-bone">
                  {phoneDisplay}
                </span>
                <span className="xl:hidden text-[11px] font-semibold text-mist group-hover:text-bone">
                  Appeler
                </span>
              </a>

              {/* WhatsApp Quick Link */}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#1f8f4e]/40 bg-[#1f8f4e]/20 text-[#3ecf7e] transition-all duration-300 hover:scale-105 hover:bg-[#1f8f4e] hover:text-white shadow-[0_0_12px_-3px_rgba(31,143,78,0.4)]"
                title="WhatsApp direct"
                aria-label="Contacter sur WhatsApp"
              >
                <IconWhatsApp className="h-4 w-4" />
              </a>

              {/* CTA Prendre RDV */}
              <a
                href="#contact"
                className="btn-flame group inline-flex items-center gap-2 rounded-full px-4 xl:px-5 py-2 text-[12px] font-bold tracking-wide text-white uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_6px_20px_-6px_rgba(255,75,22,0.8)]"
              >
                <span className="relative z-10">Prendre RDV</span>
                <IconArrow className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/4 text-bone transition-colors hover:border-flame-500/50 lg:hidden"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scroll progress subtle line */}
        <div className="pointer-events-none mx-auto max-w-7xl px-4 sm:px-8">
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-transparent">
            <div
              className="h-full bg-linear-to-r from-transparent via-flame-500 to-transparent shadow-[0_0_8px_rgba(255,75,22,0.8)] transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-60 transition-[visibility] lg:hidden",
          open ? "visible delay-0 pointer-events-auto" : "invisible delay-500 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-950/80 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 flex h-full w-[86%] max-w-sm flex-col border-l border-white/10 bg-ink-900 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-flame-600/20 blur-3xl" />

          <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <a href="#accueil" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-flame-500 to-flame-700 text-white font-bold">
                ⚡
              </span>
              <div>
                <span className="block font-display text-[12px] font-extrabold text-bone">
                  GARAGE ÉLECTROMÉCANIQUE
                </span>
                <span className="block font-mono text-[9px] tracking-widest text-flame-400 uppercase">
                  Djelibougou
                </span>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/4 text-bone"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          <nav className="relative flex-1 overflow-y-auto px-5 py-6" aria-label="Navigation mobile">
            <ul className="space-y-1">
              {navLinks.map((l, i) => {
                const isActive = activeSection === l.href;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-medium transition-colors",
                        isActive
                          ? "bg-flame-500/15 text-flame-300 font-semibold border border-flame-500/30"
                          : "text-bone/90 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {l.label}
                      <span className="font-mono text-[10px] text-steel">
                        0{i + 1}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-7 space-y-2.5 rounded-2xl border border-white/[0.07] bg-white/3 p-4 text-[13px] text-mist">
              <p className="flex items-start gap-2.5">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-flame-400" />
                Djelibougou, Bamako — Mali
              </p>
              <p className="flex items-start gap-2.5">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-flame-400" />
                {phoneDisplay}
              </p>
              <p className="flex items-start gap-2.5">
                <IconWhatsApp className="mt-0.5 h-4 w-4 shrink-0 text-[#3ecf7e]" />
                {whatsappDisplay}
              </p>
              <p className="flex items-start gap-2.5 font-mono text-[11px] text-steel">
                🕒 {hoursDisplay} (Fermé dim.)
              </p>
            </div>
          </nav>

          <div className="relative grid grid-cols-1 gap-2.5 border-t border-white/[0.07] p-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-flame flex items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-bold text-white uppercase shadow-md"
            >
              Prendre rendez-vous
              <IconArrow className="h-4 w-4" />
            </a>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#1f8f4e] py-2.5 text-[12px] font-bold text-white shadow-sm"
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={telHref}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/4 py-2.5 text-[12px] font-bold text-bone"
              >
                <IconPhone className="h-4 w-4 text-flame-400" />
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
