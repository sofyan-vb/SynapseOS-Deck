"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, ShieldAlert, Scale, BarChart2 } from "lucide-react";
import AnimatedNumber from "../AnimatedNumber";

export default function Slide6Distribution() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const hoaxCount = 14481;
  const validCount = 12529;
  const total = hoaxCount + validCount;
  
  // Decimals as raw numbers to animate
  const hoaxPctVal = (hoaxCount / total) * 100;
  const validPctVal = (validCount / total) * 100;
  const hoaxPct = hoaxPctVal.toFixed(1);
  const validPct = validPctVal.toFixed(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "0px 20px 8px 20px" }}>
      {/* Header */}
      <div className="slide-in-top">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-color)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB III: ANALISIS KESEIMBANGAN DATA
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Distribusi Kelas: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Balanced Dataset</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Proporsi berimbang antara berita palsu (hoax) dan berita asli (valid) dalam korpus data final.
        </p>
      </div>

      {/* Main Content Layout */}
      <div 
        className="slide-in-top anim-delay-1" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap: "24px",
          marginTop: "10px",
          flex: 1
        }}
      >
        {/* Left Column: Visual Class Comparison Chart */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: "20px 24px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between",
            gap: "16px",
            background: "rgba(10, 8, 24, 0.45)",
            borderColor: "var(--card-border)",
            position: "relative",
            overflow: "hidden",
            height: "100%"
          }}
        >
          {/* Purple Laser Scan Sweep */}
          <div style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-color) 50%, transparent)",
            boxShadow: "0 0 8px var(--accent-color)",
            animation: "scan-vertical 3.2s linear 0.5s infinite",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 10
          }} />

          {/* Card Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid var(--card-border)", paddingBottom: "8px" }}>
            <Scale size={18} color="var(--accent-color)" />
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Visualisasi Proporsi Kelas (N = <AnimatedNumber value={27010} />)
            </span>
          </div>

          {/* Grid of Two Visual Areas: Vertical Bars & Equalizer */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "24px", alignItems: "center", flex: 1 }}>
            
            {/* Left side: Two Main Class Vertical Bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", justifyContent: "center" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Komparasi Hoax vs Valid
              </span>
              
              <div style={{ 
                display: "flex", 
                justifyContent: "space-around", 
                alignItems: "flex-end", 
                height: "180px", 
                padding: "10px 0",
                background: "rgba(0,0,0,0.15)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.02)",
                position: "relative"
              }}>
                {/* Horizontal grid lines inside chart for depth */}
                <div style={{ position: "absolute", inset: "0 10px", display: "flex", flexDirection: "column", justifyContent: "space-between", pointerEvents: "none", opacity: 0.1 }}>
                  <div style={{ borderBottom: "1px dashed var(--text-secondary)", width: "100%", height: "0" }}></div>
                  <div style={{ borderBottom: "1px dashed var(--text-secondary)", width: "100%", height: "0" }}></div>
                  <div style={{ borderBottom: "1px dashed var(--text-secondary)", width: "100%", height: "0" }}></div>
                  <div style={{ borderBottom: "1px dashed var(--text-secondary)", width: "100%", height: "0" }}></div>
                </div>

                {/* Hoax Bar */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "70px", zIndex: 1 }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#ef4444", marginBottom: "4px" }}>
                    <AnimatedNumber value={53.6} decimals={1} suffix="%" />
                  </span>
                  <div style={{ 
                    width: "32px", 
                    height: "120px", 
                    background: "rgba(255,255,255,0.03)", 
                    borderRadius: "16px", 
                    border: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "flex-end",
                    overflow: "hidden"
                  }}>
                    <div style={{ 
                      width: "100%", 
                      height: active ? "100%" : "0%", 
                      background: "linear-gradient(180deg, #ef4444 0%, #f97316 100%)", 
                      borderRadius: "16px",
                      boxShadow: "0 0 15px rgba(239, 68, 68, 0.4)",
                      transformOrigin: "bottom",
                      animation: active ? "fluctuate-bar 3s ease-in-out infinite alternate" : "none",
                      transition: "height 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative"
                    }}>
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: "15%",
                        width: "30%",
                        height: "100%",
                        background: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, transparent 100%)"
                      }} />
                    </div>
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ef4444", marginTop: "8px" }}>
                    Hoax
                  </span>
                  <span style={{ fontSize: "0.65rem", color: "var(--text-secondary)" }}>
                    <AnimatedNumber value={hoaxCount} /> doc
                  </span>
                </div>

                {/* Valid Bar */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "70px", zIndex: 1 }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#10b981", marginBottom: "4px" }}>
                    <AnimatedNumber value={46.4} decimals={1} suffix="%" />
                  </span>
                  <div style={{ 
                    width: "32px", 
                    height: "120px", 
                    background: "rgba(255,255,255,0.03)", 
                    borderRadius: "16px", 
                    border: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "flex-end",
                    overflow: "hidden"
                  }}>
                    <div style={{ 
                      width: "100%", 
                      height: active ? "100%" : "0%", 
                      background: "linear-gradient(180deg, #10b981 0%, #34d399 100%)", 
                      borderRadius: "16px",
                      boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)",
                      transformOrigin: "bottom",
                      animation: active ? "fluctuate-bar 2.5s ease-in-out infinite alternate" : "none",
                      transition: "height 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative"
                    }}>
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: "15%",
                        width: "30%",
                        height: "100%",
                        background: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, transparent 100%)"
                      }} />
                    </div>
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#10b981", marginTop: "8px" }}>
                    Valid
                  </span>
                  <span style={{ fontSize: "0.65rem", color: "var(--text-secondary)" }}>
                    <AnimatedNumber value={validCount} /> doc
                  </span>
                </div>

              </div>

            </div>

            {/* Right side: Real-time Multi-Source Equalizer */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", height: "100%", justifyContent: "center", borderLeft: "1px dashed var(--card-border)", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-color)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Corpus Stream Analyzer
                </span>
                <span style={{ fontSize: "0.65rem", color: "var(--text-secondary)" }}>
                  Fluktuasi 8 sumber data terintegrasi
                </span>
              </div>

              {/* Equalizer Container */}
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "flex-end", 
                height: "140px", 
                padding: "12px 10px",
                background: "rgba(0,0,0,0.2)",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.03)",
                gap: "5px"
              }}>
                {[
                  { name: "TurnBackHoax", pct: 48.1, val: 12995, delay: "0.1s", dur: "1.8s", color: "var(--accent-color)" },
                  { name: "Kompas.com", pct: 16.7, val: 4500, delay: "0.5s", dur: "1.4s", color: "var(--accent-secondary)" },
                  { name: "Indonesia False News", pct: 15.7, val: 4231, delay: "0.2s", dur: "2.0s", color: "var(--accent-color)" },
                  { name: "Antaranews", pct: 15.6, val: 4200, delay: "0.7s", dur: "1.6s", color: "var(--accent-secondary)" },
                  { name: "Detik.com", pct: 10.4, val: 2800, delay: "0.3s", dur: "1.9s", color: "var(--accent-color)" },
                  { name: "Gemastik Dataset", pct: 2.2, val: 600, delay: "0.9s", dur: "1.5s", color: "var(--accent-secondary)" },
                  { name: "CekFakta", pct: 1.0, val: 266, delay: "0.4s", dur: "2.2s", color: "var(--accent-color)" },
                  { name: "WhatsApp Chat Dump", pct: 0.2, val: 62, delay: "0.6s", dur: "1.7s", color: "var(--accent-secondary)" }
                ].map((src, i) => (
                  <div 
                    key={i} 
                    title={`${src.name}: ${src.pct}% (${src.val} baris)`}
                    style={{ 
                      flex: 1,
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center", 
                      height: "100%", 
                      justifyContent: "flex-end",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ 
                      width: "6px", 
                      background: `linear-gradient(180deg, ${src.color} 0%, rgba(255,255,255,0.05) 100%)`, 
                      borderRadius: "3px",
                      height: `${Math.max(src.pct * 1.8, 8)}%`,
                      boxShadow: `0 0 8px ${src.color}80`,
                      animation: active ? `bounce-equalizer ${src.dur} ease-in-out ${src.delay} infinite alternate` : "none",
                      transition: "height 1s ease",
                      position: "relative"
                    }} />
                    <span style={{ fontSize: "0.55rem", color: "var(--text-secondary)", marginTop: "6px", fontWeight: "bold" }}>
                      {`S${i + 1}`}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mini Legend */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", fontSize: "0.6rem", color: "var(--text-secondary)" }}>
                <span><strong>S1-S8:</strong> Sumber dataset terintegrasi</span>
              </div>
            </div>

          </div>

          {/* Footer Ratio */}
          <div style={{ display: "flex", gap: "8px", background: "rgba(255,255,255,0.02)", padding: "8px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
              Rasio Keseimbangan Kelas: <strong style={{ color: "var(--text-primary)" }}><AnimatedNumber value={53.6} decimals={1} suffix="%" /> : <AnimatedNumber value={46.4} decimals={1} suffix="%" /></strong>. Ini diklasifikasikan sebagai *Highly Balanced Dataset*, sangat ideal untuk pelatihan Naive Bayes.
            </span>
          </div>

        </div>

        {/* Right Column: Urgensi Keseimbangan */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "10px" }}>
            <BarChart2 size={18} color="var(--accent-color)" />
            <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Urgensi Keseimbangan Data
            </h3>
          </div>

          {[
            {
              title: "Mencegah Bias Prediksi",
              desc: "Mencegah model mengalami kecenderungan (*bias*) prediksi pada satu kelas mayoritas tertentu, sehingga metrik akurasi murni mencerminkan kemampuan deteksi riil."
            },
            {
              title: "Meminimalkan Overfitting",
              desc: "Mengurangi risiko model menghafal pola data dominan (*overfitting*) selama proses *backpropagation* atau optimasi probabilitas kelas."
            },
            {
              title: "Menjamin Stabilitas Performa",
              desc: "Menjamin kestabilan, keandalan, dan objektivitas performa klasifikasi algoritma saat berhadapan dengan data artikel berita baru yang tak dikenal."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ 
                padding: "14px 18px", 
                display: "flex", 
                flexDirection: "column", 
                gap: "4px",
                borderColor: "rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.01)"
              }}
            >
              <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ 
                  width: "20px", 
                  height: "20px", 
                  borderRadius: "50%", 
                  background: "var(--accent-gradient)", 
                  fontSize: "0.7rem", 
                  color: "white", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  {idx + 1}
                </span>
                {item.title}
              </h4>
              <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: "1.4", paddingLeft: "28px" }}>
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
