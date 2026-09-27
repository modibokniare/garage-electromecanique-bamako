import { useEffect, useRef, useState } from "react";
import { brand, getWhatsAppUrl, telHref, waHref, whatsappPresets } from "@/data/site";
import { cn } from "@/utils/cn";
import { IconArrow, IconClose, IconPhone, IconWhatsApp } from "./Icons";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const external = waHref.startsWith("http");

  return (
    <>
      {/* Mobile sticky action bar */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 transition-all duration-500 lg:hidden",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
        )}
      >
        <div className="border-t border-white/8 bg-ink-950/90 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] backdrop-blur-xl">
          <div className="grid grid-cols-[1fr_1fr_auto] gap-2">
            <a
              href={waHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1f8f4e] px-3 py-3 text-[12px] font-bold tracking-wide text-white uppercase shadow-[0_8px_24px_-12px_rgba(31,143,78,0.9)] active:scale-[0.98]"
            >
              <IconWhatsApp className="h-[17px] w-[17px]" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="btn-flame flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-[12px] font-bold tracking-wide text-white uppercase active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Rendez-vous
                <IconArrow className="h-4 w-4" />
              </span>
            </a>
            <a
              href={telHref}
              aria-label="Appeler le garage"
              className="grid w-12 place-items-center rounded-xl border border-white/12 bg-white/5 text-bone active:scale-[0.98]"
            >
              <IconPhone className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop floating WhatsApp + Preset Menu */}
      <div
        ref={popoverRef}
        className={cn(
          "fixed right-6 bottom-6 z-40 hidden flex-col items-end transition-all duration-500 lg:flex",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
        )}
      >
        {menuOpen && (
          <div className="mb-3 w-80 overflow-hidden rounded-2xl border border-white/12 bg-ink-900/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            {/* Header */}
            <div className="border-b border-white/8 bg-linear-to-r from-[#1f8f4e]/30 via-[#1f8f4e]/15 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1f8f4e] font-mono text-xs font-bold text-white shadow-sm">
                      OD
                    </span>
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-[#3ecf7e]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-bone">{brand.owner}</p>
                    <p className="text-[11px] text-steel">Garage Électromécanique</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fermer le menu"
                  className="grid h-7 w-7 place-items-center rounded-lg text-steel transition-colors hover:bg-white/10 hover:text-bone"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-mist">
                Sélectionnez un sujet pour démarrer une conversation WhatsApp :
              </p>
            </div>

            {/* Presets List */}
            <div className="max-h-64 overflow-y-auto p-2 space-y-1">
              {whatsappPresets.map((preset) => (
                <a
                  key={preset.id}
                  href={getWhatsAppUrl(preset.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between gap-3 rounded-xl p-2.5 text-left text-[12px] text-mist transition-all hover:bg-[#1f8f4e]/15 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3ecf7e] shrink-0" />
                    <span className="font-medium text-bone group-hover:text-white">{preset.label}</span>
                  </div>
                  <IconWhatsApp className="h-3.5 w-3.5 shrink-0 text-steel group-hover:text-[#3ecf7e]" />
                </a>
              ))}
            </div>

            {/* Direct message link */}
            <div className="border-t border-white/8 bg-black/25 p-2.5">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#1f8f4e] py-2 text-[11.5px] font-bold text-white transition-opacity hover:opacity-90"
              >
                <IconWhatsApp className="h-4 w-4" />
                Message direct
              </a>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir les options WhatsApp"
          className="group relative flex h-14 items-center gap-2.5 rounded-2xl bg-[#1f8f4e] px-4 text-white shadow-[0_18px_40px_-16px_rgba(31,143,78,1)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-2xl bg-[#1f8f4e]/60 blur-lg" />
          <IconWhatsApp className="h-6 w-6 shrink-0" />
          <span className="text-[12px] font-bold tracking-wide whitespace-nowrap uppercase">
            WhatsApp
          </span>
        </button>
      </div>
    </>
  );
}
