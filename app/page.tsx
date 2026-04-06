import Image from "next/image";

const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "22px 32px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  position: "sticky",
  top: 0,
  backdropFilter: "blur(12px)",
  background: "rgba(8,12,28,0.78)",
  zIndex: 20,
};

const containerStyle: React.CSSProperties = {
  width: "min(1180px, calc(100% - 40px))",
  margin: "0 auto",
};

const sectionStyle: React.CSSProperties = {
  padding: "84px 0",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 24,
  boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
};

const smallMuted: React.CSSProperties = {
  color: "#A8B1C7",
  lineHeight: 1.7,
};

const buttonPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 22px",
  borderRadius: 999,
  background: "linear-gradient(135deg, #EF3340 0%, #C71F3C 100%)",
  color: "#fff",
  fontWeight: 700,
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 14px 34px rgba(199,31,60,0.35)",
};

const buttonSecondary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 22px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
  fontWeight: 700,
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.1)",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        color: "#FF97A2",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div style={{ ...cardStyle, padding: 24 }}>
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <div style={smallMuted}>{text}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 10%, rgba(239,51,64,0.14), transparent 24%), radial-gradient(circle at 80% 0%, rgba(70,88,255,0.12), transparent 24%), linear-gradient(180deg, #070B1F 0%, #0B1027 100%)",
        color: "#FFFFFF",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 32px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    position: "sticky",
    top: 0,
    backdropFilter: "blur(12px)",
    background: "rgba(8,12,28,0.78)",
    zIndex: 20,
  }}
>
  <div
    style={{
      width: "min(1180px, calc(100% - 40px))",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <div
        style={{
          padding: 10,
          borderRadius: 18,
          background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 12px 36px rgba(0,0,0,0.25)",
        }}
      >
        <img
          src="/logo.png"
          alt="Cardinal logo"
          style={{
            height: 92,
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      <div>
        <div
          style={{
            color: "white",
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Cardinal Vision AI
        </div>
        <div
          style={{
            color: "#98A3BC",
            fontSize: 13,
            marginTop: 6,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Collectible liquidity platform
        </div>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        gap: 18,
        alignItems: "center",
        color: "#D6DBE8",
        fontSize: 14,
      }}
    >
      <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>
        How it works
      </a>
      <a href="#why" style={{ color: "inherit", textDecoration: "none" }}>
        Why Cardinal
      </a>
      <a href="#access" style={{ color: "inherit", textDecoration: "none" }}>
        Early access
      </a>
    </div>
  </div>
</header>

<section style={{ padding: "72px 0 56px" }}>
  <div
    style={{
      width: "min(1180px, calc(100% - 40px))",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.02fr 0.98fr",
      gap: 36,
      alignItems: "center",
    }}
  >
    <div>
      <div
        style={{
          color: "#FF97A2",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        AI-powered collectibles intelligence
      </div>

      <h1
        style={{
          fontSize: "clamp(50px, 8vw, 86px)",
          lineHeight: 0.92,
          letterSpacing: "-0.06em",
          margin: "0 0 20px",
          maxWidth: 760,
        }}
      >
        The fastest way to price and sell your cards.
      </h1>
<div style={{ marginTop: 30 }}>
  <img
    src="/logo.png"
    alt="Cardinal"
    style={{
      height: 120,
      width: "auto",
      objectFit: "contain",
      filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.4))"
    }}
  />
</div>
      <p
        style={{
          color: "#C7CFE0",
          fontSize: 22,
          lineHeight: 1.65,
          maxWidth: 760,
          margin: 0,
        }}
      >
        Cardinal combines AI grading probability, real-time valuation, and smart
        liquidity routing to help collectors understand what their cards are
        worth — and what to do next.
      </p>

      <div
        style={{
          display: "flex",
          gap: 14,
          marginTop: 32,
          flexWrap: "wrap",
        }}
      >
        <a
          href="#access"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px 24px",
            borderRadius: 999,
            background: "linear-gradient(135deg, #EF3340 0%, #C71F3C 100%)",
            color: "#fff",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 16px 36px rgba(199,31,60,0.35)",
          }}
        >
          Request Early Access
        </a>

        <a
          href="#how"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px 24px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.04)",
            color: "#fff",
            fontWeight: 700,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          See How It Works
        </a>
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          marginTop: 34,
          flexWrap: "wrap",
        }}
      >
        {[
          ["AI-led", "Grade probability + pricing"],
          ["Instant clarity", "Know value before you act"],
          ["Built for liquidity", "From scan to best execution"],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 22,
              padding: "18px 18px 16px",
              minWidth: 170,
              boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              {title}
            </div>
            <div style={{ color: "#A8B1C7", fontSize: 14, marginTop: 6 }}>
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 28,
        boxShadow: "0 16px 48px rgba(0,0,0,0.22)",
        padding: 24,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            background: "rgba(239,51,64,0.15)",
            color: "#FFD3D8",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 999,
            padding: "8px 10px",
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          Live product vision
        </div>
        <div style={{ color: "#C9D1E2", fontSize: 14 }}>
          Card-to-liquidity workflow
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        {["Scan", "AI Grade", "Value", "Offer", "Route"].map((step, index) => (
          <div
            key={step}
            style={{
              padding: "8px 10px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              background:
                index === 0
                  ? "linear-gradient(135deg, #FF5B66, #BC1735)"
                  : "rgba(255,255,255,0.05)",
              color: "#fff",
            }}
          >
            {step}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.95fr",
          gap: 18,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: 18,
            boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
          }}
        >
          <div
            style={{
              borderRadius: 20,
              minHeight: 290,
              background:
                "radial-gradient(circle at 20% 20%, rgba(239,51,64,0.30), transparent 25%), linear-gradient(145deg, #151C3A, #0B1027)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 18,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div
                style={{
                  color: "#DDE3EF",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Scan result
              </div>
              <div
                style={{
                  color: "#8FE4B0",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "6px 8px",
                  borderRadius: 999,
                  background: "rgba(143,228,176,0.12)",
                  border: "1px solid rgba(143,228,176,0.2)",
                }}
              >
                High confidence
              </div>
            </div>

            <div
              style={{
                flex: 1,
                display: "grid",
                placeItems: "center",
                padding: "18px 0",
              }}
            >
              <div
                style={{
                  width: 210,
                  height: 250,
                  borderRadius: 18,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 18px 48px rgba(0,0,0,0.35)",
                  padding: 12,
                }}
              >
                <div
                  style={{
                    height: 34,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #E7EBF2, #C7CFDE)",
                    marginBottom: 10,
                  }}
                />
                <div
                  style={{
                    height: 148,
                    borderRadius: 12,
                    background:
                      "linear-gradient(145deg, rgba(239,51,64,0.32), rgba(48,76,170,0.32))",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Cardinal"
                    style={{
                      height: 84,
                      width: "auto",
                      objectFit: "contain",
                      filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.22))",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: 10,
                    display: "grid",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      height: 10,
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.18)",
                    }}
                  />
                  <div
                    style={{
                      height: 10,
                      width: "72%",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.14)",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {["Trading Cards", "AI Grading", "Liquidity"].map((tag) => (
                <div
                  key={tag}
                  style={{
                    fontSize: 12,
                    color: "#DDE3EF",
                    padding: "7px 10px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: 14,
          }}
        >
          <div
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: 18,
            }}
          >
            <div style={{ color: "#A8B1C7", fontSize: 13, marginBottom: 10 }}>
              Grade probability
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                ["PSA 10", "18%"],
                ["PSA 9", "46%"],
                ["PSA 8", "28%"],
              ].map(([grade, pct]) => (
                <div key={grade}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ color: "#E8EDF7" }}>{grade}</span>
                    <span style={{ color: "#FFB6BF", fontWeight: 700 }}>{pct}</span>
                  </div>
                  <div
                    style={{
                      height: 8,
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: pct,
                        height: "100%",
                        borderRadius: 999,
                        background: "linear-gradient(135deg, #FF5B66, #BC1735)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: 18,
            }}
          >
            {[
              ["Estimated market value", "$1,040"],
              ["Instant offer", "$910"],
              ["Best next step", "Grade then route"],
              ["Best execution path", "Marketplace + buyer network"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ color: "#A8B1C7", fontSize: 14 }}>{label}</span>
                <strong style={{ fontSize: 15 }}>{value}</strong>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "linear-gradient(180deg, rgba(239,51,64,0.16), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: 18,
            }}
          >
            <div
              style={{
                color: "#FFD3D8",
                fontSize: 13,
                fontWeight: 800,
                marginBottom: 8,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Why collectors care
            </div>
            <div style={{ color: "#DCE3F0", lineHeight: 1.7, fontSize: 14 }}>
              Know what you own, what it is likely to grade, what it is worth,
              and where to sell it — all in one premium workflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <section style={{ padding: "72px 0 48px" }}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: 36,
            alignItems: "center",
          }}
        >
          <div>
            <SectionLabel>AI-powered collectibles intelligence</SectionLabel>

            <h1
              style={{
                fontSize: "clamp(46px, 8vw, 82px)",
                lineHeight: 0.94,
                letterSpacing: "-0.055em",
                margin: "0 0 20px",
                maxWidth: 760,
              }}
            >
              The fastest way to price and sell your cards.
            </h1>

            <p
              style={{
                color: "#C7CFE0",
                fontSize: 21,
                lineHeight: 1.7,
                maxWidth: 760,
                margin: 0,
              }}
            >
              Cardinal combines AI grading probability, real-time valuation, and
              smart liquidity routing to help collectors understand what their
              cards are worth — and what to do next.
            </p>

            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 32,
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
    display: "flex",
    gap: 20,
    marginTop: 50,
    flexWrap: "wrap",
    alignItems: "flex-end",
  }}
>
  {[
    { src: "/brady.jpg", label: "Brady" },
    { src: "/jordan.jpg", label: "Jordan" },
    { src: "/trout.jpg", label: "Trout" },
    { src: "/charizard.png", label: "Charizard" },
    { src: "/gengar.jpg", label: "Gengar" },
    { src: "/flagg.jpg", label: "Flagg" },
    { src: "/celebrini.jpg", label: "Celebrini" },
  ].map((card, i) => (
    <div
      key={card.src}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={card.src}
        alt={card.label}
        style={{
          width: 140,
          height: 220,
          objectFit: "contain",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 12,
          boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
          transform: `rotate(${i % 2 === 0 ? "-6deg" : "6deg"})`,
          display: "block",
        }}
      />
      <div
        style={{
          marginTop: 10,
          color: "#A8B1C7",
          fontSize: 13,
          fontWeight: 600,
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
                display: "flex",
                gap: 14,
                marginTop: 34,
                flexWrap: "wrap",
              }}
            >
              {[
                ["AI-led", "Grade probability + pricing"],
                ["Instant clarity", "Know value before you act"],
                ["Built for liquidity", "From scan to best execution"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  style={{
                    ...cardStyle,
                    padding: "18px 18px 16px",
                    minWidth: 170,
                  }}
                >
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {title}
                  </div>
                  <div style={{ color: "#A8B1C7", fontSize: 14, marginTop: 6 }}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...cardStyle, padding: 24, overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  background: "rgba(239,51,64,0.15)",
                  color: "#FFD3D8",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 999,
                  padding: "8px 10px",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                Live product vision
              </div>
              <div style={{ color: "#C9D1E2", fontSize: 14 }}>
                Card-to-liquidity workflow
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 20,
              }}
            >
              {["Scan", "AI Grade", "Value", "Offer", "Route"].map(
                (step, index) => (
                  <div
                    key={step}
                    style={{
                      padding: "8px 10px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 700,
                      background:
                        index === 0
                          ? "linear-gradient(135deg, #FF5B66, #BC1735)"
                          : "rgba(255,255,255,0.05)",
                      color: "#fff",
                    }}
                  >
                    {step}
                  </div>
                )
              )}
            </div>

            <div
              style={{
                ...cardStyle,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                padding: 18,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 18,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: 150,
                    borderRadius: 18,
                    background:
                      "linear-gradient(145deg, rgba(239,51,64,0.22), rgba(29,43,85,0.75))",
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Cardinal"
                    width={72}
                    height={72}
                  />
                </div>

                <div>
                  {[
                    ["Likely grade band", "PSA 8–9"],
                    ["Estimated market value", "$1,040"],
                    ["Instant offer", "$910"],
                    ["Best next step", "Grade then route"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "12px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span style={{ color: "#A8B1C7", fontSize: 14 }}>
                        {label}
                      </span>
                      <strong style={{ fontSize: 15 }}>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 18,
                color: "#A8B1C7",
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              A premium experience for collectors on the front end. A pricing,
              routing, and liquidity engine underneath.
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle} id="why">
        <div style={containerStyle}>
          <SectionLabel>Why now</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 0.96,
              letterSpacing: "-0.05em",
              margin: "0 0 14px",
              maxWidth: 760,
            }}
          >
            A major category still runs on friction, guesswork, and delay.
          </h2>
          <p
            style={{
              ...smallMuted,
              fontSize: 18,
              maxWidth: 760,
              marginBottom: 30,
            }}
          >
            Valuable cards often sit dormant because grading takes time, pricing
            is inconsistent, and selling is fragmented. Cardinal is built to
            simplify that entire journey into one intelligent decision layer.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            <InfoCard
              title="Pricing is unclear"
              text="Collectors rely on scattered comps, subjective condition reads, and inconsistent market signals."
            />
            <InfoCard
              title="Liquidity is slow"
              text="The highest-value route is often manual, time-consuming, and hard to navigate."
            />
            <InfoCard
              title="Good assets stay idle"
              text="Cards with real value remain unsold because execution is too cumbersome for most owners."
            />
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          background: "rgba(255,255,255,0.025)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        id="how"
      >
        <div style={containerStyle}>
          <SectionLabel>How it works</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 0.96,
              letterSpacing: "-0.05em",
              margin: "0 0 14px",
            }}
          >
            From card image to best next action.
          </h2>
          <p
            style={{
              ...smallMuted,
              fontSize: 18,
              maxWidth: 780,
              marginBottom: 30,
            }}
          >
            Cardinal’s core workflow is simple for the user and powerful under
            the hood: identify the card, estimate grade outcomes, understand
            value, and route to the best liquidity path.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 16,
            }}
          >
            {[
              [
                "01",
                "Scan card",
                "Use a phone camera or image upload to identify the asset and capture metadata.",
              ],
              [
                "02",
                "Predict grade",
                "Estimate likely grading outcomes before submission and reduce uncertainty.",
              ],
              [
                "03",
                "See value",
                "Blend grade probability with market comps to understand expected value.",
              ],
              [
                "04",
                "Get an offer",
                "Receive executable liquidity when the economics make sense.",
              ],
              [
                "05",
                "Route smartly",
                "Send the card to the best buyer, marketplace, or path for best execution.",
              ],
            ].map(([num, title, text]) => (
              <div key={num} style={{ ...cardStyle, padding: 22 }}>
                <div
                  style={{
                    color: "#FF97A2",
                    fontWeight: 800,
                    marginBottom: 12,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 10,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {title}
                </div>
                <div style={smallMuted}>{text}</div>
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
            gap: 24,
          }}
        >
          <div>
            <SectionLabel>Why Cardinal</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 0.96,
                letterSpacing: "-0.05em",
                margin: "0 0 14px",
              }}
            >
              More than grading. Built for decision-making.
            </h2>
            <p style={{ ...smallMuted, fontSize: 18, maxWidth: 680 }}>
              Traditional grading services answer one question. Cardinal helps
              answer the bigger ones: what is this card worth, what is the best
              move, and how do I execute on it?
            </p>
          </div>

          <div
            style={{
              ...cardStyle,
              overflow: "hidden",
            }}
          >
            {[
              [
                "Traditional grading",
                "One destination, one outcome, no built-in liquidity.",
              ],
              [
                "Cardinal",
                "Pricing intelligence, optional offers, and best-execution routing in one experience.",
              ],
              [
                "For collectors",
                "Clarity, speed, and confidence before you spend time or money.",
              ],
              [
                "For dealers and buyers",
                "Higher-quality supply, smarter underwriting, and better pricing signals.",
              ],
            ].map(([title, text], i) => (
              <div
                key={title}
                style={{
                  padding: "22px 24px",
                  borderBottom:
                    i === 3 ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    color: i === 1 ? "#FF97A2" : "#FFFFFF",
                    fontSize: 18,
                    fontWeight: 800,
                    marginBottom: 6,
                  }}
                >
                  {title}
                </div>
                <div style={smallMuted}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <SectionLabel>The bigger vision</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 0.96,
              letterSpacing: "-0.05em",
              margin: "0 0 14px",
              maxWidth: 860,
            }}
          >
            Every major asset class gets a pricing and execution layer.
          </h2>
          <p
            style={{
              ...smallMuted,
              fontSize: 18,
              maxWidth: 760,
              marginBottom: 30,
            }}
          >
            Stocks have Bloomberg. Real estate has Zillow. Autos have Carvana.
            Cardinal is built to become the intelligence and liquidity layer for
            collectibles.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {[
              ["Collectors", "Know what you own and what to do next."],
              ["Dealers", "Source more intelligently and price with confidence."],
              ["Marketplaces", "Receive higher-intent, better-qualified supply."],
              ["Cardinal", "Sits between intelligence and execution."],
            ].map(([title, text]) => (
              <div key={title} style={{ ...cardStyle, padding: 24 }}>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 10,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {title}
                </div>
                <div style={smallMuted}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="access"
        style={{
          ...sectionStyle,
          paddingBottom: 96,
        }}
      >
        <div
          style={{
            ...containerStyle,
            ...cardStyle,
            padding: "34px 28px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <SectionLabel>Early access</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                lineHeight: 0.98,
                letterSpacing: "-0.05em",
                margin: "0 0 14px",
              }}
            >
              Be first to experience Cardinal.
            </h2>
            <p style={{ ...smallMuted, fontSize: 18, maxWidth: 680 }}>
              Join the early access list to get product updates, launch timing,
              and partnership announcements as Cardinal rolls out the next
              generation of collectible intelligence and liquidity.
            </p>
          </div>

          <form
            action="#"
            method="POST"
            style={{
              ...cardStyle,
              padding: 20,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <label
              style={{ display: "block", marginBottom: 12, color: "#D5DCEA" }}
            >
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                style={{
                  width: "100%",
                  marginTop: 8,
                  minHeight: 48,
                  padding: "0 14px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(6,10,24,0.7)",
                  color: "#fff",
                  fontSize: 15,
                }}
              />
            </label>

            <label
              style={{ display: "block", marginBottom: 12, color: "#D5DCEA" }}
            >
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                style={{
                  width: "100%",
                  marginTop: 8,
                  minHeight: 48,
                  padding: "0 14px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(6,10,24,0.7)",
                  color: "#fff",
                  fontSize: 15,
                }}
              />
            </label>

            <label
              style={{ display: "block", marginBottom: 16, color: "#D5DCEA" }}
            >
              I’m interested as a...
              <select
                name="interest"
                style={{
                  width: "100%",
                  marginTop: 8,
                  minHeight: 48,
                  padding: "0 14px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(6,10,24,0.7)",
                  color: "#fff",
                  fontSize: 15,
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
              You can later replace this with a real Formspree, HubSpot, or
              Typeform endpoint.
            </div>
          </form>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "26px 0 40px",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Image src="/logo.png" alt="Cardinal logo" width={40} height={40} />
            <div>
              <div style={{ fontWeight: 800 }}>Cardinal Vision AI</div>
              <div style={{ color: "#8F99B2", fontSize: 13 }}>
                The decision layer for collectibles
              </div>
            </div>
          </div>

          <div style={{ color: "#8F99B2", fontSize: 14 }}>
            © 2026 Cardinal Vision AI
          </div>
        </div>
      </footer>
    </main>
  );
}
