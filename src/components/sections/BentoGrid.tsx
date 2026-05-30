'use client';

import React from "react";
import TiltCard from "@/components/cards/ProjectCard";

const techStack = [
  { name: "TypeScript", color: "#3178c6" },
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61dafb" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Supabase", color: "#3ecf8e" },
  { name: "Python", color: "#f7ca18" },
  { name: "C++", color: "#1c8cdc" },
  { name: "n8n", color: "#009688" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ed" },
];

// 🔥 UPDATED RACING TRACK TARGETS HERE
const learning = [
  "Advanced AI Agents System",
  "Data Structure and Algorithm",
  "AI/ML",
  "F1 Data APIs"
];

const ghData = Array.from({ length: 52 * 4 }, () => ({
  active: Math.random() > 0.65,
  intensity: Math.floor(Math.random() * 4),
}));

export default function BentoGrid() {
  const RED = "#E21B22";
  const BORDER = "#2a2a2a";

  return (
    <section id="about" style={{
      padding: "80px 40px", maxWidth: 1100, margin: "0 auto",
      fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
    }}>
      <div style={{ color: RED, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
        Telemetry · About & Stack
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* Profile */}
        <TiltCard 
          style={{ background: "#161616", border: `1px solid ${BORDER}`, padding: 32 }} 
          className="md:col-span-2"
        >
          <div style={{ color: "#888", fontSize: 10, letterSpacing: "0.1em" }}>DRIVER PROFILE · ABOUT ME</div>
          <p style={{ color: "#f0f0f0", fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
            Hola! <span style={{ color: RED, fontWeight: 700 }}>Aditya Chouksey</span> — a Full-Stack Developer and AI Agents Specialist studying Computer Science at <span style={{ color: "#fff" }}>ITM Skills University</span>.
          </p>
          <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, marginTop: 12 }}>
            I engineer modern web applications, intelligent AI agents, and automated pipelines. My architecture philosophy mirrors F1 engineering — precision design and zero structural inefficiency.
          </p>
          <div style={{ marginTop: 24, paddingTop: 24, borderTop: `1px solid ${BORDER}`, display: "flex", gap: 24 }}>
            {[
              { label: "BTECH CSE Student", val: "ITM Skills University" },
              { label: "Projects", val: "12+" },
              { label: "Focus", val: "AI + Web" },
            ].map(({ label, val }) => (
              <div key={label}>
                <div style={{ color: RED, fontSize: 20, fontWeight: 900 }}>{val}</div>
                <div style={{ color: "#888", fontSize: 11, letterSpacing: "0.1em" }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </TiltCard>

        {/* Paddock Status */}
        <TiltCard style={{ background: "#161616", border: `1px solid ${BORDER}`, padding: 24 }}>
          <div style={{ color: "#888", fontSize: 10, letterSpacing: "0.1em" }}>PADDOCK STATUS</div>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: "#0d2318", border: "1px solid #1a4a2e" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
              <div>
                <div style={{ color: "#10b981", fontSize: 12, fontWeight: 700 }}>AVAILABLE</div>
                <div style={{ color: "#888", fontSize: 10 }}>Open to opportunities</div>
              </div>
            </div>
            <div style={{ color: "#888", fontSize: 12, lineHeight: 1.6 }}>
              📍 Mumbai, MH, India<br />🕐 IST (UTC +5:30)<br />📧 2025.adityac@isu.ac.in
            </div>
          </div>
        </TiltCard>

        {/* Components Tech Stack */}
        <TiltCard style={{ background: "#161616", border: `1px solid ${BORDER}`, padding: 28 }}>
          <div style={{ color: "#888", fontSize: 10, letterSpacing: "0.1em" }}>TECH STACK · COMPONENTS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
            {techStack.map(({ name, color }) => (
              <div key={name} style={{ padding: "4px 10px", border: `1px solid ${BORDER}`, fontSize: 11, display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
                <span style={{ color: "#f0f0f0" }}>{name}</span>
              </div>
            ))}
          </div>
        </TiltCard>

        {/* Next Lap Learning Card */}
        <TiltCard style={{ background: "#161616", border: `1px solid ${BORDER}`, padding: 28 }}>
          <div style={{ color: "#888", fontSize: 10, letterSpacing: "0.1em" }}>CURRENTLY LEARNING · NEXT LAP</div>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
            {learning.map((item, i) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: i < learning.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                <div style={{ width: 20, height: 20, border: `1px solid ${RED}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: RED, fontFamily: "monospace" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span style={{ color: "#f0f0f0", fontSize: 13, fontWeight: "bold" }}>{item}</span>
              </div>
            ))}
          </div>
        </TiltCard>

        {/* GitHub Stream Activity */}
        <TiltCard style={{ background: "#161616", border: `1px solid ${BORDER}`, padding: 24 }}>
          <div style={{ color: "#888", fontSize: 10, letterSpacing: "0.1em" }}>DATA LOG · GITHUB ACTIVITY</div>
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(26, 1fr)", gap: 2 }}>
            {ghData.map((cell, i) => (
              <div key={i} style={{
                aspectRatio: "1",
                background: cell.active
                  ? cell.intensity === 3 ? RED
                  : cell.intensity === 2 ? "#7f1012"
                  : cell.intensity === 1 ? "#4a0e10"
                  : "#2a0608"
                  : "#161616",
                borderRadius: 1,
              }} />
            ))}
          </div>
        </TiltCard>
      </div>
    </section>
  );
}