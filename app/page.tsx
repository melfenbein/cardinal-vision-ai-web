import Image from "next/image";

export default function Home() {
  return (
    <main style={{background:"#0B0F1A", color:"white", minHeight:"100vh", fontFamily:"Arial"}}>
      
      {/* NAV */}
      <div style={{display:"flex", alignItems:"center", padding:"20px 40px"}}>
        <Image src="/logo.png" alt="Cardinal Logo" width={40} height={40} />
        <h2 style={{marginLeft:12}}>Cardinal Vision AI</h2>
      </div>

      {/* HERO */}
      <div style={{padding:"80px 40px", maxWidth:900}}>
        <h1 style={{fontSize:48, fontWeight:700, lineHeight:1.2}}>
          The Decision Layer for Collectibles
        </h1>
        <p style={{marginTop:20, fontSize:20, color:"#A0A7B8"}}>
          AI-powered grading, valuation, and liquidity routing — turning collectibles into optimized exit decisions.
        </p>

        <button style={{
          marginTop:30,
          padding:"14px 24px",
          background:"#E11D48",
          border:"none",
          borderRadius:6,
          color:"white",
          fontWeight:600,
          cursor:"pointer"
        }}>
          Request Early Access
        </button>
      </div>

      {/* HOW IT WORKS */}
      <div style={{padding:"60px 40px"}}>
        <h2 style={{fontSize:28}}>How It Works</h2>
        <div style={{display:"flex", gap:40, marginTop:30, flexWrap:"wrap"}}>
          
          <div style={{maxWidth:260}}>
            <h3>Scan</h3>
            <p style={{color:"#A0A7B8"}}>Instantly identify and analyze collectibles via AI vision.</p>
          </div>

          <div style={{maxWidth:260}}>
            <h3>Grade</h3>
            <p style={{color:"#A0A7B8"}}>AI-powered grading with probabilistic accuracy.</p>
          </div>

          <div style={{maxWidth:260}}>
            <h3>Optimize</h3>
            <p style={{color:"#A0A7B8"}}>Route assets to the best liquidity endpoint for maximum value.</p>
          </div>

        </div>
      </div>

      {/* VALUE PROP */}
      <div style={{padding:"60px 40px", background:"#111827"}}>
        <h2 style={{fontSize:28}}>Why Cardinal</h2>
        <p style={{marginTop:20, maxWidth:700, color:"#A0A7B8"}}>
          Cardinal Vision AI acts as a neutral intelligence layer across grading, marketplaces, and buyers — unlocking arbitrage opportunities and maximizing returns across fragmented collectibles markets.
        </p>
      </div>

      {/* FOOTER */}
      <div style={{padding:"40px", color:"#666"}}>
        © 2026 Cardinal Vision AI
      </div>

    </main>
  );
}
