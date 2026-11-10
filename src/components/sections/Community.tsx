"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  leadershipStats,
  communityExperiences,
  CommunityExperience,
} from "@/data/community";
import { ImageLightboxModal, LightboxImage } from "@/components/ui/ImageLightboxModal";
import {
  Sparkles,
  Users,
  Presentation,
  Cpu,
  Megaphone,
  Zap,
  Cloud,
  Trophy,
  Calendar,
  Star,
  Award,
  CheckCircle2,
  HeartHandshake,
  Camera,
} from "lucide-react";

interface AccentStyleConfig {
  node: string;
  badge: string;
  ring: string;
  gradient: string;
  highlightBadge: string;
}

export function Community() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Scroll physics for vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const getExperienceIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Users":
        return <Users {...props} />;
      case "Presentation":
        return <Presentation {...props} />;
      case "Cpu":
        return <Cpu {...props} />;
      case "Megaphone":
        return <Megaphone {...props} />;
      case "Zap":
        return <Zap {...props} />;
      case "Cloud":
        return <Cloud {...props} />;
      case "Trophy":
        return <Trophy {...props} />;
      default:
        return <HeartHandshake {...props} />;
    }
  };

  const getAccentConfig = (accent: CommunityExperience["accentColor"]): AccentStyleConfig => {
    switch (accent) {
      case "indigo":
        return {
          node: "border-indigo-500/50 bg-[#0d122b] text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.35)]",
          badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
          ring: "group-hover:border-indigo-400 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]",
          gradient: "from-indigo-950/20 via-transparent to-transparent",
          highlightBadge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
        };
      case "violet":
        return {
          node: "border-violet-500/50 bg-[#17092b] text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.35)]",
          badge: "bg-violet-500/10 text-violet-300 border-violet-500/30",
          ring: "group-hover:border-violet-400 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]",
          gradient: "from-violet-950/20 via-transparent to-transparent",
          highlightBadge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
        };
      case "pink":
        return {
          node: "border-pink-500/50 bg-[#27081a] text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.35)]",
          badge: "bg-pink-500/10 text-pink-300 border-pink-500/30",
          ring: "group-hover:border-pink-400 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]",
          gradient: "from-pink-950/20 via-transparent to-transparent",
          highlightBadge: "bg-pink-500/15 text-pink-300 border-pink-500/30",
        };
      case "blue":
        return {
          node: "border-blue-500/50 bg-[#08152b] text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.35)]",
          badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
          ring: "group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]",
          gradient: "from-blue-950/20 via-transparent to-transparent",
          highlightBadge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
        };
      case "emerald":
        return {
          node: "border-emerald-500/50 bg-[#041f17] text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)]",
          badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
          ring: "group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]",
          gradient: "from-emerald-950/20 via-transparent to-transparent",
          highlightBadge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        };
      case "amber":
        return {
          node: "border-amber-500/50 bg-[#241705] text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.35)]",
          badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
          ring: "group-hover:border-amber-400 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]",
          gradient: "from-amber-950/20 via-transparent to-transparent",
          highlightBadge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
        };
      case "cyan":
      default:
        return {
          node: "border-cyan-500/50 bg-[#061826] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.35)]",
          badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
          ring: "group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]",
          gradient: "from-cyan-950/20 via-transparent to-transparent",
          highlightBadge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
        };
    }
  };

  return (
    <section id="community" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Heading */}
      <SectionHeading
        badge="Community Impact"
        title="Leadership & Community Building"
        subtitle="Empowering student developers, organizing technical events, leading communities, and creating opportunities for collaboration, innovation, and learning."
      />

      {/* Numerical Highlights & Impact Counters */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 mb-20 max-w-6xl mx-auto">
        {leadershipStats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-700/60 dark:border-white/10 glow-card text-center relative overflow-hidden group hover:border-slate-500 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center justify-center mb-3">
              <div className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-white/5 border border-slate-700/50 dark:border-white/10 text-blue-400 group-hover:scale-110 transition-transform">
                {getExperienceIcon(stat.iconName)}
              </div>
            </div>

            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-gradient mb-1">
              {stat.value}
            </div>

            <div className="font-heading font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
              {stat.label}
            </div>

            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Interactive Timeline Stream */}
      <div ref={containerRef} className="relative mt-12 pb-8">
        {/* Desktop Central Vertical Line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-slate-800/80 dark:bg-white/10 rounded-full" />
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.6)] z-0"
        />

        {/* Mobile Left Vertical Line */}
        <div className="md:hidden absolute left-5 top-4 bottom-8 w-[2px] bg-slate-800/80 dark:bg-white/10 rounded-full" />
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="md:hidden absolute left-5 top-4 bottom-8 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 rounded-full z-0"
        />

        {/* Timeline Experiences */}
        <div className="space-y-12 sm:space-y-16">
          {communityExperiences.map((item, index) => {
            const isEven = index % 2 === 0;
            const config = getAccentConfig(item.accentColor);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="relative group"
              >
                {/* Desktop Alternating Row */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-14 items-center">
                  {/* Left Column */}
                  <div className={isEven ? "flex justify-end" : "text-right pr-4"}>
                    {isEven ? (
                      <CommunityCard item={item} config={config} align="right" onOpenPhotos={handleOpenPhotos} />
                    ) : (
                      <CommunityMeta item={item} config={config} align="right" />
                    )}
                  </div>

                  {/* Right Column */}
                  <div className={!isEven ? "flex justify-start" : "text-left pl-4"}>
                    {!isEven ? (
                      <CommunityCard item={item} config={config} align="left" onOpenPhotos={handleOpenPhotos} />
                    ) : (
                      <CommunityMeta item={item} config={config} align="left" />
                    )}
                  </div>

                  {/* Central Timeline Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${config.node} ${config.ring}`}
                    >
                      {getExperienceIcon(item.iconName)}
                    </div>
                  </div>
                </div>

                {/* Mobile Single Column */}
                <div className="md:hidden relative pl-12 sm:pl-14">
                  <div className="absolute left-5 -translate-x-1/2 top-4 z-10">
                    <div
                      className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${config.node} ${config.ring}`}
                    >
                      <div className="scale-75">{getExperienceIcon(item.iconName)}</div>
                    </div>
                  </div>

                  <CommunityCard item={item} config={config} align="left" isMobile={true} onOpenPhotos={handleOpenPhotos} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

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

// Subcomponent: Community Card
function CommunityCard({
  item,
  config,
  align,
  isMobile = false,
  onOpenPhotos,
}: {
  item: CommunityExperience;
  config: AccentStyleConfig;
  align: "left" | "right";
  isMobile?: boolean;
  onOpenPhotos?: (images: LightboxImage[], index: number) => void;
}) {
  return (
    <div
      className={`w-full max-w-xl rounded-3xl p-6 sm:p-7 glass-panel border border-slate-700/60 dark:border-white/10 transition-all duration-300 glow-card group-hover:border-slate-500 shadow-2xl relative overflow-hidden bg-gradient-to-br ${config.gradient} ${
        align === "right" && !isMobile ? "text-left" : "text-left"
      }`}
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-slate-400 bg-slate-900/80 dark:bg-white/5 px-2.5 py-0.5 rounded-md border border-slate-700/50 dark:border-white/10">
            {item.orderNumber}
          </span>
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border font-semibold bg-slate-900/60 text-slate-300 border-slate-700/60 dark:border-white/10">
            {item.category}
          </span>
        </div>

        {item.year && (
          <span className="font-mono text-xs font-semibold text-blue-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {item.year}
          </span>
        )}
      </div>

      {/* Special Numerical / Impact Highlight Badge */}
      {item.highlight && (
        <div className="mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-bold tracking-wide border shadow-sm transition-transform duration-200 hover:scale-105 ${config.highlightBadge}`}
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
            <span>{item.highlight}</span>
          </span>
        </div>
      )}

      {/* Event / Initiative Name */}
      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors leading-snug tracking-tight">
        {item.event}
      </h3>

      {/* Role Title */}
      <div className="mt-1 text-sm font-semibold font-mono text-blue-400 dark:text-blue-300">
        {item.role}
      </div>

      {/* Event Photo Preview (Clean & Elegant) */}
      {item.photos && item.photos.length > 0 && onOpenPhotos && (
        <div className="mt-3.5 mb-2">
          <div
            onClick={() =>
              onOpenPhotos(
                item.photos!.map((p) => ({
                  src: p.src,
                  caption: p.caption,
                  title: item.event,
                  category: item.category,
                })),
                0
              )
            }
            className="group/photo relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-slate-700/60 dark:border-white/10 bg-slate-900/80 cursor-pointer shadow-md hover:border-blue-400/50 hover:shadow-blue-500/10 transition-all"
          >
            <img
              src={encodeURI(item.photos[0].src)}
              alt={item.photos[0].caption || item.event}
              className="w-full h-full object-cover object-center group-hover/photo:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            {/* Gradient Overlay & Badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent flex flex-col justify-end p-3 pointer-events-none">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-slate-200 truncate">
                  {item.photos[0].caption}
                </span>
                <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-600/90 text-white font-semibold backdrop-blur-sm shadow flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  {item.photos.length > 1 ? `${item.photos.length} Photos` : "Expand"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Description */}
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {item.description}
      </p>

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60 dark:border-white/5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/60 dark:bg-white/5 text-slate-400 border border-slate-700/40 dark:border-white/5 hover:border-slate-500 hover:text-slate-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Subcomponent: Community Meta side column for Desktop
function CommunityMeta({
  item,
  config,
  align,
}: {
  item: CommunityExperience;
  config: AccentStyleConfig;
  align: "left" | "right";
}) {
  return (
    <div className={`space-y-1.5 ${align === "right" ? "pr-6 text-right" : "pl-6 text-left"}`}>
      <span className="font-mono text-2xl font-extrabold text-slate-400 dark:text-slate-500 block">
        {item.orderNumber}
      </span>
      {item.year && (
        <div
          className={`font-mono text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 ${
            align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          <Calendar className="w-4 h-4 text-blue-400" />
          <span>{item.year}</span>
        </div>
      )}
      <div>
        <span
          className={`inline-block text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${config.badge}`}
        >
          {item.role}
        </span>
      </div>
      {item.highlight && (
        <div className={`pt-1 ${align === "right" ? "flex justify-end" : "flex justify-start"}`}>
          <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {item.highlight}
          </span>
        </div>
      )}
    </div>
  );
}
