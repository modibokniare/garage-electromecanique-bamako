import {
  brand,
  contact,
  hoursDisplay,
  mapsLink,
  navLinks,
  phoneDisplay,
  telHref,
  waHref,
  whatsappDisplay,
} from "@/data/site";
import { IconClock, IconFacebook, IconInstagram, IconPhone, IconPin, IconTikTok, IconWhatsApp } from "./Icons";
import { Logo } from "./ui";

const socials = [
  { label: "Facebook", icon: IconFacebook },
  { label: "Instagram", icon: IconInstagram },
  { label: "TikTok", icon: IconTikTok },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink-950">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-flame-700/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-28 sm:px-6 lg:px-10 lg:pt-20 lg:pb-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-steel">
              Garage spécialisé en électromécanique automobile à Djelibougou, Bamako. Diagnostic électronique,
              électricité auto, mécanique générale, climatisation et entretien préventif — pour tous types de
              véhicules.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#contact"
                  aria-label={`${s.label} — lien à renseigner`}
                  title={`${s.label} : lien à renseigner`}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500/50 hover:text-flame-400"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <p className="mt-3 font-mono text-[9.5px] tracking-[0.18em] text-steel/70 uppercase">
              Liens réseaux sociaux à renseigner
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Liens du pied de page" className="lg:col-span-3">
            <h3 className="font-mono text-[10px] tracking-[0.25em] text-flame-400 uppercase">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-bone"
                  >
                    <span className="h-px w-3 bg-flame-500/60 transition-all duration-300 group-hover:w-5" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h3 className="font-mono text-[10px] tracking-[0.25em] text-flame-400 uppercase">Contact</h3>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-mist transition-colors hover:text-bone"
                >
                  <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-flame-400" />
                  {contact.addressLine}
                </a>
              </li>
              <li>
                <a href={telHref} className="flex items-start gap-3 text-sm text-mist transition-colors hover:text-bone">
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-flame-400" />
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waHref}
                  {...(waHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-start gap-3 text-sm text-mist transition-colors hover:text-bone"
                >
                  <IconWhatsApp className="mt-0.5 h-4 w-4 shrink-0 text-flame-400" />
                  {whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-mist">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-flame-400" />
                <div>
                  <span className="block">{hoursDisplay}</span>
                  <span className="block text-[12px] text-steel">Fermé le dimanche</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO line */}
        <div className="mt-12 border-t border-white/[0.07] pt-7">
          <p className="text-[11.5px] leading-relaxed text-steel/80">
            Garage électromécanique Bamako · Garage automobile Bamako · Électromécanique Djelibougou · Diagnostic
            automobile Bamako · Réparation voiture Bamako · Électricité automobile Bamako · Entretien automobile
            Bamako
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10.5px] tracking-[0.14em] text-steel uppercase">
            © {new Date().getFullYear()} {brand.name} — {brand.city}
          </p>
          <p className="font-mono text-[10px] tracking-[0.14em] text-steel/70 uppercase">{brand.legalNote}</p>
        </div>
      </div>
    </footer>
  );
}
