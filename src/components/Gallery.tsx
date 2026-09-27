import { useEffect, useState } from "react";
import { gallery } from "@/data/site";
import { cn } from "@/utils/cn";
import { IconArrow, IconClose } from "./Icons";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const spans = ["sm:col-span-2 sm:row-span-2", "", "", "", "", ""];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="galerie" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Galerie"
          title={
            <>
              L'atelier <span className="text-gradient-flame">en images.</span>
            </>
          }
          subtitle="Un environnement de travail organisé, des outils adaptés et des interventions menées avec méthode."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 90} className={cn("h-full", spans[i])}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "group relative block h-full w-full overflow-hidden rounded-2xl border border-white/[0.07] transition-all duration-500 hover:border-flame-500/40",
                  i === 0 ? "aspect-square sm:aspect-auto sm:h-full" : "aspect-square",
                )}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale-[45%] transition-all duration-[900ms] ease-out group-hover:scale-[1.07] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <span className="text-left font-mono text-[10px] tracking-[0.2em] text-bone/90 uppercase">
                    {g.label}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 translate-y-2 place-items-center rounded-lg border border-white/15 bg-ink-950/70 text-flame-400 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <IconArrow className="h-3.5 w-3.5 -rotate-45" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && index !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={gallery[index].label}
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setIndex(null)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/[0.05] text-bone transition-colors hover:border-flame-500/60"
          >
            <IconClose className="h-5 w-5" />
          </button>

          <figure className="max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[index].src}
              alt={gallery[index].alt}
              className="max-h-[75vh] w-full rounded-2xl border border-white/10 object-contain"
            />
            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-mist uppercase">
                {gallery[index].label}
              </span>
              <span className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Image précédente"
                  onClick={() => setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/[0.04] text-bone transition-colors hover:border-flame-500/60"
                >
                  <IconArrow className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  aria-label="Image suivante"
                  onClick={() => setIndex((i) => (i === null ? i : (i + 1) % gallery.length))}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/[0.04] text-bone transition-colors hover:border-flame-500/60"
                >
                  <IconArrow className="h-4 w-4" />
                </button>
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
