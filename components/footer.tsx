"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const services = [
    "Web Geliştirme",
    "Mobil Uygulama",
    "E-ticaret Çözümleri",
    "API Geliştirme",
    "Danışmanlık Hizmeti",
    "Teknik Destek",
  ];

  const quickLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Filora Yazılım
              </h3>
            </div>

            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Modern teknolojilerle geliştirilmiş profesyonel yazılım çözümleri
              sunuyoruz. Web geliştirme, mobil uygulama ve danışmanlık
              hizmetleriyle projelerinizi hayata geçiriyoruz.
            </p>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@filorayazilim.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+90 XXX XXX XX XX</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>İstanbul, Türkiye</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">
              Hızlı Linkler
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-default"
                >
                  <span className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    <span>{service}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
        >
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Haberdar Olmak İster Misiniz?
            </h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              En son projelerimiz, blog yazılarımız ve teknoloji haberleri
              hakkında bildirim almak için e-posta listemize katılın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Abone Ol
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-center sm:text-left"
            >
              © {new Date().getFullYear()} Filora Yazılım. Tüm hakları saklıdır.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
