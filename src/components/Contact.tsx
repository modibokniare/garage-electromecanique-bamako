import { useEffect, useRef, useState } from "react";
import {
  brand,
  contact,
  getWhatsAppUrl,
  hoursDisplay,
  mapsEmbed,
  mapsLink,
  phoneDisplay,
  serviceOptions,
  telHref,
  waHref,
  whatsappDisplay,
  whatsappPresets,
} from "@/data/site";
import { IconArrow, IconCheck, IconClock, IconPhone, IconPin, IconWhatsApp } from "./Icons";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

type FormState = {
  nom: string;
  telephone: string;
  vehicule: string;
  service: string;
  message: string;
};

const empty: FormState = { nom: "", telephone: "", vehicule: "", service: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3.5 text-[15px] text-bone placeholder:text-steel/70 transition-colors duration-300 focus:border-flame-500/70 focus:bg-ink-950 focus:outline-none";

const labelClass = "mb-2 block font-mono text-[10px] tracking-[0.2em] text-steel uppercase";

function InfoRow({
  icon,
  label,
  value,
  href,
  note,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  note?: string;
  external?: boolean;
}) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {})}
      className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/2 p-4 transition-all duration-300 hover:border-flame-500/35 hover:bg-white/5 sm:p-5"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-flame-500/25 bg-flame-500/10 text-flame-400 transition-colors duration-300 group-hover:bg-flame-500 group-hover:text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] tracking-[0.2em] text-steel uppercase">{label}</span>
        <span className="mt-1 block text-[15px] font-semibold wrap-break-word text-bone">{value}</span>
        {note ? <span className="mt-1 block text-[12px] text-steel">{note}</span> : null}
      </span>
    </Wrapper>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (!detail) return;
      setForm((f) => ({ ...f, service: detail }));
      window.setTimeout(() => serviceRef.current?.focus({ preventScroll: true }), 600);
    };
    window.addEventListener("rdv:service", handler);
    return () => window.removeEventListener("rdv:service", handler);
  }, []);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.telephone.trim()) {
      setError("Merci d'indiquer au minimum votre nom et votre numéro de téléphone.");
      return;
    }
    setError(null);

    const text = [
      "Demande de rendez-vous — Garage Électromécanique Djelibougou",
      `À l'attention de M. Oumar Karamoko DIARRA`,
      "",
      `Nom : ${form.nom}`,
      `Téléphone : ${form.telephone}`,
      form.vehicule ? `Véhicule : ${form.vehicule}` : null,
      form.service ? `Service souhaité : ${form.service}` : null,
      form.message ? `Détails : ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    if (contact.whatsapp) {
      window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");
    }
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-flame-700/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: infos */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-3xl leading-[1.03] font-extrabold uppercase sm:text-4xl lg:text-[3.1rem]">
                Besoin d'un <span className="text-gradient-flame">diagnostic ?</span>
              </h2>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-mist">
                Parlez-nous de votre véhicule et prenez rendez-vous avec notre équipe.
              </p>
            </Reveal>

            <div className="mt-9 space-y-3.5">
              <Reveal delay={30}>
                <div className="group flex items-start gap-4 rounded-2xl border border-flame-500/25 bg-linear-to-r from-flame-500/10 via-ink-900/60 to-white/2 p-4 sm:p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-flame-500/35 bg-flame-500/15 font-mono text-sm font-bold text-flame-400">
                    OD
                  </span>
                  <div className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-[0.2em] text-flame-400 uppercase">
                      Propriétaire & Responsable
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold text-bone">
                      {brand.owner}
                    </span>
                    <span className="mt-0.5 block text-[12px] text-steel">
                      Maître électromécanicien — Atelier de Djelibougou
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={60}>
                <InfoRow
                  icon={<IconPin className="h-5 w-5" />}
                  label="Adresse"
                  value={contact.addressLine}
                  note={contact.addressNote}
                  href={mapsLink}
                  external
                />
              </Reveal>
              <Reveal delay={120}>
                <InfoRow
                  icon={<IconPhone className="h-5 w-5" />}
                  label="Téléphone"
                  value={phoneDisplay}
                  href={telHref}
                />
              </Reveal>
              <Reveal delay={180}>
                <InfoRow
                  icon={<IconWhatsApp className="h-5 w-5" />}
                  label="WhatsApp"
                  value={whatsappDisplay}
                  href={waHref}
                  external={waHref.startsWith("http")}
                />
              </Reveal>
              <Reveal delay={240}>
                <InfoRow
                  icon={<IconClock className="h-5 w-5" />}
                  label="Horaires"
                  value={hoursDisplay}
                  note="Fermé le dimanche"
                />
              </Reveal>
            </div>

            <Reveal delay={120} className="mt-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.07]">
                <iframe
                  title="Carte — Djelibougou, Bamako, Mali"
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full grayscale-65 contrast-[1.1] transition-all duration-700 hover:grayscale-0 sm:h-72"
                  style={{ border: 0 }}
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 ring-inset" />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-[0.15em] text-steel uppercase">
                Coordonnées GPS : 12.676418, -7.941333 — Djelibougou, Bamako
              </p>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-[0_50px_90px_-60px_rgba(0,0,0,1)] sm:p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-flame-500/60 to-transparent" />

                {sent ? (
                  <div className="flex min-h-104 flex-col items-center justify-center text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-flame-500/15 text-flame-400">
                      <IconCheck className="h-8 w-8" />
                    </span>
                    <h3 className="mt-6 text-2xl font-bold uppercase">Demande préparée</h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mist">
                      {contact.whatsapp
                        ? "Votre demande a été transmise via WhatsApp. Nous revenons vers vous rapidement."
                        : "Votre demande est prête. Le numéro de contact du garage doit encore être renseigné dans la configuration du site pour permettre l'envoi automatique."}
                    </p>
                    <div className="mt-5 w-full max-w-md rounded-2xl border border-white/8 bg-ink-950/50 p-5 text-left">
                      <p className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase">Récapitulatif</p>
                      <ul className="mt-3 space-y-1.5 text-[13.5px] text-mist">
                        <li>
                          <span className="text-steel">Nom :</span> {form.nom}
                        </li>
                        <li>
                          <span className="text-steel">Téléphone :</span> {form.telephone}
                        </li>
                        {form.vehicule && (
                          <li>
                            <span className="text-steel">Véhicule :</span> {form.vehicule}
                          </li>
                        )}
                        {form.service && (
                          <li>
                            <span className="text-steel">Service :</span> {form.service}
                          </li>
                        )}
                      </ul>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setForm(empty);
                      }}
                      className="mt-6 font-mono text-[11px] tracking-[0.2em] text-flame-400 uppercase underline-offset-4 hover:underline"
                    >
                      Nouvelle demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <h3 className="text-xl font-bold tracking-wide uppercase sm:text-2xl">
                      Demander un rendez-vous
                    </h3>
                    <p className="mt-2 text-[13.5px] text-steel">
                      Réponse par téléphone ou WhatsApp. Les champs marqués d'un * sont obligatoires.
                    </p>

                    {/* Messages prédéfinis WhatsApp */}
                    <div className="mt-6 rounded-2xl border border-white/8 bg-white/2 p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#1f8f4e]/20 text-[#3ecf7e]">
                            <IconWhatsApp className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-[12px] font-bold tracking-wide uppercase text-bone">
                            Messages rapides WhatsApp
                          </span>
                        </div>
                        <span className="hidden font-mono text-[9.5px] tracking-[0.18em] text-steel uppercase sm:inline">
                          Direct M. DIARRA
                        </span>
                      </div>
                      <p className="mt-2 text-[12px] leading-relaxed text-steel">
                        Envoyez en 1 clic un message déjà rédigé à M. Oumar Karamoko DIARRA :
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {whatsappPresets.map((preset) => (
                          <a
                            key={preset.id}
                            href={getWhatsAppUrl(preset.message)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-ink-950/70 px-3 py-2 text-[12px] text-mist transition-all duration-300 hover:border-[#1f8f4e]/70 hover:bg-[#1f8f4e]/10 hover:text-white"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#3ecf7e] transition-transform group-hover:scale-125" />
                            <span className="font-medium">{preset.shortLabel}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="nom">
                          Nom *
                        </label>
                        <input
                          id="nom"
                          name="nom"
                          type="text"
                          autoComplete="name"
                          required
                          value={form.nom}
                          onChange={update("nom")}
                          placeholder="Votre nom complet"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="telephone">
                          Téléphone *
                        </label>
                        <input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          required
                          value={form.telephone}
                          onChange={update("telephone")}
                          placeholder="+223 ..."
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="vehicule">
                          Type de véhicule
                        </label>
                        <input
                          id="vehicule"
                          name="vehicule"
                          type="text"
                          value={form.vehicule}
                          onChange={update("vehicule")}
                          placeholder="Marque, modèle, année"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="service">
                          Service recherché
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            name="service"
                            ref={serviceRef}
                            value={form.service}
                            onChange={update("service")}
                            className={`${inputClass} appearance-none pr-11`}
                          >
                            <option value="">Sélectionner…</option>
                            {serviceOptions.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-flame-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label className={labelClass} htmlFor="message">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={update("message")}
                          placeholder="Décrivez le symptôme : bruit, voyant allumé, démarrage difficile, climatisation…"
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    </div>

                    {error && (
                      <p role="alert" className="mt-5 rounded-xl border border-flame-500/40 bg-flame-500/10 px-4 py-3 text-[13px] text-flame-300">
                        {error}
                      </p>
                    )}

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        className="btn-flame group inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-[13px] font-semibold tracking-wide text-white uppercase transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
                      >
                        <span className="relative z-10">Demander un rendez-vous</span>
                        <IconArrow className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      <a
                        href={waHref}
                        {...(waHref.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/3 px-6 py-4 text-[13px] font-semibold tracking-wide text-bone uppercase transition-colors hover:border-[#1f8f4e] hover:text-[#3ecf7e] sm:w-auto"
                      >
                        <IconWhatsApp className="h-[18px] w-[18px]" />
                        Écrire à M. DIARRA sur WhatsApp
                      </a>
                    </div>

                    <p className="mt-5 text-[11.5px] leading-relaxed text-steel">
                      Vos informations servent uniquement à vous recontacter au sujet de votre véhicule.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
