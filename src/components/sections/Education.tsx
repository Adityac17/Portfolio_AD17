'use client';

import React from "react";

const educationTrack = [
  {
    institution: "ITM Skills University",
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    duration: "2025 - 2029",
    status: "IN_PROGRESS",
    sector: "SECTOR_01 // CORE_ENGINEERING",
    details: "Specializing in Intelligent Systems, Advanced Full-Stack Architectures, and Automated Pipelines. Maintaining zero structural inefficiencies in algorithmic logic."
  },
  {
    institution: "Champions Science Junior College",
    degree: "11th & 12th",
    duration: "2023 - 2025",
    status: "COMPLETED",
    sector: "SECTOR_02 // Junior_College",
    details: "Studied for JEE Mains & Advanced and HSC 11th & 12th"
  },
  { 
    institution: "Ryan International School Kharghar",
    degree: "1st to 10th",
    duration: "2013 - 2023",
    status: "COMPLETED",
    sector: "SECTOR_02 // High_School",
    details: "Studied from 1st to 10th in ICSE and also National Olympiads"
  }
];

export default function Education() {
  const RED = "#E21B22";
  const BORDER = "#2a2a2a";

  return (
    <section id="education" style={{
      maxWidth: 1100,
      margin: "0 auto",
      padding: "60px 40px 80px",
      fontFamily: "'Barlow Condensed', 'Oswald', sans-serif"
    }}>
      {/* Telemetry Track Line Banner */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
        <div style={{ height: 2, width: 32, background: RED }} />
        <span style={{ 
          color: RED, 
          fontSize: 11, 
          letterSpacing: "0.25em", 
          textTransform: "uppercase",
          fontFamily: "monospace"
        }}>
          QUALIFICATION LOGS // ACADEMIC TELEMETRY
        </span>
      </div>

      {/* Main Structural Timeline Track */}
      <div style={{ position: "relative", paddingLeft: 20, borderLeft: `1px solid ${BORDER}` }}>
        {educationTrack.map((track, idx) => {
          const isActive = track.status === "IN_PROGRESS";
          
          return (
            <div key={idx} style={{ 
              position: "relative", 
              marginBottom: idx === educationTrack.length - 1 ? 0 : 48 
            }}>
              
              {/* Timeline Gate Node (Changes state color dynamically) */}
              <div style={{
                position: "absolute",
                left: -26,
                top: 4,
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: isActive ? RED : "#161616",
                border: `2px solid ${isActive ? RED : "#444"}`,
                boxShadow: isActive ? `0 0 10px ${RED}` : "none",
                zIndex: 2
              }} />

              {/* Qualification Content Chassis */}
              <div style={{
                background: "#161616",
                border: `1px solid ${isActive ? "#332222" : BORDER}`,
                borderRadius: 4,
                padding: "24px 28px",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              className="hover:border-neutral-700"
              >
                {/* Sector Spec Line Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: isActive ? RED : "#666" }}>
                    {track.sector}
                  </span>
                  <span style={{ 
                    fontFamily: "monospace", 
                    fontSize: 11, 
                    color: isActive ? "#10b981" : "#888", 
                    background: isActive ? "rgba(16,185,129,0.08)" : "#0f0f0f",
                    padding: "2px 8px",
                    border: `1px solid ${isActive ? "rgba(16,185,129,0.2)" : "#222"}`
                  }}>
                    {track.status}  {track.duration}
                  </span>
                </div>

                {/* Institution Name & Degree Specification */}
                <h3 style={{ fontSize: 26, fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: "0.02em", lineHeight: 1.1 }}>
                  {track.institution}
                </h3>
                <h4 style={{ fontSize: 16, fontWeight: 500, color: "#aaa", textTransform: "uppercase", marginTop: 4, letterSpacing: "0.01em" }}>
                  {track.degree}
                </h4>

                {/* Engineering Data Logs Divider Line */}
                <div style={{ margin: "16px 0", height: 1, background: "#222" }} />

                {/* Explanatory Details */}
                <p style={{ color: "#888", fontSize: 13, fontFamily: "monospace", lineHeight: 1.6 }}>
                  {track.details}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}