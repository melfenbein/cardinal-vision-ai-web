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

const howSteps = [
  {
    num: "01",
    title: "Identify the asset",
    text: "Use a phone camera or upload an image to identify the card instantly and structure the underlying metadata.",
  },
  {
    num: "02",
    title: "Model grade outcomes",
    text: "Cardinal Engine estimates likely grading outcomes before capital, time, or submission fees are committed.",
  },
  {
    num: "03",
    title: "Determine value",
    text: "Grade probability, live comps, and expected-value logic work together to estimate true economic value.",
  },
  {
    num: "04",
    title: "Surface liquidity options",
    text: "Reveal executable pathways across grading, direct offers, dealer sales, and marketplace liquidity when the economics justify action.",
  },
  {
    num: "05",
    title: "Route intelligently",
    text: "Choose the optimal next step based on return potential, speed, risk, and execution quality.",
  },
];

const enginePillars = [
  {
    title: "Grade Probability",
    text: "Predict likely grading bands before submission and reduce decision-making under uncertainty.",
  },
  {
    title: "Pricing Intelligence",
    text: "Continuously interpret market signals, comps, and condition-sensitive value ranges.",
  },
  {
    title: "Expected Value Logic",
    text: "Model the economics of hold, grade, sell, or route based on the asset and current market conditions.",
  },
  {
    title: "Liquidity Routing",
    text: "Direct assets toward the highest-quality execution path rather than forcing every user into one destination.",
  },
];

const infrastructureComparisons = [
  [
    "Traditional grading",
    "A single destination with no built-in intelligence around valuation, liquidity, underwriting, or best execution.",
  ],
  [
    "Marketplaces",
    "Useful for distribution, but fragmented, manual, and often disconnected from grade probability and economic decision-making.",
  ],
  [
    "Cardinal + Cardinal Engine",
    "A unified decision and execution layer combining pricing intelligence, grade modeling, and liquidity routing in one system.",
  ],
  [
    "Strategic advantage",
    "A layer that can sit above grading, marketplaces, dealers, and buyers to improve pricing quality and execution efficiency across the ecosystem.",
  ],
];

const founderStats = [
  ["$484M exit", "Built and scaled a leading digital platform to strategic acquisition."],
  ["$500M+ IPO", "Led growth and go-to-market efforts at public-market scale."],
  ["Enterprise AI", "Deep experience deploying AI and commerce solutions with major enterprises."],
  ["Marketplace DNA", "Background across pricing, demand creation, monetization, and transaction-driven platforms."],
];

const visionCards = [
  {
    title: "Infrastructure thesis",
    text: "Collectibles still lack a true decision and execution layer. Cardinal is built to become that missing infrastructure.",
  },
  {
    title: "Economic intelligence",
    text: "Cardinal Engine is designed to tell the market not just what an asset is, but what should happen next.",
  },
  {
    title: "Trust and quality",
    text: "A premium experience for collectors, partners, dealers, and future market participants.",
  },
  {
    title: "Platform expansion",
    text: "Starts with cards. Expands into the broader pricing, underwriting, and liquidity backbone for collectibles.",
  },
];

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 12% 10%, rgba(239,51,64,0.14), transparent 22%), radial-gradient(circle at 88% 4%, rgba(74,106,255,0.14), transparent 26%), linear-gradient(180deg, #060c18 0%, #091120 35%, #0b1427 100%)",
  color: "#fff",
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const containerStyle: React.CSSProperties = {
  width: "min(1200px, calc(100% - 40px))",
  margin: "0 auto",
};

const glassStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.34)",
  backdropFilter: "blur(14px)",
};

const sectionStyle: React.CSSProperties = {
  padding: "92px 0",
};

const sectionTitleStyle: React.CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(34px, 5vw, 58px)",
  lineHeight: 0.96,
  letterSpacing: "-0.05em",
  maxWidth: 880,
};

const leadStyle: React.CSSProperties = {
  margin: 0,
  maxWidth: 780,
  color: "#CBD4E3",
  fontSize: "clamp(18px, 2.1vw, 21px)",
  lineHeight: 1.7,
};

const mutedStyle: React.CSSProperties = {
  color: "#AAB6CB",
  lineHeight: 1.7,
};

const buttonPrimary: React.CSSProperties = {
  appearance: "none",
  border: 0,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  fontSize: 15,
  fontWeight: 800,
  color: "#fff",
  background: "linear-gradient(135deg, #EF3340 0%, #C81E39 100%)",
  boxShadow: "0 16px 36px rgba(200, 30, 57, 0.36)",
  textDecoration: "none",
};

const buttonSecondary: React.CSSProperties = {
  appearance: "none",
  border: "1px solid rgba(255,255,255,0.12)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  fontSize: 15,
  fontWeight: 800,
  color: "#fff",
  background: "rgba(255,255,255,0.05)",
  textDecoration: "none",
};

const navLinkStyle: React.CSSProperties = {
  color: "inherit",
  textDecoration: "none",
  opacity: 0.96,
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        color: "#FFADB6",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        marginBottom: 16,
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 30,
          height: 1,
          background: "rgba(255,255,255,0.25)",
        }}
      />
      {children}
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={{ ...glassStyle, borderRadius: 24, padding: 24 }}>
      <h3
        style={{
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>
      <p style={{ ...mutedStyle, margin: 0, fontSize: 15 }}>{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main style={pageStyle}>
     <div
  style={{
    position: "sticky",
    top: 0,
    zIndex: 60,
    paddingTop: 18,
  }}
>
  <header
    style={{
      width: "min(1280px, calc(100% - 28px))",
      margin: "0 auto",
      borderRadius: 28,
      padding: "18px 24px",
      background: "rgba(8, 14, 28, 0.82)",
      border: "1px solid rgba(255,255,255,0.12)",
      backdropFilter: "blur(20px)",
      boxShadow: "0 22px 60px rgba(0,0,0,0.34)",
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: 24,
      }}
    >
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          textDecoration: "none",
          color: "#fff",
          minWidth: 0,
        }}
      >
        <div
          style={{
            height: 84,
            width: 84,
            borderRadius: 22,
            display: "grid",
            placeItems: "center",
            background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 16px 32px rgba(0,0,0,0.24)",
            flexShrink: 0,
          }}
        >
          <img
            src="/logo-icon.png"
            alt="Cardinal"
            style={{
              height: 54,
              width: 54,
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 8px 20px rgba(239,51,64,0.32))",
            }}
          />
        </div>

        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "#FFFFFF",
            }}
          >
            Cardinal
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#AAB6CB",
            }}
          >
            Vision AI · Cardinal Engine
          </div>
        </div>
      </a>

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 26,
          color: "#DCE3EF",
          fontSize: 15,
          fontWeight: 700,
          flexWrap: "wrap",
        }}
      >
        <a href="#how" style={{ ...navLinkStyle, padding: "10px 0" }}>
          How It Works
        </a>
        <a href="#why" style={{ ...navLinkStyle, padding: "10px 0" }}>
          Why Cardinal
        </a>
        <a href="#engine" style={{ ...navLinkStyle, padding: "10px 0" }}>
          Cardinal Engine
        </a>
        <a href="#founder" style={{ ...navLinkStyle, padding: "10px 0" }}>
          Founder
        </a>
        <a href="#vision" style={{ ...navLinkStyle, padding: "10px 0" }}>
          Vision
        </a>
      </nav>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 12,
        }}
      >
        <a
          href="#engine"
          style={{
            appearance: "none",
            border: "1px solid rgba(255,255,255,0.12)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 54,
            padding: "0 20px",
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 800,
            color: "#FFFFFF",
            background: "rgba(255,255,255,0.05)",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Explore Engine
        </a>

        <a
          href="#access"
          style={{
            appearance: "none",
            border: 0,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 56,
            padding: "0 24px",
            borderRadius: 999,
            fontSize: 15,
            fontWeight: 900,
            color: "#fff",
            background: "linear-gradient(135deg, #EF3340 0%, #C81E39 100%)",
            boxShadow: "0 18px 40px rgba(200, 30, 57, 0.38)",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Get Access
        </a>
      </div>
    </div>
  </header>
</div>

      <section style={{ padding: "56px 0 52px" }}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: 34,
            alignItems: "stretch",
          }}
        >
          <div style={{ paddingTop: 28 }}>
            <SectionEyebrow>Powered by Cardinal Engine</SectionEyebrow>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(44px, 7vw, 84px)",
                lineHeight: 0.93,
                letterSpacing: "-0.06em",
                maxWidth: 780,
              }}
            >
              The Decision Layer for Collectibles
            </h1>

            <p style={{ ...leadStyle, marginTop: 22 }}>
              Powered by Cardinal Engine, Cardinal predicts grade, estimates value,
              and determines the optimal path to liquidity from a single scan.
            </p>

            <p
              style={{
                marginTop: 16,
                color: "#E6EBF5",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.01em",
              }}
            >
              A new infrastructure layer for a fragmented asset class.
            </p>

            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 30,
                flexWrap: "wrap",
              }}
            >
              <a href="#access" style={buttonPrimary}>
                Get Early Access
              </a>
              <a href="#engine" style={buttonSecondary}>
                Explore Cardinal Engine
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 14,
                marginTop: 34,
                maxWidth: 780,
              }}
            >
              {[
                [
                  "Cardinal Engine",
                  "A proprietary system that evaluates grade probability, pricing, and execution in real time.",
                ],
                [
                  "Economic clarity",
                  "Understand expected value before committing time, capital, or grading fees.",
                ],
                [
                  "Liquidity routing",
                  "Route assets to the highest-value outcome across grading, marketplaces, and direct offers.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  style={{
                    ...glassStyle,
                    borderRadius: 22,
                    padding: "18px 18px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      color: "#AAB6CB",
                      fontSize: 14,
                      lineHeight: 1.55,
                      marginTop: 6,
                    }}
                  >
                    {text}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 34,
                display: "grid",
                gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
                gap: 12,
                alignItems: "end",
              }}
            >
              {featuredCards.map((card) => (
                <div key={card.src} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      borderRadius: 18,
                      padding: 10,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 20px 36px rgba(0,0,0,0.32)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={card.src}
                      alt={card.label}
                      style={{
                        width: "100%",
                        height: 185,
                        objectFit: "contain",
                        display: "block",
                        borderRadius: 12,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      color: "#AAB6CB",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              ...glassStyle,
              position: "relative",
              borderRadius: 34,
              padding: 22,
              overflow: "hidden",
              minHeight: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 18,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "9px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#FFDbe0",
                  background: "rgba(239, 51, 64, 0.14)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Powered by Cardinal Engine
              </div>
              <div style={{ color: "#D7DEEB", fontSize: 14, fontWeight: 600 }}>
                From scan to execution
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 18,
              }}
            >
              {["Identify", "Model", "Price", "Offer", "Route"].map((step, index) => (
                <div
                  key={step}
                  style={{
                    padding: "8px 11px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#fff",
                    background:
                      index === 0
                        ? "linear-gradient(135deg, #FF5B66, #BC1735)"
                        : "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {step}
                </div>
              ))}
            </div>

            <div
              style={{
                borderRadius: 28,
                padding: 20,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.04))",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "132px 1fr",
                  gap: 18,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: 164,
                    borderRadius: 24,
                    display: "grid",
                    placeItems: "center",
                    background:
                      "linear-gradient(145deg, rgba(239,51,64,0.18), rgba(22,34,68,0.88))",
                    border: "1px solid rgba(255,255,255,0.1)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Cardinal"
                    style={{
                      height: 84,
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      margin: "0 0 10px",
                    }}
                  >
                    Cardinal Engine
                  </h3>

                  <p
                    style={{
                      color: "#AAB6CB",
                      lineHeight: 1.6,
                      fontSize: 14,
                      margin: "0 0 14px",
                    }}
                  >
                    Cardinal Engine is a proprietary decision system that evaluates
                    value, risk, and execution — transforming collectibles from
                    static assets into programmable financial outcomes.
                  </p>

                  {[
                    ["Likely grade band", "PSA 8–9"],
                    ["Estimated market value", "$1,040"],
                    ["Instant offer", "$910"],
                    ["Best next step", "Grade then route"],
                  ].map(([label, value], index, arr) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 18,
                        alignItems: "center",
                        padding: "12px 0",
                        borderBottom:
                          index === arr.length - 1
                            ? "none"
                            : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span style={{ color: "#AAB6CB", fontSize: 14 }}>{label}</span>
                      <span style={{ fontSize: 15, fontWeight: 800 }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 18,
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 12,
              }}
            >
              {[
                ["Pricing", "Live market logic"],
                ["Decisioning", "Expected-value driven"],
                ["Liquidity", "Multi-path execution"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  style={{
                    borderRadius: 20,
                    padding: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{title}</div>
                  <div style={{ ...mutedStyle, fontSize: 13, marginTop: 4 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why" style={{ padding: "82px 0" }}>
        <div style={containerStyle}>
          <SectionEyebrow>Why now</SectionEyebrow>
          <h2 style={sectionTitleStyle}>
            A fragmented asset class is missing its decision layer.
          </h2>
          <p style={{ ...leadStyle, maxWidth: 850, marginBottom: 30 }}>
            Collectibles represent a large and growing asset class, yet pricing,
            grading, and liquidity remain fragmented and inefficient. Cardinal,
            powered by Cardinal Engine, is built to unify these functions into a
            single decision and execution layer.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            <InfoCard
              title="Pricing is fragmented"
              text="Collectors, dealers, and buyers move across comps, marketplaces, auctions, and instinct just to estimate value."
            />
            <InfoCard
              title="Grading lacks decision support"
              text="Submission decisions are frequently made without enough clarity on likely outcomes, risk, or expected return."
            />
            <InfoCard
              title="Liquidity is inefficient"
              text="The best monetization path is often unclear, manual, and disconnected from the economics of the asset itself."
            />
          </div>
        </div>
      </section>

      <section
        id="how"
        style={{
          ...sectionStyle,
          background: "rgba(255,255,255,0.025)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={containerStyle}>
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 style={sectionTitleStyle}>From Asset Identification to Execution</h2>
          <p style={{ ...leadStyle, maxWidth: 850, marginBottom: 30 }}>
            Cardinal Engine converts a single card image into a structured economic
            decision — combining identification, grade probability, pricing
            intelligence, and liquidity routing in one system.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {howSteps.map((step) => (
              <div
                key={step.num}
                style={{ ...glassStyle, borderRadius: 24, padding: 24 }}
              >
                <div
                  style={{
                    color: "#FFADB6",
                    fontWeight: 800,
                    marginBottom: 12,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    margin: "0 0 10px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ ...mutedStyle, margin: 0, fontSize: 15 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="engine" style={sectionStyle}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "0.98fr 1.02fr",
            gap: 24,
            alignItems: "start",
          }}
        >
          <div>
            <SectionEyebrow>Cardinal Engine</SectionEyebrow>
            <h2 style={sectionTitleStyle}>
              The proprietary intelligence layer behind every decision.
            </h2>
            <p style={{ ...leadStyle, maxWidth: 720 }}>
              Cardinal Engine is designed to evaluate collectible assets through
              the lens of probability, pricing, and execution. It does not simply
              identify what an asset is — it helps determine what should happen next.
            </p>

            <p style={{ ...mutedStyle, marginTop: 18, maxWidth: 720 }}>
              Over time, Cardinal Engine can evolve into the pricing, decisioning,
              and liquidity backbone for the collectibles ecosystem.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {enginePillars.map((item) => (
              <InfoCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
            alignItems: "start",
          }}
        >
          <div>
            <SectionEyebrow>Why Cardinal</SectionEyebrow>
            <h2 style={sectionTitleStyle}>The Missing Infrastructure Layer</h2>
            <p style={{ ...leadStyle, maxWidth: 720 }}>
              Existing solutions address individual steps — grading, marketplaces,
              or pricing. Cardinal integrates these into a unified system powered
              by Cardinal Engine, enabling faster decisions, better pricing, and
              more efficient liquidity across the ecosystem.
            </p>
          </div>

          <div style={{ ...glassStyle, borderRadius: 30, overflow: "hidden" }}>
            {infrastructureComparisons.map(([title, text], i) => (
              <div
                key={title}
                style={{
                  padding: "22px 24px",
                  borderBottom:
                    i === infrastructureComparisons.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    marginBottom: 6,
                    color:
                      title === "Cardinal + Cardinal Engine"
                        ? "#FFB2BB"
                        : "#FFFFFF",
                  }}
                >
                  {title}
                </div>
                <div style={mutedStyle}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="founder"
        style={{
          ...sectionStyle,
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "0.96fr 1.04fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <SectionEyebrow>Founder</SectionEyebrow>

            <h2 style={sectionTitleStyle}>
              Built by operators who have scaled and exited.
            </h2>

            <p style={{ ...leadStyle, maxWidth: 720 }}>
              Cardinal is being built with the discipline of enterprise AI, SaaS,
              and marketplace platforms that have scaled to public markets and
              strategic exits.
            </p>

            <p style={{ ...mutedStyle, marginTop: 16, maxWidth: 720 }}>
              This is not a hobbyist product thesis. It is a deliberate effort to
              build a category-defining infrastructure layer in collectibles,
              informed by real operating experience across growth, monetization,
              partnerships, and market creation.
            </p>

            <div
              style={{
                marginTop: 22,
                fontWeight: 800,
                fontSize: 15,
                color: "#F4F7FB",
              }}
            >
              Proven operator DNA. Market-scale ambition.
            </div>
          </div>

          <div
            style={{
              ...glassStyle,
              borderRadius: 30,
              padding: 26,
            }}
          >
            <div style={{ fontSize: 14, color: "#AAB6CB", marginBottom: 12 }}>
              Track record
            </div>

            {founderStats.map(([title, text], i) => (
              <div
                key={title}
                style={{
                  padding: "15px 0",
                  borderBottom:
                    i === founderStats.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 4, fontSize: 16 }}>
                  {title}
                </div>
                <div style={{ ...mutedStyle, fontSize: 14 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" style={{ padding: "82px 0" }}>
        <div style={containerStyle}>
          <SectionEyebrow>The bigger vision</SectionEyebrow>
          <h2 style={sectionTitleStyle}>
            Every important asset class develops a decision layer.
          </h2>
          <p style={{ ...leadStyle, maxWidth: 860, marginBottom: 30 }}>
            Stocks have Bloomberg. Real estate has Zillow. Autos have Carvana.
            Collectibles still lack a true decision and execution layer. Cardinal,
            powered by Cardinal Engine, is built to become that infrastructure.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {visionCards.map((item) => (
              <InfoCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section id="access" style={sectionStyle}>
        <div
          style={{
            ...containerStyle,
            ...glassStyle,
            borderRadius: 34,
            padding: 30,
            display: "grid",
            gridTemplateColumns: "1.04fr 0.96fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <SectionEyebrow>Early access</SectionEyebrow>
            <h2 style={{ ...sectionTitleStyle, maxWidth: 700 }}>
              Get early access to the future of collectibles.
            </h2>
            <p style={{ ...leadStyle, maxWidth: 740 }}>
              Join the early access list for launch updates, product milestones,
              partner announcements, and first access as Cardinal rolls out a new
              decision layer for collectibles powered by Cardinal Engine.
            </p>
          </div>

          <form
            action="#"
            method="POST"
            style={{
              borderRadius: 26,
              padding: 20,
              background: "rgba(255,255,255,0.045)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: 14,
                color: "#DDE4EF",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                style={{
                  width: "100%",
                  marginTop: 8,
                  minHeight: 50,
                  padding: "0 14px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(6,10,24,0.76)",
                  color: "#fff",
                  fontSize: 15,
                  outline: "none",
                }}
              />
            </label>

            <label
              style={{
                display: "block",
                marginBottom: 14,
                color: "#DDE4EF",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                style={{
                  width: "100%",
                  marginTop: 8,
                  minHeight: 50,
                  padding: "0 14px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(6,10,24,0.76)",
                  color: "#fff",
                  fontSize: 15,
                  outline: "none",
                }}
              />
            </label>

            <label
              style={{
                display: "block",
                marginBottom: 16,
                color: "#DDE4EF",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              I’m joining as a...
              <select
                name="interest"
                defaultValue="Investor"
                style={{
                  width: "100%",
                  marginTop: 8,
                  minHeight: 50,
                  padding: "0 14px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(6,10,24,0.76)",
                  color: "#fff",
                  fontSize: 15,
                  outline: "none",
                }}
              >
                <option>Investor</option>
                <option>Collector</option>
                <option>Dealer</option>
                <option>Marketplace partner</option>
                <option>Strategic partner</option>
              </select>
            </label>

            <button type="submit" style={{ ...buttonPrimary, width: "100%" }}>
              Get Early Access
            </button>

            <div
              style={{
                marginTop: 12,
                color: "#8F99B2",
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              We’ll only use your information to share product updates and access
              details.
            </div>
          </form>
        </div>
      </section>

      <footer
        style={{
          padding: "30px 0 44px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <img
              src="/logo.png"
              alt="Cardinal"
              style={{
                height: 46,
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
            <div style={{ color: "#8F99B2", fontSize: 14 }}>
              Decision and liquidity infrastructure for collectibles.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
              color: "#8F99B2",
              fontSize: 14,
            }}
          >
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Terms
            </a>
            <a href="mailto:hello@cardinalvision.ai" style={{ color: "inherit", textDecoration: "none" }}>
              Contact
            </a>
            <span>© 2026 Cardinal Vision AI</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
