"use client";

import { useState } from "react";
import { TrendingUp, BarChart2, Zap, DollarSign } from "lucide-react";

export default function Slide6Business() {
  const [scenario, setScenario] = useState("target");

  const revenueData = {
    conservative: {
      label: "Proyeksi Konservatif",
      years: ["Y1", "Y2", "Y3", "Y4", "Y5"],
      revenues: [1.8, 6.2, 14.8, 30.5, 55.0],
      margin: "68% Gross Margin",
      clients: "80 enterprise accounts",
      desc: "Skala pertumbuhan moderat berfokus pada efisiensi modal dan profitabilitas arus kas internal."
    },
    target: {
      label: "Proyeksi Target Utama",
      years: ["Y1", "Y2", "Y3", "Y4", "Y5"],
      revenues: [2.5, 9.0, 24.5, 52.0, 85.0],
      margin: "74% Gross Margin",
      clients: "150 enterprise accounts",
      desc: "Pertumbuhan cepat berbasis ekspansi tim sales agresif didukung oleh pendanaan Series A eksternal."
    }
  };

  const current = revenueData[scenario as keyof typeof revenueData];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%" }}>
      {/* Header */}
      <div className="fade-in-up">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700 }}>
          Proyeksi Bisnis: <span className="text-gradient">Pertumbuhan Finansial 5 Tahun</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: "4px" }}>
          Target pertumbuhan pendapatan berulang tahunan (ARR) seiring perluasan basis pelanggan korporat kami.
        </p>
      </div>

      {/* Scenario Selectors */}
      <div className="fade-in-up anim-delay-1" style={{ display: "flex", gap: "10px" }}>
        {(Object.keys(revenueData) as Array<keyof typeof revenueData>).map((key) => (
          <button
            key={key}
            onClick={() => setScenario(key)}
            className="select-input"
            style={{
              padding: "10px 20px",
              fontSize: "0.9rem",
              fontWeight: 700,
              background: scenario === key ? "var(--accent-gradient)" : "transparent",
              borderColor: scenario === key ? "var(--accent-color)" : "var(--card-border)",
              color: scenario === key ? "white" : "var(--text-primary)",
              boxShadow: scenario === key ? "0 8px 24px var(--glow-color)" : "none"
            }}
          >
            {key === "conservative" ? "Konservatif (Base Case)" : "Target Agresif (Growth Case)"}
          </button>
        ))}
      </div>

      {/* Financial Projections Grid */}
      <div 
        className="fade-in-up anim-delay-2" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1.8fr 1fr", 
          gap: "30px",
          alignItems: "center",
          flex: 1,
          marginTop: "5px"
        }}
      >
        {/* SVG Bar Projections Card */}
        <div className="glass-panel" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)" }}>PROYEKSI REVENUE (ARR DALAM JUTA USD)</span>
            <BarChart2 size={16} color="var(--accent-secondary)" />
          </div>

          <div style={{ width: "100%", height: "200px", padding: "10px 20px 0 10px" }}>
            <svg width="100%" height="100%" viewBox="0 0 450 180" style={{ overflow: "visible" }}>
              {/* Reference Grid lines */}
              <line x1="0" y1="140" x2="450" y2="140" stroke="var(--card-border)" strokeWidth="1" />
              <line x1="0" y1="90" x2="450" y2="90" stroke="var(--card-border)" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="0" y1="40" x2="450" y2="40" stroke="var(--card-border)" strokeDasharray="4 4" strokeWidth="1" />

              {/* Loop Bars */}
              {current.revenues.map((val, idx) => {
                const barWidth = 32;
                const barSpacing = 85;
                const x = 30 + idx * barSpacing;
                // Scale value to fit 140px maximum height
                const height = (val / 90) * 140;
                const y = 140 - height;

                return (
                  <g key={idx}>
                    {/* Bar background track */}
                    <rect x={x} y="0" width={barWidth} height="140" fill="rgba(255,255,255,0.01)" rx="4" />
                    {/* Bar Fill */}
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={height}
                      className="chart-bar"
                      fill={idx === 4 ? "var(--accent-secondary)" : "var(--accent-color)"}
                      rx="4"
                      style={{ filter: idx === 4 ? "drop-shadow(0 0 5px var(--glow-secondary))" : "none" }}
                    />
                    {/* Value */}
                    <text x={x + barWidth / 2} y={y - 8} textAnchor="middle" fill="var(--text-primary)" fontSize="11px" fontWeight="800">
                      ${val}M
                    </text>
                    {/* Year Label */}
                    <text x={x + barWidth / 2} y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="11px" fontWeight="600">
                      {current.years[idx]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Business Metrics Info Box */}
        <div 
          className="glass-panel scale-in" 
          style={{ 
            padding: "24px 30px", 
            display: "flex", 
            flexDirection: "column", 
            gap: "15px", 
            height: "100%",
            borderColor: "rgba(6, 182, 212, 0.2)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TrendingUp size={18} color="var(--accent-secondary)" />
            <h4 style={{ fontSize: "1rem", fontWeight: 700 }}>Kunci Pencapaian ARR</h4>
          </div>

          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            {current.desc}
          </p>

          <hr style={{ border: "none", borderTop: "1px solid var(--card-border)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <span style={{ display: "block", fontSize: "0.7rem", color: "var(--text-secondary)", fontWeight: 700, textTransform: "uppercase" }}>MARGIN KOTOR</span>
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)" }}>{current.margin}</span>
            </div>
            <div>
              <span style={{ display: "block", fontSize: "0.7rem", color: "var(--text-secondary)", fontWeight: 700, textTransform: "uppercase" }}>TARGET AKUN AKTIF (T5)</span>
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)" }}>{current.clients}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
