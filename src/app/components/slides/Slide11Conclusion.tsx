"use client";

import { Award, Zap, CheckCircle2, Cpu } from "lucide-react";
import AnimatedNumber from "../AnimatedNumber";

export default function Slide11Conclusion() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "0px 20px 8px 20px" }}>
      {/* Header */}
      <div className="bounce-in">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-secondary)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB VII: KEUNGGULAN KOMPUTASI & PENUTUP
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Kesimpulan: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Rangkuman & Keunggulan Komputasi</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Integrasi data yang sukses, ekstraksi kosa kata yang presisi, dan efisiensi algoritma Naive Bayes.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div 
        className="bounce-in anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1.3fr", 
          gap: "24px",
          marginTop: "10px",
          flex: 1
        }}
      >
        {/* Left Column: Efisiensi Naive Bayes vs LSTM/CNN */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            gap: "12px",
            background: "rgba(10, 8, 24, 0.4)",
            borderColor: "rgba(6, 182, 212, 0.2)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid var(--card-border)", paddingBottom: "8px" }}>
            <Zap size={18} color="var(--accent-secondary)" />
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Efisiensi Komputasi Algoritma
            </span>
          </div>

          <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
            Pendekatan probabilitas berbasis Teorema Bayes sangat ringan, membutuhkan memori rendah, dan sangat cepat dilatih dibanding arsitektur Deep Learning (seperti LSTM/CNN) tanpa mengorbankan akurasi.
          </p>

          {/* Metric Comparison Table */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "6px" }}>
            
            {/* Naive Bayes */}
            <div style={{ background: "rgba(6, 182, 212, 0.05)", border: "1px solid rgba(6, 182, 212, 0.15)", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--accent-secondary)" }}>Multinomial Naive Bayes</span>
                <strong style={{ fontSize: "0.85rem", color: "#10b981" }}><AnimatedNumber value={93.08} decimals={2} suffix="% Akurasi" /></strong>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "4px", fontSize: "0.7rem", color: "var(--text-secondary)" }}>
                <span>Waktu Latih: **&lt; 0.5 Detik**</span>
                <span>Kebutuhan Hardware: **CPU Biasa**</span>
              </div>
            </div>

            {/* Deep Learning */}
            <div style={{ background: "rgba(255, 255, 255, 0.01)", border: "1px solid rgba(255, 255, 255, 0.04)", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)" }}>Deep Learning (LSTM/CNN)</span>
                <strong style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>~<AnimatedNumber value={94.10} decimals={2} suffix="% Akurasi" /></strong>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "4px", fontSize: "0.7rem", color: "var(--text-secondary)" }}>
                <span>Waktu Latih: **~45 Menit**</span>
                <span>Kebutuhan Hardware: **GPU VRAM Tinggi**</span>
              </div>
            </div>

          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Cpu size={14} color="var(--accent-secondary)" />
            <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
              Naive Bayes unggul **<AnimatedNumber value={5000} />x lebih cepat** dalam pelatihan dibanding LSTM.
            </span>
          </div>

        </div>

        {/* Right Column: 3 Kesimpulan Utama */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Award size={18} color="#10b981" />
            <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Tiga Kesimpulan Utama
            </h3>
          </div>

          {[
            {
              node: <>Integrasi multi-sumber data sukses melahirkan korpus data bahasa Indonesia yang kaya dan bervariasi (total dataset bersih <strong><AnimatedNumber value={27010} /></strong> data).</>
            },
            {
              node: <>Kombinasi NLP preprocessing pipeline dan TF-IDF mampu memetakan <strong><AnimatedNumber value={66340} /></strong> dimensi kosa kata secara optimal untuk deteksi pola hoax.</>
            },
            {
              node: <>Model Multinomial Naive Bayes terbukti sangat handal (Akurasi <strong><AnimatedNumber value={93.08} decimals={2} suffix="%" /></strong>) dan siap diimplementasikan sebagai filter misinformasi real-time.</>
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ 
                padding: "12px 16px", 
                display: "flex", 
                alignItems: "flex-start", 
                gap: "12px",
                borderColor: "rgba(255,255,255,0.04)",
                background: "rgba(255,255,255,0.01)"
              }}
            >
              <div style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                color: "#10b981",
                fontSize: "0.75rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "2px"
              }}>
                {idx + 1}
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                {item.node}
              </p>
            </div>
          ))}

          <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "4px" }}>
            <CheckCircle2 size={15} color="#10b981" />
            <span style={{ fontSize: "0.75rem", color: "var(--text-primary)", fontWeight: 700 }}>
              Sistem siap digunakan untuk melayani filter berita digital masa depan.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
