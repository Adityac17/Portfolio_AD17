// components/sections/HeroSection.tsx
'use client';

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [typed, setTyped] = useState("");
  const RED = "#E21B22";
  
  const bioCode = `const developer = {
  name: "Aditya Chouksey",
  brand: "AD17",
  role: "Full-Stack Dev + AI Specialist",
  stack: ["Next.js", "React", "Python", "Supabase"],
  mission: "Engineer fast. Architect clean.",
  status: "🟢 Available for opportunities",
};`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(bioCode.slice(0, i));
      i++;
      if (i > bioCode.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [bioCode]);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "120px 40px 80px",
      position: "relative", overflow: "hidden",
      fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
    }}>
      <div style={{
        position: "absolute", top: 0, right: 0, width: 200, height: 200,
        opacity: 0.05,
        backgroundImage: "repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)",
        backgroundSize: "20px 20px",
      }} />
      <div style={{
        position: "absolute", left: 0, top: "50%", width: "100%", height: 1,
        background: `linear-gradient(90deg, ${RED}, transparent)`, opacity: 0.15,
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div style={{
          color: RED, fontSize: 12, letterSpacing: "0.4em",
          textTransform: "uppercase", marginBottom: 24,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{ width: 30, height: 1, background: RED }} />
          Software Developer · AI Agents Specialist
        </div>

        <h1 style={{
          fontSize: "clamp(42px,7vw,88px)", fontWeight: 900, lineHeight: 1.0,
          color: "#f0f0f0", margin: "0 0 8px", letterSpacing: "-0.01em",
        }}>Engineering Speed.</h1>
        <h1 style={{
          fontSize: "clamp(42px,7vw,88px)", fontWeight: 900, lineHeight: 1.0,
          color: "transparent", WebkitTextStroke: "1px #2a2a2a", margin: "0 0 40px",
        }}>Architecting Scale.</h1>

        <div style={{ background: "#0a0a0a", border: "1px solid #2a2a2a", maxWidth: 580, position: "relative" }}>
          <div style={{
            padding: "10px 16px", borderBottom: "1px solid #2a2a2a",
            display: "flex", gap: 8, alignItems: "center",
          }}>
            {[RED, "#f59e0b", "#10b981"].map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
            <span style={{ color: "#888", fontSize: 11, marginLeft: 8, letterSpacing: "0.1em", fontFamily: "monospace" }}>
              aditya@ad17 ~ developer.ts
            </span>
          </div>
          <pre style={{
            padding: "16px 20px", margin: 0,
            fontFamily: "'Fira Code', 'Courier New', monospace",
            fontSize: 12, lineHeight: 1.8, color: "#cdd6f4", overflowX: "auto", minHeight: 180,
          }}>
            {typed.split("\n").map((line, li) => (
              <div key={li}>
                {line.split(/(".*?"|'.*?'|const|=|{|}|,|\[|\]|:)/g).map((part, pi) => {
                  let color = "#cdd6f4";
                  if (/^(const|let|var)$/.test(part)) color = "#cba6f7";
                  else if (/^["']/.test(part)) color = "#a6e3a1";
                  else if (/^[={}:,\[\]]$/.test(part)) color = "#89b4fa";
                  return <span key={pi} style={{ color }}>{part}</span>;
                })}
              </div>
            ))}
            <span style={{
              display: "inline-block", width: 8, height: 14,
              background: RED, verticalAlign: "middle", animation: "blink 1s step-end infinite",
            }} />
          </pre>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
          <a href="https://www.linkedin.com/in/adityac17/" target="_blank" rel="noopener noreferrer"
            style={{
              padding: "10px 28px", background: RED, color: "#fff",
              textDecoration: "none", fontSize: 12, letterSpacing: "0.15em",
              textTransform: "uppercase", fontWeight: 700, transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >Connect on LinkedIn</a>
          <a href="https://github.com/Adityac17" target="_blank" rel="noopener noreferrer"
            style={{
              padding: "10px 28px", border: "1px solid #2a2a2a",
              color: "#888", textDecoration: "none", fontSize: 12,
              letterSpacing: "0.15em", textTransform: "uppercase", transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { 
              const t = e.target as HTMLElement;
              t.style.borderColor = "#f0f0f0"; t.style.color = "#f0f0f0"; 
            }}
            onMouseLeave={(e) => { 
              const t = e.target as HTMLElement;
              t.style.borderColor = "#2a2a2a"; t.style.color = "#888"; 
            }}
          >GitHub Profile</a>
        </div>
      </div>
    </section>
  );
}