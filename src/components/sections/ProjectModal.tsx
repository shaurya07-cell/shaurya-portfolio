"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/data/projects";
import { ProjectIllustration } from "@/components/ui/ProjectIllustration";
import { TechIcon } from "@/components/ui/TechIcon";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Wrench,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[220] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-3xl border border-slate-700/80 dark:border-white/15 bg-[#0b0f17]/95 dark:bg-[#07090e]/95 shadow-2xl overflow-y-auto z-10 p-6 sm:p-8 space-y-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full glass-panel border border-slate-700 dark:border-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-10">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">• {project.year}</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-blue-400 font-semibold">{project.tagline}</p>
          </div>

          {/* Visual Banner */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 dark:border-white/10 bg-slate-950 shadow-2xl">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            ) : (
              <ProjectIllustration slug={project.slug} />
            )}
          </div>

          {/* Deep-Dive Narrative: Problem -> Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Problem */}
            <div className="p-5 rounded-2xl glass-panel border border-rose-500/20 bg-rose-950/10 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>1. Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-5 rounded-2xl glass-panel border border-emerald-500/20 bg-emerald-950/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>2. The Solution & Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Role & Engineering Challenges */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl glass-panel border border-blue-500/20 bg-blue-950/10 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase">
                <Wrench className="w-4 h-4" />
                <span>3. My Role & Engineering Challenges</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                <strong className="text-white">Role:</strong> {project.myRole}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-mono mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Result */}
            <div className="p-5 rounded-2xl glass-panel border border-amber-500/20 bg-amber-950/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                <Rocket className="w-4 h-4" />
                <span>4. Outcome & Technical Recognition</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-semibold">
                {project.result}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold block">
              Key Application Features:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 dark:bg-white/5 border border-slate-800 dark:border-white/5 text-xs text-slate-300 font-mono"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2.5">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold block">
              Tech Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-900/80 dark:bg-white/5 text-slate-200 border border-slate-700/60 dark:border-white/10"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 dark:border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 shadow-md transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Live Demo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel border border-slate-700 dark:border-white/10 text-xs font-bold text-slate-200 hover:text-white hover:border-slate-500 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
