"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalData } from "@/data/personal";
import { Github, Star, GitFork, BookOpen, Flame, ExternalLink, Code2 } from "lucide-react";

export function GithubSection() {
  const mockRepos = [
    {
      name: "sentinel-ai",
      description: "Autonomous cyber reasoning & verified defense platform using AST static analysis & Gemini API.",
      stars: 48,
      forks: 12,
      language: "Python",
      langColor: "bg-blue-500",
    },
    {
      name: "flora-ai",
      description: "AI-powered document intelligence platform extracting product information from PDFs, images & Excel.",
      stars: 38,
      forks: 9,
      language: "Python",
      langColor: "bg-blue-500",
    },
    {
      name: "easeattend",
      description: "Smart attendance management system with separate Student, Teacher & HOD approval dashboards.",
      stars: 32,
      forks: 7,
      language: "JavaScript",
      langColor: "bg-yellow-400",
    },
  ];

  return (
    <section className="py-20 relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        badge="Open Source & Activity"
        title="GitHub Developer Insights"
        subtitle="Continuous commit streaks, open-source projects, and developer contributions."
      />

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-2xl glass-panel border border-slate-700/50 dark:border-white/10 text-center">
          <Github className="w-5 h-5 text-blue-400 mx-auto mb-2" />
          <span className="text-xl font-heading font-bold text-slate-900 dark:text-white block">
            450+
          </span>
          <span className="text-[10px] font-mono text-slate-400 uppercase">Commits Past Year</span>
        </div>

        <div className="p-4 rounded-2xl glass-panel border border-slate-700/50 dark:border-white/10 text-center">
          <BookOpen className="w-5 h-5 text-purple-400 mx-auto mb-2" />
          <span className="text-xl font-heading font-bold text-slate-900 dark:text-white block">
            25+
          </span>
          <span className="text-[10px] font-mono text-slate-400 uppercase">Public Repos</span>
        </div>

        <div className="p-4 rounded-2xl glass-panel border border-slate-700/50 dark:border-white/10 text-center">
          <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
          <span className="text-xl font-heading font-bold text-slate-900 dark:text-white block">
            120+
          </span>
          <span className="text-[10px] font-mono text-slate-400 uppercase">Total Stars</span>
        </div>

        <div className="p-4 rounded-2xl glass-panel border border-slate-700/50 dark:border-white/10 text-center">
          <Flame className="w-5 h-5 text-rose-400 mx-auto mb-2" />
          <span className="text-xl font-heading font-bold text-slate-900 dark:text-white block">
            42 Days
          </span>
          <span className="text-[10px] font-mono text-slate-400 uppercase">Longest Streak</span>
        </div>
      </div>

      {/* Featured GitHub Repositories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mockRepos.map((repo, idx) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl glass-panel border border-slate-700/50 dark:border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-slate-900 dark:text-white text-base truncate">
                  {repo.name}
                </span>
                <Github className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                {repo.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800 dark:border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                <span>{repo.language}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-slate-400" />
                  {repo.forks}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-slate-700 dark:border-white/10 text-xs font-bold text-slate-200 hover:text-white hover:border-blue-500/40 transition-all"
        >
          <Github className="w-4 h-4 text-blue-400" />
          <span>Visit GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
