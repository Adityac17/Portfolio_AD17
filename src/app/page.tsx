'use client';

import React from "react";

// The Preloader / CustomCursor / ScrollProgress chrome lives in app/template.tsx,
// so it must not be mounted here as well.
import Navbar from "../components/sections/Navbar";
import HeroSection from "../components/sections/HeroSection";
import BentoGrid from "../components/sections/BentoGrid";
import Education from "@/components/sections/Education";
import Projects from "../components/sections/Projects";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <Education />
      <Projects />
      <ContactSection />
    </main>
  );
}
