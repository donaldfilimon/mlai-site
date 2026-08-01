import { useState } from "react";
import type { CSSProperties } from "react";
import { Nav, Footer, Callout, SpecList, Eyebrow } from "mlai-site";
import { Link } from "react-router-dom";
import { page, mono, Hero, HeroTitle, HeroSub } from "../components/site";

const label: CSSProperties = { ...mono, fontSize: 11, letterSpacing: "0.18em", color: "#64748B" };
const field: CSSProperties = {
  background: "#05070B", border: "1px solid rgba(255,255,255,0.14)", color: "#F1F5F9",
  padding: "13px 14px", fontFamily: "'Manrope',sans-serif", fontSize: 15, outline: "none",
  transition: "border-color 180ms ease",
};
const errText: CSSProperties = { ...mono, fontSize: 11, color: "#F87171", textTransform: "none" };

const DATA_OPTIONS = ["On-device only", "Hybrid", "Not sure yet"] as const;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");
  const [dataHome, setDataHome] = useState<(typeof DATA_OPTIONS)[number]>("On-device only");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const nameError = touched && name.trim().length === 0;
  const emailError = touched && !emailOk;
  const buildingError = touched && building.trim().length < 10;

  const submit = () => {
    if (name.trim() && emailOk && building.trim().length >= 10) setSubmitted(true);
    else setTouched(true);
  };

  return (
    <div style={page}>
      <Nav />
      <Hero accent="#00D4FF" accent2="#7C3AED" keyLight="rgba(0,212,255,0.13)">
        <Eyebrow accent="wdbx">Contact</Eyebrow>
        <HeroTitle>Request access.</HeroTitle>
        <HeroSub>Tell us what you're building and where the data has to live. We onboard small batches while the SDKs harden — expect a reply from an engineer, not a sequence.</HeroSub>
      </Hero>

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "48px 24px 96px", display: "grid", gridTemplateColumns: "7fr 5fr", gap: 48, alignItems: "start" }}>
        {!submitted ? (
          <div className="surface accent-edge" style={{ "--accent": "#00D4FF", padding: "40px 38px" } as CSSProperties}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={label}>Name</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ada Lovelace" style={field} />
                {nameError && <span style={errText}>Required</span>}
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={label}>Work email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ada@company.com" style={field} />
                {emailError && <span style={errText}>{email.trim() ? "That doesn't look like an email" : "Required"}</span>}
              </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 22 }}>
              <span style={label}>What are you building?</span>
              <textarea value={building} onChange={(e) => setBuilding(e.target.value)} rows={4} placeholder="A clinical-notes search tool that can't touch the cloud…" style={{ ...field, lineHeight: 1.6, resize: "vertical" }} />
              {buildingError && <span style={errText}>Tell us a sentence or two</span>}
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 22 }}>
              <span style={label}>Where does the data have to live?</span>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {DATA_OPTIONS.map((opt) => {
                  const on = dataHome === opt;
                  return (
                    <button key={opt} onClick={() => setDataHome(opt)} style={{
                      ...mono, fontSize: 12, letterSpacing: "0.12em", padding: "10px 18px", cursor: "pointer",
                      background: on ? "rgba(0,212,255,0.12)" : "transparent",
                      border: "1px solid " + (on ? "#00D4FF" : "rgba(255,255,255,0.14)"),
                      color: on ? "#00D4FF" : "#94A3B8", transition: "all 180ms ease",
                    }}>{opt}</button>
                  );
                })}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 34 }}>
              <button onClick={submit} style={{ ...mono, border: "1px solid #00D4FF", background: "#00D4FF", color: "#05070B", padding: "14px 30px", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", cursor: "pointer", transition: "all 180ms ease" }}>
                Submit request
              </button>
              <span style={{ ...mono, fontSize: 11, color: "#475569", textTransform: "none" }}>No sequence. No CRM drip. One reply.</span>
            </div>
          </div>
        ) : (
          <div className="surface accent-edge" style={{ "--accent": "#10B981", padding: "56px 48px", textAlign: "center" } as CSSProperties}>
            <div style={{ width: 52, height: 52, borderRadius: 99, border: "1px solid rgba(16,185,129,0.5)", color: "#34D399", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, margin: "0 auto" }}>✓</div>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", color: "#fff", margin: "24px 0 0" }}>Request received.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#94A3B8", maxWidth: 420, margin: "14px auto 0" }}>
              Thanks, {name}. An engineer will reply to <span style={{ color: "#CBD5E1" }}>{email}</span> within a few days. Meanwhile, the research index is the best tour of how the system thinks.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 30 }}>
              <Link to="/research" style={{ ...mono, border: "1px solid rgba(255,255,255,0.16)", color: "#CBD5E1", padding: "12px 22px", fontSize: 12, letterSpacing: "0.15em" }}>Read the research →</Link>
              <button onClick={() => { setSubmitted(false); setTouched(false); setName(""); setEmail(""); setBuilding(""); setDataHome("On-device only"); }}
                style={{ ...mono, background: "none", border: "none", color: "#64748B", fontSize: 12, letterSpacing: "0.15em", cursor: "pointer" }}>
                Send another
              </button>
            </div>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Callout accent="wdbx" label="What happens next">
            We read every request against one question: does the data genuinely have to stay on-device? If yes, you'll hear from us with a scoping call. If a cloud vector store already fits, we'll tell you that too.
          </Callout>
          <SpecList rows={[
            { k: "Email", v: "hello@mlai.example" },
            { k: "Response time", v: "A few days, from an engineer" },
            { k: "Onboarding", v: "Small batches while SDKs harden" },
          ]} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
