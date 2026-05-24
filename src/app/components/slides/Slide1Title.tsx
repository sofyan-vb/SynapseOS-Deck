"use client";

import { useState, useEffect } from "react";
import { Palette, Play, ShieldAlert, Cpu, BookOpen, GraduationCap } from "lucide-react";

interface Slide1Props {
  onStartPresenting?: () => void;
}

export default function Slide1Title({ onStartPresenting }: Slide1Props) {
  const [projectTitle, setProjectTitle] = useState(
    "Klasifikasi Artikel Berita Palsu (Hoax) pada Portal Informasi Digital Menggunakan Algoritma Naive Bayes"
  );
  const [lecturer, setLecturer] = useState("Miftahul Walid, S.Kom, MT");
  const [prodi, setProdi] = useState("Teknik Informatika, Universitas Islam Madura");
  const [groupName, setGroupName] = useState("Tim Penyusun:");
  
  // Specific Color States
  const [titleColor, setTitleColor] = useState("#f8fafc"); // Default White
  const [lecturerColor, setLecturerColor] = useState("#06b6d4"); // Default Cyan
  const [prodiColor, setProdiColor] = useState("#a855f7"); // Default Purple
  const [groupColor, setGroupColor] = useState("#06b6d4"); // Default Cyan
  
  // Change separator to newline to prevent awkward word-wrap of names (e.g. Moh. Ofikurrahman)
  const [members, setMembers] = useState(
    "Sofyan Ibnu Ghazali (20241220078)\nSyamsul Arifin (20241220070)\nMoh. Ofikurrahman (20241220077)"
  );
  
  // Hover States for showing specific color pickers
  const [titleHovered, setTitleHovered] = useState(false);
  const [lecturerHovered, setLecturerHovered] = useState(false);
  const [prodiHovered, setProdiHovered] = useState(false);
  
  const [isClient, setIsClient] = useState(false);

  // Available palette colors
  const paletteColors = [
    { hex: "#06b6d4", name: "Cyan" },
    { hex: "#a855f7", name: "Purple" },
    { hex: "#10b981", name: "Emerald" },
    { hex: "#f59e0b", name: "Amber" },
    { hex: "#ef4444", name: "Crimson" },
    { hex: "#f8fafc", name: "White" }
  ];

  useEffect(() => {
    setIsClient(true);
    const savedTitle = localStorage.getItem("nb_project_title");
    const savedLecturer = localStorage.getItem("nb_lecturer");
    const savedProdi = localStorage.getItem("nb_prodi");
    const savedName = localStorage.getItem("nb_group_name");
    const savedColor = localStorage.getItem("nb_group_color");
    const savedMembers = localStorage.getItem("nb_group_members");
    
    const savedTitleColor = localStorage.getItem("nb_title_color");
    const savedLecturerColor = localStorage.getItem("nb_lecturer_color");
    const savedProdiColor = localStorage.getItem("nb_prodi_color");

    if (savedTitle) setProjectTitle(savedTitle);
    if (savedLecturer) setLecturer(savedLecturer);
    if (savedProdi) setProdi(savedProdi);
    if (savedName) setGroupName(savedName);
    if (savedColor) setGroupColor(savedColor);
    if (savedMembers) setMembers(savedMembers);
    
    if (savedTitleColor) setTitleColor(savedTitleColor);
    if (savedLecturerColor) setLecturerColor(savedLecturerColor);
    if (savedProdiColor) setProdiColor(savedProdiColor);
  }, []);

  const handleTitleChange = (val: string) => {
    setProjectTitle(val);
    localStorage.setItem("nb_project_title", val);
  };

  const handleLecturerChange = (val: string) => {
    setLecturer(val);
    localStorage.setItem("nb_lecturer", val);
  };

  const handleProdiChange = (val: string) => {
    setProdi(val);
    localStorage.setItem("nb_prodi", val);
  };

  const handleNameChange = (val: string) => {
    setGroupName(val);
    localStorage.setItem("nb_group_name", val);
  };

  const handleColorChange = (color: string) => {
    setGroupColor(color);
    localStorage.setItem("nb_group_color", color);
  };

  const handleTitleColorChange = (color: string) => {
    setTitleColor(color);
    localStorage.setItem("nb_title_color", color);
  };

  const handleLecturerColorChange = (color: string) => {
    setLecturerColor(color);
    localStorage.setItem("nb_lecturer_color", color);
  };

  const handleProdiColorChange = (color: string) => {
    setProdiColor(color);
    localStorage.setItem("nb_prodi_color", color);
  };

  const handleMembersChange = (val: string) => {
    setMembers(val);
    localStorage.setItem("nb_group_members", val);
  };

  return (
    <div className="title-container" style={{ gap: "6px", justifyContent: "flex-start", height: "100%", padding: "0px 40px 10px 40px", marginTop: "-15px" }}>
      {/* Dynamic Floating Animated Icon representing Naive Bayes / Fake News Classifier */}
      <div 
        className="fade-in-up"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "4px"
        }}
      >
        <div 
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)",
            border: "1.5px solid var(--accent-color)",
            boxShadow: "0 0 25px rgba(6, 182, 212, 0.25), inset 0 0 15px rgba(168, 85, 247, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "pulse-glow 3s ease-in-out infinite alternate"
          }}
        >
          <ShieldAlert size={40} color="var(--accent-secondary)" style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))" }} />
        </div>
      </div>

      {/* Editable Project Title */}
      <div 
        className="fade-in-up anim-delay-1" 
        onMouseEnter={() => setTitleHovered(true)}
        onMouseLeave={() => setTitleHovered(false)}
        style={{ width: "100%", maxWidth: "900px", textAlign: "center", position: "relative" }}
      >
        {/* Floating Title Color Picker */}
        <div 
          style={{
            position: "absolute",
            top: "-20px",
            right: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(10, 8, 24, 0.85)",
            border: "1px solid var(--card-border)",
            borderRadius: "20px",
            padding: "4px 12px",
            opacity: titleHovered ? 1 : 0,
            transform: titleHovered ? "translateY(0)" : "translateY(5px)",
            transition: "all 0.3s ease",
            pointerEvents: titleHovered ? "auto" : "none",
            zIndex: 10,
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
          }}
        >
          <Palette size={12} color="var(--accent-color)" />
          <span style={{ fontSize: "0.65rem", color: "var(--text-secondary)", fontWeight: 700, letterSpacing: "0.5px" }}>WARNA JUDUL:</span>
          <div style={{ display: "flex", gap: "5px" }}>
            {paletteColors.map((c) => (
              <button
                key={c.hex}
                onClick={() => handleTitleColorChange(c.hex)}
                style={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "50%",
                  background: c.hex,
                  border: titleColor === c.hex ? "1.5px solid var(--text-primary)" : "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "transform 0.15s ease"
                }}
                title={c.name}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
          </div>
        </div>

        <textarea
          value={isClient ? projectTitle : "Klasifikasi Artikel Berita Palsu (Hoax) pada Portal Informasi Digital Menggunakan Algoritma Naive Bayes"}
          onChange={(e) => handleTitleChange(e.target.value)}
          style={{
            background: "transparent",
            border: "none",
            color: isClient && titleColor !== "#f8fafc" ? titleColor : "var(--text-primary)",
            fontSize: "2.8rem",
            fontWeight: 800,
            lineHeight: 1.2,
            textAlign: "center",
            outline: "none",
            resize: "none",
            width: "100%",
            height: "170px",
            overflow: "hidden",
            fontFamily: "var(--font-family)",
            borderBottom: "1px dashed rgba(255, 255, 255, 0.1)",
            paddingBottom: "8px",
            transition: "color 0.3s ease"
          }}
          placeholder="Ketik Judul Proyek..."
        />
      </div>

      {/* Sub-details (Lecturer, Prodi) */}
      <div 
        className="fade-in-up anim-delay-2" 
        style={{ 
          display: "flex", 
          gap: "20px", 
          justifyContent: "center", 
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "10px",
          width: "100%"
        }}
      >
        {/* Lecturer Card */}
        <div 
          className="glass-panel"
          onMouseEnter={() => setLecturerHovered(true)}
          onMouseLeave={() => setLecturerHovered(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(255,255,255,0.02)",
            position: "relative",
            transition: "all 0.3s ease"
          }}
        >
          <BookOpen size={15} color="var(--accent-color)" />
          <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 500 }}>
            Dosen Pengampu: 
          </span>
          <input
            type="text"
            value={isClient ? lecturer : "Miftahul Walid, S.Kom, MT"}
            onChange={(e) => handleLecturerChange(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              color: isClient ? lecturerColor : "var(--text-primary)",
              fontWeight: 700,
              fontSize: "0.8rem",
              width: "180px",
              outline: "none",
              fontFamily: "var(--font-family)",
              transition: "color 0.3s ease"
            }}
          />

          {/* Hover Color Picker */}
          <div 
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4.5px",
              opacity: lecturerHovered ? 1 : 0,
              width: lecturerHovered ? "110px" : "0px",
              overflow: "hidden",
              transition: "all 0.4s ease",
              marginLeft: lecturerHovered ? "8px" : "0px"
            }}
          >
            <Palette size={12} color="var(--accent-color)" style={{ marginRight: "2px", flexShrink: 0 }} />
            {paletteColors.map((c) => (
              <button
                key={c.hex}
                onClick={() => handleLecturerColorChange(c.hex)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: c.hex,
                  border: lecturerColor === c.hex ? "1.5px solid var(--text-primary)" : "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "transform 0.15s ease",
                  flexShrink: 0
                }}
                title={c.name}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
          </div>
        </div>

        {/* Study Program Card */}
        <div 
          className="glass-panel"
          onMouseEnter={() => setProdiHovered(true)}
          onMouseLeave={() => setProdiHovered(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(255,255,255,0.02)",
            position: "relative",
            transition: "all 0.3s ease"
          }}
        >
          <GraduationCap size={16} color="var(--accent-secondary)" />
          <input
            type="text"
            value={isClient ? prodi : "Teknik Informatika, Universitas Islam Madura"}
            onChange={(e) => handleProdiChange(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              color: isClient ? prodiColor : "var(--text-secondary)",
              fontWeight: 600,
              fontSize: "0.8rem",
              width: "350px",
              outline: "none",
              fontFamily: "var(--font-family)",
              transition: "color 0.3s ease"
            }}
          />

          {/* Hover Color Picker */}
          <div 
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4.5px",
              opacity: prodiHovered ? 1 : 0,
              width: prodiHovered ? "110px" : "0px",
              overflow: "hidden",
              transition: "all 0.4s ease",
              marginLeft: prodiHovered ? "8px" : "0px"
            }}
          >
            <Palette size={12} color="var(--accent-secondary)" style={{ marginRight: "2px", flexShrink: 0 }} />
            {paletteColors.map((c) => (
              <button
                key={c.hex}
                onClick={() => handleProdiColorChange(c.hex)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: c.hex,
                  border: prodiColor === c.hex ? "1.5px solid var(--text-primary)" : "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "transform 0.15s ease",
                  flexShrink: 0
                }}
                title={c.name}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Presenters Section */}
      <div 
        className="glass-panel fade-in-up anim-delay-3 presenters-section"
        style={{
          padding: "16px 24px",
          borderRadius: "16px",
          marginTop: "20px",
          maxWidth: "750px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          borderColor: "rgba(6, 182, 212, 0.15)",
          background: "rgba(10, 8, 24, 0.45)",
          boxShadow: "0 8px 32px 0 rgba(6, 182, 212, 0.05)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Palette size={14} color="var(--text-secondary)" style={{ flexShrink: 0 }} />
            <input
              type="text"
              value={isClient ? groupName : "Tim Penyusun:"}
              onChange={(e) => handleNameChange(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-secondary)",
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "1.5px",
                outline: "none",
                textTransform: "uppercase",
                width: "150px",
                fontFamily: "var(--font-family)"
              }}
            />
          </div>

          {/* Color Picker dots */}
          <div style={{ display: "flex", gap: "6px" }}>
            {paletteColors.map((c) => (
              <button
                key={c.hex}
                onClick={() => handleColorChange(c.hex)}
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: c.hex,
                  border: groupColor === c.hex ? "2px solid var(--text-primary)" : "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "transform 0.15s ease"
                }}
                title={c.name}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
          </div>
        </div>

        {/* Editable Members Input - Changed to newline support and 85px height to completely fix wrap of Moh. Ofikurrahman */}
        <textarea
          value={isClient ? members : "Sofyan Ibnu Ghazali (20241220078)\nSyamsul Arifin (20241220070)\nMoh. Ofikurrahman (20241220077)"}
          onChange={(e) => handleMembersChange(e.target.value)}
          style={{
            background: "transparent",
            border: "none",
            color: isClient ? groupColor : "#06b6d4",
            fontSize: "0.95rem",
            fontWeight: 600,
            lineHeight: "1.55",
            outline: "none",
            resize: "none",
            width: "100%",
            height: "85px",
            fontFamily: "monospace",
            textAlign: "center",
            whiteSpace: "pre-wrap",
            overflow: "hidden",
            transition: "color 0.3s ease"
          }}
          placeholder="Ketik Nama Anggota Kelompok..."
        />
      </div>

      {onStartPresenting && (
        <button
          onClick={onStartPresenting}
          className="fade-in-up anim-delay-4 pulsating-glow"
          style={{
            marginTop: "15px",
            padding: "12px 30px",
            background: "linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)",
            border: "none",
            borderRadius: "30px",
            color: "white",
            fontSize: "0.9rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 0 15px rgba(6, 182, 212, 0.4)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 25px rgba(6, 182, 212, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(6, 182, 212, 0.4)";
          }}
        >
          <Play size={15} fill="white" />
          <span>Mulai Presentasi</span>
        </button>
      )}
    </div>
  );
}
