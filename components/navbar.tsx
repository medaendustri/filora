"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Ana Sayfa", href: "#home" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Hizmetler", href: "#services" },
    { label: "İletişim", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative w-10 h-10 bg-white rounded-lg p-1 shadow-md">
              <Image
                src="/filora-logo.png"
                alt="Filora Yazılım"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Filora Yazılım
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href.replace("#", ""))}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Teklif Al
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={`h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "w-6"
                }`}
              ></div>
              <div
                className={`h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "w-6"
                }`}
              ></div>
              <div
                className={`h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "w-6"
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href.replace("#", ""))}
                className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300 mt-4"
            >
              Teklif Al
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
