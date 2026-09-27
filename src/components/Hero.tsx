import heroImg from "../../public/images/hero-garage.jpg";
import { telHref, waHref } from "@/data/site";
import { IconArrow, IconPhone, IconPin, IconWhatsApp } from "./Icons";
import { CTAButton } from "./ui";

const pills = ["Électromécanique", "Diagnostic", "Entretien", "Réparation"];

export default function Hero() {
  return (
    <section id="accueil" className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-24 pb-14 sm:pb-16 lg:items-center lg:pt-28 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImg}
          alt="Mécanicien réalisant un diagnostic électronique sur un véhicule dans l'atelier du garage à Djelibougou, Bamako"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-ink-950/72" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/25 to-ink-950/70" />
      <div className="grid-lines radial-fade absolute inset-0 -z-10 opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-scan absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-flame-500/[0.07] to-transparent" />
      </div>
      <div className="pointer-events-none absolute -top-40 -left-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-flame-600/20 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="reveal is-visible inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.05] py-1.5 pr-4 pl-2 backdrop-blur-md">
            <span className="relative grid h-6 w-6 place-items-center">
              <span className="animate-pulse-glow absolute inset-0 rounded-full bg-flame-500/50" />
              <IconPin className="relative h-3.5 w-3.5 text-flame-400" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-bone/85 uppercase sm:text-[11px]">
              Djelibougou, Bamako — Mali
            </span>
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[0.94] font-black tracking-[-0.03em] text-balance uppercase sm:text-6xl lg:text-[5.1rem]">
            <span className="block text-bone">L'expertise automobile</span>
            <span className="mt-1 block">
              <span className="text-gradient-flame">qui fait la différence.</span>
            </span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
            {pills.map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                <span className="text-[13px] font-semibold tracking-[0.12em] text-bone/90 uppercase sm:text-sm">
                  {p}
                </span>
                {i < pills.length - 1 && <span className="h-1 w-1 rounded-full bg-flame-500" />}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-mist sm:text-lg">
            Votre garage électromécanique de confiance à Djelibougou, Bamako. Des diagnostics précis et des
            réparations professionnelles pour garder votre véhicule en parfait état.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CTAButton href="#contact" icon={<IconArrow className="h-4 w-4" />} className="w-full sm:w-auto">
              Prendre rendez-vous
            </CTAButton>
            <CTAButton
              href={waHref}
              variant="whatsapp"
              external={waHref.startsWith("http")}
              icon={<IconWhatsApp className="h-[18px] w-[18px]" />}
              className="w-full sm:w-auto"
            >
              WhatsApp
            </CTAButton>
            <CTAButton
              href={telHref}
              variant="outline"
              icon={<IconPhone className="h-4 w-4" />}
              className="w-full sm:w-auto"
            >
              Nous appeler
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Decorative diagnostic panel */}
      <div className="pointer-events-none absolute right-10 bottom-32 hidden w-64 xl:block">
        <div className="glass animate-float-slow rounded-2xl p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.22em] text-flame-400 uppercase">OBD · Scan</span>
            <span className="flex h-2 w-2">
              <span className="animate-pulse-glow h-2 w-2 rounded-full bg-flame-500" />
            </span>
          </div>
          <div className="mt-4 space-y-2.5">
            {[82, 58, 94, 41].map((w, i) => (
              <div key={i} className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-flame-600 to-flame-300"
                  style={{ width: `${w}%` }}
                />
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-wider text-steel uppercase">
            Analyse des systèmes
            <br />
            électroniques du véhicule
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block">
        <a href="#services" aria-label="Voir nos services" className="group flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-steel uppercase transition-colors group-hover:text-flame-400">
            Défiler
          </span>
          <span className="relative h-10 w-px overflow-hidden bg-white/15">
            <span className="animate-scan absolute inset-x-0 top-0 h-4 bg-flame-500" />
          </span>
        </a>
      </div>
    </section>
  );
}
