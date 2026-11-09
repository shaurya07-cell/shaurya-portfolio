"use client";

import { useEffect, useState } from "react";
import { personalData } from "@/data/personal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Github, Linkedin, Mail, Heart, Clock } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 border-t border-slate-800 dark:border-white/10 glass-panel py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Column: Brand & Tagline */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-heading font-bold text-xl text-slate-900 dark:text-white">
              {personalData.name}
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Designed & built with curiosity, clean code, and engineering precision.
          </p>
        </div>

        {/* Middle Column: Dynamic Live Local Clock */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-slate-700/50 dark:border-white/10 text-xs font-mono text-slate-300">
          <Clock className="w-3.5 h-3.5 text-blue-400" />
          <span>Local Time: {time || "00:00:00"}</span>
        </div>

        {/* Right Column: Social Links & Copyright */}
        <div className="space-y-2 text-center md:text-right">
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            {personalData.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all p-1"
                aria-label={social.name}
                title={social.name}
              >
                <SocialIcon iconName={social.iconName} className="w-4 h-4" />
              </a>
            ))}
            <a
              href={`mailto:${personalData.email}`}
              className="text-slate-400 hover:text-rose-400 hover:scale-110 transition-all p-1"
              aria-label="Email Contact"
              title="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[11px] font-mono text-slate-500">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
