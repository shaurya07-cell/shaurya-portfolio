"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Search,
  Home,
  Briefcase,
  Code2,
  Trophy,
  GraduationCap,
  Mail,
  FileText,
  Github,
  Linkedin,
  Sun,
  Moon,
  Sparkles,
  X,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { SocialIcon } from "@/components/ui/SocialIcon";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Actions" | "Social";
  icon: React.ReactNode;
  perform: () => void;
}

interface CommandPaletteProps {
  onOpenResume?: () => void;
}

export function CommandPalette({ onOpenResume }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = [
    {
      id: "nav-home",
      label: "Go to Home",
      category: "Navigation",
      icon: <Home className="w-4 h-4 text-blue-400" />,
      perform: () => scrollTo("hero"),
    },
    {
      id: "nav-about",
      label: "View About Me",
      category: "Navigation",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      perform: () => scrollTo("about"),
    },
    {
      id: "nav-projects",
      label: "Explore Projects Showcase",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      perform: () => scrollTo("projects"),
    },
    {
      id: "nav-journey",
      label: "View My Story & Timeline",
      category: "Navigation",
      icon: <GraduationCap className="w-4 h-4 text-amber-400" />,
      perform: () => scrollTo("journey"),
    },
    {
      id: "nav-skills",
      label: "Technical Skills Matrix",
      category: "Navigation",
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo("skills"),
    },
    {
      id: "nav-achievements",
      label: "Achievements & Honors",
      category: "Navigation",
      icon: <Trophy className="w-4 h-4 text-pink-400" />,
      perform: () => scrollTo("achievements"),
    },
    {
      id: "nav-contact",
      label: "Contact & Collaborations",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      perform: () => scrollTo("contact"),
    },
    {
      id: "act-theme",
      label: `Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`,
      category: "Actions",
      icon: theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />,
      perform: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsOpen(false);
      },
    },
    {
      id: "act-resume",
      label: "View & Download Resume (PDF)",
      category: "Actions",
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      perform: () => {
        setIsOpen(false);
        window.open(personalData.resumeUrl, "_blank");
      },
    },
    ...personalData.socialLinks.map((s) => ({
      id: `social-${s.id}`,
      label: `Open ${s.name}`,
      category: "Social" as const,
      icon: <SocialIcon iconName={s.iconName} className="w-4 h-4 text-blue-400" />,
      perform: () => {
        window.open(s.url, "_blank");
        setIsOpen(false);
      },
    })),
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  // Listen for Ctrl+K, Cmd+K, ArrowUp, ArrowDown, Enter, Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSelectedIndex(0);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      } else if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            filteredCommands.length > 0 ? (prev + 1) % filteredCommands.length : 0
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            filteredCommands.length > 0
              ? (prev - 1 + filteredCommands.length) % filteredCommands.length
              : 0
          );
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].perform();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  // Reset selected index when search query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <>
      {/* Floating launch pill trigger visible at desktop bottom right */}
      <button
        onClick={() => {
          setIsOpen(true);
          setSelectedIndex(0);
        }}
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-slate-700/50 dark:border-white/10 text-xs font-mono text-slate-300 hover:text-white shadow-xl transition-all hover:scale-105"
        aria-label="Open Command Palette"
      >
        <Search className="w-3.5 h-3.5 text-blue-400" />
        <span>Command Menu</span>
        <kbd className="px-1.5 py-0.5 rounded bg-slate-800 dark:bg-white/10 text-[10px] text-slate-300">
          Ctrl K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[250] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl glass-panel rounded-2xl border border-slate-700/60 dark:border-white/15 bg-[#0b0f17]/95 dark:bg-[#080c14]/95 shadow-2xl overflow-hidden z-10"
            >
              {/* Search Bar Input */}
              <div className="flex items-center px-4 py-3.5 border-b border-slate-800 dark:border-white/10">
                <Search className="w-5 h-5 text-blue-400 mr-3" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search section..."
                  autoFocus
                  className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none text-sm font-medium"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-slate-400 hover:text-white rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                {filteredCommands.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-400">
                    No matching command found.
                  </div>
                ) : (
                  filteredCommands.map((cmd, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={cmd.id}
                        onClick={cmd.perform}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors group text-left ${
                          isSelected
                            ? "bg-blue-600/20 text-white border border-blue-500/30"
                            : "hover:bg-blue-500/10 dark:hover:bg-white/5 text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg transition-colors ${
                              isSelected
                                ? "bg-blue-500 text-white"
                                : "bg-slate-800/80 dark:bg-white/5 group-hover:bg-blue-500/20"
                            }`}
                          >
                            {cmd.icon}
                          </div>
                          <span
                            className={`text-sm font-medium ${
                              isSelected ? "text-white font-semibold" : "group-hover:text-white"
                            }`}
                          >
                            {cmd.label}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                          {cmd.category}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2.5 bg-slate-900/50 dark:bg-black/40 border-t border-slate-800 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Tip: Use ↑ ↓ keys to navigate, Enter to select</span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded bg-slate-800 dark:bg-white/10">ESC</kbd> to close
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

