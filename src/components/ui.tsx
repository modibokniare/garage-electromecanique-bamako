import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Reveal from "./Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.28em] text-flame-400 uppercase sm:text-xs",
        className,
      )}
    >
      <span className="h-px w-7 bg-gradient-to-r from-transparent to-flame-500" />
      {children}
    </span>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "flame" | "outline" | "ghost" | "whatsapp";
  className?: string;
  external?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export function CTAButton({
  href,
  children,
  icon,
  variant = "flame",
  className,
  external,
  onClick,
  ariaLabel,
}: BtnProps) {
  const variants: Record<string, string> = {
    flame: "btn-flame text-white hover:-translate-y-0.5",
    whatsapp:
      "bg-[#1f8f4e] text-white shadow-[0_10px_30px_-12px_rgba(31,143,78,0.9)] hover:-translate-y-0.5 hover:bg-[#23a459]",
    outline:
      "border border-white/15 bg-white/[0.03] text-bone backdrop-blur hover:-translate-y-0.5 hover:border-flame-500/60 hover:bg-white/[0.07]",
    ghost: "text-bone/80 hover:text-flame-400",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-xl px-5 py-3.5 text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 sm:px-6 sm:text-sm",
        variants[variant],
        className,
      )}
    >
      {icon ? <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">{icon}</span> : null}
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-3xl leading-[1.05] font-extrabold text-balance uppercase sm:text-4xl lg:text-[3.25rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={150}>
          <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <a href="#accueil" className={cn("group flex items-center gap-3", className)} aria-label="Accueil">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-flame-500 to-flame-700 shadow-[0_8px_24px_-10px_rgba(255,75,22,0.9)] sm:h-11 sm:w-11">
        <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_60%)]" />
        <svg viewBox="0 0 24 24" className="relative h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M13.2 2.5 5 13.2h5.4l-.9 8.3L18 10.6h-5.3l.5-8.1Z" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[11.5px] font-extrabold tracking-[0.12em] text-bone sm:text-[13px]">
          GARAGE ÉLECTROMÉCANIQUE
        </span>
        <span className="mt-1.5 block font-mono text-[9px] tracking-[0.24em] text-steel uppercase sm:text-[10px]">
          {compact ? "Djelibougou" : "Djelibougou · Bamako · Mali"}
        </span>
      </span>
    </a>
  );
}
