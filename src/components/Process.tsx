import { processSteps } from "@/data/site";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

export default function Process() {
  return (
    <section id="processus" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-flame-700/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Notre processus"
          title={
            <>
              Une méthode claire, <span className="text-gradient-flame">du début à la fin.</span>
            </>
          }
          subtitle="Quatre étapes simples pour que vous sachiez toujours où en est votre véhicule."
        />

        <div className="relative mt-16 lg:mt-20">
          {/* Connector line */}
          <div className="absolute top-8 left-[27px] hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-flame-500/60 via-white/10 to-transparent sm:block lg:top-[54px] lg:left-0 lg:h-px lg:w-full lg:bg-gradient-to-r lg:from-transparent lg:via-white/12 lg:to-transparent" />

          <ol className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 130} as="li" className="relative">
                <div className="flex gap-6 sm:gap-7 lg:block">
                  <div className="relative shrink-0">
                    <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-ink-850 font-display text-lg font-black text-flame-400 shadow-[0_10px_30px_-12px_rgba(0,0,0,1)] transition-all duration-500 hover:border-flame-500/60 hover:text-flame-300">
                      {step.n}
                      <span className="absolute inset-0 -z-10 rounded-2xl bg-flame-600/25 blur-xl" />
                    </span>
                  </div>

                  <div className="lg:mt-7">
                    <div className="hidden items-center gap-2 lg:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
                      <span className="font-mono text-[10px] tracking-[0.25em] text-steel uppercase">
                        Étape {step.n}
                      </span>
                    </div>
                    <h3 className="mt-0 text-xl font-bold tracking-wide text-bone uppercase lg:mt-3">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-steel">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
