"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardTilt } from "@/components/ui/CardTilt";
import { projectsData, ProjectItem } from "@/data/projects";
import { ProjectIllustration } from "@/components/ui/ProjectIllustration";
import { TechIcon } from "@/components/ui/TechIcon";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  Search,
  X,
  ChevronDown,
  ShieldCheck,
  Trophy,
  Layers,
  Lightbulb,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";

interface ProjectsProps {
  onOpenModal: (project: ProjectItem) => void;
}

const filterCategories = [
  "All",
  "AI/ML",
  "Web Development",
  "Cybersecurity",
  "EdTech",
  "Healthcare",
];

export function Projects({ onOpenModal }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" ||
      p.category === selectedCategory ||
      p.categories.includes(selectedCategory);

    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some((tech) => tech.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  const getStatusBadge = (project: ProjectItem) => {
    switch (project.slug) {
      case "sentinel-ai":
        return {
          icon: <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />,
          label: "Flagship Cybersecurity",
          style: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
        };
      case "flora-ai":
        return {
          icon: <Trophy className="w-3.5 h-3.5 text-amber-400" />,
          label: "Hackathon Winner",
          style: "bg-amber-500/15 text-amber-300 border-amber-500/30",
        };
      case "easeattend":
        return {
          icon: <Layers className="w-3.5 h-3.5 text-amber-400" />,
          label: "3-Dashboard Architecture",
          style: "bg-amber-500/10 text-amber-300 border-amber-500/30",
        };
      case "explainme":
        return {
          icon: <Lightbulb className="w-3.5 h-3.5 text-purple-400" />,
          label: "Conceptual AI Project",
          style: "bg-purple-500/10 text-purple-300 border-purple-500/30",
        };
      case "mediplus":
        return {
          icon: <HeartPulse className="w-3.5 h-3.5 text-rose-400" />,
          label: "Conceptual Healthcare",
          style: "bg-rose-500/10 text-rose-300 border-rose-500/30",
        };
      default:
        return {
          icon: <Sparkles className="w-3.5 h-3.5 text-blue-400" />,
          label: project.status,
          style: "bg-blue-500/10 text-blue-300 border-blue-500/30",
        };
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Heading */}
      <SectionHeading
        badge="Engineering Showcase"
        title="Featured Engineering Projects"
        subtitle="From AI-powered platforms to intelligent developer tools and real-world applications — a collection of ideas I've transformed into working solutions through experimentation, engineering, and innovation."
      />

      {/* Controls: Search Bar & Category Filter Pills */}
      <div className="space-y-6 mb-12 max-w-4xl mx-auto">
        {/* Realtime Search Input */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-blue-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project name, tech (e.g. Gemini, Python)..."
            className="w-full pl-11 pr-10 py-2.5 rounded-full glass-panel border border-slate-700/60 dark:border-white/10 bg-slate-900/60 text-xs font-mono text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all shadow-lg"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All"
                ? projectsData.length
                : projectsData.filter(
                    (p) => p.category === cat || p.categories.includes(cat)
                  ).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "glass-panel border border-slate-700/50 dark:border-white/10 text-slate-400 hover:text-white hover:border-slate-500"
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
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const badge = getStatusBadge(project);
            const isExpanded = !!expandedCards[project.id];

            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <CardTilt className="h-full">
                  <div
                    onClick={() => onOpenModal(project)}
                    className="group cursor-pointer h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl glass-panel border border-slate-700/60 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300 glow-card shadow-2xl relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      {/* Project Visual Thumbnail / Vector Architecture Illustration */}
                      <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 dark:border-white/10 shadow-inner group-hover:border-slate-700 transition-colors">
                        <ProjectIllustration slug={project.slug} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900/90 text-white border border-white/10 shadow-md">
                            {project.category}
                          </span>
                        </div>

                        {/* Status / Achievement Badge */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${badge.style}`}
                          >
                            {badge.icon}
                            <span>{badge.label}</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-heading font-extrabold text-slate-900 dark:text-white text-xl group-hover:text-blue-400 transition-colors tracking-tight">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                        </div>
                        <p className="text-xs font-mono font-semibold text-blue-400 mt-1 line-clamp-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Expandable Key Features Toggle */}
                      {project.keyFeatures && project.keyFeatures.length > 0 && (
                        <div className="pt-2 border-t border-slate-800/60 dark:border-white/5">
                          <button
                            onClick={(e) => toggleExpand(project.id, e)}
                            className="flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <span>{isExpanded ? "Hide Features" : "View Key Features"}</span>
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
                                <ul className="mt-2.5 space-y-1.5 text-xs text-slate-300 font-mono bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                                  {project.keyFeatures.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                      <span>{feat}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    {/* Bottom Area: Tech Stack Pills & Action Buttons */}
                    <div className="pt-5 mt-4 border-t border-slate-800/60 dark:border-white/10 space-y-4">
                      {/* Technologies with Official SVG Icons */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-slate-900/80 dark:bg-white/5 text-slate-300 border border-slate-700/50 dark:border-white/5 hover:border-slate-500 transition-colors"
                          >
                            <TechIcon name={tech} className="w-3 h-3" />
                            <span>{tech}</span>
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 rounded-lg text-[10px] font-mono text-slate-400 bg-slate-800/40 border border-slate-700/40">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <button
                          onClick={() => onOpenModal(project)}
                          className="text-xs font-mono font-semibold text-blue-400 hover:text-white transition-colors flex items-center gap-1"
                        >
                          <span>Project Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label="GitHub Profile"
                              title="GitHub Profile"
                              className="p-2 rounded-xl bg-slate-800/60 dark:bg-white/5 border border-slate-700/60 dark:border-white/10 text-slate-300 hover:text-white hover:border-blue-400 transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}

                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label="Live Demo"
                              title="Live Demo"
                              className="p-2 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardTilt>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
