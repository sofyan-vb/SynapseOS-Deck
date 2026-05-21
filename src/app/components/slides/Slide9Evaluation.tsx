"use client";

import { useState, useEffect } from "react";
import { Award, CheckCircle2, TrendingUp, TableProperties } from "lucide-react";
import AnimatedNumber from "../AnimatedNumber";

export default function Slide9Evaluation() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const accuracy = 93.08;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "0px 20px 8px 20px" }}>
      {/* Header */}
      <div className="diagonal-fade">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-secondary)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB VI: HASIL & EVALUASI SISTEM
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Evaluasi Model: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Hasil Pengujian Akurasi</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Analisis metrik kuantitatif hasil klasifikasi Naive Bayes pada 5.402 dokumen pengujian.
        </p>
      </div>

      {/* Main Grid */}
      <div 
        className="diagonal-fade anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1.3fr", 
          gap: "24px",
          marginTop: "10px",
          flex: 1
        }}
      >
        {/* Left Side: Circular Accuracy Dial */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            background: "rgba(10, 8, 24, 0.4)",
            borderColor: "rgba(16, 185, 129, 0.2)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Award size={18} color="#10b981" />
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Akurasi Akhir Pengujian
            </span>
          </div>

          {/* Glowing Radial progress bar */}
          <div style={{ position: "relative", width: "130px", height: "130px", margin: "10px 0" }}>
            {/* Animated rotating outer scanner ring 1 (Clockwise, fast) */}
            <svg 
              width="130" 
              height="130" 
              viewBox="0 0 100 100" 
              style={{ 
                position: "absolute", 
                inset: 0, 
                animation: "spin 4s linear infinite",
                pointerEvents: "none",
                zIndex: 2
              }}
            >
              <circle 
                cx="50" 
                cy="50" 
                r="47" 
                fill="transparent" 
                stroke="rgba(16, 185, 129, 0.35)" 
                strokeWidth="1" 
                strokeDasharray="4 6" 
              />
            </svg>
            
            {/* Animated rotating outer scanner ring 2 (Counter-Clockwise, medium) */}
            <svg 
              width="130" 
              height="130" 
              viewBox="0 0 100 100" 
              style={{ 
                position: "absolute", 
                inset: 0, 
                animation: "spin-reverse 6s linear infinite",
                pointerEvents: "none",
                zIndex: 2
              }}
            >
              <circle 
                cx="50" 
                cy="50" 
                r="44" 
                fill="transparent" 
                stroke="rgba(6, 182, 212, 0.25)" 
                strokeWidth="0.8" 
                strokeDasharray="6 4" 
              />
            </svg>

            {/* Animated radar sweep line & sector overlay */}
            <svg 
              width="130" 
              height="130" 
              viewBox="0 0 100 100" 
              style={{ 
                position: "absolute", 
                inset: 0, 
                animation: "spin 2.5s linear infinite",
                pointerEvents: "none",
                zIndex: 2
              }}
            >
              <defs>
                <linearGradient id="radarSweep" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Pie slice representing radar sweep */}
              <path d="M 50 50 L 50 8 A 42 42 0 0 1 80 20 Z" fill="url(#radarSweep)" />
              {/* Radar needle hand line */}
              <line x1="50" y1="50" x2="50" y2="8" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 4px #10b981)" }} />
            </svg>

            <svg width="130" height="130" viewBox="0 0 100 100" style={{ position: "relative", zIndex: 1 }}>
              <circle cx="50" cy="50" r="42" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
              <circle 
                cx="50" 
                cy="50" 
                r="42" 
                fill="transparent" 
                stroke="#10b981" 
                strokeWidth="6" 
                strokeDasharray="263.8" 
                strokeDashoffset={active ? "18.2" : "263.8"}
                strokeLinecap="round" 
                transform="rotate(-90 50 50)"
                style={{ 
                  filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))",
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              />
            </svg>

            {/* Radar glow and text container */}
            <div 
              style={{ 
                position: "absolute", 
                inset: 12, 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center",
                borderRadius: "50%",
                animation: "radar-glow 2s infinite ease-in-out",
                zIndex: 3
              }}
            >
              <span style={{ fontWeight: 900, fontSize: "1.7rem", color: "var(--text-primary)", lineHeight: "1" }}>
                <AnimatedNumber value={accuracy} decimals={2} suffix="%" />
              </span>
              <span style={{ fontSize: "0.6rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase", marginTop: "2px" }}>
                Multinomial NB
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", textAlign: "center" }}>
            <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
              Model sukses memprediksi **<AnimatedNumber value={5028} /> dari <AnimatedNumber value={5402} />** dokumen uji dengan tepat.
            </span>
          </div>
        </div>

        {/* Right Side: Classification Report Table */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <TableProperties size={18} color="var(--accent-secondary)" />
            <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Laporan Klasifikasi Detail (Classification Report)
            </h3>
          </div>

          {/* Styled Table */}
          <div className="glass-panel" style={{ overflow: "hidden", borderColor: "rgba(255,255,255,0.06)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", textAlign: "center" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <th style={{ padding: "10px", textAlign: "left" }}>Kelas</th>
                  <th style={{ padding: "10px" }}>Precision</th>
                  <th style={{ padding: "10px" }}>Recall</th>
                  <th style={{ padding: "10px" }}>F1-Score</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "10px", fontWeight: 700, textAlign: "left", color: "#10b981" }}>Valid (0)</td>
                  <td style={{ padding: "10px", fontFamily: "monospace" }}>0.93</td>
                  <td style={{ padding: "10px", fontFamily: "monospace" }}>0.93</td>
                  <td style={{ padding: "10px", fontFamily: "monospace" }}>0.93</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "10px", fontWeight: 700, textAlign: "left", color: "#ef4444" }}>Hoax (1)</td>
                  <td style={{ padding: "10px", fontFamily: "monospace" }}>0.93</td>
                  <td style={{ padding: "10px", fontFamily: "monospace" }}>0.93</td>
                  <td style={{ padding: "10px", fontFamily: "monospace" }}>0.93</td>
                </tr>
                <tr style={{ background: "rgba(255,255,255,0.01)", fontWeight: 800 }}>
                  <td style={{ padding: "10px", textAlign: "left" }}>Macro Average</td>
                  <td style={{ padding: "10px", fontFamily: "monospace" }}>0.93</td>
                  <td style={{ padding: "10px", fontFamily: "monospace" }}>0.93</td>
                  <td style={{ padding: "10px", fontFamily: "monospace" }}>0.93</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Metrik Analysis Insight Box */}
          <div 
            style={{ 
              background: "rgba(6, 182, 212, 0.03)", 
              borderLeft: "4px solid var(--accent-secondary)", 
              padding: "12px 14px", 
              borderRadius: "0 8px 8px 0" 
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", fontWeight: 800, color: "var(--accent-secondary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              <TrendingUp size={12} /> Analisis Konsistensi Metrik
            </span>
            <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: "1.4", marginTop: "4px" }}>
              Nilai yang **konsisten tinggi (0.93) di kedua kelas** membuktikan bahwa performa model sangat stabil, responsif, dan terhindar dari bias klasifikasi. Hal ini menandakan sistem sangat andal dalam menyaring berita hoax sekaligus aman dalam mempertahankan berita valid.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
