"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalData } from "@/data/personal";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Users,
  Target,
  BookOpen,
  Hammer,
  Compass,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export function About() {
  const quickCards = [
    {
      icon: <MapPin className="w-5 h-5 text-rose-400" />,
      label: "Location",
      value: personalData.location,
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      label: "Education",
      value: "B.Tech CSE AI/ML",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      label: "Experience",
      value: "Code Alpha Intern",
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      label: "Projects",
      value: "8+ Applications Built",
    },
    {
      icon: <Users className="w-5 h-5 text-purple-400" />,
      label: "Community",
      value: "600+ Students Reached",
    },
    {
      icon: <Target className="w-5 h-5 text-pink-400" />,
      label: "Current Focus",
      value: "AI & Agentic AI",
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SectionHeading
        badge="About Me"
        title="Engineering Solutions with Passion & Precision"
        subtitle="A look into my technical philosophy, background, and what drives me every day."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Avatar Profile Box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          <div className="relative group">
            {/* Animated Rotating Gradient Aura */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden glass-panel border border-slate-700/60 dark:border-white/10 shadow-2xl">
              <Image
                src={personalData.avatarUrl}
                alt={personalData.name}
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available for Hire
                </span>
                <p className="font-heading font-bold text-white text-lg">{personalData.name}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Story & Quick Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            {personalData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            {quickCards.map((card, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl glass-panel border border-slate-700/40 dark:border-white/10 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  {card.icon}
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {card.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          {/* "Currently" Live Widget */}
          <div className="p-5 rounded-2xl glass-panel border border-blue-500/30 bg-gradient-to-br from-blue-950/20 via-purple-950/10 to-transparent shadow-lg space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
              <span>Live Status — Currently</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-mono">Learning:</span>
                  <p className="font-medium text-slate-200">{personalData.currently.learning}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Hammer className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-mono">Building:</span>
                  <p className="font-medium text-slate-200">{personalData.currently.building}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-mono">Exploring:</span>
                  <p className="font-medium text-slate-200">{personalData.currently.exploring}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-mono">Current Goal:</span>
                  <p className="font-medium text-slate-200">{personalData.currently.goal}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
