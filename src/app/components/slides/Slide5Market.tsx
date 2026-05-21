"use client";

import { useState } from "react";
import { DollarSign, Landmark, Compass, Award, Percent } from "lucide-react";

export default function Slide5Market() {
  const [activeMarket, setActiveMarket] = useState("som");

  const markets = {
    tam: {
      name: "TAM (Total Addressable Market)",
      val: "$540 Miliar",
      desc: "Total pengeluaran tahunan korporasi global untuk perangkat lunak manajemen bisnis, otomatisasi IT, dan lisensi sistem integrasi data.",
      cagr: "14.2% CAGR",
      strategy: "Pasar luas otomatisasi konvensional.",
      color: "var(--accent-color)"
    },
    sam: {
      name: "SAM (Serviceable Addressable Market)",
      val: "$120 Miliar",
      desc: "Porsi pasar otomatisasi yang beralih ke teknologi kecerdasan buatan, termasuk pasar orkestrasi AI, LLM tooling, dan database vector.",
      cagr: "28.5% CAGR",
      strategy: "Fokus pada bisnis yang bertransisi ke kecerdasan buatan.",
      color: "var(--accent-secondary)"
    },
    som: {
      name: "SOM (Serviceable Obtainable Market)",
      val: "$18 Miliar",
      desc: "Target spesifik segmen pasar Neuralis OS pada tahun pertama hingga tahun ketiga: perusahaan Fortune 500 dan sektor keuangan multinasional.",
      cagr: "45.0% CAGR",
      strategy: "Capture awal pada perusahaan finansial dan logistik.",
      color: "#10b981"
    }
  };

  const current = markets[activeMarket as keyof typeof markets];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%" }}>
      {/* Header */}
      <div className="fade-in-up">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700 }}>
          Peluang Pasar: <span className="text-gradient">TAM / SAM / SOM</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: "4px" }}>
          Segmentasi pasar otomatisasi korporat yang sedang beralih ke arah otonomi penuh. Klik lingkaran pasar untuk membedah.
        </p>
      </div>

      {/* Main Layout */}
      <div 
        className="fade-in-up anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap: "35px",
          alignItems: "center",
          flex: 1
        }}
      >
        {/* Left: Concentric Circle SVG Chart */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            height: "300px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            position: "relative"
          }}
        >
          <svg width="280" height="280" viewBox="0 0 280 280" style={{ overflow: "visible" }}>
            {/* Concentric TAM Circle (Outer) */}
            <circle
              cx="140"
              cy="140"
              r="125"
              fill="rgba(168, 85, 247, 0.02)"
              stroke={activeMarket === "tam" ? "var(--accent-color)" : "rgba(168, 85, 247, 0.15)"}
              strokeWidth={activeMarket === "tam" ? "3" : "1.5"}
              style={{ cursor: "pointer", transition: "all 0.3s ease", filter: activeMarket === "tam" ? "drop-shadow(0 0 8px rgba(168, 85, 247, 0.3))" : "none" }}
              onClick={() => setActiveMarket("tam")}
            />
            {/* Concentric SAM Circle (Middle) */}
            <circle
              cx="140"
              cy="140"
              r="85"
              fill="rgba(6, 182, 212, 0.04)"
              stroke={activeMarket === "sam" ? "var(--accent-secondary)" : "rgba(6, 182, 212, 0.2)"}
              strokeWidth={activeMarket === "sam" ? "3" : "1.5"}
              style={{ cursor: "pointer", transition: "all 0.3s ease", filter: activeMarket === "sam" ? "drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))" : "none" }}
              onClick={() => setActiveMarket("sam")}
            />
            {/* Concentric SOM Circle (Inner) */}
            <circle
              cx="140"
              cy="140"
              r="45"
              fill="rgba(16, 185, 129, 0.1)"
              stroke={activeMarket === "som" ? "#10b981" : "rgba(16, 185, 129, 0.3)"}
              strokeWidth={activeMarket === "som" ? "3" : "1.5"}
              style={{ cursor: "pointer", transition: "all 0.3s ease", filter: activeMarket === "som" ? "drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))" : "none" }}
              onClick={() => setActiveMarket("som")}
            />

            {/* Concentric Labels inside circles */}
            <text x="140" y="145" textAnchor="middle" fill="#10b981" fontWeight="800" fontSize="10px" onClick={() => setActiveMarket("som")} style={{ cursor: "pointer" }}>SOM</text>
            <text x="140" y="88" textAnchor="middle" fill="var(--accent-secondary)" fontWeight="800" fontSize="10px" onClick={() => setActiveMarket("sam")} style={{ cursor: "pointer" }}>SAM</text>
            <text x="140" y="40" textAnchor="middle" fill="var(--accent-color)" fontWeight="800" fontSize="10px" onClick={() => setActiveMarket("tam")} style={{ cursor: "pointer" }}>TAM</text>
          </svg>
        </div>

        {/* Right: Detailed Card Info */}
        <div 
          className="glass-panel scale-in" 
          style={{ 
            padding: "24px 30px", 
            display: "flex", 
            flexDirection: "column", 
            gap: "15px", 
            height: "100%",
            borderColor: `rgba(${activeMarket === "tam" ? "168,85,247" : activeMarket === "sam" ? "6,182,212" : "16,185,129"}, 0.25)`,
            boxShadow: `0 8px 32px 0 rgba(${activeMarket === "tam" ? "168,85,247" : activeMarket === "sam" ? "6,182,212" : "16,185,129"}, 0.05)`
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: current.color, textTransform: "uppercase", letterSpacing: "1px" }}>
              Analisis Ukuran Pasar
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", fontWeight: 700, color: current.color }}>
              <Percent size={14} />
              <span>{current.cagr}</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800 }}>{current.name}</h3>
            <span style={{ fontSize: "2rem", fontWeight: 800, color: current.color }}>{current.val}</span>
          </div>

          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            {current.desc}
          </p>

          <hr style={{ border: "none", borderTop: "1px solid var(--card-border)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Strategi Penetrasi Kami:
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", fontWeight: 600 }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.03)", border: "1px solid var(--card-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {activeMarket === "tam" ? <Landmark size={12} color={current.color} /> : activeMarket === "sam" ? <Compass size={12} color={current.color} /> : <Award size={12} color={current.color} />}
              </div>
              <span>{current.strategy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
