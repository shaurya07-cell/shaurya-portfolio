"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillsData, SkillCategory, marqueeTechnologies } from "@/data/skills";
import { TechIcon } from "@/components/ui/TechIcon";
import {
  Code,
  Layout,
  Server,
  BrainCircuit,
  Database,
  Cloud,
  Wrench,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { key: "all", label: "All Technologies" },
    { key: "languages", label: "Programming" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "ai", label: "AI & ML" },
    { key: "databases", label: "Databases" },
    { key: "cloud", label: "Cloud & DevOps" },
    { key: "tools", label: "Developer Tools" },
  ];

  const getCategoryIcon = (categoryKey: string) => {
    const props = { className: "w-5 h-5" };
    switch (categoryKey) {
      case "languages":
        return <Code {...props} />;
      case "frontend":
        return <Layout {...props} />;
      case "backend":
        return <Server {...props} />;
      case "ai":
        return <BrainCircuit {...props} />;
      case "databases":
        return <Database {...props} />;
      case "cloud":
        return <Cloud {...props} />;
      case "tools":
        return <Wrench {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  const getAccentTheme = (accent: SkillCategory["accentColor"]) => {
    switch (accent) {
      case "blue":
        return {
          iconBox: "bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.25)]",
          badgeBorder: "hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] hover:bg-blue-500/10",
          cardBorder: "hover:border-blue-500/40",
          cardGradient: "from-blue-950/20 via-transparent to-transparent",
          activeTab: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25",
        };
      case "purple":
        return {
          iconBox: "bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)]",
          badgeBorder: "hover:border-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] hover:bg-purple-500/10",
          cardBorder: "hover:border-purple-500/40",
          cardGradient: "from-purple-950/20 via-transparent to-transparent",
          activeTab: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/25",
        };
      case "emerald":
        return {
          iconBox: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]",
          badgeBorder: "hover:border-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] hover:bg-emerald-500/10",
          cardBorder: "hover:border-emerald-500/40",
          cardGradient: "from-emerald-950/20 via-transparent to-transparent",
          activeTab: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25",
        };
      case "pink":
        return {
          iconBox: "bg-pink-500/10 border-pink-500/30 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.25)]",
          badgeBorder: "hover:border-pink-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.3)] hover:bg-pink-500/10",
          cardBorder: "hover:border-pink-500/40",
          cardGradient: "from-pink-950/20 via-transparent to-transparent",
          activeTab: "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md shadow-pink-500/25",
        };
      case "cyan":
        return {
          iconBox: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]",
          badgeBorder: "hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] hover:bg-cyan-500/10",
          cardBorder: "hover:border-cyan-500/40",
          cardGradient: "from-cyan-950/20 via-transparent to-transparent",
          activeTab: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25",
        };
      case "amber":
        return {
          iconBox: "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]",
          badgeBorder: "hover:border-amber-400 hover:shadow-[0_0_12px_rgba(245,158,11,0.3)] hover:bg-amber-500/10",
          cardBorder: "hover:border-amber-500/40",
          cardGradient: "from-amber-950/20 via-transparent to-transparent",
          activeTab: "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-500/25",
        };
      case "violet":
      default:
        return {
          iconBox: "bg-violet-500/10 border-violet-500/30 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.25)]",
          badgeBorder: "hover:border-violet-400 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] hover:bg-violet-500/10",
          cardBorder: "hover:border-violet-500/40",
          cardGradient: "from-violet-950/20 via-transparent to-transparent",
          activeTab: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25",
        };
    }
  };

  const filteredCategories =
    selectedFilter === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.categoryKey === selectedFilter);

  // Total technologies count
  const totalCount = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-28 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Heading */}
      <SectionHeading
        badge="Skills & Architecture"
        title="Skills & Technology Matrix"
        subtitle="A growing toolkit of programming languages, frameworks, AI technologies, and developer tools used to transform ideas into practical projects and real-world solutions."
      />

      {/* Category Filter Bar */}
      <div className="mt-10 mb-12 flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
        {filterTabs.map((tab) => {
          const isSelected = selectedFilter === tab.key;
          const count =
            tab.key === "all"
              ? totalCount
              : skillsData.find((c) => c.categoryKey === tab.key)?.skills.length || 0;

          return (
            <button
              key={tab.key}
              onClick={() => setSelectedFilter(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                isSelected
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/25 scale-105"
                  : "glass-panel border border-slate-700/60 dark:border-white/10 text-slate-400 hover:text-white hover:border-slate-500"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Matrix Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
      >
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat, idx) => {
            const theme = getAccentTheme(cat.accentColor);

            return (
              <motion.div
                key={cat.categoryKey}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`p-6 sm:p-7 rounded-3xl glass-panel border border-slate-700/60 dark:border-white/10 ${theme.cardBorder} transition-all duration-300 glow-card shadow-xl flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${theme.cardGradient}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl border ${theme.iconBox}`}>
                        {getCategoryIcon(cat.categoryKey)}
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-slate-900 dark:text-white text-lg tracking-tight">
                          {cat.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                          {cat.skills.length} Technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono font-medium bg-slate-900/60 dark:bg-white/[0.04] text-slate-200 border border-slate-700/60 dark:border-white/10 transition-all duration-200 ${theme.badgeBorder} hover:scale-105 shadow-sm cursor-default`}
                      >
                        <TechIcon name={skill.name} className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subdued Bottom Pill */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Hands-on Experience
                  </span>
                  <span className="uppercase tracking-wider opacity-70">
                    {cat.filterLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Infinite Moving Technology Ticker Marquee */}
      <div className="relative overflow-hidden py-4 rounded-2xl glass-panel border border-slate-700/50 dark:border-white/10">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050609] via-[#050609]/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050609] via-[#050609]/70 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-4">
          {[...marqueeTechnologies, ...marqueeTechnologies].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/70 dark:bg-white/5 border border-slate-700/40 dark:border-white/10 text-xs font-mono text-slate-200 shrink-0 hover:border-blue-400/50 transition-colors"
            >
              <TechIcon name={tech} className="w-4 h-4 shrink-0" />
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
