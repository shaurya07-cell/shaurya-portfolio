"use client";

import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/data/personal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { skillsData } from "@/data/skills";
import {
  X,
  Printer,
  Copy,
  Check,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalData.name.toUpperCase()}
${personalData.title}
Email: ${personalData.email} | Location: ${personalData.location}
GitHub: ${personalData.github} | LinkedIn: ${personalData.linkedin}

PROFESSIONAL SUMMARY
${personalData.shortIntro}
${personalData.brandStatement}

EXPERIENCE
${experienceData.map((e) => `- ${e.role} @ ${e.organization} (${e.duration})\n  ${e.responsibilities[0]}`).join("\n")}

EDUCATION
${educationData.map((ed) => `- ${ed.degree} @ ${ed.institution} (${ed.duration}) | ${ed.score || ""}`).join("\n")}

FEATURED PROJECTS
${projectsData.map((p) => `- ${p.title} (${p.category}): ${p.tagline}\n  Tech: ${p.technologies.join(", ")}`).join("\n")}

TECHNICAL SKILLS
${skillsData.map((s) => `${s.title}: ${s.skills.map((sk) => sk.name).join(", ")}`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-3xl border border-slate-700/60 dark:border-white/15 bg-[#0b0f17] text-white shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Action Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-800 dark:border-white/10 flex items-center justify-between bg-slate-950/80 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-heading font-bold text-white">Curriculum Vitae</h2>
                <p className="text-xs font-mono text-slate-400">Interactive Resume Viewer</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Original PDF</span>
              </a>

              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? "Copied Plain Text" : "Copy Text"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:text-black">
            {/* Candidate Header */}
            <div className="border-b border-slate-800 dark:border-white/10 pb-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-heading font-extrabold text-white tracking-tight">
                    {personalData.name}
                  </h1>
                  <p className="text-sm font-mono text-blue-400 mt-1">{personalData.title}</p>
                </div>

                <div className="space-y-1 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>{personalData.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{personalData.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
                {personalData.socialLinks.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                  >
                    <SocialIcon iconName={s.iconName} className="w-3.5 h-3.5" />
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {personalData.shortIntro} {personalData.bio[0]}
              </p>
            </div>

            {/* Technical Skills Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>Core Competencies & Technical Skills</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {skillsData.map((category) => (
                  <div
                    key={category.categoryKey}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 dark:border-white/5 space-y-1.5"
                  >
                    <span className="font-mono text-slate-400 font-bold block">{category.title}</span>
                    <p className="text-slate-200 leading-normal">
                      {category.skills.map((s) => s.name).join(" • ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Work & Leadership Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience & Roles</span>
              </h3>
              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 dark:border-white/5 space-y-2"
                  >
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-heading font-bold text-white text-base">{exp.role}</h4>
                        <span className="text-xs font-mono text-blue-400">{exp.organization}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="text-xs text-slate-300 leading-relaxed list-disc pl-4 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                <span>Key Featured Projects</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectsData.slice(0, 4).map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 dark:border-white/5 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-white text-sm">{proj.title}</h4>
                      <span className="text-[10px] font-mono text-amber-400">{proj.year}</span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2">{proj.description}</p>
                    <div className="text-[11px] font-mono text-slate-400">
                      <span className="text-slate-500">Tech: </span>
                      {proj.technologies.slice(0, 4).join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h3>
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 dark:border-white/5 flex items-center justify-between flex-wrap gap-2"
                >
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">{edu.degree}</h4>
                    <p className="text-xs font-mono text-slate-400">{edu.institution}</p>
                    <p className="text-[11px] font-mono text-purple-400 mt-0.5">{edu.specialization}</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="text-blue-400 block">{edu.duration}</span>
                    {edu.score && <span className="text-emerald-400 text-[11px]">{edu.score}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
