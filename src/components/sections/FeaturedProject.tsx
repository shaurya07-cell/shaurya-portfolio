"use client";

import { motion } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projects";
import { ExternalLink, Github, Sparkles, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { ProjectIllustration } from "@/components/ui/ProjectIllustration";
import { TechIcon } from "@/components/ui/TechIcon";

interface FeaturedProjectProps {
  onOpenModal: (project: ProjectItem) => void;
}

export function FeaturedProject({ onOpenModal }: FeaturedProjectProps) {
  const featured = projectsData.find((p) => p.featured) || projectsData[0];

  return (
    <section className="py-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl glass-panel border border-cyan-500/30 p-6 sm:p-10 lg:p-12 overflow-hidden bg-gradient-to-br from-cyan-950/25 via-slate-900/80 to-blue-950/30 shadow-2xl">
        {/* Ambient Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column: Story & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Flagship Cybersecurity Engineering Project</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
                {featured.title}
              </h2>
              <p className="text-sm font-mono text-cyan-400 mt-1 font-semibold">{featured.tagline}</p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {featured.description}
            </p>

            {/* Key Features List */}
            <div className="space-y-2 pt-1">
              {featured.keyFeatures.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {featured.technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900/80 dark:bg-white/5 text-slate-200 border border-slate-700/60 dark:border-white/10"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={() => onOpenModal(featured)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Architecture & Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel border border-slate-700/60 dark:border-white/10 text-xs font-mono font-bold text-slate-200 hover:text-white hover:border-slate-500 transition-all hover:scale-105 active:scale-95"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              {featured.liveDemo && (
                <a
                  href={featured.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel border border-slate-700/60 dark:border-white/10 text-xs font-mono font-bold text-slate-200 hover:text-white hover:border-slate-500 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Platform</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: Custom Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div
              onClick={() => onOpenModal(featured)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-slate-950 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400"
            >
              <div className="aspect-[16/10] w-full">
                <ProjectIllustration slug={featured.slug} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                  AST Static Analysis + Gemini AI Defense
                </span>
                <span className="text-[11px] font-mono text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Specs <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
