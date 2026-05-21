"use client";

import { ShieldCheck, ShieldAlert, Scale, BarChart2 } from "lucide-react";

export default function Slide6Distribution() {
  const hoaxCount = 14481;
  const validCount = 12529;
  const total = hoaxCount + validCount;
  const hoaxPct = ((hoaxCount / total) * 100).toFixed(1);
  const validPct = ((validCount / total) * 100).toFixed(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "20px 40px" }}>
      {/* Header */}
      <div className="fade-in-up">
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
        className="fade-in-up anim-delay-1" 
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
            padding: "24px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            gap: "20px",
            background: "rgba(10, 8, 24, 0.4)",
            borderColor: "var(--card-border)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid var(--card-border)", paddingBottom: "10px" }}>
            <Scale size={18} color="var(--accent-color)" />
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Visualisasi Proporsi Kelas (N = 27.010)
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Hoax Class */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 700, color: "#ef4444" }}>
                  <ShieldAlert size={16} /> Kelas Hoax (Label 1)
                </span>
                <strong style={{ fontSize: "1rem", color: "var(--text-primary)" }}>
                  {hoaxCount.toLocaleString("id-ID")} dokumen ({hoaxPct}%)
                </strong>
              </div>
              <div style={{ width: "100%", height: "14px", background: "rgba(255,255,255,0.03)", borderRadius: "7px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ width: `${hoaxPct}%`, height: "100%", background: "linear-gradient(90deg, #ef4444 0%, #f97316 100%)", borderRadius: "7px", boxShadow: "0 0 10px rgba(239, 68, 68, 0.3)", position: "relative", overflow: "hidden" }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    animation: "shimmer-bar 2.5s infinite"
                  }} />
                </div>
              </div>
            </div>

            {/* Valid Class */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 700, color: "#10b981" }}>
                  <ShieldCheck size={16} /> Kelas Valid (Label 0)
                </span>
                <strong style={{ fontSize: "1rem", color: "var(--text-primary)" }}>
                  {validCount.toLocaleString("id-ID")} dokumen ({validPct}%)
                </strong>
              </div>
              <div style={{ width: "100%", height: "14px", background: "rgba(255,255,255,0.03)", borderRadius: "7px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ width: `${validPct}%`, height: "100%", background: "linear-gradient(90deg, #10b981 0%, #34d399 100%)", borderRadius: "7px", boxShadow: "0 0 10px rgba(16, 185, 129, 0.3)", position: "relative", overflow: "hidden" }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    animation: "shimmer-bar 2.5s infinite"
                  }} />
                </div>
              </div>
            </div>

          </div>

          <div style={{ display: "flex", gap: "8px", background: "rgba(255,255,255,0.02)", padding: "10px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
              Rasio Keseimbangan Kelas: <strong style={{ color: "var(--text-primary)" }}>53.6% : 46.4%</strong>. Ini diklasifikasikan sebagai *Highly Balanced Dataset*, sangat ideal untuk pelatihan Naive Bayes.
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
