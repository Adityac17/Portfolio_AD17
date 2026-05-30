'use client';

import { useState, useEffect } from "react";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);
  const RED = "#E21B22";

  useEffect(() => {
    // Highly optimized racing telemetry loop sequence (Fast boot speeds)
    const timings = [200, 400, 600, 800, 1000, 1200, 1500, 1900];
    const timers = timings.map((t, i) => setTimeout(() => setPhase(i + 1), t));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    // Instantly fires the onDone() state down to page.tsx when phase 7 passes
    if (phase >= 7) {
      const t = setTimeout(onDone, 200); // Snappy exit transits
      return () => clearTimeout(t);
    }
  }, [phase, onDone]);

  // Completely unmounts or hides layout when sequence is dead complete
  if (phase >= 8) return null;

  const lightsOn = Math.min(phase, 5);
  const isGreen = phase >= 5;
  const showBrand = phase >= 6;

  return (
    <div
      style={{
        position: "fixed", 
        inset: 0, 
        zIndex: 9999, 
        background: "#0d0d0d",
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center", 
        gap: 48,
        opacity: phase >= 7 ? 0 : 1,
        // Enforces a hard display drop so it can never block underneath content visually
        visibility: phase >= 7 ? "hidden" : "visible",
        transition: "opacity 0.3s ease, visibility 0.3s ease",
        pointerEvents: "none",
        fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
      }}
    >
      {/* 🚥 FIVE LIGHT GAUGE ASSEMBLY */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const on = lightsOn >= n;
          const green = isGreen && on;
          return (
            <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 48, 
                height: 48, 
                borderRadius: "50%",
                background: green ? "#00ff44" : on ? RED : "#1a1a1a",
                border: `2px solid ${green ? "#00cc33" : on ? "#ff0000" : "#2a2a2a"}`,
                boxShadow: green ? "0 0 20px #00ff4488" : on ? `0 0 16px ${RED}88` : "none",
                transition: "all 0.1s ease",
              }} />
              <div style={{
                width: 4, 
                height: 40,
                background: on ? (green ? "#00ff44" : RED) : "#333",
                transition: "background 0.1s",
              }} />
            </div>
          );
        })}
      </div>

      {/* 🏁 SYSTEM BRAND EMBLEM */}
      <div style={{
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        gap: 4,
        opacity: showBrand ? 1 : 0,
        transform: showBrand ? "translateY(0) scaleX(1)" : "translateY(20px) scaleX(0.6)",
        transition: "all 0.3s cubic-bezier(0.23,1.3,0.5,1)",
      }}>
        <div style={{
          fontSize: 80, 
          fontWeight: 900, 
          letterSpacing: "0.15em",
          color: "#f0f0f0", 
          lineHeight: 1,
        }}>
          AD<span style={{ color: RED }}>17</span>
        </div>
        <div style={{ color: "#888", letterSpacing: "0.4em", fontSize: 11, textTransform: "uppercase" }}>
          Initializing Systems...
        </div>
      </div>
    </div>
  );
}