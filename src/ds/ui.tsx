import type { ReactNode } from "react";
import { Fragment, useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { company, nav, type Accent, type ProvKind, type Stat } from "./brand";

/* Accent lookup tables — the three product colors, in the four forms components need. */
export const accentText: Record<Accent, string> = {
  wdbx: "text-wdbx",
  abi: "text-abi",
  abbey: "text-abbey",
};
export const accentBorder: Record<Accent, string> = {
  wdbx: "border-wdbx/40",
  abi: "border-abi/40",
  abbey: "border-abbey/40",
};
export const accentBg: Record<Accent, string> = {
  wdbx: "bg-wdbx",
  abi: "bg-abi",
  abbey: "bg-abbey",
};
export const accentHex: Record<Accent, string> = {
  wdbx: "#00D4FF",
  abi: "#7C3AED",
  abbey: "#10B981",
};

/* ── Logo ──────────────────────────────────────────────────────────────── */

export function LogoMark({ size = 32, mono = false, title = "MLAI" }: { size?: number; mono?: boolean; title?: string }) {
  const uid = useId();
  const g = `mlai-grad-${uid}`;
  const fill = mono ? "currentColor" : `url(#${g})`;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title}>
      <defs>
        <linearGradient id={g} x1="8" y1="40" x2="40" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF" />
          <stop offset="0.5" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <rect x="4.5" y="4.5" width="39" height="39" rx="11" stroke={fill} strokeWidth="2.5" opacity={mono ? 0.9 : 1} />
      {[16, 24, 32].map((x) => (
        <Fragment key={x}>
          <rect x={x - 1} y="1.5" width="2" height="3.5" rx="1" fill={fill} opacity="0.55" />
          <rect x={x - 1} y="43" width="2" height="3.5" rx="1" fill={fill} opacity="0.55" />
        </Fragment>
      ))}
      {mono ? (
        <>
          <rect x="13" y="28" width="22" height="4.5" rx="2.25" fill="currentColor" opacity="0.55" />
          <rect x="13" y="21.75" width="22" height="4.5" rx="2.25" fill="currentColor" opacity="0.78" />
          <rect x="13" y="15.5" width="22" height="4.5" rx="2.25" fill="currentColor" />
        </>
      ) : (
        <>
          <rect x="13" y="28" width="22" height="4.5" rx="2.25" fill="#00D4FF" />
          <rect x="13" y="21.75" width="22" height="4.5" rx="2.25" fill="#7C3AED" />
          <rect x="13" y="15.5" width="22" height="4.5" rx="2.25" fill="#10B981" />
        </>
      )}
    </svg>
  );
}

export function Logo({ size = 30, mono = false, className = "" }: { size?: number; mono?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} mono={mono} />
      <span className="font-display text-xl font-bold tracking-[0.18em] text-white">MLAI</span>
    </span>
  );
}

/* ── Nav ───────────────────────────────────────────────────────────────── */

/** Sticky 64px nav. Unlike the prototype's stub (which hardcoded "/"), the active
    route comes from the router, so the current page keeps its cyan underline. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label="MLAI home">
          <LogoMark size={28} />
          <span className="font-display text-lg font-bold tracking-[0.2em] text-white">MLAI</span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:text-white ${
                isActive(item.href) ? "text-white" : "text-slate-400"
              }`}
            >
              {item.label}
              {isActive(item.href) ? <span aria-hidden className="absolute -bottom-1.5 left-0 h-px w-full bg-wdbx" /> : null}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-wdbx/50 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-wdbx transition-colors hover:bg-wdbx hover:text-ink"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative h-8 w-8 lg:hidden"
        >
          <span className={`absolute left-1 right-1 top-2.5 h-px bg-white transition-transform duration-200 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`absolute left-1 right-1 bottom-2.5 h-px bg-white transition-transform duration-200 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>
      <div id="mobile-menu" className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md lg:hidden ${open ? "block" : "hidden"}`}>
        <nav className="mx-auto flex max-w-6xl flex-col px-6 py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex items-center justify-between border-b border-line/60 py-3 font-mono text-sm uppercase tracking-[0.15em] last:border-0 ${
                isActive(item.href) ? "text-white" : "text-slate-400"
              }`}
            >
              {item.label}
              <span aria-hidden className="text-slate-600">
                →
              </span>
            </Link>
          ))}
          <Link to="/contact" className="mt-3 mb-2 border border-wdbx bg-wdbx px-4 py-2.5 text-center font-mono text-sm font-semibold uppercase tracking-[0.15em] text-ink">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ── Provenance ────────────────────────────────────────────────────────── */

const provStyles: Record<ProvKind, { dot: string; label: string; cls: string; title: string }> = {
  measured: { dot: "●", label: "measured", cls: "text-abbey", title: "Reproduced on MLAI hardware; harness in repo" },
  target: { dot: "○", label: "target", cls: "text-warn", title: "Engineering goal, not yet achieved" },
  reported: { dot: "◆", label: "reported", cls: "text-abi", title: "Figure from cited research document" },
};

export function ProvTag({ tag }: { tag: ProvKind }) {
  const s = provStyles[tag];
  return (
    <span className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] ${s.cls}`} title={s.title}>
      <span aria-hidden>{s.dot}</span>
      {s.label}
    </span>
  );
}

export function ProvLegend() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
      <span>
        <span className="text-abbey">●</span> measured — reproduced on our hardware
      </span>
      <span>
        <span className="text-warn">○</span> target — engineering goal
      </span>
      <span>
        <span className="text-abi">◆</span> reported — cited research figure
      </span>
    </div>
  );
}

/* ── Section primitives ────────────────────────────────────────────────── */

export function StatBlock({ stat, accent = "wdbx" }: { stat: Stat; accent?: Accent }) {
  return (
    <div className="surface surface-hover accent-edge p-5" style={{ ["--accent" as string]: accentHex[accent] }}>
      <div className={`font-mono text-3xl font-bold tracking-tight ${accentText[accent]}`}>{stat.value}</div>
      <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <ProvTag tag={stat.tag} />
        {stat.note ? <span className="text-[11px] text-slate-600">{stat.note}</span> : null}
      </div>
    </div>
  );
}

export function Eyebrow({ children, accent = "wdbx" }: { children: ReactNode; accent?: Accent }) {
  return (
    <div className={`mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] ${accentText[accent]}`}>
      <span aria-hidden className={`h-px w-6 ${accentBg[accent]} opacity-70`} />
      {children}
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  accent = "wdbx",
  children,
  lead,
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  accent?: Accent;
  children?: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="border-t border-line py-16">
      <div className="reveal mx-auto max-w-6xl px-6">
        {eyebrow ? <Eyebrow accent={accent}>{eyebrow}</Eyebrow> : null}
        {title ? <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2> : null}
        {lead ? <p className="mt-3 max-w-3xl text-slate-400">{lead}</p> : null}
        <div className={title || lead ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function FeatureCard({ title, desc, accent }: { title: ReactNode; desc: ReactNode; accent: Accent }) {
  return (
    <div className={`surface surface-hover border-l-2 ${accentBorder[accent]} p-5`}>
      <h3 className="font-display text-base font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{desc}</p>
    </div>
  );
}

export function DataTable({
  cols,
  rows,
  accent = "wdbx",
  highlightCol,
}: {
  cols: string[];
  rows: string[][];
  accent?: Accent;
  highlightCol?: number;
}) {
  return (
    <div className="surface accent-edge overflow-x-auto" style={{ ["--accent" as string]: accentHex[accent] }}>
      <table className="w-full font-mono text-sm">
        <thead>
          <tr className="border-b border-line bg-white/[0.02]">
            {cols.map((c, i) => (
              <th key={i} className={`p-4 text-left text-xs uppercase tracking-wider ${i === highlightCol ? accentText[accent] : "text-slate-500"}`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-line/50 last:border-0 even:bg-white/[0.015]">
              {r.map((cell, j) => (
                <td
                  key={j}
                  className={`p-4 ${j === highlightCol ? "bg-white/[0.02]" : ""} ${
                    j === 0 ? "text-slate-300" : j === highlightCol ? `font-semibold ${accentText[accent]}` : "text-slate-500"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function NextUp({ items }: { items: { href: string; label: string; desc: string; accent: Accent }[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {items.map((it) => (
          <Link key={it.href} to={it.href} className="group bg-panel p-6 hover:bg-panel/60">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Continue</span>
            <div className={`mt-2 font-display text-lg font-semibold ${accentText[it.accent]}`}>
              {it.label} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">{it.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── Footer ────────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="brand-seam absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <LogoMark size={30} />
              <span className="font-display text-lg font-bold tracking-[0.2em] text-white">MLAI</span>
            </div>
            <p className="mt-3 text-sm text-slate-500">{company.tagline}</p>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">{company.appleFraming}</p>
          </div>
          <div className="flex gap-12">
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-[0.15em]">
              {nav.map((item) => (
                <Link key={item.href} to={item.href} className="text-slate-500 hover:text-white">
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="text-slate-500 hover:text-white">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.15em]">
              <a href="https://github.com/donaldfilimon/abi" className="text-slate-500 hover:text-white" rel="noopener">
                GitHub ↗
              </a>
              <a href="https://donaldfilimon.github.io/abi/" className="text-slate-500 hover:text-white" rel="noopener">
                Docs ↗
              </a>
              <a href="https://donaldfilimon.com" className="text-slate-500 hover:text-white" rel="noopener">
                Founder ↗
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-line pt-6">
          <ProvLegend />
          <p className="mt-4 font-mono text-[11px] text-slate-600">
            © 2026 {company.legalName} · {company.entity} · {company.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
