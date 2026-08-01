import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Galaxy } from "./Galaxy";

export const mono: CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  textTransform: "uppercase",
};

export const shell: CSSProperties = { maxWidth: 1152, margin: "0 auto", padding: "0 24px" };

/* Fluid type. The upper bound of each clamp is the prototype's fixed size, so
   desktop renders exactly as designed and only narrow viewports scale down. */
export const fluid = {
  heroDisplay: "clamp(40px, 8.5vw, 80px)", // Home h1 — 80px
  heroTitle: "clamp(38px, 7.2vw, 64px)", // product-page h1 — 64px
  sectionTitle: "clamp(30px, 4.6vw, 44px)", // section h2 — 44px
  ctaTitle: "clamp(32px, 5.2vw, 48px)", // closing CTA h2 — 48px
} as const;

/* Grid minimums, named so pages read as intent rather than magic numbers. */
export const gridMin = {
  card: "280px", // 3-up product cards
  stat: "220px", // 4-up stat blocks
  feature: "260px", // 3-up feature cards
} as const;

export function Kicker({ color = "#00D4FF", children }: { color?: string; children: ReactNode }) {
  return <p style={{ ...mono, fontSize: 12, letterSpacing: "0.24em", color, margin: 0 }}>{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Sora', sans-serif",
        fontWeight: 700,
        fontSize: fluid.sectionTitle,
        lineHeight: 1.12,
        letterSpacing: "-0.02em",
        color: "#fff",
        margin: "18px 0 0",
        maxWidth: 640,
      }}
    >
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return <p style={{ fontSize: 17, lineHeight: 1.7, color: "#94A3B8", maxWidth: 560, margin: "16px 0 0" }}>{children}</p>;
}

/** Full-bleed page band; tint=true renders on the raised panel color. */
export function Band({ tint = false, children }: { tint?: boolean; children: ReactNode }) {
  return (
    <div style={{ background: tint ? "#0A0E16" : undefined, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="mlai-reveal" style={{ ...shell, padding: "clamp(56px, 9vw, 96px) 24px" }}>
        {children}
      </div>
    </div>
  );
}

/** Auto-fitting card grid. `min` is the width at which a column may wrap. */
export function CardGrid({ min = gridMin.feature, gap = 20, style, children }: { min?: string; gap?: number; style?: CSSProperties; children: ReactNode }) {
  return (
    <div className="mlai-grid" style={{ ["--min" as string]: min, gap, ...style }}>
      {children}
    </div>
  );
}

/** Two-up split that stacks below 900px; `cols` preserves the desktop ratio. */
export function Split({ cols = "1fr 1fr", style, children }: { cols?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <div className="mlai-split" style={{ ["--cols" as string]: cols, ...style }}>
      {children}
    </div>
  );
}

export function PillLink({ to, primary = false, color = "#00D4FF", children }: { to: string; primary?: boolean; color?: string; children: ReactNode }) {
  return (
    <Link to={to} className={`mlai-pill ${primary ? "mlai-pill-primary" : "mlai-pill-ghost"}`} style={{ ["--pill-accent" as string]: color }}>
      {children}
    </Link>
  );
}

/** Product-page hero: galaxy canvas + 64px grid (radial mask) + key light + floor fade. */
export function Hero({ accent, accent2, keyLight, children }: { accent: string; accent2: string; keyLight: string; children: ReactNode }) {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Galaxy accent={accent} accent2={accent2} density={60} />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 35% 20%,black,transparent)",
          maskImage: "radial-gradient(ellipse 70% 70% at 35% 20%,black,transparent)",
        }}
      />
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 55% at 30% -10%," + keyLight + ",transparent 62%)" }}
      />
      <div aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 160, background: "linear-gradient(180deg,transparent,#05070B)" }} />
      <div style={{ position: "relative", ...shell, padding: "clamp(88px, 14vw, 124px) 24px 48px" }}>{children}</div>
    </div>
  );
}

export function HeroTitle({ children }: { children: ReactNode }) {
  return (
    <h1
      style={{
        fontFamily: "'Sora', sans-serif",
        fontWeight: 700,
        fontSize: fluid.heroTitle,
        lineHeight: 1.06,
        letterSpacing: "-0.03em",
        color: "#fff",
        margin: "22px 0 0",
        maxWidth: 900,
        animation: "mlaiRise 700ms cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      {children}
    </h1>
  );
}

export function HeroSub({ children }: { children: ReactNode }) {
  return <p style={{ fontSize: 18, lineHeight: 1.7, color: "#94A3B8", maxWidth: 680, margin: "20px 0 0" }}>{children}</p>;
}

export const page: CSSProperties = {
  minHeight: "100vh",
  background: "#05070B",
  color: "#CBD5E1",
  fontFamily: "'Manrope', system-ui, sans-serif",
};

/** Page frame: the skip link plus the page background/type context. */
export function Page({ children }: { children: ReactNode }) {
  return (
    <div style={page}>
      <a className="mlai-skip-link" href="#main">
        Skip to content
      </a>
      {children}
    </div>
  );
}

/** The <main> landmark. Everything below the nav belongs inside it. */
export function Main({ children }: { children: ReactNode }) {
  return <main id="main">{children}</main>;
}
