"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/data/personal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Sparkles,
  MapPin,
  Terminal,
} from "lucide-react";

interface HeroProps {
  onOpenResume?: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtitle switcher interval
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalData.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Interactive Particle Canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 25), 60);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle nodes and connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - mdist / 150)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid"
    >
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70 w-full max-w-full"
      />

      {/* Radial Gradient Glow background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] max-w-[95vw] h-[600px] max-h-[95vw] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{personalData.availability}</span>
        </motion.div>

        {/* Name Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4 break-words">
            Hello, I&apos;m{" "}
            <span className="text-gradient hover:opacity-90 transition-opacity block sm:inline">
              {personalData.name}
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Animated Subtitle */}
        <div className="h-12 sm:h-14 flex items-center justify-center overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={titleIndex}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xl sm:text-3xl font-heading font-semibold text-blue-400 dark:text-blue-400"
            >
              <Terminal className="w-6 h-6 text-purple-400 hidden sm:block" />
              <span>{personalData.titles[titleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Short Introduction Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {personalData.shortIntro}
        </motion.p>

        {/* Personal Brand Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto mb-10 p-4 rounded-2xl glass-panel border border-blue-500/20 bg-blue-950/10 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium italic shadow-inner"
        >
          {personalData.brandStatement}
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-full"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full glass-panel border border-slate-700 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs sm:text-sm hover:bg-slate-800/20 dark:hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>Resume (PDF)</span>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            {personalData.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="p-3 sm:p-3.5 rounded-full glass-panel border border-slate-700 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-white hover:border-blue-400 hover:scale-110 active:scale-95 transition-all"
              >
                <SocialIcon iconName={social.iconName} className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Location & Quick Specs Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4 text-xs font-mono text-slate-400"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>{personalData.location}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Computer Science Major</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
