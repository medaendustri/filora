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
      // Logo animation - daha sakin
      gsap.fromTo(
        logoRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      // Title animation - typing yerine fade-in
      gsap.fromTo(
        titleRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
        }
      );

      // Subtitle animation - daha sakin
      gsap.fromTo(
        subtitleRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1,
          ease: "power2.out",
        }
      );

      // CTA buttons animation - daha profesyonel
      if (ctaRef.current?.children) {
        gsap.fromTo(
          Array.from(ctaRef.current.children),
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 1.5,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }

      // Floating animasyonunu kaldır - sadece subtle hover effect
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <div ref={heroRef} className="text-center max-w-4xl mx-auto">
        {/* Logo - Kurumsal ve sade */}
        <div ref={logoRef} className="mb-12 flex justify-center">
          <div className="relative">
            {/* Subtle shadow */}
            <div className="absolute -inset-2 bg-teal-100 rounded-2xl opacity-20"></div>

            {/* Main logo container */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/filora-logo.png"
                alt="Filora Yazılım Logo"
                width={150}
                height={150}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>{" "}
        {/* Main title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          Filora Yazılım
        </h1>
        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Dijital dünyada başarınızı artıran, yenilikçi yazılım çözümleri ile
          işinizi geleceğe taşıyoruz
        </p>
        {/* CTA Buttons - Kurumsal ve sade */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleGetStarted}
            className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Hizmetlerimizi Keşfedin
          </button>

          <button
            onClick={handleContact}
            className="px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
          >
            İletişime Geçin
          </button>
        </div>{" "}
        {/* Simple scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div className="w-6 h-10 border-2 border-teal-600 rounded-full flex justify-center hover:border-teal-700 transition-colors duration-300">
            <div className="w-1 h-3 bg-teal-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
