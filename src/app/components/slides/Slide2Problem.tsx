"use client";

import { useState } from "react";
import { AlertTriangle, Clock, TrendingUp, HelpCircle } from "lucide-react";

export default function Slide2Problem() {
  const [activeTab, setActiveTab] = useState("data");

  const caseStudies = {
    data: {
      title: "Ketidaksinkronan Data (Data Desynchronization)",
      metric: "40% Kesalahan Input",
      desc: "Tim operasional menghabiskan rata-rata 12 jam per minggu memindahkan data antar CRM, spreadsheets, dan ERP secara manual, memicu kerentanan error ketik.",
      consequence: "Menyebabkan penundaan pemrosesan invoice hingga 5 hari kerja."
    },
    communication: {
      title: "Lag Komunikasi & Pemrosesan Tiket",
      metric: "24 Jam Response Delay",
      desc: "Menghubungkan email pelanggan, SLA bantuan, dan sistem logistik internal membutuhkan koordinasi manual tim pendukung yang melelahkan.",
      consequence: "Meningkatkan pembatalan orderan hingga 14% karena keterlambatan penanganan."
    }
  };

  const currentCase = caseStudies[activeTab as keyof typeof caseStudies];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px", height: "100%" }}>
      {/* Header */}
      <div className="fade-in-up">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700 }}>
          Masalah Industri: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)" }}>Beban Operasional Global</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: "4px" }}>
          Ketidakpasan otomasi konvensional membakar produktivitas karyawan pada tugas manual yang berulang.
        </p>
      </div>

      {/* Main Statistics Layout */}
      <div 
        className="fade-in-up anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1.2fr", 
          gap: "24px",
          marginTop: "10px"
        }}
      >
        {/* Stat 1: Waktu Terbuang */}
        <div className="glass-panel" style={{ padding: "24px", display: "flex", alignItems: "center", gap: "20px", borderColor: "rgba(239, 68, 68, 0.2)" }}>
          <div style={{ position: "relative", width: "100px", height: "100px", flexShrink: 0 }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#ef4444" 
                strokeWidth="8" 
                strokeDasharray="251.2" 
                strokeDashoffset="75.3" 
                strokeLinecap="round" 
                transform="rotate(-90 50 50)"
                style={{ filter: "drop-shadow(0 0 5px rgba(239, 68, 68, 0.4))" }}
              />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justify: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.25rem" }}>
              70%
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={16} color="#ef4444" />
              <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>Waktu Terbuang</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
              Waktu harian staf operasional dihabiskan untuk memindahkan spreadsheet, data entry, dan koordinasi manual.
            </p>
          </div>
        </div>

        {/* Stat 2: Kerugian Finansial */}
        <div className="glass-panel" style={{ padding: "24px", display: "flex", alignItems: "center", gap: "20px", borderColor: "rgba(249, 115, 22, 0.2)" }}>
          <div 
            style={{ 
              width: "80px", 
              height: "80px", 
              borderRadius: "50%", 
              background: "rgba(249, 115, 22, 0.1)", 
              border: "1px solid rgba(249, 115, 22, 0.2)",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              flexShrink: 0,
              boxShadow: "0 0 15px rgba(249, 115, 22, 0.15)"
            }}
          >
            <TrendingUp size={36} color="#f97316" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#f97316", lineHeight: "1" }}>$1.3 Triliun</span>
            <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Kerugian Finansial Global</span>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
              Dampak kumulatif inefisiensi pengerjaan data manual dan salah komunikasi dalam skala bisnis global tahunan.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Case Study Tab Box */}
      <div 
        className="glass-panel scale-in anim-delay-2"
        style={{
          flex: 1,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "10px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
            <AlertTriangle size={16} color="#ef4444" />
            <span>Kasus Inefisiensi Operasi Riil</span>
          </h3>
          {/* Tab buttons */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setActiveTab("data")}
              className="select-input"
              style={{
                fontSize: "0.8rem",
                padding: "6px 12px",
                background: activeTab === "data" ? "rgba(239, 68, 68, 0.15)" : "transparent",
                borderColor: activeTab === "data" ? "#ef4444" : "var(--card-border)",
                color: activeTab === "data" ? "#ef4444" : "var(--text-primary)"
              }}
            >
              Inefisiensi Data
            </button>
            <button
              onClick={() => setActiveTab("communication")}
              className="select-input"
              style={{
                fontSize: "0.8rem",
                padding: "6px 12px",
                background: activeTab === "communication" ? "rgba(249, 115, 22, 0.15)" : "transparent",
                borderColor: activeTab === "communication" ? "#f97316" : "var(--card-border)",
                color: activeTab === "communication" ? "#f97316" : "var(--text-primary)"
              }}
            >
              Lag Komunikasi
            </button>
          </div>
        </div>

        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "24px", 
            background: "rgba(0,0,0,0.15)", 
            padding: "20px", 
            borderRadius: "12px",
            border: "1px solid var(--card-border)",
            flex: 1,
            alignItems: "center"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#f97316", textTransform: "uppercase" }}>
              {currentCase.metric}
            </span>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{currentCase.title}</h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5", marginTop: "4px" }}>
              {currentCase.desc}
            </p>
          </div>

          <div 
            style={{ 
              padding: "16px", 
              background: "rgba(239,68,68,0.03)", 
              borderLeft: "3px solid #ef4444", 
              borderRadius: "0 8px 8px 0"
            }}
          >
            <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "var(--text-secondary)" }}>KONSEKUENSI</span>
            <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginTop: "4px", lineHeight: "1.4" }}>
              {currentCase.consequence}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
