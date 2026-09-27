import { useCallback, useRef, useState } from "react";
import { cases, images } from "@/data/site";
import { IconArrow } from "./Icons";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const clamp = (v: number, min = 2, max = 98) => Math.min(max, Math.max(min, v));

function CompareSlider() {
  const [pos, setPos] = useState(48);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(clamp(((clientX - r.left) / r.width) * 100));
  }, []);

  return (
    <div
      ref={ref}
      className="group relative aspect-4/3 w-full cursor-ew-resize overflow-hidden rounded-3xl border border-white/10 select-none sm:aspect-16/10"
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setDragging(true);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging && move(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      <img
        src={images.brakeOld}
        alt="Pièce automobile usée avant intervention au garage"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/25" />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img
          src={images.brakeNew}
          alt="Pièce automobile remise en état après intervention"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-flame-600/15 to-transparent" />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute top-4 left-4 rounded-full border border-white/12 bg-ink-950/75 px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-bone/90 uppercase backdrop-blur-md">
        Avant
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full border border-flame-500/40 bg-flame-500/20 px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-flame-300 uppercase backdrop-blur-md">
        Après
      </span>

      {/* Handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="relative h-full w-px bg-white/80 shadow-[0_0_24px_rgba(255,75,22,0.6)]">
          <button
            type="button"
            role="slider"
            tabIndex={0}
            aria-label="Comparer avant et après"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => clamp(p - 4));
              if (e.key === "ArrowRight") setPos((p) => clamp(p + 4));
            }}
            className="pointer-events-auto absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink-950/85 text-bone backdrop-blur-md transition-transform duration-300 hover:scale-110"
          >
            <span className="flex items-center">
              <IconArrow className="h-4 w-4 rotate-180 text-flame-400" />
              <IconArrow className="-ml-1 h-4 w-4 text-flame-400" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section
      id="realisations"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.06] bg-ink-900/40 py-20 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-flame-700/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Avant / Après"
          title={
            <>
              Du symptôme à la <span className="text-gradient-flame">solution.</span>
            </>
          }
          subtitle="Une panne se règle rarement au hasard. Voici comment un problème est pris en charge, identifié puis corrigé dans notre atelier."
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <CompareSlider />
            <p className="mt-4 font-mono text-[10.5px] tracking-[0.14em] text-steel uppercase">
              Illustration — glissez le curseur : pièce usée à gauche, pièce remise en état à droite.
            </p>
          </Reveal>

          <div className="lg:col-span-5">
            <div className="space-y-4">
              {cases.map((c, i) => (
                <Reveal key={c.symptom} delay={i * 110}>
                  <article className="card-sheen group flex gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-850/70 p-3.5 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12]">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
                      <img
                        src={c.image}
                        alt={c.symptom}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                    </div>
                    <div className="min-w-0 py-1">
                      <span className="font-mono text-[9.5px] tracking-[0.25em] text-flame-400 uppercase">
                        {c.tag}
                      </span>
                      <h3 className="mt-1.5 text-[15px] leading-snug font-bold text-bone">{c.symptom}</h3>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-steel">{c.work}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
