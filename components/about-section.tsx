"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: 150, label: "Tamamlanan Proje", suffix: "+" },
  { number: 50, label: "Mutlu Müşteri", suffix: "+" },
  { number: 5, label: "Yıllık Deneyim", suffix: "+" },
  { number: 24, label: "Saat Destek", suffix: "/7" },
];

const features = [
  {
    title: "İnovatif Çözümler",
    description:
      "En son teknolojileri kullanarak gelecek odaklı çözümler geliştiriyoruz.",
    icon: "⚡",
  },
  {
    title: "Uzman Ekip",
    description:
      "Alanında uzman, deneyimli geliştiricilerden oluşan profesyonel ekibimiz.",
    icon: "👥",
  },
  {
    title: "7/24 Destek",
    description:
      "Projeleriniz için kesintisiz teknik destek ve bakım hizmetleri.",
    icon: "🛡️",
  },
  {
    title: "Hızlı Teslimat",
    description:
      "Agile metodoloji ile projeleri zamanında ve kaliteli bir şekilde teslim ediyoruz.",
    icon: "🚀",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
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

      // Content animation
      gsap.fromTo(
        contentRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats animation
      if (statsRef.current) {
        const statItems = statsRef.current.children;
        gsap.fromTo(
          Array.from(statItems),
          {
            y: 50,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              onEnter: () => animateNumbers(),
            },
          }
        );
      }

      // Features animation
      if (featuresRef.current) {
        const featureItems = featuresRef.current.children;
        gsap.fromTo(
          Array.from(featureItems),
          {
            rotationX: 90,
            opacity: 0,
            transformOrigin: "center bottom",
          },
          {
            rotationX: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
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

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      const element = document.querySelector(`.stat-number-${index}`);
      if (element) {
        gsap.fromTo(
          element,
          { textContent: 0 },
          {
            textContent: stat.number,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function () {
              element.textContent = Math.round(
                this.targets()[0].textContent
              ).toString();
            },
          }
        );
      }
    });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Text content */}
          <div>
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            >
              Filora Yazılım
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">
                Hakkında
              </span>
            </h2>
            <div ref={contentRef} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Filora Yazılım olarak, dijital dünyada işletmelerin başarısını
                artırmak için yenilikçi yazılım çözümleri geliştiriyoruz. Modern
                teknolojileri kullanarak müşterilerimizin ihtiyaçlarına özel,
                kaliteli ve sürdürülebilir projeler üretiyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Deneyimli ekibimiz ile web geliştirme, mobil uygulama, e-ticaret
                ve danışmanlık hizmetlerinde öncü olmaya devam ediyoruz. Her
                projeyi bir sanat eseri gibi özenle tasarlıyor ve
                geliştiriyoruz.
              </p>
              <div className="pt-4">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Daha Fazla Bilgi</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500 mb-2">
                  <span className={`stat-number-${index}`}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-400 to-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Neden Filora Yazılım?
          </h3>
          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-teal-400 to-green-400 rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
