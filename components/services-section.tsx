"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Web Geliştirme",
    description:
      "Modern, responsive ve kullanıcı dostu web siteleri ve web uygulamaları geliştiriyoruz.",
    icon: "🌐",
    color: "from-teal-400 to-cyan-500",
    features: [
      "React & Next.js",
      "Responsive Tasarım",
      "SEO Optimizasyonu",
      "Performans Odaklı",
    ],
  },
  {
    title: "Mobil Uygulama",
    description:
      "iOS ve Android platformlarında native ve cross-platform mobil uygulamalar.",
    icon: "📱",
    color: "from-cyan-400 to-blue-500",
    features: [
      "React Native",
      "Flutter",
      "Native Development",
      "App Store Optimizasyonu",
    ],
  },
  {
    title: "Backend Çözümleri",
    description:
      "Ölçeklenebilir, güvenli ve performanslı backend sistemleri ve API'ler.",
    icon: "⚙️",
    color: "from-green-400 to-teal-500",
    features: [
      "Node.js & Python",
      "Database Tasarımı",
      "Cloud Integration",
      "Mikroservis Mimarisi",
    ],
  },
  {
    title: "E-Ticaret",
    description:
      "Satışlarınızı artıracak modern e-ticaret platformları ve ödeme sistemleri.",
    icon: "🛒",
    color: "from-emerald-400 to-green-500",
    features: [
      "Özel E-ticaret",
      "Ödeme Entegrasyonu",
      "Stok Yönetimi",
      "Analytics Dashboard",
    ],
  },
  {
    title: "UI/UX Tasarım",
    description:
      "Kullanıcı deneyimini önceleyerek etkileyici ve fonksiyonel tasarımlar.",
    icon: "🎨",
    color: "from-blue-400 to-cyan-500",
    features: [
      "Figma Tasarım",
      "Prototyping",
      "User Research",
      "Brand Identity",
    ],
  },
  {
    title: "Danışmanlık",
    description:
      "Dijital dönüşüm sürecinde stratejik teknoloji danışmanlığı hizmetleri.",
    icon: "💡",
    color: "from-teal-400 to-green-500",
    features: [
      "Teknoloji Stratejisi",
      "Dijital Dönüşüm",
      "Sistem Analizi",
      "Proje Yönetimi",
    ],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          Array.from(cards),
          {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotationY: 15,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-transparent to-green-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
          >
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern teknolojilerle işinizi dijital dünyada öne çıkaracak kapsamlı
            çözümler sunuyoruz
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-700 transform hover:-translate-y-3 border border-white/20 hover:border-teal-200/50 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-all duration-700 rounded-3xl`}
              ></div>

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-green-400/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with glow effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative text-5xl p-4 bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm rounded-2xl border border-white/30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover effect button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200">
                    Detayları Gör →
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-green-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Tüm Hizmetleri İnceleyin</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
