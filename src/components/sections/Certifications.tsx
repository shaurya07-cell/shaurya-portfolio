"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificationsData } from "@/data/certifications";
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        badge="Verified Skills"
        title="Professional Certifications"
        subtitle="Industry certifications and specialized technical masterclasses."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-2xl glass-panel border border-slate-700/50 dark:border-white/10 hover:border-blue-500/40 transition-all glow-card flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-700/50 dark:border-white/10">
                  ID: {cert.credentialId}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-blue-400 mt-0.5">{cert.provider}</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>Issued: {cert.date}</span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                  Skills Validated:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/60 dark:bg-white/5 text-slate-300 border border-slate-700/40 dark:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 dark:border-white/10">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>View Verified Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
