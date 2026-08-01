import { useState } from "react";
import type { CSSProperties } from "react";
import { Nav, Footer, Callout, SpecList, Eyebrow } from "../ds";
import { Link } from "react-router-dom";
import { Page, Main, mono, Hero, HeroTitle, HeroSub } from "../components/site";

const label: CSSProperties = { ...mono, fontSize: 11, letterSpacing: "0.18em", color: "#7C8BA1" };
const field: CSSProperties = {
  background: "#05070B",
  border: "1px solid rgba(255,255,255,0.14)",
  color: "#F1F5F9",
  padding: "13px 14px",
  fontFamily: "'Manrope',sans-serif",
  fontSize: 15,
  outline: "none",
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
    <Page>
      <Nav />
      <Main>
        <Hero accent="#00D4FF" accent2="#7C3AED" keyLight="rgba(0,212,255,0.13)">
          <Eyebrow accent="wdbx">Contact</Eyebrow>
          <HeroTitle>Request access.</HeroTitle>
          <HeroSub>
            Tell us what you're building and where the data has to live. We onboard small batches while the SDKs harden — expect a reply from an engineer, not a
            sequence.
          </HeroSub>
        </Hero>

        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "48px 24px 96px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {!submitted ? (
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="surface accent-edge"
              style={{ "--accent": "#00D4FF", padding: "40px 38px" } as CSSProperties}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 22 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={label}>Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    autoComplete="name"
                    aria-invalid={nameError || undefined}
                    aria-describedby={nameError ? "err-name" : undefined}
                    style={field}
                  />
                  {nameError && (
                    <span id="err-name" style={errText}>
                      Required
                    </span>
                  )}
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={label}>Work email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ada@company.com"
                    autoComplete="email"
                    aria-invalid={emailError || undefined}
                    aria-describedby={emailError ? "err-email" : undefined}
                    style={field}
                  />
                  {emailError && (
                    <span id="err-email" style={errText}>
                      {email.trim() ? "That doesn't look like an email" : "Required"}
                    </span>
                  )}
                </label>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 22 }}>
                <span style={label}>What are you building?</span>
                <textarea
                  value={building}
                  onChange={(e) => setBuilding(e.target.value)}
                  rows={4}
                  placeholder="A clinical-notes search tool that can't touch the cloud…"
                  aria-invalid={buildingError || undefined}
                  aria-describedby={buildingError ? "err-building" : undefined}
                  style={{ ...field, lineHeight: 1.6, resize: "vertical" }}
                />
                {buildingError && (
                  <span id="err-building" style={errText}>
                    Tell us a sentence or two
                  </span>
                )}
              </label>
              {/* Single-choice chips — a radiogroup, so arrow keys and screen readers
                treat it as the one-of-three question it actually is. */}
              <fieldset style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 22, border: 0, padding: 0, margin: "22px 0 0" }}>
                <legend style={{ ...label, padding: 0 }}>Where does the data have to live?</legend>
                <div role="radiogroup" aria-label="Where does the data have to live?" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
                  {DATA_OPTIONS.map((opt) => {
                    const on = dataHome === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        role="radio"
                        aria-checked={on}
                        onClick={() => setDataHome(opt)}
                        style={{
                          ...mono,
                          fontSize: 12,
                          letterSpacing: "0.12em",
                          padding: "10px 18px",
                          cursor: "pointer",
                          background: on ? "rgba(0,212,255,0.12)" : "transparent",
                          border: "1px solid " + (on ? "#00D4FF" : "rgba(255,255,255,0.14)"),
                          color: on ? "#00D4FF" : "#94A3B8",
                          transition: "all 180ms ease",
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 34, flexWrap: "wrap" }}>
                <button type="submit" className="mlai-pill mlai-pill-primary" style={{ padding: "14px 30px", cursor: "pointer" }}>
                  Submit request
                </button>
                <span style={{ ...mono, fontSize: 11, color: "#6E7D93", textTransform: "none" }}>No sequence. No CRM drip. One reply.</span>
              </div>
            </form>
          ) : (
            /* role=status so the swap from form to confirmation is announced. */
            <div role="status" className="surface accent-edge" style={{ "--accent": "#10B981", padding: "56px 48px", textAlign: "center" } as CSSProperties}>
              <div
                aria-hidden
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 99,
                  border: "1px solid rgba(16,185,129,0.5)",
                  color: "#34D399",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  margin: "0 auto",
                }}
              >
                ✓
              </div>
              <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", color: "#fff", margin: "24px 0 0" }}>
                Request received.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#94A3B8", maxWidth: 420, margin: "14px auto 0" }}>
                Thanks, {name}. An engineer will reply to <span style={{ color: "#CBD5E1" }}>{email}</span> within a few days. Meanwhile, the research index is
                the best tour of how the system thinks.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 30 }}>
                <Link
                  to="/research"
                  className="mlai-link-accent"
                  style={{ ...mono, border: "1px solid rgba(255,255,255,0.16)", color: "#CBD5E1", padding: "12px 22px", fontSize: 12, letterSpacing: "0.15em" }}
                >
                  Read the research →
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setTouched(false);
                    setName("");
                    setEmail("");
                    setBuilding("");
                    setDataHome("On-device only");
                  }}
                  style={{ ...mono, background: "none", border: "none", color: "#7C8BA1", fontSize: 12, letterSpacing: "0.15em", cursor: "pointer" }}
                >
                  Send another
                </button>
              </div>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Callout accent="wdbx" label="What happens next">
              We read every request against one question: does the data genuinely have to stay on-device? If yes, you'll hear from us with a scoping call. If a
              cloud vector store already fits, we'll tell you that too.
            </Callout>
            <SpecList
              rows={[
                { k: "Email", v: "hello@mlai.example" },
                { k: "Response time", v: "A few days, from an engineer" },
                { k: "Onboarding", v: "Small batches while SDKs harden" },
              ]}
            />
          </div>
        </div>
      </Main>
      <Footer />
    </Page>
  );
}
