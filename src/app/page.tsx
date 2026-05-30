'use client';

import React, { useState } from "react";

// 1. Core UI Components (Verify these match your export styles!)
import Preloader from "../components/ui/Preloader";
import Navbar from "../components/sections/Navbar";
import HeroSection from "../components/sections/HeroSection";
import BentoGrid from "../components/sections/BentoGrid";
import Education from "@/components/sections/Education";
import Projects from "../components/sections/Projects";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* FIA Light Staging Gate */}
      {loading && <Preloader onDone={() => setLoading(false)} />}

      {/* Main Dashboard Telemetry - Becomes visible when lights go out */}
      <main style={{ 
        position: "relative",
        opacity: loading ? 0 : 1,
        transition: "opacity 0.4s ease-in-out"
      }}>
        <Navbar />
        <HeroSection />
        <BentoGrid />
        <Education />
        <Projects />
        <ContactSection />
      </main>
    </>
  );
}

