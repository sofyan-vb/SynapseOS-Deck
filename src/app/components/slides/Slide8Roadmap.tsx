"use client";

import { useState } from "react";
import { Check, Send, Award, Calendar, ShieldCheck } from "lucide-react";

export default function Slide8Roadmap() {
  const [completedPhases, setCompletedPhases] = useState<string[]>(["phase1"]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const milestones = [
    { id: "phase1", tag: "Q1 Launch", title: "Fase 1: Uji Coba Alpha Fortune 50", desc: "Instalasi Neuralis Core terisolasi di 5 klien sektor keuangan utama." },
    { id: "phase2", tag: "Q2 Expand", title: "Fase 2: Integrasi Sandbox & Series A", desc: "Integrasi API Sandbox aman dan putaran investasi Series A senilai $15M." },
    { id: "phase3", tag: "Q3 Scale", title: "Fase 3: Multi-Agent Hub Korporat", desc: "Peluncuran portal orkestrasi kolaboratif multi-agen antar-departemen." },
    { id: "phase4", tag: "Q4 Global", title: "Fase 4: Sertifikasi Keamanan SOC2", desc: "Skala global penuh dengan audit keamanan komprehensif SOC2 Type II." }
  ];

  const handleToggle = (id: string) => {
    if (id === "phase1") return; // Keep phase 1 unlocked as baseline
    setCompletedPhases((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const getProgress = () => {
    const total = milestones.length;
    const completed = completedPhases.length;
    return Math.round((completed / total) * 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormSubmitted(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%" }}>
      {/* Header */}
      <div className="fade-in-up">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700 }}>
          Rencana Aksi & <span className="text-gradient">Langkah Adopsi</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: "4px" }}>
          Peta jalan taktis implementasi sistem otonom. Klik milestonenya untuk mengisi persentase tingkat kesiapan adopsi.
        </p>
      </div>

      {/* Action Progress Counter */}
      <div 
        className="fade-in-up anim-delay-1 glass-panel" 
        style={{ 
          padding: "12px 24px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          borderColor: "rgba(16, 185, 129, 0.25)",
          background: "rgba(16, 185, 129, 0.02)"
        }}
      >
        <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1px" }}>
          PROGRES EVALUASI PENCAPAIAN ROADMAP:
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div className="progress-track" style={{ width: "250px" }}>
            <div className="progress-fill" style={{ width: `${getProgress()}%` }} />
          </div>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#10b981" }}>
            {getProgress()}% Siap
          </span>
        </div>
      </div>

      {/* Two-Column Grid: Checklist Left, Contact Form Right */}
      <div 
        className="fade-in-up anim-delay-2" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap: "24px",
          alignItems: "center",
          flex: 1
        }}
      >
        {/* Checklist Block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {milestones.map((m) => {
            const isCompleted = completedPhases.includes(m.id);
            return (
              <div
                key={m.id}
                onClick={() => handleToggle(m.id)}
                className="glass-panel roadmap-item"
                style={{
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  borderRadius: "10px",
                  cursor: m.id === "phase1" ? "default" : "pointer",
                  background: isCompleted ? "rgba(16, 185, 129, 0.04)" : "rgba(255,255,255,0.01)",
                  borderColor: isCompleted ? "rgba(16, 185, 129, 0.3)" : "var(--card-border)"
                }}
              >
                {/* Custom Check Bullet */}
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: isCompleted ? "none" : "2px solid var(--text-secondary)",
                    background: isCompleted ? "#10b981" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: isCompleted ? "0 0 10px rgba(16, 185, 129, 0.4)" : "none",
                    transition: "all 0.3s ease"
                  }}
                >
                  {isCompleted && <Check size={12} color="white" strokeWidth={3} />}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span 
                      style={{ 
                        fontSize: "0.65rem", 
                        fontWeight: 800, 
                        color: isCompleted ? "#10b981" : "var(--text-secondary)",
                        border: `1px solid ${isCompleted ? "#10b981" : "var(--card-border)"}`,
                        padding: "2px 6px",
                        borderRadius: "4px"
                      }}
                    >
                      {m.tag}
                    </span>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: isCompleted ? "var(--text-primary)" : "var(--text-secondary)" }}>
                      {m.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.3", marginTop: "2px" }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Capture Form Block */}
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          {!formSubmitted ? (
            <form 
              onSubmit={handleSubmit}
              className="glass-panel scale-in"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: 1,
                borderColor: "rgba(168, 85, 247, 0.2)"
              }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 800, letterSpacing: "0.5px" }}>
                KLAIM AKSES DEMO PREMIUM
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                Masukkan data kontak Anda untuk memperoleh sesi demo privat penjelajahan Neuralis OS.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)" }}>Email Perusahaan</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="select-input"
                  style={{ padding: "8px 12px", fontSize: "0.85rem", background: "rgba(255,255,255,0.02)" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)" }}>Pesan Tambahan</label>
                <textarea
                  placeholder="Kebutuhan orkestrasi internal bisnis Anda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="select-input"
                  style={{ 
                    padding: "8px 12px", 
                    fontSize: "0.85rem", 
                    background: "rgba(255,255,255,0.02)",
                    resize: "none",
                    minHeight: "60px",
                    flex: 1
                  }}
                />
              </div>

              <button
                type="submit"
                className="pulsating-glow"
                style={{
                  padding: "10px 16px",
                  background: "var(--accent-gradient)",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                  marginTop: "5px"
                }}
              >
                <Send size={14} />
                <span>Kirim Permintaan Demo</span>
              </button>
            </form>
          ) : (
            <div 
              className="glass-panel scale-in"
              style={{
                padding: "30px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                flex: 1,
                borderColor: "#10b981",
                background: "rgba(16, 185, 129, 0.03)",
                textAlign: "center"
              }}
            >
              <div 
                style={{ 
                  width: "50px", 
                  height: "50px", 
                  borderRadius: "50%", 
                  background: "rgba(16,185,129,0.1)", 
                  border: "2px solid #10b981",
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  boxShadow: "0 0 15px rgba(16,185,129,0.25)"
                }}
              >
                <ShieldCheck size={28} color="#10b981" />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#10b981" }}>PERMINTAAN DEMO DIKIRIM!</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "6px", lineHeight: "1.4" }}>
                  Terima kasih! Kami akan segera menghubungi <strong style={{ color: "var(--text-primary)" }}>{email}</strong> dalam waktu 24 jam untuk menjadwalkan demo privat Neuralis OS.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
