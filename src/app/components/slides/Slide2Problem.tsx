"use client";

import { AlertTriangle, TrendingUp, Clock, ShieldAlert } from "lucide-react";

export default function Slide2Problem() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "0px 20px 8px 20px" }}>
      {/* Header */}
      <div className="fade-in-left">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-color)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB I: PENDAHULUAN
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Analisis Masalah: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Latar Belakang Krisis Informasi</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Kecepatan diseminasi informasi digital memicu maraknya misinformasi yang merusak tatanan sosial.
        </p>
      </div>

      {/* Grid of 4 Key Problems */}
      <div 
        className="fade-in-left anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "20px",
          marginTop: "10px",
          flex: 1
        }}
      >
        {/* Card 1: Masifnya Berita Digital */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            display: "flex", 
            gap: "16px", 
            borderColor: "rgba(6, 182, 212, 0.15)",
            background: "rgba(6, 182, 212, 0.02)"
          }}
        >
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "rgba(6, 182, 212, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}>
            <TrendingUp size={24} color="#06b6d4" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>Masifnya Berita Digital</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Kecepatan distribusi informasi di era digital sangat masif, namun sering kali mengabaikan proses verifikasi jurnalistik yang menyeluruh demi mengejar kecepatan publikasi (*speed journalism*).
            </p>
          </div>
        </div>

        {/* Card 2: Dampak Hoax */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            display: "flex", 
            gap: "16px", 
            borderColor: "rgba(239, 68, 68, 0.15)",
            background: "rgba(239, 68, 68, 0.02)"
          }}
        >
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "rgba(239, 68, 68, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}>
            <AlertTriangle size={24} color="#ef4444" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>Dampak Hoax (Berita Palsu)</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Judul provokatif (*clickbait*) dan narasi menyesatkan sengaja dibuat untuk memicu manipulasi opini publik, polarisasi, kepanikan, hingga konflik sosial berskala nasional.
            </p>
          </div>
        </div>

        {/* Card 3: Kelemahan Verifikasi Konvensional */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            display: "flex", 
            gap: "16px", 
            borderColor: "rgba(245, 158, 11, 0.15)",
            background: "rgba(245, 158, 11, 0.02)"
          }}
        >
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "rgba(245, 158, 11, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}>
            <Clock size={24} color="#f59e0b" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>Kelemahan Verifikasi Konvensional</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Pemeriksaan fakta (*fact-checking*) manual oleh tim ahli membutuhkan waktu, tenaga, dan biaya besar. Metode ini terbukti tidak sanggup mengimbangi laju pertumbuhan berita hoax yang eksponensial.
            </p>
          </div>
        </div>

        {/* Card 4: Urgensi Solusi */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            display: "flex", 
            gap: "16px", 
            borderColor: "rgba(168, 85, 247, 0.15)",
            background: "rgba(168, 85, 247, 0.02)"
          }}
        >
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "rgba(168, 85, 247, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}>
            <ShieldAlert size={24} color="#a855f7" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>Urgensi Solusi Otomatisasi</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Diperlukan sebuah infrastruktur otomatis berbasis *Machine Learning* dan *Natural Language Processing* (NLP) yang mampu menyaring, memetakan, dan mendeteksi pola teks berita bohong secara instan dan objektif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
