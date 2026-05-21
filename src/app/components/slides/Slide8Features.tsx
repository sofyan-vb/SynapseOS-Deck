"use client";

import { useState, useEffect } from "react";
import { Cpu, Hash, Layers, Network, PieChart } from "lucide-react";
import AnimatedNumber from "../AnimatedNumber";

export default function Slide8Features() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const trainCount = 21608;
  const testCount = 5402;
  const total = trainCount + testCount;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "0px 20px 8px 20px" }}>
      {/* Header */}
      <div className="elastic-slide">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-color)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB V: EKSTRAKSI FITUR & DISTRIBUSI MODEL
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Model Representasi: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>TF-IDF & Pembagian Data</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Proses pemetaan kosa kata verbal ke ruang vektor numerik dan pemisahan korpus latih-uji.
        </p>
      </div>

      {/* Grid Layout */}
      <div 
        className="elastic-slide anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1.1fr 1.2fr", 
          gap: "24px",
          marginTop: "10px",
          flex: 1
        }}
      >
        {/* Left Side: TF-IDF Feature Extraction */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "24px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            gap: "16px",
            background: "rgba(10, 8, 24, 0.4)",
            borderColor: "rgba(168, 85, 247, 0.2)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Purple TF-IDF Laser Scan Sweep */}
          <div style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-color) 50%, transparent)",
            boxShadow: "0 0 8px var(--accent-color)",
            animation: "scan-vertical 3s linear infinite",
            animationDelay: "0.2s",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 10
          }} />
          <div style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid var(--card-border)", paddingBottom: "10px" }}>
            <Cpu size={18} color="var(--accent-color)" />
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Ekstraksi Fitur (TF-IDF Vectorizer)
            </span>
          </div>

          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            Mengonversi kata tunggal menjadi representasi matriks numerik berdasarkan bobot statistik frekuensi kemunculannya (*Term Frequency*) dan kepentingan relatif dokumen (*Inverse Document Frequency*).
          </p>

          {/* Giga Metric box */}
          <div 
            style={{ 
              background: "rgba(168, 85, 247, 0.05)", 
              border: "1px solid rgba(168, 85, 247, 0.2)", 
              padding: "16px 20px", 
              borderRadius: "12px", 
              display: "flex", 
              alignItems: "center", 
              gap: "20px",
              animation: "pulse-purple-glow 2.8s infinite ease-in-out"
            }}
          >
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "rgba(168, 85, 247, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Hash size={24} color="var(--accent-color)" />
            </div>
            <div>
              <strong style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text-primary)", display: "block", lineHeight: "1.1" }}>
                <AnimatedNumber value={66340} />
              </strong>
              <span style={{ fontSize: "0.75rem", color: "var(--accent-color)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Fitur Kosa Kata Unik
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Layers size={14} color="var(--text-secondary)" />
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              Berhasil mereduksi dimensi teks dengan mempertahankan bobot informasi kontekstual tertinggi.
            </span>
          </div>
        </div>

        {/* Right Side: Data Splitting (80:20 Ratio) */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "24px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            gap: "16px",
            background: "rgba(10, 8, 24, 0.4)",
            borderColor: "rgba(6, 182, 212, 0.2)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Cyan Data Splitting Laser Scan Sweep */}
          <div style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-secondary) 50%, transparent)",
            boxShadow: "0 0 8px var(--accent-secondary)",
            animation: "scan-vertical 3.4s linear infinite",
            animationDelay: "0.6s",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 10
          }} />
          <div style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid var(--card-border)", paddingBottom: "10px" }}>
            <PieChart size={18} color="var(--accent-secondary)" />
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Pemisahan Data (Data Splitting 80:20)
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Visual ratio bar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: 700 }}>
                <span style={{ color: "var(--accent-secondary)" }}>Data Latih (80%)</span>
                <span style={{ color: "var(--text-secondary)" }}>Data Uji (20%)</span>
              </div>
              <div style={{ width: "100%", height: "20px", background: "rgba(255,255,255,0.02)", borderRadius: "10px", overflow: "hidden", display: "flex", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ width: active ? "80%" : "0%", height: "100%", background: "linear-gradient(90deg, #06b6d4 0%, #a855f7 100%)", boxShadow: "0 0 10px rgba(6,182,212,0.2)", position: "relative", overflow: "hidden", transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)" }}>
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
                <div style={{ width: active ? "20%" : "0%", height: "100%", background: "rgba(255,255,255,0.15)", position: "relative", overflow: "hidden", transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s" }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)",
                    animation: "shimmer-bar 1.8s infinite"
                  }} />
                </div>
              </div>
            </div>
          </div>

          {/* Split Details Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            
            {/* Train set info */}
            <div style={{ background: "rgba(6, 182, 212, 0.03)", border: "1px solid rgba(6, 182, 212, 0.15)", borderRadius: "10px", padding: "12px 14px" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--accent-secondary)", display: "block", textTransform: "uppercase" }}>
                Data Pelatihan (X_train)
              </span>
              <strong style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", display: "block", marginTop: "4px" }}>
                <AnimatedNumber value={trainCount} />
              </strong>
              <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", display: "block", marginTop: "2px" }}>
                Dokumen berita terlabel
              </span>
            </div>

            {/* Test set info */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px", padding: "12px 14px" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--text-secondary)", display: "block", textTransform: "uppercase" }}>
                Data Pengujian (X_test)
              </span>
              <strong style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", display: "block", marginTop: "4px" }}>
                <AnimatedNumber value={testCount} />
              </strong>
              <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", display: "block", marginTop: "2px" }}>
                Dokumen berita terlabel
              </span>
            </div>

          </div>

          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <Network size={14} color="var(--accent-secondary)" />
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              Pemisahan acak menggunakan *stratified sampling* untuk menjaga kestabilan kelas.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
