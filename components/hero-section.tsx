"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.fromTo(
        logoRef.current,
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          delay: 0.3,
        }
      );

      // Title typing animation
      const titleElement = titleRef.current;
      if (titleElement) {
        gsap.set(titleElement, { opacity: 1 });
        gsap.fromTo(
          titleElement,
          { text: "" },
          {
            text: "Filora Yazılım",
            duration: 2,
            delay: 1.5,
            ease: "none",
            onUpdate: function () {
              // Add typing cursor effect
              titleElement.style.borderRight = "3px solid #14b8a6";
            },
            onComplete: function () {
              // Remove cursor after typing
              gsap.to(titleElement, {
                borderRight: "none",
                delay: 0.5,
              });
            },
          }
        );
      }

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 3.5,
          ease: "power2.out",
        }
      );

      // CTA buttons animation
      if (ctaRef.current?.children) {
        gsap.fromTo(
          Array.from(ctaRef.current.children),
          {
            y: 30,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 4.2,
            stagger: 0.2,
            ease: "back.out(1.7)",
          }
        );
      }

      // Floating animation for the whole hero
      gsap.to(heroRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleGetStarted = () => {
    // Smooth scroll to services section
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div ref={heroRef} className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div ref={logoRef} className="mb-8 flex justify-center">
          <div className="relative group cursor-pointer">
            {/* Glow effect behind logo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-green-400 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

            {/* Main logo container */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-2xl border border-white/20 group-hover:scale-110 transition-all duration-500">
              <Image
                src="/filora-logo.png"
                alt="Filora Yazılım Logo"
                width={200}
                height={200}
                className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                priority
              />

              {/* Rotating ring */}
              <div
                className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-teal-400 via-transparent to-green-400 rounded-full animate-spin"
                style={{ animationDuration: "8s" }}
              ></div>

              {/* Inner particles */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
              <div
                className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-6 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            {/* Floating elements around logo */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-bounce opacity-80"></div>
            <div
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-bounce opacity-80"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>{" "}
        {/* Main title */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 opacity-0"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          {/* Text will be animated by GSAP */}
        </h1>
        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Dijital dünyada başarınızı artıran, yenilikçi yazılım çözümleri ile
          işinizi geleceğe taşıyoruz
        </p>
        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={handleGetStarted}
            className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 via-cyan-500 to-green-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 overflow-hidden backdrop-blur-sm border border-white/10"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Hizmetlerimizi Keşfedin</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {/* Particles */}
            <div className="absolute top-1 right-1 w-2 h-2 bg-white/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={handleContact}
            className="group relative px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-teal-400/50 text-teal-600 font-bold text-lg rounded-2xl hover:bg-teal-500 hover:text-white hover:border-teal-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-xl hover:shadow-teal-500/25"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>İletişime Geçin</span>
              <span className="transform group-hover:rotate-12 transition-transform duration-300">
                📞
              </span>
            </span>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>{" "}
        {/* Modern Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={() => {
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-400/30 to-green-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Main indicator */}
            <div className="relative w-8 h-14 border-2 border-gradient-to-b from-teal-400 to-green-400 rounded-full flex justify-center bg-white/10 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-all duration-300">
              <div className="w-1.5 h-4 bg-gradient-to-b from-teal-400 to-green-400 rounded-full mt-2 animate-bounce group-hover:animate-pulse"></div>
            </div>

            {/* Text hint */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Keşfetmeye başla
            </div>

            {/* Floating arrows */}
            <div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-teal-400 animate-bounce opacity-70"
              style={{ animationDelay: "0.2s" }}
            >
              ↓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
