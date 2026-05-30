'use client';

import React from "react";
import TiltCard from "@/components/cards/ProjectCard";

const projects = [
  {
    title: "KidSafe Ride Tracker",
    desc: "Comprehensive school transport tracking web application featuring real-time live tracking, route management, and driver verification.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    year: "2026",
    link: "https://kidsafe-ride-tracker.vercel.app",
    isWIP: false
  },
  {
    title: "OpenAI Website Clone",
    desc: "A responsive frontend clone of the OpenAI website, developed to demonstrate modern UI design and layout concepts.",
    tags: ["HTML", "CSS", "Vercel"],
    year: "2026",
    link: "https://open-ai-web-five.vercel.app", 
    isWIP: false
  },
  {
    title: "Wealth Dashboard (In Progress)",
    desc: "An advanced personal finance application featuring spending velocity telemetry, comprehensive investment portfolio tracking, and detailed debt management tools.",
    tags: ["Next.js", "Python", "Data Visualization", "WIP"],
    year: "2026",
    link: "#", 
    isWIP: true 
  },
  {
    title: "Markdown Previewer",
    desc: "A real-time Markdown parsing application featuring GitHub-flavored rendering, local storage integration, and a modular component architecture.",
    tags: ["React", "Vite", "react-markdown", "Vercel"],
    year: "2026",
    link: "https://markdown-previewer-mauve-delta.vercel.app", 
    isWIP: false
  },
  {
    title: "Pitstop Planner v2",
    desc: "A Formula 1-themed task tracking application built to manage daily schedules and academic assignments with a motorsport-inspired aesthetic.",
    tags: ["React.js", "Task Management", "Vercel"],
    year: "2026",
    link: "https://pitstop-planner-v2.vercel.app", 
    isWIP: false
  },
];

export default function Projects() {
  const RED = "#E21B22";
  const AMBER = "#FFB700"; 
  const BORDER = "#2a2a2a";

  return (
    <section id="projects" style={{
      padding: "80px 40px", maxWidth: 1100, margin: "0 auto",
      fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
    }}>
      <div style={{ color: RED, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>
        Race Entries · Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {projects.map((proj, i) => {
          const currentAccent = proj.isWIP ? AMBER : RED;

          return (
            <TiltCard key={proj.title} style={{ background: "#161616", border: `1px solid ${proj.isWIP ? "#332600" : BORDER}`, overflow: "hidden" }}>
              
              {/* Card Banner Graphical Area */}
              <div style={{ height: 160, background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: `1px solid ${BORDER}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg,#1a1a1a 0,#1a1a1a 1px,transparent 0,transparent 50%)", backgroundSize: "16px 16px", opacity: 0.5 }} />
                <div style={{ fontSize: 48, fontWeight: 900, color: proj.isWIP ? "#222" : "#1a1a1a", zIndex: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Accent Line changes color dynamically */}
                <div style={{ position: "absolute", bottom: 0, left: 0, width: `${40 + i * 20}%`, height: 2, background: currentAccent }} />
              </div>

              {/* Card Metadata/Content Body */}
              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                  <div style={{ color: "#f0f0f0", fontSize: 16, fontWeight: 700 }}>
                    {proj.title} 
                    {proj.isWIP && <span style={{ color: AMBER, fontSize: 10, marginLeft: 6, fontFamily: "monospace" }}>[WIP]</span>}
                  </div>
                  <div style={{ color: "#888", fontSize: 11 }}>{proj.year}</div>
                </div>
                <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{proj.desc}</p>
                
                {/* Tech Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {proj.tags.map((tag) => (
                    <span key={tag} style={{ 
                      padding: "3px 8px", 
                      background: "#1a1a1a", 
                      border: `1px solid ${tag === "WIP" ? AMBER : BORDER}`, 
                      color: tag === "WIP" ? AMBER : "#888", 
                      fontSize: 10 
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Interaction Control Links */}
                <div style={{ display: "flex", gap: 8 }}>
                  <a href="https://github.com/Adityac17" target="_blank" rel="noopener noreferrer" className="w-full block"
                    style={{ flex: 1, padding: "8px 0", textAlign: "center", border: `1px solid ${BORDER}`, color: "#888", textDecoration: "none", fontSize: 11, textTransform: "uppercase" }}
                  >Source</a>
                  
                  <a 
                    href={proj.link} 
                    target={proj.isWIP ? undefined : "_blank"} 
                    rel="noopener noreferrer" 
                    className="w-full block" 
                    style={{ 
                      flex: 1, 
                      padding: "8px 0", 
                      textAlign: "center", 
                      background: proj.isWIP ? "#222" : RED, 
                      color: proj.isWIP ? "#555" : "#fff", 
                      border: proj.isWIP ? "1px solid #333" : "none",
                      textDecoration: "none", 
                      fontSize: 11, 
                      textTransform: "uppercase",
                      cursor: proj.isWIP ? "not-allowed" : "pointer",
                      fontWeight: "bold"
                    }}
                  >
                    {proj.isWIP ? "IN GARAGE" : "Live Demo ↗"}
                  </a>
                </div>
              </div>

            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}