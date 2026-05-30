// components/ui/CustomCursor.tsx
'use client';

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const RED = "#E21B22";

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a,button,[data-hover]")) setHovering(true);
    };
    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <div style={{
        position: "fixed", zIndex: 10000, pointerEvents: "none",
        left: pos.x, top: pos.y,
        transform: "translate(-50%,-50%)",
        width: hovering ? 36 : 8, height: hovering ? 36 : 8,
        border: `1.5px solid ${RED}`,
        borderRadius: hovering ? "2px" : "50%",
        transition: "all 0.12s ease",
        mixBlendMode: "difference",
      }} />
      {hovering && (
        <>
          {[[-10, 0], [10, 0], [0, -10], [0, 10]].map(([dx, dy], i) => (
            <div key={i} style={{
              position: "fixed", zIndex: 10000, pointerEvents: "none",
              left: pos.x + dx, top: pos.y + dy,
              transform: "translate(-50%,-50%)",
              width: 4, height: 4, background: RED,
              borderRadius: "50%",
            }} />
          ))}
        </>
      )}
      <div style={{
        position: "fixed", zIndex: 10000, pointerEvents: "none",
        left: pos.x, top: pos.y,
        transform: "translate(-50%,-50%)",
        width: 4, height: 4, background: RED, borderRadius: "50%",
      }} />
    </>
  );
}