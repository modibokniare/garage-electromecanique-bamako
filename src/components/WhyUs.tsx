import { images, whyUs } from "@/data/site";
import { IconArrow, IconCheck, IconPin } from "./Icons";
import Reveal from "./Reveal";
import { CTAButton, Eyebrow } from "./ui";

export default function WhyUs() {
  return (
    <section id="apropos" className="relative scroll-mt-24 overflow-hidden border-y border-white/6 bg-ink-900/40 py-20 sm:py-24 lg:py-32">
      <div className="grid-lines radial-fade pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Visual */}
        <div className="lg:col-span-5">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src={images.garageLift}
                alt="Atelier moderne du garage électromécanique de Djelibougou à Bamako"
                loading="lazy"
                decoding="async"
                className="aspect-4/5 w-full object-cover sm:aspect-3/2 lg:aspect-4/5"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-ink-950/70 px-3.5 py-1.5 backdrop-blur-md">
                  <IconPin className="h-3.5 w-3.5 text-flame-400" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-bone/85 uppercase">
                    Atelier · Djelibougou
                  </span>
                </span>
              </div>
            </div>

            {/* Floating secondary image */}
            <div className="absolute -right-3 -bottom-10 hidden w-44 overflow-hidden rounded-2xl border border-white/12 shadow-[0_30px_60px_-30px_rgba(0,0,0,1)] sm:block lg:-right-8 lg:w-52">
              <img
                src={images.diagnosticTool}
                alt="Diagnostic électronique d'un moteur au garage"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-white/10 ring-inset" />
            </div>
          </Reveal>
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Pourquoi nous choisir</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl leading-[1.02] font-extrabold text-balance uppercase sm:text-4xl lg:text-[3.1rem]">
              Plus qu'un garage.
              <br />
              <span className="text-gradient-flame">Votre partenaire automobile.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mist sm:text-base">
              Dirigé par <strong className="font-semibold text-bone">M. Oumar Karamoko DIARRA</strong>, notre atelier à Djelibougou met l'accent sur la rigueur technique, l'honnêteté du diagnostic et la précision de l'électromécanique. Comprendre, expliquer, réparer proprement — pour un véhicule sur lequel vous pouvez compter au quotidien à Bamako.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="group flex gap-3.5 rounded-xl border border-transparent p-3 transition-colors duration-300 hover:border-white/8 hover:bg-white/3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-flame-500/12 text-flame-400 transition-colors duration-300 group-hover:bg-flame-500 group-hover:text-white">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold tracking-wide text-bone uppercase">{w.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-steel">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10">
            <CTAButton href="#contact" icon={<IconArrow className="h-4 w-4" />}>
              Parler à un technicien
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
