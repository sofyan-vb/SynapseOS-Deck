"use client";

import { useState, useEffect, useRef } from "react";
import SlideFrame from "./components/SlideFrame";
import Sidebar from "./components/Sidebar";
import { 
  Sun, 
  Moon, 
  Battery, 
  BatteryCharging, 
  Wifi, 
  WifiOff, 
  Search, 
  X, 
  Cpu,
  SquarePen,
  Maximize,
  Minimize,
  Menu
} from "lucide-react";

// 11 Academic Slide Imports
import Slide1Title from "./components/slides/Slide1Title";
import Slide2Problem from "./components/slides/Slide2Problem";
import Slide3Solution from "./components/slides/Slide3Solution";
import Slide4Methodology from "./components/slides/Slide4Methodology";
import Slide5Dataset from "./components/slides/Slide5Dataset";
import Slide6Distribution from "./components/slides/Slide6Distribution";
import Slide7Preprocessing from "./components/slides/Slide7Preprocessing";
import Slide8Features from "./components/slides/Slide8Features";
import Slide9Evaluation from "./components/slides/Slide9Evaluation";
import Slide10Matrix from "./components/slides/Slide10Matrix";
import Slide11Conclusion from "./components/slides/Slide11Conclusion";

export default function PresentationPage() {
  // 1. App State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionType, setTransitionType] = useState("cube");
  const [speed, setSpeed] = useState(600);
  const [autoplayInterval, setAutoplayInterval] = useState(5000);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("cyber");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // OS Status Bar States
  const [timeString, setTimeString] = useState("");
  const [wifiStatus, setWifiStatus] = useState<"strong" | "weak" | "offline">("strong");
  const [batteryLevel, setBatteryLevel] = useState(88);
  const [isCharging, setIsCharging] = useState(false);
  const [isPowerSaving, setIsPowerSaving] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const totalSlides = 11;
  const containerRef = useRef<HTMLDivElement>(null);

  const slideTitles = [
    "1. Judul & Identitas Proyek",
    "2. Latar Belakang Masalah",
    "3. Rumusan, Batasan & Tujuan",
    "4. Metodologi (Diagram Alir)",
    "5. Laporan Dataset & Sumber Data",
    "6. Distribusi Kelas Dataset",
    "7. Pra-pemrosesan Teks (NLP)",
    "8. Ekstraksi Fitur & Data Split",
    "9. Hasil Pengujian & Akurasi",
    "10. Analisis Confusion Matrix",
    "11. Keunggulan & Kesimpulan"
  ];

  // Clock tick
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const cycleBattery = () => {
    if (batteryLevel === 88) {
      setBatteryLevel(45);
      setIsCharging(false);
      setIsPowerSaving(false);
    } else if (batteryLevel === 45) {
      setBatteryLevel(15);
      setIsPowerSaving(true);
      setIsCharging(false);
    } else if (batteryLevel === 15) {
      setBatteryLevel(100);
      setIsCharging(true);
      setIsPowerSaving(false);
    } else {
      setBatteryLevel(88);
      setIsCharging(false);
      setIsPowerSaving(false);
    }
  };

  const cycleWifi = () => {
    if (wifiStatus === "strong") {
      setWifiStatus("weak");
    } else if (wifiStatus === "weak") {
      setWifiStatus("offline");
    } else {
      setWifiStatus("strong");
    }
  };

  const handleSelectSearchSlide = (idx: number) => {
    setCurrentSlide(idx);
    setShowSearch(false);
    setSearchQuery("");
  };

  // Enable global content editable text on slides when isEditMode is true
  useEffect(() => {
    const slideEl = containerRef.current?.querySelector(".slide-viewport");
    if (!slideEl) return;

    const editableTags = "h1, h2, h3, h4, p, span, td, th, li, strong";
    const textEls = slideEl.querySelectorAll(editableTags);

    textEls.forEach((el) => {
      const htmlEl = el as HTMLElement;
      
      // Skip editing elements inside interactive inputs, controls, forms, buttons
      if (
        htmlEl.closest("button") || 
        htmlEl.closest("input") || 
        htmlEl.closest("textarea") || 
        htmlEl.closest(".top-status-bar") ||
        htmlEl.closest(".sidebar-container")
      ) {
        return;
      }

      if (isEditMode) {
        htmlEl.setAttribute("contenteditable", "true");
        htmlEl.setAttribute("suppresscontenteditablewarning", "true");
        htmlEl.style.transition = "outline 0.2s ease, background-color 0.2s ease";
        htmlEl.style.outline = "1.5px dashed rgba(6, 182, 212, 0.45)";
        htmlEl.style.outlineOffset = "2px";
        htmlEl.style.borderRadius = "4px";
        htmlEl.style.cursor = "text";
        htmlEl.style.backgroundColor = "rgba(6, 182, 212, 0.05)";
      } else {
        htmlEl.removeAttribute("contenteditable");
        htmlEl.removeAttribute("suppresscontenteditablewarning");
        htmlEl.style.outline = "";
        htmlEl.style.outlineOffset = "";
        htmlEl.style.borderRadius = "";
        htmlEl.style.cursor = "";
        htmlEl.style.backgroundColor = "";
      }
    });
  }, [isEditMode, currentSlide]);

  // 2. Theme Propagation
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // 3. Autoplay Timer Loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, autoplayInterval);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, autoplayInterval]);

  // 4. Slide Navigation Handlers
  const handleNext = () => {
    console.log("handleNext called. Current slide:", currentSlide);
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => {
        console.log("Setting current slide to:", prev + 1);
        return prev + 1;
      });
    }
  };

  const handlePrev = () => {
    console.log("handlePrev called. Current slide:", currentSlide);
    if (currentSlide > 0) {
      setCurrentSlide((prev) => {
        console.log("Setting current slide to:", prev - 1);
        return prev - 1;
      });
    }
  };

  // 5. Fullscreen Handler
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.error("Error enabling fullscreen: ", err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false));
    }
  };

  // Keyboard and Window Listeners for Fullscreen Changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // 6. Keyboard Shortcuts Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events when the user is typing inside Slide 8 consultation form
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          handleNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handlePrev();
          break;
        case " ": // Spacebar
          e.preventDefault();
          setIsPlaying((prev) => !prev);
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "m":
        case "M":
          e.preventDefault();
          setIsSidebarOpen((prev) => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0:
        return <Slide1Title onStartPresenting={() => setCurrentSlide(1)} />;
      case 1:
        return <Slide2Problem />;
      case 2:
        return <Slide3Solution />;
      case 3:
        return <Slide4Methodology />;
      case 4:
        return <Slide5Dataset />;
      case 5:
        return <Slide6Distribution />;
      case 6:
        return <Slide7Preprocessing />;
      case 7:
        return <Slide8Features />;
      case 8:
        return <Slide9Evaluation />;
      case 9:
        return <Slide10Matrix />;
      case 10:
        return <Slide11Conclusion />;
      default:
        return <Slide1Title />;
    }
  };

  return (
    <div ref={containerRef} className="app-container">
      {/* Power saving retro CRT overlay */}
      {isPowerSaving && (
        <div 
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(168, 85, 247, 0.05), rgba(6, 182, 212, 0.02), rgba(16, 185, 129, 0.05))",
            backgroundSize: "100% 4px, 6px 100%",
            pointerEvents: "none",
            zIndex: 9999,
            opacity: 0.85,
          }}
        />
      )}

      {/* Background visual components */}
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Main Interactive Slide Presenter Area */}
      <main className="main-content" style={{ paddingTop: "60px" }}>
        {/* OS Top Status Bar */}
        <header 
          className="top-status-bar" 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50px",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            background: "var(--card-bg)",
            borderBottom: "1px solid var(--card-border)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.15)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)"
          }}
        >
          {/* Left: Brand/Logo & Slide Category */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Cpu size={16} color="var(--accent-color)" />
            <span style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "1px", color: "var(--text-primary)" }}>
              NEURALIS <span style={{ color: "var(--accent-secondary)" }}>OS</span>
            </span>
            <div style={{ width: "1px", height: "14px", background: "var(--card-border)" }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase" }}>
              {slideTitles[currentSlide] || "Slide"}
            </span>
          </div>

          {/* Center: Search Slide dropdown */}
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <button
              onClick={() => setShowSearch(!showSearch)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                color: "var(--text-secondary)",
                transition: "all 0.2s ease"
              }}
              className="nav-btn"
              title="Cari Slide/Materi"
            >
              <Search size={16} color="var(--text-secondary)" />
            </button>

            {showSearch && (
              <div 
                className="glass-panel"
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "280px",
                  background: "var(--bg-color)",
                  borderColor: "var(--accent-color)",
                  borderRadius: "10px",
                  padding: "8px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(168,85,247,0.2)",
                  zIndex: 101,
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", borderBottom: "1px solid var(--card-border)", paddingBottom: "6px", marginBottom: "4px" }}>
                  <Search size={14} color="var(--accent-color)" />
                  <input
                    type="text"
                    placeholder="Ketik judul slide..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "var(--text-primary)",
                      fontSize: "0.8rem",
                      flex: 1
                    }}
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setShowSearch(false);
                      setSearchQuery("");
                    }}
                    style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}
                  >
                    <X size={14} />
                  </button>
                </div>

                <div style={{ maxHeight: "150px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "2px" }}>
                  {slideTitles
                    .map((title, index) => ({ title, index }))
                    .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((item) => (
                      <button
                        key={item.index}
                        onClick={() => handleSelectSearchSlide(item.index)}
                        style={{
                          background: item.index === currentSlide ? "rgba(168,85,247,0.15)" : "transparent",
                          border: "none",
                          color: item.index === currentSlide ? "var(--accent-color)" : "var(--text-primary)",
                          padding: "6px 8px",
                          textAlign: "left",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          borderRadius: "4px",
                          cursor: "pointer",
                          width: "100%",
                          transition: "all 0.2s"
                        }}
                        className="dir-item"
                      >
                        {item.title}
                      </button>
                    ))}
                  {slideTitles.filter((title) => title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                    <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", textAlign: "center", padding: "6px" }}>
                      Slide tidak ditemukan
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right: Theme, Wifi, Battery, Clock */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Mode Edit Teks Toggle */}
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              style={{
                background: isEditMode ? "rgba(6, 182, 212, 0.25)" : "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                color: isEditMode ? "var(--accent-color)" : "var(--text-primary)",
                transition: "all 0.3s ease",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                justifyContent: "center"
              }}
              className="nav-btn"
              title={isEditMode ? "Matikan Mode Edit Teks" : "Aktifkan Mode Edit Teks (Bisa Edit Teks Slide)"}
            >
              <SquarePen size={16} color={isEditMode ? "var(--accent-color)" : "var(--text-primary)"} />
            </button>

            {/* Theme Toggle (Light/Dark) */}
            <button
              onClick={() => setTheme((prev) => (prev === "solar" ? "cyber" : "solar"))}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                color: "var(--text-primary)"
              }}
              className="nav-btn"
              title="Ganti Tema Gelap/Terang"
            >
              {theme === "solar" ? (
                <Moon size={16} color="var(--accent-color)" />
              ) : (
                <Sun size={16} color="#f59e0b" />
              )}
            </button>

            {/* Wifi Network status */}
            <button
              onClick={cycleWifi}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                color: wifiStatus === "offline" ? "#ef4444" : "var(--text-primary)"
              }}
              className="nav-btn"
              title={`Jaringan: ${wifiStatus === "strong" ? "Sangat Kuat" : wifiStatus === "weak" ? "Lemah" : "Terputus"}`}
            >
              {wifiStatus === "strong" ? (
                <Wifi size={16} color="var(--accent-secondary)" />
              ) : wifiStatus === "weak" ? (
                <Wifi size={16} style={{ opacity: 0.5 }} />
              ) : (
                <WifiOff size={16} />
              )}
            </button>

            {/* Battery status */}
            <button
              onClick={cycleBattery}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "0 10px",
                color: batteryLevel <= 15 ? "#ef4444" : "var(--text-primary)",
                height: "32px",
                borderRadius: "16px",
                transition: "all 0.3s ease"
              }}
              className="nav-btn-extended"
              title={`Baterai: ${batteryLevel}% ${isCharging ? "(Mengisi Daya)" : ""} ${isPowerSaving ? "(Mode Hemat Daya)" : ""}`}
            >
              {isCharging ? (
                <BatteryCharging size={16} color="#10b981" />
              ) : (
                <Battery size={16} color={batteryLevel <= 15 ? "#ef4444" : "var(--text-primary)"} />
              )}
              <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>{batteryLevel}%</span>
            </button>

            {/* Fullscreen Trigger */}
            <button
              onClick={toggleFullscreen}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                color: "var(--text-primary)"
              }}
              className="nav-btn"
              title={isFullscreen ? "Keluar Layar Penuh (Esc)" : "Layar Penuh (F)"}
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>

            {/* Open Sidebar Menu */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                color: "var(--accent-color)"
              }}
              className="nav-btn"
              title="Buka Menu Panel Kontrol (M)"
            >
              <Menu size={16} />
            </button>

            <div style={{ width: "1px", height: "14px", background: "var(--card-border)" }} />

            {/* Live Clock Display */}
            <span style={{ fontSize: "0.8rem", fontWeight: 700, fontFamily: "monospace", minWidth: "60px", color: "var(--text-primary)" }}>
              {timeString}
            </span>
          </div>
        </header>

        {/* Slide Number Indicator in the Corner */}
        <div 
          style={{
            position: "absolute",
            top: "62px",
            right: "24px",
            zIndex: 90,
            background: "rgba(10, 8, 20, 0.45)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "4px 14px",
            borderRadius: "12px",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "var(--text-secondary)",
            letterSpacing: "1px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.25)"
          }}
        >
          {currentSlide + 1} / {totalSlides}
        </div>

        <SlideFrame
          slideId={currentSlide}
          transitionType={transitionType}
          speed={speed}
        >
          {renderSlideContent()}
        </SlideFrame>

        {isEditMode && (
          <div 
            className="glass-panel"
            style={{
              position: "absolute",
              bottom: "85px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--card-bg)",
              borderColor: "var(--accent-color)",
              padding: "8px 18px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
              zIndex: 99,
              animation: "pulse-glow 2s infinite alternate"
            }}
          >
            <SquarePen size={14} color="var(--accent-color)" />
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-primary)" }}>
              Mode Edit Aktif: Klik pada tulisan apa saja di slide untuk mengubah teks langsung!
            </span>
          </div>
        )}


      </main>

      {/* Collapsible Panel Overlay */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={(idx) => {
          setCurrentSlide(idx);
          setIsSidebarOpen(false);
        }}
        transitionType={transitionType}
        onSetTransition={setTransitionType}
        speed={speed}
        onSetSpeed={setSpeed}
        autoplayInterval={autoplayInterval}
        onSetAutoplayInterval={setAutoplayInterval}
        theme={theme}
        onSetTheme={(t) => {
          // If in light theme, ignore changing to dark theme from sidebar menu
          if (theme !== "solar") {
            setTheme(t);
          }
        }}
      />
    </div>
  );
}
