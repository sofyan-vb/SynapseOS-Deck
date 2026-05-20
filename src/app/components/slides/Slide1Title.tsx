"use client";

import { Play, Shield, Cpu, Activity } from "lucide-react";

interface Slide1Props {
  onStartPresenting?: () => void;
}

export default function Slide1Title({ onStartPresenting }: Slide1Props) {
  return (
    <div className="title-container" style={{ gap: "10px" }}>
      {/* Neuralis Animated Logo Core */}
      <div className="glowing-core scale-in" style={{ width: "100px", height: "100px", marginBottom: "15px" }} />

      {/* Corporate Tag */}
      <div 
        className="fade-in-up anim-delay-1" 
        style={{ 
          color: "var(--accent-secondary)", 
          fontSize: "0.85rem", 
          fontWeight: 800, 
          letterSpacing: "3px", 
          textTransform: "uppercase",
          marginBottom: "10px"
        }}
      >
        A N T I G R A V I T Y   L A B S   P R E S E N T S
      </div>

      {/* Main Title */}
      <h1 className="fade-in-up anim-delay-2" style={{ fontSize: "3.8rem", fontWeight: 800, lineHeight: 1.05 }}>
        Meet <span className="text-gradient" style={{ background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)" }}>Neuralis OS</span>
      </h1>
      
      {/* Subtitle */}
      <h2 
        className="fade-in-up anim-delay-3" 
        style={{ 
          fontSize: "1.5rem", 
          fontWeight: 500, 
          color: "var(--text-primary)", 
          marginTop: "10px" 
        }}
      >
        The World's First Autonomous Operating System for Enterprise.
      </h2>

      <p 
        className="fade-in-up anim-delay-4" 
        style={{ 
          fontSize: "1.05rem", 
          color: "var(--text-secondary)", 
          maxWidth: "680px", 
          marginTop: "15px", 
          lineHeight: "1.6",
          textAlign: "center"
        }}
      >
        Neuralis menggabungkan LLM kognitif langsung ke tingkat kernel sistem untuk mengeksekusi sub-tugas korporasi, memantau server, dan mengotomasi alur kerja tanpa instruksi berulang.
      </p>

      {/* Micro badges */}
      <div 
        className="fade-in-up anim-delay-5" 
        style={{ 
          display: "flex", 
          gap: "16px", 
          marginTop: "30px", 
          alignItems: "center",
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "var(--text-secondary)"
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Cpu size={14} color="var(--accent-color)" /> Kernel reasoning
        </span>
        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--card-border)" }} />
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Shield size={14} color="var(--accent-secondary)" /> Sandboxed Exec
        </span>
        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--card-border)" }} />
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Activity size={14} color="#10b981" /> 99.9% Autonomous
        </span>
      </div>

      {onStartPresenting && (
        <button
          onClick={onStartPresenting}
          className="fade-in-up anim-delay-5 pulsating-glow"
          style={{
            marginTop: "35px",
            padding: "14px 32px",
            background: "var(--accent-gradient)",
            border: "none",
            borderRadius: "30px",
            color: "white",
            fontSize: "1rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Play size={16} fill="white" />
          <span>Buka Pitch Deck</span>
        </button>
      )}
    </div>
  );
}
