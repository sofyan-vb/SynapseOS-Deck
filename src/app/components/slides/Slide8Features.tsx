"use client";

import { Cpu, Hash, Layers, Network, PieChart } from "lucide-react";

export default function Slide8Features() {
  const trainCount = 21608;
  const testCount = 5402;
  const total = trainCount + testCount;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "20px 40px" }}>
      {/* Header */}
      <div className="fade-in-up">
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
        className="fade-in-up anim-delay-1" 
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
            borderColor: "rgba(168, 85, 247, 0.2)"
          }}
        >
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
              gap: "20px" 
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
                66.340
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
            borderColor: "rgba(6, 182, 212, 0.2)"
          }}
        >
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
                <div style={{ width: "80%", height: "100%", background: "linear-gradient(90deg, #06b6d4 0%, #a855f7 100%)", boxShadow: "0 0 10px rgba(6,182,212,0.2)" }} />
                <div style={{ width: "20%", height: "100%", background: "rgba(255,255,255,0.15)" }} />
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
                  {trainCount.toLocaleString("id-ID")}
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
                  {testCount.toLocaleString("id-ID")}
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
    </div>
  );
}
