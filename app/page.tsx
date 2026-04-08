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
    text: "Use a phone camera or upload an image to identify the card and extract key metadata instantly.",
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
  padding: "88px 0",
};

const sectionTitleStyle: React.CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(34px, 5vw, 58px)",
  lineHeight: 0.96,
  letterSpacing: "-0.05em",
  maxWidth: 820,
};

const leadStyle: React.CSSProperties = {
  margin: 0,
  maxWidth: 760,
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
          zIndex: 50,
          paddingTop: 14,
        }}
      >
        <header
          style={{
            width: "min(1240px, calc(100% - 24px))",
            margin: "0 auto",
            borderRadius: 22,
            padding: "14px 18px",
            background: "rgba(8, 14, 28, 0.72)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <img
                src="/logo.png"
                alt="Cardinal"
                style={{
                  height: 52,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                color: "#DCE3EF",
                fontSize: 14,
                fontWeight: 600,
                flexWrap: "wrap",
              }}
            >
              <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>
                How it works
              </a>
              <a href="#why" style={{ color: "inherit", textDecoration: "none" }}>
                Why Cardinal
              </a>
              <a href="#vision" style={{ color: "inherit", textDecoration: "none" }}>
                Vision
              </a>
              <a href="#access" style={buttonPrimary}>
                Early Access
              </a>
            </nav>
          </div>
        </header>
      </div>

      <section style={{ padding: "54px 0 48px" }}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "1.06fr 0.94fr",
            gap: 34,
            alignItems: "stretch",
          }}
        >
          <div style={{ paddingTop: 28 }}>
            <SectionEyebrow>AI-powered collectibles intelligence</SectionEyebrow>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(42px, 7.2vw, 84px)",
                lineHeight: 0.94,
                letterSpacing: "-0.055em",
                maxWidth: 760,
              }}
            >
              The fastest way to value, decide, and sell your cards.
            </h1>

            <p style={{ ...leadStyle, marginTop: 22 }}>
              Cardinal combines AI grading probability, real-time valuation, and
              intelligent liquidity routing to help collectors understand what
              their cards are worth and what to do next.
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
                Request Early Access
              </a>
              <a href="#how" style={buttonSecondary}>
                See How It Works
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 14,
                marginTop: 34,
                maxWidth: 760,
              }}
            >
              {[
                ["AI-led", "Grade probability, pricing intelligence, and smart routing in one workflow."],
                ["Instant clarity", "See the likely economics before you spend time or money."],
                ["Built for liquidity", "Go from scan to actionable next step with less friction."],
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
                  <div style={{ color: "#AAB6CB", fontSize: 14, lineHeight: 1.55, marginTop: 6 }}>
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
                Live product vision
              </div>
              <div style={{ color: "#D7DEEB", fontSize: 14, fontWeight: 600 }}>
                Card-to-liquidity workflow
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
              {["Scan", "AI Grade", "Value", "Offer", "Route"].map((step, index) => (
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
                      height: 74,
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      margin: "0 0 10px",
                    }}
                  >
                    Premium decision engine
                  </h3>

                  <p style={{ color: "#AAB6CB", lineHeight: 1.6, fontSize: 14, margin: "0 0 14px" }}>
                    A front-end experience collectors can trust with an economic
                    engine underneath that evaluates value, risk, and best execution.
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
                          index === arr.length - 1 ? "none" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span style={{ color: "#AAB6CB", fontSize: 14 }}>{label}</span>
                      <span style={{ fontSize: 15, fontWeight: 800 }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" style={{ padding: "76px 0" }}>
        <div style={containerStyle}>
          <SectionEyebrow>Why now</SectionEyebrow>
          <h2 style={sectionTitleStyle}>
            A major category still runs on friction, guesswork, and delay.
          </h2>
          <p style={{ ...leadStyle, maxWidth: 800, marginBottom: 30 }}>
            Valuable cards often sit dormant because grading takes time, pricing is
            inconsistent, and selling is fragmented. Cardinal is built to turn that
            broken journey into one intelligent decision layer.
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
              text="Collectors bounce across apps, comps, and gut instinct to figure out what a card might be worth."
            />
            <InfoCard
              title="Grading is a gamble"
              text="Submission decisions often happen without enough clarity on likely outcomes or expected value."
            />
            <InfoCard
              title="Liquidity is inefficient"
              text="The best path to monetize a card is usually hard to discover, slow to execute, and overly manual."
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
          <h2 style={sectionTitleStyle}>From card image to best next action.</h2>
          <p style={{ ...leadStyle, maxWidth: 820, marginBottom: 30 }}>
            Cardinal’s workflow is simple on the surface and powerful under the hood:
            identify the asset, estimate grade outcomes, understand the economics,
            and route to the best liquidity path.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {steps.map((step) => (
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
            <h2 style={sectionTitleStyle}>
              More than grading. Built for decision-making.
            </h2>
            <p style={{ ...leadStyle, maxWidth: 700 }}>
              Traditional grading services answer one question. Cardinal helps answer
              the bigger ones: what is this card worth, what is the best move, and
              how should I execute?
            </p>
          </div>

          <div style={{ ...glassStyle, borderRadius: 30, overflow: "hidden" }}>
            {[
              [
                "Traditional grading",
                "One destination, one outcome, and no built-in intelligence around liquidity or best execution.",
              ],
              [
                "Cardinal",
                "Pricing intelligence, grade probability, optional offers, and routing logic in one premium experience.",
              ],
              [
                "For collectors",
                "More confidence, more speed, and better decision quality before spending money on grading or listing.",
              ],
              [
                "For buyers and partners",
                "Better-qualified supply, stronger underwriting, and improved pricing signals entering the market.",
              ],
            ].map(([title, text], i) => (
              <div
                key={title}
                style={{
                  padding: "22px 24px",
                  borderBottom: i === 3 ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    marginBottom: 6,
                    color: title === "Cardinal" ? "#FFB2BB" : "#FFFFFF",
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

      <section id="vision" style={{ padding: "76px 0" }}>
        <div style={containerStyle}>
          <SectionEyebrow>The bigger vision</SectionEyebrow>
          <h2 style={sectionTitleStyle}>
            Every major asset class gets a pricing and execution layer.
          </h2>
          <p style={{ ...leadStyle, maxWidth: 820, marginBottom: 30 }}>
            Stocks have Bloomberg. Real estate has Zillow. Autos have Carvana.
            Cardinal is built to become the intelligence and liquidity layer for
            collectibles.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            <InfoCard
              title="AI-first decisioning"
              text="Not just card identification. Cardinal is built to tell users what to do next."
            />
            <InfoCard
              title="Built around EV"
              text="Grade probability, pricing, offers, and routing work together as one economic engine."
            />
            <InfoCard
              title="Designed for premium trust"
              text="A cleaner, more credible front-end experience for collectors and partners alike."
            />
            <InfoCard
              title="Extensible platform"
              text="Starts with cards. Expands into the broader pricing and execution layer for collectibles."
            />
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
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <SectionEyebrow>Early access</SectionEyebrow>
            <h2 style={{ ...sectionTitleStyle, maxWidth: 680 }}>
              Be first to experience Cardinal.
            </h2>
            <p style={{ ...leadStyle, maxWidth: 700 }}>
              Join the early access list to get launch updates, product news,
              partnership announcements, and early platform access as Cardinal
              rolls out the next generation of collectible intelligence and liquidity.
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
            <label style={{ display: "block", marginBottom: 14, color: "#DDE4EF", fontSize: 14, fontWeight: 600 }}>
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

            <label style={{ display: "block", marginBottom: 14, color: "#DDE4EF", fontSize: 14, fontWeight: 600 }}>
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

            <label style={{ display: "block", marginBottom: 16, color: "#DDE4EF", fontSize: 14, fontWeight: 600 }}>
              I’m interested as a...
              <select
                name="interest"
                defaultValue="Collector"
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
                <option>Collector</option>
                <option>Dealer</option>
                <option>Marketplace partner</option>
                <option>Investor</option>
              </select>
            </label>

            <button type="submit" style={{ ...buttonPrimary, width: "100%" }}>
              Request Early Access
            </button>

            <div
              style={{
                marginTop: 12,
                color: "#8F99B2",
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              Replace this later with a real Formspree, HubSpot, or Typeform endpoint.
            </div>
          </form>
        </div>
      </section>

      <footer
        style={{
          padding: "28px 0 42px",
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
          <img
            src="/logo.png"
            alt="Cardinal"
            style={{
              height: 42,
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
          <div style={{ color: "#8F99B2", fontSize: 14 }}>
            © 2026 Cardinal Vision AI
          </div>
        </div>
      </footer>
    </main>
  );
}
