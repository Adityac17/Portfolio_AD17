// components/sections/Navbar.tsx
'use client';

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const RED = "#E21B22";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 2, left: 0, right: 0, zIndex: 900,
      padding: "0 40px", height: 60,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(13,13,13,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid #2a2a2a` : "none",
      transition: "all 0.25s",
      fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
    }}>
      <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "0.12em", color: "#f0f0f0" }}>
        AD<span style={{ color: RED }}>17</span>
      </div>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["About", "Projects", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: "#888", textDecoration: "none", fontSize: 13,
            letterSpacing: "0.15em", textTransform: "uppercase",
            transition: "color 0.15s",
          }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0f0f0")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888")}
          >{item}</a>
        ))}
        {/* <a href="#" style={{
          padding: "6px 16px", border: `1px solid ${RED}`,
          color: RED, fontSize: 12, textDecoration: "none",
          letterSpacing: "0.15em", textTransform: "uppercase",
          transition: "all 0.15s",
        }}
          onMouseEnter={(e) => { 
            const t = e.target as HTMLElement;
            t.style.background = RED; t.style.color = "#fff"; 
          }}
          onMouseLeave={(e) => { 
            const t = e.target as HTMLElement;
            t.style.background = "transparent"; t.style.color = RED; 
          }}
        >Download CV</a> */}
        <a 
          href="Aditya_Chouksey_CV.pdf" 
          download="Aditya_Chouksey_CV.pdf"
          style={{
            border: "1px solid #E21B22", // Your signature racing red
            color: "#fff",
            background: "transparent",
            padding: "6px 14px",
            borderRadius: "2px",
            textDecoration: "none",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 11,
            letterSpacing: "0.05em",
            fontFamily: "monospace",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          // Simple inline styles to handle that high-contrast hover effect cleanly
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#E21B22";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#fff";
          }}
        >
          Download CV
      </a>
      </div>
    </nav>
  );
}