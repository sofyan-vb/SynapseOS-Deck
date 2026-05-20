"use client";

import { Cpu, CheckCircle2, Globe, Server } from "lucide-react";
import Image from "next/image";

export default function Slide3Solution() {
  const capabilities = [
    {
      title: "Reasoning Terpadu Kernel",
      desc: "Kapasitas kognitif ditanamkan langsung pada penjadwal OS untuk merumuskan logika perencanaan.",
      icon: <Cpu size={16} color="var(--accent-color)" />
    },
    {
      title: "Sandbox Eksekusi Aman",
      desc: "Menjalankan generator script python sandbox dan query database sensitif secara terisolasi.",
      icon: <Server size={16} color="var(--accent-secondary)" />
    },
    {
      title: "Penghubung API Fleksibel",
      desc: "Konektor siap pakai untuk GitHub, Slack, databases, Jira, dan tools korporat umum.",
      icon: <Globe size={16} color="#10b981" />
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%" }}>
      {/* Header */}
      <div className="fade-in-up">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700 }}>
          Solusi: Memperkenalkan <span className="text-gradient">Neuralis Enterprise OS</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: "4px" }}>
          Sistem operasi otonom pertama yang menggabungkan model berpikir langsung di inti logika komputer.
        </p>
      </div>

      {/* Two-column layout: Mockup Image Left, Features Right */}
      <div 
        className="fade-in-up anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1.3fr 1fr", 
          gap: "35px",
          alignItems: "center",
          flex: 1
        }}
      >
        {/* Left Mockup Panel */}
        <div 
          className="glass-panel scale-in" 
          style={{ 
            padding: "8px", 
            borderRadius: "16px",
            borderColor: "rgba(168, 85, 247, 0.25)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(168, 85, 247, 0.15)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            background: "rgba(5, 2, 10, 0.7)"
          }}
        >
          {/* Mock Browser Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 12px", borderBottom: "1px solid var(--card-border)" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#eab308" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginLeft: "15px", fontFamily: "monospace" }}>
              https://neuralis-os.internal/dashboard
            </span>
          </div>

          {/* Screenshot Mockup */}
          <div style={{ position: "relative", width: "100%", height: "245px", overflow: "hidden", borderRadius: "0 0 8px 8px" }}>
            <Image 
              src="/neuralis_dashboard.png" 
              alt="Neuralis Dashboard Mockup" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Feature Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {capabilities.map((c, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ 
                padding: "16px 20px", 
                display: "flex", 
                gap: "15px", 
                alignItems: "flex-start",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.01)",
                borderColor: "rgba(255, 255, 255, 0.03)"
              }}
            >
              <div 
                style={{ 
                  width: "36px", 
                  height: "36px", 
                  borderRadius: "8px", 
                  background: "rgba(255, 255, 255, 0.03)", 
                  border: "1px solid var(--card-border)",
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                {c.icon}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{c.title}</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
