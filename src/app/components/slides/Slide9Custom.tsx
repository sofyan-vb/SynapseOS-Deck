"use client";

import { useState, useEffect } from "react";
import { Sparkles, Edit3, Type, CheckCircle, Palette } from "lucide-react";

export default function Slide9Custom() {
  const [isClient, setIsClient] = useState(false);
  const [slideTitle, setSlideTitle] = useState("Materi Presentasi Kustom");
  const [titleColor, setTitleColor] = useState("#06b6d4"); // default cyan
  const [slideSubtitle, setSlideSubtitle] = useState("Gunakan slide ini untuk mempresentasikan topik tambahan Anda secara interaktif.");
  
  // Custom points
  const [point1, setPoint1] = useState("Poin Utama Pertama: Klik langsung pada teks ini untuk mengubah isi materi presentasi Anda.");
  const [point2, setPoint2] = useState("Poin Pendukung Kedua: Seluruh perubahan yang Anda lakukan di sini akan disimpan otomatis.");
  const [point3, setPoint3] = useState("Poin Kesimpulan Ketiga: Tersedia juga pemilih warna di bagian atas untuk mempercantik judul slide.");

  useEffect(() => {
    setIsClient(true);
    const savedTitle = localStorage.getItem("neuralis_custom_title");
    const savedColor = localStorage.getItem("neuralis_custom_color");
    const savedSubtitle = localStorage.getItem("neuralis_custom_subtitle");
    const savedP1 = localStorage.getItem("neuralis_custom_p1");
    const savedP2 = localStorage.getItem("neuralis_custom_p2");
    const savedP3 = localStorage.getItem("neuralis_custom_p3");

    if (savedTitle) setSlideTitle(savedTitle);
    if (savedColor) setTitleColor(savedColor);
    if (savedSubtitle) setSlideSubtitle(savedSubtitle);
    if (savedP1) setPoint1(savedP1);
    if (savedP2) setPoint2(savedP2);
    if (savedP3) setPoint3(savedP3);
  }, []);

  const handleTitleChange = (val: string) => {
    setSlideTitle(val);
    localStorage.setItem("neuralis_custom_title", val);
  };

  const handleColorChange = (color: string) => {
    setTitleColor(color);
    localStorage.setItem("neuralis_custom_color", color);
  };

  const handleSubtitleChange = (val: string) => {
    setSlideSubtitle(val);
    localStorage.setItem("neuralis_custom_subtitle", val);
  };

  const handleP1Change = (val: string) => {
    setPoint1(val);
    localStorage.setItem("neuralis_custom_p1", val);
  };

  const handleP2Change = (val: string) => {
    setPoint2(val);
    localStorage.setItem("neuralis_custom_p2", val);
  };

  const handleP3Change = (val: string) => {
    setPoint3(val);
    localStorage.setItem("neuralis_custom_p3", val);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px", height: "100%" }}>
      {/* Header & Controls Panel */}
      <div 
        className="glass-panel fade-in-up"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.02)",
          borderColor: "var(--card-border)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={16} color="var(--accent-color)" />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", letterSpacing: "1px", textTransform: "uppercase" }}>
            Slide Editor Interaktif (Klik teks untuk mengedit materi)
          </span>
        </div>

        {/* Color picker for slide title */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
            <Palette size={12} /> Warna Judul:
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            {[
              { hex: "#06b6d4", name: "Cyan" },
              { hex: "#a855f7", name: "Purple" },
              { hex: "#10b981", name: "Emerald" },
              { hex: "#f59e0b", name: "Amber" },
              { hex: "#ef4444", name: "Crimson" },
              { hex: "#f8fafc", name: "White" }
            ].map((c) => (
              <button
                key={c.hex}
                onClick={() => handleColorChange(c.hex)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: c.hex,
                  border: titleColor === c.hex ? "2px solid var(--text-primary)" : "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "transform 0.15s ease"
                }}
                title={c.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slide Body Content */}
      <div 
        className="fade-in-up anim-delay-1" 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "20px", 
          flex: 1, 
          justifyContent: "center",
          padding: "10px 0"
        }}
      >
        <div>
          {/* Editable Title */}
          <input
            type="text"
            value={isClient ? slideTitle : "Materi Presentasi Kustom"}
            onChange={(e) => handleTitleChange(e.target.value)}
            style={{
              fontSize: "2.4rem",
              fontWeight: 800,
              color: isClient ? titleColor : "#06b6d4",
              background: "transparent",
              border: "none",
              outline: "none",
              width: "100%",
              padding: "4px 0",
              transition: "color 0.3s ease",
              fontFamily: "var(--font-family)",
              borderBottom: "1px dashed rgba(255,255,255,0.05)"
            }}
            placeholder="Ketik Judul Slide..."
          />
          
          {/* Editable Subtitle */}
          <input
            type="text"
            value={isClient ? slideSubtitle : "Gunakan slide ini untuk mempresentasikan topik tambahan Anda secara interaktif."}
            onChange={(e) => handleSubtitleChange(e.target.value)}
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              background: "transparent",
              border: "none",
              outline: "none",
              width: "100%",
              padding: "4px 0",
              marginTop: "6px",
              fontFamily: "var(--font-family)"
            }}
            placeholder="Ketik Sub-judul Slide..."
          />
        </div>

        {/* Bullet Points container */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "10px" }}>
          {/* Point 1 */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: "16px 20px", 
              display: "flex", 
              alignItems: "center", 
              gap: "14px",
              borderColor: "rgba(255,255,255,0.02)",
              background: "rgba(255,255,255,0.01)"
            }}
          >
            <CheckCircle size={18} color="var(--accent-color)" style={{ flexShrink: 0 }} />
            <input
              type="text"
              value={isClient ? point1 : "Poin Utama Pertama"}
              onChange={(e) => handleP1Change(e.target.value)}
              style={{
                fontSize: "0.95rem",
                color: "var(--text-primary)",
                background: "transparent",
                border: "none",
                outline: "none",
                width: "100%",
                fontFamily: "var(--font-family)"
              }}
              placeholder="Edit Poin Pertama..."
            />
          </div>

          {/* Point 2 */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: "16px 20px", 
              display: "flex", 
              alignItems: "center", 
              gap: "14px",
              borderColor: "rgba(255,255,255,0.02)",
              background: "rgba(255,255,255,0.01)"
            }}
          >
            <CheckCircle size={18} color="var(--accent-secondary)" style={{ flexShrink: 0 }} />
            <input
              type="text"
              value={isClient ? point2 : "Poin Pendukung Kedua"}
              onChange={(e) => handleP2Change(e.target.value)}
              style={{
                fontSize: "0.95rem",
                color: "var(--text-primary)",
                background: "transparent",
                border: "none",
                outline: "none",
                width: "100%",
                fontFamily: "var(--font-family)"
              }}
              placeholder="Edit Poin Kedua..."
            />
          </div>

          {/* Point 3 */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: "16px 20px", 
              display: "flex", 
              alignItems: "center", 
              gap: "14px",
              borderColor: "rgba(255,255,255,0.02)",
              background: "rgba(255,255,255,0.01)"
            }}
          >
            <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0 }} />
            <input
              type="text"
              value={isClient ? point3 : "Poin Kesimpulan Ketiga"}
              onChange={(e) => handleP3Change(e.target.value)}
              style={{
                fontSize: "0.95rem",
                color: "var(--text-primary)",
                background: "transparent",
                border: "none",
                outline: "none",
                width: "100%",
                fontFamily: "var(--font-family)"
              }}
              placeholder="Edit Poin Ketiga..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
