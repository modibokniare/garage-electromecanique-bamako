import ctaImg from "../../public/images/cta-car.jpg";
import { waHref } from "@/data/site";
import { IconArrow, IconWhatsApp } from "./Icons";
import Reveal from "./Reveal";
import { CTAButton, Eyebrow } from "./ui";

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src={ctaImg}
          alt="Véhicule moderne dans un atelier automobile sombre"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-ink-950/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/85" />
      <div className="grid-lines radial-fade absolute inset-0 -z-10 opacity-30" />

      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-10 lg:py-36">
        <Reveal>
          <Eyebrow className="justify-center">Prêt à intervenir</Eyebrow>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[2.1rem] leading-[0.98] font-black text-balance uppercase sm:text-5xl lg:text-[4.25rem]">
            Votre voiture mérite
            <br className="hidden sm:block" /> le <span className="text-gradient-flame">bon diagnostic.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-lg">
            Confiez votre véhicule à des professionnels de l'électromécanique à Djelibougou.
          </p>
        </Reveal>

        <Reveal delay={230}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="#contact" icon={<IconArrow className="h-4 w-4" />} className="w-full sm:w-auto">
              Prendre rendez-vous
            </CTAButton>
            <CTAButton
              href={waHref}
              variant="outline"
              external={waHref.startsWith("http")}
              icon={<IconWhatsApp className="h-[18px] w-[18px] text-[#3ecf7e]" />}
              className="w-full sm:w-auto"
            >
              Contacter sur WhatsApp
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
