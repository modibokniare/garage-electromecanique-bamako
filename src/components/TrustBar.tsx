import { keywordsMarquee, trustItems } from "@/data/site";
import { iconMap } from "./Icons";
import Reveal from "./Reveal";

export default function TrustBar() {
  return (
    <section aria-label="Nos engagements" className="relative z-10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="glass relative -mt-8 overflow-hidden rounded-3xl shadow-[0_40px_80px_-50px_rgba(0,0,0,1)] lg:-mt-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-flame-500/70 to-transparent" />
          <div className="grid grid-cols-1 gap-px bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className="group relative bg-ink-900/70 p-6 transition-colors duration-300 hover:bg-ink-800/80 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-flame-500/25 bg-flame-500/10 text-flame-400 transition-all duration-300 group-hover:border-flame-500/60 group-hover:bg-flame-500/20">
                      <Icon className="h-5 w-5" />
                      <span className="absolute inset-0 rounded-xl bg-flame-500/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold tracking-wide text-bone uppercase">{item.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-steel">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Marquee — mots-clés / expertises */}
      <div className="pause-on-hover relative mt-12 overflow-hidden border-y border-white/[0.06] bg-ink-900/60 py-4 lg:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...keywordsMarquee, ...keywordsMarquee].map((k, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-mono text-[11px] tracking-[0.25em] text-steel uppercase sm:text-xs">{k}</span>
              <span className="h-1 w-1 rounded-full bg-flame-500/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
