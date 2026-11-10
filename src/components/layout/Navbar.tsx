"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AdminPasswordModal } from "@/components/admin/AdminPasswordModal";
import { personalData } from "@/data/personal";
import { Menu, X, FileText, Sparkles } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Leadership", href: "#community" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  onOpenResume?: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLogoClicks((prev) => {
      const nextCount = prev + 1;
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);

      if (nextCount >= 5) {
        setIsAdminModalOpen(true);
        return 0;
      }

      // Reset count after 2.5s of inactivity
      clickTimeoutRef.current = setTimeout(() => {
        setLogoClicks(0);
      }, 2500);

      // On 1st click, still perform regular smooth scroll to hero
      if (nextCount === 1) {
        const heroElem = document.getElementById("hero");
        if (heroElem) {
          heroElem.scrollIntoView({ behavior: "smooth" });
        }
      }

      return nextCount;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scroll spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full transition-all duration-300 ${
        scrolled
          ? "py-3 glass-panel border-b border-slate-800/80 dark:border-white/10 shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        {/* Brand Initials Logo with Secret 5-Click Admin Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-2 group cursor-pointer select-none"
            title="Shaurya Hindocha"
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 p-[1px] shadow-lg group-hover:scale-105 transition-all shrink-0 ${
                logoClicks >= 3 ? "scale-110 ring-2 ring-purple-400 animate-pulse" : ""
              }`}
            >
              <div className="w-full h-full bg-[#050609] dark:bg-[#07090e] rounded-[11px] flex items-center justify-center font-heading font-bold text-white text-sm tracking-wider">
                {personalData.initials}
              </div>
            </div>
            <span className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors hidden sm:block">
              {personalData.name}
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-700/40 dark:border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-blue-600/80 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Resume & Theme Toggle) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold hover:opacity-95 shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg glass-panel border border-slate-700/50 dark:border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-slate-800 dark:border-white/10 px-4 pt-3 pb-6 space-y-2 mt-3"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-500/10 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-md"
              >
                <FileText className="w-4 h-4" />
                Resume (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret 5-Click Admin Password Popup */}
      <AdminPasswordModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </header>
  );
}
