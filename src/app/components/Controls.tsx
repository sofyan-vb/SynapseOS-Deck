"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Clock, Menu, RotateCcw, Maximize, Minimize } from "lucide-react";

interface ControlsProps {
  current: number;
  total: number;
  isPlaying: boolean;
  onNext: () => void;
  onPrev: () => void;
  onTogglePlay: () => void;
  onOpenSidebar: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export default function Controls({
  current,
  total,
  isPlaying,
  onNext,
  onPrev,
  onTogglePlay,
  onOpenSidebar,
  isFullscreen,
  onToggleFullscreen,
}: ControlsProps) {
  const [seconds, setSeconds] = useState(0);

  // Speaker Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleResetTimer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSeconds(0);
  };

  const progressPercent = ((current + 1) / total) * 100;

  return (
    <div className="bottom-controls glass-panel">
      {/* Speaker Timer */}
      <div className="timer-container" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Clock size={15} color="var(--accent-secondary)" />
        <span style={{ minWidth: "45px" }}>{formatTime(seconds)}</span>
        <button
          onClick={handleResetTimer}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-secondary)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "2px",
            borderRadius: "4px",
            transition: "all 0.2s ease"
          }}
          title="Reset Timer"
          className="nav-btn"
          style={{ width: "20px", height: "20px" }}
        >
          <RotateCcw size={12} />
        </button>
      </div>

      <div style={{ width: "1px", height: "20px", background: "var(--card-border)" }} />

      {/* Slide Navigation Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="nav-btn"
          title="Slide Sebelumnya (Arrow Left)"
        >
          <ChevronLeft size={20} />
        </button>

        <span style={{ fontSize: "0.85rem", fontWeight: 700, minWidth: "50px", textAlign: "center" }}>
          {current + 1} / {total}
        </span>

        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="nav-btn"
          title="Slide Selanjutnya (Arrow Right)"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div style={{ width: "1px", height: "20px", background: "var(--card-border)" }} />

      {/* Autoplay controller */}
      <button
        onClick={onTogglePlay}
        className="nav-btn"
        style={{
          color: isPlaying ? "var(--accent-color)" : "var(--text-primary)",
        }}
        title={isPlaying ? "Jeda Auto-play (Space)" : "Mulai Auto-play (Space)"}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
      </button>

      {/* Dynamic Progress Bar */}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <div style={{ width: "1px", height: "20px", background: "var(--card-border)" }} />

      {/* Fullscreen Trigger */}
      <button
        onClick={onToggleFullscreen}
        className="nav-btn"
        title={isFullscreen ? "Keluar Layar Penuh (Esc)" : "Layar Penuh (F)"}
      >
        {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
      </button>

      {/* Open Sidebar Menu */}
      <button
        onClick={onOpenSidebar}
        className="nav-btn"
        style={{ color: "var(--accent-color)" }}
        title="Buka Menu Panel Kontrol (M)"
      >
        <Menu size={18} />
      </button>
    </div>
  );
}
