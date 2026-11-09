"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceData, ExperienceItem } from "@/data/experience";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
  Globe,
  Star,
  ExternalLink,
  Code2,
  Cpu,
} from "lucide-react";

export function Experience() {
  const getExperienceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
      case "Award":
        return <Award {...props} />;
      case "Globe":
        return <Globe {...props} />;
      case "Briefcase":
        return <Briefcase {...props} />;
      default:
        return <Briefcase {...props} />;
    }
  };

  const getAccentConfig = (accent: ExperienceItem["accentColor"]) => {
    switch (accent) {
      case "emerald":
        return {
          iconBox: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
          typeBadge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
          cardBorder: "hover:border-emerald-500/40",
          gradient: "from-emerald-950/20 via-transparent to-transparent",
          highlightBadge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
          techBadge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/20",
        };
      case "amber":
        return {
          iconBox: "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]",
          typeBadge: "bg-amber-500/10 text-amber-300 border-amber-500/30",
          cardBorder: "hover:border-amber-500/40",
          gradient: "from-amber-950/20 via-transparent to-transparent",
          highlightBadge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
          techBadge: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:border-amber-500/40 hover:bg-amber-500/20",
        };
      case "blue":
      default:
        return {
          iconBox: "bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]",
          typeBadge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
          cardBorder: "hover:border-blue-500/40",
          gradient: "from-blue-950/20 via-transparent to-transparent",
          highlightBadge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
          techBadge: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/20",
        };
    }
  };

  return (
    <section id="experience" className="py-24 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Heading */}
      <SectionHeading
        badge="Career Experience"
        title="Professional Work & Experience"
        subtitle="Turning ideas into real-world solutions through hands-on development, professional experience, and continuous learning."
      />

      {/* Experience Cards Stack */}
      <div className="space-y-8 mt-12">
        {experienceData.map((exp, index) => {
          const config = getAccentConfig(exp.accentColor);

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`p-6 sm:p-8 rounded-3xl glass-panel border border-slate-700/60 dark:border-white/10 ${config.cardBorder} transition-all duration-300 glow-card shadow-2xl relative overflow-hidden bg-gradient-to-br ${config.gradient}`}
            >
              {/* Top Bar: Icon, Titles & Meta Badges */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 dark:border-white/10 pb-6 mb-6">
                <div className="flex items-start gap-4">
                  {/* Icon Node */}
                  <div className={`p-3.5 rounded-2xl border ${config.iconBox} shrink-0`}>
                    {getExperienceIcon(exp.iconName)}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${config.typeBadge}`}
                      >
                        {exp.type}
                      </span>

                      {/* Special Highlight Badge (e.g. Flora AI hackathon winner, Internship, etc.) */}
                      {exp.highlightBadge && (
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono font-bold border shadow-sm ${config.highlightBadge}`}
                        >
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span>{exp.highlightBadge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {exp.role}
                    </h3>

                    <p className="text-sm sm:text-base font-semibold text-blue-400 dark:text-blue-300 mt-0.5">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                {/* Duration & Location Badges */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-400 pt-1 lg:pt-0">
                  <span className="inline-flex items-center gap-1.5 bg-slate-900/60 dark:bg-white/5 px-3.5 py-1.5 rounded-full border border-slate-700/60 dark:border-white/10 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.duration}</span>
                  </span>

                  {exp.location && (
                    <span className="inline-flex items-center gap-1.5 bg-slate-900/60 dark:bg-white/5 px-3.5 py-1.5 rounded-full border border-slate-700/60 dark:border-white/10 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{exp.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Description Paragraph */}
              <div className="mb-6">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Two-Column Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Key Responsibilities & Highlights */}
                <div className="lg:col-span-7 space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    Key Contributions & Engineering:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Key Milestones & Tech Stack */}
                <div className="lg:col-span-5 space-y-5 bg-slate-950/40 dark:bg-white/[0.02] p-5 rounded-2xl border border-slate-800/80 dark:border-white/5 flex flex-col justify-between">
                  {/* Milestones / Impact */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2.5">
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Key Impact & Recognition:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="pt-3 border-t border-slate-800/80 dark:border-white/10">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                      Tech Stack & Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition-all duration-200 border ${config.techBadge}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
