"use client";

import { X, Play, Sliders, Layout, Palette, Settings } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (idx: number) => void;
  transitionType: string;
  onSetTransition: (t: string) => void;
  speed: number;
  onSetSpeed: (s: number) => void;
  autoplayInterval: number;
  onSetAutoplayInterval: (i: number) => void;
  theme: string;
  onSetTheme: (t: string) => void;
}

export default function Sidebar({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
  transitionType,
  onSetTransition,
  speed,
  onSetSpeed,
  autoplayInterval,
  onSetAutoplayInterval,
  theme,
  onSetTheme,
}: SidebarProps) {
  const slides = [
    "1. Sampul Neuralis OS",
    "2. Masalah Industri",
    "3. Solusi & Mockup Dasbor",
    "4. Arsitektur Inti Sistem",
    "5. Ukuran Peluang Pasar",
    "6. Proyeksi ARR 5 Tahun",
    "7. Tim Pendiri & Riset",
    "8. Roadmap Aksi & Demo",
  ];

  const themes = [
    { id: "cyber", name: "Cyberpunk Purple", class: "theme-dot-cyber" },
    { id: "emerald", name: "Emerald Matrix", class: "theme-dot-emerald" },
    { id: "steel", name: "Midnight Steel", class: "theme-dot-steel" },
    { id: "crimson", name: "Crimson Dawn", class: "theme-dot-crimson" },
  ];

  return (
    <div className={`sidebar-panel glass-panel ${isOpen ? "open" : ""}`}>
      {/* Sidebar Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Settings size={20} color="var(--accent-color)" />
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, letterSpacing: "0.5px" }}>PRESENTER BOARD</h3>
        </div>
        <button
          onClick={onClose}
          className="nav-btn"
          style={{ width: "32px", height: "32px" }}
          title="Tutup Menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Control Group: Theme */}
      <div className="control-group">
        <span className="section-title">
          <Palette size={12} style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
          Tema Visual
        </span>
        <div className="theme-grid">
          {themes.map((t) => (
            <div
              key={t.id}
              onClick={() => onSetTheme(t.id)}
              className={`theme-dot ${t.class} ${theme === t.id ? "active" : ""}`}
              title={t.name}
            />
          ))}
        </div>
      </div>

      {/* Control Group: Transitions */}
      <div className="control-group">
        <span className="section-title">
          <Sliders size={12} style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
          Efek Transisi
        </span>
        <select
          value={transitionType}
          onChange={(e) => onSetTransition(e.target.value)}
          className="select-input"
        >
          <option value="fade">Fade In-Out</option>
          <option value="slide-left">Geser Kiri (Slide Left)</option>
          <option value="slide-right">Geser Kanan (Slide Right)</option>
          <option value="zoom">Zoom</option>
          <option value="flip">Flip 3D (Y-Axis)</option>
          <option value="cube">Perspective 3D Cube</option>
        </select>
      </div>

      {/* Control Group: Transition Speed */}
      <div className="control-group">
        <span className="section-title">Durasi Transisi</span>
        <select
          value={speed}
          onChange={(e) => onSetSpeed(Number(e.target.value))}
          className="select-input"
        >
          <option value="300">Cepat (300ms)</option>
          <option value="600">Sedang (600ms)</option>
          <option value="1000">Lambat (1000ms)</option>
          <option value="1500">Sangat Lambat (1500ms)</option>
        </select>
      </div>

      {/* Control Group: Autoplay Duration */}
      <div className="control-group">
        <span className="section-title">Interval Auto-play</span>
        <select
          value={autoplayInterval}
          onChange={(e) => onSetAutoplayInterval(Number(e.target.value))}
          className="select-input"
        >
          <option value="3000">3 Detik</option>
          <option value="5000">5 Detik</option>
          <option value="8000">8 Detik</option>
          <option value="12000">12 Detik</option>
        </select>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid var(--card-border)", margin: "20px 0" }} />

      {/* Control Group: Slide Directory */}
      <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
        <span className="section-title">
          <Layout size={12} style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
          Daftar Slide
        </span>
        <div className="slide-directory">
          {slides.map((title, idx) => (
            <div
              key={idx}
              onClick={() => onSelectSlide(idx)}
              className={`dir-item ${currentSlide === idx ? "active" : ""}`}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: currentSlide === idx ? "var(--accent-color)" : "transparent",
                  border: currentSlide === idx ? "none" : "1px solid var(--text-secondary)",
                }}
              />
              <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
