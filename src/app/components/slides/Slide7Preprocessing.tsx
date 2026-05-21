"use client";

import { useState } from "react";
import { Sparkles, Terminal, ArrowRight, CornerDownRight } from "lucide-react";

export default function Slide7Preprocessing() {
  const [pipelineIndex, setPipelineIndex] = useState(0);

  const rawText = "VIRAL! Ditemukan chip misterius di vaksin COVID-19!! Cek detailnya di https://hoaxsite.com @kementerian_kesehatan dan Sebarkan info ini.";

  const stages = [
    {
      name: "Case Folding",
      action: "Menyeragamkan seluruh karakter huruf besar menjadi huruf kecil (lowercase).",
      result: "viral! ditemukan chip misterius di vaksin covid-19!! cek detailnya di https://hoaxsite.com @kementerian_kesehatan dan sebarkan info ini."
    },
    {
      name: "Regex Cleaning",
      action: "Menghapus komponen non-kontekstual seperti URL, email, angka, mention @, dan tagar.",
      result: "viral! ditemukan chip misterius di vaksin covid!! cek detailnya di dan sebarkan info ini."
    },
    {
      name: "Punctuation Removal",
      action: "Mengeliminasi seluruh simbol tanda baca seperti tanda seru, tanya, titik, dan koma.",
      result: "viral ditemukan chip misterius di vaksin covid cek detailnya di dan sebarkan info ini"
    },
    {
      name: "Tokenization",
      action: "Memecah struktur kalimat panjang menjadi array potongan kata tunggal (tokens).",
      result: '["viral", "ditemukan", "chip", "misterius", "di", "vaksin", "covid", "cek", "detailnya", "di", "dan", "sebarkan", "info", "ini"]'
    },
    {
      name: "Stopword Removal",
      action: "Membuang kata-kata umum bahasa Indonesia yang tidak memiliki bobot informasi (seperti: di, dan, ini, dll).",
      result: '["viral", "ditemukan", "chip", "misterius", "vaksin", "covid", "cek", "detailnya", "sebarkan", "info"]'
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "0px 20px 8px 20px" }}>
      {/* Header */}
      <div className="text-focus-in">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-secondary)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB IV: TEKNOLOGI PENGOLAHAN TEKS
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Pra-pemrosesan Teks: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>NLP Pipeline</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Pembersihan teks mentah secara bertahap untuk menyaring noise bahasa sebelum proses pemodelan statistika.
        </p>
      </div>

      {/* Main Grid */}
      <div 
        className="text-focus-in anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1.2fr", 
          gap: "24px",
          marginTop: "6px",
          flex: 1
        }}
      >
        {/* Left Side: Pipeline Step Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "8px", marginBottom: "4px" }}>
            <Sparkles size={16} color="var(--accent-secondary)" />
            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Tahapan Transformasi Teks
            </span>
          </div>

          {stages.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setPipelineIndex(idx)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                background: pipelineIndex === idx 
                  ? "rgba(6, 182, 212, 0.12)" 
                  : "rgba(255, 255, 255, 0.01)",
                border: pipelineIndex === idx 
                  ? "1.5px solid var(--accent-secondary)" 
                  : "1px solid rgba(255,255,255,0.04)",
                color: pipelineIndex === idx ? "var(--text-primary)" : "var(--text-secondary)",
                textAlign: "left",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
                transform: pipelineIndex === idx ? "translateX(6px)" : "translateX(0)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: pipelineIndex === idx ? "var(--accent-secondary)" : "rgba(255,255,255,0.05)",
                  color: pipelineIndex === idx ? "black" : "var(--text-secondary)",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {idx + 1}
                </span>
                <span style={{ fontSize: "0.88rem", fontWeight: 700 }}>{stage.name}</span>
              </div>
              <ArrowRight size={14} style={{ opacity: pipelineIndex === idx ? 1 : 0.2, transition: "opacity 0.3s" }} />
            </button>
          ))}
        </div>

        {/* Right Side: Interactive Visual Playground (Terminal Box) */}
        <div 
          className="glass-panel" 
          style={{ 
            display: "flex", 
            flexDirection: "column",
            background: "#080612",
            borderColor: "rgba(6, 182, 212, 0.25)",
            borderRadius: "16px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.4), 0 0 15px rgba(6, 182, 212, 0.1)",
            overflow: "hidden",
            position: "relative"
          }}
        >
          {/* Green Terminal Laser Scan Sweep */}
          <div style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #34d399 50%, transparent)",
            boxShadow: "0 0 8px #34d399",
            animation: "scan-vertical 3.5s linear infinite",
            animationDelay: "0.2s",
            opacity: 0.4,
            pointerEvents: "none",
            zIndex: 10
          }} />
          {/* Terminal Window Header */}
          <div style={{ background: "rgba(255,255,255,0.03)", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Terminal size={14} color="var(--accent-secondary)" />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, fontFamily: "monospace", color: "var(--text-secondary)" }}>
                NLP_Pipeline_Visualizer.py
              </span>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
            </div>
          </div>

          {/* Terminal Box Body */}
          <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px", flex: 1, fontFamily: "monospace", fontSize: "0.75rem", overflowY: "auto" }}>
            
            {/* Input Line */}
            <div>
              <span style={{ color: "#34d399" }}>&gt;&gt;&gt; input_text = </span>
              <span style={{ color: "#fb7185", wordBreak: "break-all" }}>"{rawText}"</span>
            </div>

            <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.04)" }} />

            {/* Current Stage Action */}
            <div style={{ color: "var(--text-secondary)", lineHeight: "1.4" }}>
              <span style={{ color: "var(--accent-secondary)", fontWeight: 700 }}># Tahap {pipelineIndex + 1} - {stages[pipelineIndex].name}:</span>
              <p style={{ display: "flex", gap: "6px", marginTop: "4px", paddingLeft: "8px" }}>
                <CornerDownRight size={12} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{stages[pipelineIndex].action}</span>
              </p>
            </div>

            <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.04)" }} />

            {/* Output Line */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ color: "#60a5fa" }}>&gt;&gt;&gt; output_result: </span>
              <div 
                style={{ 
                  background: "rgba(255,255,255,0.02)", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid rgba(255,255,255,0.05)",
                  color: "#e2e8f0",
                  lineHeight: "1.5",
                  wordBreak: "break-all"
                }}
              >
                {stages[pipelineIndex].result}
                <span className="terminal-cursor" style={{ color: "var(--accent-secondary)", fontWeight: "bold" }}>_</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
