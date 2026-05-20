"use client";

import { useState, useEffect, useRef } from "react";
import SlideFrame from "./components/SlideFrame";
import Controls from "./components/Controls";
import Sidebar from "./components/Sidebar";

// 8 Premium Slide Imports
import Slide1Title from "./components/slides/Slide1Title";
import Slide2Problem from "./components/slides/Slide2Problem";
import Slide3Solution from "./components/slides/Slide3Solution";
import Slide3Architecture from "./components/slides/Slide3Architecture"; // Slide 4
import Slide5Market from "./components/slides/Slide5Market";
import Slide6Business from "./components/slides/Slide6Business";
import Slide7Team from "./components/slides/Slide7Team";
import Slide8Roadmap from "./components/slides/Slide8Roadmap";

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

  const totalSlides = 8;
  const containerRef = useRef<HTMLDivElement>(null);

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
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
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

  // 7. Render Current Slide
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0:
        return <Slide1Title onStartPresenting={() => setCurrentSlide(1)} />;
      case 1:
        return <Slide2Problem />;
      case 2:
        return <Slide3Solution />;
      case 3:
        return <Slide3Architecture />;
      case 4:
        return <Slide5Market />;
      case 5:
        return <Slide6Business />;
      case 6:
        return <Slide7Team />;
      case 7:
        return <Slide8Roadmap />;
      default:
        return <Slide1Title />;
    }
  };

  return (
    <div ref={containerRef} className="app-container">
      {/* Background visual components */}
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Main Interactive Slide Presenter Area */}
      <main className="main-content">
        <SlideFrame
          slideId={currentSlide}
          transitionType={transitionType}
          speed={speed}
        >
          {renderSlideContent()}
        </SlideFrame>

        {/* Floating Controls Overlay */}
        <Controls
          current={currentSlide}
          total={totalSlides}
          isPlaying={isPlaying}
          onNext={handleNext}
          onPrev={handlePrev}
          onTogglePlay={() => setIsPlaying((prev) => !prev)}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
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
        onSetTheme={setTheme}
      />
    </div>
  );
}
