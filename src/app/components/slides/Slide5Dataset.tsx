"use client";

import { useState, useEffect } from "react";
import { Database, FileText, CheckCircle2, ChevronRight } from "lucide-react";
import AnimatedNumber from "../AnimatedNumber";

export default function Slide5Dataset() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const sources = [
    { name: "TurnBackHoax", count: 12995, pct: 48.1 },
    { name: "Kompas.com", count: 4500, pct: 16.7 },
    { name: "Indonesia False News", count: 4231, pct: 15.7 },
    { name: "Antaranews", count: 4200, pct: 15.6 },
    { name: "Detik.com", count: 2800, pct: 10.4 },
    { name: "Gemastik Dataset", count: 600, pct: 2.2 },
    { name: "CekFakta", count: 266, pct: 1.0 },
    { name: "WhatsApp Chat Dump", count: 62, pct: 0.2 }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "0px 20px 8px 20px" }}>
      {/* Header */}
      <div className="zoom-in-accent">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-secondary)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB III: DATASET PENELITIAN
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Laporan Dataset: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Sumber Data Terintegrasi</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Pemanfaatan data multi-sumber guna menghasikan model deteksi yang representatif.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div 
        className="zoom-in-accent anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1.3fr", 
          gap: "24px",
          marginTop: "6px",
          flex: 1
        }}
      >
        {/* Left Column: Volumes and Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
          
          {/* Base Experiment Card */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: "16px 20px", 
              borderLeft: "4px solid var(--accent-secondary)",
              borderColor: "rgba(6, 182, 212, 0.15)",
              background: "rgba(6, 182, 212, 0.01)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <Database size={16} color="var(--accent-secondary)" />
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text-primary)" }}>Basis Eksperimen</span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
              Adaptasi dan perluasan dari dataset publik Kaggle populer yang berjudul <strong style={{ color: "var(--text-primary)" }}>"NLP Indonesia Fake News Detection"</strong>.
            </p>
          </div>

          {/* Volume Korpus Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            
            {/* Raw Data Card */}
            <div 
              className="glass-panel" 
              style={{ 
                padding: "20px 16px", 
                textAlign: "center",
                background: "rgba(255,255,255,0.01)",
                borderColor: "rgba(255,255,255,0.05)",
                animation: "pulse-cyan-glow 3s infinite ease-in-out"
              }}
            >
              <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--text-secondary)", display: "block", textTransform: "uppercase" }}>
                Total Data Mentah
              </span>
              <strong style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", display: "block", margin: "6px 0" }}>
                <AnimatedNumber value={29654} />
              </strong>
              <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>
                Baris data awal
              </span>
            </div>

            {/* Clean Data Card */}
            <div 
              className="glass-panel" 
              style={{ 
                padding: "20px 16px", 
                textAlign: "center",
                background: "rgba(16, 185, 129, 0.05)",
                borderColor: "rgba(16, 185, 129, 0.2)",
                boxShadow: "0 0 15px rgba(16, 185, 129, 0.05)",
                animation: "pulse-green-glow 2.5s infinite ease-in-out"
              }}
            >
              <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#10b981", display: "block", textTransform: "uppercase" }}>
                Total Data Bersih
              </span>
              <strong style={{ fontSize: "1.8rem", fontWeight: 800, color: "#10b981", display: "block", margin: "6px 0" }}>
                <AnimatedNumber value={27010} />
              </strong>
              <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>
                Baris data unik final
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 10px" }}>
            <CheckCircle2 size={14} color="#10b981" />
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              Proses *Cleaning* berhasil mengeliminasi **<AnimatedNumber value={2644} /> data duplikat & kosong**.
            </span>
          </div>

        </div>

        {/* Right Column: Sumber Data Table */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            background: "rgba(10, 8, 24, 0.45)", 
            borderColor: "rgba(6, 182, 212, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Cyan Laser Scan Sweep */}
          <div style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-secondary) 50%, transparent)",
            boxShadow: "0 0 8px var(--accent-secondary)",
            animation: "scan-vertical 3s linear infinite",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 10
          }} />
          <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--text-secondary)", letterSpacing: "1px", textTransform: "uppercase" }}>
            Komposisi 8 Sumber Data Terintegrasi
          </span>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px", overflowY: "auto", maxHeight: "240px", paddingRight: "4px" }}>
            {sources.map((src, i) => (
              <div 
                key={i} 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "4px", 
                  padding: "8px 12px", 
                  background: "rgba(255,255,255,0.01)", 
                  border: "1px solid rgba(255,255,255,0.03)", 
                  borderRadius: "8px" 
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {i + 1}. {src.name}
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--accent-secondary)" }}>
                    <AnimatedNumber value={src.count} /> baris (<AnimatedNumber value={src.pct} decimals={1} suffix="%" />)
                  </span>
                </div>
                {/* Horizontal contribution bar */}
                <div style={{ width: "100%", height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                  <div 
                    style={{ 
                      width: active ? `${src.pct}%` : "0%", 
                      height: "100%", 
                      background: "linear-gradient(90deg, #06b6d4 0%, #10b981 100%)",
                      position: "relative",
                      overflow: "hidden",
                      transition: `width 1.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s`
                    }} 
                  >
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 70%, transparent 100%)",
                      animation: "shimmer-bar 1.2s infinite"
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
