"use client";

import { HelpCircle, ShieldCheck, Target, CheckCircle2 } from "lucide-react";

export default function Slide3Solution() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px", height: "100%", padding: "20px 40px" }}>
      {/* Header */}
      <div className="fade-in-up">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-secondary)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB I: RANCANGAN PENELITIAN
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Fokus Penelitian: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Rumusan, Batasan & Tujuan</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Membatasi ruang lingkup eksperimen guna menjamin akurasi dan efisiensi model komputasi.
        </p>
      </div>

      {/* 3-Column Layout */}
      <div 
        className="fade-in-up anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1.2fr 1fr", 
          gap: "20px",
          marginTop: "10px",
          flex: 1
        }}
      >
        {/* Column 1: Rumusan Masalah */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            display: "flex", 
            flexDirection: "column", 
            gap: "12px",
            borderColor: "rgba(6, 182, 212, 0.15)",
            background: "rgba(6, 182, 212, 0.01)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(6, 182, 212, 0.2)", paddingBottom: "8px" }}>
            <HelpCircle size={18} color="#06b6d4" />
            <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#06b6d4", textTransform: "uppercase", letterSpacing: "0.5px" }}>Rumusan Masalah</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, justifyContent: "center" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#06b6d4", fontWeight: 700 }}>1.</span>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                Bagaimana efektivitas integrasi korpus data berita palsu dari multi-sumber digital?
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#06b6d4", fontWeight: 700 }}>2.</span>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                Seberapa signifikan pengaruh pipa preprocessing NLP & TF-IDF dalam reduksi fitur kata?
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#06b6d4", fontWeight: 700 }}>3.</span>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                Bagaimana akurasi & kestabilan model Multinomial Naive Bayes dalam menyaring hoax?
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Batasan Masalah */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            display: "flex", 
            flexDirection: "column", 
            gap: "12px",
            borderColor: "rgba(245, 158, 11, 0.15)",
            background: "rgba(245, 158, 11, 0.01)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(245, 158, 11, 0.2)", paddingBottom: "8px" }}>
            <ShieldCheck size={18} color="#f59e0b" />
            <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.5px" }}>Batasan Masalah</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, justifyContent: "center" }}>
            {[
              "Khusus artikel berita berbahasa Indonesia.",
              "Menggunakan dataset terintegrasi dari 8 sumber data berbeda berlabel biner.",
              "Klasifikasi berfokus pada isi teks narasi (mengabaikan metadata gambar/penulis).",
              "Algoritma dibatasi pada Multinomial Naive Bayes dengan pemrosesan TF-IDF."
            ].map((text, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <CheckCircle2 size={13} color="#f59e0b" style={{ marginTop: "3px", flexShrink: 0 }} />
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Tujuan Penelitian */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px", 
            display: "flex", 
            flexDirection: "column", 
            gap: "12px",
            borderColor: "rgba(16, 185, 129, 0.15)",
            background: "rgba(16, 185, 129, 0.01)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(16, 185, 129, 0.2)", paddingBottom: "8px" }}>
            <Target size={18} color="#10b981" />
            <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#10b981", textTransform: "uppercase", letterSpacing: "0.5px" }}>Tujuan Penelitian</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "4px"
            }}>
              <Target size={28} color="#10b981" />
            </div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>Sistem Otomatisasi Filter Hoax</h4>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Membangun infrastruktur penyaringan berita palsu yang memiliki tingkat **akurasi tinggi**, **kecepatan komputasi optimal**, serta **stabilitas performa** untuk portal informasi digital skala luas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
