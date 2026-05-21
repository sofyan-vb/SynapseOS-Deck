"use client";

import { useState } from "react";
import { Database, GitMerge, CheckSquare, Settings, Split, Hash, BarChart3, ChevronRight } from "lucide-react";

export default function Slide4Methodology() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Database size={20} />,
      title: "Data Acquisition",
      desc: "Pengumpulan 8 file CSV dataset berita dari platform digital publik dan komunitas cek fakta.",
      detail: "Mengintegrasikan berbagai sumber seperti Kaggle, TurnBackHoax, dan Whatsapp chat dump."
    },
    {
      icon: <GitMerge size={20} />,
      title: "Integration & Cleaning",
      desc: "Penggabungan dataset dan eliminasi baris duplikat serta nilai kosong (null).",
      detail: "Menghapus duplikasi untuk mencegah kebocoran informasi (*data leakage*) antara data latih & uji."
    },
    {
      icon: <CheckSquare size={20} />,
      title: "Label Standardization",
      desc: "Penyeragaman label target klasifikasi menjadi format biner terpadu.",
      detail: "Standarisasi label ke format biner: 0 untuk berita Valid, 1 untuk berita Hoax."
    },
    {
      icon: <Settings size={20} />,
      title: "Text Preprocessing",
      desc: "Pembersihan dokumen teks mentah melalui 5 tahap NLP pipeline.",
      detail: "Tahapan meliputi Case Folding, Regex Cleaning, Punctuation Removal, Tokenization, & Stopword Removal."
    },
    {
      icon: <Split size={20} />,
      title: "Data Splitting",
      desc: "Pembagian proporsi dataset ke dalam data pelatihan dan pengujian.",
      detail: "Rasio pembagian data diatur sebesar 80% untuk data pelatihan (X_train) dan 20% untuk pengujian (X_test)."
    },
    {
      icon: <Hash size={20} />,
      title: "Feature Extraction",
      desc: "Pembobotan kata menggunakan metode statistika TF-IDF Vectorizer.",
      detail: "Term Frequency - Inverse Document Frequency mengonversi token kata menjadi matriks bobot numerik."
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Training & Evaluation",
      desc: "Pelatihan algoritma Multinomial Naive Bayes dan validasi metrik.",
      detail: "Mengukur performa model akhir dengan parameter Akurasi, Precision, Recall, F1-Score, dan Confusion Matrix."
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", padding: "0px 20px 8px 20px" }}>
      {/* Header */}
      <div className="fade-in-blur">
        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-color)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          BAB II: METODOLOGI PENELITIAN
        </span>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "4px" }}>
          Metodologi Penelitian: <span className="text-gradient" style={{ background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Diagram Alir Alur Sistem</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
          Alur pipa pengolahan data sistematis dari pengumpulan dataset hingga pengujian akhir model.
        </p>
      </div>

      {/* Interactive Process Flowbar */}
      <div 
        className="fade-in-blur anim-delay-1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.02)",
          padding: "16px 20px",
          borderRadius: "16px",
          border: "1px solid var(--card-border)",
          marginTop: "10px",
          overflowX: "auto",
          overflowY: "hidden"
        }}
      >
        {steps.map((step, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", flex: idx === steps.length - 1 ? "none" : 1 }}>
            {/* Step node */}
            <button
              onClick={() => setActiveStep(idx)}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: activeStep === idx 
                  ? "var(--accent-gradient)" 
                  : "rgba(255, 255, 255, 0.04)",
                border: activeStep === idx 
                  ? "none" 
                  : "1px solid var(--card-border)",
                color: activeStep === idx ? "white" : "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease",
                boxShadow: activeStep === idx ? "0 0 15px var(--accent-color)" : "none"
              }}
              title={step.title}
            >
              {step.icon}
              {/* Step number badge */}
              <span 
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  right: "-6px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "var(--bg-color)",
                  border: `1.5px solid ${activeStep === idx ? "var(--accent-color)" : "var(--card-border)"}`,
                  color: "var(--text-primary)",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {idx + 1}
              </span>
            </button>

            {/* Connecting Chevron Arrow */}
            {idx < steps.length - 1 && (
              <div style={{ display: "flex", justifyContent: "center", flex: 1, minWidth: "15px" }}>
                <ChevronRight 
                  size={16} 
                  color={idx < activeStep ? "var(--accent-color)" : "rgba(255, 255, 255, 0.15)"} 
                  style={{ animation: idx === activeStep ? "pulse 1.5s infinite" : "none" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dynamic Detail Card for selected step */}
      <div 
        className="glass-panel scale-in anim-delay-2"
        style={{
          flex: 1,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          background: "rgba(10, 8, 24, 0.4)",
          borderColor: "rgba(168, 85, 247, 0.2)",
          boxShadow: "0 8px 32px 0 rgba(168, 85, 247, 0.05)",
          justifyContent: "center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            background: "rgba(168, 85, 247, 0.15)",
            color: "var(--accent-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {steps[activeStep].icon}
          </div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>
            Langkah {activeStep + 1}: <span className="text-gradient" style={{ background: "var(--accent-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{steps[activeStep].title}</span>
          </h3>
        </div>

        <p style={{ fontSize: "1.05rem", color: "var(--text-primary)", fontWeight: 500, lineHeight: "1.6" }}>
          {steps[activeStep].desc}
        </p>

        <div 
          style={{ 
            background: "rgba(255, 255, 255, 0.02)", 
            padding: "16px", 
            borderRadius: "10px", 
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderLeft: "4px solid var(--accent-secondary)",
            marginTop: "6px"
          }}
        >
          <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--accent-secondary)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>
            Detail Proses & Teknikal
          </span>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            {steps[activeStep].detail}
          </p>
        </div>
      </div>
    </div>
  );
}
