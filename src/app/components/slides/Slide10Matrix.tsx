"use client";

import { useState } from "react";
import { Grid, HelpCircle, ShieldCheck, ShieldAlert, AlertTriangle } from "lucide-react";
import AnimatedNumber from "../AnimatedNumber";

export default function Slide10Matrix() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  const matrixDetails = {
    TN: {
      title: "True Negative (TN) - 2.330",
      desc: "Dokumen berita VALID asli yang dengan tepat diidentifikasi oleh model sebagai berita VALID.",
      impact: "Sangat penting agar portal tidak menyensor berita yang benar dan valid."
    },
    FP: {
      title: "False Positive (FP) - 170",
      desc: "Kesalahan klasifikasi di mana berita VALID asli secara keliru dituduh sebagai HOAX oleh model.",
      impact: "Tingkat FP yang rendah (6.8%) menjamin kredibilitas portal berita tetap aman."
    },
    FN: {
      title: "False Negative (FN) - 204",
      desc: "Kesalahan fatal di mana berita HOAX palsu gagal terdeteksi dan lolos sebagai berita VALID.",
      impact: "Tingkat FN yang sangat rendah (7.0%) meminimalkan lolosnya fitnah/disinformasi."
    },
    TP: {
      title: "True Positive (TP) - 2.698",
      desc: "Dokumen berita HOAX palsu yang secara akurat terdeteksi oleh sistem filter Naive Bayes.",
      impact: "Membuktikan efektivitas sistem dalam mengamankan ruang siber informasi."
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "0px 20px 8px 20px" }}>
      {/* Header */}
      <div className="rotate-fade">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-color)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB VI: ANALISIS KEKELIRUAN MODEL
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Confusion Matrix: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #a855f7 0%, #ef4444 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Korelasi Akurasi Prediksi</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Pemetaan detail korelasi antara label aktual berita dengan hasil prediksi algoritma.
        </p>
      </div>

      {/* Main Grid */}
      <div 
        className="rotate-fade anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap: "24px",
          marginTop: "10px",
          flex: 1
        }}
      >
        {/* Left Side: Interactive 2x2 Matrix */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "8px" }}>
            <Grid size={18} color="var(--accent-color)" />
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Visualisasi Grid Confusion Matrix (N = 5.402)
            </span>
          </div>

          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "80px 1fr 1fr", 
              gridTemplateRows: "40px 1fr 1fr",
              gap: "8px", 
              flex: 1,
              textAlign: "center"
            }}
          >
            {/* Row 0 / Header Columns */}
            <div />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800, color: "#10b981", background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.15)", borderRadius: "6px" }}>
              PREDIKSI VALID
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800, color: "#ef4444", background: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.15)", borderRadius: "6px" }}>
              PREDIKSI HOAX
            </div>

            {/* Row 1 / Actual Valid */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 800, color: "#10b981", background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.15)", borderRadius: "6px", writingMode: "vertical-lr", transform: "rotate(180deg)" }}>
              AKTUAL VALID
            </div>

            {/* TN Cell */}
            <div 
              onMouseEnter={() => setHoveredCell("TN")}
              onMouseLeave={() => setHoveredCell(null)}
              style={{ 
                background: hoveredCell === "TN" ? "rgba(16, 185, 129, 0.25)" : "rgba(16, 185, 129, 0.15)", 
                border: "2px solid #10b981", 
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: hoveredCell === "TN" ? "0 0 15px rgba(16, 185, 129, 0.3)" : "none",
                position: "relative",
                overflow: "hidden",
                animation: "pulse-green-glow 3s infinite ease-in-out"
              }}
            >
              {/* Green Laser Scan Sweep */}
              <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #10b981 50%, transparent)",
                boxShadow: "0 0 8px #10b981",
                animation: "scan-vertical 1.5s linear infinite",
                animationDelay: "0s",
                opacity: 0.6,
                pointerEvents: "none"
              }} />
              <ShieldCheck size={28} color="#10b981" />
              <strong style={{ fontSize: "1.6rem", display: "block", marginTop: "4px" }}><AnimatedNumber value={2330} /></strong>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>TRUE NEGATIVE (TN)</span>
            </div>

            {/* FP Cell */}
            <div 
              onMouseEnter={() => setHoveredCell("FP")}
              onMouseLeave={() => setHoveredCell(null)}
              style={{ 
                background: hoveredCell === "FP" ? "rgba(239, 68, 68, 0.15)" : "rgba(239, 68, 68, 0.03)", 
                border: "1.5px dashed rgba(239, 68, 68, 0.3)", 
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: hoveredCell === "FP" ? "0 0 15px rgba(239, 68, 68, 0.1)" : "none",
                position: "relative",
                overflow: "hidden",
                animation: "pulse-amber-glow 3.2s infinite ease-in-out"
              }}
            >
              {/* Amber Laser Scan Sweep */}
              <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #f59e0b 50%, transparent)",
                boxShadow: "0 0 8px #f59e0b",
                animation: "scan-vertical 1.8s linear infinite",
                animationDelay: "0.4s",
                opacity: 0.5,
                pointerEvents: "none"
              }} />
              <AlertTriangle size={24} color="#f59e0b" />
              <strong style={{ fontSize: "1.4rem", display: "block", marginTop: "4px" }}><AnimatedNumber value={170} /></strong>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--text-secondary)" }}>FALSE POSITIVE (FP)</span>
            </div>

            {/* Row 2 / Actual Hoax */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 800, color: "#ef4444", background: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.15)", borderRadius: "6px", writingMode: "vertical-lr", transform: "rotate(180deg)" }}>
              AKTUAL HOAX
            </div>

            {/* FN Cell */}
            <div 
              onMouseEnter={() => setHoveredCell("FN")}
              onMouseLeave={() => setHoveredCell(null)}
              style={{ 
                background: hoveredCell === "FN" ? "rgba(239, 68, 68, 0.15)" : "rgba(239, 68, 68, 0.03)", 
                border: "1.5px dashed rgba(239, 68, 68, 0.3)", 
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: hoveredCell === "FN" ? "0 0 15px rgba(239, 68, 68, 0.1)" : "none",
                position: "relative",
                overflow: "hidden",
                animation: "pulse-yellow-glow 3.4s infinite ease-in-out"
              }}
            >
              {/* Red Laser Scan Sweep */}
              <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #ef4444 50%, transparent)",
                boxShadow: "0 0 8px #ef4444",
                animation: "scan-vertical 1.7s linear infinite",
                animationDelay: "0.8s",
                opacity: 0.5,
                pointerEvents: "none"
              }} />
              <AlertTriangle size={24} color="#ef4444" />
              <strong style={{ fontSize: "1.4rem", display: "block", marginTop: "4px" }}><AnimatedNumber value={204} /></strong>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--text-secondary)" }}>FALSE NEGATIVE (FN)</span>
            </div>

            {/* TP Cell */}
            <div 
              onMouseEnter={() => setHoveredCell("TP")}
              onMouseLeave={() => setHoveredCell(null)}
              style={{ 
                background: hoveredCell === "TP" ? "rgba(239, 68, 68, 0.25)" : "rgba(239, 68, 68, 0.15)", 
                border: "2px solid #ef4444", 
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: hoveredCell === "TP" ? "0 0 15px rgba(239, 68, 68, 0.3)" : "none",
                position: "relative",
                overflow: "hidden",
                animation: "pulse-red-glow 2.8s infinite ease-in-out"
              }}
            >
              {/* Red Laser Scan Sweep */}
              <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #ef4444 50%, transparent)",
                boxShadow: "0 0 8px #ef4444",
                animation: "scan-vertical 1.4s linear infinite",
                animationDelay: "0.2s",
                opacity: 0.6,
                pointerEvents: "none"
              }} />
              <ShieldAlert size={28} color="#ef4444" />
              <strong style={{ fontSize: "1.6rem", display: "block", marginTop: "4px" }}><AnimatedNumber value={2698} /></strong>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>TRUE POSITIVE (TP)</span>
            </div>

          </div>
        </div>

        {/* Right Side: Interactive detail panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "10px" }}>
            <HelpCircle size={18} color="var(--accent-color)" />
            <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Analisis Tingkat Kesalahan
            </h3>
          </div>

          {hoveredCell ? (
            /* Hover Cell Details Card */
            <div 
              className="glass-panel scale-in" 
              style={{ 
                padding: "20px", 
                borderColor: hoveredCell === "TN" || hoveredCell === "TP" ? "rgba(16, 185, 129, 0.25)" : "rgba(239, 68, 68, 0.25)",
                background: hoveredCell === "TN" || hoveredCell === "TP" ? "rgba(16, 185, 129, 0.02)" : "rgba(239, 68, 68, 0.02)"
              }}
            >
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)" }}>
                {matrixDetails[hoveredCell as keyof typeof matrixDetails].title}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5", marginTop: "8px" }}>
                {matrixDetails[hoveredCell as keyof typeof matrixDetails].desc}
              </p>
              <div style={{ marginTop: "10px", padding: "8px 12px", background: "rgba(255,255,255,0.02)", borderRadius: "6px", borderLeft: "3px solid var(--accent-color)" }}>
                <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--accent-color)", display: "block" }}>IMPLIKASI SISTEM</span>
                <p style={{ fontSize: "0.78rem", color: "var(--text-primary)", marginTop: "2px", lineHeight: "1.4" }}>
                  {matrixDetails[hoveredCell as keyof typeof matrixDetails].impact}
                </p>
              </div>
            </div>
          ) : (
            /* Default Matrix Summary list */
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="glass-panel" style={{ padding: "12px 16px", background: "rgba(255,255,255,0.01)", borderColor: "rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#10b981", display: "block" }}>Minim Kesalahan (Kecilnya FP & FN)</span>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: "1.4", marginTop: "2px" }}>
                  Tingkat kekeliruan (FP 6.8% dan FN 7.0%) sangat kecil. Ini menepis keraguan bias model dan menstabilkan filter dari tuduhan palsu.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: "12px 16px", background: "rgba(168, 85, 247, 0.02)", borderColor: "rgba(168, 85, 247, 0.15)" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--accent-color)", display: "block" }}>Kesimpulan Matriks Pengujian</span>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: "1.4", marginTop: "2px" }}>
                  Kekeliruan klasifikasi yang minim menjamin performa sistem sangat andal apabila diimplementasikan secara langsung pada portal informasi digital skala komersial sesungguhnya.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
