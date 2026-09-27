import { getWhatsAppUrl, testimonials } from "@/data/site";
import { IconCheck, IconQuote, IconStar, IconWhatsApp } from "./Icons";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

export default function Testimonials() {
  const reviewWaUrl = getWhatsAppUrl(
    "Bonjour M. Oumar Karamoko DIARRA, je suis client de votre garage et je souhaite vous transmettre mon avis : ",
  );

  return (
    <section
      id="avis"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.06] bg-ink-900/40 py-20 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-flame-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Témoignages"
          title={
            <>
              Ils nous font <span className="text-gradient-flame">confiance</span>
            </>
          }
          subtitle="Découvrez les retours d'expérience de nos clients automobilistes à Bamako."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 120}>
              <article className="card-sheen relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-ink-850/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500/35 hover:shadow-[0_20px_50px_-25px_rgba(255,75,22,0.4)] sm:p-7">
                {/* Header: Stars & Service Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-flame-400">
                    {[...Array(t.rating)].map((_, s) => (
                      <IconStar key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] tracking-[0.15em] text-steel uppercase">
                    {t.service}
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <IconQuote className="h-6 w-6 shrink-0 text-flame-500/30" />
                  <p className="flex-1 text-[14px] leading-relaxed text-mist italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 font-mono text-[11px] text-steel">
                  🚗 <span className="text-bone/80">{t.vehicle}</span>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-flame-500/30 bg-flame-500/10 font-display text-xs font-bold text-flame-400">
                      {t.initials}
                    </span>
                    <div className="leading-tight">
                      <span className="block text-[14px] font-semibold text-bone">{t.name}</span>
                      <span className="mt-0.5 block font-mono text-[10px] tracking-[0.15em] text-steel uppercase">
                        {t.role}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#3ecf7e]">
                    <IconCheck className="h-3 w-3" />
                    Vérifié
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold text-bone">
                Vous avez confié votre voiture à M. Oumar Karamoko DIARRA ?
              </p>
              <p className="mt-1 text-[13px] text-steel">
                Partagez votre avis directement sur WhatsApp pour nous aider à faire grandir le garage.
              </p>
            </div>
            <a
              href={reviewWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#1f8f4e] px-4 py-2.5 text-[12px] font-bold tracking-wide text-white uppercase shadow-md transition-all hover:scale-105 hover:bg-[#1a7a42] active:scale-95"
            >
              <IconWhatsApp className="h-4 w-4" />
              Laisser un avis
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
