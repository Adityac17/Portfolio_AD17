// app/template.tsx
'use client';

import React, { useState } from "react";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onDone={() => setLoading(false)} />
      ) : (
        <div style={{ animation: "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </div>
      )}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}