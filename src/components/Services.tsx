import { services } from "@/data/site";
import { IconArrow, IconCheck, iconMap } from "./Icons";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

export function requestService(service: string) {
  window.dispatchEvent(new CustomEvent("rdv:service", { detail: service }));
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-flame-700/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Nos services"
            title={
              <>
                Une expertise complète
                <br className="hidden sm:block" /> pour votre <span className="text-gradient-flame">véhicule.</span>
              </>
            }
          />
          <Reveal delay={200} className="max-w-sm">
            <p className="text-sm leading-relaxed text-mist lg:text-right">
              Électricité, électronique et mécanique : nous intervenons sur l'ensemble des organes de votre
              voiture, à Djelibougou comme partout à Bamako.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.id} delay={(i % 3) * 110}>
                <article className="card-sheen group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-850/80 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.12] hover:shadow-[0_40px_70px_-45px_rgba(255,75,22,0.55)]">
                  <div className="relative h-44 overflow-hidden sm:h-40 lg:h-44">
                    <img
                      src={s.image}
                      alt={`${s.title} — garage électromécanique à Djelibougou, Bamako`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full scale-105 object-cover opacity-70 grayscale-[35%] transition-all duration-[900ms] ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/50 to-transparent" />
                    <span className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-ink-950/70 text-flame-400 backdrop-blur-md transition-all duration-500 group-hover:border-flame-500/50 group-hover:bg-flame-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="absolute top-5 right-4 font-mono text-[10px] tracking-[0.25em] text-white/35">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold tracking-wide text-bone uppercase">{s.title}</h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel">{s.lead}</p>

                    <ul className="mt-5 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-mist">
                          <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-flame-500" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      onClick={() => requestService(s.title)}
                      aria-label={`En savoir plus sur : ${s.title}`}
                      className="mt-7 inline-flex items-center gap-2.5 self-start rounded-xl border border-white/12 bg-white/[0.03] px-4 py-2.5 font-mono text-[10.5px] tracking-[0.18em] text-bone/85 uppercase transition-all duration-300 hover:border-flame-500/70 hover:bg-flame-500/12 hover:text-flame-300"
                    >
                      En savoir plus
                      <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
