"use client";
import React from "react";

const featuredCards = [
  { src: "/brady.jpg", label: "Brady" },
  { src: "/jordan.jpg", label: "Jordan" },
  { src: "/trout.jpg", label: "Trout" },
  { src: "/charizard.png", label: "Charizard" },
  { src: "/gengar.jpg", label: "Gengar" },
  { src: "/flagg.jpg", label: "Flagg" },
  { src: "/celebrini.jpg", label: "Celebrini" },
];

const steps = [
  {
    num: "01",
    title: "Scan the card",
    text: "Use a phone camera or upload an image to identify the card and extract the key metadata instantly.",
  },
  {
    num: "02",
    title: "Predict the grade",
    text: "Estimate likely grading outcomes before you submit, reducing uncertainty and wasted time.",
  },
  {
    num: "03",
    title: "Understand value",
    text: "Blend grade probability with live comps and expected-value logic to see what the card is really worth.",
  },
  {
    num: "04",
    title: "See executable offers",
    text: "Surface real liquidity options when the economics make sense instead of forcing users into one path.",
  },
  {
    num: "05",
    title: "Route intelligently",
    text: "Choose the best next action across grading, marketplace sale, dealer sale, or direct offer.",
  },
];

const painPoints = [
  {
    title: "Pricing is fragmented",
    text: "Collectors bounce across apps, comps, and gut instinct to figure out what a card might be worth.",
  },
  {
    title: "Grading is a gamble",
    text: "Submission decisions often happen without enough clarity on likely outcomes or expected value.",
  },
  {
    title: "Liquidity is inefficient",
    text: "The best path to monetize a card is usually hard to discover, slow to execute, and overly manual.",
  },
];

const advantages = [
  {
    title: "AI-first decisioning",
    text: "Not just card identification. Cardinal is built to tell you what to do next.",
  },
  {
    title: "Built around EV",
    text: "Grade probability, pricing, offers, and routing work together as one economic engine.",
  },
  {
    title: "Designed for premium trust",
    text: "A cleaner, more credible front-end experience for collectors and partners alike.",
  },
  {
    title: "Extensible platform",
    text: "Starts with cards. Expands into the broader pricing and execution layer for collectibles.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="section-eyebrow">{children}</div>;
}

function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <div className={`logo-lockup ${compact ? "compact" : ""}`}>
        <img
          src="/logo-icon.png"
          alt="Cardinal Vision AI"
          className="logo-icon"
        />

        <div className="logo-copy">
          <div className="logo-title">Cardinal Vision AI</div>
          <div className="logo-subtitle">
            The decision layer for collectibles
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-lockup {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .logo-icon {
          height: 52px; /* 🔥 BIGGER LOGO */
          width: auto;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 6px 18px rgba(239, 51, 64, 0.35));
        }

        .logo-copy {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
        }

        .logo-title {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .logo-subtitle {
          font-size: 13px;
          color: #8f99b2;
          margin-top: 4px;
        }

        /* Optional compact mode (if used elsewhere) */
        .compact .logo-icon {
          height: 40px;
        }

        .compact .logo-title {
          font-size: 18px;
        }

        .compact .logo-subtitle {
          font-size: 11px;
        }
      `}</style>
    </>
  );
}
export default function Home() {
  return (
    <main className="page-shell">
      <style jsx global>{`
        :root {
          --bg: #07101f;
          --bg-2: #0b1427;
          --panel: rgba(255, 255, 255, 0.05);
          --panel-2: rgba(255, 255, 255, 0.07);
          --border: rgba(255, 255, 255, 0.1);
          --border-strong: rgba(255, 255, 255, 0.14);
          --text: #ffffff;
          --muted: #aab6cb;
          --muted-2: #cbd4e3;
          --accent: #ef3340;
          --accent-2: #c81e39;
          --accent-soft: rgba(239, 51, 64, 0.16);
          --blue-soft: rgba(74, 106, 255, 0.14);
          --shadow: 0 20px 60px rgba(0, 0, 0, 0.34);
          --radius: 26px;
          --radius-lg: 34px;
          --container: 1200px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 12% 10%, rgba(239, 51, 64, 0.14), transparent 22%),
            radial-gradient(circle at 88% 4%, rgba(74, 106, 255, 0.14), transparent 26%),
            linear-gradient(180deg, #060c18 0%, #091120 35%, #0b1427 100%);
          color: var(--text);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page-shell {
          min-height: 100vh;
          color: var(--text);
        }

        .container {
          width: min(var(--container), calc(100% - 40px));
          margin: 0 auto;
        }

        .glass {
          background: linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.04));
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          backdrop-filter: blur(14px);
        }

        .section {
          padding: 92px 0;
        }

        .section-tight {
          padding: 76px 0;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffadb6;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .section-eyebrow::before {
          content: "";
          display: inline-block;
          width: 30px;
          height: 1px;
          background: rgba(255,255,255,0.25);
        }

        .display-title {
          margin: 0;
          font-size: clamp(42px, 7.2vw, 84px);
          line-height: 0.94;
          letter-spacing: -0.055em;
          max-width: 760px;
        }

        .section-title {
          margin: 0 0 14px;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 0.96;
          letter-spacing: -0.05em;
          max-width: 820px;
        }

        .lead {
          margin: 0;
          max-width: 760px;
          color: var(--muted-2);
          font-size: clamp(18px, 2.1vw, 21px);
          line-height: 1.7;
        }

        .muted {
          color: var(--muted);
          line-height: 1.7;
        }

        .topbar-wrap {
          position: sticky;
          top: 0;
          z-index: 50;
          padding-top: 14px;
        }

        .topbar {
          width: min(1240px, calc(100% - 24px));
          margin: 0 auto;
          border-radius: 22px;
          padding: 14px 18px;
          background: rgba(8, 14, 28, 0.72);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 50px rgba(0,0,0,0.28);
        }

        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .logo-lockup {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .logo-lockup.compact .logo-icon {
          height: 42px;
        }

        .logo-icon {
          height: 52px;
          width: auto;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
        }

        .logo-copy {
          min-width: 0;
        }

        .logo-title {
          font-size: 20px;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          white-space: nowrap;
        }

        .logo-subtitle {
          margin-top: 5px;
          font-size: 12px;
          color: var(--muted);
          font-weight: 600;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 26px;
          color: #dce3ef;
          font-size: 14px;
          font-weight: 600;
        }

        .nav-link {
          opacity: 0.88;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }

        .nav-link:hover {
          opacity: 1;
          transform: translateY(-1px);
        }

        .cta-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          appearance: none;
          border: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 800;
          transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
          text-decoration: none;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-primary {
          color: #fff;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
          box-shadow: 0 16px 36px rgba(200, 30, 57, 0.36);
        }

        .btn-secondary {
          color: #fff;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .hero {
          padding: 54px 0 48px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.06fr 0.94fr;
          gap: 34px;
          align-items: stretch;
        }

        .hero-left {
          padding-top: 28px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .hero-proof {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 34px;
          max-width: 760px;
        }

        .proof-card {
          padding: 18px 18px 16px;
          border-radius: 22px;
        }

        .proof-title {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .proof-text {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.55;
          margin-top: 6px;
        }

        .card-strip {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 12px;
          align-items: end;
        }

        .card-tile {
          text-align: center;
        }

        .card-image-wrap {
          position: relative;
          border-radius: 18px;
          padding: 10px;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 36px rgba(0,0,0,0.32);
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 185px;
          object-fit: contain;
          display: block;
          border-radius: 12px;
        }

        .card-label {
          margin-top: 10px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
        }

        .hero-panel {
          position: relative;
          border-radius: 34px;
          padding: 22px;
          overflow: hidden;
          min-height: 100%;
        }

        .hero-panel::before {
          content: "";
          position: absolute;
          inset: -10% auto auto -10%;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(239,51,64,0.23), transparent 68%);
          pointer-events: none;
        }

        .hero-panel::after {
          content: "";
          position: absolute;
          right: -20px;
          top: -10px;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(74,106,255,0.18), transparent 68%);
          pointer-events: none;
        }

        .panel-header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .panel-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          color: #ffdbe0;
          background: rgba(239, 51, 64, 0.14);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .panel-label {
          color: #d7deeb;
          font-size: 14px;
          font-weight: 600;
        }

        .workflow-rail {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .workflow-pill {
          padding: 8px 11px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          color: #fff;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .workflow-pill.active {
          background: linear-gradient(135deg, #ff5b66, #bc1735);
          border-color: transparent;
        }

        .decision-card {
          position: relative;
          z-index: 1;
          border-radius: 28px;
          padding: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.04));
          border: 1px solid var(--border-strong);
        }

        .decision-top {
          display: grid;
          grid-template-columns: 132px 1fr;
          gap: 18px;
          align-items: center;
        }

        .decision-logo-box {
          height: 164px;
          border-radius: 24px;
          display: grid;
          place-items: center;
          background:
            linear-gradient(145deg, rgba(239,51,64,0.18), rgba(22,34,68,0.88));
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
        }

        .decision-logo-box img {
          height: 82px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .decision-title {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin: 0 0 10px;
        }

        .decision-subtext {
          margin: 0 0 14px;
          color: var(--muted);
          line-height: 1.6;
          font-size: 14px;
        }

        .decision-metrics {
          display: grid;
          gap: 2px;
        }

        .metric-row {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .metric-row:last-child {
          border-bottom: none;
        }

        .metric-label {
          color: var(--muted);
          font-size: 14px;
        }

        .metric-value {
          font-size: 15px;
          font-weight: 800;
        }

        .decision-footer {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .mini-stat {
          border-radius: 18px;
          padding: 14px;
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .mini-stat-kicker {
          color: #ffadb6;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .mini-stat-value {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 4px;
        }

        .mini-stat-text {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.5;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .grid-5 {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .info-card {
          border-radius: 24px;
          padding: 24px;
        }

        .info-card-title {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin: 0 0 10px;
        }

        .info-card-text {
          color: var(--muted);
          line-height: 1.72;
          font-size: 15px;
          margin: 0;
        }

        .compare-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          align-items: start;
        }

        .compare-panel {
          border-radius: 30px;
          overflow: hidden;
        }

        .compare-row {
          padding: 22px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .compare-row:last-child {
          border-bottom: none;
        }

        .compare-kicker {
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .compare-kicker.cardinal {
          color: #ffb2bb;
        }

        .access-panel {
          border-radius: 34px;
          padding: 30px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 28px;
          align-items: center;
        }

        .form-shell {
          border-radius: 26px;
          padding: 20px;
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .field {
          display: block;
          margin-bottom: 14px;
          color: #dde4ef;
          font-size: 14px;
          font-weight: 600;
        }

        .input,
        .select {
          width: 100%;
          margin-top: 8px;
          min-height: 50px;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(6,10,24,0.76);
          color: #fff;
          font-size: 15px;
          outline: none;
        }

        .input::placeholder {
          color: #8f99b2;
        }

        .form-note {
          margin-top: 12px;
          color: #8f99b2;
          font-size: 13px;
          line-height: 1.6;
        }

        .footer {
          padding: 28px 0 42px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .footer-copy {
          color: #8f99b2;
          font-size: 14px;
        }

        @media (max-width: 1180px) {
          .hero-grid,
          .access-panel,
          .compare-wrap {
            grid-template-columns: 1fr;
          }

          .hero-left {
            padding-top: 14px;
          }

          .grid-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .card-strip {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 960px) {
          .nav-links {
            display: none;
          }

          .topbar-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .hero-proof,
          .grid-3,
          .grid-4,
          .decision-footer {
            grid-template-columns: 1fr;
          }

          .decision-top {
            grid-template-columns: 1fr;
          }

          .decision-logo-box {
            height: 140px;
          }
        }

        @media (max-width: 720px) {
          .container {
            width: min(var(--container), calc(100% - 24px));
          }

          .topbar-wrap {
            padding-top: 10px;
          }

          .topbar {
            width: calc(100% - 16px);
            padding: 14px;
            border-radius: 18px;
          }

          .logo-title {
            white-space: normal;
            font-size: 18px;
          }

          .logo-subtitle {
            white-space: normal;
          }

          .hero {
            padding: 34px 0 26px;
          }

          .section,
          .section-tight {
            padding: 64px 0;
          }

          .hero-actions,
          .cta-row {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
          }

          .card-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .card-image {
            height: 165px;
          }

          .grid-5 {
            grid-template-columns: 1fr;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="topbar-wrap">
        <header className="topbar">
          <div className="topbar-inner">
            <LogoLockup />

            <nav className="nav-links" aria-label="Primary">
              <a href="#how" className="nav-link">
                How it works
              </a>
              <a href="#why" className="nav-link">
                Why Cardinal
              </a>
              <a href="#vision" className="nav-link">
                Vision
              </a>
              <a href="#access" className="btn btn-primary">
                Early Access
              </a>
            </nav>
          </div>
        </header>
      </div>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <SectionEyebrow>AI-powered collectibles intelligence</SectionEyebrow>

            <h1 className="display-title">
              <h1 className="display-title">
  Turn your trading cards into liquid assets.
</h1>
            </h1>

            <p className="lead" style={{ marginTop: 22 }}>
              Cardinal combines AI grading probability, real-time valuation, and
              intelligent liquidity routing to help collectors understand what
              their cards are worth and what to do next.
            </p>

            <div className="hero-actions">
              <a href="#access" className="btn btn-primary">
                Request Early Access
              </a>
              <a href="#how" className="btn btn-secondary">
                See How It Works
              </a>
            </div>

            <div className="hero-proof">
              {[
                ["AI-led", "Grade probability, pricing intelligence, and smart routing in one workflow."],
                ["Instant clarity", "See the likely economics before you spend time or money."],
                ["Built for liquidity", "Go from scan to actionable next step with less friction."],
              ].map(([title, text]) => (
                <div key={title} className="proof-card glass">
                  <div className="proof-title">{title}</div>
                  <div className="proof-text">{text}</div>
                </div>
              ))}
            </div>

            <div className="card-strip">
              {featuredCards.map((card) => (
                <div className="card-tile" key={card.src}>
                  <div className="card-image-wrap">
                    <img src={card.src} alt={card.label} className="card-image" />
                  </div>
                  <div className="card-label">{card.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel glass">
            <div className="panel-header">
              <div className="panel-pill">Live product vision</div>
              <div className="panel-label">Card-to-liquidity workflow</div>
            </div>

            <div className="workflow-rail">
              {["Scan", "AI Grade", "Value", "Offer", "Route"].map((step, index) => (
                <div
                  key={step}
                  className={`workflow-pill ${index === 0 ? "active" : ""}`}
                >
                  {step}
                </div>
              ))}
            </div>

            <div className="decision-card">
              <div className="decision-top">
                <div className="decision-logo-box">
                  <img src="/logo-icon.png" alt="Cardinal" />
                </div>

                <div>
                  <h3 className="decision-title">Premium decision engine</h3>
                  <p className="decision-subtext">
                    A front-end experience collectors can trust with an economic
                    engine underneath that evaluates value, risk, and best execution.
                  </p>

                  <div className="decision-metrics">
                    {[
                      ["Likely grade band", "PSA 8–9"],
                      ["Estimated market value", "$1,040"],
                      ["Instant offer", "$910"],
                      ["Best next step", "Grade then route"],
                    ].map(([label, value]) => (
                      <div className="metric-row" key={label}>
                        <span className="metric-label">{label}</span>
                        <span className="metric-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="decision-footer">
                <div className="mini-stat">
                  <div className="mini-stat-kicker">Identify</div>
                  <div className="mini-stat-value">&lt; 3 sec</div>
                  <div className="mini-stat-text">
                    Fast card recognition and metadata extraction.
                  </div>
                </div>

                <div className="mini-stat">
                  <div className="mini-stat-kicker">Grade range</div>
                  <div className="mini-stat-value">EV-led</div>
                  <div className="mini-stat-text">
                    Submission logic based on likely outcomes, not guesswork.
                  </div>
                </div>

                <div className="mini-stat">
                  <div className="mini-stat-kicker">Liquidity</div>
                  <div className="mini-stat-value">Actionable</div>
                  <div className="mini-stat-text">
                    Better monetization paths surfaced inside one flow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="section-tight">
        <div className="container">
          <SectionEyebrow>Why now</SectionEyebrow>
          <h2 className="section-title">
            A major category still runs on friction, guesswork, and delay.
          </h2>
          <p className="lead" style={{ maxWidth: 800, marginBottom: 30 }}>
            Valuable cards often sit dormant because grading takes time, pricing is
            inconsistent, and selling is fragmented. Cardinal is built to turn that
            broken journey into one intelligent decision layer.
          </p>

          <div className="grid-3">
            {painPoints.map((item) => (
              <div className="info-card glass" key={item.title}>
                <h3 className="info-card-title">{item.title}</h3>
                <p className="info-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how"
        className="section"
        style={{
          background: "rgba(255,255,255,0.025)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="section-title">From card image to best next action.</h2>
          <p className="lead" style={{ maxWidth: 820, marginBottom: 30 }}>
            Cardinal’s workflow is simple on the surface and powerful under the hood:
            identify the asset, estimate grade outcomes, understand the economics,
            and route to the best liquidity path.
          </p>

          <div className="grid-5">
            {steps.map((step) => (
              <div className="info-card glass" key={step.num}>
                <div
                  style={{
                    color: "#ffadb6",
                    fontWeight: 800,
                    marginBottom: 12,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                  }}
                >
                  {step.num}
                </div>
                <h3 className="info-card-title" style={{ marginTop: 0 }}>
                  {step.title}
                </h3>
                <p className="info-card-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container compare-wrap">
          <div>
            <SectionEyebrow>Why Cardinal</SectionEyebrow>
            <h2 className="section-title">
              More than grading. Built for decision-making.
            </h2>
            <p className="lead" style={{ maxWidth: 700 }}>
              Traditional grading services answer one question. Cardinal helps answer
              the bigger ones: what is this card worth, what is the best move, and
              how should I execute?
            </p>
          </div>

          <div className="compare-panel glass">
            <div className="compare-row">
              <div className="compare-kicker">Traditional grading</div>
              <div className="muted">
                One destination, one outcome, and no built-in intelligence around
                liquidity or best execution.
              </div>
            </div>

            <div className="compare-row">
              <div className="compare-kicker cardinal">Cardinal</div>
              <div className="muted">
                Pricing intelligence, grade probability, optional offers, and
                routing logic in one premium experience.
              </div>
            </div>

            <div className="compare-row">
              <div className="compare-kicker">For collectors</div>
              <div className="muted">
                More confidence, more speed, and better decision quality before
                spending money on grading or listing.
              </div>
            </div>

            <div className="compare-row">
              <div className="compare-kicker">For buyers and partners</div>
              <div className="muted">
                Better-qualified supply, stronger underwriting, and improved
                pricing signals entering the market.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="section-tight">
        <div className="container">
          <SectionEyebrow>The bigger vision</SectionEyebrow>
          <h2 className="section-title">
            Every major asset class gets a pricing and execution layer.
          </h2>
          <p className="lead" style={{ maxWidth: 820, marginBottom: 30 }}>
            Stocks have Bloomberg. Real estate has Zillow. Autos have Carvana.
            Cardinal is built to become the intelligence and liquidity layer for
            collectibles.
          </p>

          <div className="grid-4">
            {advantages.map((item) => (
              <div className="info-card glass" key={item.title}>
                <h3 className="info-card-title">{item.title}</h3>
                <p className="info-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="access" className="section">
        <div className="container access-panel glass">
          <div>
            <SectionEyebrow>Early access</SectionEyebrow>
            <h2 className="section-title" style={{ maxWidth: 680 }}>
              Be first to experience Cardinal.
            </h2>
            <p className="lead" style={{ maxWidth: 700 }}>
              Join the early access list to get launch updates, product news,
              partnership announcements, and early platform access as Cardinal
              rolls out the next generation of collectible intelligence and liquidity.
            </p>
          </div>

          <form action="#" method="POST" className="form-shell">
            <label className="field">
              Name
              <input type="text" name="name" placeholder="Your name" className="input" />
            </label>

            <label className="field">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="input"
              />
            </label>

            <label className="field">
              I’m interested as a...
              <select name="interest" className="select" defaultValue="Collector">
                <option>Collector</option>
                <option>Dealer</option>
                <option>Marketplace partner</option>
                <option>Investor</option>
              </select>
            </label>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Request Early Access
            </button>

            <div className="form-note">
              Replace this later with a real Formspree, HubSpot, or Typeform endpoint.
            </div>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <LogoLockup compact />
          <div className="footer-copy">© 2026 Cardinal Vision AI</div>
        </div>
      </footer>
    </main>
  );
}
