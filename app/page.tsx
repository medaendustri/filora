"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedBackground from "../components/animated-background";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import AboutSection from "../components/about-section";
import ContactSection from "../components/contact-section";
import CursorFollower from "../components/cursor-follower";
import FloatingElements from "../components/floating-elements";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ana container fade-in animasyonu
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
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
      className="relative min-h-screen bg-gray-50 overflow-hidden"
    >
      {/* Interactive Elements */}
      <CursorFollower />
      <FloatingElements />

      {/* Animated Background */}
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
