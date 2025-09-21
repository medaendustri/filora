"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedBackground from "../components/animated-background";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import AboutSection from "../components/about-section";
import ContactSection from "../components/contact-section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ana container fade-in animasyonu (daha sakin)
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Navigation */}
      <Navbar />
      
      {/* Simplified Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}
