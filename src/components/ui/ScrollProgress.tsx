// components/ui/ScrollProgress.tsx
'use client';

import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const computed = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProg(isNaN(computed) ? 0 : computed);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      height: 2, background: "#1a1a1a",
    }}>
      <div style={{
        height: "100%", background: "#E21B22",
        width: `${prog}%`, transition: "width 0.05s linear",
      }} />
    </div>
  );
}