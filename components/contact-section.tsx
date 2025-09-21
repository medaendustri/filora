"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

      // Form animation
      gsap.fromTo(
        formRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact info animation
      gsap.fromTo(
        contactInfoRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success animation
    gsap.to(formRef.current, {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        alert(
          "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      },
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Adres",
      content: "İstanbul, Türkiye",
      color: "from-teal-400 to-cyan-500",
    },
    {
      icon: "📞",
      title: "Telefon",
      content: "+90 (555) 123 45 67",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: "📧",
      title: "E-posta",
      content: "info@florayazilim.com",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: "🕒",
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
      color: "from-emerald-400 to-green-500",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-teal-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-100 rounded-full opacity-30 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
          >
            İletişime
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">
              Geçin
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projeleriniz hakkında konuşmaya hazırız. Size en uygun çözümü
            bulalım!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:border-teal-300"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:border-teal-300"
                    placeholder="E-posta adresiniz"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:border-teal-300"
                    placeholder="Telefon numaranız"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    İlgilendiğiniz Hizmet
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:border-teal-300"
                  >
                    <option value="">Hizmet seçin</option>
                    <option value="web">Web Geliştirme</option>
                    <option value="mobile">Mobil Uygulama</option>
                    <option value="backend">Backend Çözümleri</option>
                    <option value="ecommerce">E-Ticaret</option>
                    <option value="design">UI/UX Tasarım</option>
                    <option value="consulting">Danışmanlık</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:border-teal-300 resize-none"
                  placeholder="Projeniz hakkında detayları paylaşın..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                İletişim Bilgileri
              </h3>
              <p className="text-gray-600 mb-8">
                Projeleriniz için doğru çözümü birlikte bulalım. Uzman ekibimiz
                sizin için burada!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${info.color} rounded-lg text-white text-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Sosyal Medya
              </h4>
              <div className="flex space-x-4">
                {["LinkedIn", "Twitter", "Instagram", "GitHub"].map(
                  (platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-gradient-to-r from-teal-400 to-green-400 rounded-full flex items-center justify-center text-white font-semibold hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                    >
                      {platform[0]}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
