"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Globe,
  Users,
  MessageSquare,
  User,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session } = useSession();

  const navigation = [
    { name: "Ana Sayfa", href: "/", icon: Globe },
    { name: "Hakkımızda", href: "/hakkimizda", icon: Users },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz", icon: Code },
    { name: "Blog", href: "/blog", icon: MessageSquare },
    { name: "İletişim", href: "/iletisim", icon: MessageSquare },
  ];

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 glass backdrop-blur-lg border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span>Filora Yazılım</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-ring"
                  >
                    <item.icon className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />

            {session ? (
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/80 transition-colors focus-ring"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {session.user?.email?.split("@")[0]}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-50"
                    >
                      <Link
                        href="/admin/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Admin Panel
                      </Link>
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          handleSignOut();
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Çıkış Yap
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/admin/login"
                  className="flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-ring"
                >
                  <User className="w-4 h-4 mr-2" />
                  Giriş Yap
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors focus-ring"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-lg text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-border">
                {session ? (
                  <>
                    <Link
                      href="/admin/dashboard"
                      className="flex items-center px-3 py-2 rounded-lg text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="w-5 h-5 mr-3" />
                      Admin Panel
                    </Link>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        handleSignOut();
                      }}
                      className="flex items-center w-full px-3 py-2 rounded-lg text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <LogOut className="w-5 h-5 mr-3" />
                      Çıkış Yap
                    </button>
                  </>
                ) : (
                  <Link
                    href="/admin/login"
                    className="flex items-center px-3 py-2 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="w-5 h-5 mr-3" />
                    Giriş Yap
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
