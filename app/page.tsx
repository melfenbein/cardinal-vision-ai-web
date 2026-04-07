export default function CardinalVisionHomepageMockup() {
  const featuredCards = [
    { src: "/charizard.png", label: "Charizard" },
    { src: "/jordan.jpg", label: "Jordan" },
    { src: "/brady.jpg", label: "Brady" },
    { src: "/gengar.jpg", label: "Gengar" },
    { src: "/trout.jpg", label: "Trout" },
    { src: "/flagg.jpg", label: "Flagg" },
  ];

  const steps = [
    {
      title: "Scan",
      text: "Use your phone camera or upload a card image to identify the card instantly.",
    },
    {
      title: "AI Grade",
      text: "See likely grade outcomes before spending time or money on submission.",
    },
    {
      title: "Value",
      text: "Blend comps, grade probability, and expected value into one clear view.",
    },
    {
      title: "Liquidity",
      text: "Surface instant offers or route to the best execution path.",
    },
  ];

  const useCases = [
    {
      title: "Collectors",
      text: "Understand whether a card is worth holding, grading, or selling.",
    },
    {
      title: "Investors",
      text: "Spot hidden upside and make faster, more informed decisions.",
    },
    {
      title: "Dealers",
      text: "Price and monetize inventory with more speed and less guesswork.",
    },
  ];

  const painPoints = [
    {
      title: "Pricing is fragmented",
      text: "Collectors still bounce between comps, grading guesses, and marketplaces just to understand value.",
    },
    {
      title: "Grading is uncertain",
      text: "Too many submission decisions still happen without clear probability or expected return.",
    },
    {
      title: "Selling is inefficient",
      text: "Liquidity is scattered, manual, and often disconnected from the true economics of the card.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07101f] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(239,51,64,0.16),transparent_24%),radial-gradient(circle_at_88%_6%,rgba(74,106,255,0.14),transparent_28%),linear-gradient(180deg,#060c18_0%,#091120_35%,#0b1427_100%)]" />

      <div className="relative z-10">
        <header className="sticky top-0 z-30 px-4 pt-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-[#08101d]/80 px-5 py-4 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/20 to-blue-500/10">
                <img src="/logo-icon.png" alt="Cardinal" className="max-h-10 w-auto object-contain" />
              </div>
              <div>
                <div className="text-xl font-extrabold tracking-tight">Cardinal Vision AI</div>
                <div className="text-sm text-slate-300">The financial layer for collectibles</div>
              </div>
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#how" className="text-sm font-semibold text-slate-200 hover:text-white">How it works</a>
              <a href="#opportunity" className="text-sm font-semibold text-slate-200 hover:text-white">Why now</a>
              <a href="#access" className="text-sm font-semibold text-slate-200 hover:text-white">Early access</a>
            </div>
          </div>
        </header>

        <main>
          <section className="px-4 pb-12 pt-10 md:pb-16 md:pt-10">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="pt-6">
                <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red-200">
                  AI-powered collectibles intelligence
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
                  Turn your trading cards into liquid assets.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                  Cardinal combines AI grading probability, real-time valuation, and intelligent liquidity routing so collectors, investors, and dealers can understand what a card is worth and what to do next.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button className="rounded-full bg-gradient-to-r from-red-500 to-rose-700 px-7 py-4 text-sm font-extrabold shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5">
                    Request Early Access
                  </button>
                  <button className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                    Watch Demo
                  </button>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    ["AI-led", "Grade probability, pricing intelligence, and routing in one workflow."],
                    ["Instant clarity", "See the likely economics before submitting or selling."],
                    ["Built for liquidity", "Go from scan to action with less friction and more confidence."],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-md">
                      <div className="text-2xl font-extrabold tracking-tight">{title}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-300">{text}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
                  {featuredCards.map((card) => (
                    <div key={card.label} className="text-center">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-xl">
                        <img src={card.src} alt={card.label} className="h-40 w-full rounded-xl object-contain" />
                      </div>
                      <div className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{card.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-red-200">
                    Live product vision
                  </div>
                  <div className="text-sm font-semibold text-slate-300">Card-to-liquidity workflow</div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {["Scan", "AI Grade", "Value", "Offer", "Route"].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] ${i === 0 ? "border-transparent bg-gradient-to-r from-red-500 to-rose-700 text-white" : "border-white/10 bg-white/5 text-slate-300"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] p-5">
                  <div className="grid gap-5 md:grid-cols-[140px_1fr]">
                    <div className="flex h-40 items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-red-500/20 to-blue-500/10">
                      <img src="/logo-icon.png" alt="Cardinal" className="max-h-20 w-auto object-contain" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-black tracking-tight">Premium decision engine</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        A product experience collectors can trust with a financial engine underneath that evaluates grade probability, value, and best next action.
                      </p>

                      <div className="mt-4 space-y-3">
                        {[
                          ["Likely grade band", "PSA 8–9"],
                          ["Estimated market value", "$1,040"],
                          ["Instant offer", "$910"],
                          ["Best next step", "Grade then route"],
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-center justify-between border-b border-white/10 py-3 last:border-b-0">
                            <span className="text-sm text-slate-400">{label}</span>
                            <span className="text-sm font-extrabold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {[
                      ["Identify", "< 3 sec", "Fast card recognition and metadata extraction."],
                      ["Grade range", "EV-led", "Submission logic based on likely outcomes, not guesswork."],
                      ["Liquidity", "Actionable", "Better monetization paths surfaced inside one flow."],
                    ].map(([kicker, value, text]) => (
                      <div key={kicker} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-red-200">{kicker}</div>
                        <div className="mt-1 text-2xl font-black tracking-tight">{value}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-300">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-black/20 p-4">
                  <div className="mb-3 text-sm font-bold text-slate-300">Demo video placement</div>
                  <div className="flex aspect-video items-center justify-center rounded-[1.25rem] border border-dashed border-white/15 bg-gradient-to-br from-white/5 to-white/[0.03] text-center text-slate-400">
                    Drop /public/demo.mp4 here in final build
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="opportunity" className="border-y border-white/5 bg-white/[0.02] px-4 py-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red-200">
                Why now
              </div>
              <h2 className="max-w-4xl text-4xl font-black leading-[0.97] tracking-[-0.05em] md:text-6xl">
                A major category still runs on friction, guesswork, and delay.
              </h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                Valuable cards often sit dormant because grading takes time, pricing is inconsistent, and selling is fragmented. Cardinal is built to turn that broken journey into one intelligent decision layer.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {painPoints.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-2xl font-extrabold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="how" className="px-4 py-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red-200">
                How it works
              </div>
              <h2 className="max-w-4xl text-4xl font-black leading-[0.97] tracking-[-0.05em] md:text-6xl">
                From card image to best next action.
              </h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                The workflow is simple on the surface and powerful underneath: identify the card, estimate likely grade outcomes, understand the economics, and route to the best liquidity path.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {steps.map((step, idx) => (
                  <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-red-200">
                      0{idx + 1}
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 pb-20">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red-200">
                  Why Cardinal
                </div>
                <h2 className="max-w-3xl text-4xl font-black leading-[0.97] tracking-[-0.05em] md:text-6xl">
                  More than grading. Built for decision-making.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  Traditional grading services answer one question. Cardinal helps answer the bigger ones: what is this card worth, what is the best move, and how should I execute?
                </p>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                {[
                  ["Traditional grading", "One destination, one outcome, and no built-in intelligence around liquidity or best execution.", false],
                  ["Cardinal", "Pricing intelligence, grade probability, optional offers, and routing logic in one premium experience.", true],
                  ["For collectors", "More confidence, more speed, and better decision quality before spending money on grading or listing.", false],
                  ["For buyers and partners", "Better-qualified supply, stronger underwriting, and improved pricing signals entering the market.", false],
                ].map(([title, text, highlight]) => (
                  <div key={title} className="border-b border-white/10 p-6 last:border-b-0">
                    <div className={`text-xl font-extrabold tracking-tight ${highlight ? "text-red-200" : "text-white"}`}>{title}</div>
                    <div className="mt-2 text-base leading-7 text-slate-300">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-white/5 bg-white/[0.02] px-4 py-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red-200">
                The bigger vision
              </div>
              <h2 className="max-w-4xl text-4xl font-black leading-[0.97] tracking-[-0.05em] md:text-6xl">
                Every major asset class gets a pricing and execution layer.
              </h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                Stocks have Bloomberg. Real estate has Zillow. Autos have Carvana. Cardinal is built to become the intelligence and liquidity layer for collectibles.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {useCases.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-2xl font-extrabold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="access" className="px-4 py-20">
            <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red-200">
                  Early access
                </div>
                <h2 className="max-w-3xl text-4xl font-black leading-[0.97] tracking-[-0.05em] md:text-6xl">
                  Start unlocking value before the rest of the market catches up.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  This is where your real form will live. You can wire it to Formspree, Resend, Web3Forms, or your own API so submissions email you directly or drop into a CRM.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button className="rounded-full bg-gradient-to-r from-red-500 to-rose-700 px-7 py-4 text-sm font-extrabold shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5">
                    Join Early Access
                  </button>
                  <button className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                    Book a Demo
                  </button>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">Name</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-[#060a18] px-4 py-3 text-white outline-none" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">Email</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-[#060a18] px-4 py-3 text-white outline-none" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">I am a...</label>
                    <select className="w-full rounded-2xl border border-white/10 bg-[#060a18] px-4 py-3 text-white outline-none">
                      <option>Collector</option>
                      <option>Investor</option>
                      <option>Dealer</option>
                      <option>Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">Message</label>
                    <textarea className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-[#060a18] px-4 py-3 text-white outline-none" placeholder="Tell us what you are looking for" />
                  </div>
                  <button className="w-full rounded-full bg-gradient-to-r from-red-500 to-rose-700 px-7 py-4 text-sm font-extrabold shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5">
                    Submit Interest
                  </button>
                  <p className="text-sm leading-6 text-slate-400">
                    Mockup only. In the production version, this can email you instantly and sync to a spreadsheet or CRM.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 px-4 py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo-icon.png" alt="Cardinal" className="h-10 w-auto object-contain" />
              <div>
                <div className="font-extrabold tracking-tight">Cardinal Vision AI</div>
                <div className="text-sm text-slate-400">The decision layer for collectibles</div>
              </div>
            </div>
            <div className="text-sm text-slate-400">Preview mockup for homepage redesign</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
