import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Nav, Footer, HeroBench, StatBlock, ProvLegend, PersonaCard, PullQuote, DeepDive } from "../ds";
import { Galaxy } from "../components/Galaxy";
import { CardGrid, fluid, gridMin, shell, mono, Kicker, H2, Lead, Band, Main, Page, PillLink } from "../components/site";

const personaDot = (color: string): CSSProperties => ({
  width: 7,
  height: 7,
  borderRadius: 99,
  background: color,
  boxShadow: "0 0 10px " + color,
});

const productCard = (accent: string): CSSProperties => ({
  ["--accent" as string]: accent,
  display: "flex",
  flexDirection: "column",
  gap: 14,
  padding: "34px 30px",
  color: "#CBD5E1",
});

const personas = [
  { color: "#10B981", label: "Abbey — Empathic" },
  { color: "#7C3AED", label: "Aviva — Unfiltered" },
  { color: "#00D4FF", label: "Abi — Adaptive" },
];

const stack = [
  {
    index: "01",
    href: "/wdbx",
    accent: "#00D4FF",
    tagColor: "#00D4FF",
    name: "WDBX",
    tagline: "The fastest vector database alive.",
    body: "Zig-built vector storage with HNSW indexing, MVCC transactions, and Metal / CUDA / Vulkan backends.",
  },
  {
    index: "02",
    href: "/abi",
    accent: "#7C3AED",
    tagColor: "#A78BFA",
    name: "ABI Framework",
    tagline: "Apple Silicon, fully spent.",
    body: "Tensor operations, neural network layers, and zero-copy unified-memory pipelines in Zig + Metal.",
  },
  {
    index: "03",
    href: "/abbey",
    accent: "#10B981",
    tagColor: "#34D399",
    name: "Abbey",
    tagline: "An assistant that remembers — locally.",
    body: "Self-learning, emotionally aware, with persistent vector-backed memory on hardware you control.",
  },
];

const principles = [
  { title: "Disciplined secrecy", body: "We publish benchmarks, not roadmaps. What ships speaks; what's in flight stays quiet until it's real." },
  {
    title: "Mission stewardship",
    body: "Privacy-first is an architecture decision, not a marketing position. Data never leaves the device unless the owner sends it.",
  },
  { title: "Operational velocity", body: "Small team, systems languages, zero ceremony. We measure in p50s and ship in weeks." },
];

/* Staggered entrance, 90ms apart — the signature reveal from the design. */
const rise = (delay: number): CSSProperties => ({
  animation: `mlaiRise 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms both`,
});

export default function Home() {
  return (
    <Page>
      <Nav />
      <Main>
        {/* Hero — embedding-galaxy canvas, 64px grid, cyan key light, floor fade */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: 760, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <Galaxy accent="#00D4FF" accent2="#7C3AED" density={80} />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",
              backgroundSize: "64px 64px",
              WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%,black,transparent)",
              maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%,black,transparent)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 50% at 50% -10%,rgba(0,212,255,0.13),transparent 62%),radial-gradient(ellipse 50% 42% at 88% 104%,rgba(124,58,237,0.12),transparent 62%)",
            }}
          />
          <div
            aria-hidden
            style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 220, background: "linear-gradient(180deg,transparent,#05070B)" }}
          />
          <div
            style={{
              position: "relative",
              ...shell,
              padding: "clamp(96px, 16vw, 140px) 24px clamp(64px, 9vw, 90px)",
              textAlign: "center",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <p style={{ ...mono, fontSize: 12, letterSpacing: "0.24em", color: "#7C8BA1", margin: 0, ...rise(0) }}>
              Privacy-first AI infrastructure <span style={{ color: "#334155" }}>·</span> Zig <span style={{ color: "#334155" }}>·</span> Local-first
            </p>
            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: fluid.heroDisplay,
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
                color: "#fff",
                margin: "28px auto 0",
                maxWidth: 980,
                ...rise(90),
              }}
            >
              Private,{" "}
              <span
                style={{
                  background: "linear-gradient(100deg,#00D4FF,#7C3AED 60%,#10B981)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                high-performance
              </span>{" "}
              AI.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#94A3B8", maxWidth: 620, margin: "26px auto 0", ...rise(180) }}>
              From the vector engine up — WDBX, the ABI Framework, and three minds in one system. Apple Silicon-native, built on Metal, Accelerate, and Core ML.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 40, justifyContent: "center", flexWrap: "wrap", ...rise(270) }}>
              <PillLink to="/wdbx" primary>
                Explore the stack
              </PillLink>
              <PillLink to="/company">Request access</PillLink>
            </div>
            <ul
              style={{
                display: "flex",
                gap: 28,
                justifyContent: "center",
                marginTop: 56,
                flexWrap: "wrap",
                listStyle: "none",
                padding: 0,
                ...rise(360),
              }}
            >
              {personas.map((p) => (
                <li
                  key={p.label}
                  style={{ ...mono, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, letterSpacing: "0.14em", color: "#7C8BA1" }}
                >
                  <span aria-hidden style={personaDot(p.color)} /> {p.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ maxWidth: 920, margin: "-20px auto 0", padding: "0 24px 48px", position: "relative" }}>
          <HeroBench />
        </div>

        <div className="brand-seam" style={{ height: 2 }} aria-hidden />

        <Band>
          <Kicker>01 — The stack</Kicker>
          <H2>Three products, one architecture</H2>
          <Lead>Storage, acceleration, and intelligence — each layer runs where the data lives.</Lead>
          <CardGrid min={gridMin.card} style={{ marginTop: 56 }}>
            {stack.map((p) => (
              <Link key={p.name} to={p.href} className="surface surface-hover accent-edge mlai-card" style={productCard(p.accent)}>
                <span style={{ ...mono, fontSize: 12, letterSpacing: "0.2em", color: "#6E7D93" }}>{p.index}</span>
                <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 26, fontWeight: 700, color: "#fff" }}>{p.name}</span>
                <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, color: p.tagColor }}>{p.tagline}</span>
                <span style={{ fontSize: 15, lineHeight: 1.65, color: "#94A3B8" }}>{p.body}</span>
                <span className="mlai-card-enter" style={{ ...mono, fontSize: 12, letterSpacing: "0.15em", color: p.tagColor, marginTop: "auto" }}>
                  Enter →
                </span>
              </Link>
            ))}
          </CardGrid>
        </Band>

        <Band tint>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <Kicker>02 — Numbers with receipts</Kicker>
            <ProvLegend />
          </div>
          <CardGrid min={gridMin.stat} style={{ marginTop: 40 }}>
            <StatBlock accent="wdbx" stat={{ value: "2.3ms", label: "p50 search latency", tag: "measured" }} />
            <StatBlock accent="wdbx" stat={{ value: "98.2%", label: "Recall@10", tag: "measured" }} />
            <StatBlock accent="abi" stat={{ value: "84×", label: "MatMul 1024×1024", tag: "measured" }} />
            <StatBlock accent="abbey" stat={{ value: "0.92", label: "Abbey empathy score", tag: "reported", note: "Internal eval harness" }} />
          </CardGrid>
        </Band>

        <Band>
          <Kicker color="#34D399">03 — Personas</Kicker>
          <H2>Three minds, one system</H2>
          <Lead>Abbey, Aviva, and Abi — trained registers over shared, verifiable memory. Not prompt templates.</Lead>
          <div style={{ marginTop: 48 }}>
            <PersonaCard />
          </div>
          <div style={{ marginTop: 44, maxWidth: 820 }}>
            <PullQuote accent="abbey">Think of a vector database as a library that files books by meaning, not title.</PullQuote>
          </div>
          <div style={{ marginTop: 36 }}>
            <Link to="/abbey" className="mlai-link-accent" style={{ ...mono, fontSize: 13, letterSpacing: "0.15em", color: "#34D399" }}>
              Meet Abbey →
            </Link>
          </div>
        </Band>

        <Band tint>
          <Kicker color="#A78BFA">04 — Principles</Kicker>
          <H2>How we hold ourselves</H2>
          <div style={{ marginTop: 48 }}>
            <DeepDive accent="abi" cols={3} items={principles} />
          </div>
        </Band>

        {/* Closing CTA over a sparser galaxy */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Galaxy accent="#00D4FF" accent2="#10B981" density={46} />
          <div
            aria-hidden
            style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 70% at 50% 110%,rgba(0,212,255,0.1),transparent 65%)" }}
          />
          <div
            aria-hidden
            style={{ position: "absolute", left: 0, right: 0, top: 0, height: 120, background: "linear-gradient(180deg,#0A0E16,transparent)" }}
          />
          <div style={{ position: "relative", ...shell, padding: "clamp(72px, 11vw, 110px) 24px", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "'Sora',sans-serif",
                fontWeight: 700,
                fontSize: fluid.ctaTitle,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: 0,
              }}
            >
              Where does your data have to live?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#94A3B8", maxWidth: 520, margin: "18px auto 0" }}>
              Tell us what you're building. We onboard small batches while the SDKs harden.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 36, justifyContent: "center", flexWrap: "wrap" }}>
              <PillLink to="/contact" primary>
                Request access
              </PillLink>
              <PillLink to="/research">Read the research →</PillLink>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Page>
  );
}
