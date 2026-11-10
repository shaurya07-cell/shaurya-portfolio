"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { journeyMilestones, JourneyMilestone } from "@/data/journey";
import {
  GraduationCap,
  Compass,
  FileCheck,
  Target,
  Rocket,
  Terminal,
  Trophy,
  HeartPulse,
  TrendingUp,
  Sparkles,
  Megaphone,
  Shield,
  Award,
  Users,
  Zap,
  Flame,
  ChevronDown,
  Calendar,
  Layers,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";

interface AccentStyles {
  node: string;
  badge: string;
  ring: string;
  gradient: string;
}

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  // Animated scroll-filling line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const categories = [
    "All",
    "School & Foundations",
    "College & Academics",
    "Hackathons & Wins",
    "Leadership & Community",
  ];

  const filteredMilestones =
    selectedCategory === "All"
      ? journeyMilestones
      : journeyMilestones.filter((item) => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getMilestoneIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap {...props} />;
      case "Compass":
        return <Compass {...props} />;
      case "FileCheck":
        return <FileCheck {...props} />;
      case "Target":
        return <Target {...props} />;
      case "Rocket":
        return <Rocket {...props} />;
      case "Terminal":
        return <Terminal {...props} />;
      case "Trophy":
        return <Trophy {...props} />;
      case "HeartPulse":
        return <HeartPulse {...props} />;
      case "TrendingUp":
        return <TrendingUp {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Megaphone":
        return <Megaphone {...props} />;
      case "Shield":
        return <Shield {...props} />;
      case "Award":
        return <Award {...props} />;
      case "Users":
        return <Users {...props} />;
      case "Zap":
        return <Zap {...props} />;
      case "Flame":
        return <Flame {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const getAccentStyles = (accent: JourneyMilestone["accentColor"]) => {
    switch (accent) {
      case "cyan":
        return {
          node: "border-cyan-500/50 bg-[#061826] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.35)]",
          badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
          ring: "group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]",
          gradient: "from-cyan-500/10 via-transparent to-transparent",
        };
      case "indigo":
        return {
          node: "border-indigo-500/50 bg-[#0d122b] text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.35)]",
          badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
          ring: "group-hover:border-indigo-400 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]",
          gradient: "from-indigo-500/10 via-transparent to-transparent",
        };
      case "blue":
        return {
          node: "border-blue-500/50 bg-[#08152b] text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.35)]",
          badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
          ring: "group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]",
          gradient: "from-blue-500/10 via-transparent to-transparent",
        };
      case "amber":
        return {
          node: "border-amber-500/50 bg-[#241705] text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.35)]",
          badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
          ring: "group-hover:border-amber-400 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]",
          gradient: "from-amber-500/10 via-transparent to-transparent",
        };
      case "emerald":
        return {
          node: "border-emerald-500/50 bg-[#041f17] text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)]",
          badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
          ring: "group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]",
          gradient: "from-emerald-500/10 via-transparent to-transparent",
        };
      case "purple":
        return {
          node: "border-purple-500/50 bg-[#190a2a] text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.35)]",
          badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
          ring: "group-hover:border-purple-400 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]",
          gradient: "from-purple-500/10 via-transparent to-transparent",
        };
      case "rose":
        return {
          node: "border-rose-500/50 bg-[#250812] text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.35)]",
          badge: "bg-rose-500/10 text-rose-300 border-rose-500/30",
          ring: "group-hover:border-rose-400 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.4)]",
          gradient: "from-rose-500/10 via-transparent to-transparent",
        };
      case "orange":
        return {
          node: "border-orange-500/50 bg-[#261205] text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.35)]",
          badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
          ring: "group-hover:border-orange-400 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]",
          gradient: "from-orange-500/10 via-transparent to-transparent",
        };
      case "violet":
        return {
          node: "border-violet-500/50 bg-[#17092b] text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.35)]",
          badge: "bg-violet-500/10 text-violet-300 border-violet-500/30",
          ring: "group-hover:border-violet-400 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]",
          gradient: "from-violet-500/10 via-transparent to-transparent",
        };
      case "pink":
        return {
          node: "border-pink-500/50 bg-[#27081a] text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.35)]",
          badge: "bg-pink-500/15 text-pink-300 border-pink-500/30",
          ring: "group-hover:border-pink-400 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]",
          gradient: "from-pink-500/10 via-transparent to-transparent",
        };
      default:
        return {
          node: "border-blue-500/50 bg-[#08152b] text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.35)]",
          badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
          ring: "group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]",
          gradient: "from-blue-500/10 via-transparent to-transparent",
        };
    }
  };

  return (
    <section id="journey" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Backdrop Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Interactive Timeline & Evolution
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          My Evolution & Milestones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 text-base sm:text-lg font-medium text-blue-400 dark:text-blue-300"
        >
          &ldquo;From a curious student to an aspiring AI/ML developer, hackathon winner, and community leader.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto"
        >
          Every milestone has shaped who I am today. My journey hasn&apos;t been a straight line — it has been a combination of learning, experimenting, failures, comebacks, and achievements.
        </motion.p>

        {/* Phase Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All"
                ? journeyMilestones.length
                : journeyMilestones.filter((m) => m.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md shadow-blue-500/25 scale-105"
                    : "glass-panel border border-slate-700/60 dark:border-white/10 text-slate-400 hover:text-white hover:border-slate-500"
                }`}
              >
                <span>{cat}</span>
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
        </motion.div>
      </div>

      {/* Main Timeline Stream */}
      <div ref={containerRef} className="relative mt-12 pb-12">
        {/* Central Connecting Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-slate-800/80 dark:bg-white/10 rounded-full" />
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)] z-0"
        />

        {/* Left Connecting Line (Mobile & Tablet) */}
        <div className="md:hidden absolute left-5 top-4 bottom-8 w-[2px] bg-slate-800/80 dark:bg-white/10 rounded-full" />
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="md:hidden absolute left-5 top-4 bottom-8 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 via-purple-500 to-pink-500 rounded-full z-0"
        />

        {/* Milestones List */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = !!expandedIds[item.id];
              const styles = getAccentStyles(item.accentColor);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="relative group"
                >
                  {/* Desktop Layout: Alternating Row */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-14 items-center">
                    {/* Left Column */}
                    <div className={isEven ? "flex justify-end" : "text-right pr-4"}>
                      {isEven ? (
                        /* Card on the Left */
                        <TimelineCard
                          item={item}
                          styles={styles}
                          isExpanded={isExpanded}
                          onToggle={() => toggleExpand(item.id)}
                          align="right"
                        />
                      ) : (
                        /* Year and Category Meta on Left */
                        <TimelineMeta item={item} styles={styles} align="right" />
                      )}
                    </div>

                    {/* Right Column */}
                    <div className={!isEven ? "flex justify-start" : "text-left pl-4"}>
                      {!isEven ? (
                        /* Card on the Right */
                        <TimelineCard
                          item={item}
                          styles={styles}
                          isExpanded={isExpanded}
                          onToggle={() => toggleExpand(item.id)}
                          align="left"
                        />
                      ) : (
                        /* Year and Category Meta on Right */
                        <TimelineMeta item={item} styles={styles} align="left" />
                      )}
                    </div>

                    {/* Central Glowing Node on Timeline Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${styles.node} ${styles.ring}`}
                      >
                        {getMilestoneIcon(item.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout: Single Column with Left Line */}
                  <div className="md:hidden relative pl-12 sm:pl-14">
                    {/* Node on mobile left line */}
                    <div className="absolute left-5 -translate-x-1/2 top-4 z-10">
                      <div
                        className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${styles.node} ${styles.ring}`}
                      >
                        <div className="scale-75">{getMilestoneIcon(item.iconName)}</div>
                      </div>
                    </div>

                    {/* Card Container on Mobile */}
                    <TimelineCard
                      item={item}
                      styles={styles}
                      isExpanded={isExpanded}
                      onToggle={() => toggleExpand(item.id)}
                      align="left"
                      isMobile={true}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Inspiring Finale & Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-24 text-center max-w-3xl mx-auto"
      >
        <div className="relative p-8 sm:p-12 rounded-3xl glass-panel border border-purple-500/30 bg-gradient-to-b from-purple-950/25 via-slate-900/80 to-blue-950/30 shadow-2xl overflow-hidden">
          {/* Ambient Orbs */}
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-purple-500/30 text-purple-300 mb-5">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "7s" }} />
            <span>November 2026 & Beyond</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
            &ldquo;Still learning. Still building. Still becoming.&rdquo;
          </h3>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            The journey continues. More ideas to build, technologies to explore, communities to lead, and challenges to overcome.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xs font-semibold hover:opacity-95 shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore My Work</span>
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
    </section>
  );
}

// Subcomponent: Timeline Card
function TimelineCard({
  item,
  styles,
  isExpanded,
  onToggle,
  align,
  isMobile = false,
}: {
  item: JourneyMilestone;
  styles: AccentStyles;
  isExpanded: boolean;
  onToggle: () => void;
  align: "left" | "right";
  isMobile?: boolean;
}) {
  return (
    <div
      className={`w-full max-w-xl rounded-2xl p-6 glass-panel border border-slate-700/60 dark:border-white/10 transition-all duration-300 glow-card group-hover:border-slate-500 shadow-xl relative overflow-hidden bg-gradient-to-br ${styles.gradient} ${
        align === "right" && !isMobile ? "text-left" : "text-left"
      }`}
    >
      {/* Mobile Date Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-blue-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            {item.period}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800/80 dark:bg-white/5 border border-slate-700/50 dark:border-white/10 text-slate-400">
            {item.category}
          </span>
        </div>

        {/* Small Year Label for Quick Scannability */}
        <span className="font-mono text-[11px] font-semibold text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
          {item.yearLabel}
        </span>
      </div>

      {/* Special Highlight Achievement Badge */}
      {item.highlightBadge && (
        <div className="mb-3">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wide border shadow-sm transition-transform duration-200 hover:scale-105 ${styles.badge}`}
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30 shrink-0" />
            <span>{item.highlightBadge}</span>
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors leading-snug">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {item.description}
      </p>

      {/* Expandable Details / Personal Reflection */}
      {item.expandedDetails && (
        <div className="mt-3 pt-3 border-t border-slate-800/40 dark:border-white/5">
          <button
            onClick={onToggle}
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400 hover:text-blue-300 transition-colors group/btn"
          >
            <span>{isExpanded ? "Hide Reflection" : "Read Reflection & Impact"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-2.5 p-3 rounded-xl bg-slate-950/60 dark:bg-white/[0.03] border border-blue-500/20 text-xs text-slate-300 leading-relaxed font-mono">
                  <span className="text-blue-400 font-bold block mb-1">Key Takeaway & Evolution:</span>
                  {item.expandedDetails}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/50 dark:bg-white/5 text-slate-400 border border-slate-700/40 dark:border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Subcomponent: Timeline Meta info column on desktop
function TimelineMeta({
  item,
  styles,
  align,
}: {
  item: JourneyMilestone;
  styles: AccentStyles;
  align: "left" | "right";
}) {
  return (
    <div className={`space-y-1.5 ${align === "right" ? "pr-6 text-right" : "pl-6 text-left"}`}>
      <div className={`inline-block font-mono text-xl font-bold text-slate-900 dark:text-white`}>
        {item.period}
      </div>
      <div>
        <span
          className={`inline-block text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full ${styles.badge}`}
        >
          {item.category}
        </span>
      </div>
      {item.highlightBadge && (
        <div className={`pt-1 ${align === "right" ? "flex justify-end" : "flex justify-start"}`}>
          <span className="text-xs font-mono font-semibold text-amber-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {item.highlightBadge}
          </span>
        </div>
      )}
    </div>
  );
}
