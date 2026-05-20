"use client";

import { Award, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Slide7Team() {
  const cofounders = [
    {
      name: "Dr. Evelyn Widjaja",
      role: "CTO & Co-Founder",
      prev: "Mantan Principal Architect di OpenAI & Ph.D. MIT.",
      focus: "Spesialisasi riset multi-agent orchestration dan cache memori semantik."
    },
    {
      name: "Marcus Chen, MBA",
      role: "COO & Eksekutif Pasar",
      prev: "Mantan VP Business Strategy di Snowflake & MBA Wharton.",
      focus: "Memimpin ekspansi penetrasi pasar enterprise global dan integrasi sistem keuangan."
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%" }}>
      {/* Header */}
      <div className="fade-in-up">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700 }}>
          Tim Pendiri & <span className="text-gradient">Eksekutif Riset</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: "4px" }}>
          Kombinasi talenta riset kecerdasan buatan tingkat lanjut dan kepemimpinan bisnis enterprise terkemuka.
        </p>
      </div>

      {/* Main Team Layout: Left CEO Card, Right CoFounders */}
      <div 
        className="fade-in-up anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap: "35px",
          alignItems: "center",
          flex: 1,
          marginTop: "5px"
        }}
      >
        {/* CEO Featured Card */}
        <div 
          className="glass-panel scale-in" 
          style={{ 
            padding: "24px", 
            display: "grid", 
            gridTemplateColumns: "100px 1fr", 
            gap: "24px", 
            alignItems: "center",
            borderColor: "rgba(168, 85, 247, 0.25)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.5), 0 0 20px rgba(168, 85, 247, 0.1)"
          }}
        >
          {/* Avatar Image Frame */}
          <div 
            style={{ 
              position: "relative", 
              width: "100px", 
              height: "100px", 
              borderRadius: "50%", 
              overflow: "hidden", 
              border: "3px solid var(--accent-color)",
              boxShadow: "0 0 15px var(--glow-color)",
              flexShrink: 0
            }}
          >
            <Image 
              src="/ceo_headshot.png" 
              alt="Aris Pratama - CEO & Founder" 
              fill
              sizes="100px"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-secondary)", textTransform: "uppercase", letterSpacing: "1px" }}>
                CO-FOUNDER & CEO
              </span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)" }}>
                Aris Pratama, Ph.D.
              </h3>
            </div>
            
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
              Mantan Peneliti Senior AI di Google DeepMind dan Stanford AI Lab. Penemu paten kernel OS terdistribusi kognitif.
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "4px", fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 600 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <GraduationCap size={13} color="var(--accent-color)" /> Stanford Alum
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Briefcase size={13} color="var(--accent-secondary)" /> Ex-DeepMind
              </span>
            </div>
          </div>
        </div>

        {/* Co-Founders Secondary List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {cofounders.map((co, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ 
                padding: "16px 24px", 
                display: "flex", 
                flexDirection: "column", 
                gap: "6px",
                borderColor: "rgba(255,255,255,0.03)",
                background: "rgba(255,255,255,0.01)"
              }}
            >
              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>
                  {co.role}
                </span>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>{co.name}</h4>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                <strong style={{ color: "var(--text-primary)" }}>{co.prev} </strong>
                {co.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
