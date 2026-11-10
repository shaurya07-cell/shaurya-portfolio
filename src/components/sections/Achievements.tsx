"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievementsData, AchievementItem } from "@/data/achievements";
import { AchievementBadgeGraphic } from "@/components/ui/AchievementBadgeGraphic";
import { ImageLightboxModal, LightboxImage } from "@/components/ui/ImageLightboxModal";
import {
  Trophy,
  Award,
  Medal,
  Sparkles,
  Star,
  Gamepad2,
  Calendar,
  Flame,
  Crown,
  Zap,
  ArrowRight,
  Camera,
  Github,
} from "lucide-react";

const filterTabs = [
  "All Achievements",
  "Hackathons",
  "Sports & Athletics",
  "Gaming & Esports",
  "College Recognition",
];

export function Achievements() {
  const [activeFilter, setActiveFilter] = useState<string>("All Achievements");
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: LightboxImage[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const handleOpenPhotos = (images: LightboxImage[], index: number = 0) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index,
    });
  };

  const filteredAchievements = achievementsData.filter((item) => {
    if (activeFilter === "All Achievements") return true;
    return item.category === activeFilter || item.categories.includes(activeFilter);
  });

  const getAccentConfig = (accent: AchievementItem["accentColor"]) => {
    switch (accent) {
      case "gold":
        return {
          cardBorder: "hover:border-amber-400/60",
          cardGradient: "from-amber-950/25 via-slate-900/80 to-yellow-950/20",
          badge: "bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]",
          glowOrb: "bg-amber-500/15",
          highlightText: "text-amber-400",
        };
      case "cyan":
        return {
          cardBorder: "hover:border-cyan-400/60",
          cardGradient: "from-cyan-950/25 via-slate-900/80 to-blue-950/20",
          badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]",
          glowOrb: "bg-cyan-500/15",
          highlightText: "text-cyan-400",
        };
      case "rose":
        return {
          cardBorder: "hover:border-rose-400/60",
          cardGradient: "from-rose-950/25 via-slate-900/80 to-pink-950/20",
          badge: "bg-rose-500/15 text-rose-300 border-rose-500/40 shadow-[0_0_12px_rgba(244,63,94,0.25)]",
          glowOrb: "bg-rose-500/15",
          highlightText: "text-rose-400",
        };
      case "purple":
        return {
          cardBorder: "hover:border-purple-400/60",
          cardGradient: "from-purple-950/25 via-slate-900/80 to-indigo-950/20",
          badge: "bg-purple-500/15 text-purple-300 border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.25)]",
          glowOrb: "bg-purple-500/15",
          highlightText: "text-purple-400",
        };
      case "emerald":
        return {
          cardBorder: "hover:border-emerald-400/60",
          cardGradient: "from-emerald-950/25 via-slate-900/80 to-teal-950/20",
          badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]",
          glowOrb: "bg-emerald-500/15",
          highlightText: "text-emerald-400",
        };
      case "amber":
      default:
        return {
          cardBorder: "hover:border-amber-400/60",
          cardGradient: "from-amber-950/25 via-slate-900/80 to-orange-950/20",
          badge: "bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]",
          glowOrb: "bg-amber-500/15",
          highlightText: "text-amber-400",
        };
    }
  };

  return (
    <section id="achievements" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Heading */}
      <SectionHeading
        badge="Victories & Honors"
        title="Key Achievements & Hackathons"
        subtitle="Every competition, victory, and recognition represents a step forward in my journey — from building innovative AI solutions to competitive gaming and making an impact in my college community."
      />

      {/* Category Filter Tabs */}
      <div className="mt-10 mb-12 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {filterTabs.map((tab) => {
          const isSelected = activeFilter === tab;
          const count =
            tab === "All Achievements"
              ? achievementsData.length
              : achievementsData.filter(
                  (a) => a.category === tab || a.categories.includes(tab)
                ).length;

          return (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 ${
                isSelected
                  ? "bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white shadow-lg shadow-amber-500/25 scale-105"
                  : "glass-panel border border-slate-700/60 dark:border-white/10 text-slate-400 hover:text-white hover:border-slate-500"
              }`}
            >
              <span>{tab}</span>
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

      {/* Achievements Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredAchievements.map((item, idx) => {
            const config = getAccentConfig(item.accentColor);

            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`p-6 sm:p-7 rounded-3xl glass-panel border border-slate-700/60 dark:border-white/10 ${config.cardBorder} transition-all duration-300 glow-card shadow-2xl flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${config.cardGradient} group`}
              >
                {/* Subtle Ambient Glow inside Card */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 ${config.glowOrb} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />

                <div className="space-y-4 relative z-10">
                  {/* Top Header: Order Number, Date & Prize Pool */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-400 bg-slate-900/80 dark:bg-white/5 px-2.5 py-0.5 rounded-md border border-slate-700/60 dark:border-white/10">
                        {item.orderNumber}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.prizePool && (
                        <span className="font-mono text-xs font-extrabold text-amber-300 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/40 shadow-sm animate-pulse">
                          💰 {item.prizePool}
                        </span>
                      )}

                      <span className="font-mono text-xs font-semibold text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* Visual Graphic & Standing Header */}
                  <div className="flex items-start gap-4 pt-1">
                    {/* Custom SVG Graphic */}
                    <div className="shrink-0 p-2 rounded-2xl bg-slate-950/80 dark:bg-black/40 border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <AchievementBadgeGraphic type={item.graphicType} className="w-12 h-12" />
                    </div>

                    <div>
                      {/* Ranking Badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-bold tracking-wide border shadow-sm ${config.badge}`}
                      >
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
                        <span>{item.achievement}</span>
                      </span>

                      <h3 className="text-lg sm:text-xl font-heading font-extrabold text-slate-900 dark:text-white mt-2 leading-snug group-hover:text-amber-400 transition-colors tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>

                  {/* Clean Event Photo Preview */}
                  {item.photos && item.photos.length > 0 && (
                    <div className="mt-3.5 mb-1">
                      <div
                        onClick={() =>
                          handleOpenPhotos(
                            item.photos!.map((p) => ({
                              src: p.src,
                              caption: p.caption,
                              title: item.title,
                              category: item.category,
                            })),
                            0
                          )
                        }
                        className="group/photo relative w-full h-36 sm:h-40 rounded-2xl overflow-hidden border border-slate-700/60 dark:border-white/10 bg-slate-900/80 cursor-pointer shadow-md hover:border-amber-400/50 hover:shadow-amber-500/10 transition-all"
                      >
                        <img
                          src={encodeURI(item.photos[0].src)}
                          alt={item.photos[0].caption || item.title}
                          className="w-full h-full object-cover object-center group-hover/photo:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent flex items-end justify-between p-3 pointer-events-none">
                          <span className="text-[11px] font-medium text-slate-200 truncate pr-2">
                            {item.photos[0].caption}
                          </span>
                          <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/90 text-slate-950 font-bold backdrop-blur-sm shadow flex items-center gap-1">
                            <Camera className="w-3 h-3" />
                            View Photo
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Footer Badge */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
                  <span className="text-[11px] text-amber-400/90 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-all text-[10px]"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    )}
                    {item.organization && (
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                        {item.organization}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Inspiring Finale & Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-24 text-center max-w-3xl mx-auto"
      >
        <div className="relative p-8 sm:p-12 rounded-3xl glass-panel border border-amber-500/30 bg-gradient-to-b from-amber-950/20 via-slate-900/80 to-purple-950/25 shadow-2xl overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-amber-500/15 to-purple-500/15 border border-amber-500/30 text-amber-300 mb-5">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Competitive Spirit & Innovation</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
            &ldquo;Still competing. Still creating. Still winning.&rdquo;
          </h3>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            From technical hackathons and code sprint victories to collegiate competitive esports leadership — every arena tests strategy, teamwork, and execution under pressure.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white text-xs font-semibold hover:opacity-95 shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore Winning Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-slate-700/60 dark:border-white/10 text-white text-xs font-semibold hover:bg-white/10 hover:border-slate-500 transition-all"
            >
              <span>Connect With Me</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal for Photo Preview */}
      <ImageLightboxModal
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        onNavigate={(idx) => setLightboxState((prev) => ({ ...prev, currentIndex: idx }))}
      />
    </section>
  );
}
