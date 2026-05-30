'use client';

import React, { useState } from "react";
// 🔥 UNCOMMENTED AND CONNECTED TO YOUR SINGLETON UTILITY
import { supabase } from "@/lib/supabase";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const RED = "#E21B22";
  const BORDER = "#2a2a2a";

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      // 📡 TRANSMITTING DATA TO YOUR SUPABASE "contact_messages" TABLE
      const { error } = await supabase
        .from("contact_messages")
        .insert([{ 
          name: form.name, 
          email: form.email, 
          message: form.message 
        }]);

      if (error) throw error;

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Supabase Transmission Error:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 4000);
    }
  };

  // Dynamic Telemetry Button Styler
  const getButtonStyles = () => {
    if (status === "sending") return { bg: "#d97706", text: "Transmitting...", cursor: "wait" }; // Amber
    if (status === "success") return { bg: "#10b981", text: "Transmission Received! 🏁", cursor: "default" }; // Green
    if (status === "error") return { bg: "#b91c1c", text: "Transmission Failed!", cursor: "pointer" }; // Dark Red
    return { bg: RED, text: "Send Payload", cursor: "pointer" };
  };

  const btn = getButtonStyles();

  return (
    <section id="contact" style={{
      padding: "80px 40px 120px", maxWidth: 1100, margin: "0 auto",
      fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
    }}>
      <div style={{ color: RED, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32 }}>
        Pit Radio · Contact
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div style={{ background: "#161616", border: `1px solid ${BORDER}`, padding: 40 }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: "#f0f0f0", margin: "0 0 12px" }}>Start a Transmission.</h2>
          <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>
            Whether you have an exciting project, a role opportunity, or just want to talk about F1 strategy lines — the channel path remains open.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Email", val: "2025.adityac@isu.ac.in", href: "mailto:2025.adityac@isu.ac.in" },
              { label: "GitHub", val: "github.com/Adityac17", href: "https://github.com/Adityac17" },
              { label: "LinkedIn", val: "adityac17", href: "https://www.linkedin.com/in/adityac17/" },
            ].map(({ label, val, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", border: `1px solid ${BORDER}`, textDecoration: "none", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = RED)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = BORDER)}
              >
                <span style={{ color: "#888", fontSize: 11, textTransform: "uppercase" }}>{label}</span>
                <span style={{ color: "#f0f0f0", fontSize: 13 }}>{val}</span>
              </a>
            ))}
          </div>
        </div>

        <div style={{ background: "#161616", border: `1px solid ${BORDER}`, padding: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", color: "#888", fontSize: 11, textTransform: "uppercase", marginBottom: 8 }}>Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ width: "100%", padding: "12px", background: "#0d0d0d", border: `1px solid ${BORDER}`, color: "#f0f0f0", outline: "none", fontFamily: "sans-serif" }} />
            </div>
            <div>
              <label style={{ display: "block", color: "#888", fontSize: 11, textTransform: "uppercase", marginBottom: 8 }}>Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ width: "100%", padding: "12px", background: "#0d0d0d", border: `1px solid ${BORDER}`, color: "#f0f0f0", outline: "none", fontFamily: "sans-serif" }} />
            </div>
            <div>
              <label style={{ display: "block", color: "#888", fontSize: 11, textTransform: "uppercase", marginBottom: 8 }}>Message</label>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ width: "100%", padding: "12px", background: "#0d0d0d", border: `1px solid ${BORDER}`, color: "#f0f0f0", outline: "none", fontFamily: "sans-serif", resize: "none" }} />
            </div>
            <button 
              onClick={handleSubmit} 
              disabled={status === "sending" || status === "success"} 
              style={{ 
                padding: "12px", 
                background: btn.bg, 
                color: "#fff", 
                border: "none", 
                fontWeight: 700, 
                cursor: btn.cursor, 
                textTransform: "uppercase", 
                fontSize: 12,
                transition: "background 0.3s ease"
              }}
            >
              {btn.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}