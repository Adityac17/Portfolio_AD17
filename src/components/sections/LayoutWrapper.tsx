'use client';

import React, { useState, useEffect } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const RED = "#E21B22";
  const BORDER = "#2a2a2a";
  
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Flight telemetry: Monitor window scroll height to reveal the "Back to Top" throttle
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* 🏁 FIXED HUD NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "64px",
        background: "rgba(10, 10, 10, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${BORDER}`,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        fontFamily: "'Barlow Condensed', 'Oswald', monospace"
      }}>
        {/* Core branding tag */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 900, fontSize: 16, color: "#fff", letterSpacing: "0.05em" }}>AD17</span>
          <span style={{ color: RED, fontSize: 10 }}></span>
          <span style={{ color: "#666", fontSize: 11, textTransform: "uppercase" }}>PIT_WALL_STAGING</span>
        </div>

        {/* Dynamic Navigation Triggers */}
        <div style={{ display: "flex", gap: 24, fontSize: 12 }}>
          <a href="#projects" style={{ color: "#aaa", textDecoration: "none", textTransform: "uppercase" }}>Projects</a>
          <a href="#education" style={{ color: "#aaa", textDecoration: "none", textTransform: "uppercase" }}>Education</a>
          <span style={{ color: RED, cursor: "not-allowed", opacity: 0.8 }}>RADIO 📻</span>
        </div>
      </nav>

      {/* MAIN TRACK RUNTIME VIEWPORT (Adds padding so content doesn't clip behind fixed Navbar) */}
      <main style={{ flex: 1, paddingTop: "64px" }}>
        {children}
      </main>

      {/* 🛠️ TERMINAL FOOTER */}
      <footer style={{
        background: "#0d0d0d",
        borderTop: `1px solid ${BORDER}`,
        padding: "40px 40px 100px", // Bottom padding keeps space clear for layout overlays
        fontFamily: "monospace",
        fontSize: 11,
        color: "#555",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ color: "#888", fontWeight: "bold", marginBottom: 4 }}>
              © 2026 ADITYA CHOUKSEY // AD17
            </div>
            <div>COMPILING SECURE BUILDS FROM MUMBAI CIRCUIT 🏁</div>
          </div>
          
          <div style={{ display: "flex", gap: 20 }}>
            <span>LATENCY: <span style={{ color: "#10b981" }}>14ms [PASS]</span></span>
            <span>STATUS: <span style={{ color: RED }}>OVERDRIVE</span></span>
          </div>
        </div>
      </footer>

      {/* ▲ HIGH-VELOCITY THROTTLE BUTTON (Back to Top Arrow) */}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "32px",
          right: "40px",
          zIndex: 99,
          background: showScrollTop ? RED : "transparent",
          color: showScrollTop ? "#fff" : "transparent",
          border: showScrollTop ? `1px solid ${RED}` : `1px solid transparent`,
          width: "40px",
          height: "40px",
          borderRadius: "4px",
          cursor: "pointer",
          fontFamily: "monospace",
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? "translateY(0)" : "translateY(20px)",
          pointerEvents: showScrollTop ? "all" : "none",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#000";
          e.currentTarget.style.borderColor = RED;
          e.currentTarget.style.color = RED;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = RED;
          e.currentTarget.style.borderColor = RED;
          e.currentTarget.style.color = "#fff";
        }}
        title="RESET TO BASE GRID"
      >
        ▲
      </button>

    </div>
  );
}