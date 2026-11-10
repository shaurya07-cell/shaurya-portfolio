"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationData } from "@/data/education";
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
      <SectionHeading
        badge="Academic Foundation"
        title="Education & Honors"
        subtitle="Solid theoretical computer science training coupled with hands-on technical achievements."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="p-8 rounded-2xl glass-panel border border-slate-700/50 dark:border-white/10 hover:border-purple-500/40 transition-all glow-card flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Institution & Score Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                {item.score && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {item.score}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-purple-400 mt-1">{item.institution}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-b border-slate-800 dark:border-white/10 pb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  {item.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {item.location}
                </span>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Highlights & Achievements:
                </span>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework Tags */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Key Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/60 dark:bg-white/5 text-slate-300 border border-slate-700/50 dark:border-white/10"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
